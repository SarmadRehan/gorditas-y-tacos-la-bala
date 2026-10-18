"use client";

import { useEffect, useState } from "react";

import { featuredLocation, phoneHref } from "@/data/restaurant";

import { OrderButton } from "./OrderDialog";
import { Wordmark } from "./Wordmark";

const navLinks = [
  { href: "#menu", label: "Menú" },
  { href: "#desayunos", label: "Desayunos" },
  { href: "#story", label: "Historia" },
  { href: "#locations", label: "Locations" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b-4 border-amarillo bg-verde text-crema">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="shrink-0" aria-label="Tacos La Bala, back to top">
          <Wordmark />
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-7 font-condensed text-base font-semibold uppercase tracking-[0.12em]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-amarillo">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={phoneHref(featuredLocation.phoneDisplay)}
            className="font-condensed text-base font-medium tracking-wide hover:text-amarillo"
          >
            {featuredLocation.phoneDisplay}
          </a>
          <OrderButton className="rounded-full bg-rojo px-5 py-2.5 font-condensed text-base font-semibold uppercase tracking-wider text-white shadow-[3px_3px_0_#1b1712] transition-transform hover:-translate-y-0.5">
            Order Online
          </OrderButton>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full border border-crema/30 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-crema/15 bg-verde-deep md:hidden">
          <ul className="flex flex-col px-4 py-2 font-condensed text-lg font-semibold uppercase tracking-[0.12em]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="block py-3" onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
