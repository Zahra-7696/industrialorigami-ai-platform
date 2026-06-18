import { notFound } from "next/navigation";

import { ProjectsIndexPage } from "@/components/pages/ProjectsIndexPage";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

type PageProps = {
  params: Promise<{ lang: string }>;
};

export default async function Page({ params }: PageProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const locale: Locale = lang;
  const dictionary = getDictionary(locale);

  return (
    <ProjectsIndexPage locale={locale} dictionary={dictionary} />
  );
}
