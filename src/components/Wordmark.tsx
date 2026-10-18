import { restaurant } from "@/data/restaurant";

type WordmarkProps = {
  size?: "sm" | "lg";
  className?: string;
};

/** Type-set version of the logo on the printed menu (no clean logo file is available). */
export function Wordmark({ size = "sm", className = "" }: WordmarkProps) {
  const large = size === "lg";
  return (
    <span className={`inline-flex flex-col items-center leading-none ${className}`}>
      <span
        className={`wordmark font-display uppercase ${large ? "text-4xl sm:text-5xl" : "text-sm"}`}
      >
        Tacos
      </span>
      <span
        className={`wordmark whitespace-nowrap font-display uppercase ${large ? "text-6xl sm:text-8xl" : "text-2xl"}`}
      >
        La Bala
      </span>
      <span
        className={`font-condensed font-medium tracking-wide text-crema ${
          large ? "mt-3 text-xl italic sm:text-2xl" : "mt-0.5 text-[0.6rem] italic"
        }`}
      >
        {restaurant.tagline}
      </span>
    </span>
  );
}
