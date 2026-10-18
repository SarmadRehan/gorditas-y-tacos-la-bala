import { DemoBanner } from "@/components/DemoBanner";
import { Favorites } from "@/components/Favorites";
import { Greca } from "@/components/Greca";
import { Hero } from "@/components/Hero";
import { Locations } from "@/components/Locations";
import { MenuSection } from "@/components/MenuSection";
import { MobileActionBar } from "@/components/MobileActionBar";
import { OrderDialogProvider } from "@/components/OrderDialog";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Story } from "@/components/Story";

export default function Home() {
  return (
    <OrderDialogProvider>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-lima"
      >
        Skip to content
      </a>
      <DemoBanner />
      <SiteHeader />
      <main id="main">
        <Hero />
        <Greca />
        <Favorites />
        <MenuSection />
        <Story />
        <Locations />
      </main>
      <SiteFooter />
      <MobileActionBar />
    </OrderDialogProvider>
  );
}
