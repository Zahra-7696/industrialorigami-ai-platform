import Image from "next/image";
import Link from "next/link";

import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";

import { SectionHeading } from "@/components/ui/SectionHeading";

type HomePageProps = {
  locale: Locale;
  dictionary: Dictionary;
};

const serviceImages: Record<string, string> = {
  "robotics-and-automation": "/home/service-robotics.png",
  "data-science-and-analytics": "/home/service-data-science.png",
  "software-development": "/home/service-software.png",
  "rag-intelligent-assistants": "/home/service-rag.png",
  "research-prototyping-technology-consulting": "/home/service-research.png",
};

const projectImages: Record<string, string> = {
  "robotic-hand": "/projects/intelligent-robotic-hand.png",
  "industrial-rag-platform": "/projects/industrial-rag-platform.png",
  "predictive-maintenance": "/projects/predictive-maintenance.png",
  "digital-twin": "/projects/digital-twin.png",
};

export function HomePage({ locale, dictionary }: HomePageProps) {
  const content = dictionary.home;

  return (
    <main>
      <section className="hero-background relative isolate overflow-hidden">
        <div className="hero-grid absolute inset-0 -z-20" />

        <div className="site-container grid min-h-[calc(100vh-5rem)] items-center gap-14 py-14 lg:grid-cols-2 lg:py-16">
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

          <div className="hero-enter-3 mx-auto flex w-full justify-center lg:justify-end">
            <div className="relative w-full max-w-[28rem]">
              <Image
                src="/home/hero-robotic-hand.png"
                alt="Robotic hand holding an orange origami shape"
                width={558}
                height={702}
                priority
                unoptimized
                className="h-auto w-full object-contain drop-shadow-2xl"
              />
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

          <div className="mt-11 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {dictionary.services.items.map((service, index) => (
              <Link
                key={service.slug}
                href={`/${locale}/services/${service.slug}`}
                className="light-card light-card-interactive overflow-hidden rounded-3xl"
              >
                <div className="h-44 bg-brand-950">
                  <Image
                    src={
                      serviceImages[service.slug] ??
                      "/home/service-research.png"
                    }
                    alt=""
                    width={640}
                    height={360}
                    unoptimized
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <span className="text-xs font-black text-brand-orange">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h2 className="mt-4 text-lg font-black leading-6 text-brand-900">
                    {service.title}
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {service.menuDescription}
                  </p>
                </div>
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
            centered
          />

          <div className="mt-11 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {dictionary.projects.items.map((project) => (
              <Link
                key={project.slug}
                href={`/${locale}/projects/${project.slug}`}
                className="light-card light-card-interactive overflow-hidden rounded-[2rem]"
              >
                <div className="h-52 bg-brand-950 sm:h-56">
                  <Image
                    src={
                      projectImages[project.slug] ??
                      "/home/service-software.png"
                    }
                    alt=""
                    width={640}
                    height={430}
                    unoptimized
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <p className="page-eyebrow">{project.category}</p>

                  <h2 className="mt-4 text-xl font-black text-brand-900">
                    {project.title}
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {project.menuDescription}
                  </p>

                  <span className="mt-5 inline-flex font-black text-brand-700">
                    {content.viewProject} →
                  </span>
                </div>
              </Link>
            ))}
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
