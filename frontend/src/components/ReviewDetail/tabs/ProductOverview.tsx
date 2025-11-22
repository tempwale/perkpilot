import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { REVIEWS_API } from "../../../config/backend";

interface ProductOverviewProps {
  overview?: string | { heading?: string; content?: string | string[] };
  heading?: string;
}

interface OverviewData {
  heading?: string;
  content?: string | string[];
}

interface ReviewResponse {
  overview?: string | OverviewData;
  description?: string;
  productName?: string;
  productType?: string;
}


const parseOverview = (overview: string | OverviewData | undefined): { heading: string; content: string } => {
  if (!overview) {
    return { heading: "Product Overview", content: "" };
  }

  if (typeof overview === "object" && overview !== null) {
    const content = Array.isArray(overview.content) 
      ? overview.content.join("\n\n") 
      : overview.content || "";
    return {
      heading: overview.heading || "Product Overview",
      content,
    };
  }

  if (typeof overview === "string") {
    try {
      const parsed = JSON.parse(overview) as OverviewData;
      if (parsed && typeof parsed === "object") {
        const content = Array.isArray(parsed.content) 
          ? parsed.content.join("\n\n") 
          : parsed.content || "";
        return {
          heading: parsed.heading || "Product Overview",
          content,
        };
      }
    } catch {
      // Not JSON
    }
    return {
      heading: "Product Overview",
      content: overview,
    };
  }

  return { heading: "Product Overview", content: "" };
};

export default function ProductOverview({ 
  overview: overviewProp, 
  heading: headingProp 
}: ProductOverviewProps) {
  const { id } = useParams<{ id: string }>();
  const parsedProp = parseOverview(overviewProp);
  const [overview, setOverview] = useState<string>(parsedProp.content);
  const [heading, setHeading] = useState<string>(headingProp || parsedProp.heading);
  const [loading, setLoading] = useState(!overviewProp);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (overviewProp) {
      const parsed = parseOverview(overviewProp);
      setOverview(parsed.content);
      setHeading(headingProp || parsed.heading);
      setLoading(false);
      return;
    }

    if (!id) {
      setError("No review ID found");
      setLoading(false);
      return;
    }

    const fetchOverview = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(`${REVIEWS_API}/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch review: ${response.statusText}`);
        }

        const data = (await response.json()) as ReviewResponse;
        const parsed = parseOverview(data.overview);
        setOverview(parsed.content || data.description || "");
        if (!headingProp) {
          setHeading(parsed.heading || (data.productName ? `${data.productName} Overview` : "Product Overview"));
        }
      } catch (err) {
        console.error("Error fetching overview:", err);
        setError(err instanceof Error ? err.message : "Failed to fetch overview");
      } finally {
        setLoading(false);
      }
    };

    void fetchOverview();
  }, [id, overviewProp, headingProp]);

  const defaultOverview = `Accelerate work with AI and automation, share and search knowledge across your company, and connect and engage everyone with flexible tools that keep work moving forward.

Slack is the AI productivity platform that helps teams work faster with AI and automation, share and find everything they need, and bring the right people together to accomplish anything.`;

  const displayOverview = overview || (error ? "" : defaultOverview);

  return (
    <div
      className="bg-zinc-900 border border-[#2e2e2f] border-solid box-border content-stretch flex flex-col gap-[24px] min-h-[192px] items-start p-[24px] relative rounded-[24px] shrink-0 w-full"
      data-node-id="250:2536"
    >
      <div
        className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full"
        data-node-id="250:2537"
      >
        <div
          className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full"
          data-node-id="250:2538"
        >
          <h3
            className="font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium leading-[32px] relative shrink-0 text-[24px] text-neutral-50"
            data-node-id="250:2539"
          >
            {heading}
          </h3>
        </div>
        {loading ? (
          <div className="font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-zinc-400 w-full">
            Loading overview...
          </div>
        ) : error ? (
          <div className="font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-red-400 w-full">
            {error}
          </div>
        ) : (
          <div
            className="font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-zinc-400 w-full whitespace-pre-line"
            data-node-id="250:2540"
          >
            {displayOverview}
          </div>
        )}
      </div>
    </div>
  );
}
