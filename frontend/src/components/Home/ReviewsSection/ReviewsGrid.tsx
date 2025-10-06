import React from "react";
import ReviewsCard from "./ReviewsCard";
import profile1 from "../../../assets/images/profiles/profile-1.svg";
import profile2 from "../../../assets/images/profiles/profile-2.svg";
import profile3 from "../../../assets/images/profiles/profile-3.svg";
const ReviewsGrid: React.FC = () => {
  const reviewsData = [
    {
      appName: "Slack",
      category: "Communication Tool",
      description:
        "Every communications experience, Integrated contact center, voice, video, chat, and APIs.",
    },
    {
      appName: "Slack",
      category: "Communication Tool",
      description:
        "Every communications experience, Integrated contact center, voice, video, chat, and APIs.",
    },
    {
      appName: "Slack",
      category: "Communication Tool",
      description:
        "Every communications experience, Integrated contact center, voice, video, chat, and APIs.",
    },
    {
      appName: "Slack",
      category: "Communication Tool",
      description:
        "Every communications experience, Integrated contact center, voice, video, chat, and APIs.",
    },
    {
      appName: "Slack",
      category: "Communication Tool",
      description:
        "Every communications experience, Integrated contact center, voice, video, chat, and APIs.",
    },
    {
      appName: "Slack",
      category: "Communication Tool",
      description:
        "Every communications experience, Integrated contact center, voice, video, chat, and APIs.",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto overflow-hidden px-4 md:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 justify-items-center items-stretch">
        {reviewsData.map((review, index) => (
          <ReviewsCard
            key={index}
            appName={review.appName}
            category={review.category}
            description={review.description}
            rating="4.8"
            reviewCount="1234"
            userAvatars={[profile1, profile2, profile3]}
            starRating="4.8/5.0"
            onReadReview={() =>
              console.log(`Read review for ${review.appName}`)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewsGrid;
