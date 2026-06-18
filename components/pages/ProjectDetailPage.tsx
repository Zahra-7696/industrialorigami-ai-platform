import type { Dictionary } from "@/i18n/get-dictionary";

import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";

type ProjectItem = Dictionary["projects"]["items"][number];

type ProjectDetailPageProps = {
  dictionary: Dictionary;
  project: ProjectItem;
};

export function ProjectDetailPage({
  dictionary,
  project,
}: ProjectDetailPageProps) {
  const content = dictionary.projects;

  return (
    <main>
      <PageHero
        eyebrow={`${content.eyebrow} · ${project.category}`}
        title={project.title}
        description={project.summary}
      />

      <section className="section-space section-white">
        <div className="site-container grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <aside className="soft-panel rounded-[2rem] p-7">
            <p className="page-eyebrow">{content.statusTitle}</p>
            <p className="mt-4 text-2xl font-black text-brand-900">
              {project.status}
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              {project.statusDescription}
            </p>
          </aside>

          <div>
            <SectionHeading title={content.overviewTitle} />
            <div className="mt-6 space-y-5 leading-8 text-slate-600">
              {project.overview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space section-soft border-y border-slate-200">
        <div className="site-container grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading title={content.technologyTitle} />
            <div className="mt-7 grid gap-3">
              {project.technology.map((item) => (
                <div
                  key={item}
                  className="light-card rounded-2xl px-5 py-4 text-slate-600"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionHeading title={content.valueTitle} />
            <div className="mt-7 grid gap-3">
              {project.value.map((item) => (
                <div
                  key={item}
                  className="light-card rounded-2xl px-5 py-4 text-slate-600"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space section-white">
        <div className="site-container">
          <SectionHeading
            eyebrow={content.roadmapEyebrow}
            title={content.roadmapTitle}
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {project.roadmap.map((step) => (
              <article
                key={step.title}
                className="light-card rounded-3xl p-6"
              >
                <p className="page-eyebrow">{step.phase}</p>
                <h3 className="mt-4 text-xl font-black text-brand-900">
                  {step.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
