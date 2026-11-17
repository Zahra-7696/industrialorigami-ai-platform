import Link from "next/link";

import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";

type AuthPageProps = {
  locale: Locale;
  dictionary: Dictionary;
  mode: "login" | "signup";
};

export function AuthPage({
  locale,
  dictionary,
  mode,
}: AuthPageProps) {
  const text = dictionary.auth;
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
