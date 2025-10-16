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
    <div className="w-full flex flex-col gap-4">
      <div className="flex justify-start items-center gap-3 sm:gap-4">
        <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-neutral-50 rounded-full flex-shrink-0" />
        <div className="flex-1 min-w-0">
          <div className="text-neutral-50 text-base sm:text-lg lg:text-xl font-medium font-['Plus_Jakarta_Sans'] leading-6 sm:leading-[27px] lg:leading-8 truncate">
            {name}
          </div>
          <div className="text-zinc-400 text-sm sm:text-base font-medium font-['Plus_Jakarta_Sans'] leading-[21px] truncate">
            {category}
          </div>
        </div>
        {logo && <div className="flex-shrink-0">{logo}</div>}
      </div>
      <div className="flex flex-wrap justify-between items-center gap-3">
        <div className="flex items-center gap-1">
          {[...Array(rating)].map((_, index) => (
            <StarIcon key={index} />
          ))}
        </div>
        <div className="text-neutral-50 text-sm sm:text-base font-normal font-['Plus_Jakarta_Sans'] leading-normal whitespace-nowrap">
          Reviews ({reviewCount})
        </div>
      </div>
    </div>
    <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div className="text-neutral-50 text-lg sm:text-xl lg:text-2xl font-medium font-['Plus_Jakarta_Sans'] leading-7 sm:leading-loose flex-1">
        {pricing}
      </div>
      <div className="w-full sm:w-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-3 lg:py-4 bg-white/10 rounded-[100px] flex justify-center items-center hover:bg-white/20 transition-colors duration-200 cursor-pointer">
        <div className="text-neutral-50 text-sm sm:text-base lg:text-lg font-normal font-['Poppins'] leading-normal whitespace-nowrap">
          {buttonText}
        </div>
      </div>
    </div>
  </div>
);

export default function ProductAlternatives() {
  const alternativesData = [
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
