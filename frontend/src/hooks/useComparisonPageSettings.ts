import { COMPARISON_PAGE_SETTINGS_API } from "../config/backend";

export interface ComparisonPageSettings {
  comparisonPageStatus: "live" | "maintenance";
  comparisonPageTopTagline: string;
  comparisonPageHeading: string;
  comparisonPageSubheading: string;
  comparisonPageTags: string[];
}

const DEFAULT_TIMEOUT = 10000;

export async function fetchComparisonPageSettings(
  timeoutMs = DEFAULT_TIMEOUT
): Promise<ComparisonPageSettings> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch(COMPARISON_PAGE_SETTINGS_API, {
      signal: controller.signal,
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      throw new Error(
        `Failed to fetch comparison page settings: ${res.status} ${text}`
      );
    }

    const data = await res.json();
    return {
      comparisonPageStatus: data?.comparisonPageStatus ?? "live",
      comparisonPageTopTagline:
        data?.comparisonPageTopTagline ?? "For Software Comparisons",
      comparisonPageHeading:
        data?.comparisonPageHeading ?? "Software Comparisons",
      comparisonPageSubheading:
        data?.comparisonPageSubheading ??
        "In-depth side-by-side comparisons to help you choose the right tools for your workflow.",
      comparisonPageTags: Array.isArray(data?.comparisonPageTags)
        ? data.comparisonPageTags
        : [],
    };
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") {
      throw new Error(`Request timed out after ${timeoutMs}ms`);
    }
    throw error;
  } finally {
    clearTimeout(timeoutId);
  }
}

export default fetchComparisonPageSettings;


