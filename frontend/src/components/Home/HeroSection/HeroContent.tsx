import React from "react";
import { TrustIndicator } from "./TrustIndicator";
import { UniversalBadge } from "../../UniversalBadge";
import { UniversalCTAButton } from "../../UniversalCTAButton";

export const HeroContent: React.FC = () => {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-start justify-center relative flex-1 pl-[90px] pr-[36px] py-[22px]"
      data-node-id="1:163"
    >
      {/* Badge Section */}
      <UniversalBadge
        badgeText="#1 Platform"
        secondaryText="For Discounted SaaS Deals"
        icon="electric"
        variant="primary"
        size="sm"
      />

      {/* Main Heading */}
      <div
        className="bg-clip-text bg-gradient-to-b font-['Plus_Jakarta_Sans'] font-bold from-[#ffffff] leading-[65px] relative shrink-0 text-[50px] to-[#949494] whitespace-pre-wrap self-stretch"
        data-node-id="1:170"
        style={{
          background: "linear-gradient(180deg, #FFF 0%, #949494 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        <p className="mb-0">Build Your Dream.</p>
        <p>{`We'll Find The Tools.`}</p>
      </div>

      {/* Subtitle */}
      <div
        className="font-['Plus_Jakarta_Sans'] font-medium leading-[29px] relative shrink-0 text-[18px] whitespace-pre-wrap self-stretch"
        data-node-id="1:171"
        style={{
          color: "var(--Primary-300, #A1A1AA)",
        }}
      >
        <p className="mb-0">{`Stop searching endlessly. Tell our AI Agent your vision and get `}</p>
        <p>
          an instant, personalized list of all the software you need-with
          exclusive discounts.
        </p>
      </div>

      {/* CTA Button */}
      <div className="mt-[20px]">
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
      <div className="mt-[28px]">
        <TrustIndicator />
      </div>
    </div>
  );
};
