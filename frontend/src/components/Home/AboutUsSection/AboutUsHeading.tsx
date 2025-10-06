import React from "react";
import { UniversalBadge } from "../../UniversalBadge";
import { LightBulbButton } from "./LightBulbButton";

interface AboutUsHeadingProps {
  className?: string;
}

export const AboutUsHeading: React.FC<AboutUsHeadingProps> = ({
  className = "",
}) => {
  return (
    <div
      className={`text-center mb-[40px] md:mb-[60px] lg:mb-[80px] px-4 ${className}`}
    >
      <div className="flex justify-center mb-[16px] md:mb-[20px] lg:mb-[24px]">
        <UniversalBadge
          badgeText="About Us"
          secondaryText="Our Global Mission"
          icon="electric"
          variant="primary"
          size="md"
        />
      </div>

      <h1
        className="mx-auto text-center font-['Plus_Jakarta_Sans'] text-[24px] md:text-[32px] lg:text-[38px] font-medium leading-[32px] md:leading-[42px] lg:leading-[52px] capitalize max-w-[320px] md:max-w-[600px] lg:max-w-[924px]"
        style={{
          color: "var(--Primary-100, #E4E4E7)",
        }}
      >
        <div className="flex items-center justify-center flex-wrap gap-[6px] md:gap-[8px] mb-[6px] md:mb-[8px]">
          <span>Built with love for visionary</span>
          <LightBulbButton />
          <span>entrepreneurs</span>
        </div>
        <div className="text-[20px] md:text-[28px] lg:text-[34px] leading-[28px] md:leading-[36px] lg:leading-[46px]">
          & startup founders, we help you save big money while buying saaS
          subscription via us...
        </div>
      </h1>
    </div>
  );
};
