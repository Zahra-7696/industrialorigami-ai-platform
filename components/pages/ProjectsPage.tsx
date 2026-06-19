import Link from "next/link";

import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";

import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

type ProjectsPageProps = {
  locale: Locale;
  dictionary: Dictionary;
};

type ProjectItem = {
  slug: string;
  title: string;
  summary: string;
  menuDescription?: string;
};

export function ProjectsPage({ locale, dictionary }: ProjectsPageProps) {
  const content = dictionary.projects;
  const projects = content.items as ProjectItem[];

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
            title={content.overviewTitle}
            description={content.intro}
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {projects.map((project) => (
              <Reveal key={project.slug}>
                <Link
                  href={`/${locale}/projects/${project.slug}`}
                  className="light-card light-card-interactive block h-full rounded-[2rem] p-7"
                >
                  <p className="page-eyebrow">
                    {content.statusTitle}
                  </p>

                  <h2 className="mt-4 text-2xl font-black text-brand-900">
                    {project.title}
                  </h2>

                  <p className="mt-4 leading-7 text-slate-600">
                    {project.summary || project.menuDescription}
                  </p>

                  <span className="mt-6 inline-flex rounded-xl bg-brand-orange px-5 py-3 text-sm font-black text-brand-950">
                    {content.viewProject}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}