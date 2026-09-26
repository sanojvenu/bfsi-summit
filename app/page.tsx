import { HeroSection } from "@/components/sections/hero";
import { StatStrip } from "@/components/sections/stat-strip";
import { AboutSection } from "@/components/sections/about";
import { AgendaSection } from "@/components/sections/agenda";
import { SpeakersSection } from "@/components/sections/speakers";
import { AwardsSection } from "@/components/sections/awards";
import { SponsorsSection } from "@/components/sections/sponsors";
import { VenueSection } from "@/components/sections/venue";
import { GallerySection } from "@/components/sections/gallery";
import { RegisterSection } from "@/components/sections/register";
import { CtaBanner } from "@/components/sections/cta-banner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatStrip />
      <AboutSection />
      <SpeakersSection />
      <AgendaSection />
      <AwardsSection />
      <GallerySection />
      <SponsorsSection />
      <VenueSection />
      <RegisterSection />
      <CtaBanner />
    </>
  );
}
