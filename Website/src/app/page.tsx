import { Hero } from "@/components/site/Hero";
import { TrustSection } from "@/components/sections/TrustSection";
import { StatsBand } from "@/components/sections/StatsBand";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { HomeAbout } from "@/components/sections/HomeAbout";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaSection } from "@/components/sections/CtaSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustSection />
      <StatsBand />
      <ServicesSection />
      <HomeAbout />
      <FaqSection />
      <CtaSection />
    </>
  );
}
