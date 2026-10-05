import Image from "next/image";

import type { Dictionary } from "@/i18n/get-dictionary";

import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";

type ServiceItem = Dictionary["services"]["items"][number];

type ServiceDetailPageProps = {
  dictionary: Dictionary;
  service: ServiceItem;
};

const serviceImages: Record<string, string> = {
  "robotics-and-automation": "/home/service-robotics.png",
  "data-science-and-analytics": "/home/service-data-science.png",
  "software-development": "/home/service-software.png",
  "agentic-generative-ai-systems": "/services/agentic-generative-ai.png",
  "research-prototyping-technology-consulting": "/home/service-research.png",
};

export function ServiceDetailPage({
  dictionary,
  service,
}: ServiceDetailPageProps) {
  const content = dictionary.services;
  const image = serviceImages[service.slug];

  return (
    <main>
      <PageHero
        eyebrow={`${content.eyebrow} · ${service.title}`}
        title={service.title}
        description={service.summary}
      />

      {image ? (
        <section className="section-white pt-8 sm:pt-10">
          <div className="site-container">
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-brand-950 shadow-2xl">
              <Image
                src={image}
                alt={`${service.title} visualisation`}
                width={1448}
                height={1086}
                priority={service.slug === "agentic-generative-ai-systems"}
                unoptimized
                className="aspect-[16/8.5] h-auto w-full object-cover"
              />
            </div>
          </div>
        </section>
      ) : null}

      <section className="section-space section-white">
        <div className="site-container grid gap-12 lg:grid-cols-[1fr_0.75fr]">
          <div>
            <SectionHeading title={content.overviewTitle} />
            <div className="mt-6 space-y-5 leading-8 text-slate-600">
              {service.overview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <aside className="soft-panel rounded-[2rem] p-7">
            <p className="page-eyebrow">{content.capabilitiesTitle}</p>
            <ul className="mt-6 grid gap-3">
              {service.capabilities.map((capability) => (
                <li
                  key={capability}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm leading-6 text-slate-600"
                >
                  {capability}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="section-space section-soft border-y border-slate-200">
        <div className="site-container grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading title={content.deliverablesTitle} />
            <div className="mt-7 grid gap-3">
              {service.deliverables.map((deliverable) => (
                <div
                  key={deliverable}
                  className="light-card rounded-2xl px-5 py-4 text-slate-600"
                >
                  {deliverable}
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionHeading title={content.fitTitle} />
            <div className="mt-7 grid gap-3">
              {service.fit.map((item) => (
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
    </main>
  );
}
