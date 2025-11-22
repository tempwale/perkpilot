import type { ReactNode } from "react";

export interface TransformedReview {
  id: string | undefined;
  reviewId?: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  logoComponent: ReactNode;
  verified: boolean;
  rating: string;
  ratingNumber: number;
  totalReviews: number;
  website: string;
  userCount: string | number;
  founded: string;
  employees: string;
  headquarters: string;
  features: Array<{ title: string; description?: string }>;
  keyFeatures: string[];
  pros: string[];
  cons: string[];
  pricing: Array<{ plan: string; amount: string; note?: string }>;
  screenshots: never[];
  videoUrl: string;
  bestUseCases: Array<{
    id: string;
    title: string;
    description: string;
    rating: number;
  }>;
  integrations: Array<{ id: string; name: string }>;
  faqs: Array<{ question: string; answer: string }>;
  alternatives: Array<{
    name: string;
    type?: string;
    avatarUrl?: string;
    price?: string;
    rating?: number;
    reviewCount?: number;
    compareNote?: string;
  }>;
  lastUpdated: string;
  upvotes: number;
  shareCount: number;
  ratingCategories: Array<{ category: string; value: number; outOf?: number }>;
  productReviews: Array<{
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
  ratingBreakdown: {
    fiveStars?: number;
    fourStars?: number;
    threeStars?: number;
    twoStars?: number;
    oneStars?: number;
  };
}
