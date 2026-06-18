import { notFound } from "next/navigation";

import { ServiceDetailPage } from "@/components/pages/ServiceDetailPage";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import {
  isServiceSlug,
  serviceSlugs,
} from "@/lib/catalog";

type PageProps = {
  params: Promise<{ lang: string; slug: string }>;
};

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export default async function Page({ params }: PageProps) {
  const { lang, slug } = await params;

  if (!isLocale(lang) || !isServiceSlug(slug)) {
    notFound();
  }

  const locale: Locale = lang;
  const dictionary = getDictionary(locale);
  const service = dictionary.services.items.find(
    (item) => item.slug === slug,
  );

  if (!service) {
    notFound();
  }

  return (
    <ServiceDetailPage
      dictionary={dictionary}
      service={service}
    />
  );
}
