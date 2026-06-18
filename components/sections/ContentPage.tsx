type ContentPageProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function ContentPage({
  eyebrow,
  title,
  description,
}: ContentPageProps) {
  return (
    <main className="min-h-[65vh] bg-slate-950 px-5 py-24 text-white lg:px-8">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
          {eyebrow}
        </p>
        <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">
          {title}
        </h1>
        <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
          {description}
        </p>

        <div className="mt-14 rounded-3xl border border-white/10 bg-white/[0.04] p-8">
          <p className="text-sm leading-7 text-slate-400">
            Detailed content, case studies, evidence, diagrams and calls to
            action will be added in the next project phase.
          </p>
        </div>
      </div>
    </main>
  );
}
