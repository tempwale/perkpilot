import { Link } from "react-router-dom";

// SVG Components
function DefaultLogo() {
  return (
    <svg
      width="61"
      height="60"
      viewBox="0 0 61 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2.5" y="2" width="56" height="56" rx="28" fill="#F9FAFB" />
      <rect
        x="1.5"
        y="1"
        width="58"
        height="58"
        rx="29"
        stroke="white"
        strokeOpacity="0.08"
        strokeWidth="2"
      />
      <g clipPath="url(#clip0_1_1899)">
        <path
          d="M20 14H41V24.6667H30.5L20 14ZM20 24.6667H30.5L41 35.3333H30.5V46L20 35.3333V24.6667Z"
          fill="#0D0D11"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_1899">
          <rect
            width="21"
            height="32"
            fill="white"
            transform="translate(20 14)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

function VerificationIcon() {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.9178 5.64301C15.7799 5.42265 15.5767 5.25077 15.3365 5.15129C15.0964 5.05181 14.8311 5.02969 14.5778 5.08801L12.7798 5.50101C12.5955 5.54336 12.4041 5.54336 12.2198 5.50101L10.4218 5.08801C10.1685 5.02969 9.90326 5.05181 9.66308 5.15129C9.42291 5.25077 9.21972 5.42265 9.08181 5.64301L8.10181 7.20701C8.00181 7.36701 7.86681 7.50201 7.70681 7.60301L6.14281 8.58301C5.92283 8.7208 5.7512 8.92366 5.65174 9.16342C5.55229 9.40319 5.52994 9.66797 5.58781 9.92101L6.00081 11.721C6.04301 11.905 6.04301 12.0961 6.00081 12.28L5.58781 14.079C5.52972 14.3322 5.55195 14.5972 5.65142 14.8372C5.75088 15.0771 5.92264 15.2802 6.14281 15.418L7.70681 16.398C7.86681 16.498 8.00181 16.633 8.10281 16.793L9.08281 18.357C9.36481 18.808 9.90281 19.031 10.4218 18.912L12.2198 18.499C12.4041 18.4567 12.5955 18.4567 12.7798 18.499L14.5788 18.912C14.832 18.9701 15.097 18.9479 15.337 18.8484C15.5769 18.7489 15.78 18.5772 15.9178 18.357L16.8978 16.793C16.9978 16.633 17.1328 16.498 17.2928 16.398L18.8578 15.418C19.078 15.28 19.2497 15.0767 19.349 14.8365C19.4483 14.5964 19.4702 14.3312 19.4118 14.078L18.9998 12.28C18.9575 12.0957 18.9575 11.9043 18.9998 11.72L19.4128 9.92101C19.471 9.66792 19.4489 9.403 19.3496 9.16304C19.2504 8.92308 19.0788 8.72 18.8588 8.58201L17.2938 7.60201C17.134 7.50183 16.999 7.36679 16.8988 7.20701L15.9178 5.64301ZM15.4148 9.77001C15.4767 9.65628 15.492 9.52298 15.4576 9.39818C15.4231 9.27338 15.3416 9.16679 15.2302 9.10085C15.1188 9.03491 14.9862 9.01476 14.8602 9.04463C14.7342 9.0745 14.6248 9.15206 14.5548 9.26101L11.9398 13.687L10.3608 12.175C10.314 12.1269 10.2579 12.0887 10.196 12.0628C10.1341 12.0368 10.0676 12.0236 10.0004 12.0239C9.93329 12.0242 9.8669 12.038 9.80522 12.0645C9.74353 12.091 9.68781 12.1296 9.64139 12.1781C9.59497 12.2267 9.55879 12.284 9.53501 12.3468C9.51124 12.4096 9.50035 12.4765 9.503 12.5436C9.50566 12.6107 9.52179 12.6766 9.55045 12.7373C9.57911 12.798 9.6197 12.8523 9.66981 12.897L11.7038 14.846C11.7582 14.8981 11.8237 14.9371 11.8954 14.9603C11.9671 14.9835 12.043 14.9902 12.1177 14.9799C12.1923 14.9697 12.2636 14.9426 12.3263 14.9009C12.389 14.8592 12.4415 14.8039 12.4798 14.739L15.4148 9.77001Z"
        fill="white"
      />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
        fill="#FFBA1F"
      />
    </svg>
  );
}

interface ReviewCardProps {
  id?: string | number;
  title?: string;
  category?: string;
  description?: string;
  logoComponent?: React.ReactNode;
  verified?: boolean;
  rating?: string;
  pros?: string[];
  cons?: string[];
  planPrice?: string;
}

export default function ReviewCard({
  id = "1",
  title = "Framer",
  category = "No-Code Tool",
  description = "Every communications experience, Integrated contact center, voice, video, chat, and APIs.",
  logoComponent = <DefaultLogo />,
  verified = true,
  rating = "4.8/5.0 Ratings",
  pros = [
    "Real-time collaboration",
    "Browser-based",
    "Excellent prototyping",
    "Power design tool",
  ],
  cons = [
    "Limited offline access",
    "Pages limitations",
    "Not ideal for e-com",
    "Heavy websites lag",
  ],
  planPrice = "$14/Monthly",
}: ReviewCardProps) {
  return (
    <div
      className="backdrop-blur-md backdrop-filter bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] border-solid box-border content-stretch flex flex-col gap-[16px] items-center pb-[16px] pt-0 px-[16px] relative rounded-[24px] size-full"
      data-name="Card"
      data-node-id="1:1652"
    >
      <div
        className="border-[rgba(235,239,245,0.12)] border-b border-l-0 border-r-0 border-solid border-t-0 box-border content-stretch flex flex-col gap-[16px] items-start px-0 py-[16px] relative shrink-0 w-full"
        data-node-id="250:1131"
      >
        {/* Header Section */}
        <div
          className="content-stretch flex items-center justify-between relative shrink-0 w-full"
          data-node-id="250:1132"
        >
          <div
            className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative shrink-0"
            data-node-id="250:1133"
          >
            <div
              className="bg-gray-50 border-2 border-[rgba(255,255,255,0.08)] border-solid box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[100px] shrink-0 size-[56px]"
              data-node-id="250:1134"
            >
              <div
                className="h-[32px] relative shrink-0 w-[21px]"
                data-name="logo"
                data-node-id="250:1135"
              >
                {logoComponent}
              </div>
            </div>
            <div
              className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0"
              data-node-id="250:1137"
            >
              <div
                className="content-stretch flex gap-[8px] items-center relative shrink-0"
                data-node-id="250:1138"
              >
                <p
                  className="font-['Urbanist:Medium',_sans-serif] font-medium leading-[normal] relative shrink-0 text-[20px] text-white"
                  data-node-id="250:1139"
                >
                  {title}
                </p>
                {verified && (
                  <div
                    className="relative shrink-0 size-[24px]"
                    data-name="verification-icon"
                    data-node-id="250:1140"
                  >
                    <VerificationIcon />
                  </div>
                )}
              </div>
              <p
                className="font-['Poppins:Medium',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cbd2da] text-[12px]"
                data-node-id="250:1142"
              >
                {category}
              </p>
            </div>
          </div>
          <div
            className="bg-[rgba(255,255,255,0.08)] box-border content-stretch flex gap-[16px] items-start px-[12px] py-[4px] relative rounded-[100px] shrink-0"
            data-name="Container"
            data-node-id="250:1143"
          >
            <div
              className="content-stretch flex gap-[8px] items-center relative rounded-[8px] shrink-0"
              data-name="Container"
              data-node-id="250:1144"
            >
              <div
                className="relative shrink-0 size-[24px]"
                data-name="Star"
                data-node-id="250:1145"
              >
                <StarIcon />
              </div>
              <p
                className="font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium leading-[21px] relative shrink-0 text-[14px] text-center text-zinc-100"
                data-node-id="250:1146"
              >
                {rating}
              </p>
            </div>
          </div>
        </div>

        {/* Description and Pros/Cons Section */}
        <div
          className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full"
          data-node-id="250:1147"
        >
          <p
            className="font-['Poppins:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cbd2da] text-[12px] w-full whitespace-pre-wrap"
            data-node-id="250:1148"
          >
            {description}
          </p>
          <div
            className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full"
            data-node-id="250:1149"
          >
            {/* Pros Column */}
            <div
              className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative shrink-0"
              data-node-id="250:1150"
            >
              <p
                className="font-['Poppins:Medium',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#ebeff5] text-[14px]"
                data-node-id="250:1151"
              >
                Pros
              </p>
              <div
                className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0"
                data-node-id="250:1152"
              >
                {pros.map((pro, index) => (
                  <div
                    key={index}
                    className="content-stretch flex gap-[8px] items-center relative shrink-0"
                    data-node-id="250:1153"
                  >
                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                      <span className="text-white text-[14px] leading-[21px]">
                        •
                      </span>
                      <span className="font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal text-[14px] text-white leading-[21px]">
                        {pro}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cons Column */}
            <div
              className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative shrink-0"
              data-node-id="250:1161"
            >
              <p
                className="font-['Poppins:Medium',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#ebeff5] text-[14px]"
                data-node-id="250:1162"
              >
                Cons
              </p>
              <div
                className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0"
                data-node-id="250:1163"
              >
                {cons.map((con, index) => (
                  <div
                    key={index}
                    className="content-stretch flex gap-[8px] items-center relative shrink-0"
                    data-node-id="250:1164"
                  >
                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                      <span className="text-white text-[14px] leading-[21px]">
                        •
                      </span>
                      <span className="font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal text-[14px] text-white leading-[21px]">
                        {con}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div
          className="bg-[rgba(255,255,255,0.08)] box-border content-stretch flex font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium items-center justify-between leading-[21px] px-[16px] py-[8px] relative rounded-[100px] shrink-0 text-[14px] w-full"
          data-node-id="250:1172"
        >
          <p
            className="relative shrink-0 text-neutral-50"
            data-node-id="250:1173"
          >
            Plan Starting:
          </p>
          <p
            className="relative shrink-0 text-zinc-200"
            data-node-id="250:1174"
          >
            {planPrice}
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div
        className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full"
        data-name="Filter"
        data-node-id="250:1175"
      >
        <div
          className="box-border content-stretch flex h-[48px] items-center pl-0 pr-[24px] py-0 relative shrink-0"
          data-node-id="250:1176"
        >
          <div
            className="aspect-[56/56] h-full mr-[-24px] relative shrink-0"
            data-node-id="250:1177"
          >
            <img
              src="/src/assets/images/profiles/profile-1.svg"
              alt="Profile 1"
              className="w-[48px] h-[48px] rounded-full object-cover"
            />
          </div>
          <div
            className="aspect-[56/56] h-full mr-[-24px] relative shrink-0"
            data-node-id="250:1178"
          >
            <img
              src="/src/assets/images/profiles/profile-2.svg"
              alt="Profile 2"
              className="w-[48px] h-[48px] rounded-full object-cover"
            />
          </div>
          <div
            className="aspect-[56/56] h-full mr-[-24px] relative shrink-0"
            data-node-id="250:1179"
          >
            <img
              src="/src/assets/images/profiles/profile-3.svg"
              alt="Profile 3"
              className="w-[48px] h-[48px] rounded-full object-cover"
            />
          </div>
          <div
            className="aspect-[56/56] h-full mr-[-24px] relative shrink-0"
            data-node-id="250:1180"
          >
            <div className="w-[48px] h-[48px] rounded-full bg-white border-2 border-gray-200 flex items-center justify-center">
              <span className="font-['Poppins:Medium',_sans-serif] text-[12px] text-zinc-950 font-medium">
                887+
              </span>
            </div>
          </div>
          <p
            className="absolute font-['Poppins:Medium',_sans-serif] leading-[normal] left-[96px] not-italic text-[12px] text-center text-zinc-950 top-[15px] translate-x-[-50%] opacity-0 pointer-events-none"
            data-node-id="250:1181"
          >
            887+
          </p>
        </div>
        <Link
          to={`/review/${id}`}
          className="bg-white box-border content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px px-[12px] py-[8px] relative rounded-[100px] shrink-0 hover:bg-gray-100 transition-colors"
          data-name="All Assets"
          data-node-id="250:1182"
        >
          <p
            className="font-['Poppins:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-zinc-950"
            data-node-id="250:1183"
          >
            Read Full Review
          </p>
        </Link>
      </div>
    </div>
  );
}
