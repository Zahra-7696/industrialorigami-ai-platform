import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dictDir = join(root, "i18n", "dictionaries");
const translationData = JSON.parse(
  readFileSync(join(dirname(fileURLToPath(import.meta.url)), "translation-data.json"), "utf8"),
);

const locales = ["fa", "zh", "pa"];

const cp1252Special = new Map([
  ["€", 0x80], ["‚", 0x82], ["ƒ", 0x83], ["„", 0x84], ["…", 0x85],
  ["†", 0x86], ["‡", 0x87], ["ˆ", 0x88], ["‰", 0x89], ["Š", 0x8a],
  ["‹", 0x8b], ["Œ", 0x8c], ["Ž", 0x8e], ["‘", 0x91], ["’", 0x92],
  ["“", 0x93], ["”", 0x94], ["•", 0x95], ["–", 0x96], ["—", 0x97],
  ["˜", 0x98], ["™", 0x99], ["š", 0x9a], ["›", 0x9b], ["œ", 0x9c],
  ["ž", 0x9e], ["Ÿ", 0x9f],
]);

const mojibakeMarkers = [
  "Ã", "Â", "Ø", "Ù", "Û", "å", "æ", "ç", "ä", "é", "è", "ð", "â", "ï¿½",
];

function mojibakeScore(value) {
  return mojibakeMarkers.reduce(
    (score, marker) => score + value.split(marker).length - 1,
    0,
  );
}

function repairOnce(value) {
  if (mojibakeScore(value) === 0) return value;

  const bytes = [];
  for (const char of value) {
    const code = char.codePointAt(0);
    if (code <= 0xff) {
      bytes.push(code);
      continue;
    }
    if (cp1252Special.has(char)) {
      bytes.push(cp1252Special.get(char));
      continue;
    }
    return value;
  }

  try {
    const decoded = new TextDecoder("utf-8", { fatal: true }).decode(
      Uint8Array.from(bytes),
    );
    return mojibakeScore(decoded) < mojibakeScore(value) ? decoded : value;
  } catch {
    return value;
  }
}

function repairString(value) {
  let current = value;
  for (let i = 0; i < 3; i += 1) {
    const repaired = repairOnce(current);
    if (repaired === current) break;
    current = repaired;
  }
  return current;
}

function repairDeep(value) {
  if (typeof value === "string") return repairString(value);
  if (Array.isArray(value)) return value.map(repairDeep);
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, repairDeep(item)]),
    );
  }
  return value;
}

function deepMerge(base, patch) {
  if (Array.isArray(patch)) return structuredClone(patch);
  if (!patch || typeof patch !== "object") return patch;

  const result =
    base && typeof base === "object" && !Array.isArray(base)
      ? structuredClone(base)
      : {};

  for (const [key, value] of Object.entries(patch)) {
    if (Array.isArray(value)) {
      result[key] = structuredClone(value);
    } else if (value && typeof value === "object") {
      result[key] = deepMerge(result[key], value);
    } else {
      result[key] = value;
    }
  }

  return result;
}

function replaceBySlug(items, updates) {
  if (!updates) return items;
  return items.map((item) =>
    updates[item.slug] ? deepMerge(item, updates[item.slug]) : item,
  );
}

const enPath = join(dictDir, "en.json");
const en = JSON.parse(readFileSync(enPath, "utf8"));
const enExtras = translationData.en;

en.about.contactLabels = enExtras.aboutExtras.contactLabels;
en.about.team = en.about.team.map((member, index) => ({
  ...member,
  degree: enExtras.aboutExtras.degrees[index] ?? "",
}));

en.careers.detail = enExtras.careersExtras.detail;
en.careers.application = enExtras.careersExtras.application;
en.auth = deepMerge(en.auth, enExtras.authExtras);
en.collaborate.form = deepMerge(
  en.collaborate.form,
  enExtras.collaborateFormExtras,
);

writeFileSync(enPath, `${JSON.stringify(en, null, 2)}\n`, "utf8");
console.log("Updated en dictionary schema.");

for (const locale of locales) {
  const localePath = join(dictDir, `${locale}.json`);

  let current = existsSync(localePath)
    ? JSON.parse(readFileSync(localePath, "utf8"))
    : {};

  current = repairDeep(current);

  // Begin from English so every locale has exactly the same schema, then
  // retain existing good translations and apply the completed translations.
  let target = deepMerge(en, current);
  const t = translationData[locale];

  target.about = deepMerge(target.about, t.about);
  target.services.items = replaceBySlug(
    target.services.items,
    t.servicesBySlug,
  );
  target.projects.items = replaceBySlug(
    target.projects.items,
    t.projectsBySlug,
  );
  target.collaborate = deepMerge(target.collaborate, t.collaborate);
  target.careers = deepMerge(target.careers, t.careersExtras);
  target.auth = deepMerge(target.auth, t.auth);
  target.footer = deepMerge(target.footer, t.footer);

  writeFileSync(
    localePath,
    `${JSON.stringify(target, null, 2)}\n`,
    "utf8",
  );

  console.log(`Updated ${locale} dictionary.`);
}

const packagePath = join(root, "package.json");
const pkg = JSON.parse(readFileSync(packagePath, "utf8"));
pkg.scripts = {
  ...pkg.scripts,
  "i18n:check": "node scripts/check-dictionaries.mjs",
};
writeFileSync(packagePath, `${JSON.stringify(pkg, null, 2)}\n`, "utf8");

console.log("Complete multilingual dictionary update finished.");
