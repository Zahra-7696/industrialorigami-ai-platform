export const locales = ["en", "fa", "zh", "pa"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

/**
 * Returns the document direction for a locale.
 * Persian is RTL; English, Chinese and Punjabi (Gurmukhi) are LTR.
 */
export function getDirection(locale: Locale): "ltr" | "rtl" {
  return locale === "fa" ? "rtl" : "ltr";
}

// Compatibility alias for any newer components that use localeDirection.
export const localeDirection = getDirection;
