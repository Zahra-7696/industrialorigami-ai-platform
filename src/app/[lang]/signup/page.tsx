import { notFound } from "next/navigation";

import { AuthPage } from "@/components/pages/AuthPage";
import { isLocale, type Locale } from "@/i18n/config";

type PageProps = {
  params: Promise<{ lang: string }>;
};

export default async function Page({ params }: PageProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const locale: Locale = lang;

  return <AuthPage locale={locale} mode="signup" />;
}
