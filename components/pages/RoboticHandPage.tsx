import Image from "next/image";

import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { roboticHandContent } from "@/lib/robotic-hand-content";

import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";

type ProjectItem = Dictionary["projects"]["items"][number];

type RoboticHandPageProps = {
  locale: Locale;
  dictionary: Dictionary;
  project: ProjectItem;
};

export function RoboticHandPage({
  locale,
  dictionary,
  project,
}: RoboticHandPageProps) {
  const content = roboticHandContent[locale];
  const projectLabels = dictionary.projects;

  return (
    <main>
      <PageHero
        eyebrow={`${projectLabels.eyebrow} · ${project.category}`}
        title={project.title}
        description={project.summary}
      />

      <section className="section-space section-white">
        <div className="site-container grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <aside className="soft-panel rounded-[2rem] p-7">
            <p className="page-eyebrow">{content.statusLabel}</p>

            <p className="mt-4 text-2xl font-black text-brand-900">
              {project.status}
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              {content.statusDescription}
            </p>
          </aside>

          <div>
            <SectionHeading title={content.overviewTitle} />

            <div className="mt-6 space-y-5 leading-8 text-slate-600">
              {content.overviewParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space section-soft border-y border-slate-200">
        <div className="site-container">
          <SectionHeading
            eyebrow={content.galleryEyebrow}
            title={content.galleryTitle}
            description={content.galleryDescription}
            centered
          />

          <div className="mt-11 grid gap-6 lg:grid-cols-2">
            {content.gallery.map((image, index) => (
              <figure
                key={image.src}
                className="light-card overflow-hidden rounded-[2rem]"
              >
          <div className="flex min-h-[320px] items-center justify-center bg-brand-900 p-4 sm:min-h-[420px]">
              <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading={index === 0 ? "eager" : "lazy"}
              unoptimized
              className="h-auto max-h-[430px] w-full object-contain"
              />
            </div>

                <figcaption className="p-6 leading-7 text-slate-600">
                  {image.caption}
                </figcaption>
              </figure>
            ))}
          </div>

          
        </div>
      </section>

      <section className="section-space section-white">
        <div className="site-container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading
              eyebrow={content.usefulnessEyebrow}
              title={content.usefulnessTitle}
              description={content.usefulnessDescription}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {content.usefulness.map((item) => (
              <div
                key={item}
                className="light-card rounded-2xl p-5 leading-7 text-slate-600"
              >
                <span className="mr-3 text-brand-orange">●</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space section-navy">
        <div className="site-container">
          <SectionHeading
            eyebrow={content.architectureEyebrow}
            title={content.architectureTitle}
            description={content.architectureDescription}
            centered
            light
          />

          <div className="mt-12 grid gap-8 xl:grid-cols-2">
            <div>
              <h3 className="text-2xl font-black text-white">
                {content.hardwareTitle}
              </h3>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {content.hardware.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-white/12 bg-white/6 p-5"
                  >
                    <h4 className="font-black text-brand-gold">
                      {item.title}
                    </h4>

                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-black text-white">
                {content.softwareTitle}
              </h3>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {content.software.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-white/12 bg-white/6 p-5"
                  >
                    <h4 className="font-black text-brand-gold">
                      {item.title}
                    </h4>

                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space section-soft border-b border-slate-200">
        <div className="site-container">
          <SectionHeading
            eyebrow={content.workflowEyebrow}
            title={content.workflowTitle}
            description={content.workflowDescription}
            centered
          />
        </div>
      </section>

      <section className="section-space section-white">
        <div className="site-container grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <SectionHeading
              eyebrow={content.evaluationEyebrow}
              title={content.evaluationTitle}
              description={content.evaluationDescription}
            />
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {content.metrics.map((metric) => (
              <div
                key={metric}
                className="light-card rounded-2xl px-5 py-4 text-slate-600"
              >
                {metric}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space section-soft border-t border-slate-200">
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
