import Link from "next/link";

import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";

import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

type ServicesPageProps = {
  locale: Locale;
  dictionary: Dictionary;
};

type ServiceItem = {
  slug: string;
  title: string;
  menuDescription: string;
  summary: string;
  overview: string[];
  capabilities: string[];
  deliverables: string[];
  fit: string[];
};

export function ServicesPage({ locale, dictionary }: ServicesPageProps) {
  const content = dictionary.services;
  const services = content.items as ServiceItem[];

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
            title={content.title}
            description={content.intro}
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {services.map((item) => (
              <Reveal key={item.slug}>
                <Link
                  href={`/${locale}/services/${item.slug}`}
                  className="light-card light-card-interactive block h-full rounded-[2rem] p-7"
                >
                  <h2 className="text-2xl font-black text-brand-900">
                    {item.title}
                  </h2>

                  <p className="mt-3 leading-7 text-slate-600">
                    {item.summary}
                  </p>

                  <ul className="mt-5 grid gap-2">
                    {item.capabilities.slice(0, 3).map((capability) => (
                      <li
                        key={capability}
                        className="rounded-xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700"
                      >
                        {capability}
                      </li>
                    ))}
                  </ul>

                  <span className="mt-6 inline-flex rounded-xl bg-brand-orange px-5 py-3 text-sm font-black text-brand-950">
                    {content.viewService}
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