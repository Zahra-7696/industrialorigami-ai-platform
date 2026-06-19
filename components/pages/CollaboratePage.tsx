"use client";

import { FormEvent, useRef, useState } from "react";

import type { Dictionary } from "@/i18n/get-dictionary";

import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";

type CollaboratePageProps = {
  dictionary: Dictionary;
};

type SubmitState =
  | { status: "idle"; message: "" }
  | { status: "loading"; message: string }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

export function CollaboratePage({
  dictionary,
}: CollaboratePageProps) {
  const content = dictionary.collaborate;
  const formRef = useRef<HTMLFormElement>(null);

  const [submitState, setSubmitState] = useState<SubmitState>({
    status: "idle",
    message: "",
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!formRef.current) {
      return;
    }

    setSubmitState({
      status: "loading",
      message: "Sending your enquiry...",
    });

    try {
      const formData = new FormData(formRef.current);

      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const result = (await response.json()) as {
        ok?: boolean;
        message?: string;
      };

      if (!response.ok || !result.ok) {
        throw new Error(
          result.message ?? "The form could not be sent.",
        );
      }

      formRef.current.reset();

      setSubmitState({
        status: "success",
        message:
          result.message ??
          "Your enquiry has been sent successfully.",
      });
    } catch (error) {
      setSubmitState({
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong while sending the form.",
      });
    }
  }

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

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="soft-panel rounded-[2rem] p-7 sm:p-9"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-brand-900">
                {content.form.name}
                <input
                  type="text"
                  name="name"
                  required
                  minLength={2}
                  className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-brand-ink outline-none transition focus:border-brand-orange"
                />
              </label>

              <label className="grid gap-2 text-sm font-bold text-brand-900">
                {content.form.email}
                <input
                  type="email"
                  name="email"
                  required
                  className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-brand-ink outline-none transition focus:border-brand-orange"
                />
              </label>
            </div>

            <label className="mt-5 grid gap-2 text-sm font-bold text-brand-900">
              {content.form.interest}
              <select
                name="interest"
                required
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
                required
                minLength={10}
                className="resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 text-brand-ink outline-none transition focus:border-brand-orange"
              />
            </label>

            <label className="mt-5 grid gap-2 text-sm font-bold text-brand-900">
              Attach file
              <input
                type="file"
                name="attachment"
                accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg"
                className="rounded-xl border border-dashed border-slate-300 bg-white px-4 py-3 text-sm text-slate-600 file:mr-4 file:rounded-lg file:border-0 file:bg-brand-900 file:px-4 file:py-2 file:text-sm file:font-bold file:text-white hover:border-brand-orange"
              />

              <span className="text-xs font-normal leading-6 text-slate-500">
                Optional. Accepted files: PDF, DOC, DOCX, TXT, PNG, JPG.
                Maximum size: 10 MB.
              </span>
            </label>

            <button
              type="submit"
              disabled={submitState.status === "loading"}
              className="button-primary mt-6 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitState.status === "loading"
                ? "Sending..."
                : content.form.submit}
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
