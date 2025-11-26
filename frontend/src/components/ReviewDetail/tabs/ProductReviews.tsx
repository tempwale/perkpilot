interface ReviewCardProps {
  name: string;
  position: string;
  profileImage: string;
  rating: number;
  reviewText: string;
  helpfulCount: number;
  notHelpfulCount?: number;
  date?: string;
  isVerified?: boolean;
}

const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
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

const ThumbsUpIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M16.4724 20H4.1C3.76863 20 3.5 19.7314 3.5 19.4V9.6C3.5 9.26863 3.76863 9 4.1 9H6.86762C7.57015 9 8.22116 8.6314 8.5826 8.02899L11.293 3.51161C11.8779 2.53688 13.2554 2.44422 13.9655 3.33186C14.3002 3.75025 14.4081 4.30635 14.2541 4.81956L13.2317 8.22759C13.1162 8.61256 13.4045 9 13.8064 9H18.3815C19.7002 9 20.658 10.254 20.311 11.5262L18.4019 18.5262C18.1646 19.3964 17.3743 20 16.4724 20Z"
      stroke="#FAFAFA"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M7 20L7 9"
      stroke="#FAFAFA"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ThumbsDownIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className="transform rotate-180"
  >
    <path
      d="M16.4724 4L4.1 4C3.76863 4 3.5 4.26863 3.5 4.6L3.5 14.4C3.5 14.7314 3.76863 15 4.1 15H6.86762C7.57015 15 8.22116 15.3686 8.5826 15.971L11.293 20.4884C11.8779 21.4631 13.2554 21.5558 13.9655 20.6681C14.3002 20.2497 14.4081 19.6937 14.2541 19.1804L13.2317 15.7724C13.1162 15.3874 13.4045 15 13.8064 15H18.3815C19.7002 15 20.658 13.746 20.311 12.4738L18.4019 5.47376C18.1646 4.60364 17.3743 4 16.4724 4Z"
      stroke="#FAFAFA"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M7 4L7 15"
      stroke="#FAFAFA"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ReviewCard = ({
  name,
  position,
  profileImage,
  rating,
  reviewText,
  helpfulCount,
  notHelpfulCount = 0,
  date,
  isVerified = false,
}: ReviewCardProps) => (
  <div className="w-[350px] md:w-[1240px] p-6 md:p-10 bg-white/5 rounded-3xl border border-white/10 shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] flex flex-col justify-center items-start gap-4 md:gap-6">
    <div className="self-stretch flex flex-col items-start gap-4 md:gap-6">
      <div className="w-full flex flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <img
            className="w-10 h-10 md:w-14 md:h-14 rounded-full object-cover flex-shrink-0"
            src={profileImage}
            alt={`${name} profile`}
          />
          <div className="flex flex-col items-start gap-1">
            <div className="text-neutral-50 text-base md:text-lg font-normal md:font-medium font-['Plus_Jakarta_Sans'] leading-6 md:leading-[27px]">
              {name}
            </div>
            <div className="text-[#A1A1AA] text-xs md:text-sm font-medium font-['Plus_Jakarta_Sans'] leading-[18px] md:leading-[21px]">
              {position}
            </div>
            {date && (
              <div className="md:hidden flex justify-center items-center mt-1">
                <div className="h-6 px-2 py-1 bg-white/5 rounded-[100px] inline-flex justify-center items-center">
                  <div className="text-neutral-50 text-xs font-medium font-['Plus_Jakarta_Sans'] leading-[18px]">
                    {date}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center gap-4">
          {date && (
            <div className="hidden md:flex justify-center items-center">
              <div className="h-8 px-3 py-2.5 bg-white/5 rounded-[100px] inline-flex justify-center items-center">
                <div className="text-neutral-50 text-xs font-medium font-['Plus_Jakarta_Sans'] leading-[18px]">
                  {date}
                </div>
              </div>
            </div>
          )}
          {isVerified && (
            <div className="h-6 md:h-8 px-2 md:px-3 py-1 md:py-2.5 rounded-[100px] bg-white/5 flex justify-center items-center">
              <div className="text-neutral-50 text-xs font-medium font-['Plus_Jakarta_Sans'] leading-[18px] whitespace-nowrap">
                Verified
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="flex items-center gap-0">
        {[...Array(rating)].map((_, index) => (
          <div key={index} className="w-6 h-6">
            <StarIcon />
          </div>
        ))}
      </div>
      
      <div className="self-stretch flex flex-col items-start gap-6">
        <div className="self-stretch text-neutral-50 text-xl md:text-2xl font-medium font-['Plus_Jakarta_Sans'] leading-[26px] md:leading-8">
          {reviewText}
        </div>
      </div>
    </div>
    
    <div className="flex justify-start items-center gap-4 md:gap-6">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6">
          <ThumbsUpIcon />
        </div>
        <div className="text-neutral-50 text-base font-normal font-['Plus_Jakarta_Sans'] leading-6">
          Helpful ({helpfulCount})
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-6 h-6">
          <ThumbsDownIcon />
        </div>
        <div className="text-neutral-50 text-base font-normal font-['Plus_Jakarta_Sans'] leading-6">
          Not Helpful ({notHelpfulCount})
        </div>
      </div>
    </div>
  </div>
);

interface RatingBreakdown {
  fiveStars?: number;
  fourStars?: number;
  threeStars?: number;
  twoStars?: number;
  oneStars?: number;
}

interface ProductReviewsProps {
  productReviews?: Array<{
    userName: string;
    userTitle?: string;
    userAvatar?: string;
    date?: string;
    verified?: boolean;
    rating: number;
    reviewText: string;
    helpful?: number;
    notHelpful?: number;
  }>;
  ratingBreakdown?: RatingBreakdown;
}

export default function ProductReviews({
  productReviews,
  ratingBreakdown,
}: ProductReviewsProps) {
  const defaultReviewsData = [
    {
      name: "Adarsh Sahu",
      position: "Freelance designer at Upstartic",
      profileImage: "https://placehold.co/56x56",
      rating: 5,
      reviewText:
        "I have some software that I no long use and wants to give it to someone who really need it and I my self needed some business tools to learn and I earn some too.",
      helpfulCount: 200,
      notHelpfulCount: 20,
      date: "2 Months Ago",
      isVerified: true,
    },
    {
      name: "Sarah Johnson",
      position: "Product Manager at TechCorp",
      profileImage: "https://placehold.co/56x56",
      rating: 5,
      reviewText:
        "Amazing platform for discovering software deals! I've saved hundreds of dollars on essential business tools. The community is incredibly helpful and the verification system gives me confidence in every purchase.",
      helpfulCount: 150,
      notHelpfulCount: 20,
      date: "2 Months Ago",
      isVerified: true,
    },
  ];

  const reviewsData =
    productReviews && productReviews.length > 0
      ? productReviews.map((review) => ({
          name: review.userName,
          position: review.userTitle || "User",
          profileImage: review.userAvatar || "https://i.pravatar.cc/150?img=1",
          rating: review.rating,
          reviewText: review.reviewText,
          helpfulCount: review.helpful || 0,
          notHelpfulCount: review.notHelpful || 0,
          date: review.date,
          isVerified: review.verified || false,
        }))
      : defaultReviewsData;

  const bucketRating = (rating: number) => {
    const rounded = Math.max(1, Math.min(5, Math.round(rating)));
    switch (rounded) {
      case 5:
        return "fiveStars";
      case 4:
        return "fourStars";
      case 3:
        return "threeStars";
      case 2:
        return "twoStars";
      default:
        return "oneStars";
    }
  };

  const breakdownKeys: Array<{ key: keyof RatingBreakdown; label: string }> = [
    { key: "fiveStars", label: "5 stars" },
    { key: "fourStars", label: "4 stars" },
    { key: "threeStars", label: "3 stars" },
    { key: "twoStars", label: "2 stars" },
    { key: "oneStars", label: "1 star" },
  ];

  const derivedBreakdown: RatingBreakdown = reviewsData.reduce(
    (acc, review) => {
      const key = bucketRating(review.rating);
      acc[key] = (acc[key] ?? 0) + 1;
      return acc;
    },
    {
      fiveStars: 0,
      fourStars: 0,
      threeStars: 0,
      twoStars: 0,
      oneStars: 0,
    }
  );

  const hasExternalBreakdown =
    ratingBreakdown &&
    Object.values(ratingBreakdown).some(
      (value) => typeof value === "number" && value > 0
    );

  const finalBreakdown = hasExternalBreakdown
    ? ratingBreakdown
    : derivedBreakdown;

  const breakdownTotal = breakdownKeys.reduce(
    (sum, { key }) => sum + (finalBreakdown?.[key] ?? 0),
    0
  );

  return (
    <div className="w-full flex flex-col items-center md:items-end gap-8 md:gap-6">
      <div className="w-full md:w-[1240px] flex flex-row justify-between items-center gap-8">
        <div className="text-neutral-50 text-xl md:text-2xl font-medium font-['Plus_Jakarta_Sans'] leading-8 md:leading-8">
          Product Reviews
        </div>
        <div className="h-12 px-6 py-4 bg-gradient-to-b from-[#501bd6] to-[#7f57e2] rounded-[100px] flex justify-center items-center">
          <div className="text-white text-base font-normal font-['Poppins'] leading-6 whitespace-nowrap">
            Write A Review
          </div>
        </div>
      </div>

      <div className="w-full md:w-[1240px] flex flex-col gap-4">
        <div className="bg-white/5 border border-white/10 rounded-[24px] p-4 md:p-6 flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <div className="text-neutral-300 text-sm font-medium font-['Poppins']">
              Rating breakdown
            </div>
            <div className="text-neutral-400 text-sm font-medium font-['Poppins']">
              {breakdownTotal} review{breakdownTotal === 1 ? "" : "s"}
            </div>
          </div>
          {breakdownTotal > 0 ? (
            <div className="flex flex-col gap-2">
              {breakdownKeys.map(({ key, label }) => {
                const value = finalBreakdown?.[key] ?? 0;
                const percentage =
                  breakdownTotal > 0 ? (value / breakdownTotal) * 100 : 0;
                return (
                  <div
                    key={key}
                    className="flex items-center gap-3 w-full"
                  >
                    <div className="text-white text-sm font-medium font-['Poppins'] w-20">
                      {label}
                    </div>
                    <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-2 bg-gradient-to-r from-[#501bd6] to-[#7f57e2]"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <div className="text-white text-sm font-medium font-['Poppins'] w-12 text-right">
                      {value}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-[#D4D4D8] text-sm font-['Poppins']">
              Not enough rating data yet.
            </div>
          )}
        </div>
      </div>

      <div className="w-full flex flex-col items-center gap-8 md:gap-6">
        {reviewsData.map((review, index) => (
          <ReviewCard
            key={index}
            name={review.name}
            position={review.position}
            profileImage={review.profileImage}
            rating={review.rating}
            reviewText={review.reviewText}
            helpfulCount={review.helpfulCount}
            notHelpfulCount={review.notHelpfulCount}
            date={review.date}
            isVerified={review.isVerified}
          />
        ))}
      </div>
    </div>
  );
}
