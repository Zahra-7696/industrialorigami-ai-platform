import { notFound } from "next/navigation";

import { RoboticHandPage } from "@/components/pages/RoboticHandPage";
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
  const project = dictionary.projects.items.find(
    (item) => item.slug === "robotic-hand",
  );

  if (!project) {
    notFound();
  }

  return (
    <RoboticHandPage
      locale={locale}
      dictionary={dictionary}
      project={project}
    />
  );
}
