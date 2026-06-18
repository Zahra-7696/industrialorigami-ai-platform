import Image from "next/image";
import Link from "next/link";

import type { Dictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";

import { IconTile } from "@/components/ui/IconTile";
import { SectionHeading } from "@/components/ui/SectionHeading";

type HeroProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function Hero({ locale, dictionary }: HeroProps) {
  return (
    <main>
      <section className="relative isolate overflow-hidden">
        <div className="grid-background absolute inset-0 -z-30" />
        <div className="absolute left-[58%] top-10 -z-20 h-[33rem] w-[33rem] rounded-full bg-blue-500/16 blur-3xl" />
        <div className="absolute -left-40 top-72 -z-20 h-96 w-96 rounded-full bg-amber-500/8 blur-3xl" />

        <div className="site-container grid min-h-[78vh] items-center gap-16 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div>
            <p className="page-eyebrow fade-up">{dictionary.home.eyebrow}</p>
            <h1 className="page-title fade-up fade-up-delay-1 mt-6">
              {dictionary.home.title}
            </h1>
            <p className="page-intro fade-up fade-up-delay-2 mt-7">
              {dictionary.home.description}
            </p>

            <div className="fade-up fade-up-delay-3 mt-9 flex flex-wrap gap-4">
              <Link
                href={`/${locale}/solutions`}
                className="rounded-xl bg-brand-orange px-6 py-3.5 text-sm font-black text-brand-950 transition hover:bg-brand-gold"
              >
                {dictionary.home.secondaryCta}
              </Link>
              <Link
                href={`/${locale}/robotic-hand`}
                className="rounded-xl border border-white/20 px-6 py-3.5 text-sm font-black text-white transition hover:border-brand-orange hover:text-brand-orange"
              >
                {dictionary.home.primaryCta}
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="tech-orbit mx-auto flex aspect-square w-[72%] items-center justify-center rounded-full border border-cyan-300/20 bg-blue-500/8">
              <Image
                src="/brand/logo-mark.png"
                alt=""
                width={420}
                height={420}
                priority
                className="animate-float h-auto w-[68%] object-contain drop-shadow-[0_20px_45px_rgba(245,158,11,0.2)]"
              />
            </div>

            <div className="glass-panel absolute -bottom-4 left-0 max-w-[15rem] rounded-2xl p-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-orange">
                {dictionary.home.focusTitle}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                {dictionary.home.focusDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space border-y border-white/10 bg-white/[0.02]">
        <div className="site-container">
          <SectionHeading
            eyebrow={dictionary.home.capabilitiesEyebrow}
            title={dictionary.home.capabilitiesTitle}
            description={dictionary.home.capabilitiesDescription}
            centered
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {dictionary.home.cards.map((card, index) => (
              <IconTile
                key={card.title}
                icon={["✦", "◉", "⌘", "◇"][index] ?? "•"}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="site-container grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading
              eyebrow={dictionary.home.servicesEyebrow}
              title={dictionary.home.servicesTitle}
              description={dictionary.home.servicesDescription}
            />
            <Link
              href={`/${locale}/solutions`}
              className="mt-8 inline-flex font-black text-brand-orange hover:text-brand-gold"
            >
              {dictionary.home.secondaryCta} →
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {dictionary.home.serviceCards.map((card) => (
              <article
                key={card.title}
                className="surface-card rounded-3xl p-6 transition duration-300"
              >
                <div className="mb-5 h-1 w-14 rounded-full bg-brand-orange" />
                <h2 className="text-xl font-black text-white">{card.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space-sm">
        <div className="site-container">
          <div className="overflow-hidden rounded-[2rem] border border-amber-400/20 bg-gradient-to-r from-amber-500/12 via-blue-500/8 to-transparent p-8 sm:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="page-eyebrow">{dictionary.home.ctaEyebrow}</p>
                <h2 className="section-title mt-4">{dictionary.home.ctaTitle}</h2>
                <p className="section-copy mt-5">
                  {dictionary.home.ctaDescription}
                </p>
              </div>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex rounded-xl bg-brand-orange px-6 py-3.5 font-black text-brand-950 transition hover:bg-brand-gold"
              >
                {dictionary.navigation.contact}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
