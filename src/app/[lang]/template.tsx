"use client";

import type { ReactNode } from "react";

type LocaleTemplateProps = {
  children: ReactNode;
};

export default function LocaleTemplate({
  children,
}: LocaleTemplateProps) {
  return <div className="page-enter">{children}</div>;
}
