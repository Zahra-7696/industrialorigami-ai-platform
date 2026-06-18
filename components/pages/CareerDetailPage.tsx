import Link from "next/link";

import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { CareerSlug } from "@/lib/careers";

import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

type CareerDetailPageProps = {
  locale: Locale;
  dictionary: Dictionary;
  slug: CareerSlug;
};

export function CareerDetailPage({
  locale,
  dictionary,
  slug,
}: CareerDetailPageProps) {
  const careers = dictionary.careers;
  const role = careers.roles[slug];

  return (
    <main>
      <PageHero
        eyebrow={careers.detailEyebrow}
        title={role.title}
        description={role.summary}
      />

      <section className="section-space section-white">
        <div className="site-container grid gap-12 lg:grid-cols-[1fr_0.65fr]">
          <Reveal>
            <div>
              <SectionHeading title={careers.whatWeSeekTitle} />
              <ul className="mt-7 grid gap-3">
                {role.points.map((point) => (
                  <li
                    key={point}
                    className="light-card rounded-2xl px-5 py-4 leading-7 text-slate-600"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <aside className="warm-panel rounded-[2rem] p-7">
              <h2 className="text-2xl font-black text-brand-navy">
                {careers.interestTitle}
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                {careers.interestDescription}
              </p>
              <Link
                href={`/${locale}/collaborate`}
                className="mt-6 inline-flex rounded-xl bg-brand-orange px-5 py-3 font-black text-brand-navy"
              >
                {careers.registerInterest}
              </Link>
            </aside>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
