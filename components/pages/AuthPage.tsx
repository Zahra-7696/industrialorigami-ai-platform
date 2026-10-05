import Link from "next/link";

import type { Locale } from "@/i18n/config";

type AuthPageProps = {
  locale: Locale;
  mode: "login" | "signup";
};

const labels = {
  en: {
    loginTitle: "Log in",
    signupTitle: "Create an account",
    loginIntro:
      "Access the future IndustrialOrigami.AI dashboard. Authentication is currently a front-end prototype.",
    signupIntro:
      "Create an account for future collaboration, dashboard and enquiry features. This form is currently a front-end prototype.",
    name: "Full name",
    company: "Company or organisation",
    email: "Email address",
    password: "Password",
    loginButton: "Log in",
    signupButton: "Sign up",
    noAccount: "Do not have an account?",
    haveAccount: "Already have an account?",
    signup: "Sign up",
    login: "Log in",
    note:
      "Backend authentication, database storage, role-based access and email verification will be added in a later phase.",
  },
  fa: {
    loginTitle: "ÙˆØ±ÙˆØ¯",
    signupTitle: "Ø§ÛŒØ¬Ø§Ø¯ Ø­Ø³Ø§Ø¨",
    loginIntro:
      "Ø¯Ø³ØªØ±Ø³ÛŒ Ø¨Ù‡ Ø¯Ø§Ø´Ø¨ÙˆØ±Ø¯ Ø¢ÛŒÙ†Ø¯Ù‡ IndustrialOrigami.AI. Ø§Ø­Ø±Ø§Ø² Ù‡ÙˆÛŒØª ÙØ¹Ù„Ø§Ù‹ ÙÙ‚Ø· Ù†Ù…ÙˆÙ†Ù‡ Ø±Ø§Ø¨Ø· Ú©Ø§Ø±Ø¨Ø±ÛŒ Ø§Ø³Øª.",
    signupIntro:
      "Ø§ÛŒØ¬Ø§Ø¯ Ø­Ø³Ø§Ø¨ Ø¨Ø±Ø§ÛŒ Ù‚Ø§Ø¨Ù„ÛŒØªâ€ŒÙ‡Ø§ÛŒ Ø¢ÛŒÙ†Ø¯Ù‡ Ù‡Ù…Ú©Ø§Ø±ÛŒØŒ Ø¯Ø§Ø´Ø¨ÙˆØ±Ø¯ Ùˆ Ø«Ø¨Øª Ø¯Ø±Ø®ÙˆØ§Ø³Øª. Ø§ÛŒÙ† ÙØ±Ù… ÙØ¹Ù„Ø§Ù‹ ÙÙ‚Ø· Ù†Ù…ÙˆÙ†Ù‡ Ø±Ø§Ø¨Ø· Ú©Ø§Ø±Ø¨Ø±ÛŒ Ø§Ø³Øª.",
    name: "Ù†Ø§Ù… Ú©Ø§Ù…Ù„",
    company: "Ø´Ø±Ú©Øª ÛŒØ§ Ø³Ø§Ø²Ù…Ø§Ù†",
    email: "Ø§ÛŒÙ…ÛŒÙ„",
    password: "Ø±Ù…Ø² Ø¹Ø¨ÙˆØ±",
    loginButton: "ÙˆØ±ÙˆØ¯",
    signupButton: "Ø«Ø¨Øªâ€ŒÙ†Ø§Ù…",
    noAccount: "Ø­Ø³Ø§Ø¨ Ù†Ø¯Ø§Ø±ÛŒØ¯ØŸ",
    haveAccount: "Ù‚Ø¨Ù„Ø§Ù‹ Ø­Ø³Ø§Ø¨ Ø¯Ø§Ø±ÛŒØ¯ØŸ",
    signup: "Ø«Ø¨Øªâ€ŒÙ†Ø§Ù…",
    login: "ÙˆØ±ÙˆØ¯",
    note:
      "Ø§Ø­Ø±Ø§Ø² Ù‡ÙˆÛŒØª Ø¨Ú©â€ŒØ§Ù†Ø¯ØŒ Ø°Ø®ÛŒØ±Ù‡â€ŒØ³Ø§Ø²ÛŒ Ù¾Ø§ÛŒÚ¯Ø§Ù‡ Ø¯Ø§Ø¯Ù‡ØŒ Ù†Ù‚Ø´â€ŒÙ‡Ø§ÛŒ Ú©Ø§Ø±Ø¨Ø±ÛŒ Ùˆ ØªØ£ÛŒÛŒØ¯ Ø§ÛŒÙ…ÛŒÙ„ Ø¯Ø± Ù…Ø±Ø­Ù„Ù‡ Ø¨Ø¹Ø¯ÛŒ Ø§Ø¶Ø§ÙÙ‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯.",
  },
  zh: {
    loginTitle: "ç™»å½•",
    signupTitle: "åˆ›å»ºè´¦æˆ·",
    loginIntro:
      "è®¿é—®æœªæ¥çš„ IndustrialOrigami.AI ä»ªè¡¨æ¿ã€‚èº«ä»½éªŒè¯ç›®å‰åªæ˜¯å‰ç«¯åŽŸåž‹ã€‚",
    signupIntro:
      "ä¸ºæœªæ¥çš„åˆä½œã€ä»ªè¡¨æ¿å’Œå’¨è¯¢åŠŸèƒ½åˆ›å»ºè´¦æˆ·ã€‚è¯¥è¡¨å•ç›®å‰åªæ˜¯å‰ç«¯åŽŸåž‹ã€‚",
    name: "å§“å",
    company: "å…¬å¸æˆ–æœºæž„",
    email: "ç”µå­é‚®ä»¶",
    password: "å¯†ç ",
    loginButton: "ç™»å½•",
    signupButton: "æ³¨å†Œ",
    noAccount: "æ²¡æœ‰è´¦æˆ·ï¼Ÿ",
    haveAccount: "å·²æœ‰è´¦æˆ·ï¼Ÿ",
    signup: "æ³¨å†Œ",
    login: "ç™»å½•",
    note:
      "åŽç«¯èº«ä»½éªŒè¯ã€æ•°æ®åº“å­˜å‚¨ã€åŸºäºŽè§’è‰²çš„è®¿é—®æŽ§åˆ¶å’Œç”µå­é‚®ä»¶éªŒè¯å°†åœ¨åŽç»­é˜¶æ®µæ·»åŠ ã€‚",
  },
} as const;

export function AuthPage({ locale, mode }: AuthPageProps) {
  const text = labels[locale as keyof typeof labels] ?? labels.en;
  const isSignup = mode === "signup";

  return (
    <main className="section-white">
      <section className="site-container grid min-h-[calc(100vh-10rem)] items-center py-14">
        <div className="mx-auto grid w-full max-w-5xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl lg:grid-cols-[0.9fr_1.1fr]">
          <div className="section-navy flex flex-col justify-between p-8 sm:p-10">
            <div>
              <p className="page-eyebrow">IndustrialOrigami.AI</p>

              <h1 className="mt-5 text-4xl font-black leading-tight text-white sm:text-5xl">
                {isSignup ? text.signupTitle : text.loginTitle}
              </h1>

              <p className="mt-5 leading-8 text-slate-300">
                {isSignup ? text.signupIntro : text.loginIntro}
              </p>
            </div>

            <p className="mt-10 rounded-2xl border border-white/10 bg-white/6 p-5 text-sm leading-7 text-slate-300">
              {text.note}
            </p>
          </div>

          <form className="p-8 sm:p-10">
            <div className="grid gap-5">
              {isSignup ? (
                <>
                  <label className="grid gap-2 text-sm font-bold text-brand-900">
                    {text.name}
                    <input
                      type="text"
                      className="rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-brand-orange"
                    />
                  </label>

                  <label className="grid gap-2 text-sm font-bold text-brand-900">
                    {text.company}
                    <input
                      type="text"
                      className="rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-brand-orange"
                    />
                  </label>
                </>
              ) : null}

              <label className="grid gap-2 text-sm font-bold text-brand-900">
                {text.email}
                <input
                  type="email"
                  className="rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-brand-orange"
                />
              </label>

              <label className="grid gap-2 text-sm font-bold text-brand-900">
                {text.password}
                <input
                  type="password"
                  className="rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-brand-orange"
                />
              </label>
            </div>

            <button type="button" className="button-primary mt-7 w-full">
              {isSignup ? text.signupButton : text.loginButton}
            </button>

            <p className="mt-6 text-center text-sm text-slate-600">
              {isSignup ? text.haveAccount : text.noAccount}{" "}
              <Link
                href={`/${locale}/${isSignup ? "login" : "signup"}`}
                className="font-black text-brand-700 hover:text-brand-orange"
              >
                {isSignup ? text.login : text.signup}
              </Link>
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}

