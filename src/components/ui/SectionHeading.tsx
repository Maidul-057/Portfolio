type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div style={{ maxWidth: "48rem" }} className="space-y-3">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-7 text-slate-600 dark:text-slate-300">{description}</p>
      ) : null}
    </div>
  );
}
