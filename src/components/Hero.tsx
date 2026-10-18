import Image from "next/image";

import { heroImage, locations } from "@/data/restaurant";

import { OrderButton } from "./OrderDialog";
import { PapelPicado } from "./PapelPicado";
import { Wordmark } from "./Wordmark";

const badges = ["Homemade corn tortillas", `${locations.length} Houston locations`, "Kids menu"];

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden bg-vino text-crema">
      <PapelPicado />
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 pt-8 pb-20 sm:px-6 md:grid-cols-[1.1fr_1fr] md:pt-12 md:pb-24">
        <div className="text-center md:text-left">
          <h1 id="hero-title">
            <span className="sr-only">Gorditas y Tacos La Bala: </span>
            <Wordmark size="lg" className="md:items-start" />
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-crema/85 md:mx-0">
            Gorditas stuffed to order, tacos on homemade corn tortillas, tortas piled high and
            quesabirria with consomé for dipping. Made fresh in South Post Oak and on FM 1960.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:justify-start">
            <OrderButton className="w-full rounded-full bg-lima px-8 py-3.5 font-condensed text-lg font-semibold uppercase tracking-wider text-vino-deep shadow-[4px_4px_0_#2e0f1b] transition-transform hover:-translate-y-0.5 sm:w-auto">
              Order Online
            </OrderButton>
            <a
              href="#menu"
              className="w-full rounded-full border-2 border-lima px-8 py-3 text-center font-condensed text-lg font-semibold uppercase tracking-wider text-lima transition-colors hover:bg-lima/10 sm:w-auto"
            >
              See the Menu
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 font-condensed text-sm font-semibold uppercase tracking-[0.16em] text-crema/90 md:justify-start">
            {badges.map((badge) => (
              <li key={badge} className="flex items-center gap-2">
                <span aria-hidden="true" className="size-2 rotate-45 bg-lima" />
                {badge}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-full rounded-b-3xl border-4 border-lima shadow-[12px_12px_0_#2e0f1b]">
            <Image
              src={heroImage}
              alt="A bowl of shrimp caldo with whole shrimp in red broth"
              fill
              priority
              sizes="(min-width: 768px) 24rem, 90vw"
              className="object-cover"
            />
          </div>
          <p className="absolute -bottom-5 left-1/2 -translate-x-1/2 -rotate-2 whitespace-nowrap rounded-md bg-verde px-4 py-2 font-display text-lg text-lima shadow-[4px_4px_0_#2e0f1b]">
            Caldo de Camarón
          </p>
        </div>
      </div>
    </section>
  );
}
