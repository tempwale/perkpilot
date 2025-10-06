import React from "react";
import WhyUsContent from "./WhyUs/WhyUsContent";
import Stats from "./WhyUs/Stats";

const WhyUsSection: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden py-10">
      {/* Content */}
      <div className="relative z-20 ">
        <WhyUsContent />
        <Stats />
      </div>
    </section>
  );
};

export default WhyUsSection;
