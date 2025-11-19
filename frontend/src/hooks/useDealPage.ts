import { DEALPAGE_API } from "../config/backend";

export interface DealPageData {
  _id?: string;
  topTagline?: string;
  heading: string;
  subheading?: string;
  status?: "live" | "maintenance";
  deals?: Array<{
    _id: string;
    title?: string;
    category?: string;
    description?: string;
    logoUri?: string;
    verified?: boolean;
    tag?: string;
    features?: string[];
    discount?: string;
    savings?: string;
    primary_cta_link?: string;
    secondary_cta_link?: string;
  }>;
  createdAt?: string;
  updatedAt?: string;
}

const DEFAULT_TIMEOUT = 10000; // 10s

export async function fetchDealPage(
  timeoutMs = DEFAULT_TIMEOUT
): Promise<DealPageData | null> {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch(DEALPAGE_API, { signal: controller.signal });

    clearTimeout(id);

    if (!res.ok) {
      if (res.status === 404) {
        // No deal page exists yet, return null
        return null;
      }
      const text = await res.text().catch(() => "");
      throw new Error(
        `Failed to fetch deal page: ${res.status} ${res.statusText} ${text}`
      );
    }

    const data = await res.json();
    return data as DealPageData;
  } catch (err) {
    if (err instanceof DOMException && err.name === "AbortError") {
      throw new Error(`Request timed out after ${timeoutMs}ms`);
    }
    if (err instanceof Error) {
      throw err;
    }
    throw new Error("An unexpected error occurred while fetching deal page");
  }
}

export default fetchDealPage;

