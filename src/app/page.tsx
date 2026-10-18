import { Breakfast } from "@/components/Breakfast";
import { Favorites } from "@/components/Favorites";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Locations } from "@/components/Locations";
import { MenuSection } from "@/components/MenuSection";
import { MobileActionBar } from "@/components/MobileActionBar";
import { OrderDialogProvider } from "@/components/OrderDialog";
import { Serape } from "@/components/Serape";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Story } from "@/components/Story";

export default function Home() {
  return (
    <OrderDialogProvider>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-amarillo"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Serape />
        <Favorites />
        <MenuSection />
        <Breakfast />
        <Story />
        <Locations />
        <Gallery />
      </main>
      <SiteFooter />
      <MobileActionBar />
    </OrderDialogProvider>
  );
}
