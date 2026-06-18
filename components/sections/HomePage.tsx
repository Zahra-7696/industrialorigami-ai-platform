import Image from "next/image";
import Link from "next/link";

import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";

import { SectionHeading } from "@/components/ui/SectionHeading";

type HomePageProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function HomePage({ locale, dictionary }: HomePageProps) {
  const content = dictionary.home;
  const featuredProject = dictionary.projects.items.find(
    (project) => project.slug === "robotic-hand",
  );

  return (
    <main>
      <section className="hero-background relative isolate overflow-hidden">
        <div className="hero-grid absolute inset-0 -z-20" />

        <div className="site-container grid min-h-[calc(100vh-5rem)] items-center gap-14 py-14 lg:grid-cols-[1.08fr_0.92fr] lg:py-16">
          <div>
            <p className="page-eyebrow hero-enter-1">{content.eyebrow}</p>
            <h1 className="hero-title hero-enter-2 mt-6">
              {content.title}
            </h1>
            <p className="hero-copy hero-enter-3 mt-7">
              {content.description}
            </p>

            <div className="hero-enter-3 mt-9 flex flex-wrap gap-4">
              <Link
                href={`/${locale}/services`}
                className="button-primary"
              >
                {content.servicesCta}
              </Link>
              <Link
                href={`/${locale}/projects/robotic-hand`}
                className="button-secondary-dark"
              >
                {content.projectCta}
              </Link>
            </div>
          </div>

          <div className="hero-enter-3 relative mx-auto w-full max-w-lg">
            <div className="tech-orbit-dark mx-auto flex aspect-square w-[62%] items-center justify-center rounded-full border border-white/16 bg-white/6 shadow-2xl">
              <Image
                src="/brand/logo-mark.png"
                alt=""
                width={360}
                height={360}
                priority
                className="logo-float h-auto w-[67%] object-contain"
              />
            </div>

            <div className="absolute -bottom-5 left-0 max-w-[18rem] rounded-2xl border border-white/15 bg-brand-950/86 p-5 shadow-2xl backdrop-blur-xl">
              <p className="page-eyebrow">{content.featuredLabel}</p>
              <p className="mt-2 text-base font-black leading-7 text-white">
                {featuredProject?.title}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                {content.featuredDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space section-white border-b border-slate-200">
        <div className="site-container">
          <SectionHeading
            eyebrow={content.servicesEyebrow}
            title={content.servicesTitle}
            description={content.servicesDescription}
            centered
          />

          <div className="mt-11 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {dictionary.services.items.map((service, index) => (
              <Link
                key={service.slug}
                href={`/${locale}/services/${service.slug}`}
                className="light-card light-card-interactive rounded-3xl p-6"
              >
                <span className="text-xs font-black text-brand-orange">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-4 text-lg font-black leading-6 text-brand-900">
                  {service.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {service.menuDescription}
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-9 text-center">
            <Link
              href={`/${locale}/services`}
              className="font-black text-brand-700 transition hover:text-brand-orange"
            >
              {content.viewAllServices} →
            </Link>
          </div>
        </div>
      </section>

      <section className="section-space section-soft border-b border-slate-200">
        <div className="site-container">
          <SectionHeading
            eyebrow={content.projectsEyebrow}
            title={content.projectsTitle}
            description={content.projectsDescription}
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-[1.4fr_0.6fr]">
            {featuredProject ? (
              <Link
                href={`/${locale}/projects/${featuredProject.slug}`}
                className="soft-panel light-card-interactive rounded-[2rem] p-8"
              >
                <p className="page-eyebrow">{content.featuredLabel}</p>
                <h2 className="mt-4 text-3xl font-black text-brand-900">
                  {featuredProject.title}
                </h2>
                <p className="mt-4 max-w-2xl leading-8 text-slate-600">
                  {featuredProject.summary}
                </p>
                <span className="mt-6 inline-flex font-black text-brand-700">
                  {content.viewProject} →
                </span>
              </Link>
            ) : null}

            <div className="grid gap-4">
              {dictionary.projects.items
                .filter((project) => project.slug !== "robotic-hand")
                .map((project) => (
                  <Link
                    key={project.slug}
                    href={`/${locale}/projects/${project.slug}`}
                    className="light-card light-card-interactive rounded-2xl p-5"
                  >
                    <h3 className="font-black text-brand-900">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {project.menuDescription}
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space-sm section-white">
        <div className="site-container">
          <div className="warm-panel rounded-[2rem] p-8 sm:p-11">
            <div className="grid items-center gap-7 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="page-eyebrow">{content.collaborateEyebrow}</p>
                <h2 className="section-title mt-4">
                  {content.collaborateTitle}
                </h2>
                <p className="section-copy mt-5">
                  {content.collaborateDescription}
                </p>
              </div>
              <Link
                href={`/${locale}/collaborate`}
                className="button-primary"
              >
                {dictionary.navigation.collaborate}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
