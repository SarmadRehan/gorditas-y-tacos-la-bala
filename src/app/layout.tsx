import type { Metadata, Viewport } from "next";
import { Nunito_Sans, Oswald, Rye } from "next/font/google";

import { restaurant } from "@/data/restaurant";

import "./globals.css";

// Western display face, close to the lettering on the storefront sign.
const rye = Rye({
  variable: "--font-rye",
  subsets: ["latin"],
  weight: "400",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${restaurant.name} | Gorditas, Tacos & Tortas in Houston`,
  description: restaurant.description,
  // Demo build: keep it out of search results so it never competes with the restaurant's own listings.
  robots: { index: false, follow: false },
  openGraph: {
    title: `${restaurant.name} | Gorditas, Tacos & Tortas in Houston`,
    description: restaurant.description,
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: "#4a1a2c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${rye.variable} ${oswald.variable} ${nunitoSans.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
