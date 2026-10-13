import Link from "next/link";

import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";

import { PageHero } from "@/components/ui/PageHero";

type ProjectsIndexPageProps = {
  locale: Locale;
  dictionary: Dictionary;
};

const rmlCopy: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    description: string;
    button: string;
  }
> = {
  en: {
    eyebrow: "Live engineering platform",
    title: "RML Lab",
    description:
      "Explore live research, modelling, simulation and engineering development within the IndustrialOrigami.AI ecosystem.",
    button: "Open RML Lab",
  },
  fa: {
    eyebrow: "پلتفرم زنده مهندسی",
    title: "آزمایشگاه RML",
    description:
      "پژوهش، مدل‌سازی، شبیه‌سازی و توسعه مهندسی زنده در اکوسیستم IndustrialOrigami.AI را مشاهده کنید.",
    button: "باز کردن RML",
  },
  zh: {
    eyebrow: "实时工程平台",
    title: "RML 实验室",
    description:
      "探索 IndustrialOrigami.AI 生态中的实时研究、建模、仿真与工程开发工作。",
    button: "打开 RML 实验室",
  },
  pa: {
    eyebrow: "ਲਾਈਵ ਇੰਜੀਨੀਅਰਿੰਗ ਪਲੇਟਫਾਰਮ",
    title: "RML ਲੈਬ",
    description:
      "IndustrialOrigami.AI ਇਕੋਸਿਸਟਮ ਵਿੱਚ ਲਾਈਵ ਖੋਜ, ਮਾਡਲਿੰਗ, ਸਿਮੂਲੇਸ਼ਨ ਅਤੇ ਇੰਜੀਨੀਅਰਿੰਗ ਵਿਕਾਸ ਵੇਖੋ।",
    button: "RML ਲੈਬ ਖੋਲ੍ਹੋ",
  },
};

export function ProjectsIndexPage({
  locale,
  dictionary,
}: ProjectsIndexPageProps) {
  const content = dictionary.projects;
  const rml = rmlCopy[locale];

  return (
    <main>
      <PageHero
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
      />

      <section className="section-space section-white">
        <div className="site-container">
          <div className="grid gap-6 md:grid-cols-2">
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

          <div className="light-card light-card-interactive mt-10 overflow-hidden rounded-[2rem] p-8 sm:p-10">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="page-eyebrow">{rml.eyebrow}</p>
                <h2 className="mt-4 text-3xl font-black text-brand-900 sm:text-4xl">
                  {rml.title}
                </h2>
                <p className="mt-5 max-w-3xl leading-8 text-slate-600">
                  {rml.description}
                </p>
              </div>

              <a
                href="https://rml.industrialorigami.ai/"
                target="_blank"
                rel="noreferrer"
                className="button-primary justify-center whitespace-nowrap text-center"
              >
                {rml.button} ↗
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
