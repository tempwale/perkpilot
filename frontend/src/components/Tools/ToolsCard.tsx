import React from "react";

interface ToolsCardProps {
  title?: string;
  description?: string;
  badgeLabel?: string;
  tags?: string[];
  buttonText?: string;
  onButtonClick?: () => void;
  icon?: React.ReactNode;
}

export default function ToolsCard({
  title = "Web Scraper",
  description = "Extract data from any website with CSS selectors.",
  badgeLabel = "Popular",
  tags = ["CSS", "Web", "Data"],
  buttonText = "Start Extracting",
  onButtonClick,
  icon,
}: ToolsCardProps) {
  return (
    <div>
      <div
        data-layer="Frame 2147206160"
        className="Frame2147206160 w-[300px] h-[340px] p-6 bg-white/5 rounded-3xl outline-1 -outline-offset-[-1px] outline-white/10 flex flex-col justify-between items-start gap-4"
      >
        <div
          data-layer="Frame 2147206296"
          className="Frame2147206296 self-stretch inline-flex justify-between items-center"
        >
          <div
            data-layer="iconoir:pc-check"
            className="IconoirPcCheck w-12 h-12 p-0.5 bg-gradient-to-b from-[#501bd6] to-[#7f57e2] rounded-[100px] flex justify-center items-center gap-2.5 overflow-hidden"
          >
            {icon ?? (
              <div className="Language w-6 h-6 relative overflow-hidden">
                <div className="Vector w-5 h-5 left-[2px] top-[2px] absolute outline-[1.50px] -outline-offset-[-0.75px] outline-1-neutral-50" />
                <div className="Vector w-[3px] h-[19.90px] left-[13px] top-[2.05px] absolute outline-[1.50px] -outline-offset-[-0.75px] outline-1-neutral-50" />
                <div className="Vector w-[3px] h-[19.90px] left-[8px] top-[2.05px] absolute outline-[1.50px] -outline-offset-[-0.75px] outline-1-neutral-50" />
                <div className="Vector w-[18.74px] h-0 left-[2.63px] top-[15.50px] absolute outline-[1.50px] -outline-offset-[-0.75px] outline-1-neutral-50" />
                <div className="Vector w-[18.74px] h-0 left-[2.63px] top-[8.50px] absolute outline-[1.50px] -outline-offset-[-0.75px] outline-1-neutral-50" />
              </div>
            )}
          </div>
          <div
            data-layer="Frame 2147206295"
            className="Frame2147206295 h-8 px-3 py-2.5 bg-white/5 rounded-[100px] flex justify-center items-center gap-2.5"
          >
            <div
              data-layer="Popular"
              className="Popular justify-start text-neutral-50 text-xs font-medium font-['Plus_Jakarta_Sans'] leading-[18px]"
            >
              {badgeLabel}
            </div>
          </div>
        </div>
        <div
          data-layer="Frame 21"
          className="Frame21 self-stretch flex flex-col justify-start items-center gap-3"
        >
          <div
            data-layer="Web Scraper"
            className="WebScraper self-stretch justify-start text-white text-2xl font-medium font-['Inter'] leading-9"
          >
            {title}
          </div>
          <div
            data-layer="Extract data from any website with CSS selectors."
            className="ExtractDataFromAnyWebsiteWithCssSelectors self-stretch justify-start text-zinc-400 text-base font-normal font-['Poppins'] leading-normal"
          >
            {description}
          </div>
        </div>
        <div
          data-layer="Frame 2147206294"
          className="Frame2147206294 self-stretch inline-flex justify-start items-center gap-4"
        >
          {tags.map((t, idx) => (
            <div
              key={idx}
              className="h-8 px-3 py-2.5 bg-white/5 rounded-[100px] flex justify-center items-center gap-2.5"
            >
              <div className="text-neutral-50 text-xs font-medium font-['Plus_Jakarta_Sans'] leading-[18px]">
                {t}
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={onButtonClick}
          data-layer="Buttons/main"
          className="ButtonsMain self-stretch h-12 pl-8 pr-4 py-3 bg-neutral-50 rounded-[100px] inline-flex justify-center items-center gap-3"
        >
          <div
            data-layer="Start Extracting"
            className="StartExtracting text-center justify-start text-zinc-950 text-base font-medium font-['Plus_Jakarta_Sans'] leading-normal"
          >
            {buttonText}
          </div>
          <div
            data-layer="nav-arrow-right"
            className="NavArrowRight w-6 h-6 relative overflow-hidden"
          >
            <div className="Vector w-1.5 h-3 left-[15px] top-[18px] absolute origin-top-left rotate-180 outline-[1.50px] -outline-offset-[-0.75px] outline-1-neutral-50" />
          </div>
        </button>
      </div>
    </div>
  );
}
