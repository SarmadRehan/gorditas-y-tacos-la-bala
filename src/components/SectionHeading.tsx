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
        className={`inline-block -rotate-2 rounded-sm px-3 py-1 font-condensed text-sm font-semibold uppercase tracking-[0.2em] ${
          dark ? "bg-amarillo text-ink" : "bg-rojo text-white"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        id={id}
        className={`mt-4 font-display text-4xl uppercase text-balance sm:text-5xl ${
          dark ? "text-amarillo" : "text-verde"
        }`}
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
