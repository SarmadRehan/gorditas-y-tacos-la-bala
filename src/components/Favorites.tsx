import Image from "next/image";

import { favorites, press } from "@/data/restaurant";
import { formatPrice } from "@/lib/format";

import { OrderButton } from "./OrderDialog";
import { SectionHeading } from "./SectionHeading";

export function Favorites() {
  return (
    <section aria-labelledby="favorites-title" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="favorites-title"
          eyebrow="Los favoritos"
          title="House Favorites"
          intro="The plates Houston keeps coming back for, on homemade corn or flour tortillas."
        />

        <ul className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {favorites.map((dish) => (
            <li
              key={dish.name}
              className="group flex flex-col overflow-hidden rounded-2xl border-2 border-ink bg-white shadow-[6px_6px_0_#1b1712]"
            >
              <div className="relative aspect-[5/4] overflow-hidden border-b-2 border-ink">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  sizes="(min-width: 1024px) 22rem, (min-width: 640px) 45vw, 92vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute right-3 top-3 rounded-full bg-amarillo px-3 py-1 font-condensed text-lg font-semibold text-ink shadow-[2px_2px_0_#1b1712]">
                  {formatPrice(dish.price)}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-xl uppercase leading-tight text-verde">{dish.name}</h3>
                {dish.spanish && (
                  <p className="font-condensed text-sm font-semibold uppercase tracking-wider text-rojo">
                    {dish.spanish}
                  </p>
                )}
                <p className="mt-2 text-sm leading-relaxed text-muted">{dish.description}</p>
              </div>
            </li>
          ))}
        </ul>

        <figure className="mx-auto mt-16 max-w-3xl -rotate-1 rounded-2xl bg-rojo px-6 py-8 text-center text-white shadow-[8px_8px_0_#1b1712] sm:px-10">
          <blockquote className="font-display text-2xl uppercase leading-snug sm:text-3xl">
            &ldquo;{press.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-4 font-condensed text-base font-semibold uppercase tracking-[0.2em] text-amarillo">
            {press.source}
          </figcaption>
        </figure>

        <div className="mt-14 text-center">
          <OrderButton className="rounded-full bg-verde px-8 py-3.5 font-condensed text-lg font-semibold uppercase tracking-wider text-white shadow-[4px_4px_0_#1b1712] transition-transform hover:-translate-y-0.5">
            Order for Pickup
          </OrderButton>
        </div>
      </div>
    </section>
  );
}
