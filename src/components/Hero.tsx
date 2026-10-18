import Image from "next/image";

import { heroImage, locations, restaurant } from "@/data/restaurant";

import { OrderButton } from "./OrderDialog";
import { PapelPicado } from "./PapelPicado";
import { Wordmark } from "./Wordmark";

const highlights = [
  `Since ${restaurant.foundedYear}`,
  `${locations.length} Houston-area locations`,
  "Open 7 days a week",
];

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden bg-verde text-crema">
      <PapelPicado />
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 pt-8 pb-20 sm:px-6 md:grid-cols-[1fr_1.05fr] md:pt-10 md:pb-24">
        <div className="text-center md:text-left">
          <h1 id="hero-title">
            <span className="sr-only">Tacos La Bala: </span>
            <Wordmark size="lg" className="md:items-start" />
          </h1>
          <p className="mt-6 font-condensed text-2xl font-semibold uppercase leading-tight tracking-wide text-amarillo sm:text-3xl">
            {restaurant.slogan}
          </p>
          <p className="mt-2 font-condensed text-lg italic text-crema/70">{restaurant.sloganEnglish}</p>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-crema/85 md:mx-0">
            Tacos, tortas, gorditas, flautas and breakfast, made fresh to order by the same
            family since a taco truck in Tampico in {restaurant.foundedYear}.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:justify-start">
            <OrderButton className="w-full rounded-full bg-rojo px-8 py-3.5 font-condensed text-lg font-semibold uppercase tracking-wider text-white shadow-[4px_4px_0_#1b1712] transition-transform hover:-translate-y-0.5 sm:w-auto">
              Order Online
            </OrderButton>
            <a
              href="#menu"
              className="w-full rounded-full bg-amarillo px-8 py-3.5 text-center font-condensed text-lg font-semibold uppercase tracking-wider text-ink shadow-[4px_4px_0_#1b1712] transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              See the Menu
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 font-condensed text-sm font-semibold uppercase tracking-[0.16em] text-crema/90 md:justify-start">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span aria-hidden="true" className="size-2 rounded-full bg-amarillo" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="rotate-1 overflow-hidden rounded-3xl border-4 border-crema shadow-[12px_12px_0_#083d21]">
            <div className="relative aspect-[5/4]">
              <Image
                src={heroImage}
                alt="A table spread with tacos, sopes, gorditas, menudo, rice and beans on a serape tablecloth"
                fill
                priority
                sizes="(min-width: 768px) 34rem, 92vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="absolute -bottom-6 -left-3 flex -rotate-6 flex-col items-center rounded-2xl bg-amarillo px-5 py-3 text-ink shadow-[4px_4px_0_#1b1712] sm:-left-8">
            <span className="font-display text-3xl leading-none">{restaurant.rating.value}★</span>
            <span className="mt-1 font-condensed text-xs font-semibold uppercase tracking-widest">
              {restaurant.rating.count} ratings
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
