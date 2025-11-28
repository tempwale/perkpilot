import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UniversalBadge } from "../../UniversalBadge";
import { UniversalCTAButton } from "../../UniversalCTAButton";
import FloatingAppIcon from "./FloatingAppIcon";
import AboutUsBackground from "./AboutUsBackground";
import { fetchHomePage } from "../../../hooks/useHomePage";

// Default data
const defaultData = {
  topTagline: "20% - 30%",
  secondaryText: "Discount Coupons",
  mainHeadline: "Packed With Big Discounts.",
  subHeadline: "PerkPilot is packed with big discounted deals on all software listings you can find in our SaaS marketplace.",
  ctaText: "Explore SaaS Marketplace",
  ctaLink: "",
};

const AboutUsContent: React.FC = () => {
  const navigate = useNavigate();
  const [contentData, setContentData] = useState(defaultData);

  useEffect(() => {
    const loadData = async () => {
      try {
        const homepageData = await fetchHomePage();

        if (homepageData.discountedIcons) {
          setContentData({
            topTagline: homepageData.discountedIcons.topTagline || defaultData.topTagline,
            secondaryText: defaultData.secondaryText,
            mainHeadline: homepageData.discountedIcons.mainHeadline || defaultData.mainHeadline,
            subHeadline: homepageData.discountedIcons.subHeadline || defaultData.subHeadline,
            ctaText: homepageData.discountedIcons.ctaText || defaultData.ctaText,
            ctaLink: homepageData.discountedIcons.ctaLink || defaultData.ctaLink,
          });
        }
      } catch {
        // Error fetching data, using defaults
      }
    };

    void loadData();
  }, []);

  const handleCTAClick = () => {
    if (contentData.ctaLink) {
      try {
        // Check if it's a full URL (http/https)
        if (contentData.ctaLink.startsWith("http://") || contentData.ctaLink.startsWith("https://")) {
          // Check if it's localhost (internal route) or external
          if (contentData.ctaLink.includes("localhost") || contentData.ctaLink.includes(window.location.hostname)) {
            // Extract the path from full URL for internal navigation
            const url = new URL(contentData.ctaLink);
            navigate(url.pathname);
          } else {
            // External URL - open in new tab
            window.open(contentData.ctaLink, "_blank", "noopener,noreferrer");
          }
        } else if (contentData.ctaLink.startsWith("/")) {
          // Internal route - navigate directly
          navigate(contentData.ctaLink);
        } else {
          // Relative path
          navigate(`/${contentData.ctaLink}`);
        }
      } catch {
        // If URL parsing fails, try to navigate as-is
        navigate(contentData.ctaLink);
      }
    }
  };

  return (
    <div className="relative w-full">
      {/* AboutUs Background Gradient Component */}
      <AboutUsBackground />

      {/* Content Container */}
      <div className="relative flex flex-col gap-4 md:gap-[24px] items-center w-full pt-16 md:pt-70 min-h-[400px] md:min-h-[600px] px-4 md:px-0 overflow-hidden">
        {/* Multiple Floating App Icons positioned around the content */}

        {/* Top center */}
        <div className="absolute top-[50px] left-1/2 transform -translate-x-1/2  ">
          <FloatingAppIcon />
        </div>

        {/* Top left */}
        <div
          className="absolute top-[80px] md:top-[110px] left-[10%] md:left-[20%]  "
          style={{ animationDelay: "0.5s" }}
        >
          <FloatingAppIcon />
        </div>

        {/* Top right */}
        <div
          className="absolute top-[80px] md:top-[110px] right-[10%] md:right-[20%] "
          style={{ animationDelay: "1s" }}
        >
          <FloatingAppIcon />
        </div>

        {/* Middle left */}
        <div
          className="absolute  top-[140px] md:top-[230px] left-0 md:left-[5%]  "
          style={{ animationDelay: "1.5s" }}
        >
          <FloatingAppIcon />
        </div>

        {/* Middle right */}
        <div
          className="absolute top-[140px] md:top-[230px] right-0 md:right-[5%]  "
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
            badgeText={contentData.topTagline}
            secondaryText={contentData.secondaryText}
            icon="electric"
            variant="primary"
            size="md"
          />

          {/* Main heading */}
          <h2 className="capitalize font-['Plus_Jakarta_Sans'] font-semibold text-[24px] md:text-[32px] lg:text-[40px] leading-[30px] md:leading-[42px] lg:leading-[52px] text-center text-neutral-50 max-w-full">
            {contentData.mainHeadline}
          </h2>

          {/* Description text */}
          <p className="font-['Plus_Jakarta_Sans'] font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-center text-zinc-300 max-w-full">
            {contentData.subHeadline}
          </p>
  

          {/* CTA Button */}
          <div className="mt-2 md:mt-[8px]">
            <UniversalCTAButton
              text={contentData.ctaText}
              icon="arrow"
              variant="primary"
              size="md"
              iconPosition="right"
              iconRotation="-rotate-45"
              onClick={handleCTAClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsContent;
