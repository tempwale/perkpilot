import React, { useState, useEffect } from "react";
import Pick from "./Pick";

const PicksGrid: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
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
    <div className="w-full max-w-6xl mx-auto overflow-hidden px-4 md:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 justify-items-center items-stretch">
        {picksData
          .slice(0, isDesktop ? picksData.length : 3)
          .map((pick, index) => (
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
