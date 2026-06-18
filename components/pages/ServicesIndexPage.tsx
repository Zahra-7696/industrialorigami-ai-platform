import Link from "next/link";

import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";

import { PageHero } from "@/components/ui/PageHero";

type ServicesIndexPageProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function ServicesIndexPage({
  locale,
  dictionary,
}: ServicesIndexPageProps) {
  const content = dictionary.services;

  return (
    <main>
      <PageHero
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
      />

      <section className="section-space section-white">
        <div className="site-container grid gap-6 md:grid-cols-2">
          {content.items.map((service, index) => (
            <Link
              key={service.slug}
              href={`/${locale}/services/${service.slug}`}
              className="light-card light-card-interactive rounded-3xl p-7"
            >
              <span className="text-xs font-black text-brand-orange">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-4 text-2xl font-black text-brand-900">
                {service.title}
              </h2>
              <p className="mt-3 leading-7 text-slate-600">
                {service.summary}
              </p>
              <span className="mt-6 inline-flex font-black text-brand-700">
                {content.viewService} →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
