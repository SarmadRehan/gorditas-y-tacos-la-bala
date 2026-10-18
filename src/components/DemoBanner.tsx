import { restaurant } from "@/data/restaurant";

export function DemoBanner() {
  return (
    <p className="bg-ink px-4 py-2 text-center font-condensed text-sm font-medium tracking-wide text-crema">
      {restaurant.demoNotice}
    </p>
  );
}
