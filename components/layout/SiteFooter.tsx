import Image from "next/image";
import Link from "next/link";

import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";

type SiteFooterProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function SiteFooter({
  locale,
  dictionary,
}: SiteFooterProps) {
  const links = [
    {
      href: `/${locale}/about`,
      label: dictionary.navigation.about,
    },
    {
      href: `/${locale}/services`,
      label: dictionary.navigation.services,
    },
    {
      href: `/${locale}/projects`,
      label: dictionary.navigation.projects,
    },
    {
      href: `/${locale}/careers`,
      label: dictionary.navigation.careers,
    },
    {
      href: `/${locale}/collaborate`,
      label: dictionary.navigation.collaborate,
    },
  ];

  return (
    <footer className="border-t border-white/10 bg-brand-950 text-white">
      <div className="site-container grid gap-10 py-12 md:grid-cols-[1.35fr_0.65fr_0.75fr]">
        <div>
          <Image
            src="/brand/logo-horizontal.png"
            alt="IndustrialOrigami.AI — Shape Intelligence"
            width={520}
            height={170}
            className="h-auto w-full max-w-sm object-contain"
          />

          <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
            {dictionary.footer.summary}
          </p>
        </div>

        <div>
          <h2 className="font-black text-white">
            {dictionary.footer.explore}
          </h2>

          <div className="mt-5 grid gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-slate-300 transition hover:text-brand-gold"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-black text-white">
            {dictionary.footer.locationTitle}
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-300">
            {dictionary.footer.location}
          </p>

          <Link
            href={`/${locale}/collaborate`}
            className="mt-5 inline-flex font-bold text-brand-gold transition hover:text-brand-orange"
          >
            {dictionary.navigation.collaborate} →
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} {dictionary.brand.name}.{" "}
        {dictionary.footer.rights}
      </div>
    </footer>
  );
}
