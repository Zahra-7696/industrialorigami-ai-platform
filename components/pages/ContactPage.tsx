import type { Dictionary } from "@/i18n/get-dictionary";

import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";

type ContactPageProps = {
  dictionary: Dictionary;
};

export function ContactPage({ dictionary }: ContactPageProps) {
  const content = dictionary.contact;

  return (
    <main>
      <PageHero
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
      />

      <section className="section-space">
        <div className="site-container grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <SectionHeading title={content.detailsTitle} />
            <div className="mt-7 grid gap-4">
              {content.cards.map((card) => (
                <article key={card.title} className="surface-card rounded-2xl p-5 transition duration-300">
                  <p className="text-sm font-black text-brand-orange">{card.title}</p>
                  <p className="mt-2 leading-7 text-slate-300">{card.value}</p>
                </article>
              ))}
            </div>
          </div>

          <form className="glass-panel rounded-[2rem] p-7 sm:p-9">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-slate-300">
                {content.form.name}
                <input
                  type="text"
                  name="name"
                  className="rounded-xl border border-white/15 bg-brand-950/70 px-4 py-3 text-white outline-none transition focus:border-brand-orange"
                />
              </label>

              <label className="grid gap-2 text-sm font-semibold text-slate-300">
                {content.form.email}
                <input
                  type="email"
                  name="email"
                  className="rounded-xl border border-white/15 bg-brand-950/70 px-4 py-3 text-white outline-none transition focus:border-brand-orange"
                />
              </label>
            </div>

            <label className="mt-5 grid gap-2 text-sm font-semibold text-slate-300">
              {content.form.subject}
              <input
                type="text"
                name="subject"
                className="rounded-xl border border-white/15 bg-brand-950/70 px-4 py-3 text-white outline-none transition focus:border-brand-orange"
              />
            </label>

            <label className="mt-5 grid gap-2 text-sm font-semibold text-slate-300">
              {content.form.message}
              <textarea
                name="message"
                rows={7}
                className="resize-y rounded-xl border border-white/15 bg-brand-950/70 px-4 py-3 text-white outline-none transition focus:border-brand-orange"
              />
            </label>

            <button
              type="button"
              className="mt-6 rounded-xl bg-brand-orange px-6 py-3.5 font-black text-brand-950 transition hover:bg-brand-gold"
            >
              {content.form.submit}
            </button>

            <p className="mt-4 text-xs leading-6 text-slate-500">
              {content.form.note}
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
