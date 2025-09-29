import React from "react";
import profile1 from "../../assets/images/profiles/profile-1.svg";
import profile2 from "../../assets/images/profiles/profile-2.svg";
import profile3 from "../../assets/images/profiles/profile-3.svg";

// Star icon component
const StarIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 24,
  className = "",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 25 24"
    fill="none"
    className={className}
  >
    <path
      d="M12.5 16.102L8.86999 18.294C8.76333 18.3467 8.66433 18.368 8.57299 18.358C8.48233 18.3473 8.39399 18.316 8.30799 18.264C8.22133 18.2107 8.15599 18.1353 8.11199 18.038C8.06799 17.9407 8.06399 17.8343 8.09999 17.719L9.06599 13.609L5.87099 10.839C5.78099 10.7657 5.72166 10.678 5.69299 10.576C5.66433 10.474 5.67066 10.3763 5.71199 10.283C5.75333 10.1897 5.80833 10.113 5.87699 10.053C5.94633 9.99501 6.03966 9.95568 6.15699 9.93501L10.373 9.56701L12.017 5.67501C12.0623 5.56501 12.1277 5.48568 12.213 5.43701C12.2983 5.38835 12.394 5.36401 12.5 5.36401C12.606 5.36401 12.702 5.38835 12.788 5.43701C12.874 5.48568 12.939 5.56501 12.983 5.67501L14.627 9.56701L18.842 9.93501C18.96 9.95501 19.0537 9.99468 19.123 10.054C19.1923 10.1127 19.2477 10.189 19.289 10.283C19.3297 10.3763 19.3357 10.474 19.307 10.576C19.2783 10.678 19.219 10.7657 19.129 10.839L15.934 13.609L16.9 17.719C16.9373 17.833 16.9337 17.939 16.889 18.037C16.8443 18.135 16.7787 18.2103 16.692 18.263C16.6067 18.3163 16.5183 18.348 16.427 18.358C16.3363 18.368 16.2377 18.3467 16.131 18.294L12.5 16.102Z"
      fill="#FFDD33"
    />
  </svg>
);

export const TrustIndicator: React.FC = () => {
  return (
    <div
      className="content-stretch flex gap-[16px] items-center relative"
      data-node-id="1:179"
    >
      {/* Profile Pictures */}
      <div
        className="box-border content-stretch flex h-[48px] items-center pl-0 pr-[24px] py-0 relative shrink-0"
        data-node-id="1:180"
      >
        <div
          className="aspect-[56/56] h-full mr-[-24px] relative shrink-0"
          data-node-id="1:181"
        >
          <img
            alt=""
            className="block max-w-none size-full rounded-full"
            height="48"
            src={profile1}
            width="48"
          />
        </div>
        <div
          className="aspect-[56/56] h-full mr-[-24px] relative shrink-0"
          data-node-id="1:182"
        >
          <img
            alt=""
            className="block max-w-none size-full rounded-full"
            height="48"
            src={profile2}
            width="48"
          />
        </div>
        <div
          className="aspect-[56/56] h-full mr-[-24px] relative shrink-0"
          data-node-id="1:183"
        >
          <img
            alt=""
            className="block max-w-none size-full rounded-full"
            height="48"
            src={profile3}
            width="48"
          />
        </div>
      </div>

      {/* Rating and Text */}
      <div
        className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0"
        data-node-id="1:184"
      >
        <div
          className="content-stretch flex gap-[8px] items-center relative shrink-0"
          data-node-id="1:185"
        >
          {/* Stars */}
          <div
            className="box-border content-stretch flex items-center pl-0 pr-[2px] py-0 relative shrink-0"
            data-node-id="1:186"
          >
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="mr-[-2px] relative shrink-0 size-[24px]"
                data-name="material-symbols-light:star-rounded"
              >
                <StarIcon size={24} />
              </div>
            ))}
          </div>
          {/* Rating */}
          <div
            className="font-['Plus_Jakarta_Sans'] font-semibold leading-[0] relative shrink-0 text-[16px] text-neutral-50 whitespace-nowrap"
            data-node-id="1:197"
          >
            <p className="leading-[24px]">4.8/5.0</p>
          </div>
        </div>
        {/* Trust Text */}
        <div
          className="font-['Plus_Jakarta_Sans'] font-semibold italic leading-[0] relative shrink-0 text-[14px] text-neutral-50 whitespace-nowrap"
          data-node-id="1:198"
        >
          <p className="leading-[normal]">Trusted by 50+ Founders Globally</p>
        </div>
      </div>
    </div>
  );
};
