"use client";

import { FormEvent, useRef, useState } from "react";

import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";

import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";

type CareerApplyPageProps = {
  locale: Locale;
  dictionary: Dictionary;
  opportunitySlug: string;
};

type SubmitState =
  | { status: "idle"; message: "" }
  | { status: "loading"; message: string }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

type CareerRole = {
  title: string;
  summary: string;
};

export function CareerApplyPage({
  locale,
  dictionary,
  opportunitySlug,
}: CareerApplyPageProps) {
  const text = dictionary.careers.application;
  const roles = dictionary.careers.roles as Record<string, CareerRole>;
  const opportunity =
    roles[opportunitySlug] ?? {
      title: text.title,
      summary: text.intro,
    };

  const formRef = useRef<HTMLFormElement>(null);
  const [submitState, setSubmitState] = useState<SubmitState>({
    status: "idle",
    message: "",
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!formRef.current) return;

    setSubmitState({
      status: "loading",
      message: text.sending,
    });

    try {
      const formData = new FormData(formRef.current);
      formData.set("opportunity", opportunity.title);
      formData.set("opportunitySlug", opportunitySlug);
      formData.set("locale", locale);

      const response = await fetch("/api/careers", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(text.error);
      }

      formRef.current.reset();

      setSubmitState({
        status: "success",
        message: text.success,
      });
    } catch {
      setSubmitState({
        status: "error",
        message: text.error,
      });
    }
  }

  return (
    <main>
      <PageHero
        eyebrow={dictionary.careers.eyebrow}
        title={opportunity.title}
        description={opportunity.summary}
      />

      <section className="section-space section-white">
        <div className="site-container grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <aside>
            <SectionHeading title={text.formTitle} />

            <p className="mt-5 leading-8 text-slate-600">
              {text.intro}
            </p>

            <p className="mt-6 rounded-2xl border border-slate-200 bg-brand-paper p-5 text-sm leading-7 text-slate-600">
              {text.note}
            </p>
          </aside>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="soft-panel rounded-[2rem] p-7 sm:p-9"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-brand-900">
                {text.name}
                <input
                  type="text"
                  name="name"
                  required
                  minLength={2}
                  className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-brand-ink outline-none transition focus:border-brand-orange"
                />
              </label>

              <label className="grid gap-2 text-sm font-bold text-brand-900">
                {text.email}
                <input
                  type="email"
                  name="email"
                  required
                  className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-brand-ink outline-none transition focus:border-brand-orange"
                />
              </label>

              <label className="grid gap-2 text-sm font-bold text-brand-900">
                {text.phone}
                <input
                  type="tel"
                  name="phone"
                  className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-brand-ink outline-none transition focus:border-brand-orange"
                />
              </label>

              <label className="grid gap-2 text-sm font-bold text-brand-900">
                {text.workRight}
                <select
                  name="workRight"
                  required
                  className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-brand-ink outline-none transition focus:border-brand-orange"
                >
                  {text.workRightOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>
            </div>

            <label className="mt-5 grid gap-2 text-sm font-bold text-brand-900">
              {text.address}
              <input
                type="text"
                name="address"
                className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-brand-ink outline-none transition focus:border-brand-orange"
              />
              <span className="text-xs font-normal leading-6 text-slate-500">
                {text.addressHelp}
              </span>
            </label>

            <label className="mt-5 grid gap-2 text-sm font-bold text-brand-900">
              {text.interest}
              <select
                name="interest"
                required
                className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-brand-ink outline-none transition focus:border-brand-orange"
              >
                {text.interestOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>

            <label className="mt-5 grid gap-2 text-sm font-bold text-brand-900">
              {text.message}
              <textarea
                name="message"
                rows={6}
                className="resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 text-brand-ink outline-none transition focus:border-brand-orange"
              />
            </label>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-brand-900">
                {text.cv}
                <input
                  type="file"
                  name="cv"
                  required
                  accept=".pdf,.doc,.docx"
                  className="rounded-xl border border-dashed border-slate-300 bg-white px-4 py-3 text-sm text-slate-600"
                />
              </label>

              <label className="grid gap-2 text-sm font-bold text-brand-900">
                {text.coverLetter}
                <input
                  type="file"
                  name="coverLetter"
                  accept=".pdf,.doc,.docx"
                  className="rounded-xl border border-dashed border-slate-300 bg-white px-4 py-3 text-sm text-slate-600"
                />
              </label>
            </div>

            <label className="mt-5 grid gap-2 text-sm font-bold text-brand-900">
              {text.additionalFile}
              <input
                type="file"
                name="additionalFile"
                accept=".pdf,.doc,.docx"
                className="rounded-xl border border-dashed border-slate-300 bg-white px-4 py-3 text-sm text-slate-600"
              />
            </label>

            <p className="mt-3 text-xs leading-6 text-slate-500">
              {text.fileHelp}
            </p>

            <button
              type="submit"
              disabled={submitState.status === "loading"}
              className="button-primary mt-6 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitState.status === "loading"
                ? text.sending
                : text.submit}
            </button>

            {submitState.message ? (
              <p
                role="status"
                className={[
                  "mt-5 rounded-xl px-4 py-3 text-sm leading-6",
                  submitState.status === "success"
                    ? "border border-emerald-200 bg-emerald-50 text-emerald-900"
                    : submitState.status === "error"
                      ? "border border-red-200 bg-red-50 text-red-900"
                      : "border border-slate-200 bg-white text-slate-600",
                ].join(" ")}
              >
                {submitState.message}
              </p>
            ) : null}
          </form>
        </div>
      </section>
    </main>
  );
}
