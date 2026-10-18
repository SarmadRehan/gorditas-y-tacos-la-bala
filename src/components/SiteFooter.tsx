import { locations, phoneHref, restaurant } from "@/data/restaurant";

import { Greca } from "./Greca";
import { Wordmark } from "./Wordmark";

export function SiteFooter() {
  return (
    <footer className="bg-vino-deep text-crema/80">
      <Greca />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pt-14 sm:px-6 md:grid-cols-3">
        <div>
          <Wordmark />
          <p className="mt-6 max-w-xs text-sm leading-relaxed">{restaurant.description}</p>
        </div>

        {locations.map((location) => (
          <div key={location.id}>
            <h2 className="font-condensed text-base font-semibold uppercase tracking-[0.2em] text-lima">
              {location.name}
            </h2>
            <address className="mt-3 text-sm not-italic leading-relaxed">
              {location.street}
              <br />
              {location.city}, TX {location.postalCode}
              <br />
              {location.phoneDisplay ? (
                <a href={phoneHref(location.phoneDisplay)} className="hover:text-lima">
                  {location.phoneDisplay}
                </a>
              ) : (
                "Call for hours"
              )}
            </address>
          </div>
        ))}
      </div>

      <div className="mx-auto max-w-6xl px-4 pt-12 pb-28 text-xs sm:px-6 md:pb-10">
        <p className="border-t border-crema/10 pt-6">{restaurant.demoNotice}</p>
      </div>
    </footer>
  );
}
