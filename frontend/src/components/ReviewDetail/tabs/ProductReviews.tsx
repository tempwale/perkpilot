interface ReviewCardProps {
  name: string;
  position: string;
  profileImage: string;
  rating: number;
  reviewText: string;
  helpfulCount: number;
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

const ReviewCard = ({
  name,
  position,
  profileImage,
  rating,
  reviewText,
  helpfulCount,
  isVerified = false,
}: ReviewCardProps) => (
  <div className="self-stretch min-h-80 p-4 sm:p-6 md:p-10 bg-white/5 rounded-2xl sm:rounded-3xl shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] -outline-offset-[-1px] outline-white/10 flex flex-col justify-center items-start gap-4 sm:gap-6">
    <div className="self-stretch flex flex-col justify-start items-start gap-4 sm:gap-6">
      <div className="w-full flex flex-col sm:flex-row justify-start items-start sm:items-center gap-3 sm:gap-4">
        <div className="flex items-center gap-3 sm:gap-4 flex-1">
          <img
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover flex-shrink-0"
            src={profileImage}
            alt={`${name} profile`}
          />
          <div className="flex-1 flex-col min-w-0 flex justify-start items-start gap-1">
            <div>
              <div className="w-full truncate text-neutral-50 text-base sm:text-lg font-medium font-['Plus_Jakarta_Sans'] leading-6 sm:leading-[27px]">
                {name}
              </div>

              <div className="w-full text-zinc-400 text-xs sm:text-sm font-medium font-['Plus_Jakarta_Sans'] leading-4 sm:leading-[21px] line-clamp-2">
                {position}
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div
                data-layer="Frame 2147206294"
                className="h-8 px-3 py-2.5 bg-white/5 rounded-[100px] inline-flex justify-center items-center gap-2.5"
              >
                <div
                  data-layer="2 Months Ago"
                  className="text-neutral-50 text-xs font-medium font-['Plus_Jakarta_Sans'] leading-[18px]"
                >
                  2 Months Ago
                </div>
              </div>
            </div>
          </div>
        </div>
        {isVerified && (
          <div className="h-7 sm:h-8 px-2 sm:px-3 py-1.5 sm:py-2.5 rounded-full sm:rounded-[100px] -outline-offset-[-1px] outline-[#501bd6] flex justify-center items-center gap-2 flex-shrink-0">
            <div className="text-neutral-50 text-xs font-medium font-['Plus_Jakarta_Sans'] leading-4 sm:leading-[18px] whitespace-nowrap">
              Verified
            </div>
          </div>
        )}
      </div>
      <div className="flex items-center gap-0.5 sm:gap-1">
        {[...Array(rating)].map((_, index) => (
          <div key={index} className="w-5 h-5 sm:w-6 sm:h-6">
            <StarIcon />
          </div>
        ))}
      </div>
      <div className="self-stretch flex flex-col justify-start items-start gap-4 sm:gap-6">
        <div className="self-stretch text-neutral-50 text-lg sm:text-xl md:text-2xl font-medium font-['Plus_Jakarta_Sans'] leading-7 sm:leading-8 md:leading-loose">
          {reviewText}
        </div>
      </div>
    </div>
    <div className="flex justify-start items-center gap-2">
      <div className="w-5 h-5 sm:w-6 sm:h-6">
        <ThumbsUpIcon />
      </div>
      <div className="text-neutral-50 text-sm sm:text-base font-normal font-['Plus_Jakarta_Sans'] leading-5 sm:leading-normal">
        Helpful ({helpfulCount})
      </div>
      <div
        data-layer="Frame 2147206296"
        className="Frame2147206296 inline-flex justify-start items-center gap-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M16.4724 4L4.1 4C3.76863 4 3.5 4.26863 3.5 4.6L3.5 14.4C3.5 14.7314 3.76863 15 4.1 15H6.86762C7.57015 15 8.22116 15.3686 8.5826 15.971L11.293 20.4884C11.8779 21.4631 13.2554 21.5558 13.9655 20.6681C14.3002 20.2497 14.4081 19.6937 14.2541 19.1804L13.2317 15.7724C13.1162 15.3874 13.4045 15 13.8064 15H18.3815C19.7002 15 20.658 13.746 20.311 12.4738L18.4019 5.47376C18.1646 4.60364 17.3743 4 16.4724 4Z"
            stroke="#FAFAFA"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M7 4L7 15"
            stroke="#FAFAFA"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <div
          data-layer="Not Helpful ( 20)"
          className="NotHelpful20 justify-start text-neutral-50 text-base font-normal font-['Plus_Jakarta_Sans'] leading-normal"
        >
          Not Helpful ( 20)
        </div>
      </div>
    </div>
  </div>
);

export default function ProductReviews() {
  const reviewsData = [
    {
      name: "Adarsh Sahu",
      position: "Freelance designer at Upstartic",
      profileImage: "https://placehold.co/56x56",
      rating: 5,
      reviewText:
        "I have some software that I no long use and wants to give it to someone who really need it and I my self needed some business tools to learn and I earn some too.",
      helpfulCount: 200,
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
      isVerified: true,
    },
  ];

  return (
    <div>
      <div className="w-full flex flex-col gap-6">
        <div
          data-layer="Frame 2147223643"
          className="Frame2147223643 flex flex-row md:inline-flex self-stretch justify-between items-center"
        >
          <div
            data-layer="Product Reviews"
            className="ProductReviews text-center justify-start text-neutral-50 text-xl md:text-2xl font-medium font-['Plus_Jakarta_Sans'] leading-loose"
          >
            Product Reviews
          </div>
          <div
            data-layer="Buttons/main"
            className="ButtonsMain  h-12 px-6 py-4 bg-gradient-to-b from-[#501bd6] to-[#7f57e2] rounded-[100px] flex justify-start items-center gap-3"
          >
            <div
              data-layer="Write A Review"
              className="WriteAReview text-center justify-start text-white text-sm md:text-base font-normal font-['Poppins'] leading-normal"
            >
              Write A Review
            </div>
          </div>
        </div>
        {reviewsData.map((review, index) => (
          <ReviewCard
            key={index}
            name={review.name}
            position={review.position}
            profileImage={review.profileImage}
            rating={review.rating}
            reviewText={review.reviewText}
            helpfulCount={review.helpfulCount}
            isVerified={review.isVerified}
          />
        ))}
      </div>
    </div>
  );
}
