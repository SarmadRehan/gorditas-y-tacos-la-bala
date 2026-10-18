import Image from "next/image";

import { gallery } from "@/data/restaurant";

import { SectionHeading } from "./SectionHeading";

export function Gallery() {
  return (
    <section aria-labelledby="gallery-title" className="bg-crema py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading id="gallery-title" eyebrow="Buen provecho" title="Fresh From Our Kitchen" />
        <ul className="mt-14 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-4">
          {gallery.map((image, index) => (
            <li
              key={image.alt}
              className={`relative aspect-[5/4] overflow-hidden rounded-xl border-2 border-ink ${
                index % 2 === 0 ? "-rotate-1" : "rotate-1"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 768px) 17rem, 46vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
