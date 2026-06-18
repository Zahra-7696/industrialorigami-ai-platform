import type { Dictionary } from "@/i18n/get-dictionary";

import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";

type SolutionsPageProps = {
  dictionary: Dictionary;
};

export function SolutionsPage({ dictionary }: SolutionsPageProps) {
  const content = dictionary.solutions;

  return (
    <main>
      <PageHero
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
      />

      <section className="section-space">
        <div className="site-container grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {content.services.map((service, index) => (
            <article key={service.title} className="surface-card rounded-3xl p-7 transition duration-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-400/25 bg-amber-400/10 font-black text-brand-orange">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h2 className="mt-6 text-xl font-black text-white">{service.title}</h2>
              <p className="mt-3 leading-7 text-slate-400">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-space border-y border-white/10 bg-white/[0.02]">
        <div className="site-container">
          <SectionHeading
            eyebrow={content.processEyebrow}
            title={content.processTitle}
            description={content.processDescription}
            centered
          />
          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {content.process.map((step, index) => (
              <article key={step.title} className="relative rounded-3xl border border-white/10 bg-white/[0.035] p-6">
                <span className="text-xs font-black text-brand-orange">
                  0{index + 1}
                </span>
                <h3 className="mt-4 text-lg font-black text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
