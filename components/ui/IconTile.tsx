type IconTileProps = {
  icon: string;
  title: string;
  description: string;
};

export function IconTile({
  icon,
  title,
  description,
}: IconTileProps) {
  return (
    <article className="surface-card group rounded-3xl p-7 transition duration-300">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-400/25 bg-amber-400/10 text-xl text-brand-orange">
        {icon}
      </div>
      <h3 className="mt-6 text-xl font-black text-white">{title}</h3>
      <p className="mt-3 leading-7 text-slate-400">{description}</p>
    </article>
  );
}
