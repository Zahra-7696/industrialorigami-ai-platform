type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
}: PageHeroProps) {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="site-container section-space-sm">
        <p className="page-eyebrow">{eyebrow}</p>
        <h1 className="page-title mt-5">{title}</h1>
        <p className="page-intro mt-7">{description}</p>
      </div>
    </section>
  );
}
