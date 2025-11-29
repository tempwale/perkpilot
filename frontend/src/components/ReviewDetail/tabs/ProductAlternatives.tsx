import { Link } from "react-router-dom";

interface AlternativeCardProps {
  name: string;
  category: string;
  rating: number;
  reviewCount: number;
  pricing: string;
  buttonText: string;
  logo?: React.ReactNode;
  reviewId?: string;
}

const StarIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.393 3.08026C12.6263 3.17944 12.8122 3.36304 12.9126 3.59335L14.9554 8.27719L20.098 8.74815C20.6445 8.79819 21.0464 9.27618 20.9957 9.81576C20.9722 10.0654 20.8529 10.2968 20.6621 10.4623L16.782 13.828L17.9175 18.8029C18.0382 19.3316 17.702 19.8567 17.1666 19.9758C16.9189 20.031 16.6591 19.9904 16.4408 19.8623L12 17.2586L7.55917 19.8623C7.08728 20.139 6.4776 19.9856 6.19741 19.5196C6.06775 19.304 6.02662 19.0476 6.08245 18.8029L7.21798 13.828L3.33788 10.4623C2.92558 10.1046 2.88497 9.48469 3.24717 9.07757C3.41477 8.88918 3.64907 8.77131 3.90194 8.74815L9.04454 8.27719L11.0873 3.59335C11.3044 3.09565 11.889 2.86593 12.393 3.08026Z"
      fill="#FFBA1F"
    />
  </svg>
);

const VerifyIcon = () => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.4183 5.64301C15.2804 5.42265 15.0772 5.25077 14.837 5.15129C14.5968 5.05181 14.3316 5.02969 14.0783 5.08801L12.2803 5.50101C12.096 5.54336 11.9046 5.54336 11.7203 5.50101L9.9223 5.08801C9.66896 5.02969 9.40375 5.05181 9.16357 5.15129C8.9234 5.25077 8.72021 5.42265 8.5823 5.64301L7.6023 7.20701C7.5023 7.36701 7.3673 7.50201 7.2073 7.60301L5.6433 8.58301C5.42331 8.7208 5.25169 8.92366 5.15223 9.16342C5.05278 9.40319 5.03043 9.66797 5.0883 9.92101L5.5013 11.721C5.5435 11.905 5.5435 12.0961 5.5013 12.28L5.0883 14.079C5.03021 14.3322 5.05244 14.5972 5.1519 14.8372C5.25137 15.0771 5.42312 15.2802 5.6433 15.418L7.2073 16.398C7.3673 16.498 7.5023 16.633 7.6033 16.793L8.5833 18.357C8.8653 18.808 9.4033 19.031 9.9223 18.912L11.7203 18.499C11.9046 18.4567 12.096 18.4567 12.2803 18.499L14.0793 18.912C14.3325 18.9701 14.5975 18.9479 14.8375 18.8484C15.0774 18.7489 15.2804 18.5772 15.4183 18.357L16.3983 16.793C16.4983 16.633 16.6333 16.498 16.7933 16.398L18.3583 15.418C18.5785 15.28 18.7502 15.0767 18.8494 14.8365C18.9487 14.5964 18.9707 14.3312 18.9123 14.078L18.5003 12.28C18.4579 12.0957 18.4579 11.9043 18.5003 11.72L18.9133 9.92101C18.9715 9.66792 18.9494 9.403 18.8501 9.16304C18.7508 8.92308 18.5793 8.72 18.3593 8.58201L16.7943 7.60201C16.6345 7.50183 16.4995 7.36679 16.3993 7.20701L15.4183 5.64301ZM14.9153 9.77001C14.9771 9.65628 14.9925 9.52298 14.958 9.39818C14.9236 9.27338 14.8421 9.16679 14.7307 9.10085C14.6193 9.03491 14.4867 9.01476 14.3607 9.04463C14.2347 9.0745 14.1252 9.15206 14.0553 9.26101L11.4403 13.687L9.8613 12.175C9.81445 12.1269 9.7584 12.0887 9.69649 12.0628C9.63457 12.0368 9.56806 12.0236 9.50092 12.0239C9.43378 12.0242 9.36739 12.038 9.3057 12.0645C9.24402 12.091 9.1883 12.1296 9.14188 12.1781C9.09546 12.2267 9.05928 12.284 9.0355 12.3468C9.01173 12.4096 9.00084 12.4765 9.00349 12.5436C9.00614 12.6107 9.02228 12.6766 9.05094 12.7373C9.0796 12.798 9.12019 12.8523 9.1703 12.897L11.2043 14.846C11.2587 14.8981 11.3242 14.9371 11.3959 14.9603C11.4676 14.9835 11.5435 14.9902 11.6181 14.9799C11.6928 14.9697 11.7641 14.9426 11.8268 14.9009C11.8895 14.8592 11.942 14.8039 11.9803 14.739L14.9153 9.77001Z"
                fill="#FAFAFA"
              />
            </svg>
);

const AlternativeCard = ({
  name,
  category,
  rating,
  reviewCount,
  pricing,
  buttonText,
  logo,
  reviewId,
}: AlternativeCardProps) => {
  const displayRating = rating || 5;
  const displayReviewCount = reviewCount || 0;

  return (
    <div className="box-border w-full max-w-[350px] md:max-w-[608px] flex flex-col items-start bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-2xl md:rounded-[24px] p-4 md:p-6 gap-6 md:gap-[35px] h-[203px] md:h-[187px] overflow-hidden">
      {/* Top Section */}
      <div className="w-full flex flex-row justify-between items-center h-14 md:h-14 gap-3 md:gap-4">
        {/* Name Section */}
        <div className="flex flex-row items-center gap-2 md:gap-4 h-14 flex-1 min-w-0">
          {/* Logo Circle */}
          <div className="relative bg-[#FAFAFA] rounded-full flex-none shrink-0 flex items-center justify-center w-10 h-10 md:w-14 md:h-14">
            {logo && (
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[18px] md:w-[26.48px] h-4 md:h-6">
                {logo}
              </div>
            )}
          </div>
          {/* Name and Category */}
          <div className="flex flex-col items-start gap-1 flex-1 min-w-0">
            <div className="flex flex-row items-center gap-0.5 md:gap-1 w-full">
              <div className="text-[#FAFAFA] font-['Plus_Jakarta_Sans'] font-medium text-sm md:text-lg leading-5 md:leading-[27px] flex items-center gap-0.5 md:gap-1 min-w-0">
                {name}
              <VerifyIcon />

              </div>
            </div>
            <div className="text-[#A1A1AA] font-['Plus_Jakarta_Sans'] font-medium text-xs md:text-sm leading-4 md:leading-[21px] truncate w-full">
              {category}
            </div>
          </div>
        </div>

        {/* Rating Section */}
        <div className="flex flex-row items-center gap-1 md:gap-4">
          {/* Mobile: Single star + rating number + reviews */}
          <div className="md:hidden flex flex-row items-center gap-1">
            <StarIcon className="w-6 h-6" />
            <span className="text-[#FAFAFA] font-['Plus_Jakarta_Sans'] font-bold text-xs leading-6">
              {displayRating.toFixed(1)}
            </span>
            <span className="text-[#FAFAFA] font-['Plus_Jakarta_Sans'] font-medium text-xs leading-[18px]">
              Reviews ({displayReviewCount})
            </span>
          </div>

          {/* Desktop: All stars + reviews */}
          <div className="hidden md:flex flex-row items-center gap-4">
            <div className="flex flex-row items-center gap-0">
              {[...Array(5)].map((_, index) => (
                <div key={index} className="relative w-6 h-6 flex-none">
                  <StarIcon className="w-6 h-6" />
                </div>
          ))}
        </div>
            <div className="text-[#FAFAFA] font-['Plus_Jakarta_Sans'] font-normal text-base leading-6">
              Reviews ({displayReviewCount})
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 md:gap-6 md:h-12">
        <div className="text-[#FAFAFA] font-['Plus_Jakarta_Sans'] font-medium text-lg md:text-xl leading-[27px] md:leading-8 text-center md:text-left">
          {pricing}
        </div>
        {reviewId ? (
          <Link
            to={`/review/${reviewId}`}
            className="box-border bg-[rgba(255,255,255,0.08)] rounded-[100px] flex flex-row justify-center items-center cursor-pointer hover:bg-[rgba(255,255,255,0.12)] transition-colors px-4 py-2 md:px-6 md:py-3 h-auto md:h-12 w-full md:w-auto min-h-[40px] md:min-h-[48px]"
          >
            <div className="text-[#FAFAFA] font-['Poppins'] font-normal text-sm md:text-base leading-5 md:leading-6 text-center break-words md:whitespace-nowrap px-2">
              {buttonText}
            </div>
          </Link>
        ) : (
          <div className="box-border bg-[rgba(255,255,255,0.08)] rounded-[100px] flex flex-row justify-center items-center cursor-pointer hover:bg-[rgba(255,255,255,0.12)] transition-colors px-4 py-2 md:px-6 md:py-3 h-auto md:h-12 w-full md:w-auto min-h-[40px] md:min-h-[48px]">
            <div className="text-[#FAFAFA] font-['Poppins'] font-normal text-sm md:text-base leading-5 md:leading-6 text-center break-words md:whitespace-nowrap px-2">
              {buttonText}
            </div>
          </div>
        )}
    </div>
  </div>
);
};

interface ProductAlternativesProps {
  alternatives?: Array<{
    name: string;
    type?: string;
    avatarUrl?: string;
    price?: string;
    rating?: number;
    reviewCount?: number;
    compareNote?: string;
    reviewId?: string;
    _id?: string;
  }>;
}

export default function ProductAlternatives({
  alternatives,
}: ProductAlternativesProps) {
  const defaultAlternativesData = [
    {
      name: "Sketch",
      category: "Design Tool",
      rating: 5,
      reviewCount: 200,
      pricing: "Free - $20/Month",
      buttonText: "Compare With Figma",
    },
    {
      name: "Adobe XD",
      category: "Design Tool",
      rating: 4,
      reviewCount: 150,
      pricing: "Free - $22.99/Month",
      buttonText: "Compare With Figma",
    },
    {
      name: "Figma",
      category: "Design Tool",
      rating: 5,
      reviewCount: 500,
      pricing: "Free - $15/Month",
      buttonText: "View Details",
    },
    {
      name: "InVision",
      category: "Design Tool",
      rating: 4,
      reviewCount: 120,
      pricing: "Free - $25/Month",
      buttonText: "Compare With Figma",
    },
    {
      name: "Framer",
      category: "Design Tool",
      rating: 5,
      reviewCount: 180,
      pricing: "Free - $20/Month",
      buttonText: "Compare With Figma",
    },
    {
      name: "Canva",
      category: "Design Tool",
      rating: 4,
      reviewCount: 300,
      pricing: "Free - $14.99/Month",
      buttonText: "Compare With Figma",
    },
  ];

  const alternativesData =
    alternatives && alternatives.length > 0
      ? alternatives.map((alt) => ({
          name: alt.name,
          category: alt.type || "Tool",
          rating: alt.rating || 5,
          reviewCount: alt.reviewCount || 0,
          pricing: alt.price || "N/A",
          buttonText: `Compare with ${alt.name}`,
          reviewId: alt.reviewId,
          _id: alt._id,
          avatarUrl: alt.avatarUrl,
        }))
      : defaultAlternativesData.map((alt, idx) => ({
          ...alt,
          reviewId: undefined,
          _id: `${idx}`,
          avatarUrl: undefined,
        }));

  return (
    <div className="w-full flex flex-col items-end gap-8 md:gap-6">
      <div className="w-full max-w-[350px] md:max-w-[1240px] flex flex-col md:grid md:grid-cols-2 items-end gap-8 md:gap-6">
        {alternativesData.map((alternative, index) => (
          <AlternativeCard
            key={alternative._id || index}
            name={alternative.name}
            category={alternative.category}
            rating={alternative.rating}
            reviewCount={alternative.reviewCount}
            pricing={alternative.pricing}
            buttonText={alternative.buttonText}
            reviewId={alternative.reviewId}
            logo={
              alternative.avatarUrl ? (
                <img
                  src={alternative.avatarUrl}
                  alt={alternative.name}
                  className="w-full h-full object-contain"
                />
              ) : undefined
            }
          />
        ))}
      </div>
    </div>
  );
}
