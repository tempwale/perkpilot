import { COMPARISIONS_API } from "../config/backend";

export interface ToolComparisonBlog {
  _id: string;
  pageType: string;
  heroHeading: string;
  heroBody: string;
  comparisonHeroImage: string;
  sectionHeadline: string;
  tipBulbText: string;
  toolsMentioned: Array<{
    toolName: string;
    toolLogo: string;
    toolCategory?: string;
    isVerified?: boolean;
  }>;
  author: string;
  blogCategory: string;
  readingTime: string;
  toolBlogCards: Array<{
    sectionNumber: number;
    blogTitle: string;
    blogBody: string;
  }>;
  featuresComparison: {
    sectionTitle: string;
    featuresHeadline: string;
    tools: string[];
    features: any[];
  };
  prosConsCards: Array<{
    cardNumber: number;
    titlePros: string;
    titleCons: string;
    prosConsPairs: Array<{
      pro: string;
      con: string;
    }>;
  }>;
  slug: string;
  isPublished: boolean;
  viewCount: number;
  createdAt: string;
  updatedAt: string;
  toolCount: number;
  url: string;
  id: string;
}

const DEFAULT_TIMEOUT = 10000; // 10s

export async function fetchComparisonDetail(
  id: string,
  timeoutMs = DEFAULT_TIMEOUT
): Promise<ToolComparisonBlog> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const url = `${COMPARISIONS_API}/${id}`;
    const res = await fetch(url, { signal: controller.signal });

    clearTimeout(timeoutId);

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      throw new Error(
        `Failed to fetch comparison: ${res.status} ${res.statusText} ${text}`
      );
    }

    const data = await res.json();
    return data as ToolComparisonBlog;
  } catch (err: any) {
    clearTimeout(timeoutId);
    if (err.name === "AbortError") {
      throw new Error(`Request timed out after ${timeoutMs}ms`);
    }
    throw err;
  }
}

export default fetchComparisonDetail;
