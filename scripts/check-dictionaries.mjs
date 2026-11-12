import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const dir = join(dirname(fileURLToPath(import.meta.url)), "..", "i18n", "dictionaries");
const locales = ["fa", "zh", "pa"];
const verbose = process.argv.includes("--verbose");
const strict = process.argv.includes("--strict");

const load = (name) => JSON.parse(readFileSync(join(dir, `${name}.json`), "utf8"));

function flatten(value, path = "", out = new Map()) {
  if (Array.isArray(value)) {
    out.set(`${path}[]`, value.length);
    value.forEach((item, i) => flatten(item, `${path}[${i}]`, out));
  } else if (value && typeof value === "object") {
    for (const key of Object.keys(value)) {
      flatten(value[key], path ? `${path}.${key}` : key, out);
    }
  } else {
    out.set(path, value);
  }
  return out;
}

// Identity strings, slugs and very short labels are legitimately the same in every language.
function needsTranslation(key, value) {
  if (typeof value !== "string") return false;
  if (/(^|\.)slug$/.test(key)) return false;
  return value.trim().split(/\s+/).length >= 3;
}

const en = flatten(load("en"));
let errors = 0;

for (const locale of locales) {
  const other = flatten(load(locale));
  const problems = [];

  for (const [key, value] of en) {
    if (!other.has(key)) problems.push(`missing: ${key}`);
    else if (key.endsWith("[]") && other.get(key) !== value) {
      problems.push(`array length ${other.get(key)} (en has ${value}): ${key}`);
    }
  }
  for (const key of other.keys()) {
    if (!en.has(key)) problems.push(`extra: ${key}`);
  }

  const untranslated = [...en]
    .filter(([key, value]) => needsTranslation(key, value) && other.get(key) === value)
    .map(([key]) => key);

  const bySection = {};
  for (const key of untranslated) {
    const section = key.split(/[.[]/)[0];
    bySection[section] = (bySection[section] ?? 0) + 1;
  }

  console.log(`\n${locale}: ${problems.length} structure problem(s), ${untranslated.length} string(s) identical to English`);
  if (untranslated.length) console.log(`  by section: ${JSON.stringify(bySection)}`);
  for (const problem of problems) console.log(`  ERROR ${problem}`);
  if (verbose) for (const key of untranslated) console.log(`  untranslated: ${key}`);

  errors += problems.length;
  if (strict) errors += untranslated.length;
}

if (errors) {
  console.error(`\nDictionary check failed with ${errors} problem(s).`);
  process.exit(1);
}
console.log("\nDictionary structure check passed.");
