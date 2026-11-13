import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dictDir = join(root, "i18n", "dictionaries");
const locales = ["en", "fa", "zh", "pa"];
const agricultureContent = JSON.parse(
  readFileSync(join(dirname(fileURLToPath(import.meta.url)), "agriculture-content.json"), "utf8"),
);

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

const homeUpdates = {
  en: {
    metadata:
      "IndustrialOrigami.AI develops practical AI, robotics, software, data, mechanical and CAD engineering, agricultural research and environmental analytics capability in New Zealand.",
    description:
      "IndustrialOrigami.AI combines artificial intelligence, robotics, software, data, mechanical and CAD engineering, and agricultural and environmental research to solve real-world industrial, engineering and research problems.",
    servicesDescription:
      "Explore capabilities spanning AI, robotics, software, data, mechanical and CAD engineering, agriculture and environmental research.",
    projectsDescription:
      "Our work spans robotic systems, agentic AI, predictive analytics, mechanical CAD, agriculture, water and environmental research.",
  },
  fa: {
    metadata:
      "IndustrialOrigami.AI در نیوزیلند در حوزه هوش مصنوعی، رباتیک، نرم‌افزار، داده، مهندسی مکانیک و CAD، پژوهش کشاورزی و تحلیل‌های محیط‌زیستی فعالیت می‌کند.",
    description:
      "IndustrialOrigami.AI هوش مصنوعی، رباتیک، نرم‌افزار، داده، مهندسی مکانیک و CAD و پژوهش‌های کشاورزی و محیط‌زیستی را برای حل مسائل واقعی صنعت، مهندسی و پژوهش ترکیب می‌کند.",
    servicesDescription:
      "توانمندی‌های ما در هوش مصنوعی، رباتیک، نرم‌افزار، داده، مهندسی مکانیک و CAD، کشاورزی و پژوهش‌های محیط‌زیستی را بررسی کنید.",
    projectsDescription:
      "فعالیت‌های ما شامل رباتیک، هوش عامل‌محور، تحلیل پیش‌بینانه، CAD مکانیکی، کشاورزی، آب و پژوهش‌های محیط‌زیستی است.",
  },
  zh: {
    metadata:
      "IndustrialOrigami.AI 在新西兰开展人工智能、机器人、软件、数据、机械与 CAD 工程、农业研究和环境分析工作。",
    description:
      "IndustrialOrigami.AI 将人工智能、机器人、软件、数据、机械与 CAD 工程，以及农业与环境研究结合起来，解决真实的工业、工程和研究问题。",
    servicesDescription:
      "探索我们在人工智能、机器人、软件、数据、机械与 CAD 工程、农业和环境研究方面的能力。",
    projectsDescription:
      "我们的项目涵盖机器人系统、智能体 AI、预测分析、机械 CAD、农业、水资源和环境研究。",
  },
  pa: {
    metadata:
      "IndustrialOrigami.AI ਨਿਊਜ਼ੀਲੈਂਡ ਵਿੱਚ AI, ਰੋਬੋਟਿਕਸ, ਸਾਫਟਵੇਅਰ, ਡਾਟਾ, ਮਕੈਨਿਕਲ ਅਤੇ CAD ਇੰਜੀਨੀਅਰਿੰਗ, ਖੇਤੀਬਾੜੀ ਖੋਜ ਅਤੇ ਵਾਤਾਵਰਣੀ ਵਿਸ਼ਲੇਸ਼ਣ ਵਿਕਸਿਤ ਕਰਦਾ ਹੈ।",
    description:
      "IndustrialOrigami.AI ਅਸਲ ਉਦਯੋਗਿਕ, ਇੰਜੀਨੀਅਰਿੰਗ ਅਤੇ ਖੋਜ ਸਮੱਸਿਆਵਾਂ ਹੱਲ ਕਰਨ ਲਈ AI, ਰੋਬੋਟਿਕਸ, ਸਾਫਟਵੇਅਰ, ਡਾਟਾ, ਮਕੈਨਿਕਲ ਅਤੇ CAD ਇੰਜੀਨੀਅਰਿੰਗ, ਅਤੇ ਖੇਤੀਬਾੜੀ ਤੇ ਵਾਤਾਵਰਣ ਖੋਜ ਨੂੰ ਜੋੜਦਾ ਹੈ।",
    servicesDescription:
      "AI, ਰੋਬੋਟਿਕਸ, ਸਾਫਟਵੇਅਰ, ਡਾਟਾ, ਮਕੈਨਿਕਲ ਅਤੇ CAD ਇੰਜੀਨੀਅਰਿੰਗ, ਖੇਤੀਬਾੜੀ ਅਤੇ ਵਾਤਾਵਰਣ ਖੋਜ ਵਿੱਚ ਸਾਡੀਆਂ ਸਮਰੱਥਾਵਾਂ ਵੇਖੋ।",
    projectsDescription:
      "ਸਾਡਾ ਕੰਮ ਰੋਬੋਟਿਕ ਸਿਸਟਮਾਂ, ਏਜੈਂਟਿਕ AI, ਭਵਿੱਖਬਾਣੀ ਵਿਸ਼ਲੇਸ਼ਣ, ਮਕੈਨਿਕਲ CAD, ਖੇਤੀਬਾੜੀ, ਪਾਣੀ ਅਤੇ ਵਾਤਾਵਰਣ ਖੋਜ ਤੱਕ ਫੈਲਿਆ ਹੋਇਆ ਹੈ।",
  },
};

for (const locale of locales) {
  const path = join(dictDir, `${locale}.json`);
  let dictionary = JSON.parse(readFileSync(path, "utf8"));

  if (locale === "fa" || locale === "zh") {
    dictionary = repairDeep(dictionary);
  }

  const home = homeUpdates[locale];
  dictionary.metadata.description = home.metadata;
  dictionary.home.description = home.description;
  dictionary.home.servicesDescription = home.servicesDescription;
  dictionary.home.projectsDescription = home.projectsDescription;

  const project = agricultureContent[locale].project;

  dictionary.projects.items = [
    ...dictionary.projects.items.filter(
      (item) => item.slug !== "agriculture-industry-research-projects",
    ),
    project,
  ];

  dictionary.projects.agricultureProjects = agricultureContent[locale].page;

  writeFileSync(path, `${JSON.stringify(dictionary, null, 2)}\n`, "utf8");
  console.log(`Updated ${locale} dictionary`);
}

console.log("Agriculture project content added and Persian/Chinese mojibake repaired.");
