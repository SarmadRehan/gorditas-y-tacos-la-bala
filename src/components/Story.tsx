import Image from "next/image";

import { locations, restaurant, storyImage } from "@/data/restaurant";

const milestones = [
  { label: String(restaurant.foundedYear), text: "Our first taco truck opens in Tampico, Mexico." },
  { label: "Houston", text: "The family brings the recipes north and starts with a taco trailer." },
  { label: "Today", text: `${locations.length} Houston-area taquerías, still family-owned.` },
];

export function Story() {
  return (
    <section id="story" aria-labelledby="story-title" className="bg-verde py-20 text-crema sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="relative aspect-[5/4] -rotate-1 overflow-hidden rounded-2xl border-4 border-crema shadow-[10px_10px_0_#083d21]">
          <Image
            src={storyImage}
            alt="A large quesadilla cut into wedges with lettuce and tomato"
            fill
            sizes="(min-width: 1024px) 34rem, 92vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="inline-block -rotate-2 bg-amarillo px-3 py-1 font-condensed text-sm font-semibold uppercase tracking-[0.2em] text-ink">
            Nuestra historia
          </p>
          <h2 id="story-title" className="mt-4 font-display text-4xl uppercase text-amarillo sm:text-5xl">
            From Tampico to Houston
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-crema/85">
            Tacos La Bala started as a single taco truck in Tampico in {restaurant.foundedYear}.
            Five decades later we&apos;re still a family business, still making every plate to
            order, and still serving the trompo Houston talks about.
          </p>
          <ol className="mt-8 space-y-4">
            {milestones.map((milestone) => (
              <li key={milestone.label} className="flex gap-4">
                <span className="w-28 shrink-0 font-display text-xl uppercase text-amarillo">
                  {milestone.label}
                </span>
                <span className="text-crema/85">{milestone.text}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
