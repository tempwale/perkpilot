interface AlternativeCardProps {
  name: string;
  category: string;
  rating: number;
  reviewCount: number;
  pricing: string;
  buttonText: string;
  logo?: React.ReactNode;
}

const StarIcon = () => (
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
      d="M12.393 3.08026C12.6263 3.17944 12.8122 3.36304 12.9126 3.59335L14.9554 8.27719L20.098 8.74815C20.6445 8.79819 21.0464 9.27618 20.9957 9.81576C20.9722 10.0654 20.8529 10.2968 20.6621 10.4623L16.782 13.828L17.9175 18.8029C18.0382 19.3316 17.702 19.8567 17.1666 19.9758C16.9189 20.031 16.6591 19.9904 16.4408 19.8623L12 17.2586L7.55917 19.8623C7.08728 20.139 6.4776 19.9856 6.19741 19.5196C6.06775 19.304 6.02662 19.0476 6.08245 18.8029L7.21798 13.828L3.33788 10.4623C2.92558 10.1046 2.88497 9.48469 3.24717 9.07757C3.41477 8.88918 3.64907 8.77131 3.90194 8.74815L9.04454 8.27719L11.0873 3.59335C11.3044 3.09565 11.889 2.86593 12.393 3.08026Z"
      fill="#FFBA1F"
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
}: AlternativeCardProps) => (
  <div className="w-full h-full min-h-[200px] p-4 sm:p-6 lg:p-8 bg-white/5 rounded-2xl sm:rounded-3xl outline outline-1 outline-offset-[-1px] outline-white/10 flex flex-col justify-between items-start gap-4 sm:gap-6 lg:gap-8 transition-all duration-300 hover:bg-white/10 hover:scale-[1.02]">
    <div className="w-full flex flex-row gap-4 justify-between">
      <div className="flex justify-start items-center gap-3 sm:gap-4">
        <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-neutral-50 rounded-full flex-shrink-0" />
        <div className="flex-1 min-w-0">
          <div className="flex flex-row gap-1 items-center">
            <div className="text-neutral-50 text-base text-lg font-medium font-['Plus_Jakarta_Sans'] leading-6 sm:leading-[27px] lg:leading-8 truncate">
              {name}
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.4183 5.64301C15.2804 5.42265 15.0772 5.25077 14.837 5.15129C14.5968 5.05181 14.3316 5.02969 14.0783 5.08801L12.2803 5.50101C12.096 5.54336 11.9046 5.54336 11.7203 5.50101L9.9223 5.08801C9.66896 5.02969 9.40375 5.05181 9.16357 5.15129C8.9234 5.25077 8.72021 5.42265 8.5823 5.64301L7.6023 7.20701C7.5023 7.36701 7.3673 7.50201 7.2073 7.60301L5.6433 8.58301C5.42331 8.7208 5.25169 8.92366 5.15223 9.16342C5.05278 9.40319 5.03043 9.66797 5.0883 9.92101L5.5013 11.721C5.5435 11.905 5.5435 12.0961 5.5013 12.28L5.0883 14.079C5.03021 14.3322 5.05244 14.5972 5.1519 14.8372C5.25137 15.0771 5.42312 15.2802 5.6433 15.418L7.2073 16.398C7.3673 16.498 7.5023 16.633 7.6033 16.793L8.5833 18.357C8.8653 18.808 9.4033 19.031 9.9223 18.912L11.7203 18.499C11.9046 18.4567 12.096 18.4567 12.2803 18.499L14.0793 18.912C14.3325 18.9701 14.5975 18.9479 14.8375 18.8484C15.0774 18.7489 15.2804 18.5772 15.4183 18.357L16.3983 16.793C16.4983 16.633 16.6333 16.498 16.7933 16.398L18.3583 15.418C18.5785 15.28 18.7502 15.0767 18.8494 14.8365C18.9487 14.5964 18.9707 14.3312 18.9123 14.078L18.5003 12.28C18.4579 12.0957 18.4579 11.9043 18.5003 11.72L18.9133 9.92101C18.9715 9.66792 18.9494 9.403 18.8501 9.16304C18.7508 8.92308 18.5793 8.72 18.3593 8.58201L16.7943 7.60201C16.6345 7.50183 16.4995 7.36679 16.3993 7.20701L15.4183 5.64301ZM14.9153 9.77001C14.9771 9.65628 14.9925 9.52298 14.958 9.39818C14.9236 9.27338 14.8421 9.16679 14.7307 9.10085C14.6193 9.03491 14.4867 9.01476 14.3607 9.04463C14.2347 9.0745 14.1252 9.15206 14.0553 9.26101L11.4403 13.687L9.8613 12.175C9.81445 12.1269 9.7584 12.0887 9.69649 12.0628C9.63457 12.0368 9.56806 12.0236 9.50092 12.0239C9.43378 12.0242 9.36739 12.038 9.3057 12.0645C9.24402 12.091 9.1883 12.1296 9.14188 12.1781C9.09546 12.2267 9.05928 12.284 9.0355 12.3468C9.01173 12.4096 9.00084 12.4765 9.00349 12.5436C9.00614 12.6107 9.02228 12.6766 9.05094 12.7373C9.0796 12.798 9.12019 12.8523 9.1703 12.897L11.2043 14.846C11.2587 14.8981 11.3242 14.9371 11.3959 14.9603C11.4676 14.9835 11.5435 14.9902 11.6181 14.9799C11.6928 14.9697 11.7641 14.9426 11.8268 14.9009C11.8895 14.8592 11.942 14.8039 11.9803 14.739L14.9153 9.77001Z"
                fill="#FAFAFA"
              />
            </svg>
          </div>

          <div className="text-zinc-400 text-sm  font-medium font-['Plus_Jakarta_Sans'] leading-[21px] truncate">
            {category}
          </div>
        </div>
        {logo && <div className="flex-shrink-0">{logo}</div>}
      </div>
      <div className="flex flex-wrap justify-between items-center gap-3">
        <div className="flex items-center gap-1">
          {[...Array(rating)].map((_, index) => (
            <span
              key={index}
              className={
                index === 0 ? "inline-block" : "hidden sm:inline-block"
              }
            >
              <StarIcon />
            </span>
          ))}
        </div>
        <div
          className="text-zinc-400
text-sm
font-medium
font-['Plus_Jakarta_Sans']
leading-[21px]"
        >
          Reviews ({reviewCount})
        </div>
      </div>
    </div>
    <div className="w-full flex flex-col  sm:flex-row justify-between items-start sm:items-center gap-4">
      <div className="w-full sm:w-auto text-center sm:text-left">
        <div className="text-neutral-50 text-xl font-medium font-['Plus_Jakarta_Sans'] leading-loose">
          {pricing}
        </div>
      </div>
      <div className="w-full sm:w-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-3 lg:py-4 bg-white/10 rounded-[100px] flex justify-center items-center hover:bg-white/20 transition-colors duration-200 cursor-pointer">
        <div className="text-neutral-50 text-sm sm:text-base lg:text-lg font-normal font-['Poppins'] leading-normal whitespace-nowrap">
          {buttonText}
        </div>
      </div>
    </div>
  </div>
);

interface ProductAlternativesProps {
  alternatives?: Array<{
    name: string;
    type?: string;
    avatarUrl?: string;
    price?: string;
    rating?: number;
    reviewCount?: number;
    compareNote?: string;
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

  // Transform API alternatives to component format
  const alternativesData =
    alternatives && alternatives.length > 0
      ? alternatives.map((alt) => ({
          name: alt.name,
          category: alt.type || "Tool",
          rating: alt.rating || 5,
          reviewCount: alt.reviewCount || 0,
          pricing: alt.price || "N/A",
          buttonText: alt.compareNote || "Compare",
        }))
      : defaultAlternativesData;

  return (
    <div className="w-full h-full">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 auto-rows-fr">
        {alternativesData.map((alternative, index) => (
          <AlternativeCard
            key={index}
            name={alternative.name}
            category={alternative.category}
            rating={alternative.rating}
            reviewCount={alternative.reviewCount}
            pricing={alternative.pricing}
            buttonText={alternative.buttonText}
          />
        ))}
      </div>
    </div>
  );
}
