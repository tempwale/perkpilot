import React from "react";

interface ToolsCardProps {
  title?: string;
  category?: string;
  icon?: React.ReactNode;
  badgeText?: string;
  moneyLabel?: string;
  moneyValue?: string;
  primaryActionText?: string;
  secondaryActionText?: string;
}

export default function ToolsCard({
  title = "Motion",
  category = "No Code Tool",
  icon,
  badgeText = "24% CASHBACK",
  moneyLabel = "Money Save Up to",
  moneyValue = "$4,494/Year",
  primaryActionText = "Redeem",
  secondaryActionText = "View Details",
}: ToolsCardProps) {
  return (
    <div
      data-layer="Card"
      className="Card w-full lg:w-[560px] p-2 sm:p-3 bg-white/10 rounded-3xl outline outline-1 outline-offset-[-1px] outline-white/10 inline-flex justify-start items-center gap-4 flex flex-col lg:flex-row"
    >
      <div className="w-full flex justify-center">
        <div
          data-layer="Frame 1321320236"
          className="Frame1321320236 flex-1 inline-flex flex-col justify-start items-start gap-3"
        >
          <div
            data-layer="Frame 1321320234"
            className="Frame1321320234 self-stretch inline-flex justify-between items-center"
          >
            <div
              data-layer="Frame 1321320238"
              className="Frame1321320238 flex justify-start items-center gap-2"
            >
              <div
                data-layer="Frame 1321320224"
                className="Frame1321320224 w-12 h-12 p-2 bg-gray-50 rounded-full flex justify-center items-center gap-2"
              >
                {icon ? (
                    <div className="w-6 h-6 relative flex items-center justify-center">
                    {icon}
                  </div>
                ) : (
                    <div className="w-6 h-6 relative flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                        className="w-5 h-5"
                    >
                      <path
                        d="M6.66669 6.46669V25.5334C6.28891 25.1556 5.93335 24.7556 5.60002 24.3334C5.26669 23.9111 4.95558 23.4778 4.66669 23.0334V8.96669C4.95558 8.52224 5.26669 8.08891 5.60002 7.66669C5.93335 7.24446 6.28891 6.84446 6.66669 6.46669ZM12 3.26669V28.7334C11.5334 28.5778 11.0778 28.4058 10.6334 28.2174C10.1889 28.0289 9.75558 27.812 9.33335 27.5667V4.43335C9.75558 4.18891 10.1889 3.97202 10.6334 3.78269C11.0778 3.59335 11.5334 3.42135 12 3.26669ZM21.3334 28.2334V3.76669C23.6889 4.81113 25.6111 6.42224 27.1 8.60002C28.5889 10.7778 29.3334 13.2445 29.3334 16C29.3334 18.7556 28.5889 21.2222 27.1 23.4C25.6111 25.5778 23.6889 27.1889 21.3334 28.2334ZM16 29.3334C15.7778 29.3334 15.5556 29.328 15.3334 29.3174C15.1111 29.3067 14.8889 29.2898 14.6667 29.2667V2.73335C14.8889 2.71113 15.1111 2.69469 15.3334 2.68402C15.5556 2.67335 15.7778 2.66758 16 2.66669C16.4445 2.66669 16.8889 2.68891 17.3334 2.73335C17.7778 2.7778 18.2222 2.84446 18.6667 2.93335V29.0667C18.2222 29.1556 17.7778 29.2222 17.3334 29.2667C16.8889 29.3111 16.4445 29.3334 16 29.3334Z"
                        fill="#005EEB"
                      />
                    </svg>
                  </div>
                )}
              </div>
              <div
                data-layer="Frame 1321320233"
                className="Frame1321320233 inline-flex flex-col justify-start items-start gap-1"
              >
                <div
                  data-layer="Motion"
                  className="Motion justify-start text-neutral-50 text-xl font-medium font-['Urbanist']"
                >
                  {title}
                </div>
                <div
                  data-layer="No Code Tool"
                  className="NoCodeTool justify-start text-zinc-400 text-xs font-medium font-['Poppins']"
                >
                  {category}
                </div>
              </div>
            </div>
            <div
              data-layer="Container"
              className="Container px-2 py-1 bg-gradient-to-b from-[#501bd6] to-[#7f57e2] rounded-lg flex justify-start items-start gap-4"
            >
              <div
                data-layer="24% CASHBACK"
                className="Cashback text-center justify-start text-neutral-50 text-xs font-medium font-['Poppins']"
              >
                {badgeText}
              </div>
            </div>
          </div>
          <div
            data-layer="Frame 2147205599"
            className="Frame2147205599 self-stretch flex flex-col justify-start items-start gap-3"
          >
            <div
              data-layer="Frame 1321320286"
              className="Frame1321320286 self-stretch inline-flex justify-between items-center"
            >
              <div
                data-layer="Money Save Up to"
                className="MoneySaveUpTo justify-start text-neutral-50 text-base font-normal font-['Poppins'] leading-normal"
              >
                {moneyLabel}
              </div>
              <div
                data-layer="$4,494/Year"
                className="4494Year justify-start text-neutral-50 text-base font-normal font-['Poppins'] leading-normal"
              >
                {moneyValue}
              </div>
            </div>
          </div>
        </div>
      </div>
            <div
              data-layer="Filter"
              className="Filter w-full lg:w-[180px] self-stretch inline-flex flex-row lg:flex-col justify-around items-start gap-3"
            >
        <div
          data-layer="All Assets"
          className="AllAssets self-stretch px-3 py-2 bg-gradient-to-b from-[#501bd6] to-[#7f57e2] rounded-lg inline-flex justify-center items-center"
        >
              <div
                data-layer="Redeem"
                className="Redeem justify-start w-[120px] text-center text-white text-base font-normal font-['Poppins'] leading-normal"
              >
            {primaryActionText}
          </div>
        </div>
        <div
          data-layer="Crypto"
          className="Crypto self-stretch px-3 py-2 bg-white/10 rounded-lg inline-flex justify-center items-center gap-2.5"
        >
          <div
                data-layer="View Details"
                className="ViewDetails justify-start w-[120px] text-center text-neutral-50 text-base font-normal font-['Poppins'] leading-normal"
              >
            {secondaryActionText}
          </div>
        </div>
      </div>
    </div>
  );
}
