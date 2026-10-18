import { favorites, highlights } from "@/data/restaurant";

import { OrderButton } from "./OrderDialog";
import { SectionHeading } from "./SectionHeading";

export function Favorites() {
  return (
    <section id="favoritos" aria-labelledby="favoritos-title" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="favoritos-title"
          eyebrow="Los favoritos"
          title="Customer Favorites"
          intro="The plates our regulars order again and again."
        />

        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {favorites.map((dish, index) => (
            <li
              key={dish.name}
              className={`flex flex-col rounded-2xl border-2 border-vino p-6 shadow-[5px_5px_0_#4a1a2c] ${
                index === 0 ? "bg-lima sm:col-span-2" : "bg-white"
              }`}
            >
              <span className="font-condensed text-sm font-semibold uppercase tracking-[0.2em] text-terracota">
                No. {index + 1}
              </span>
              <h3 className="mt-2 font-display text-2xl leading-tight text-vino">{dish.name}</h3>
              <p className="mt-1 font-condensed text-sm font-semibold uppercase tracking-wider text-verde">
                {dish.english}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{dish.description}</p>
            </li>
          ))}
        </ol>

        <div className="mt-20 rounded-3xl bg-verde px-6 py-12 text-crema sm:px-10">
          <h3 className="text-center font-display text-3xl text-lima sm:text-4xl">
            What regulars rave about
          </h3>
          <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((highlight) => (
              <li key={highlight.title} className="text-center">
                <span
                  aria-hidden="true"
                  className="mx-auto mb-4 block size-3 rotate-45 bg-lima shadow-[0_0_0_6px_rgba(217,225,74,0.25)]"
                />
                <p className="font-condensed text-xl font-semibold uppercase tracking-wide">
                  {highlight.title}
                </p>
                <p className="mt-2 text-sm text-crema/80">{highlight.text}</p>
              </li>
            ))}
          </ul>
          <div className="mt-10 text-center">
            <OrderButton className="rounded-full bg-lima px-8 py-3.5 font-condensed text-lg font-semibold uppercase tracking-wider text-vino-deep shadow-[4px_4px_0_#145a2c] transition-transform hover:-translate-y-0.5">
              Order for Pickup
            </OrderButton>
          </div>
        </div>
      </div>
    </section>
  );
}
