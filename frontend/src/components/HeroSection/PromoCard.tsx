import React from "react";
import { AppIcon } from "./AppIcon";
import { CursorPointer } from "./CursorPointer";
import {
  imgDeviconSlack,
  imgDeviconFigma,
  imgLogosAirtable,
  imgLogosLoomIcon,
  imgDeviconFramermotion,
  imgSkillIconsWebflow,
  imgHugeIconsChatGPT,
  image,
} from "./assets";

// White circle logo component with lightning bolt
const WhiteCircleLogo: React.FC<{ size?: number; className?: string }> = ({
  size = 40,
  className = "",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 41 41"
    fill="none"
    className={className}
  >
    <defs>
      <linearGradient
        id="lightningGradient"
        x1="14.1162"
        y1="1.46191"
        x2="14.1162"
        y2="26.4619"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#501BD6" />
        <stop offset="1" stopColor="#7F57E2" />
      </linearGradient>
    </defs>

    {/* White circle background */}
    <circle cx="20.1162" cy="20.9619" r="20" fill="#FAFAFA" />

    {/* Lightning bolt centered in the circle */}
    <g transform="translate(6.5, 7.5)">
      <path
        d="M20.3662 11.6182H14.1162V1.46191L7.86621 16.3057H14.1162V26.4619L20.3662 11.6182Z"
        fill="url(#lightningGradient)"
      />
    </g>
  </svg>
);

// Circle bullet point component
const CircleBulletPoint: React.FC<{ size?: number; className?: string }> = ({
  size = 12,
  className = "",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 21 21"
    fill="none"
    className={className}
    style={{
      width: `${size}px`,
      height: `${size}px`,
      aspectRatio: "1/1",
    }}
  >
    <circle cx="10.8008" cy="10.4619" r="6" fill="white" />
    <circle
      cx="10.8008"
      cy="10.4619"
      r="8"
      stroke="white"
      strokeOpacity="0.12"
      strokeWidth="4"
    />
  </svg>
);

export const PromoCard: React.FC = () => {
  return (
    <div
      className="bg-[#672bff] overflow-clip relative rounded-bl-[40px] rounded-tl-[40px] w-full h-[524px]"
      data-node-id="1:1142"
    >
      <div
        className="absolute bg-[#7f57e3] h-[72px] left-0 top-[452px] w-full"
        data-node-id="1:1143"
      />

      {/* Main Content */}
      <div
        className="absolute content-stretch flex flex-col gap-[24px] items-start left-[24.8px] translate-y-[-50%]"
        data-node-id="1:1144"
        style={{ top: "calc(50% - 69.038px)" }}
      >
        <div
          className="capitalize font-['Plus_Jakarta_Sans'] font-bold leading-[42px] relative shrink-0 text-[32px] w-[538.704px]"
          data-node-id="1:1145"
          style={{
            color: "var(--Primary-25, #FAFAFA)",
            fontFamily: "Plus Jakarta Sans",
            fontSize: "32px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "42px",
            textTransform: "capitalize",
            width: "538.704px",
          }}
        >
          <p className="whitespace-pre-wrap">{`Best Deals, Reviews, & Comparisons of all SaaS Tools`}</p>
        </div>

        {/* Feature List */}
        <div
          className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full"
          data-node-id="1:1146"
        >
          <div
            className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
            data-node-id="1:1147"
          >
            <div
              className="relative shrink-0 size-[18px]"
              data-node-id="1:1148"
            >
              <CircleBulletPoint size={18} />
            </div>
            <div
              className="bg-white box-border content-stretch flex gap-[16px] items-center justify-center px-[16px] py-[8px] relative rounded-[100px] shrink-0"
              data-name="Buttons/main"
              data-node-id="1:1149"
            >
              <div
                aria-hidden="true"
                className="absolute border border-[rgba(235,239,245,0.12)] border-solid inset-0 pointer-events-none rounded-[100px]"
              />
              <div
                className="font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-center text-zinc-950 whitespace-nowrap"
                data-node-id="1:1150"
              >
                <p className="leading-[21px]">
                  Find & Redeem Exclusive SaaS Deals
                </p>
              </div>
            </div>
          </div>
          <div
            className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
            data-node-id="1:1151"
          >
            <div
              className="relative shrink-0 size-[18px]"
              data-node-id="1:1152"
            >
              <CircleBulletPoint size={18} />
            </div>
            <div
              className="bg-white box-border content-stretch flex gap-[16px] items-center justify-center px-[16px] py-[8px] relative rounded-[100px] shrink-0"
              data-name="Buttons/main"
              data-node-id="1:1153"
            >
              <div
                aria-hidden="true"
                className="absolute border border-[rgba(235,239,245,0.12)] border-solid inset-0 pointer-events-none rounded-[100px]"
              />
              <div
                className="font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-center text-zinc-950 whitespace-nowrap"
                data-node-id="1:1154"
              >
                <p className="leading-[21px]">
                  Read Real Reviews On All The SaaS Tools
                </p>
              </div>
            </div>
          </div>
          <div
            className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
            data-node-id="1:1155"
          >
            <div
              className="relative shrink-0 size-[18px]"
              data-node-id="1:1156"
            >
              <CircleBulletPoint size={18} />
            </div>
            <div
              className="bg-white box-border content-stretch flex gap-[16px] items-center justify-center px-[16px] py-[8px] relative rounded-[100px] shrink-0"
              data-name="Buttons/main"
              data-node-id="1:1157"
            >
              <div
                aria-hidden="true"
                className="absolute border border-[rgba(235,239,245,0.12)] border-solid inset-0 pointer-events-none rounded-[100px]"
              />
              <div
                className="font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-center text-zinc-950 whitespace-nowrap"
                data-node-id="1:1158"
              >
                <p className="leading-[21px]">Tools Comparisons Details</p>
              </div>
            </div>
          </div>
          <div
            className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
            data-node-id="1:1159"
          >
            <div
              className="relative shrink-0 size-[18px]"
              data-node-id="1:1160"
            >
              <CircleBulletPoint size={18} />
            </div>
            <div
              className="bg-white box-border content-stretch flex gap-[16px] items-center justify-center px-[16px] py-[8px] relative rounded-[100px] shrink-0"
              data-name="Buttons/main"
              data-node-id="1:1161"
            >
              <div
                aria-hidden="true"
                className="absolute border border-[rgba(235,239,245,0.12)] border-solid inset-0 pointer-events-none rounded-[100px]"
              />
              <div
                className="font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-center text-zinc-950 whitespace-nowrap"
                data-node-id="1:1162"
              >
                <p className="leading-[21px]">SaaS Tool Stacks</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating App Icons */}
      <AppIcon
        src={imgDeviconSlack}
        className="absolute left-[245.05px] top-[429px]"
      />

      <AppIcon
        src={imgLogosAirtable}
        className="absolute  left-[285.05px] top-[270px]"
      />
      <AppIcon
        src={imgLogosLoomIcon}
        className="absolute left-[335.05px] top-[125px]"
      />
      <AppIcon
        src={imgDeviconFramermotion}
        className="absolute left-[400.05px] top-[-10px]"
      />
      <AppIcon
        src={imgHugeIconsChatGPT}
        className="absolute left-[525.05px] top-[-60px]"
      />
      <AppIcon
        src={imgSkillIconsWebflow}
        className="absolute left-[590.05px] top-[-40px]"
      />
      <AppIcon
        src={imgDeviconFigma}
        className="absolute left-[640.05px] top-[-10px]"
      />
      <AppIcon
        src={imgLogosAirtable}
        className="absolute left-[665.05px] top-[25px]"
      />
      {/* Brand Logo */}
      <div
        className="absolute content-stretch flex gap-[12px] items-center right-[24.88px] top-[40.96px]"
        data-node-id="1:1221"
      >
        <div className="relative shrink-0 size-[40px]" data-node-id="1:1222">
          <WhiteCircleLogo size={40} />
        </div>
        <div
          className="font-['Plus_Jakarta_Sans'] font-bold leading-[32px] relative shrink-0 text-[24px] text-neutral-50 whitespace-nowrap"
          data-node-id="1:1226"
        >
          <p>PerkPilot</p>
        </div>
      </div>

      {/* Background Image */}
      <div
        className="absolute bottom-0 h-[370.932px] right-[10px] w-[446.743px]"
        data-name="freepik__background__12008 1"
        data-node-id="1:1243"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full"
          src={image}
        />
      </div>

      {/* Cursor with Text */}
      <div
        className="absolute content-stretch flex flex-col gap-[4px] items-center rounded-[16px] top-[361.87px] translate-x-[-50%]"
        data-node-id="1:1244"
        style={{ left: "calc(50% - 230px)" }}
      >
        <div
          className="overflow-clip relative shrink-0 size-[24px]"
          data-name="cursor-pointer"
          data-node-id="1:1245"
        >
          <CursorPointer />
        </div>
        <div
          className="font-['Plus_Jakarta_Sans'] font-semibold italic leading-[21px] relative shrink-0 text-[12px] text-center text-neutral-50 whitespace-nowrap"
          data-node-id="1:1247"
        >
          <p>All In One Place</p>
        </div>
      </div>
    </div>
  );
};
