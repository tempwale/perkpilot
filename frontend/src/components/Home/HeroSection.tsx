import React from "react";
import { HeroContent } from "./HeroSection/HeroContent";
import { PromoCard } from "./HeroSection/PromoCard";
import { TestimonialsSection } from "./HeroSection/TestimonialsSection";
import Background from "../Background";
import { TrustIndicator } from "./HeroSection/TrustIndicator";
import { UniversalCTAButton } from "../UniversalCTAButton";

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative w-full min-h-[80vh] flex flex-col pt-[20px] md:pt-[40px] overflow-hidden px-4 md:px-0"
      style={{
        backgroundColor: "#000000",
      }}
    >
      {/* Background SVG */}
      <Background />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-start justify-between w-full gap-[20px] lg:gap-[8px] lg:pl-15 flex-1">
        {/* Desktop: Left side content */}
        <div className="w-full lg:flex-[6] order-1 lg:order-1">
          <HeroContent />

          {/* Desktop: CTA Button and Trust Indicator after HeroContent */}
          <div className="hidden lg:block pl-20">
            {/* CTA Button */}
            <div className="mt-[20px] w-full flex justify-start">
              <UniversalCTAButton
                text="Start Exploring Deals & Discounts"
                icon="arrow"
                variant="primary"
                size="md"
                iconRotation="-rotate-45"
                onClick={() => console.log("CTA clicked")}
              />
            </div>

            {/* Trust Indicator */}
            <div className="mt-[28px] w-full flex justify-start">
              <TrustIndicator />
            </div>
          </div>
        </div>

        {/* PromoCard */}
        <div className="w-full lg:flex-[6] relative order-2 lg:order-2">
          <PromoCard />
        </div>

        {/* Mobile: CTA Button and Trust Indicator after PromoCard */}
        <div className="lg:hidden w-full order-3 flex flex-col items-center gap-[20px]">
          {/* CTA Button */}
          <div className="w-full flex justify-center">
            <UniversalCTAButton
              text="Start Exploring Deals & Discounts"
              icon="arrow"
              variant="primary"
              size="md"
              iconRotation="-rotate-45"
              onClick={() => console.log("CTA clicked")}
            />
          </div>

          {/* Trust Indicator */}
          <div className="w-full flex justify-center">
            <TrustIndicator />
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="relative z-10 w-full py-[20px] md:py-[40px]">
        <TestimonialsSection />
      </div>
    </section>
  );
};

export default HeroSection;
