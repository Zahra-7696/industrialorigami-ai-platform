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

type CareerOpportunity = {
  slug: string;
  type: string;
  title: string;
  summary: string;
};

const fallbackOpportunity: CareerOpportunity = {
  slug: "future-opportunities",
  type: "Expression of interest",
  title: "Future Opportunities and Talent Network",
  summary:
    "Connect with us if your experience may support future AI, software, robotics, embedded systems, electronics, manufacturing, product or commercial work.",
};

function getCareerOpportunities(content: Dictionary["careers"]): CareerOpportunity[] {
  const possibleContent = content as Dictionary["careers"] & {
    opportunities?: CareerOpportunity[];
  };

  if (
    Array.isArray(possibleContent.opportunities) &&
    possibleContent.opportunities.length > 0
  ) {
    return possibleContent.opportunities;
  }

  return [fallbackOpportunity];
}

export function CareersPage({ locale, dictionary }: CareersPageProps) {
  const content = dictionary.careers;
  const opportunities = getCareerOpportunities(content);
  const viewDetails =
    "viewDetails" in content && typeof content.viewDetails === "string"
      ? content.viewDetails
      : "View details";

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
            title={content.currentTitle}
            description={content.currentDescription}
          />

          <div className="mt-10 grid gap-5">
            {opportunities.map((opportunity) => (
              <article
                key={opportunity.slug}
                className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/70"
              >
                <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto]">
                  <div>
                    <p className="text-sm font-black text-brand-orange">
                      Type: {opportunity.type}
                    </p>

                    <h2 className="mt-4 text-2xl font-black text-brand-900">
                      {opportunity.title}
                    </h2>

                    <p className="mt-4 max-w-4xl leading-8 text-slate-600">
                      {opportunity.summary}
                    </p>
                  </div>

                  <Link
                    href={`/${locale}/careers/${opportunity.slug}`}
                    className="button-primary justify-center text-center"
                  >
                    {viewDetails}
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
