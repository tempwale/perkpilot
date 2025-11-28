import { HOMEPAGE_API } from "../config/backend";
import type { Deal } from "./useDeals";

export interface ToolMentioned {
  toolName: string;
  toolLogo?: string;
  toolCategory?: string;
}

export interface Comparison {
  _id: string;
  heroHeading: string;
  heroBody?: string;
  sectionHeadline?: string;
  toolsMentioned?: ToolMentioned[];
  blogCategory?: string;
  author?: string;
  readingTime?: string;
  slug?: string;
  isPublished?: boolean;
  viewCount?: number;
}

export interface Review {
  _id: string;
  userName?: string;
  userTitle?: string;
  userAvatar?: string;
  date?: string;
  verified?: boolean;
  reviewText?: string;
  rating?: number;
  helpful?: number;
  notHelpful?: number;
  productName?: string;
  productType?: string;
  avatarUrl?: string;
  description?: string;
  overview?: string;
  features?: string[];
  pricing?: string;
  alternatives?: string[];
  aggregateRating?: number;
  ratingCount?: number;
  ratingBreakdown?: {
    stars: number;
    count: number;
  }[];
  pros?: string[];
  cons?: string[];
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
  useCases?: string[];
  integrations?: string[];
  productReviews?: Array<{
    userName: string;
    userAvatar?: string;
    rating: number;
    reviewText: string;
    date: string;
  }>;
}

export interface HomePageData {
  _id?: string;
  hero?: {
    topTagline?: string;
    mainHeadline?: string;
    subHeadline?: string;
    ctaText?: string;
    ctaLink?: string;
    heroImage?: string;
  };
  discountedIcons?: {
    topTagline?: string;
    mainHeadline?: string;
    subHeadline?: string;
    ctaText?: string;
    ctaLink?: string;
    icons?: Array<{
      name: string;
      iconUrl: string;
    }>;
  };
  stats?: Array<{
    numberValue: string;
    message: string;
    _id?: string;
  }>;
  topPicks?: {
    sectionTitle?: string;
    body?: string;
    deals?: Deal[];
  };
  softwareComparisons?: {
    sectionTitle?: string;
    comparisons?: Comparison[];
  };
  topReviews?: {
    sectionTitle?: string;
    body?: string;
    reviews?: Review[];
  };
  status?: string;
}

const DEFAULT_URL = HOMEPAGE_API;
const DEFAULT_TIMEOUT = 10000; // 10s

export async function fetchHomePage(
  url: string = DEFAULT_URL,
  timeoutMs = DEFAULT_TIMEOUT
): Promise<HomePageData> {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch(url, { signal: controller.signal });

    clearTimeout(id);

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      throw new Error(
        `Failed to fetch homepage: ${res.status} ${res.statusText} ${text}`
      );
    }

    const data = await res.json();

    return data as HomePageData;
  } catch (err) {
    if (err instanceof DOMException && err.name === "AbortError") {
      throw new Error(`Request timed out after ${timeoutMs}ms`);
    }
    if (err instanceof Error) {
      throw err;
    }
    throw new Error("An unexpected error occurred while fetching homepage");
  }
}

export default fetchHomePage;
