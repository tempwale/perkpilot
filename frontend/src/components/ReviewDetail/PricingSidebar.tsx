interface PricingSidebarProps {
  title: string;
  pricing?: Array<{
    plan: string;
    amount: string;
    note?: string;
    _id?: string;
  }>;
  lastUpdated?: string;
}

const defaultPricing = [
  { plan: "Free", amount: "Free" },
  { plan: "Professional", amount: "$12/Month" },
  { plan: "Organization", amount: "$45/Month" },
  { plan: "Enterprise", amount: "Custom" },
];

export default function PricingSidebar({
  title,
  pricing,
  lastUpdated = "Oct 2025",
}: PricingSidebarProps) {
  const displayPricing =
    pricing && pricing.length > 0 ? pricing : defaultPricing;
  return (
    <div
      data-layer="Frame 2147206174"
      className="Frame2147206174 w-[370px] p-6 bg-white/10 rounded-3xl outline outline-1 outline-offset-[-1px] outline-white/20 backdrop-blur-md inline-flex flex-col justify-start items-start gap-8"
    >
      <div
        data-layer="Pricing"
        className="Pricing self-stretch justify-start text-neutral-50 text-2xl font-semibold font-['Urbanist']"
      >
        Pricing
      </div>
      <div
        data-layer="Frame 2147205595"
        className="Frame2147205595 self-stretch flex flex-col justify-start items-start gap-5"
      >
        {displayPricing.map((plan, index) => (
          <div
            key={index}
            data-layer={`Frame-${index}`}
            className="self-stretch inline-flex justify-between items-center"
          >
            <div
              data-layer={plan.plan}
              className="justify-start text-neutral-50 text-base font-normal font-['Poppins'] leading-normal"
            >
              {plan.plan}
            </div>
            <div
              data-layer={plan.amount}
              className="justify-start text-neutral-50 text-base font-medium font-['Poppins'] leading-normal"
            >
              {plan.amount}
            </div>
          </div>
        ))}
      </div>
      <div
        data-layer="Frame 2147206205"
        className="Frame2147206205 self-stretch flex flex-col justify-start items-start gap-4"
      >
        <div
          data-layer="Buttons/main"
          className="ButtonsMain self-stretch h-12 px-8 py-3 bg-gradient-to-b from-[#501bd6] to-[#7f57e2] rounded-[100px] outline outline-1 outline-offset-[-1px] outline-neutral-50/10 backdrop-blur-sm inline-flex justify-center items-center gap-3"
        >
          <div
            data-layer="Try Figma For Free"
            className="TryFigmaForFree text-center justify-start text-neutral-50 text-base font-medium font-['Plus_Jakarta_Sans'] leading-normal"
          >
            Try {title} For Free
          </div>
          <div
            data-layer="nav-arrow-right"
            className="NavArrowRight w-6 h-6 relative"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              className="w-full h-full"
            >
              <path
                d="M9.56641 6L15.5664 12L9.56641 18"
                stroke="#FAFAFA"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div
          data-layer="Frame 2147206204"
          className="Frame2147206204 self-stretch inline-flex justify-start items-start gap-4"
        >
          <div
            data-layer="Buttons/main"
            className="ButtonsMain flex-1 h-12 px-8 py-3 bg-white/10 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-zinc-100/10 backdrop-blur-sm flex justify-center items-center gap-3"
          >
            <div
              data-layer="Upvote"
              className="Upvote text-center justify-start text-neutral-50 text-base font-normal font-['Plus_Jakarta_Sans'] leading-normal"
            >
              Upvote
            </div>
            <div
              data-layer="fast-arrow-down"
              className="FastArrowDown w-5 h-5 relative"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                className="w-full h-full"
              >
                <path
                  d="M15.8164 9.16669L10.8164 4.16669L5.81641 9.16669"
                  stroke="#FAFAFA"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.8164 15.8333L10.8164 10.8333L5.81641 15.8333"
                  stroke="#FAFAFA"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div
            data-layer="Buttons/main"
            className="ButtonsMain flex-1 h-12 px-8 py-3 bg-white/10 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-zinc-100/10 backdrop-blur-sm flex justify-center items-center gap-3"
          >
            <div
              data-layer="Share"
              className="Share text-center justify-start text-neutral-50 text-base font-normal font-['Plus_Jakarta_Sans'] leading-normal"
            >
              Share
            </div>
            <div
              data-layer="share-android"
              className="ShareAndroid w-5 h-5 relative"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                className="w-full h-full"
              >
                <path
                  d="M15.3164 18.3333C16.6971 18.3333 17.8164 17.214 17.8164 15.8333C17.8164 14.4526 16.6971 13.3333 15.3164 13.3333C13.9357 13.3333 12.8164 14.4526 12.8164 15.8333C12.8164 17.214 13.9357 18.3333 15.3164 18.3333Z"
                  stroke="#FAFAFA"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.3164 6.66669C16.6971 6.66669 17.8164 5.5474 17.8164 4.16669C17.8164 2.78598 16.6971 1.66669 15.3164 1.66669C13.9357 1.66669 12.8164 2.78598 12.8164 4.16669C12.8164 5.5474 13.9357 6.66669 15.3164 6.66669Z"
                  stroke="#FAFAFA"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.31641 12.5C6.69712 12.5 7.81641 11.3807 7.81641 10C7.81641 8.61929 6.69712 7.5 5.31641 7.5C3.93569 7.5 2.81641 8.61929 2.81641 10C2.81641 11.3807 3.93569 12.5 5.31641 12.5Z"
                  stroke="#FAFAFA"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.2331 5.41669L7.39978 8.75002"
                  stroke="#FAFAFA"
                  strokeWidth="1.5"
                />
                <path
                  d="M7.39978 11.25L13.2331 14.5833"
                  stroke="#FAFAFA"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div
        data-layer="Frame 2147223635"
        className="Frame2147223635 self-stretch inline-flex justify-between items-center"
      >
        <div
          data-layer="Frame 2147223642"
          className="Frame2147223642 flex justify-start items-center gap-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <path
              d="M21.7343 8.31201C20.1911 4.7802 16.667 2.31201 12.5663 2.31201C7.381 2.31201 3.11745 6.25869 2.61572 11.312"
              stroke="#FAFAFA"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17.5664 8.31201H21.9664C22.2978 8.31201 22.5664 8.04338 22.5664 7.71201V3.31201"
              stroke="#FAFAFA"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.44787 16.312C4.99098 19.8438 8.51514 22.312 12.6158 22.312C17.8011 22.312 22.0647 18.3653 22.5664 13.312"
              stroke="#FAFAFA"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.61572 16.312H3.21572C2.88435 16.312 2.61572 16.5806 2.61572 16.912V21.312"
              stroke="#FAFAFA"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div
            data-layer="Last Updated On"
            className="LastUpdatedOn text-center justify-start text-neutral-50 text-base font-normal font-['Plus_Jakarta_Sans'] leading-normal"
          >
            Last Updated On
          </div>
        </div>
        <div
          data-layer="Oct 2025"
          className="Oct2025 text-center justify-start text-neutral-50 text-base font-normal font-['Plus_Jakarta_Sans'] leading-normal"
        >
          {" "}
          {lastUpdated}
        </div>
      </div>
    </div>
  );
}
