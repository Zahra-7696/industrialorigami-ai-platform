import type { Dictionary } from "@/i18n/get-dictionary";

import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";

type CollaboratePageProps = {
  dictionary: Dictionary;
};

export function CollaboratePage({
  dictionary,
}: CollaboratePageProps) {
  const content = dictionary.collaborate;

  return (
    <main>
      <PageHero
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
      />

      <section className="section-space section-soft border-b border-slate-200">
        <div className="site-container">
          <SectionHeading
            title={content.pathwaysTitle}
            description={content.pathwaysDescription}
            centered
          />

          <div className="mt-11 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {content.pathways.map((pathway) => (
              <article
                key={pathway.title}
                className="light-card rounded-3xl p-6"
              >
                <h2 className="text-xl font-black text-brand-900">
                  {pathway.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {pathway.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space section-white">
        <div className="site-container grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <SectionHeading title={content.detailsTitle} />
            <div className="mt-7 grid gap-4">
              {content.details.map((detail) => (
                <div
                  key={detail.label}
                  className="light-card rounded-2xl p-5"
                >
                  <p className="text-sm font-black text-brand-orange">
                    {detail.label}
                  </p>
                  <p className="mt-2 leading-7 text-slate-600">
                    {detail.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <form className="soft-panel rounded-[2rem] p-7 sm:p-9">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-brand-900">
                {content.form.name}
                <input
                  type="text"
                  name="name"
                  className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-brand-ink outline-none transition focus:border-brand-orange"
                />
              </label>

              <label className="grid gap-2 text-sm font-bold text-brand-900">
                {content.form.email}
                <input
                  type="email"
                  name="email"
                  className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-brand-ink outline-none transition focus:border-brand-orange"
                />
              </label>
            </div>

            <label className="mt-5 grid gap-2 text-sm font-bold text-brand-900">
              {content.form.interest}
              <select
                name="interest"
                className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-brand-ink outline-none transition focus:border-brand-orange"
              >
                {content.form.options.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>

            <label className="mt-5 grid gap-2 text-sm font-bold text-brand-900">
              {content.form.message}
              <textarea
                name="message"
                rows={7}
                className="resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 text-brand-ink outline-none transition focus:border-brand-orange"
              />
            </label>

            <button type="button" className="button-primary mt-6">
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
