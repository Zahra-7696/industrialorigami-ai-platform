import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();

// 1) Make LinkedIn label orange like Email.
const aboutPath = join(root, "components", "pages", "AboutPage.tsx");
let about = readFileSync(aboutPath, "utf8");

const oldClass =
  'className="inline-flex items-center gap-1 text-xs font-black uppercase tracking-wider text-[#0A66C2] underline decoration-[#0A66C2]/40 underline-offset-4 transition hover:text-[#084d94]"';

const newClass =
  'className="inline-flex items-center gap-1 text-xs font-black uppercase tracking-wider text-brand-orange underline decoration-brand-orange/40 underline-offset-4 transition hover:text-brand-700"';

if (about.includes(oldClass)) {
  about = about.replace(oldClass, newClass);
  writeFileSync(aboutPath, about, "utf8");
  console.log("Updated LinkedIn label colour to orange.");
} else if (about.includes("text-brand-orange")) {
  console.log("LinkedIn label already appears to use orange styling.");
} else {
  throw new Error(
    "Could not find the expected LinkedIn label styling in AboutPage.tsx.",
  );
}

// 2) Update David's role in all languages.
const roles = {
  en: "Founder, Managing Director and Financial Manager",
  fa: "بنیان‌گذار، مدیرعامل و مدیر مالی",
  zh: "创始人、董事总经理兼财务经理",
  pa: "ਸੰਸਥਾਪਕ, ਮੈਨੇਜਿੰਗ ਡਾਇਰੈਕਟਰ ਅਤੇ ਫਾਇਨੈਂਸ਼ਲ ਮੈਨੇਜਰ",
};

for (const [locale, role] of Object.entries(roles)) {
  const path = join(root, "i18n", "dictionaries", `${locale}.json`);
  const dictionary = JSON.parse(readFileSync(path, "utf8"));

  if (!Array.isArray(dictionary.about?.team)) {
    throw new Error(`Invalid about.team in ${locale}.json`);
  }

  const david = dictionary.about.team.find(
    (member) => String(member.name ?? "").trim().toLowerCase() === "david ewing",
  );

  if (!david) {
    throw new Error(`David Ewing not found in ${locale}.json`);
  }

  david.role = role;

  writeFileSync(
    path,
    `${JSON.stringify(dictionary, null, 2)}\n`,
    "utf8",
  );

  console.log(`Updated David role in ${locale}.json`);
}

console.log("Done.");
