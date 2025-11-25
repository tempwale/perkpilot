import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ReviewBackground from "../components/ReviewDetail/ReviewBackground";
import ReviewDetailContent from "../components/ReviewDetail/ReviewDetailContent";
import ProductDetailsSection from "../components/ReviewDetail/ProductDetailsSection";
import RatingsDetails from "../components/ReviewDetail/RatingsDetails";
import ProsCons from "../components/ReviewDetail/ProsCons";
import BestUseCase from "../components/ReviewDetail/BestUseCase";
import PopularIntegrations from "../components/ReviewDetail/PopularIntegrations";
import CTAReviewDetails from "../components/ReviewDetail/CTAReviewDetails";
import FAQ from "../components/ReviewDetail/FAQ";
import { fetchReviewById, type Review } from "../hooks/useReviews";
import type { TransformedReview } from "../types/review.types";

type ReviewAlternative = {
  name?: string;
  type?: string;
  avatarUrl?: string;
  price?: string;
  rating?: number;
  reviewCount?: number;
  compareNote?: string;
  _id?: string;
  dealId?: string;
};

const transformApiReview = (review: Review): TransformedReview => {
  // Default logo component
  const defaultLogoComponent = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 81 81"
      className="w-full h-full object-contain"
    >
      <path
        d="M30.5664 10.4873H40.5664V30.4873H30.5664C27.9142 30.4873 25.3707 29.4337 23.4953 27.5584C21.62 25.683 20.5664 23.1395 20.5664 20.4873C20.5664 17.8351 21.62 15.2916 23.4953 13.4162C25.3707 11.5409 27.9142 10.4873 30.5664 10.4873Z"
        fill="#F4511E"
      />
    </svg>
  );

  return {
    id: review._id,
    reviewId: review._id,
    title: review.productName,
    category: review.productType || "Tool",
    shortDescription: review.description || "",
    fullDescription: review.overview || review.description || "",
    logoComponent: review.avatarUrl ? (
      <img
        src={review.avatarUrl}
        alt={review.productName}
        className="w-full h-full object-contain"
      />
    ) : (
      defaultLogoComponent
    ),
    verified: review.verified || false,
    rating: review.aggregateRating
      ? `${review.aggregateRating.toFixed(1)}/5.0 Ratings`
      : review.rating
      ? `${review.rating.toFixed(1)}/5.0 Ratings`
      : "No rating",
    ratingNumber: review.aggregateRating || review.rating || 0,
    totalReviews: review.ratingCount || 0,
    website: "#",
    userCount: review.userCount || "N/A",
    founded: review.foundedYear?.toString() || "N/A",
    employees: review.employeeRange || "N/A",
    headquarters: review.headquarters || "N/A",
    features: review.features || [],
    keyFeatures: review.features?.map((f) => f.title) || [],
    pros: review.pros || [],
    cons: review.cons || [],
    pricing: review.pricing || [],
    screenshots: [],
    videoUrl: "",
    bestUseCases:
      review.useCases?.map((uc, index) => ({
        id: `${index + 1}`,
        title: uc.title,
        description: uc.description || "",
        rating: uc.rating || 0,
      })) || [],
    integrations:
      review.integrations?.map((name, index) => ({
        id: `${index + 1}`,
        name,
      })) || [],
    faqs: (review.faqs || []).filter(
      (faq): faq is { question: string; answer: string } =>
        Boolean(faq.question && faq.answer)
    ).map((faq) => ({
      question: faq.question!,
      answer: faq.answer!,
    })),
    alternatives: (() => {
      const sanitized: Array<{
        name: string;
        type?: string;
        avatarUrl?: string;
        price?: string;
        rating?: number;
        reviewCount?: number;
        compareNote?: string;
        _id?: string;
      }> = (review.alternatives || []).map((alt: ReviewAlternative) => ({
        name: alt.name ?? "Alternative",
        type: alt.type,
        avatarUrl: alt.avatarUrl,
        price: alt.price,
        rating: alt.rating,
        reviewCount: alt.reviewCount,
        compareNote: alt.compareNote,
        _id: alt._id,
      }));
      return sanitized;
    })(),
    lastUpdated: review.lastUpdated || new Date().toISOString().split("T")[0],
    upvotes: review.upvotes || 0,
    shareCount: review.shareCount || 0,
    tryForFreeLink: review.tryForFreeLink,
    ratingCategories: review.ratingCategories || [],
    productReviews:
      review.productReviews && review.productReviews.length > 0
        ? review.productReviews
        : review.userName && review.reviewText && review.rating
        ? [
            {
              userName: review.userName,
              userTitle: review.userTitle,
              userAvatar: review.userAvatar,
              date: review.date,
              verified: review.verified || false,
              rating: review.rating,
              reviewText: review.reviewText,
              helpful: review.helpful || 0,
              notHelpful: review.notHelpful || 0,
            },
          ]
        : [],
    ratingBreakdown: review.ratingBreakdown || {
      fiveStars: 0,
      fourStars: 0,
      threeStars: 0,
      twoStars: 0,
      oneStars: 0,
    },
  };
};

export default function ReviewDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [reviewData, setReviewData] = useState<TransformedReview | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const useAPI = true; // Set to true to use API, false for static data

  const handleUpvoteUpdate = (newUpvotes: number) => {
    if (reviewData) {
      setReviewData({
        ...reviewData,
        upvotes: newUpvotes,
      });
    }
  };

  const handleShareUpdate = async () => {
    // Optionally refresh review data to get updated shareCount
    if (id && useAPI) {
      try {
        const review = await fetchReviewById(id);
        const transformedData = transformApiReview(review);
        setReviewData(transformedData);
      } catch (error) {
        console.error("Failed to refresh review data after share:", error);
      }
    }
  };

  // Fetch review from API
  useEffect(() => {
    if (!id) {
      setError("No review ID provided");
      setLoading(false);
      return;
    }

    if (!useAPI) {
      setError("API is disabled");
      setLoading(false);
      return;
    }

    const loadReview = async () => {
      try {
        setLoading(true);
        setError(null);
        const review = await fetchReviewById(id);

        // Transform API data to match component structure
        const transformedData = transformApiReview(review);
        setReviewData(transformedData);
      } catch (err) {
        console.error("Error fetching review:", err);
        setError(err instanceof Error ? err.message : "Failed to fetch review");
      } finally {
        setLoading(false);
      }
    };

    loadReview();
  }, [id, useAPI]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400">Loading review...</p>
        </div>
      </div>
    );
  }

  if (error && !reviewData) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">
            Review Not Found
          </h1>
          <p className="text-gray-400">{error}</p>
        </div>
      </div>
    );
  }

  if (!reviewData) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">
            Review Not Found
          </h1>
          <p className="text-gray-400">
            The review you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-full">
        <Header />
        {/* Content container with top padding to account for fixed header */}
        <div className="pt-[80px]">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.08)] to-transparent"></div>

          <div className="relative ">
            <div className="hidden md:block">
              <ReviewBackground />
            </div>
            <ReviewDetailContent
              reviewData={{
                ...reviewData,
                pricing: reviewData.pricing.map((p: { plan: string; amount: string; note?: string; ctaText?: string; ctaLink?: string }) => ({
                  tier: p.plan,
                  price: p.amount,
                  features: p.note ? [p.note] : undefined,
                  ctaText: p.ctaText,
                  ctaLink: p.ctaLink,
                })),
                upvotes: reviewData.upvotes,
                reviewId: reviewData.reviewId || reviewData.id,
                tryForFreeLink: reviewData.tryForFreeLink,
              }}
              onUpvoteUpdate={handleUpvoteUpdate}
              onShareUpdate={handleShareUpdate}
            />
          </div>
          <ProductDetailsSection
            overview={reviewData.fullDescription}
            features={reviewData.features}
            pricing={reviewData.pricing}
            keyFeatures={reviewData.keyFeatures}
            alternatives={reviewData.alternatives.map((alt: ReviewAlternative) => ({
              name: alt.name ?? "Alternative",
              type: alt.type,
              avatarUrl: alt.avatarUrl,
              price: alt.price,
              rating: alt.rating,
              reviewCount: alt.reviewCount,
              compareNote: alt.compareNote,
              _id: alt._id,
            }))}
            productReviews={reviewData.productReviews}
            ratingBreakdown={reviewData.ratingBreakdown}
          />
          <RatingsDetails
            ratingCategories={reviewData.ratingCategories}
            aggregateRating={reviewData.ratingNumber}
            ratingCount={reviewData.totalReviews}
          />
          <ProsCons
            pros={reviewData.pros.map((pro: string, index: number) => ({
              id: `pro-${index}`,
              text: pro,
            }))}
            cons={reviewData.cons.map((con: string, index: number) => ({
              id: `con-${index}`,
              text: con,
            }))}
          />
          <BestUseCase useCases={reviewData.bestUseCases} />
          <PopularIntegrations integrations={reviewData.integrations} />
          <FAQ faqs={reviewData.faqs} />
          <CTAReviewDetails />
          <Footer />
        </div>
      </div>
    </div>
  );
}
