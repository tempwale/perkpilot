import React, { useEffect, useState } from "react";
import { DEALS_API } from "../../config/backend";
import type { Deal } from "../../hooks/useDeals";

interface ToolsCardProps {
  toolName?: string;
  toolCategory?: string;
  toolLogo?: string;
  isVerified?: boolean;
  badgeText?: string;
  savingsLabel?: string;
  savingsValue?: string;
  primaryActionText?: string;
  secondaryActionText?: string;
  description?: string;
  icon?: React.ReactNode;
  primaryActionUrl?: string;
  secondaryActionUrl?: string;
}

export default function ToolsCard({
  toolName = "Featured Tool",
  toolCategory = "Productivity",
  toolLogo,
  isVerified = false,
  badgeText = "Exclusive",
  savingsLabel = "Money Save Up to",
  savingsValue = "—",
  primaryActionText = "Redeem",
  secondaryActionText = "View Details",
  description,
  icon,
  primaryActionUrl,
  secondaryActionUrl,
}: ToolsCardProps) {
  const [dealsData, setDealsData] = useState<Deal[]>([]);

  useEffect(() => {
    const controller = new AbortController();
    const fetchDeals = async () => {
      try {
        const response = await fetch(DEALS_API, { signal: controller.signal });
        if (!response.ok) {
          throw new Error("Failed to fetch deals");
        }
        const allDeals = (await response.json()) as Deal[] | { value: Deal[] };
        const fetchedDeals = Array.isArray(allDeals)
          ? allDeals
          : allDeals.value || [];
        setDealsData(fetchedDeals);
      } catch (error) {
        if (controller.signal.aborted) {
          return;
        }
        console.error("Error fetching deals:", error);
        setDealsData([]);
      }
    };

    void fetchDeals();

    return () => {
      controller.abort();
    };
  }, []);

  const getToolData = (toolName: string): Deal | null => {
    return dealsData.find(
      (deal) => deal.title?.toLowerCase().trim() === toolName.toLowerCase().trim()
    ) || null;
  };

  const getPrimaryCtaLink = (toolName: string): string | null => {
    const toolData = getToolData(toolName);
    return toolData?.primary_cta_link || null;
  };

  const getSavingsAmount = (toolName: string): string => {
    const toolData = getToolData(toolName);
    return toolData?.savings || toolData?.discount || savingsValue;
  };

  const getBadgeText = (toolName: string): string => {
    const toolData = getToolData(toolName);
    if (toolData?.discount) {
      return `${toolData.discount} OFF`;
    }
    if (toolData?.tag) {
      return toolData.tag;
    }
    return badgeText;
  };

  // Get deal data for the current tool
  const primaryCtaLink = toolName ? getPrimaryCtaLink(toolName) : primaryActionUrl;
  const displaySavingsValue = toolName ? getSavingsAmount(toolName) : savingsValue;
  const displayBadgeText = toolName ? getBadgeText(toolName) : badgeText;
  return (
    <div
      data-layer="Card"
      className="Card w-full lg:w-[560px] p-2 sm:p-3 bg-white/10 rounded-3xl outline-1 -outline-offset-[-1px] outline-white/10 flex flex-col lg:flex-row justify-start items-start gap-4"
    >
      <div className="w-full lg:flex-1 flex flex-col justify-start items-start gap-3">
      <div
        data-layer="Frame 1321320234"
          className="Frame1321320234 w-full flex flex-row justify-between items-center gap-3"
      >
        <div
          data-layer="Frame 1321320238"
            className="Frame1321320238 flex justify-start items-center gap-2 flex-1 min-w-0"
        >
          <div
            data-layer="Frame 1321320224"
              className="Frame1321320224 w-12 h-12 p-2 bg-gray-50 rounded-full flex justify-center items-center gap-2 flex-shrink-0"
          >
            {toolLogo ? (
              <img
                src={toolLogo}
                alt={toolName}
                className="w-8 h-8 rounded-full object-cover"
              />
            ) : icon ? (
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
            className="Frame1321320233 flex flex-col justify-start items-start gap-1 flex-1 min-w-0"
          >
            <div className="flex items-center gap-2">
              <div
                data-layer="Motion"
                  className="Motion justify-start text-neutral-50 text-xl font-medium font-['Urbanist'] truncate"
              >
                {toolName}
              </div>
              {isVerified && (
                <div
                  data-layer="bitcoin-icons:verify-filled"
                    className="BitcoinIconsVerifyFilled w-6 h-6 relative overflow-hidden flex-shrink-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.918 6.14301C15.7801 5.92265 15.5769 5.75077 15.3367 5.65129C15.0966 5.55181 14.8313 5.52969 14.578 5.58801L12.78 6.00101C12.5957 6.04336 12.4043 6.04336 12.22 6.00101L10.422 5.58801C10.1687 5.52969 9.90346 5.55181 9.66328 5.65129C9.42311 5.75077 9.21992 5.92265 9.08201 6.14301L8.10201 7.70701C8.00201 7.86701 7.86701 8.00201 7.70701 8.10301L6.14301 9.08301C5.92303 9.2208 5.7514 9.42366 5.65194 9.66342C5.55249 9.90319 5.53014 10.168 5.58801 10.421L6.00101 12.221C6.04321 12.405 6.04321 12.5961 6.00101 12.78L5.58801 14.579C5.52992 14.8322 5.55215 15.0972 5.65161 15.3372C5.75108 15.5771 5.92284 15.7802 6.14301 15.918L7.70701 16.898C7.86701 16.998 8.00201 17.133 8.10301 17.293L9.08301 18.857C9.36501 19.308 9.90301 19.531 10.422 19.412L12.22 18.999C12.4043 18.9567 12.5957 18.9567 12.78 18.999L14.579 19.412C14.8322 19.4701 15.0972 19.4479 15.3372 19.3484C15.5771 19.2489 15.7802 19.0772 15.918 18.857L16.898 17.293C16.998 17.133 17.133 16.998 17.293 16.898L18.858 15.918C19.0782 15.78 19.2499 15.5767 19.3492 15.3365C19.4485 15.0964 19.4704 14.8312 19.412 14.578L19 12.78C18.9577 12.5957 18.9577 12.4043 19 12.22L19.413 10.421C19.4712 10.1679 19.4491 9.903 19.3498 9.66304C19.2505 9.42308 19.079 9.22 18.859 9.08201L17.294 8.10201C17.1342 8.00183 16.9992 7.86679 16.899 7.70701L15.918 6.14301ZM15.415 10.27C15.4769 10.1563 15.4922 10.023 15.4578 9.89818C15.4233 9.77338 15.3418 9.66679 15.2304 9.60085C15.119 9.53491 14.9864 9.51476 14.8604 9.54463C14.7344 9.5745 14.625 9.65206 14.555 9.76101L11.94 14.187L10.361 12.675C10.3142 12.6269 10.2581 12.5887 10.1962 12.5628C10.1343 12.5368 10.0678 12.5236 10.0006 12.5239C9.93349 12.5242 9.8671 12.538 9.80541 12.5645C9.74373 12.591 9.68801 12.6296 9.64159 12.6781C9.59517 12.7267 9.55899 12.784 9.53521 12.8468C9.51144 12.9096 9.50055 12.9765 9.5032 13.0436C9.50585 13.1107 9.52199 13.1766 9.55065 13.2373C9.57931 13.298 9.6199 13.3523 9.67001 13.397L11.704 15.346C11.7584 15.3981 11.8239 15.4371 11.8956 15.4603C11.9673 15.4835 12.0432 15.4902 12.1179 15.4799C12.1925 15.4697 12.2638 15.4426 12.3265 15.4009C12.3892 15.3592 12.4417 15.3039 12.48 15.239L15.415 10.27Z"
                        fill="#FAFAFA"
                    />
                  </svg>
                </div>
              )}
            </div>
            <div
              data-layer="No Code Tool"
                className="NoCodeTool justify-start text-zinc-400 text-xs font-medium font-['Poppins']"
            >
              {toolCategory}
            </div>
          </div>
        </div>
        <div
          data-layer="Container"
            className="Container px-2 py-1 bg-gradient-to-b from-[#501bd6] to-[#7f57e2] rounded-lg flex-shrink-0"
        >
          <div
            data-layer="24% CASHBACK"
              className="Cashback text-center justify-start text-neutral-50 text-xs font-medium font-['Poppins'] whitespace-nowrap"
          >
            {displayBadgeText}
          </div>
        </div>
      </div>
        <div
          data-layer="Frame 2147205599"
          className="Frame2147205599 w-full flex flex-col justify-start items-start gap-3"
        >
      <div
        data-layer="Frame 1321320286"
        className="Frame1321320286 w-full flex flex-row justify-between items-center gap-4"
      >
        <div
          data-layer="Money Save Up to"
              className="MoneySaveUpTo justify-start text-neutral-50 text-base font-normal font-['Poppins'] leading-normal"
        >
          {savingsLabel}
        </div>
        <div
          data-layer="$4,494/Year"
              className="4494Year justify-start text-neutral-50 text-base font-normal font-['Poppins'] leading-normal"
        >
          {displaySavingsValue}
        </div>
      </div>
      {description && (
        <div
          data-layer="Description"
              className="Description justify-start text-zinc-400 text-xs font-normal font-['Poppins']"
        >
          {description}
        </div>
      )}
        </div>
      </div>
      <div
        data-layer="Filter"
        className="Filter w-full lg:w-[180px] flex flex-row lg:flex-col justify-start items-stretch gap-3"
      >
        {primaryCtaLink ? (
          <a
            href={primaryCtaLink}
            target="_blank"
            rel="noopener noreferrer"
            data-layer="All Assets"
            className="AllAssets w-full lg:w-auto self-stretch px-3 py-2 bg-gradient-to-b from-[#501bd6] to-[#7f57e2] rounded-lg inline-flex justify-center items-center hover:opacity-90 transition-opacity"
          >
            <div
              data-layer="Redeem"
              className="Redeem justify-start w-full text-center text-white text-base font-normal font-['Poppins'] leading-normal"
            >
              {primaryActionText}
            </div>
          </a>
        ) : (
          <div
            data-layer="All Assets"
            className="AllAssets w-full lg:w-auto self-stretch px-3 py-2 bg-gradient-to-b from-[#501bd6] to-[#7f57e2] rounded-lg inline-flex justify-center items-center opacity-60 cursor-not-allowed"
          >
            <div
              data-layer="Redeem"
              className="Redeem justify-start w-full text-center text-white text-base font-normal font-['Poppins'] leading-normal"
            >
              {primaryActionText}
            </div>
          </div>
        )}
        {secondaryActionUrl ? (
          <a
            href={secondaryActionUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-layer="Crypto"
            className="Crypto w-full lg:w-auto self-stretch px-3 py-2 bg-white/10 rounded-lg inline-flex justify-center items-center gap-2.5 hover:bg-white/20 transition-colors"
          >
            <div
              data-layer="View Details"
              className="ViewDetails justify-start w-full text-center text-neutral-50 text-base font-normal font-['Poppins'] leading-normal"
          >
            {secondaryActionText}
            </div>
          </a>
        ) : (
          <div
            data-layer="Crypto"
            className="Crypto w-full lg:w-auto self-stretch px-3 py-2 bg-white/10 rounded-lg inline-flex justify-center items-center gap-2.5 opacity-60 cursor-not-allowed"
          >
            <div
              data-layer="View Details"
              className="ViewDetails justify-start w-full text-center text-neutral-50 text-base font-normal font-['Poppins'] leading-normal"
          >
            {secondaryActionText}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
