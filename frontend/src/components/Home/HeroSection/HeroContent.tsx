import React from "react";
import { UniversalBadge } from "../../UniversalBadge";

interface HeroContentProps {
  topTagline: string;
  secondaryText: string;
  mainHeadline: string;
  subHeadline: string;
}

export const HeroContent: React.FC<HeroContentProps> = ({
  topTagline,
  secondaryText,
  mainHeadline,
  subHeadline,
}) => {
  return (
    <div
      className="content-stretch flex flex-col gap-[12px] md:gap-[16px] items-center md:items-start justify-center relative flex-1 px-4 md:pl-[90px] md:pr-[36px] py-[16px] md:py-[22px] text-center md:text-left"
      data-node-id="1:163"
    >
      {/* Badge Section */}
      <UniversalBadge
        badgeText={topTagline}
        secondaryText={secondaryText}
        icon="electric"
        variant="primary"
        size="sm"
      />

      {/* Main Heading */}
      <div
        className="bg-clip-text bg-gradient-to-b font-['Plus_Jakarta_Sans'] font-bold from-[#ffffff] leading-[36px] md:leading-[52px] lg:leading-[65px] relative shrink-0 text-[28px] md:text-[42px] lg:text-[50px] to-[#949494] whitespace-pre-wrap self-stretch"
        data-node-id="1:170"
        style={{
          background: "linear-gradient(180deg, #FFF 0%, #949494 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {mainHeadline.split('\n').map((line, index) => (
          <p key={index} className={index === 0 ? "mb-0" : ""}>{line}</p>
        ))}
      </div>

      {/* Subtitle */}
      <div
        className="font-['Plus_Jakarta_Sans'] font-medium leading-[22px] md:leading-[26px] lg:leading-[29px] relative shrink-0 text-[14px] md:text-[16px] lg:text-[18px] whitespace-pre-wrap self-stretch max-w-[320px] md:max-w-none mx-auto md:mx-0"
        data-node-id="1:171"
        style={{
          color: "var(--Primary-300, #A1A1AA)",
        }}
      >
        {subHeadline}
      </div>
    </div>
  );
};
