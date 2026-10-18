import { restaurant } from "@/data/restaurant";

type WordmarkProps = {
  size?: "sm" | "lg";
  className?: string;
};

/** Type-set version of the La Bala logo: the name on a green ribbon, as on the sign and cups. */
export function Wordmark({ size = "sm", className = "" }: WordmarkProps) {
  const large = size === "lg";
  return (
    <span className={`inline-flex flex-col items-center leading-none ${className}`}>
      <span
        className={`font-display text-lima ${large ? "text-2xl sm:text-3xl" : "text-[0.7rem]"}`}
      >
        Gorditas y Tacos
      </span>
      <span
        className={`mt-1 whitespace-nowrap border-lima bg-verde font-display text-lima shadow-[0_3px_0_#145a2c] ${
          large
            ? "rounded-md border-4 px-5 py-2 text-6xl sm:text-7xl"
            : "rounded border-2 px-2 py-0.5 text-xl"
        }`}
      >
        La Bala
      </span>
      <span
        className={`font-condensed font-medium italic tracking-wide text-crema ${
          large ? "mt-3 text-xl sm:text-2xl" : "mt-1 text-[0.6rem]"
        }`}
      >
        {restaurant.tagline}
      </span>
    </span>
  );
}
