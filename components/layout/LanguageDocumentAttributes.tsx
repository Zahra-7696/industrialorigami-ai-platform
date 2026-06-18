"use client";

import { useEffect } from "react";

import type { Locale } from "@/i18n/config";
import { getDirection } from "@/i18n/config";

type LanguageDocumentAttributesProps = {
  locale: Locale;
};

export function LanguageDocumentAttributes({
  locale,
}: LanguageDocumentAttributesProps) {
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = getDirection(locale);
  }, [locale]);

  return null;
}
