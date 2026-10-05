"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { locales, type Locale } from "@/i18n/config";

const labels: Record<Locale, string> = {
  en: "EN",
  fa: "فا",
  zh: "中文",
  pa: "ਪੰ",
};

type LanguageSwitcherProps = {
  // The current repository uses currentLocale. `locale` is also accepted
  // so this component remains compatible with the newer header variant.
  currentLocale?: Locale;
  locale?: Locale;
};

export function LanguageSwitcher({
  currentLocale,
  locale,
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const activeLocale = currentLocale ?? locale ?? "en";

  function localePath(nextLocale: Locale): string {
    const segments = pathname.split("/").filter(Boolean);

    if (segments.length === 0) {
      return `/${nextLocale}`;
    }

    if (locales.includes(segments[0] as Locale)) {
      segments[0] = nextLocale;
      return `/${segments.join("/")}`;
    }

    return `/${nextLocale}/${segments.join("/")}`;
  }

  return (
    <div
      aria-label="Language selector"
      className="flex items-center gap-1 rounded-full border border-white/20 bg-white/8 p-1"
    >
      {locales.map((item) => {
        const active = item === activeLocale;

        return (
          <Link
            key={item}
            href={localePath(item)}
            lang={item}
            aria-current={active ? "page" : undefined}
            className={[
              "rounded-full px-3 py-1.5 text-xs font-bold transition",
              active
                ? "bg-brand-orange text-brand-950"
                : "text-slate-200 hover:bg-white/12 hover:text-white",
            ].join(" ")}
          >
            {labels[item]}
          </Link>
        );
      })}
    </div>
  );
}
