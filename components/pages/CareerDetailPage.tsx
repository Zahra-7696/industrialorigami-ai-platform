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

const fallbackPoints: Partial<Record<Locale, string[]>> = {
  en: [
    "AI, software, robotics, data, research, engineering, product or commercial experience.",
    "Interest in practical technology development for real-world industrial problems.",
    "Ability to work in an early-stage, research-driven company environment.",
    "Clear communication, curiosity, reliability, and willingness to learn.",
  ],
  fa: [
    "ØªØ¬Ø±Ø¨Ù‡ ÛŒØ§ Ø¹Ù„Ø§Ù‚Ù‡ Ø¯Ø± Ù‡ÙˆØ´ Ù…ØµÙ†ÙˆØ¹ÛŒØŒ Ù†Ø±Ù…â€ŒØ§ÙØ²Ø§Ø±ØŒ Ø±Ø¨Ø§ØªÛŒÚ©ØŒ Ø¯Ø§Ø¯Ù‡ØŒ Ù¾Ú˜ÙˆÙ‡Ø´ØŒ Ù…Ù‡Ù†Ø¯Ø³ÛŒØŒ Ù…Ø­ØµÙˆÙ„ ÛŒØ§ Ù‡Ù…Ú©Ø§Ø±ÛŒ ØªØ¬Ø§Ø±ÛŒ.",
    "Ø¹Ù„Ø§Ù‚Ù‡ Ø¨Ù‡ ØªÙˆØ³Ø¹Ù‡ ÙÙ†Ø§ÙˆØ±ÛŒâ€ŒÙ‡Ø§ÛŒ Ú©Ø§Ø±Ø¨Ø±Ø¯ÛŒ Ø¨Ø±Ø§ÛŒ Ù…Ø³Ø§Ø¦Ù„ ÙˆØ§Ù‚Ø¹ÛŒ ØµÙ†Ø¹ØªÛŒ.",
    "ØªÙˆØ§Ù†Ø§ÛŒÛŒ Ù‡Ù…Ú©Ø§Ø±ÛŒ Ø¯Ø± Ù…Ø­ÛŒØ· ÛŒÚ© Ø´Ø±Ú©Øª Ù†ÙˆÙ¾Ø§ØŒ Ù¾Ú˜ÙˆÙ‡Ø´â€ŒÙ…Ø­ÙˆØ± Ùˆ ÙÙ†Ø§ÙˆØ±Ø§Ù†Ù‡.",
    "Ø§Ø±ØªØ¨Ø§Ø· Ø´ÙØ§ÙØŒ Ú©Ù†Ø¬Ú©Ø§ÙˆÛŒØŒ Ù…Ø³Ø¦ÙˆÙ„ÛŒØªâ€ŒÙ¾Ø°ÛŒØ±ÛŒ Ùˆ Ø¢Ù…Ø§Ø¯Ú¯ÛŒ Ø¨Ø±Ø§ÛŒ ÛŒØ§Ø¯Ú¯ÛŒØ±ÛŒ.",
  ],
  zh: [
    "å…·å¤‡æˆ–å…³æ³¨äººå·¥æ™ºèƒ½ã€è½¯ä»¶ã€æœºå™¨äººã€æ•°æ®ã€ç ”ç©¶ã€å·¥ç¨‹ã€äº§å“æˆ–å•†ä¸šåˆä½œç»éªŒã€‚",
    "å¯¹è§£å†³çœŸå®žå·¥ä¸šé—®é¢˜çš„å®žç”¨æŠ€æœ¯å¼€å‘æ„Ÿå…´è¶£ã€‚",
    "èƒ½å¤Ÿåœ¨æ—©æœŸã€ç ”ç©¶é©±åŠ¨åž‹å…¬å¸çŽ¯å¢ƒä¸­å·¥ä½œã€‚",
    "æ²Ÿé€šæ¸…æ™°ã€å¥½å¥‡ã€å¯é ï¼Œå¹¶æ„¿æ„æŒç»­å­¦ä¹ ã€‚",
  ],
};

const ctaText: Partial<Record<
  Locale,
  {
    title: string;
    description: string;
    button: string;
  }
>> = {
  en: {
    title: "Interested in working with us?",
    description:
      "Submit your expression of interest and attach your CV, cover letter, or supporting documents.",
    button: "Submit expression of interest",
  },
  fa: {
    title: "Ù…Ø§ÛŒÙ„ Ø¨Ù‡ Ù‡Ù…Ú©Ø§Ø±ÛŒ Ø¨Ø§ Ù…Ø§ Ù‡Ø³ØªÛŒØ¯ØŸ",
    description:
      "ÙØ±Ù… Ø§Ø¹Ù„Ø§Ù… Ø¹Ù„Ø§Ù‚Ù‡â€ŒÙ…Ù†Ø¯ÛŒ Ø±Ø§ Ø§Ø±Ø³Ø§Ù„ Ú©Ù†ÛŒØ¯ Ùˆ Ø±Ø²ÙˆÙ…Ù‡ØŒ Ú©Ø§ÙˆØ± Ù„ØªØ± ÛŒØ§ Ù…Ø¯Ø§Ø±Ú© ØªÚ©Ù…ÛŒÙ„ÛŒ Ø®ÙˆØ¯ Ø±Ø§ Ø¨Ø§Ø±Ú¯Ø°Ø§Ø±ÛŒ Ú©Ù†ÛŒØ¯.",
    button: "Ø§Ø±Ø³Ø§Ù„ Ø§Ø¹Ù„Ø§Ù… Ø¹Ù„Ø§Ù‚Ù‡â€ŒÙ…Ù†Ø¯ÛŒ",
  },
  zh: {
    title: "æœ‰å…´è¶£ä¸Žæˆ‘ä»¬åˆä½œå—ï¼Ÿ",
    description:
      "æäº¤æ‚¨çš„æ„å‘ç”³è¯·ï¼Œå¹¶ä¸Šä¼ ç®€åŽ†ã€æ±‚èŒä¿¡æˆ–å…¶ä»–æ”¯æŒæ–‡ä»¶ã€‚",
    button: "æäº¤æ„å‘ç”³è¯·",
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
      : (fallbackPoints[locale] ?? fallbackPoints.en ?? []);

  const cta = ctaText[locale] ?? ctaText.en!;

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



