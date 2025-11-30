import { useEffect, useState } from "react";
import type { BlogToolBlogCard } from "../../types/blogs.types";
import { DEALS_API } from "../../config/backend";
import type { Deal } from "../../hooks/useDeals";

interface ToolDealProps {
  toolBlogCard?: BlogToolBlogCard;
}

export default function ToolDeal({ toolBlogCard }: ToolDealProps) {
  const [dealsData, setDealsData] = useState<Deal[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDeals = async () => {
      try {
        setLoading(true);
        const response = await fetch(DEALS_API);
        if (!response.ok) {
          throw new Error("Failed to fetch deals");
        }
        const allDeals = await response.json() as Deal[] | { value: Deal[] };
        const fetchedDeals = Array.isArray(allDeals) ? allDeals : (allDeals.value || []);
        setDealsData(fetchedDeals);
      } catch (error) {
        console.error("Error fetching deals:", error);
        setDealsData([]);
      } finally {
        setLoading(false);
      }
    };

    void fetchDeals();
  }, []);


  const getToolData = (toolName: string): Deal | null => {
    return dealsData.find(
      (deal) => deal.title?.toLowerCase().trim() === toolName.toLowerCase().trim()
    ) || null;
  };

  const getToolDescription = (toolName: string): string => {
    const toolData = getToolData(toolName);
    return toolData?.description || "";
  };


  const getToolTitle = (toolName: string): string => {
    const toolData = getToolData(toolName);
    return toolData?.title || toolName;
  };

  const getSavingsAmount = (toolName: string): string => {
    const toolData = getToolData(toolName);
    const savings = toolData?.savings || toolData?.discount || "";
    return savings.replace(/^Save Up To\s*/i, "").trim();
  };

  const getPrimaryCtaLink = (toolName: string): string | null => {
    const toolData = getToolData(toolName);
    return toolData?.primary_cta_link || null;
  };

  if (!toolBlogCard) {
    return null;
  }

  const deals = toolBlogCard.dealsMentioned || [];

  if (deals.length === 0) {
    return null;
  }

  return (
    <div className="self-stretch flex flex-col gap-6">
      {deals.map((tool, index) => (
    <div
          key={index}
      data-layer="Frame 2147206154"
      className="Frame2147206154 self-stretch p-6 bg-gradient-to-b from-white/10 to-[#eef2fc]/10 rounded-3xl outline-1 -outline-offset-[-1px] outline-[#ebeef4]/10 flex flex-col lg:flex-row justify-start items-start lg:items-center gap-6"
    >
      <div
        data-layer="Card"
        className="Card w-full sm:w-80 px-4 pb-4 bg-white/10 rounded-3xl outline-1 outline-[#ebeef4]/10 flex flex-col justify-center items-center gap-4"
      >
        <div
          data-layer="Frame 1321320236"
          className="Frame1321320236 self-stretch py-4 flex flex-col justify-start items-start gap-4"
        >
          <div
            data-layer="Frame 1321320234"
            className="Frame1321320234 self-stretch inline-flex justify-between items-center"
          >
            <div
              data-layer="Frame 1321320238"
              className="Frame1321320238 flex-1 flex justify-start items-center gap-3"
            >
              <div
                data-layer="Frame 1321320224"
                className="Frame1321320224 w-14 h-14 p-2.5 bg-gray-50 rounded-[100px] flex justify-center items-center gap-2.5"
              >
                {tool.toolLogo ? (
                  <img
                    src={tool.toolLogo}
                    alt={tool.toolName}
                    className="w-[30.57px] h-8 object-contain"
                  />
                ) : (
                  <div
                    data-layer="logos:notion-icon"
                    className="LogosNotionIcon w-[30.57px] h-8 relative overflow-hidden"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="33"
                      viewBox="0 0 32 33"
                      fill="none"
                      className="w-[30.57px] h-[31.94px]"
                    >
                      <path
                        d="M20.3093 0.572589L2.63786 1.87766C1.21255 2.00125 0.716431 2.93271 0.716431 4.04937V23.4219C0.716431 24.2916 1.02509 25.0358 1.77028 26.03L5.92419 31.4315C6.60658 32.3012 7.22712 32.4875 8.53016 32.4257L29.0512 31.1835C30.7864 31.0599 31.2836 30.252 31.2836 28.8861V7.09187C31.2836 6.38608 31.0047 6.18274 30.1839 5.58023L30.0424 5.47802L24.4024 1.50405C23.0376 0.511932 22.48 0.386321 20.3093 0.572589ZM8.99428 6.73522C7.3187 6.84805 6.93864 6.8736 5.987 6.09963L3.5673 4.17498C3.32133 3.9259 3.44479 3.61498 4.06437 3.55325L21.0523 2.31205C22.4788 2.18751 23.2219 2.68459 23.7797 3.11898L26.6933 5.23002C26.8178 5.29271 27.1277 5.66429 26.755 5.66429L9.21148 6.72029L8.99428 6.73522ZM7.04085 28.6999V10.1981C7.04085 9.39014 7.28885 9.0176 8.03189 8.9548L28.1815 7.77522C28.865 7.71348 29.1737 8.14775 29.1737 8.9548V27.3329C29.1737 28.1409 29.0491 28.8243 27.9335 28.8861L8.65148 30.0039C7.53589 30.0656 7.04085 29.6941 7.04085 28.6999ZM26.0749 11.1901C26.1983 11.7491 26.0749 12.308 25.516 12.3719L24.5866 12.556V26.2162C23.7797 26.6504 23.0367 26.8986 22.4159 26.8986C21.4239 26.8986 21.1758 26.5876 20.4327 25.6572L14.3554 16.0956V25.3464L16.2777 25.7818C16.2777 25.7818 16.2777 26.8996 14.7268 26.8996L10.4505 27.1476C10.326 26.8986 10.4505 26.2779 10.884 26.1544L12.0005 25.8446V13.6132L10.4506 13.4876C10.326 12.9288 10.6357 12.1217 11.5045 12.0589L16.0927 11.7503L22.416 21.4354V12.867L20.8043 12.6817C20.6798 11.9972 21.1758 11.5001 21.7954 11.4395L26.0749 11.1901Z"
                        fill="#0D0D11"
                      />
                    </svg>
                  </div>
                )}
              </div>
              <div
                data-layer="Frame 1321320233"
                className="Frame1321320233 flex flex-col justify-start items-start gap-1"
              >
                <div
                  data-layer="Frame 2147205849"
                  className="Frame2147205849 inline-flex justify-start items-center gap-2"
                >
                  <div
                    data-layer="Notion"
                    className="Notion justify-start text-neutral-50 text-xl font-medium font-['Urbanist']"
                  >
                    {tool.toolName}
                  </div>
                  {tool.isVerified && (
                    <div
                      data-layer="bitcoin-icons:verify-filled"
                      className="BitcoinIconsVerifyFilled w-6 h-6 relative overflow-hidden"
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
                  data-layer="Productivity Tool"
                  className="ProductivityTool justify-start text-zinc-400 text-xs font-medium font-['Poppins']"
                >
                  {tool.toolCategory}
                </div>
              </div>
            </div>
          </div>
          <div
            data-layer="Frame 2147205599"
            className="Frame2147205599 self-stretch flex flex-col justify-start items-start gap-4"
          >
            <div
              data-layer="Every communications experience, Integrated contact center, voice, video, chat, and APIs."
              className="EveryCommunicationsExperienceIntegratedContactCenterVoiceVideoChatAndApis self-stretch justify-start text-zinc-400 text-xs font-normal font-['Poppins']"
            >
              {loading ? "Loading..." : getToolDescription(tool.toolName) || toolBlogCard.blogBody}
            </div>
            <div
              data-layer="Frame 1321320286"
              className="Frame1321320286 self-stretch inline-flex justify-between items-center"
            >
              <div
                data-layer="Money Save Up to"
                className="MoneySaveUpTo justify-start text-neutral-50 text-sm font-medium font-['Poppins']"
              >
                Money Save Up to
              </div>
              <div
                data-layer="$4,494/Year"
                className="4494Year justify-start text-neutral-50 text-sm font-medium font-['Poppins']"
              >
                {loading ? "Loading..." : getSavingsAmount(tool.toolName) || "$4,494/Year"}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        data-layer="Frame 2147206153"
        className="Frame2147206153 flex-1 flex flex-col justify-start items-start gap-4"
      >
        <div
          data-layer="Boost Your Content Output by 10x!"
          className="BoostYourContentOutputBy10x self-stretch justify-start text-neutral-50 text-xl font-medium font-['Poppins'] leading-loose"
        >
          {loading ? "Loading..." : getToolTitle(tool.toolName) || toolBlogCard.blogTitle}
        </div>
        <div
          data-layer="Frame 2147206152"
          className="Frame2147206152 self-stretch flex flex-wrap justify-start items-center gap-4"
        >
          <div
            data-layer="Container"
            className="Container px-4 py-1 bg-gradient-to-b from-[#501bd6] to-[#7f57e2] rounded-lg flex justify-center items-center"
          >
            <div
              data-layer="15% CASHBACK"
              className="Cashback text-center text-neutral-50 text-xs font-medium font-['Poppins'] whitespace-nowrap"
            >
              15% CASHBACK
            </div>
          </div>
          <div
            data-layer="🎉 47 People Saved This Deal"
            className="47PeopleSavedThisDeal text-neutral-50 text-sm font-medium font-['Poppins'] whitespace-nowrap"
          >
            🎉 47 People Saved This Deal
          </div>
        </div>
        <div
          data-layer="Unlock Jasper AI with an exclusive discount and cashback only on DealYouNeed. Stop writing, start generating! This deal gives you access to all premium features at a fraction of the regular price."
          className="UnlockJasperAiWithAnExclusiveDiscountAndCashbackOnlyOnDealyouneedStopWritingStartGeneratingThisDealGivesYouAccessToAllPremiumFeaturesAtAFractionOfTheRegularPrice self-stretch justify-start text-zinc-400 text-xs font-normal font-['Poppins']"
        >
          {toolBlogCard.additionalNote || getToolDescription(tool.toolName)}
        </div>
        <div
          data-layer="Frame 2147206151"
          className="Frame2147206151 self-stretch flex justify-start items-center gap-4"
        >
          {(() => {
            if (loading) {
              return (
                <button
                  disabled
                  data-layer="All Assets"
                  className="AllAssets px-6 py-2 bg-gradient-to-b from-[#501bd6] to-[#7f57e2] rounded-xl flex justify-center items-center cursor-not-allowed opacity-50"
                >
                  <div
                    data-layer="Redeem Framer Deal"
                    className="RedeemFramerDeal text-center text-white text-base font-normal font-['Poppins'] leading-normal whitespace-nowrap"
                  >
                    Loading...
                  </div>
                </button>
              );
            }
            const ctaLink = getPrimaryCtaLink(tool.toolName);
            if (ctaLink) {
              return (
                <a
                  href={ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-layer="All Assets"
                  className="AllAssets px-6 py-2 bg-gradient-to-b from-[#501bd6] to-[#7f57e2] rounded-xl flex justify-center items-center cursor-pointer hover:opacity-90 transition-opacity"
                >
                  <div
                    data-layer="Redeem Framer Deal"
                    className="RedeemFramerDeal text-center text-white text-base font-normal font-['Poppins'] leading-normal whitespace-nowrap"
                  >
                    Redeem {tool.toolName} Deal
                  </div>
                </a>
              );
            }
            return (
              <div
                data-layer="All Assets"
                className="AllAssets px-6 py-2 bg-gradient-to-b from-[#501bd6] to-[#7f57e2] rounded-xl flex justify-center items-center cursor-not-allowed opacity-50"
              >
                <div
                  data-layer="Redeem Framer Deal"
                  className="RedeemFramerDeal text-center text-white text-base font-normal font-['Poppins'] leading-normal whitespace-nowrap"
                >
                  Redeem {tool.toolName} Deal
                </div>
              </div>
            );
          })()}
        </div>
      </div>
        </div>
      ))}
    </div>
  );
}
