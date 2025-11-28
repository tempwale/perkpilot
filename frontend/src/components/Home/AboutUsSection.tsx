import React from "react";
import { motion } from "framer-motion";
import { AboutUsHeading } from "./AboutUsSection/AboutUsHeading";
import { UniversalCTAButton } from "../UniversalCTAButton";
import AboutUsContent from "./AboutUsSection/AboutUsContent";

const AboutUsSection: React.FC = () => {
  return (
    <section className="w-full py-10  relative">
 

      <motion.div
        className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 md:px-[40px]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Section Header with Badge and Heading */}
        <AboutUsHeading />

        {/* CTA Button with animation */}
        <motion.div
          className="flex justify-center mt-[40px]"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        >
          <UniversalCTAButton
            text="Find Your Tool Stack With Big Discouts"
            icon="arrow"
            variant="primary"
            size="md"
            iconRotation="-rotate-45"
          />
        </motion.div>
        <AboutUsContent />
      </motion.div>
    </section>
  );
};

export default AboutUsSection;
