import { featuredLocation, phoneHref, restaurant } from "@/data/restaurant";

import { Serape } from "./Serape";
import { Wordmark } from "./Wordmark";

export function SiteFooter() {
  return (
    <footer className="bg-verde-deep text-crema/80">
      <Serape />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pt-14 sm:px-6 md:grid-cols-3">
        <div>
          <Wordmark size="sm" className="origin-left scale-150" />
          <p className="mt-8 max-w-xs text-sm leading-relaxed">{restaurant.description}</p>
        </div>

        <div>
          <h2 className="font-condensed text-base font-semibold uppercase tracking-[0.2em] text-amarillo">
            {featuredLocation.area} · #{featuredLocation.number}
          </h2>
          <address className="mt-3 text-sm not-italic leading-relaxed">
            {featuredLocation.street}
            <br />
            {featuredLocation.city}, TX {featuredLocation.postalCode}
            <br />
            <a href={phoneHref(featuredLocation.phoneDisplay)} className="hover:text-amarillo">
              {featuredLocation.phoneDisplay}
            </a>
          </address>
        </div>

        <div>
          <h2 className="font-condensed text-base font-semibold uppercase tracking-[0.2em] text-amarillo">
            Explore
          </h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href="#menu" className="hover:text-amarillo">
                Menu
              </a>
            </li>
            <li>
              <a href="#desayunos" className="hover:text-amarillo">
                Breakfast
              </a>
            </li>
            <li>
              <a href="#locations" className="hover:text-amarillo">
                All locations
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 pt-12 pb-28 text-xs sm:px-6 md:pb-10">
        <p className="border-t border-crema/10 pt-6">
          © {new Date().getFullYear()} {restaurant.name}. Design prototype for demonstration
          purposes.
        </p>
      </div>
    </footer>
  );
}
