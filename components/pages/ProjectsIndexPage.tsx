import Link from "next/link";

import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";

import { PageHero } from "@/components/ui/PageHero";

type ProjectsIndexPageProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function ProjectsIndexPage({
  locale,
  dictionary,
}: ProjectsIndexPageProps) {
  const content = dictionary.projects;

  return (
    <main>
      <PageHero
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
      />

      <section className="section-space section-white">
        <div className="site-container grid gap-6 md:grid-cols-2">
          {content.items.map((project) => (
            <Link
              key={project.slug}
              href={`/${locale}/projects/${project.slug}`}
              className="light-card light-card-interactive rounded-[2rem] p-7"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="page-eyebrow">{project.status}</p>
                <span className="rounded-full bg-brand-paper px-3 py-1.5 text-xs font-bold text-brand-700">
                  {project.category}
                </span>
              </div>
              <h2 className="mt-5 text-3xl font-black text-brand-900">
                {project.title}
              </h2>
              <p className="mt-4 leading-8 text-slate-600">
                {project.summary}
              </p>
              <span className="mt-6 inline-flex font-black text-brand-700">
                {content.viewProject} →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
