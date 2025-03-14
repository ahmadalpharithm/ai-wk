import BentoGrid from "@/components/sections/bentogrid";
import Features from "@/components/sections/features";
// import HeroLanding from "@/components/sections/hero-landing";
// import InfoLanding from "@/components/sections/info-landing";
// import PreviewLanding from "@/components/sections/preview-landing";
import Testimonials from "@/components/sections/testimonials";
import { PricingFaq } from "@/components/pricing/pricing-faq";
// import OrionModelHero from "@/components/Heros/OrionModelHero";
// import LucaModelHero from "@/components/Heros/LucaModelHero";
// import HermesModelHero from "@/components/Heros/HermesModelHero";
// import DouglasModelHero from "@/components/Heros/DouglasModelHero";
// import OlympusModelHero from "@/components/Heros/OlympusModelHero";
import NewHeroSection from "@/components/sections/NewHeroSection";
import ModelGallery from "@/components/sections/ModelGallery";

export default function IndexPage() {
  return (
    <>
      <NewHeroSection/>
      <ModelGallery/>
      <div className="px-4 md:px-20 flex flex-col justify-center items-center">
      <BentoGrid />
      <Features />
      <Testimonials />
      <PricingFaq/>
      </div>

    </>
  );
}
