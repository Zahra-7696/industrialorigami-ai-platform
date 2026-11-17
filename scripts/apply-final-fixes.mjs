import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();

function replaceRequired(content, oldText, newText, label) {
  if (content.includes(newText)) {
    console.log(`Already updated: ${label}`);
    return content;
  }
  if (!content.includes(oldText)) {
    throw new Error(`Could not find expected text for: ${label}`);
  }
  console.log(`Updated: ${label}`);
  return content.replace(oldText, newText);
}

const roboticPath = join(root, "lib", "robotic-hand-content.ts");
let robotic = readFileSync(roboticPath, "utf8");

robotic = replaceRequired(
  robotic,
  "The complete concept may use approximately fifteen actuators, with each joint requiring suitable drive electronics and current protection.",
  "The complete concept may support up to 20 actuator modules, with each joint requiring suitable drive electronics and current protection.",
  "English robotic-hand capacity",
);

robotic = replaceRequired(
  robotic,
  "طرح کامل می‌تواند حدود پانزده محرک داشته باشد و هر مفصل به درایو و حفاظت جریان نیاز دارد.",
  "طرح کامل می‌تواند تا ۲۰ ماژول محرک را پشتیبانی کند و هر مفصل به درایو مناسب و حفاظت جریان نیاز دارد.",
  "Persian robotic-hand capacity",
);

robotic = replaceRequired(
  robotic,
  "完整概念可能使用约十五个执行器，每个关节需要驱动电子设备和电流保护。",
  "完整概念可支持最多 20 个执行器模块，每个关节都需要合适的驱动电子设备和电流保护。",
  "Chinese robotic-hand capacity",
);

robotic = replaceRequired(
  robotic,
  "ਪੂਰੇ ਸੰਕਲਪ ਵਿੱਚ ਲਗਭਗ ਪੰਦਰਾਂ actuators ਹੋ ਸਕਦੇ ਹਨ, ਅਤੇ ਹਰ joint ਲਈ ਢੁੱਕਵੇਂ drive electronics ਅਤੇ current protection ਦੀ ਲੋੜ ਹੁੰਦੀ ਹੈ।",
  "ਪੂਰਾ ਸੰਕਲਪ 20 ਤੱਕ actuator modules ਨੂੰ support ਕਰ ਸਕਦਾ ਹੈ, ਅਤੇ ਹਰ joint ਲਈ ਢੁੱਕਵੇਂ drive electronics ਅਤੇ current protection ਦੀ ਲੋੜ ਹੁੰਦੀ ਹੈ।",
  "Punjabi robotic-hand capacity",
);

writeFileSync(roboticPath, robotic, "utf8");

const paPath = join(root, "i18n", "dictionaries", "pa.json");
const pa = JSON.parse(readFileSync(paPath, "utf8"));

pa.about.companyFacts[6].label = "ਨਿਯੋਗਕਰਤਾ ਮਾਨਤਾ";

const agentic = pa.projects.items.find(
  (item) => item.slug === "industrial-agentic-ai-platform",
);
if (!agentic) throw new Error("Agentic AI project not found in Punjabi dictionary.");
agentic.roadmap[0].title = "ਗਿਆਨ ਦੀ ਬੁਨਿਆਦ";
agentic.roadmap[2].title = "ਉਤਪਾਦਨ-ਪੱਧਰੀ ਮੁਲਾਂਕਣ";

const cad = pa.projects.items.find(
  (item) => item.slug === "engineering-cad",
);
if (!cad) throw new Error("Engineering CAD project not found in Punjabi dictionary.");
cad.roadmap[0].title = "ਲੋੜਾਂ ਅਤੇ ਸੰਕਲਪ";
cad.roadmap[2].title = "ਪ੍ਰੋਟੋਟਾਈਪ ਅਤੇ ਪ੍ਰਮਾਣਿਕਤਾ";

pa.careers.application.interestOptions[0] = "AI / ਮਸ਼ੀਨ ਲਰਨਿੰਗ";
pa.careers.application.workRightOptions[2] = "ਸਥਾਈ ਨਿਵਾਸੀ ਵੀਜ਼ਾ";
pa.careers.application.workRightOptions[3] =
  "ਮਾਨਤਾ ਪ੍ਰਾਪਤ ਨਿਯੋਗਕਰਤਾ ਕੰਮ ਵੀਜ਼ਾ";
pa.careers.application.workRightOptions[4] =
  "ਪੜ੍ਹਾਈ ਤੋਂ ਬਾਅਦ ਕੰਮ ਵੀਜ਼ਾ";

writeFileSync(paPath, `${JSON.stringify(pa, null, 2)}\n`, "utf8");
console.log("Finished remaining Punjabi dictionary translations.");

const checkerPath = join(root, "scripts", "check-dictionaries.mjs");
let checker = readFileSync(checkerPath, "utf8");

if (!checker.includes('value === "IndustrialOrigami.AI"')) {
  const needle = 'if (typeof value !== "string") return false;';
  if (!checker.includes(needle)) {
    throw new Error("Could not find the string guard in dictionary checker.");
  }
  checker = checker.replace(
    needle,
    `${needle}\n  if (value === "IndustrialOrigami.AI") return false;`,
  );
  writeFileSync(checkerPath, checker, "utf8");
  console.log("Exempted company brand from strict translation audit.");
}

console.log("All source fixes applied.");
