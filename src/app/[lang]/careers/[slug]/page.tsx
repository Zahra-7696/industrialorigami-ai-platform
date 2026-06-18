import { notFound } from "next/navigation";

import { CareerDetailPage } from "@/components/pages/CareerDetailPage";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import {
  careerOpportunities,
  isCareerSlug,
} from "@/lib/careers";

type PageProps = {
  params: Promise<{ lang: string; slug: string }>;
};

export function generateStaticParams() {
  return locales.flatMap((lang) =>
    careerOpportunities.map((opportunity) => ({
      lang,
      slug: opportunity.slug,
    })),
  );
}

export default async function Page({ params }: PageProps) {
  const { lang, slug } = await params;

  if (!isLocale(lang) || !isCareerSlug(slug)) {
    notFound();
  }

  const locale: Locale = lang;
  const dictionary = getDictionary(locale);

  return (
    <CareerDetailPage
      locale={locale}
      dictionary={dictionary}
      slug={slug}
    />
  );
}
