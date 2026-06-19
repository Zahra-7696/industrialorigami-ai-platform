import { redirect } from "next/navigation";

import { isLocale } from "@/i18n/config";

type PageProps = {
  params: Promise<{
    lang: string;
  }>;
};

export default async function Page({ params }: PageProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    redirect("/en/projects/robotic-hand");
  }

  redirect(`/${lang}/projects/robotic-hand`);
}