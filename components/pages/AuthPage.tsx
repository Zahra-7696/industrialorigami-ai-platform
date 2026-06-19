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
    loginTitle: "ورود",
    signupTitle: "ایجاد حساب",
    loginIntro:
      "دسترسی به داشبورد آینده IndustrialOrigami.AI. احراز هویت فعلاً فقط نمونه رابط کاربری است.",
    signupIntro:
      "ایجاد حساب برای قابلیت‌های آینده همکاری، داشبورد و ثبت درخواست. این فرم فعلاً فقط نمونه رابط کاربری است.",
    name: "نام کامل",
    company: "شرکت یا سازمان",
    email: "ایمیل",
    password: "رمز عبور",
    loginButton: "ورود",
    signupButton: "ثبت‌نام",
    noAccount: "حساب ندارید؟",
    haveAccount: "قبلاً حساب دارید؟",
    signup: "ثبت‌نام",
    login: "ورود",
    note:
      "احراز هویت بک‌اند، ذخیره‌سازی پایگاه داده، نقش‌های کاربری و تأیید ایمیل در مرحله بعدی اضافه می‌شود.",
  },
  zh: {
    loginTitle: "登录",
    signupTitle: "创建账户",
    loginIntro:
      "访问未来的 IndustrialOrigami.AI 仪表板。身份验证目前只是前端原型。",
    signupIntro:
      "为未来的合作、仪表板和咨询功能创建账户。该表单目前只是前端原型。",
    name: "姓名",
    company: "公司或机构",
    email: "电子邮件",
    password: "密码",
    loginButton: "登录",
    signupButton: "注册",
    noAccount: "没有账户？",
    haveAccount: "已有账户？",
    signup: "注册",
    login: "登录",
    note:
      "后端身份验证、数据库存储、基于角色的访问控制和电子邮件验证将在后续阶段添加。",
  },
} as const;

export function AuthPage({ locale, mode }: AuthPageProps) {
  const text = labels[locale];
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
