import { notFound } from "next/navigation";

import { CareerApplyPage } from "@/components/pages/CareerApplyPage";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

type PageProps = {
  params: Promise<{
    lang: string;
    slug: string;
  }>;
};

const fallbackSlug = "future-opportunities";

export default async function Page({ params }: PageProps) {
  const { lang, slug } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const locale: Locale = lang;
  const dictionary = getDictionary(locale);
  const possibleCareers = dictionary.careers as typeof dictionary.careers & {
    opportunities?: Array<{ slug: string }>;
  };

  const knownSlugs = Array.isArray(possibleCareers.opportunities)
    ? possibleCareers.opportunities.map((item) => item.slug)
    : [fallbackSlug];

  if (!knownSlugs.includes(slug)) {
    notFound();
  }

  return (
    <CareerApplyPage
      locale={locale}
      dictionary={dictionary}
      opportunitySlug={slug}
    />
  );
}
