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
    title: "فرصت‌های آینده و شبکه استعدادها",
    intro:
      "برای فرصت‌های آینده در حوزه‌های فنی، پژوهشی، مهندسی، نرم‌افزار، داده، هوش مصنوعی، رباتیک، محصول یا همکاری تجاری فرم علاقه‌مندی را ارسال کنید.",
    formTitle: "فرم اعلام علاقه‌مندی",
    name: "نام کامل",
    email: "ایمیل",
    phone: "شماره تماس",
    address: "آدرس",
    addressHelp:
      "آدرس را تایپ کنید. اگر پیشنهاد نقشه فعال نبود، آدرس را دستی وارد کنید.",
    interest: "نوع علاقه‌مندی",
    workRight: "حق کار در نیوزیلند",
    message: "پیام کوتاه",
    cv: "آپلود رزومه",
    coverLetter: "آپلود کاور لتر",
    additionalFile: "فایل تکمیلی",
    submit: "ارسال اعلام علاقه‌مندی",
    sending: "در حال ارسال...",
    note:
      "این فرم فعلاً درخواست را به ایمیل شرکت ارسال می‌کند. ذخیره‌سازی در پایگاه داده در مرحله بعد اضافه می‌شود.",
    fileHelp:
      "فرمت‌های مجاز: PDF، DOC، DOCX. حداکثر حجم هر فایل: ۱۰ مگابایت.",
    success: "فرم علاقه‌مندی شما با موفقیت ارسال شد.",
    interestOptions: [
      "هوش مصنوعی / یادگیری ماشین",
      "توسعه نرم‌افزار",
      "رباتیک و اتوماسیون",
      "داده‌کاوی و تحلیل داده",
      "مهندسی مکانیک / مدیریت پروژه",
      "پژوهش و نمونه‌سازی",
      "توسعه کسب‌وکار / همکاری‌ها",
      "کارآموزی یا فرصت فارغ‌التحصیلان",
      "سایر",
    ],
    workRightOptions: [
      "شهروند نیوزیلند",
      "رزیدنت نیوزیلند",
      "ویزای اقامت دائم",
      "ویزای کار کارفرمای معتبر",
      "ویزای کار پس از تحصیل",
      "ویزای کار آزاد",
      "ویزای دانشجویی",
      "ویزای توریستی",
      "نیازمند اسپانسرشیپ ویزا",
      "سایر",
    ],
  },
  zh: {
    title: "未来机会与人才网络",
    intro:
      "提交意向表，申请未来的技术、研究、工程、软件、数据、人工智能、机器人、产品或商业合作机会。",
    formTitle: "意向申请表",
    name: "姓名",
    email: "电子邮件",
    phone: "电话号码",
    address: "地址",
    addressHelp:
      "开始输入地址。如果地图建议不可用，请手动填写地址。",
    interest: "兴趣方向",
    workRight: "在新西兰工作的权利",
    message: "简短留言",
    cv: "上传简历",
    coverLetter: "上传求职信",
    additionalFile: "其他附件",
    submit: "提交意向申请",
    sending: "正在发送...",
    note:
      "此表单目前会通过电子邮件发送申请。数据库存储将在后续阶段添加。",
    fileHelp:
      "允许文件：PDF、DOC、DOCX。每个文件最大 10 MB。",
    success: "您的意向申请已成功发送。",
    interestOptions: [
      "人工智能 / 机器学习",
      "软件开发",
      "机器人与自动化",
      "数据科学与分析",
      "机械 / 项目工程",
      "研究与原型开发",
      "业务发展 / 合作伙伴关系",
      "实习或毕业生机会",
      "其他",
    ],
    workRightOptions: [
      "新西兰公民",
      "新西兰居民",
      "永久居民签证",
      "认证雇主工作签证",
      "毕业后工作签证",
      "开放工作签证",
      "学生签证",
      "访问签证",
      "需要签证担保",
      "其他",
    ],
  },
} as const;

export function CareerApplyPage({
  locale,
  dictionary,
  opportunitySlug,
}: CareerApplyPageProps) {
  const text = labels[locale];
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

            <div className="mt-7 rounded-3xl border border-amber-200 bg-amber-50 p-6 text-sm leading-7 text-amber-950">
              {text.note}
            </div>
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
