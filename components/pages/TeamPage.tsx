import type { Dictionary } from "@/i18n/get-dictionary";

import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";

type TeamPageProps = {
  dictionary: Dictionary;
};

export function TeamPage({ dictionary }: TeamPageProps) {
  const content = dictionary.team;

  return (
    <main>
      <PageHero
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
      />

      <section className="section-space">
        <div className="site-container grid gap-6 md:grid-cols-2">
          {content.members.map((member) => (
            <article key={member.name} className="surface-card rounded-[2rem] p-7 transition duration-300">
              <div className="flex items-start gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-brand-orange text-xl font-black text-brand-950">
                  {member.initials}
                </div>
                <div>
                  <h2 className="text-2xl font-black text-white">{member.name}</h2>
                  <p className="mt-1 font-semibold text-brand-orange">{member.role}</p>
                </div>
              </div>
              <p className="mt-6 leading-8 text-slate-400">{member.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-space border-t border-white/10 bg-white/[0.02]">
        <div className="site-container">
          <SectionHeading
            eyebrow={content.capabilityEyebrow}
            title={content.capabilityTitle}
            description={content.capabilityDescription}
          />
          <div className="mt-10 flex flex-wrap gap-3">
            {content.capabilities.map((capability) => (
              <span
                key={capability}
                className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-slate-300"
              >
                {capability}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
