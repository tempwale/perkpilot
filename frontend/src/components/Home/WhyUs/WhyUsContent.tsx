import React from "react";
import { UniversalBadge } from "../../UniversalBadge";
import Benefits from "./Benefits";

const WhyUsContent: React.FC = () => {
  return (
    <div className="relative w-full py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main content centered */}
        <div className="flex flex-col gap-[24px] items-center text-center">
          {/* Badge */}
          <UniversalBadge
            badgeText="#1 Platform"
            secondaryText="For Discounted SaaS Deals"
            icon="electric"
            variant="primary"
            size="md"
          />

          {/* Main heading */}
          <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[40px] leading-[52px] text-center text-neutral-50 max-w-4xl">
            Why Choose Our Platform?
          </h2>

          {/* Description text */}
          <p className="font-['Plus_Jakarta_Sans'] font-normal text-[16px] leading-[24px] text-center text-zinc-300 max-w-3xl">
            We provide comprehensive software insights to help you make informed
            decisions for your business.
          </p>

          {/* Benefits Grid Component */}
          <Benefits />
        </div>
      </div>
    </div>
  );
};

export default WhyUsContent;
