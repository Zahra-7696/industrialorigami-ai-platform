import Image from "next/image";
import Link from "next/link";

import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";

import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";

type ProjectsPageProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function ProjectsPage({
  locale,
  dictionary,
}: ProjectsPageProps) {
  const content = dictionary.projects;

  return (
    <main>
      <PageHero
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
      />

      <section className="section-space section-white">
        <div className="site-container">
          <Reveal>
            <article className="soft-panel overflow-hidden rounded-[2rem]">
              <div className="grid items-center gap-4 lg:grid-cols-[0.72fr_1.28fr]">
                <div className="flex min-h-80 items-center justify-center bg-brand-sky p-9">
                  <div className="tech-orbit-light flex aspect-square w-52 items-center justify-center rounded-full bg-white shadow-lg">
                    <Image
                      src="/brand/logo-mark.png"
                      alt=""
                      width={260}
                      height={260}
                      className="h-auto w-[68%] object-contain"
                    />
                  </div>
                </div>
                <div className="p-8 sm:p-11">
                  <p className="page-eyebrow">{content.featuredLabel}</p>
                  <h2 className="mt-4 text-3xl font-black text-brand-navy sm:text-4xl">
                    {content.roboticHand.title}
                  </h2>
                  <p className="mt-5 max-w-2xl leading-8 text-slate-600">
                    {content.roboticHand.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {content.roboticHand.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-slate-300 bg-white px-3 py-1.5 text-xs font-bold text-brand-blue"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/${locale}/projects/robotic-hand`}
                    className="mt-7 inline-flex rounded-xl bg-brand-navy px-5 py-3 font-black text-white transition hover:bg-brand-blue"
                  >
                    {content.viewProject}
                  </Link>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
