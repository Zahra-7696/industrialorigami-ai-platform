type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "mx-auto text-center" : ""}>
      {eyebrow ? <p className="page-eyebrow">{eyebrow}</p> : null}
      <h2
        className={[
          "section-title",
          light ? "section-title-light" : "",
          eyebrow ? "mt-4" : "",
        ].join(" ")}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={[
            "section-copy mt-5",
            light ? "section-copy-light" : "",
            centered ? "mx-auto" : "",
          ].join(" ")}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
