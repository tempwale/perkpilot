import React from "react";
import { motion } from "framer-motion";
import { HeroContent } from "./HeroSection/HeroContent";
import { PromoCard } from "./HeroSection/PromoCard";
import { TestimonialsSection } from "./HeroSection/TestimonialsSection";
import Background from "../Background";
import { TrustIndicator } from "./HeroSection/TrustIndicator";
import { UniversalCTAButton } from "../UniversalCTAButton";

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative w-full min-h-[80vh] flex flex-col pt-[20px] md:pt-[40px] px-4 md:px-0"
      style={{
        backgroundColor: "#000000",
      }}
    >
      {/* Main Content with animation */}
      <motion.div
        className="relative z-10 flex flex-col lg:flex-row items-start justify-between w-full gap-[20px] lg:gap-[8px] lg:pl-0 flex-1"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Desktop: Left side content */}
        <motion.div
          className="w-full lg:flex-[6] order-1 lg:order-1"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
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
        </motion.div>

        {/* PromoCard with animation */}
        <motion.div
          className="w-full lg:flex-[6] relative order-2 lg:order-2"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          <PromoCard />
        </motion.div>

        {/* Mobile: CTA Button and Trust Indicator after PromoCard */}
        <motion.div
          className="lg:hidden w-full order-3 flex flex-col items-center gap-[20px]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        >
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
        </motion.div>
      </motion.div>

      {/* Testimonials Section with animation */}
      <motion.div
        className="relative z-20 w-full py-[20px] md:py-[40px] min-h-[360px]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
      >
        <TestimonialsSection />
      </motion.div>
      {/* Background SVG */}
      <Background />
    </section>
  );
};

export default HeroSection;
