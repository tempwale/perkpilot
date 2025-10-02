import React from "react";
import ReviewsCard from "./ReviewsCard";

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
    <div className="w-full max-w-6xl mx-auto overflow-hidden">
      <div className="grid grid-cols-3 gap-6 justify-items-center items-stretch">
        {reviewsData.map((review, index) => (
          <ReviewsCard
            key={index}
            appName={review.appName}
            category={review.category}
            description={review.description}
            rating="4.8"
            reviewCount="1234"
            userAvatars={[
              "src/assets/images/profiles/profile-1.svg",
              "src/assets/images/profiles/profile-2.svg",
              "src/assets/images/profiles/profile-3.svg",
            ]}
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
