import Image from "next/image";

import type { Dictionary } from "@/i18n/get-dictionary";

import { PageHero } from "@/components/ui/PageHero";

type ProjectItem = Dictionary["projects"]["items"][number];

type AgricultureProjectsPageProps = {
  dictionary: Dictionary;
  project: ProjectItem;
};

export function AgricultureProjectsPage({
  dictionary,
  project,
}: AgricultureProjectsPageProps) {
  const content = dictionary.projects.agricultureProjects;

  return (
    <main>
      <PageHero
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
      />

      <section className="section-space section-white">
        <div className="site-container">
          <div className="warm-panel rounded-[2rem] p-6 sm:p-8">
            <p className="page-eyebrow">{content.evidenceNoteTitle}</p>
            <p className="mt-3 max-w-4xl leading-8 text-slate-600">
              {content.evidenceNote}
            </p>
          </div>

          <div className="mt-12 grid gap-10">
            {content.caseStudies.map((study, index) => (
              <article
                key={study.slug}
                className="light-card overflow-hidden rounded-[2rem]"
              >
                <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
                  <div className="relative min-h-[19rem] bg-brand-950 lg:min-h-full">
                    <Image
                      src={study.image}
                      alt={study.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      priority={index === 0}
                      unoptimized
                      className="object-cover"
                    />
                  </div>

                  <div className="p-7 sm:p-9">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <p className="page-eyebrow">
                        {content.caseStudyLabel} {index + 1}
                      </p>
                      <span className="rounded-full bg-brand-paper px-3 py-1.5 text-xs font-bold text-brand-700">
                        {study.domain}
                      </span>
                    </div>

                    <h2 className="mt-4 text-3xl font-black text-brand-900">
                      {study.title}
                    </h2>
                    <p className="mt-2 font-bold text-brand-orange">
                      {study.subtitle}
                    </p>
                    <p className="mt-5 leading-8 text-slate-600">
                      {study.summary}
                    </p>

                    <div className="mt-8 grid gap-6 xl:grid-cols-2">
                      <section>
                        <h3 className="text-lg font-black text-brand-900">
                          {content.challengeTitle}
                        </h3>
                        <p className="mt-3 leading-7 text-slate-600">
                          {study.challenge}
                        </p>
                      </section>

                      <section>
                        <h3 className="text-lg font-black text-brand-900">
                          {content.evaluationTitle}
                        </h3>
                        <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-slate-600">
                          {study.evaluation.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </section>
                    </div>

                    <section className="mt-7">
                      <h3 className="text-lg font-black text-brand-900">
                        {content.approachTitle}
                      </h3>
                      <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-slate-600">
                        {study.approach.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </section>

                    <section className="mt-7">
                      <h3 className="text-lg font-black text-brand-900">
                        {content.productionTitle}
                      </h3>
                      <p className="mt-3 leading-7 text-slate-600">
                        {study.production}
                      </p>
                    </section>

                    <section className="mt-7">
                      <h3 className="text-lg font-black text-brand-900">
                        {content.technologyTitle}
                      </h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {study.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-full border border-slate-200 bg-brand-paper px-3 py-1.5 text-xs font-bold text-brand-700"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </section>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space-sm section-soft border-t border-slate-200">
        <div className="site-container">
          <div className="soft-panel rounded-[2rem] p-7">
            <p className="page-eyebrow">{dictionary.projects.statusTitle}</p>
            <h2 className="mt-4 text-2xl font-black text-brand-900">
              {project.status}
            </h2>
            <p className="mt-4 max-w-4xl leading-7 text-slate-600">
              {project.statusDescription}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
