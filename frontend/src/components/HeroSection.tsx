import React from "react";
import { HeroContent } from "./HeroSection/HeroContent";
import { PromoCard } from "./HeroSection/PromoCard";
import { HeroBackground } from "./HeroSection/HeroBackground";
import { TestimonialsSection } from "./TestimonialsSection";

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative w-full min-h-[80vh] flex flex-col pt-[40px] overflow-hidden"
      style={{
        backgroundColor: "#000000",
      }}
    >
      {/* Background SVG */}
      <HeroBackground />

      {/* Main Content */}
      <div className="relative z-10 flex items-start justify-between w-full gap-[8px] flex-1">
        <div className="flex-[6]">
          <HeroContent />
        </div>
        <div className="flex-[6] relative">
          <PromoCard />
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="relative z-10 w-full py-[40px]">
        <TestimonialsSection />
      </div>
    </section>
  );
};

export default HeroSection;
