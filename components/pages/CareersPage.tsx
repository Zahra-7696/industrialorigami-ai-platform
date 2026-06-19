"use client";

import Link from "next/link";

import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";

import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";

type CareersPageProps = {
  locale: Locale;
  dictionary: Dictionary;
};

type CareerRole = {
  title: string;
  summary: string;
};

export function CareersPage({ locale, dictionary }: CareersPageProps) {
  const careers = dictionary.careers;

  const roles = Object.entries(careers.roles) as Array<
    [string, CareerRole]
  >;

  return (
    <main>
      <PageHero
        eyebrow={careers.eyebrow}
        title={careers.title}
        description={careers.intro}
      />

      <section className="section-space section-white">
        <div className="site-container">
          <SectionHeading
            title={careers.opportunitiesTitle}
            description={careers.opportunitiesDescription}
          />

          <div className="mt-10 grid gap-5">
            {roles.map(([slug, role]) => (
              <article
                key={slug}
                className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/70"
              >
                <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto]">
                  <div>
                    <p className="text-sm font-black text-brand-orange">
                      {careers.typeLabel}:{" "}
                      {careers.types.expressionOfInterest}
                    </p>

                    <h2 className="mt-4 text-2xl font-black text-brand-900">
                      {role.title}
                    </h2>

                    <p className="mt-4 max-w-4xl leading-8 text-slate-600">
                      {role.summary}
                    </p>
                  </div>

                  <Link
                    href={`/${locale}/careers/${slug}`}
                    className="button-primary justify-center text-center"
                  >
                    {careers.viewOpportunity}
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