import type { Locale } from "./config";

import en from "./dictionaries/en.json";
import fa from "./dictionaries/fa.json";
import zh from "./dictionaries/zh.json";
import pa from "./dictionaries/pa.json";

export type Dictionary = typeof en;

const dictionaries: Record<Locale, Dictionary> = {
  en,
  fa,
  zh,
  pa,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
