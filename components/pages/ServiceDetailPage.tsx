import type { Dictionary } from "@/i18n/get-dictionary";

import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";

type ServiceItem = Dictionary["services"]["items"][number];

type ServiceDetailPageProps = {
  dictionary: Dictionary;
  service: ServiceItem;
};

export function ServiceDetailPage({
  dictionary,
  service,
}: ServiceDetailPageProps) {
  const content = dictionary.services;

  return (
    <main>
      <PageHero
        eyebrow={`${content.eyebrow} · ${service.title}`}
        title={service.title}
        description={service.summary}
      />

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
