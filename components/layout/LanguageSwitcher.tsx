"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { locales, type Locale } from "@/i18n/config";

const labels: Record<Locale, string> = {
  en: "EN",
  fa: "فا",
  zh: "中文",
};

type LanguageSwitcherProps = {
  currentLocale: Locale;
};

export function LanguageSwitcher({
  currentLocale,
}: LanguageSwitcherProps) {
  const pathname = usePathname();

  function localePath(locale: Locale): string {
    const segments = pathname.split("/").filter(Boolean);

    if (segments.length === 0) {
      return `/${locale}`;
    }

    if (locales.includes(segments[0] as Locale)) {
      segments[0] = locale;
      return `/${segments.join("/")}`;
    }

    return `/${locale}/${segments.join("/")}`;
  }

  return (
    <div
      aria-label="Language selector"
      className="flex items-center gap-1 rounded-full border border-white/20 bg-white/8 p-1"
    >
      {locales.map((locale) => {
        const active = locale === currentLocale;

        return (
          <Link
            key={locale}
            href={localePath(locale)}
            lang={locale}
            aria-current={active ? "page" : undefined}
            className={[
              "rounded-full px-3 py-1.5 text-xs font-bold transition",
              active
                ? "bg-brand-orange text-brand-950"
                : "text-slate-200 hover:bg-white/12 hover:text-white",
            ].join(" ")}
          >
            {labels[locale]}
          </Link>
        );
      })}
    </div>
  );
}
