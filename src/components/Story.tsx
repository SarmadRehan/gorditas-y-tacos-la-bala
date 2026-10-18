import Image from "next/image";

import { reviews, storyImage } from "@/data/restaurant";

export function Story() {
  return (
    <section id="story" aria-labelledby="story-title" className="bg-vino py-20 text-crema sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="relative aspect-[4/3] -rotate-1 overflow-hidden rounded-2xl border-4 border-lima shadow-[10px_10px_0_#2e0f1b] ">
          <Image
            src={storyImage}
            alt="Chile-rimmed drinks in cups printed with the La Bala logo"
            fill
            sizes="(min-width: 1024px) 34rem, 92vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="inline-block rounded-sm bg-lima px-3 py-1 font-condensed text-sm font-semibold uppercase tracking-[0.2em] text-vino-deep">
            Nuestra historia
          </p>
          <h2 id="story-title" className="mt-4 font-display text-4xl text-lima sm:text-5xl">
            Generous, quick and homemade
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-crema/85">
            Plates come out quick and full, on tortillas made in our own kitchen, with salsas,
            cold horchata and tortas our regulars keep bringing their friends back for.
          </p>

          <ul className="mt-10 space-y-5">
            {reviews.map((review) => (
              <li key={review.quote}>
                <figure className="rounded-2xl border border-lima/30 bg-vino-deep p-6">
                  <blockquote className="font-condensed text-xl leading-snug">
                    &ldquo;{review.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-3 text-sm text-crema/60">
                    Customer review, {review.date}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
