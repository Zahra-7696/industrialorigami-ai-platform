import { notFound } from "next/navigation";

import { AgricultureProjectsPage } from "@/components/pages/AgricultureProjectsPage";
import { ProjectDetailPage } from "@/components/pages/ProjectDetailPage";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import {
  isProjectSlug,
  projectSlugs,
} from "@/lib/catalog";

type PageProps = {
  params: Promise<{ lang: string; slug: string }>;
};

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export default async function Page({ params }: PageProps) {
  const { lang, slug } = await params;

  if (!isLocale(lang) || !isProjectSlug(slug)) {
    notFound();
  }

  const locale: Locale = lang;
  const dictionary = getDictionary(locale);
  const project = dictionary.projects.items.find(
    (item) => item.slug === slug,
  );

  if (!project) {
    notFound();
  }

  if (slug === "agriculture-industry-research-projects") {
    return (
      <AgricultureProjectsPage
        dictionary={dictionary}
        project={project}
      />
    );
  }

  return (
    <ProjectDetailPage
      dictionary={dictionary}
      project={project}
    />
  );
}
