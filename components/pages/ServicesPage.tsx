import type { Dictionary } from "@/i18n/get-dictionary";

import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

type ServicesPageProps = {
  dictionary: Dictionary;
};

export function ServicesPage({ dictionary }: ServicesPageProps) {
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
          {content.items.map((item, index) => (
            <Reveal key={item.title}>
              <article className="light-card light-card-interactive h-full rounded-3xl p-7">
                <span className="text-xs font-black text-brand-orange">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-4 text-2xl font-black text-brand-navy">
                  {item.title}
                </h2>
                <p className="mt-3 leading-7 text-slate-600">
                  {item.description}
                </p>
                <ul className="mt-5 grid gap-2">
                  {item.capabilities.map((capability) => (
                    <li
                      key={capability}
                      className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-orange" />
                      {capability}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-space section-soft border-y border-slate-200">
        <div className="site-container">
          <Reveal>
            <SectionHeading
              eyebrow={content.processEyebrow}
              title={content.processTitle}
              description={content.processDescription}
              centered
            />
          </Reveal>
          <div className="mt-11 grid gap-5 md:grid-cols-4">
            {content.process.map((step, index) => (
              <Reveal key={step.title}>
                <article className="light-card h-full rounded-3xl p-6">
                  <span className="font-black text-brand-orange">
                    0{index + 1}
                  </span>
                  <h3 className="mt-4 text-lg font-black text-brand-navy">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {step.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
