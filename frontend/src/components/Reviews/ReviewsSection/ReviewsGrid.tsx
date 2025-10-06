import { useState, useEffect } from "react";
import ReviewCard from "./ReviewsCard";
import Pagination from "./Pagination";

// Logo Components
function FramerLogo() {
  return (
    <svg
      width="21"
      height="32"
      viewBox="0 0 21 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1_1900)">
        <path
          d="M0 0H21V10.6667H10.5L0 0ZM0 10.6667H10.5L21 21.3333H10.5V32L0 21.3333V10.6667Z"
          fill="#0D0D11"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_1900">
          <rect width="21" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function FigmaLogo() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 12C12 10.34 13.34 9 15 9C16.66 9 18 10.34 18 12C18 13.66 16.66 15 15 15C13.34 15 12 13.66 12 12Z"
        fill="#1ABCFE"
      />
      <path
        d="M6 21C6 19.34 7.34 18 9 18H12V21C12 22.66 10.66 24 9 24C7.34 24 6 22.66 6 21Z"
        fill="#0ACF83"
      />
      <path
        d="M12 0V9H15C16.66 9 18 7.66 18 6C18 4.34 16.66 3 15 3H12V0Z"
        fill="#FF7262"
      />
      <path
        d="M6 6C6 7.66 7.34 9 9 9H12V3H9C7.34 3 6 4.34 6 6Z"
        fill="#F24E1E"
      />
      <path
        d="M6 15C6 16.66 7.34 18 9 18H12V12H9C7.34 12 6 13.34 6 15Z"
        fill="#A259FF"
      />
    </svg>
  );
}

function NotionLogo() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4L20 4C20.55 4 21 4.45 21 5V19C21 19.55 20.55 20 20 20H4C3.45 20 3 19.55 3 19V5C3 4.45 3.45 4 4 4ZM5 6V18H19V6H5ZM7 8H17V10H7V8ZM7 12H17V14H7V12ZM7 16H13V18H7V16Z"
        fill="white"
      />
    </svg>
  );
}

function SlackLogo() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.042 15.165C5.042 16.73 3.777 18 2.217 18C0.656 18 -0.609 16.73 -0.609 15.165C-0.609 13.6 0.656 12.33 2.217 12.33H5.042V15.165Z"
        fill="#E01E5A"
      />
      <path
        d="M6.313 15.165C6.313 13.6 7.578 12.33 9.139 12.33C10.7 12.33 11.965 13.6 11.965 15.165V21.783C11.965 23.348 10.7 24.618 9.139 24.618C7.578 24.618 6.313 23.348 6.313 21.783V15.165Z"
        fill="#E01E5A"
      />
      <path
        d="M9.139 5.042C7.578 5.042 6.313 3.777 6.313 2.217C6.313 0.656 7.578 -0.609 9.139 -0.609C10.7 -0.609 11.965 0.656 11.965 2.217V5.042H9.139Z"
        fill="#36C5F0"
      />
      <path
        d="M9.139 6.313C10.7 6.313 11.965 7.578 11.965 9.139C11.965 10.7 10.7 11.965 9.139 11.965H2.521C0.96 11.965 -0.305 10.7 -0.305 9.139C-0.305 7.578 0.96 6.313 2.521 6.313H9.139Z"
        fill="#36C5F0"
      />
    </svg>
  );
}

function AirtableLogo() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#FFBF00" />
      <path
        d="M2 17L12 22L22 17"
        stroke="#FFBF00"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M2 12L12 17L22 12"
        stroke="#FFBF00"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}

function WebflowLogo() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM16.5 8L12 16L7.5 8H16.5Z"
        fill="#4353FF"
      />
    </svg>
  );
}

// Sample Reviews data - in a real app this would come from props or API
const sampleReviews = [
  {
    id: 1,
    title: "Framer",
    category: "No-Code Tool",
    description:
      "Every communications experience, Integrated contact center, voice, video, chat, and APIs.",
    logoComponent: <FramerLogo />,
    verified: true,
    rating: "4.8/5.0 Ratings",
    pros: [
      "Real-time collaboration",
      "Browser-based",
      "Excellent prototyping",
      "Power design tool",
    ],
    cons: [
      "Limited offline access",
      "Pages limitations",
      "Not ideal for e-com",
      "Heavy websites lag",
    ],
    planPrice: "$14/Monthly",
  },
  {
    id: 2,
    title: "Figma",
    category: "Design Tool",
    description:
      "Collaborative interface design tool for teams. Create, prototype, and gather feedback all in one place.",
    logoComponent: <FigmaLogo />,
    verified: true,
    rating: "4.9/5.0 Ratings",
    pros: [
      "Unlimited Files",
      "Advanced Prototyping",
      "Team Libraries",
      "Version Control",
    ],
    cons: [
      "Internet dependency",
      "Learning curve",
      "Performance issues",
      "Limited offline features",
    ],
    planPrice: "$12/Monthly",
  },
  {
    id: 3,
    title: "Notion",
    category: "Productivity Tool",
    description:
      "All-in-one workspace for notes, tasks, wikis, and databases. Organize your work and life.",
    logoComponent: <NotionLogo />,
    verified: false,
    rating: "4.6/5.0 Ratings",
    pros: [
      "Unlimited Pages",
      "Real-time Collaboration",
      "Advanced Permissions",
      "API Access",
    ],
    cons: [
      "Slow loading times",
      "Complex interface",
      "Limited formatting",
      "No offline mode",
    ],
    planPrice: "$8/Monthly",
  },
  {
    id: 4,
    title: "Slack",
    category: "Communication Tool",
    description:
      "Team communication platform with channels, direct messages, file sharing, and integrations.",
    logoComponent: <SlackLogo />,
    verified: true,
    rating: "4.7/5.0 Ratings",
    pros: [
      "Unlimited Messages",
      "App Integrations",
      "Advanced Search",
      "Guest Access",
    ],
    cons: [
      "Can be distracting",
      "Information overload",
      "Threading confusion",
      "Storage limitations",
    ],
    planPrice: "$7.25/Monthly",
  },
  {
    id: 5,
    title: "Airtable",
    category: "Database Tool",
    description:
      "Flexible database platform that combines the simplicity of a spreadsheet with database power.",
    logoComponent: <AirtableLogo />,
    verified: true,
    rating: "4.5/5.0 Ratings",
    pros: ["Unlimited Bases", "Advanced Views", "Automation", "API Access"],
    cons: [
      "Expensive for teams",
      "Complex permissions",
      "Limited reporting",
      "Steep learning curve",
    ],
    planPrice: "$20/Monthly",
  },
  {
    id: 6,
    title: "Webflow",
    category: "Web Design Tool",
    description:
      "Visual web design platform that generates clean, semantic code automatically.",
    logoComponent: <WebflowLogo />,
    verified: true,
    rating: "4.4/5.0 Ratings",
    pros: [
      "Visual Editor",
      "CMS Integration",
      "E-commerce Features",
      "Custom Code",
    ],
    cons: [
      "Steep learning curve",
      "Expensive hosting",
      "Limited templates",
      "Complex interactions",
    ],
    planPrice: "$23/Monthly",
  },
  {
    id: 7,
    title: "Framer",
    category: "No-Code Tool",
    description:
      "Every communications experience, Integrated contact center, voice, video, chat, and APIs.",
    logoComponent: <FramerLogo />,
    verified: true,
    rating: "4.8/5.0 Ratings",
    pros: [
      "Real-time collaboration",
      "Browser-based",
      "Excellent prototyping",
      "Power design tool",
    ],
    cons: [
      "Limited offline access",
      "Pages limitations",
      "Not ideal for e-com",
      "Heavy websites lag",
    ],
    planPrice: "$14/Monthly",
  },
  {
    id: 8,
    title: "Figma",
    category: "Design Tool",
    description:
      "Collaborative interface design tool for teams. Create, prototype, and gather feedback all in one place.",
    logoComponent: <FigmaLogo />,
    verified: true,
    rating: "4.9/5.0 Ratings",
    pros: [
      "Unlimited Files",
      "Advanced Prototyping",
      "Team Libraries",
      "Version Control",
    ],
    cons: [
      "Internet dependency",
      "Learning curve",
      "Performance issues",
      "Limited offline features",
    ],
    planPrice: "$12/Monthly",
  },
  {
    id: 9,
    title: "Notion",
    category: "Productivity Tool",
    description:
      "All-in-one workspace for notes, tasks, wikis, and databases. Organize your work and life.",
    logoComponent: <NotionLogo />,
    verified: false,
    rating: "4.6/5.0 Ratings",
    pros: [
      "Unlimited Pages",
      "Real-time Collaboration",
      "Advanced Permissions",
      "API Access",
    ],
    cons: [
      "Slow loading times",
      "Complex interface",
      "Limited formatting",
      "No offline mode",
    ],
    planPrice: "$8/Monthly",
  },
  {
    id: 10,
    title: "Slack",
    category: "Communication Tool",
    description:
      "Team communication platform with channels, direct messages, file sharing, and integrations.",
    logoComponent: <SlackLogo />,
    verified: true,
    rating: "4.7/5.0 Ratings",
    pros: [
      "Unlimited Messages",
      "App Integrations",
      "Advanced Search",
      "Guest Access",
    ],
    cons: [
      "Can be distracting",
      "Information overload",
      "Threading confusion",
      "Storage limitations",
    ],
    planPrice: "$7.25/Monthly",
  },
  {
    id: 11,
    title: "Airtable",
    category: "Database Tool",
    description:
      "Flexible database platform that combines the simplicity of a spreadsheet with database power.",
    logoComponent: <AirtableLogo />,
    verified: true,
    rating: "4.5/5.0 Ratings",
    pros: ["Unlimited Bases", "Advanced Views", "Automation", "API Access"],
    cons: [
      "Expensive for teams",
      "Complex permissions",
      "Limited reporting",
      "Steep learning curve",
    ],
    planPrice: "$20/Monthly",
  },
  {
    id: 12,
    title: "Webflow",
    category: "Web Design Tool",
    description:
      "Visual web design platform that generates clean, semantic code automatically.",
    logoComponent: <WebflowLogo />,
    verified: true,
    rating: "4.4/5.0 Ratings",
    pros: [
      "Visual Editor",
      "CMS Integration",
      "E-commerce Features",
      "Custom Code",
    ],
    cons: [
      "Steep learning curve",
      "Expensive hosting",
      "Limited templates",
      "Complex interactions",
    ],
    planPrice: "$23/Monthly",
  },
];

interface ReviewGridProps {
  Reviews?: typeof sampleReviews;
  onViewDetails?: (ReviewId: number) => void;
  onGetReview?: (ReviewId: number) => void;
  itemsPerPage?: number;
  showPagination?: boolean;
}

export default function ReviewGrid({
  Reviews = sampleReviews,
  onViewDetails,
  onGetReview,
  itemsPerPage = 6,
  showPagination = true,
}: ReviewGridProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Reset to page 1 when switching between mobile/desktop
  useEffect(() => {
    setCurrentPage(1);
  }, [isMobile]);

  // Calculate items per page based on screen size
  const effectiveItemsPerPage = isMobile ? 3 : itemsPerPage;

  // Calculate pagination
  const totalPages = Math.ceil(Reviews.length / effectiveItemsPerPage);
  const startIndex = (currentPage - 1) * effectiveItemsPerPage;
  const endIndex = startIndex + effectiveItemsPerPage;
  const displayReviews = showPagination
    ? Reviews.slice(startIndex, endIndex)
    : Reviews;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of grid when page changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleViewDetails = (ReviewId: number) => {
    if (onViewDetails) {
      onViewDetails(ReviewId);
    } else {
      console.log(`View details for Review ${ReviewId}`);
    }
  };

  const handleGetReview = (ReviewId: number) => {
    if (onGetReview) {
      onGetReview(ReviewId);
    } else {
      console.log(`Get Review ${ReviewId}`);
    }
  };

  return (
    <div className="w-full">
      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto px-4">
        {displayReviews.map((Review) => (
          <div key={Review.id} className="flex">
            <ReviewCard
              id={Review.id}
              title={Review.title}
              category={Review.category}
              description={Review.description}
              logoComponent={Review.logoComponent}
              verified={Review.verified}
              rating={Review.rating}
              pros={Review.pros}
              cons={Review.cons}
              planPrice={Review.planPrice}
            />
          </div>
        ))}
      </div>

      {/* Pagination */}
      {showPagination && totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}
