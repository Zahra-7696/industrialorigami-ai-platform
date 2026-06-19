import Link from "next/link";

import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { CareerSlug } from "@/lib/careers";

import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

type CareerDetailPageProps = {
  locale: Locale;
  dictionary: Dictionary;
  slug: CareerSlug;
};

type CareerRole = {
  title: string;
  summary: string;
  points?: string[];
};

const fallbackPoints: Record<Locale, string[]> = {
  en: [
    "AI, software, robotics, data, research, engineering, product or commercial experience.",
    "Interest in practical technology development for real-world industrial problems.",
    "Ability to work in an early-stage, research-driven company environment.",
    "Clear communication, curiosity, reliability, and willingness to learn.",
  ],
  fa: [
    "تجربه یا علاقه در هوش مصنوعی، نرم‌افزار، رباتیک، داده، پژوهش، مهندسی، محصول یا همکاری تجاری.",
    "علاقه به توسعه فناوری‌های کاربردی برای مسائل واقعی صنعتی.",
    "توانایی همکاری در محیط یک شرکت نوپا، پژوهش‌محور و فناورانه.",
    "ارتباط شفاف، کنجکاوی، مسئولیت‌پذیری و آمادگی برای یادگیری.",
  ],
  zh: [
    "具备或关注人工智能、软件、机器人、数据、研究、工程、产品或商业合作经验。",
    "对解决真实工业问题的实用技术开发感兴趣。",
    "能够在早期、研究驱动型公司环境中工作。",
    "沟通清晰、好奇、可靠，并愿意持续学习。",
  ],
};

const ctaText: Record<
  Locale,
  {
    title: string;
    description: string;
    button: string;
  }
> = {
  en: {
    title: "Interested in working with us?",
    description:
      "Submit your expression of interest and attach your CV, cover letter, or supporting documents.",
    button: "Submit expression of interest",
  },
  fa: {
    title: "مایل به همکاری با ما هستید؟",
    description:
      "فرم اعلام علاقه‌مندی را ارسال کنید و رزومه، کاور لتر یا مدارک تکمیلی خود را بارگذاری کنید.",
    button: "ارسال اعلام علاقه‌مندی",
  },
  zh: {
    title: "有兴趣与我们合作吗？",
    description:
      "提交您的意向申请，并上传简历、求职信或其他支持文件。",
    button: "提交意向申请",
  },
};

export function CareerDetailPage({
  locale,
  dictionary,
  slug,
}: CareerDetailPageProps) {
  const careers = dictionary.careers;
  const role = careers.roles[slug] as CareerRole;
  const points =
    Array.isArray(role.points) && role.points.length > 0
      ? role.points
      : fallbackPoints[locale];

  const cta = ctaText[locale];

  return (
    <main>
      <PageHero
        eyebrow={careers.eyebrow}
        title={role.title}
        description={role.summary}
      />

      <section className="section-space section-white">
        <div className="site-container grid gap-12 lg:grid-cols-[1fr_0.65fr]">
          <Reveal>
            <div>
              <SectionHeading title={careers.whatWeSeekTitle} />

              <ul className="mt-7 grid gap-3">
                {points.map((point) => (
                  <li
                    key={point}
                    className="light-card rounded-2xl px-5 py-4 leading-7 text-slate-600"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <aside className="warm-panel rounded-[2rem] p-7">
              <h2 className="text-2xl font-black text-brand-900">
                {cta.title}
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                {cta.description}
              </p>

              <Link
                href={`/${locale}/careers/future-opportunities`}
                className="button-primary mt-6"
              >
                {cta.button}
              </Link>
            </aside>
          </Reveal>
        </div>
      </section>
    </main>
  );
}