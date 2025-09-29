import React from "react";
import { TrustIndicator } from "./TrustIndicator";

// Lightning bolt icon component
const LightningIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 16,
  className = "",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 17 16"
    fill="none"
    className={className}
  >
    <path
      d="M12.25 6.59375H8.5V0.5L4.75 9.40625H8.5V15.5L12.25 6.59375Z"
      fill="white"
    />
  </svg>
);

export const HeroContent: React.FC = () => {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-start justify-center relative flex-1 pl-[90px] pr-[36px] py-[22px]"
      data-node-id="1:163"
    >
      {/* Badge Section */}
      <div
        className="bg-[rgba(244,244,245,0.08)] box-border content-stretch flex gap-[11px] items-center justify-center pl-[14px] pr-[22px] py-[7px] relative rounded-[100px] shrink-0"
        data-name="Buttons/main"
        data-node-id="1:164"
      >
        <div
          className="bg-gradient-to-b box-border content-stretch flex from-[#501bd6] gap-[4px] h-[22px] items-center pl-[7px] pr-[11px] py-[4px] relative rounded-[100px] shrink-0 to-[#7f57e2]"
          data-node-id="1:165"
        >
          <div
            className="relative shrink-0 size-[14px]"
            data-name="game-icons:electric"
            data-node-id="1:166"
          >
            <LightningIcon size={14} />
          </div>
          <div
            className="font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[11px] text-center text-white whitespace-nowrap"
            data-node-id="1:168"
          >
            <p className="leading-[normal]">#1 Platform</p>
          </div>
        </div>
        <div
          className="bg-clip-text bg-gradient-to-r font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium from-[#ffffff] leading-[0] relative shrink-0 text-[13px] text-center to-[#949494] whitespace-nowrap"
          data-node-id="1:169"
          style={{ WebkitTextFillColor: "transparent" }}
        >
          <p className="leading-[normal]">For Discounted SaaS Deals</p>
        </div>
      </div>

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
        <div className="backdrop-blur-sm backdrop-filter bg-gradient-to-b box-border content-stretch flex from-[#501bd6] gap-[11px] h-[50px] items-center justify-center px-[36px] py-[14px] relative rounded-[100px] shrink-0 to-[#7f57e2] cursor-pointer hover:opacity-90 transition-opacity">
          <div
            aria-hidden="true"
            className="absolute border border-[rgba(250,250,250,0.08)] border-solid inset-0 pointer-events-none rounded-[100px]"
          />
          <div className="font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[16px] text-center text-neutral-50 whitespace-nowrap">
            <p className="leading-[24px]">Start Exploring Deals & Discounts</p>
          </div>
          <div className="bg-white rounded-full w-[29px] h-[29px] flex items-center justify-center shrink-0">
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="-rotate-45"
            >
              <path
                d="M3.33334 8H12.6667M12.6667 8L8.66668 4M12.6667 8L8.66668 12"
                stroke="#7f57e2"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Trust Indicator */}
      <div className="mt-[28px]">
        <TrustIndicator />
      </div>
    </div>
  );
};
