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

  const hasHTML = displayOverview && (
    /<[a-z][\s\S]*>/i.test(displayOverview) ||
    /<[a-z]+[^>]*>/i.test(displayOverview) ||
    displayOverview.includes('</') ||
    displayOverview.includes('/>')
  );

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
        ) : hasHTML ? (
          <div
            className="relative shrink-0 w-full prose prose-invert max-w-none break-words"
            data-node-id="250:2540"
            dangerouslySetInnerHTML={{ __html: displayOverview }}
            style={{
              wordBreak: "break-word",
              color: "#a1a1aa",
              fontSize: "16px",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              lineHeight: "1.5",
            }}
          />
        ) : (
          <div
            className="font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-zinc-400 w-full whitespace-pre-line"
            data-node-id="250:2540"
          >
            {displayOverview}
          </div>
        )}
      </div>
      <style>{`
        /* Base prose styles - matches editor base styles */
        .prose {
          color: #a1a1aa;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 16px;
          line-height: 1.5;
          white-space: normal;
        }
        
        /* Ensure proper rendering of all HTML elements */
        .prose * {
          box-sizing: border-box;
        }
        
        /* Headings */
        .prose h1 {
          font-size: 2em;
          font-weight: bold;
          margin: 0.67em 0;
          color: #fafafa;
          line-height: 1.2;
        }
        .prose h2 {
          font-size: 1.5em;
          font-weight: bold;
          margin: 0.83em 0;
          color: #fafafa;
          line-height: 1.3;
        }
        .prose h3 {
          font-size: 1.17em;
          font-weight: bold;
          margin: 1em 0;
          color: #fafafa;
          line-height: 1.4;
        }
        .prose h4 {
          font-size: 1em;
          font-weight: bold;
          margin: 1.33em 0;
          color: #fafafa;
        }
        .prose h5 {
          font-size: 0.83em;
          font-weight: bold;
          margin: 1.67em 0;
          color: #fafafa;
        }
        .prose h6 {
          font-size: 0.67em;
          font-weight: bold;
          margin: 2.33em 0;
          color: #fafafa;
        }
        
        /* Paragraphs */
        .prose p {
          margin: 1em 0;
          color: #a1a1aa;
        }
        
        /* Text formatting */
        .prose strong,
        .prose b {
          font-weight: bold;
          color: #fafafa;
        }
        .prose em,
        .prose i {
          font-style: italic;
        }
        .prose u {
          text-decoration: underline;
        }
        .prose s,
        .prose strike,
        .prose del {
          text-decoration: line-through;
        }
        .prose sub {
          font-size: 0.8em;
          vertical-align: sub;
        }
        .prose sup {
          font-size: 0.8em;
          vertical-align: super;
        }
        
        /* Lists - Enhanced styling for proper rendering */
        .prose ul,
        .prose ol {
          padding-left: 2em;
          margin: 1em 0;
          color: #a1a1aa;
          list-style-position: outside;
          display: block;
        }
        .prose ul {
          list-style-type: disc;
        }
        .prose ol {
          list-style-type: decimal;
        }
        .prose li {
          margin: 0.5em 0;
          padding-left: 0.5em;
          color: #a1a1aa;
          display: list-item;
          list-style-position: outside;
        }
        /* Nested lists */
        .prose ul ul,
        .prose ol ol,
        .prose ul ol,
        .prose ol ul {
          margin: 0.5em 0;
          padding-left: 2em;
        }
        .prose ul ul {
          list-style-type: circle;
        }
        .prose ul ul ul {
          list-style-type: square;
        }
        .prose ol ol {
          list-style-type: lower-alpha;
        }
        .prose ol ol ol {
          list-style-type: lower-roman;
        }
        .prose li::marker {
          color: #a1a1aa;
        }
        .prose li:empty {
          min-height: 1.5em;
        }
        .prose li p {
          margin: 0.5em 0;
          display: inline;
        }
        .prose li p:first-child {
          margin-top: 0;
        }
        .prose li p:last-child {
          margin-bottom: 0;
        }
        
        /* Text alignment */
        .prose [style*="text-align: left"],
        .prose [align="left"] {
          text-align: left;
        }
        .prose [style*="text-align: center"],
        .prose [align="center"] {
          text-align: center;
        }
        .prose [style*="text-align: right"],
        .prose [align="right"] {
          text-align: right;
        }
        .prose [style*="text-align: justify"],
        .prose [align="justify"] {
          text-align: justify;
        }
        
        /* Links */
        .prose a {
          color: #737eff;
          text-decoration: underline;
        }
        .prose a:hover {
          opacity: 0.8;
        }
        
        /* Images - Enhanced to match editor */
        .prose img {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
          margin: 16px 0;
          display: block;
        }
        .prose img[style*="width"],
        .prose img[style*="height"] {
          /* Preserve editor-set dimensions */
        }
        .prose .image-resize-wrapper {
          margin: 16px 0;
          display: block;
          position: relative;
          max-width: 100%;
        }
        .prose .image-resize-wrapper img {
          margin: 0;
          display: block;
        }
        .prose .image-resize-wrapper .resize-handle {
          display: none !important;
        }
        
        /* YouTube embeds - Enhanced to match editor */
        .prose [data-youtube-wrapper] {
          width: 100%;
          max-width: 800px;
          margin: 20px auto;
          position: relative;
          display: flex;
          justify-content: center;
          padding: 0;
          outline: none !important;
          border: none !important;
        }
        .prose [data-youtube-embed] {
          width: 800px;
          max-width: 100%;
          margin: 0 auto;
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
          border-radius: 8px;
          overflow: hidden;
          background-color: #000;
          outline: none !important;
          border: none !important;
        }
        .prose [data-youtube-embed] iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: none;
          pointer-events: auto;
        }
        .prose [data-youtube-embed][style*="width"],
        .prose [data-youtube-embed][style*="height"] {
          padding-bottom: 0;
          height: auto;
        }
        .prose [data-youtube-embed][style*="width"] iframe {
          position: relative;
        }
        .prose .iframe-resize-handle {
          display: none !important;
        }
        .prose .resizable-iframe {
          outline: none !important;
          border: none !important;
        }
        .prose [data-youtube-wrapper] > div:not([data-youtube-embed]) {
          display: none !important;
        }
        
        /* Blockquotes */
        .prose blockquote {
          margin: 1em 0;
          padding-left: 1em;
          border-left: 3px solid #737eff;
          color: #a1a1aa;
          font-style: italic;
        }
        
        /* Code */
        .prose code {
          background-color: rgba(255, 255, 255, 0.1);
          padding: 2px 6px;
          border-radius: 4px;
          font-family: monospace;
          font-size: 0.9em;
        }
        .prose pre {
          background-color: rgba(255, 255, 255, 0.1);
          padding: 1em;
          border-radius: 8px;
          overflow-x: auto;
          margin: 1em 0;
        }
        .prose pre code {
          background: none;
          padding: 0;
        }
        
        /* Horizontal rule */
        .prose hr {
          border: none;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          margin: 2em 0;
        }
        
        /* Preserve inline styles from editor */
        .prose [style*="font-size"],
        .prose [style*="fontSize"] {
          /* Inline styles will override base font-size */
        }
        .prose div,
        .prose span {
          /* Allow inline styles to work */
        }
        
        /* Fix for content formatting */
        .prose br {
          display: block;
          margin: 0.5em 0;
          content: "";
        }
        .prose p + ul,
        .prose p + ol,
        .prose ul + p,
        .prose ol + p {
          margin-top: 1em;
        }
        .prose {
          white-space: normal;
          word-wrap: break-word;
          overflow-wrap: break-word;
        }
        .prose li > * {
          display: inline;
        }
        .prose li > *:first-child {
          display: inline;
        }
        .prose li strong,
        .prose li b,
        .prose li em,
        .prose li i,
        .prose li u,
        .prose li a {
          display: inline;
        }
        .prose li p {
          margin: 0.25em 0;
          display: block;
        }
        .prose li p:first-child {
          margin-top: 0;
          display: inline;
        }
        .prose li p:last-child {
          margin-bottom: 0;
        }
        .prose li p:only-child {
          display: inline;
        }
        .prose strong em,
        .prose em strong,
        .prose b i,
        .prose i b {
          font-weight: bold;
          font-style: italic;
        }
        .prose u strong,
        .prose strong u {
          text-decoration: underline;
          font-weight: bold;
        }
        .prose p:empty {
          min-height: 1em;
        }
        .prose p:empty::before {
          content: "\\200B";
        }
        .prose p br {
          display: block;
          margin: 0.5em 0;
          content: "";
        }
        .prose div[style],
        .prose span[style] {
          /* Preserve all inline styles */
        }
        .prose {
          direction: ltr;
          text-align: left;
        }
        .prose [dir="rtl"] {
          direction: rtl;
          text-align: right;
        }
        .prose {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </div>
  );
}
