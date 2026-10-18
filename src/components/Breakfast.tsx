import Image from "next/image";

import { breakfast } from "@/data/restaurant";
import { formatPrice } from "@/lib/format";

import { SectionHeading } from "./SectionHeading";

export function Breakfast() {
  return (
    <section id="desayunos" aria-labelledby="desayunos-title" className="bg-amarillo py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="desayunos-title"
          eyebrow="Desayunos"
          title="Breakfast Tacos & Huevos"
          intro="Breakfast tacos and huevos plates, served from the moment we open."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.15fr]">
          <div className="space-y-6">
            <div className="relative aspect-[5/4] overflow-hidden rounded-2xl border-2 border-ink shadow-[6px_6px_0_#1b1712]">
              <Image
                src={breakfast.image}
                alt="Eggs and chorizo with refried beans, queso fresco and corn tortillas"
                fill
                sizes="(min-width: 1024px) 30rem, 92vw"
                className="object-cover"
              />
            </div>

            <section
              aria-labelledby="breakfast-tacos-title"
              className="rounded-2xl border-2 border-ink bg-white p-6 shadow-[6px_6px_0_#1b1712]"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 id="breakfast-tacos-title" className="font-display text-2xl uppercase text-rojo">
                  Breakfast Tacos
                </h3>
                <p className="font-condensed text-xl font-semibold text-rojo-deep">
                  {formatPrice(breakfast.tacoPrice)} each
                </p>
              </div>
              <ul className="mt-4 grid gap-x-6 gap-y-1.5 sm:grid-cols-2">
                {breakfast.tacos.map((taco) => (
                  <li key={taco} className="flex items-center gap-2 text-sm font-semibold">
                    <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-rojo" />
                    {taco}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <section
            aria-labelledby="breakfast-plates-title"
            className="rounded-2xl border-2 border-ink bg-white p-6 shadow-[6px_6px_0_#1b1712] sm:p-8"
          >
            <h3 id="breakfast-plates-title" className="font-display text-2xl uppercase text-rojo">
              Huevos Plates
            </h3>
            <p className="mt-1 text-sm italic text-muted">{breakfast.plateNote}</p>
            <ul className="mt-5 divide-y divide-ink/10">
              {breakfast.plates.map((plate) => (
                <li key={plate.name} className="flex items-baseline justify-between gap-4 py-3">
                  <span className="font-bold">{plate.name}</span>
                  <span className="font-condensed text-lg font-semibold tabular-nums text-rojo-deep">
                    {formatPrice(plate.price)}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
}
