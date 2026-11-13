import Link from "next/link";

import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";

import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";

type ResearchPageProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function ResearchPage({ locale, dictionary }: ResearchPageProps) {
  const content = dictionary.research;

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
            eyebrow={content.statusEyebrow}
            title={content.statusTitle}
          />

          <dl className="mt-8 grid gap-5 md:grid-cols-2">
            {content.statusItems.map((item) => (
              <div key={item.label} className="soft-panel rounded-[2rem] p-7">
                <dt className="text-sm font-black text-brand-900">
                  {item.label}
                </dt>
                <dd className="mt-2 leading-7 text-slate-600">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section-space section-soft border-y border-slate-200">
        <div className="site-container">
          <SectionHeading
            eyebrow={content.handEyebrow}
            title={content.handTitle}
            description={content.handDescription}
          />

          <Link
            href={`/${locale}/projects/robotic-hand`}
            className="button-primary mt-8 inline-flex"
          >
            {content.handCta}
          </Link>
        </div>
      </section>

      <section className="section-space section-white">
        <div className="site-container">
          <SectionHeading
            eyebrow={content.conceptsEyebrow}
            title={content.conceptsTitle}
            description={content.conceptsDescription}
          />

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {content.concepts.map((concept) => (
              <article
                key={concept.title}
                className="light-card rounded-[2rem] p-7"
              >
                <h3 className="text-xl font-black text-brand-900">
                  {concept.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {concept.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space section-soft border-y border-slate-200">
        <div className="site-container">
          <SectionHeading
            eyebrow={content.methodEyebrow}
            title={content.methodTitle}
          />

          <ol className="mt-8 grid gap-5 md:grid-cols-5">
            {content.methodSteps.map((step, index) => (
              <li key={step.title} className="light-card rounded-[2rem] p-6">
                <span className="text-sm font-black text-brand-orange">
                  {index + 1}
                </span>
                <h3 className="mt-2 text-lg font-black text-brand-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-space section-white">
        <div className="site-container">
          <SectionHeading
            eyebrow={content.partnersEyebrow}
            title={content.partnersTitle}
            description={content.partnersDescription}
          />

          <Link
            href={`/${locale}/collaborate`}
            className="button-primary mt-8 inline-flex"
          >
            {content.partnersCta}
          </Link>
        </div>
      </section>
    </main>
  );
}
