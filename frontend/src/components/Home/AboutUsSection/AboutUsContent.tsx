import React from "react";
import { UniversalBadge } from "../../UniversalBadge";
import { UniversalCTAButton } from "../../UniversalCTAButton";
import FloatingAppIcon from "./FloatingAppIcon";
import AboutUsBackground from "./AboutUsBackground";

const AboutUsContent: React.FC = () => {
  return (
    <div className="relative w-full">
      {/* AboutUs Background Gradient Component */}
      <AboutUsBackground />

      {/* Content Container */}
      <div className="relative flex flex-col gap-4 md:gap-[24px] items-center w-full pt-16 md:pt-70 min-h-[400px] md:min-h-[600px]  md:px-0">
        {/* Multiple Floating App Icons positioned around the content */}

        {/* Top center */}
        <div className="absolute top-[50px] left-1/2 transform -translate-x-1/2  ">
          <FloatingAppIcon />
        </div>

        {/* Top left */}
        <div
          className="absolute top-[80px] md:top-[110px] left-[20%]  "
          style={{ animationDelay: "0.5s" }}
        >
          <FloatingAppIcon />
        </div>

        {/* Top right */}
        <div
          className="absolute top-[80px] md:top-[110px] right-[20%] "
          style={{ animationDelay: "1s" }}
        >
          <FloatingAppIcon />
        </div>

        {/* Middle left */}
        <div
          className="absolute  top-[150px] md:top-[230px] left-[0%] md:left-[5%]  "
          style={{ animationDelay: "1.5s" }}
        >
          <FloatingAppIcon />
        </div>

        {/* Middle right */}
        <div
          className="absolute top-[150px] md:top-[230px] right-[0%] md:right-[5%]  "
          style={{ animationDelay: "2s" }}
        >
          <FloatingAppIcon />
        </div>

        {/* Bottom left */}
        <div
          className="absolute bottom-[40px] left-[0%] hidden lg:block "
          style={{ animationDelay: "2.5s" }}
        >
          <FloatingAppIcon />
        </div>

        {/* Bottom right */}
        <div
          className="absolute bottom-[40px] right-[0%] hidden lg:block "
          style={{ animationDelay: "3s" }}
        >
          <FloatingAppIcon />
        </div>

        {/* Main content centered */}
        <div className="relative z-30 flex flex-col gap-4 pt-40 md:gap-[24px] items-center max-w-[320px] md:max-w-[600px] lg:max-w-[900px] mx-0 px-4">
          {/* Badge with discount information */}
          <UniversalBadge
            badgeText="20% - 30%"
            secondaryText="Discount Coupons"
            icon="electric"
            variant="primary"
            size="md"
          />

          {/* Main heading */}
          <h2 className="capitalize font-['Plus_Jakarta_Sans'] font-semibold text-[24px] md:text-[32px] lg:text-[40px] leading-[30px] md:leading-[42px] lg:leading-[52px] text-center text-neutral-50 max-w-full">
            Packed With Big Discounts.
          </h2>

          {/* Description text */}
          <p className="font-['Plus_Jakarta_Sans'] font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-center text-zinc-300 max-w-full">
            PerkPilot is packed with big discounted deals on all software
            listings you can find in our SaaS marketplace.
          </p>

          {/* CTA Button */}
          <div className="mt-2 md:mt-[8px]">
            <UniversalCTAButton
              text="Explore SaaS Marketplace"
              icon="arrow"
              variant="primary"
              size="md"
              iconPosition="right"
              iconRotation="-rotate-45"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsContent;
