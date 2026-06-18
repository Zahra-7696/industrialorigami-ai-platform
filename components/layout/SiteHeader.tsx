"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";

import { LanguageSwitcher } from "./LanguageSwitcher";
import { NavigationDropdown } from "./NavigationDropdown";

type SiteHeaderProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function SiteHeader({ locale, dictionary }: SiteHeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const serviceItems = dictionary.services.items.map((item) => ({
    href: `/${locale}/services/${item.slug}`,
    title: item.title,
    description: item.menuDescription,
  }));

  const projectItems = dictionary.projects.items.map((item) => ({
    href: `/${locale}/projects/${item.slug}`,
    title: item.title,
    description: item.menuDescription,
  }));

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-950/96 text-white backdrop-blur-xl">
      <div className="site-container flex min-h-20 items-center justify-between gap-5">
        <Link
          href={`/${locale}`}
          className="flex min-w-0 items-center gap-3"
          aria-label={`${dictionary.brand.name} homepage`}
          onClick={() => setMobileOpen(false)}
        >
          <Image
            src="/brand/logo-mark.png"
            alt=""
            width={50}
            height={50}
            priority
            className="h-10 w-10 shrink-0 object-contain"
          />
          <span className="min-w-0">
            <span className="block truncate text-base font-black tracking-tight text-white sm:text-lg">
              {dictionary.brand.name}
            </span>
            <span className="hidden text-xs font-semibold text-brand-orange sm:block">
              {dictionary.brand.tagline}
            </span>
          </span>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-6 xl:flex"
        >
          <Link
            href={`/${locale}`}
            className="text-sm font-bold text-slate-200 transition hover:text-brand-gold"
          >
            {dictionary.navigation.home}
          </Link>

          <Link
            href={`/${locale}/about`}
            className="text-sm font-bold text-slate-200 transition hover:text-brand-gold"
          >
            {dictionary.navigation.about}
          </Link>

          <NavigationDropdown
            label={dictionary.navigation.services}
            items={serviceItems}
          />

          <NavigationDropdown
            label={dictionary.navigation.projects}
            items={projectItems}
          />

          <Link
            href={`/${locale}/careers`}
            className="text-sm font-bold text-slate-200 transition hover:text-brand-gold"
          >
            {dictionary.navigation.careers}
          </Link>

          <Link
            href={`/${locale}/collaborate`}
            className="text-sm font-bold text-slate-200 transition hover:text-brand-gold"
          >
            {dictionary.navigation.collaborate}
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher currentLocale={locale} />

          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label="Toggle navigation"
            onClick={() => setMobileOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 text-white transition hover:border-brand-orange hover:text-brand-gold xl:hidden"
          >
            <span className="text-xl">{mobileOpen ? "×" : "☰"}</span>
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-white/10 bg-brand-950 px-4 py-4 xl:hidden"
        >
          <div className="site-container grid gap-2">
            <Link
              href={`/${locale}`}
              onClick={() => setMobileOpen(false)}
              className="rounded-xl px-4 py-3 font-bold text-slate-100 hover:bg-white/8"
            >
              {dictionary.navigation.home}
            </Link>

            <Link
              href={`/${locale}/about`}
              onClick={() => setMobileOpen(false)}
              className="rounded-xl px-4 py-3 font-bold text-slate-100 hover:bg-white/8"
            >
              {dictionary.navigation.about}
            </Link>

            <details className="rounded-xl border border-white/10">
              <summary className="cursor-pointer list-none px-4 py-3 font-bold text-slate-100">
                {dictionary.navigation.services}
              </summary>
              <div className="grid gap-1 border-t border-white/10 p-2">
                {serviceItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-white/8"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </details>

            <details className="rounded-xl border border-white/10">
              <summary className="cursor-pointer list-none px-4 py-3 font-bold text-slate-100">
                {dictionary.navigation.projects}
              </summary>
              <div className="grid gap-1 border-t border-white/10 p-2">
                {projectItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-white/8"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </details>

            <Link
              href={`/${locale}/careers`}
              onClick={() => setMobileOpen(false)}
              className="rounded-xl px-4 py-3 font-bold text-slate-100 hover:bg-white/8"
            >
              {dictionary.navigation.careers}
            </Link>

            <Link
              href={`/${locale}/collaborate`}
              onClick={() => setMobileOpen(false)}
              className="rounded-xl px-4 py-3 font-bold text-slate-100 hover:bg-white/8"
            >
              {dictionary.navigation.collaborate}
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
