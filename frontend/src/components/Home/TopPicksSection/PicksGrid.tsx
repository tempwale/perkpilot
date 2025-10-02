import React from "react";
import Pick from "./Pick";

const PicksGrid: React.FC = () => {
  const picksData = [
    {
      appName: "Slack",
      category: "Communication Tool",
      description:
        "Every communications experience, Integrated contact center, voice, video, chat, and APIs.",
      discountPercentage: "25% OFF",
      savingsAmount: "Save Up To $1234",
      rating: "4.8/5.0 Ratings",
      verified: true,
    },
    {
      appName: "Slack",
      category: "Communication Tool",
      description:
        "Every communications experience, Integrated contact center, voice, video, chat, and APIs.",
      discountPercentage: "25% OFF",
      savingsAmount: "Save Up To $1234",
      rating: "4.8/5.0 Ratings",
      verified: true,
    },
    {
      appName: "Slack",
      category: "Communication Tool",
      description:
        "Every communications experience, Integrated contact center, voice, video, chat, and APIs.",
      discountPercentage: "25% OFF",
      savingsAmount: "Save Up To $1234",
      rating: "4.8/5.0 Ratings",
      verified: true,
    },
    {
      appName: "Slack",
      category: "Communication Tool",
      description:
        "Every communications experience, Integrated contact center, voice, video, chat, and APIs.",
      discountPercentage: "25% OFF",
      savingsAmount: "Save Up To $1234",
      rating: "4.8/5.0 Ratings",
      verified: true,
    },
    {
      appName: "Slack",
      category: "Communication Tool",
      description:
        "Every communications experience, Integrated contact center, voice, video, chat, and APIs.",
      discountPercentage: "25% OFF",
      savingsAmount: "Save Up To $1234",
      rating: "4.8/5.0 Ratings",
      verified: true,
    },
    {
      appName: "Slack",
      category: "Communication Tool",
      description:
        "Every communications experience, Integrated contact center, voice, video, chat, and APIs.",
      discountPercentage: "25% OFF",
      savingsAmount: "Save Up To $1234",
      rating: "4.8/5.0 Ratings",
      verified: true,
    },
    {
      appName: "Slack",
      category: "Communication Tool",
      description:
        "Every communications experience, Integrated contact center, voice, video, chat, and APIs.",
      discountPercentage: "25% OFF",
      savingsAmount: "Save Up To $1234",
      rating: "4.8/5.0 Ratings",
      verified: true,
    },
    {
      appName: "Slack",
      category: "Communication Tool",
      description:
        "Every communications experience, Integrated contact center, voice, video, chat, and APIs.",
      discountPercentage: "25% OFF",
      savingsAmount: "Save Up To $1234",
      rating: "4.8/5.0 Ratings",
      verified: true,
    },
    {
      appName: "Slack",
      category: "Communication Tool",
      description:
        "Every communications experience, Integrated contact center, voice, video, chat, and APIs.",
      discountPercentage: "25% OFF",
      savingsAmount: "Save Up To $1234",
      rating: "4.8/5.0 Ratings",
      verified: true,
    },
  ];

  return (
    <div className="w-full max-w-[1240px] mx-auto ">
      <div className="grid grid-cols-3 gap-x-8 gap-y-6 ">
        {picksData.map((pick, index) => (
          <Pick
            key={index}
            appName={pick.appName}
            category={pick.category}
            description={pick.description}
            discountPercentage={pick.discountPercentage}
            savingsAmount={pick.savingsAmount}
            rating={pick.rating}
            verified={pick.verified}
          />
        ))}
      </div>
    </div>
  );
};

export default PicksGrid;
