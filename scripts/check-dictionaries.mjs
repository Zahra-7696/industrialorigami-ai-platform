import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const dir = join(
  dirname(fileURLToPath(import.meta.url)),
  "..",
  "i18n",
  "dictionaries",
);

const locales = ["fa", "zh", "pa"];
const strict = process.argv.includes("--strict");
const verbose = process.argv.includes("--verbose");

const mojibakeMarkers = [
  "Ã", "Â", "Ø", "Ù", "Û", "å", "æ", "ç", "ä", "é", "è", "ð", "â", "ï¿½",
];

function load(locale) {
  return JSON.parse(
    readFileSync(join(dir, `${locale}.json`), "utf8"),
  );
}

function flatten(value, path = "", out = new Map()) {
  if (Array.isArray(value)) {
    out.set(`${path}[]`, value.length);
    value.forEach((item, index) =>
      flatten(item, `${path}[${index}]`, out),
    );
  } else if (value && typeof value === "object") {
    for (const [key, item] of Object.entries(value)) {
      flatten(item, path ? `${path}.${key}` : key, out);
    }
  } else {
    out.set(path, value);
  }

  return out;
}

function containsMojibake(value) {
  return (
    typeof value === "string" &&
    mojibakeMarkers.some((marker) => value.includes(marker))
  );
}

function shouldBeLocalised(path, value) {
  if (typeof value !== "string") return false;
  if (value === "IndustrialOrigami.AI") return false;
  if (value.trim().length < 18) return false;

  if (
    /\.(slug|src|image|email|linkedin)$/.test(path) ||
    /\.technolog(y|ies)\[\d+\]$/.test(path) ||
    /\.name$/.test(path)
  ) {
    return false;
  }

  return true;
}

const en = flatten(load("en"));
let failures = 0;

for (const locale of locales) {
  const other = flatten(load(locale));
  const problems = [];
  const identical = [];

  for (const [path, value] of en) {
    if (!other.has(path)) {
      problems.push(`missing: ${path}`);
      continue;
    }

    if (
      path.endsWith("[]") &&
      other.get(path) !== value
    ) {
      problems.push(
        `array length mismatch: ${path} (${other.get(path)} vs ${value})`,
      );
      continue;
    }

    if (
      shouldBeLocalised(path, value) &&
      other.get(path) === value
    ) {
      identical.push(path);
    }
  }

  for (const path of other.keys()) {
    if (!en.has(path)) {
      problems.push(`extra: ${path}`);
    }
  }

  for (const [path, value] of other) {
    if (containsMojibake(value)) {
      problems.push(`mojibake: ${path}`);
    }
  }

  console.log(
    `\n${locale}: ${problems.length} structure/encoding problem(s), ${identical.length} long string(s) still identical to English`,
  );

  for (const problem of problems) {
    console.log(`  ERROR ${problem}`);
  }

  if (verbose || strict) {
    for (const path of identical) {
      console.log(`  IDENTICAL ${path}`);
    }
  }

  failures += problems.length;
  if (strict) failures += identical.length;
}

if (failures > 0) {
  console.error(`\nDictionary check failed with ${failures} problem(s).`);
  process.exit(1);
}

console.log("\nDictionary structure and encoding check passed.");
