// ============ Query Parameter Types ============

export interface AuthorQueryParams {
  page?: string | number;
  limit?: string | number;
  authorName?: string;
  authorIndustry?: string;
  sortBy?: string;
}

export interface ComparisonQueryParams {
  published?: string;
  limit?: string | number;
  page?: string | number;
  q?: string;
}

export interface ReviewQueryParams {
  page?: string | number;
  limit?: string | number;
  productName?: string;
  sortBy?: string;
}

export interface BlogQueryParams {
  page?: string | number;
  limit?: string | number;
  category?: string;
  published?: string | boolean;
  q?: string;
  sortBy?: string;
}

// ============ Request Body Types ============

export interface DealCreateBody {
  title?: string;
  name?: string;
  category?: string;
  description?: string;
  features?: string[];
  discount?: string;
  discountPercentage?: number;
  savings?: string;
  savingsAmount?: number | string;
  tag?: string;
  logoUri?: string;
  verified?: boolean;
  rating?: number;
  primary_cta_text?: string;
  secondary_cta_text?: string;
  primary_cta_link?: string;
  secondary_cta_link?: string;
}

// ============ Filter Types ============

export interface ComparisonFilter {
  isPublished?: boolean;
  blogCategory?: string;
  author?: string;
  slug?: string;
  [key: string]: string | boolean | undefined;
}

// ============ MongoDB Query Types ============

export interface MongoRegexFilter {
  $regex: string;
  $options: string;
}

export interface MongoTextSearchFilter {
  $search: string;
}

