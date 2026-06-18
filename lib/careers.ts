export const careerOpportunities = [
  {
    slug: "future-opportunities",
    type: "expressionOfInterest",
  },
] as const;

export type CareerOpportunity = (typeof careerOpportunities)[number];
export type CareerSlug = CareerOpportunity["slug"];

export function isCareerSlug(value: string): value is CareerSlug {
  return careerOpportunities.some(
    (opportunity) => opportunity.slug === value,
  );
}
