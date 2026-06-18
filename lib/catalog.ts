export const serviceSlugs = [
  "robotics-and-automation",
  "data-science-and-analytics",
  "software-development",
  "rag-intelligent-assistants",
  "research-prototyping-technology-consulting",
] as const;

export type ServiceSlug = (typeof serviceSlugs)[number];

export function isServiceSlug(value: string): value is ServiceSlug {
  return serviceSlugs.includes(value as ServiceSlug);
}

export const projectSlugs = [
  "robotic-hand",
  "industrial-rag-platform",
  "predictive-maintenance",
  "digital-twin",
] as const;

export type ProjectSlug = (typeof projectSlugs)[number];

export function isProjectSlug(value: string): value is ProjectSlug {
  return projectSlugs.includes(value as ProjectSlug);
}
