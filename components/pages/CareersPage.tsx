import Link from "next/link";

import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { careerOpportunities } from "@/lib/careers";

import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";

type CareersPageProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function CareersPage({
  locale,
  dictionary,
}: CareersPageProps) {
  const content = dictionary.careers;

  return (
    <main>
      <PageHero
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
      />

      <section className="section-space section-white">
        <div className="site-container">
          <SectionHeading
            title={content.opportunitiesTitle}
            description={content.opportunitiesDescription}
          />

          <div className="mt-10 grid gap-5">
            {careerOpportunities.map((opportunity) => (
              <article
                key={opportunity.slug}
                className="light-card rounded-3xl p-7"
              >
                <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
                  <div>
                    <p className="text-sm font-bold text-brand-orange">
                      {content.typeLabel}:{" "}
                      {content.types[opportunity.type]}
                    </p>
                    <h2 className="mt-2 text-2xl font-black text-brand-900">
                      {content.roles[opportunity.slug].title}
                    </h2>
                    <p className="mt-3 max-w-3xl leading-7 text-slate-600">
                      {content.roles[opportunity.slug].summary}
                    </p>
                  </div>
                  <Link
                    href={`/${locale}/careers/${opportunity.slug}`}
                    className="shrink-0 rounded-xl bg-brand-900 px-5 py-3 text-center font-black text-white transition hover:bg-brand-700"
                  >
                    {content.viewOpportunity}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
