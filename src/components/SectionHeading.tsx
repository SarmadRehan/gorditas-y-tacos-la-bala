type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  id?: string;
  tone?: "light" | "dark";
};

export function SectionHeading({ eyebrow, title, intro, id, tone = "light" }: SectionHeadingProps) {
  const dark = tone === "dark";
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p
        className={`inline-block rounded-sm px-3 py-1 font-condensed text-sm font-semibold uppercase tracking-[0.2em] ${
          dark ? "bg-lima text-vino-deep" : "bg-verde text-lima"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        id={id}
        className={`mt-4 font-display text-4xl text-balance sm:text-5xl ${dark ? "text-lima" : "text-vino"}`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-4 text-lg leading-relaxed ${dark ? "text-crema/80" : "text-muted"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}
