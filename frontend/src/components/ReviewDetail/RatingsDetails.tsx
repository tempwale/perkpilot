interface OverallRatingProps {
  rating: number;
  totalReviews: number;
}

const OverallRating = ({ rating, totalReviews }: OverallRatingProps) => (
  <div
    data-layer="Frame 2147206184"
    className="Frame2147206184 w-full md:w-[187px] flex flex-col justify-center items-center gap-4"
  >
    <div
      data-layer="4.9"
      className="text-center text-neutral-50 text-[40px] md:text-[56px] font-bold font-['Plus_Jakarta_Sans'] leading-[52px] md:leading-[72px]"
    >
      {rating.toFixed(1)}
    </div>
    <div
      data-layer="Frame 427320553"
      className="Frame427320553 flex justify-center items-center gap-[6.09px]"
    >
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          data-layer="star_filled"
          className="StarFilled w-5 h-5 md:w-[24.35px] md:h-[24.35px]"
        >
          <path
            d="M5.92672 22.3207L7.57541 15.1933L2.04596 10.3994L9.35092 9.76528L12.1917 3.0437L15.0325 9.76528L22.3375 10.3994L16.8081 15.1933L18.4567 22.3207L12.1917 18.5414L5.92672 22.3207Z"
            fill="#FFDD33"
          />
        </svg>
      ))}
    </div>
    <div
      data-layer="Based on 890 Reviews"
      className="BasedOn890Reviews text-zinc-400 text-sm md:text-base font-normal font-['Plus_Jakarta_Sans'] leading-normal text-center"
    >
      Based on {totalReviews.toLocaleString()} Reviews
    </div>
  </div>
);

const CategoryRatingBar = ({
  category,
  rating,
}: {
  category: string;
  rating: number;
}) => {
  const percentage = (rating / 5) * 100;

  return (
    <div className="self-stretch h-[41px] flex flex-col justify-start items-end gap-3">
      <div className="self-stretch inline-flex justify-between items-start">
        <div className="text-left justify-start text-neutral-50 text-sm font-medium font-['Plus_Jakarta_Sans'] leading-[21px]">
          {category}
        </div>
        <div className="text-right justify-start text-neutral-50 text-sm font-medium font-['Plus_Jakarta_Sans'] leading-[21px]">
          {rating}/5.0
        </div>
      </div>
      <div className="w-full h-2 bg-neutral-50/20 rounded-[100px] relative">
        <div
          className="h-2 bg-gradient-to-b from-[#501bd6] to-[#7f57e2] rounded-[100px] transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

const Tooltip = () => (
  <div
    data-layer="Tooltip"
    className="Tooltip px-4 py-3 relative bg-white/10 rounded-2xl backdrop-blur-md flex-col justify-start items-center gap-2"
  >
    <div
      data-layer="Beak"
      className="Beak w-3 h-1 left-[87.17px] top-[68.05px] absolute origin-top-left rotate-45 bg-[#151515]"
    />
    <div
      data-layer="Beak (Stroke)"
      className="BeakStroke w-3 h-1 left-[87.17px] top-[68.05px] absolute origin-top-left rotate-45"
    />
    <img
      data-layer="image 11"
      className="Image11 w-6 h-6 object-contain mx-auto"
      src="https://www.g2.com/assets/favicon-32x32.png"
      alt="G2 Verification badge"
      onError={(e) => {
        const target = e.currentTarget as HTMLImageElement;
        if (target.src !== "https://logo.clearbit.com/g2.com") {
          target.src = "https://logo.clearbit.com/g2.com";
        }
      }}
    />
    <div
      data-layer="Officially Verified Reviews"
      className="OfficiallyVerifiedReviews text-center justify-start text-neutral-50 text-xs font-medium font-['Plus_Jakarta_Sans'] leading-[18px]"
    >
      Officially Verified Reviews
    </div>
  </div>
);

interface RatingsDetailsProps {
  ratingCategories?: Array<{
    category: string;
    value: number;
    outOf?: number;
  }>;
  aggregateRating?: number;
  ratingCount?: number;
}

export default function RatingsDetails({
  ratingCategories,
  aggregateRating,
  ratingCount,
}: RatingsDetailsProps = {}) {
  const defaultCategoryRatings = [
    { category: "Ease of Use", rating: 4.8 },
    { category: "Features", rating: 4.5 },
    { category: "Value", rating: 4.2 },
    { category: "Customer Support", rating: 4.8 },
    { category: "Reliability", rating: 2.8 },
  ];

  const categoryRatings =
    ratingCategories && ratingCategories.length > 0
      ? ratingCategories.map((rc) => ({
          category: rc.category,
          rating: rc.value,
        }))
      : defaultCategoryRatings;

  const totalReviews = ratingCount || 890;
  const averageRating = aggregateRating || 4.9;

  return (
    <div className="w-full px-[20px] md:px-[100px] py-16 pb-24">
      <div className="w-full max-w-[1240px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[235px] items-start">
          {/* Rating Breakdown Section */}
          <div
            data-layer="Frame 2147206212"
            className="Frame2147206212 w-full lg:flex-none max-w-full lg:max-w-[608px] flex flex-col justify-start items-start gap-6 lg:gap-10"
          >
            <div
              data-layer="Rating Breakdown"
              className="RatingBreakdown self-stretch text-neutral-50 text-2xl lg:text-[32px] font-medium font-['Plus_Jakarta_Sans'] leading-8 lg:leading-[42px]"
            >
              Rating Breakdown
            </div>
            <div
              data-layer="Frame 2147206211"
              className="Frame2147206211 self-stretch flex flex-col justify-start items-start gap-4 lg:gap-6"
            >
              {categoryRatings.map((item, index) => (
                <CategoryRatingBar
                  key={index}
                  category={item.category}
                  rating={item.rating}
                />
              ))}
          </div>
        </div>

          {/* Overall Rating Section */}
          <div className="w-full lg:w-[187px] flex flex-col items-center gap-4 flex-none lg:pt-[82px]">
            <div className="hidden md:block">
              <Tooltip />
            </div>
            <OverallRating rating={averageRating} totalReviews={totalReviews} />
          </div>
        </div>
      </div>
    </div>
  );
}
