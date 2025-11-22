import { Document, Types } from "mongoose";

// Type definitions for nested schemas
export interface IFeature {
  title: string;
  description?: string;
}

export interface IPricing {
  plan: string;
  amount: string;
  note?: string;
  ctaText?: string;
  ctaLink?: string;
}

export interface IAlternative {
  name: string;
  type?: string;
  avatarUrl?: string;
  price?: string;
  rating?: number;
  reviewCount?: number;
  compareNote?: string;
}

export interface IRatingCategory {
  category: string;
  value: number;
  outOf?: number;
}

export interface IUseCase {
  title: string;
  description?: string;
  rating?: number;
}

export interface IFAQ {
  question?: string;
  answer?: string;
}

export interface IUserReview {
  userName: string;
  userTitle?: string;
  userAvatar?: string;
  date?: string;
  verified?: boolean;
  rating: number;
  reviewText: string;
  helpful?: number;
  notHelpful?: number;
}

export interface IRatingBreakdown {
  fiveStars?: number;
  fourStars?: number;
  threeStars?: number;
  twoStars?: number;
  oneStars?: number;
}

// Main Review interface
export interface IReview extends Document {
  // Review page management
  isReviewPageSettings?: boolean;
  reviewPageStatus?: "live" | "maintenance";
  reviewPageTopTagline?: string;
  reviewPageHeading?: string;
  reviewPageSubheading?: string;
  reviewPageTags?: string[];
  featuredReviews?: Types.ObjectId[];

  // Reviewer's details (for backward compatibility - main reviewer)
  userName?: string;
  userTitle?: string;
  userAvatar?: string;
  date?: string;
  verified?: boolean;

  // Review data (for backward compatibility - main review)
  reviewText?: string;
  rating?: number;
  helpful?: number;
  notHelpful?: number;

  // Product-specific review context
  productName: string;
  productType?: string;
  avatarUrl?: string;
  description?: string;
  overview?: string;

  showProductUsedBy?: boolean;
  productUsedByText?: string;
  showAverageRating?: boolean;
  averageRatingText?: string;
  features?: IFeature[];
  pricing?: IPricing[];
  alternatives?: IAlternative[];
  userCount?: string;
  foundedYear?: number;
  employeeRange?: string;
  headquarters?: string;
  lastUpdated?: string;
  upvotes?: number;
  shareCount?: number;

  // Ratings breakdown and review stats
  aggregateRating?: number;
  ratingCount?: number;
  ratingCategories?: IRatingCategory[];

  // Pros and cons
  pros?: string[];
  cons?: string[];

  faqs?: IFAQ[];
  useCases?: IUseCase[];
  integrations?: string[];

  // Product reviews collection - individual user reviews for this product
  productReviews?: IUserReview[];

  // Rating breakdown statistics
  ratingBreakdown?: IRatingBreakdown;

  // Optional display fields (for UI compatibility)
  logoComponent?: string;
  dealType?: string;

  // Timestamps
  createdAt?: Date;
  updatedAt?: Date;
}

// ============ Review Query Parameter Types ============

export interface ReviewQueryParams {
  page?: string | number;
  limit?: string | number;
  productName?: string;
  sortBy?: string;
}

// ============ Review Request Body Types ============

export interface ReviewCreateBody {
  productName: string;
  productType?: string;
  avatarUrl?: string;
  description?: string;
  overview?: string;
  showProductUsedBy?: boolean;
  productUsedByText?: string;
  showAverageRating?: boolean;
  averageRatingText?: string;
  userName?: string;
  userTitle?: string;
  userAvatar?: string;
  date?: string;
  verified?: boolean;
  reviewText?: string;
  rating?: number;
  aggregateRating?: number;
  ratingCount?: number;
  helpful?: number;
  notHelpful?: number;
  features?: IFeature[];
  pricing?: IPricing[];
  alternatives?: IAlternative[];
  ratingCategories?: IRatingCategory[];
  useCases?: IUseCase[];
  pros?: string[];
  cons?: string[];
  faqs?: IFAQ[];
  integrations?: string[];
  productReviews?: IUserReview[];
  userCount?: string;
  foundedYear?: number;
  employeeRange?: string;
  headquarters?: string;
  lastUpdated?: string;
  upvotes?: number;
  shareCount?: number;
  ratingBreakdown?: IRatingBreakdown;
  logoComponent?: string;
  dealType?: string;
}

export type ReviewUpdateBody = Partial<ReviewCreateBody>;

export interface ReviewPageSettingsBody {
  reviewPageStatus?: "live" | "maintenance";
  reviewPageTopTagline?: string;
  reviewPageHeading?: string;
  reviewPageSubheading?: string;
  reviewPageTags?: string[];
  featuredReviews?: string[]; // Array of Review ObjectIds
}

