import { directionsUrl, locations, phoneHref, type Location } from "@/data/restaurant";

import { SectionHeading } from "./SectionHeading";

function LocationCard({ location }: { location: Location }) {
  return (
    <article
      aria-labelledby={`${location.id}-title`}
      className="flex flex-col overflow-hidden rounded-2xl border-2 border-vino bg-white shadow-[6px_6px_0_#4a1a2c]"
    >
      <div className="flex-1 p-6 sm:p-8">
        <h3 id={`${location.id}-title`} className="font-display text-3xl text-vino">
          {location.name}
        </h3>
        <address className="mt-3 text-lg not-italic leading-relaxed">
          {location.street}
          <br />
          {location.city}, TX {location.postalCode}
        </address>
        <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 font-semibold">
          {location.phoneDisplay && (
            <a href={phoneHref(location.phoneDisplay)} className="hover:text-terracota">
              {location.phoneDisplay}
            </a>
          )}
          <a
            href={directionsUrl(location)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-verde underline underline-offset-4 hover:text-terracota"
          >
            Get directions
          </a>
        </div>

        <h4 className="mt-8 font-condensed text-sm font-semibold uppercase tracking-[0.2em] text-muted">
          Hours
        </h4>
        {location.hours ? (
          <dl className="mt-2 divide-y divide-vino/10">
            {location.hours.map((entry) => (
              <div key={entry.days} className="flex justify-between gap-4 py-2">
                <dt className="font-semibold">{entry.days}</dt>
                <dd className={entry.hours === "Closed" ? "font-semibold text-rojo" : "text-muted"}>
                  {entry.hours}
                </dd>
              </div>
            ))}
          </dl>
        ) : (
          <p className="mt-2 rounded-lg bg-arena px-4 py-3 font-semibold text-vino">Call for hours</p>
        )}
      </div>
      {location.mapEmbedUrl && (
        <iframe
          title={`Map of Gorditas y Tacos La Bala ${location.name}`}
          src={location.mapEmbedUrl}
          className="h-64 w-full border-0 border-t-2 border-vino"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      )}
    </article>
  );
}

export function Locations() {
  return (
    <section id="locations" aria-labelledby="locations-title" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="locations-title"
          eyebrow="Visítanos"
          title="Two Locations"
          intro="Stop by for dine-in or takeout."
        />
        <div className="mt-14 grid items-start gap-8 lg:grid-cols-2">
          {locations.map((location) => (
            <LocationCard key={location.id} location={location} />
          ))}
        </div>
      </div>
    </section>
  );
}
