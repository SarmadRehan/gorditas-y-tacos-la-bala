import {
  directionsUrl,
  featuredLocation,
  hours,
  locations,
  mapEmbedUrl,
  phoneHref,
} from "@/data/restaurant";

import { SectionHeading } from "./SectionHeading";

export function Locations() {
  const otherLocations = locations.filter((location) => !location.featured);

  return (
    <section id="locations" aria-labelledby="locations-title" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="locations-title"
          eyebrow="Visítanos"
          title={`${locations.length} Locations`}
          intro="Find the Tacos La Bala closest to you. Hours vary by location, so give us a call."
        />

        <div className="mt-14 grid overflow-hidden rounded-2xl border-2 border-ink bg-white shadow-[6px_6px_0_#1b1712] lg:grid-cols-[1fr_1.3fr]">
          <div className="p-6 sm:p-8">
            <p className="font-condensed text-sm font-semibold uppercase tracking-[0.2em] text-rojo">
              Location #{featuredLocation.number}
            </p>
            <h3 className="mt-1 font-display text-3xl uppercase text-verde">{featuredLocation.area}</h3>
            <address className="mt-4 text-lg not-italic leading-relaxed">
              {featuredLocation.street}
              <br />
              {featuredLocation.city}, TX {featuredLocation.postalCode}
            </address>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-semibold">
              <a href={phoneHref(featuredLocation.phoneDisplay)} className="hover:text-rojo">
                {featuredLocation.phoneDisplay}
              </a>
              <a
                href={directionsUrl(featuredLocation)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-verde underline underline-offset-4 hover:text-rojo"
              >
                Get directions
              </a>
            </div>
            <h4 className="mt-8 font-condensed text-sm font-semibold uppercase tracking-[0.2em] text-muted">
              Hours
            </h4>
            <dl className="mt-2 divide-y divide-ink/10">
              {hours.map((entry) => (
                <div key={entry.days} className="flex justify-between gap-4 py-2">
                  <dt className="font-semibold">{entry.days}</dt>
                  <dd className="text-muted">
                    {entry.open} – {entry.close}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <iframe
            title={`Map of Tacos La Bala ${featuredLocation.area}`}
            src={mapEmbedUrl}
            className="h-full min-h-80 w-full border-0 border-t-2 border-ink lg:border-t-0 lg:border-l-2"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {otherLocations.map((location) => (
            <li
              key={location.number}
              className="flex flex-col rounded-2xl border-2 border-ink bg-amarillo-soft p-5"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-display text-lg uppercase leading-tight text-verde">
                  {location.area}
                </h3>
                <span className="shrink-0 rounded-full bg-rojo px-2.5 py-0.5 font-condensed text-sm font-semibold text-white">
                  #{location.number}
                </span>
              </div>
              <address className="mt-3 flex-1 text-sm not-italic leading-relaxed">
                {location.street}
                <br />
                {location.city}, TX {location.postalCode}
              </address>
              <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-ink/15 pt-3 text-sm font-semibold">
                <a href={phoneHref(location.phoneDisplay)} className="hover:text-rojo">
                  {location.phoneDisplay}
                </a>
                <a
                  href={directionsUrl(location)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-verde underline underline-offset-4 hover:text-rojo"
                >
                  Directions
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
