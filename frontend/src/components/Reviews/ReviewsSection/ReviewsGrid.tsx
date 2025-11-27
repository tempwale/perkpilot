import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReviewCard from "./ReviewsCard";
import Pagination from "./Pagination";
import { fetchReviews, type Review } from "../../../hooks/useReviews";

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
      <g clipPath="url(#clip0_1_1900)">
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

// Logo component that uses avatarUrl from API
function ProductLogo({ avatarUrl }: { avatarUrl?: string }) {
  const [imgError, setImgError] = useState(false);
  
  if (avatarUrl && !imgError) {
    return (
      <img
        src={avatarUrl}
        alt="Product logo"
        className="w-full h-full object-contain"
        onError={() => setImgError(true)}
      />
    );
  }
  return <FramerLogo />;
}
interface ReviewGridProps {
  Reviews?: Review[];
  onViewDetails?: (ReviewId: number) => void;
  onGetReview?: (ReviewId: number) => void;
  itemsPerPage?: number;
  showPagination?: boolean;
  useAPI?: boolean;
  searchQuery?: string;
  activeFilter?: string;
}

export default function ReviewGrid({
  Reviews = [],
  itemsPerPage = 6,
  showPagination = true,
  useAPI = false,
  searchQuery = "",
  activeFilter = "All",
}: ReviewGridProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [apiReviews, setApiReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Check if mobile on mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Fetch all reviews from API on mount
  useEffect(() => {
    if (!useAPI) return;

    const loadReviews = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetchReviews({
          page: 1,
          limit: 1000, // Fetch all reviews for client-side filtering
          sortBy: "-createdAt",
        });
        setApiReviews(response.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch reviews");
        console.error("Error fetching reviews:", err);
      } finally {
        setLoading(false);
      }
    };

    loadReviews();
  }, [useAPI]);

  // Reset to page 1 when switching between mobile/desktop, search query, or filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [isMobile, searchQuery, activeFilter]);

  // Calculate items per page based on screen size
  const effectiveItemsPerPage = isMobile ? 3 : itemsPerPage;

  // Helper function to map Review to display format
  const mapReviewToDisplay = (review: Review) => ({
    id: review._id,
    title: review.productName,
    category: review.productType || "Tool",
    description:
      review.description || review.overview || "No description available",
    logoComponent: <ProductLogo avatarUrl={review.avatarUrl} />,
    rating: review.aggregateRating
      ? `${review.aggregateRating.toFixed(1)}/5.0 Ratings`
      : review.rating
      ? `${review.rating.toFixed(1)}/5.0 Ratings`
      : "No rating",
    pros: review.pros || [],
    cons: review.cons || [],
    planPrice:
      review.pricing && review.pricing.length > 0
        ? review.pricing[0].amount
        : "Contact for pricing",
  });

  // Filter and paginate reviews
  const { paginatedReviews, finalTotalPages } = React.useMemo(() => {
    const reviewsToFilter = useAPI ? apiReviews : Reviews;

    let filtered = [...reviewsToFilter];

    // Apply category filter
    if (activeFilter && activeFilter !== "All") {
      filtered = filtered.filter((review) =>
        review.productType?.toLowerCase() === activeFilter.toLowerCase()
      );
    }

    // Apply search query
    if (searchQuery.trim()) {
      const lowerQuery = searchQuery.toLowerCase();
      filtered = filtered.filter((review) => {
        return (
          review.productName?.toLowerCase().includes(lowerQuery) ||
          review.description?.toLowerCase().includes(lowerQuery) ||
          review.overview?.toLowerCase().includes(lowerQuery) ||
          review.productType?.toLowerCase().includes(lowerQuery)
        );
      });
    }

    // Calculate pagination
    const totalPages = Math.ceil(filtered.length / effectiveItemsPerPage);
    const startIndex = (currentPage - 1) * effectiveItemsPerPage;
    const endIndex = startIndex + effectiveItemsPerPage;
    const paginated = showPagination
      ? filtered.slice(startIndex, endIndex)
      : filtered;

    return {
      paginatedReviews: paginated,
      finalTotalPages: totalPages,
    };
  }, [apiReviews, Reviews, useAPI, searchQuery, activeFilter, currentPage, effectiveItemsPerPage, showPagination]);

  // Map reviews to display format
  const displayReviews = paginatedReviews.map(mapReviewToDisplay);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of grid when page changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full">
      {/* Loading State */}
      {loading && (
        <div className="flex justify-center items-center py-20">
          <p className="text-gray-400">Loading reviews...</p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="flex justify-center items-center py-20">
          <p className="text-red-500">{error}</p>
        </div>
      )}

      {/* Grid Container with animation */}
      {!loading && !error && (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {displayReviews.map((Review, idx) => (
            <motion.div
              key={Review.id}
              className="flex w-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.07, ease: "easeOut" }}
            >
              <ReviewCard
                id={Review.id}
                title={Review.title}
                category={Review.category}
                description={Review.description}
                logoComponent={Review.logoComponent}
                rating={Review.rating}
                pros={Review.pros}
                cons={Review.cons}
                planPrice={Review.planPrice}
              />
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Pagination */}
      {!loading && !error && showPagination && finalTotalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={finalTotalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}
