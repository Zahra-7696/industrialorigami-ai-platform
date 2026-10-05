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

type CareerOpportunity = {
  slug: string;
  type: string;
  title: string;
  summary: string;
};

type SubmitState =
  | { status: "idle"; message: "" }
  | { status: "loading"; message: string }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

const fallbackOpportunity: CareerOpportunity = {
  slug: "future-opportunities",
  type: "Expression of interest",
  title: "Future Opportunities and Talent Network",
  summary:
    "Connect with us if your experience may support future AI, software, robotics, embedded systems, electronics, manufacturing, product or commercial work.",
};

function getCareerOpportunities(content: Dictionary["careers"]): CareerOpportunity[] {
  const possibleContent = content as Dictionary["careers"] & {
    opportunities?: CareerOpportunity[];
  };

  if (
    Array.isArray(possibleContent.opportunities) &&
    possibleContent.opportunities.length > 0
  ) {
    return possibleContent.opportunities;
  }

  return [fallbackOpportunity];
}

const labels = {
  en: {
    title: "Future Opportunities and Talent Network",
    intro:
      "Submit your expression of interest for future technical, research, engineering, software, data, AI, robotics, product or commercial opportunities.",
    formTitle: "Expression of interest form",
    name: "Full name",
    email: "Email address",
    phone: "Phone number",
    address: "Address",
    addressHelp:
      "Start typing your address. If map suggestions are not available, write the address manually.",
    interest: "Type of interest",
    workRight: "Right to work in New Zealand",
    message: "Short message",
    cv: "Upload CV",
    coverLetter: "Upload cover letter",
    additionalFile: "Additional file",
    submit: "Submit expression of interest",
    sending: "Sending...",
    note:
      "This form currently emails the application to the company contact. Database storage will be added in a later phase.",
    fileHelp:
      "Accepted files: PDF, DOC, DOCX. Maximum size: 10 MB per file.",
    success: "Your expression of interest has been sent successfully.",
    interestOptions: [
      "AI / Machine Learning",
      "Software Development",
      "Robotics and Automation",
      "Data Science and Analytics",
      "Mechanical / Project Engineering",
      "Research and Prototyping",
      "Business Development / Partnerships",
      "Internship or Graduate Opportunity",
      "Other",
    ],
    workRightOptions: [
      "New Zealand citizen",
      "New Zealand resident",
      "Permanent resident visa",
      "Accredited Employer Work Visa",
      "Post-study work visa",
      "Open work visa",
      "Student visa",
      "Visitor visa",
      "Need visa sponsorship",
      "Other",
    ],
  },
  fa: {
    title: "ÙØ±ØµØªâ€ŒÙ‡Ø§ÛŒ Ø¢ÛŒÙ†Ø¯Ù‡ Ùˆ Ø´Ø¨Ú©Ù‡ Ø§Ø³ØªØ¹Ø¯Ø§Ø¯Ù‡Ø§",
    intro:
      "Ø¨Ø±Ø§ÛŒ ÙØ±ØµØªâ€ŒÙ‡Ø§ÛŒ Ø¢ÛŒÙ†Ø¯Ù‡ Ø¯Ø± Ø­ÙˆØ²Ù‡â€ŒÙ‡Ø§ÛŒ ÙÙ†ÛŒØŒ Ù¾Ú˜ÙˆÙ‡Ø´ÛŒØŒ Ù…Ù‡Ù†Ø¯Ø³ÛŒØŒ Ù†Ø±Ù…â€ŒØ§ÙØ²Ø§Ø±ØŒ Ø¯Ø§Ø¯Ù‡ØŒ Ù‡ÙˆØ´ Ù…ØµÙ†ÙˆØ¹ÛŒØŒ Ø±Ø¨Ø§ØªÛŒÚ©ØŒ Ù…Ø­ØµÙˆÙ„ ÛŒØ§ Ù‡Ù…Ú©Ø§Ø±ÛŒ ØªØ¬Ø§Ø±ÛŒ ÙØ±Ù… Ø¹Ù„Ø§Ù‚Ù‡â€ŒÙ…Ù†Ø¯ÛŒ Ø±Ø§ Ø§Ø±Ø³Ø§Ù„ Ú©Ù†ÛŒØ¯.",
    formTitle: "ÙØ±Ù… Ø§Ø¹Ù„Ø§Ù… Ø¹Ù„Ø§Ù‚Ù‡â€ŒÙ…Ù†Ø¯ÛŒ",
    name: "Ù†Ø§Ù… Ú©Ø§Ù…Ù„",
    email: "Ø§ÛŒÙ…ÛŒÙ„",
    phone: "Ø´Ù…Ø§Ø±Ù‡ ØªÙ…Ø§Ø³",
    address: "Ø¢Ø¯Ø±Ø³",
    addressHelp:
      "Ø¢Ø¯Ø±Ø³ Ø±Ø§ ØªØ§ÛŒÙ¾ Ú©Ù†ÛŒØ¯. Ø§Ú¯Ø± Ù¾ÛŒØ´Ù†Ù‡Ø§Ø¯ Ù†Ù‚Ø´Ù‡ ÙØ¹Ø§Ù„ Ù†Ø¨ÙˆØ¯ØŒ Ø¢Ø¯Ø±Ø³ Ø±Ø§ Ø¯Ø³ØªÛŒ ÙˆØ§Ø±Ø¯ Ú©Ù†ÛŒØ¯.",
    interest: "Ù†ÙˆØ¹ Ø¹Ù„Ø§Ù‚Ù‡â€ŒÙ…Ù†Ø¯ÛŒ",
    workRight: "Ø­Ù‚ Ú©Ø§Ø± Ø¯Ø± Ù†ÛŒÙˆØ²ÛŒÙ„Ù†Ø¯",
    message: "Ù¾ÛŒØ§Ù… Ú©ÙˆØªØ§Ù‡",
    cv: "Ø¢Ù¾Ù„ÙˆØ¯ Ø±Ø²ÙˆÙ…Ù‡",
    coverLetter: "Ø¢Ù¾Ù„ÙˆØ¯ Ú©Ø§ÙˆØ± Ù„ØªØ±",
    additionalFile: "ÙØ§ÛŒÙ„ ØªÚ©Ù…ÛŒÙ„ÛŒ",
    submit: "Ø§Ø±Ø³Ø§Ù„ Ø§Ø¹Ù„Ø§Ù… Ø¹Ù„Ø§Ù‚Ù‡â€ŒÙ…Ù†Ø¯ÛŒ",
    sending: "Ø¯Ø± Ø­Ø§Ù„ Ø§Ø±Ø³Ø§Ù„...",
    note:
      "Ø§ÛŒÙ† ÙØ±Ù… ÙØ¹Ù„Ø§Ù‹ Ø¯Ø±Ø®ÙˆØ§Ø³Øª Ø±Ø§ Ø¨Ù‡ Ø§ÛŒÙ…ÛŒÙ„ Ø´Ø±Ú©Øª Ø§Ø±Ø³Ø§Ù„ Ù…ÛŒâ€ŒÚ©Ù†Ø¯. Ø°Ø®ÛŒØ±Ù‡â€ŒØ³Ø§Ø²ÛŒ Ø¯Ø± Ù¾Ø§ÛŒÚ¯Ø§Ù‡ Ø¯Ø§Ø¯Ù‡ Ø¯Ø± Ù…Ø±Ø­Ù„Ù‡ Ø¨Ø¹Ø¯ Ø§Ø¶Ø§ÙÙ‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯.",
    fileHelp:
      "ÙØ±Ù…Øªâ€ŒÙ‡Ø§ÛŒ Ù…Ø¬Ø§Ø²: PDFØŒ DOCØŒ DOCX. Ø­Ø¯Ø§Ú©Ø«Ø± Ø­Ø¬Ù… Ù‡Ø± ÙØ§ÛŒÙ„: Û±Û° Ù…Ú¯Ø§Ø¨Ø§ÛŒØª.",
    success: "ÙØ±Ù… Ø¹Ù„Ø§Ù‚Ù‡â€ŒÙ…Ù†Ø¯ÛŒ Ø´Ù…Ø§ Ø¨Ø§ Ù…ÙˆÙÙ‚ÛŒØª Ø§Ø±Ø³Ø§Ù„ Ø´Ø¯.",
    interestOptions: [
      "Ù‡ÙˆØ´ Ù…ØµÙ†ÙˆØ¹ÛŒ / ÛŒØ§Ø¯Ú¯ÛŒØ±ÛŒ Ù…Ø§Ø´ÛŒÙ†",
      "ØªÙˆØ³Ø¹Ù‡ Ù†Ø±Ù…â€ŒØ§ÙØ²Ø§Ø±",
      "Ø±Ø¨Ø§ØªÛŒÚ© Ùˆ Ø§ØªÙˆÙ…Ø§Ø³ÛŒÙˆÙ†",
      "Ø¯Ø§Ø¯Ù‡â€ŒÚ©Ø§ÙˆÛŒ Ùˆ ØªØ­Ù„ÛŒÙ„ Ø¯Ø§Ø¯Ù‡",
      "Ù…Ù‡Ù†Ø¯Ø³ÛŒ Ù…Ú©Ø§Ù†ÛŒÚ© / Ù…Ø¯ÛŒØ±ÛŒØª Ù¾Ø±ÙˆÚ˜Ù‡",
      "Ù¾Ú˜ÙˆÙ‡Ø´ Ùˆ Ù†Ù…ÙˆÙ†Ù‡â€ŒØ³Ø§Ø²ÛŒ",
      "ØªÙˆØ³Ø¹Ù‡ Ú©Ø³Ø¨â€ŒÙˆÚ©Ø§Ø± / Ù‡Ù…Ú©Ø§Ø±ÛŒâ€ŒÙ‡Ø§",
      "Ú©Ø§Ø±Ø¢Ù…ÙˆØ²ÛŒ ÛŒØ§ ÙØ±ØµØª ÙØ§Ø±Øºâ€ŒØ§Ù„ØªØ­ØµÛŒÙ„Ø§Ù†",
      "Ø³Ø§ÛŒØ±",
    ],
    workRightOptions: [
      "Ø´Ù‡Ø±ÙˆÙ†Ø¯ Ù†ÛŒÙˆØ²ÛŒÙ„Ù†Ø¯",
      "Ø±Ø²ÛŒØ¯Ù†Øª Ù†ÛŒÙˆØ²ÛŒÙ„Ù†Ø¯",
      "ÙˆÛŒØ²Ø§ÛŒ Ø§Ù‚Ø§Ù…Øª Ø¯Ø§Ø¦Ù…",
      "ÙˆÛŒØ²Ø§ÛŒ Ú©Ø§Ø± Ú©Ø§Ø±ÙØ±Ù…Ø§ÛŒ Ù…Ø¹ØªØ¨Ø±",
      "ÙˆÛŒØ²Ø§ÛŒ Ú©Ø§Ø± Ù¾Ø³ Ø§Ø² ØªØ­ØµÛŒÙ„",
      "ÙˆÛŒØ²Ø§ÛŒ Ú©Ø§Ø± Ø¢Ø²Ø§Ø¯",
      "ÙˆÛŒØ²Ø§ÛŒ Ø¯Ø§Ù†Ø´Ø¬ÙˆÛŒÛŒ",
      "ÙˆÛŒØ²Ø§ÛŒ ØªÙˆØ±ÛŒØ³ØªÛŒ",
      "Ù†ÛŒØ§Ø²Ù…Ù†Ø¯ Ø§Ø³Ù¾Ø§Ù†Ø³Ø±Ø´ÛŒÙ¾ ÙˆÛŒØ²Ø§",
      "Ø³Ø§ÛŒØ±",
    ],
  },
  zh: {
    title: "æœªæ¥æœºä¼šä¸Žäººæ‰ç½‘ç»œ",
    intro:
      "æäº¤æ„å‘è¡¨ï¼Œç”³è¯·æœªæ¥çš„æŠ€æœ¯ã€ç ”ç©¶ã€å·¥ç¨‹ã€è½¯ä»¶ã€æ•°æ®ã€äººå·¥æ™ºèƒ½ã€æœºå™¨äººã€äº§å“æˆ–å•†ä¸šåˆä½œæœºä¼šã€‚",
    formTitle: "æ„å‘ç”³è¯·è¡¨",
    name: "å§“å",
    email: "ç”µå­é‚®ä»¶",
    phone: "ç”µè¯å·ç ",
    address: "åœ°å€",
    addressHelp:
      "å¼€å§‹è¾“å…¥åœ°å€ã€‚å¦‚æžœåœ°å›¾å»ºè®®ä¸å¯ç”¨ï¼Œè¯·æ‰‹åŠ¨å¡«å†™åœ°å€ã€‚",
    interest: "å…´è¶£æ–¹å‘",
    workRight: "åœ¨æ–°è¥¿å…°å·¥ä½œçš„æƒåˆ©",
    message: "ç®€çŸ­ç•™è¨€",
    cv: "ä¸Šä¼ ç®€åŽ†",
    coverLetter: "ä¸Šä¼ æ±‚èŒä¿¡",
    additionalFile: "å…¶ä»–é™„ä»¶",
    submit: "æäº¤æ„å‘ç”³è¯·",
    sending: "æ­£åœ¨å‘é€...",
    note:
      "æ­¤è¡¨å•ç›®å‰ä¼šé€šè¿‡ç”µå­é‚®ä»¶å‘é€ç”³è¯·ã€‚æ•°æ®åº“å­˜å‚¨å°†åœ¨åŽç»­é˜¶æ®µæ·»åŠ ã€‚",
    fileHelp:
      "å…è®¸æ–‡ä»¶ï¼šPDFã€DOCã€DOCXã€‚æ¯ä¸ªæ–‡ä»¶æœ€å¤§ 10 MBã€‚",
    success: "æ‚¨çš„æ„å‘ç”³è¯·å·²æˆåŠŸå‘é€ã€‚",
    interestOptions: [
      "äººå·¥æ™ºèƒ½ / æœºå™¨å­¦ä¹ ",
      "è½¯ä»¶å¼€å‘",
      "æœºå™¨äººä¸Žè‡ªåŠ¨åŒ–",
      "æ•°æ®ç§‘å­¦ä¸Žåˆ†æž",
      "æœºæ¢° / é¡¹ç›®å·¥ç¨‹",
      "ç ”ç©¶ä¸ŽåŽŸåž‹å¼€å‘",
      "ä¸šåŠ¡å‘å±• / åˆä½œä¼™ä¼´å…³ç³»",
      "å®žä¹ æˆ–æ¯•ä¸šç”Ÿæœºä¼š",
      "å…¶ä»–",
    ],
    workRightOptions: [
      "æ–°è¥¿å…°å…¬æ°‘",
      "æ–°è¥¿å…°å±…æ°‘",
      "æ°¸ä¹…å±…æ°‘ç­¾è¯",
      "è®¤è¯é›‡ä¸»å·¥ä½œç­¾è¯",
      "æ¯•ä¸šåŽå·¥ä½œç­¾è¯",
      "å¼€æ”¾å·¥ä½œç­¾è¯",
      "å­¦ç”Ÿç­¾è¯",
      "è®¿é—®ç­¾è¯",
      "éœ€è¦ç­¾è¯æ‹…ä¿",
      "å…¶ä»–",
    ],
  },
} as const;

export function CareerApplyPage({
  locale,
  dictionary,
  opportunitySlug,
}: CareerApplyPageProps) {
  const text = labels[locale as keyof typeof labels] ?? labels.en;
  const formRef = useRef<HTMLFormElement>(null);
  const opportunities = getCareerOpportunities(dictionary.careers);

  const opportunity =
    opportunities.find((item) => item.slug === opportunitySlug) ??
    fallbackOpportunity;

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
      message: text.sending,
    });

    try {
      const formData = new FormData(formRef.current);
      formData.set("opportunity", opportunity.title);
      formData.set("opportunitySlug", opportunity.slug);

      const response = await fetch("/api/careers", {
        method: "POST",
        body: formData,
      });

      const result = (await response.json()) as {
        ok?: boolean;
        message?: string;
      };

      if (!response.ok || !result.ok) {
        throw new Error(
          result.message ?? "The application could not be sent.",
        );
      }

      formRef.current.reset();

      setSubmitState({
        status: "success",
        message: result.message ?? text.success,
      });
    } catch (error) {
      setSubmitState({
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong while sending the application.",
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
            </div>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-brand-900">
                {text.phone}
                <input
                  type="tel"
                  name="phone"
                  required
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
                required
                autoComplete="street-address"
                placeholder="Start typing your address or write it manually"
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
                required
                minLength={10}
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
                  className="rounded-xl border border-dashed border-slate-300 bg-white px-4 py-3 text-sm text-slate-600 file:mr-4 file:rounded-lg file:border-0 file:bg-brand-900 file:px-4 file:py-2 file:text-sm file:font-bold file:text-white hover:border-brand-orange"
                />
              </label>

              <label className="grid gap-2 text-sm font-bold text-brand-900">
                {text.coverLetter}
                <input
                  type="file"
                  name="coverLetter"
                  accept=".pdf,.doc,.docx"
                  className="rounded-xl border border-dashed border-slate-300 bg-white px-4 py-3 text-sm text-slate-600 file:mr-4 file:rounded-lg file:border-0 file:bg-brand-900 file:px-4 file:py-2 file:text-sm file:font-bold file:text-white hover:border-brand-orange"
                />
              </label>
            </div>

            <label className="mt-5 grid gap-2 text-sm font-bold text-brand-900">
              {text.additionalFile}
              <input
                type="file"
                name="additionalFile"
                accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg"
                className="rounded-xl border border-dashed border-slate-300 bg-white px-4 py-3 text-sm text-slate-600 file:mr-4 file:rounded-lg file:border-0 file:bg-brand-900 file:px-4 file:py-2 file:text-sm file:font-bold file:text-white hover:border-brand-orange"
              />

              <span className="text-xs font-normal leading-6 text-slate-500">
                {text.fileHelp}
              </span>
            </label>

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

