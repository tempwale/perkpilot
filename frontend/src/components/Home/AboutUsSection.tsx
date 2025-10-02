import React from "react";
import { AboutUsHeading } from "./AboutUsSection/AboutUsHeading";
import { UniversalCTAButton } from "../UniversalCTAButton";
import AboutUsContent from "./AboutUsSection/AboutUsContent";

const AboutUsSection: React.FC = () => {
  return (
    <section className="w-full py-[80px] relative">
      <div className="relative z-10 max-w-[1200px] mx-auto px-[40px]">
        {/* Section Header with Badge and Heading */}
        <AboutUsHeading />

        {/* CTA Button */}
        <div className="flex justify-center mt-[40px]">
          <UniversalCTAButton
            text="Find Your Tool Stack With Big Discouts"
            icon="arrow"
            variant="primary"
            size="md"
            iconRotation="-rotate-45"
            onClick={() => console.log("About Us CTA clicked")}
          />
        </div>
        <AboutUsContent />
      </div>
    </section>
  );
};

export default AboutUsSection;
