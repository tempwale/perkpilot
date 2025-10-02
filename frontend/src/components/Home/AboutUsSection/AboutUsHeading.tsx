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
    <div className={`text-center mb-[80px] ${className}`}>
      <div className="flex justify-center mb-[24px]">
        <UniversalBadge
          badgeText="About Us"
          secondaryText="Our Global Mission"
          icon="electric"
          variant="primary"
          size="md"
        />
      </div>

      <h1
        className="mx-auto text-center font-['Plus_Jakarta_Sans'] text-[38px] font-medium leading-[52px] capitalize"
        style={{
          color: "var(--Primary-100, #E4E4E7)",
          width: "924px",
          maxWidth: "100%",
        }}
      >
        <div className="flex items-center justify-center flex-wrap gap-[8px] mb-[8px]">
          <span>Built with love for visionary</span>
          <LightBulbButton />
          <span>entrepreneurs</span>
        </div>
        <div>
          & startup founders, we help you save big money while buying saaS
          subscription via us...
        </div>
      </h1>
    </div>
  );
};
