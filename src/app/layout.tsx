import type { Metadata, Viewport } from "next";
import { Archivo_Black, Nunito_Sans, Oswald } from "next/font/google";

import { restaurant } from "@/data/restaurant";

import "./globals.css";

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
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
  title: `${restaurant.name} | Authentic Mexican Tacos in Houston`,
  description: restaurant.description,
  // Demo build: keep it out of search results so it never competes with the restaurant's own listings.
  robots: { index: false, follow: false },
  openGraph: {
    title: `${restaurant.name} | Authentic Mexican Tacos in Houston`,
    description: restaurant.description,
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: "#0d5c32",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivoBlack.variable} ${oswald.variable} ${nunitoSans.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
