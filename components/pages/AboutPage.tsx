import Image from "next/image";

import type { Dictionary } from "@/i18n/get-dictionary";
import { teamProfiles } from "@/lib/team";

import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";

type AboutPageProps = {
  dictionary: Dictionary;
};

function isConfigured(value: string): boolean {
  return Boolean(value.trim()) && !value.startsWith("ADD_");
}

export function AboutPage({ dictionary }: AboutPageProps) {
  const content = dictionary.about;

  return (
    <main>
      <PageHero
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
      />

      <section className="section-space section-white">
        <div className="site-container grid gap-12 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <SectionHeading title={content.storyTitle} />

            <div className="mt-6 space-y-5 leading-8 text-slate-600">
              {content.storyParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <aside className="soft-panel rounded-[2rem] p-8">
            <p className="page-eyebrow">{content.companyEyebrow}</p>

            <dl className="mt-6 grid gap-5">
              {content.companyFacts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-sm font-black text-brand-900">
                    {fact.label}
                  </dt>

                  <dd className="mt-1 leading-7 text-slate-600">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      <section className="section-space section-soft border-y border-slate-200">
        <div className="site-container">
          <SectionHeading
            eyebrow={content.teamEyebrow}
            title={content.teamTitle}
            description={content.teamDescription}
            centered
          />

          <div className="mt-11 grid gap-6 md:grid-cols-2">
            {teamProfiles.map((profile, index) => {
              const member = content.team[profile.id];
              const hasEmail = isConfigured(profile.email);
              const hasLinkedIn = isConfigured(profile.linkedin);

              return (
                <article
                  key={profile.id}
                  className="light-card overflow-hidden rounded-[2rem]"
                >
                  <div className="grid sm:grid-cols-[13rem_1fr]">
                    <div className="relative h-80 bg-brand-900 sm:h-auto sm:min-h-[28rem]">
                      <Image
                        src={profile.image}
                        alt={`${member.name} profile photograph`}
                        fill
                        sizes="(max-width: 640px) 100vw, 208px"
                        loading={index < 2 ? "eager" : "lazy"}
                        unoptimized
                        className="object-cover object-center"
                      />
                    </div>

                    <div className="p-7">
                      <h2 className="text-2xl font-black text-brand-900">
                        {member.name}
                      </h2>

                      <p className="mt-1 font-bold text-brand-orange">
                        {member.role}
                      </p>

                      <p className="mt-2 text-sm font-bold text-brand-700">
                        {profile.degree}
                      </p>

                      <p className="mt-5 leading-7 text-slate-600">
                        {member.description}
                      </p>

                      <div className="mt-6 grid gap-3">
                        {hasEmail ? (
                          <a
                            href={`mailto:${profile.email}`}
                            className="group rounded-xl border border-slate-300 bg-white px-4 py-3 transition hover:border-brand-orange hover:shadow-md"
                          >
                            <span className="block text-xs font-black uppercase tracking-wider text-brand-orange">
                              {content.emailLabel}
                            </span>

                            <span className="mt-1 block break-all text-sm font-bold text-brand-900 group-hover:text-brand-700">
                              {profile.email}
                            </span>
                          </a>
                        ) : (
                          <span className="rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-400">
                            {content.emailPending}
                          </span>
                        )}

                        {hasLinkedIn ? (
                          <a
                            href={profile.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="group rounded-xl border border-[#0A66C2]/30 bg-[#0A66C2]/5 px-4 py-3 transition hover:border-[#0A66C2] hover:shadow-md"
                          >
                            <span className="block text-xs font-black uppercase tracking-wider text-[#0A66C2]">
                              LinkedIn
                            </span>

                            <span className="mt-1 block break-all text-sm font-bold text-brand-900 group-hover:text-[#0A66C2]">
                              {profile.linkedin
                                .replace(/^https?:\/\/(www\.)?/, "")
                                .replace(/\/$/, "")}
                            </span>
                          </a>
                        ) : (
                          <span className="rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-400">
                            {content.linkedinPending}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
