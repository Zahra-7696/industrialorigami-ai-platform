import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();

const teamPath = join(root, "lib", "team.ts");
let team = readFileSync(teamPath, "utf8");
const lilianBlock = /\n\s*\{\s*\n\s*id:\s*"lilian",[\s\S]*?\n\s*\},/m;

if (lilianBlock.test(team)) {
  team = team.replace(lilianBlock, "");
  writeFileSync(teamPath, team, "utf8");
  console.log("Removed Lilian from lib/team.ts");
} else {
  console.log("Lilian already absent from lib/team.ts");
}

for (const locale of ["en", "fa", "zh", "pa"]) {
  const path = join(root, "i18n", "dictionaries", `${locale}.json`);
  const dictionary = JSON.parse(readFileSync(path, "utf8"));

  if (!Array.isArray(dictionary.about?.team)) {
    throw new Error(`Invalid about.team in ${locale}.json`);
  }

  const before = dictionary.about.team.length;
  dictionary.about.team = dictionary.about.team.filter(
    (member) => String(member.name ?? "").trim().toLowerCase() !== "lilian",
  );

  writeFileSync(path, `${JSON.stringify(dictionary, null, 2)}\n`, "utf8");
  console.log(
    dictionary.about.team.length < before
      ? `Removed Lilian from ${locale}.json`
      : `Lilian already absent from ${locale}.json`,
  );
}

console.log("Done.");
