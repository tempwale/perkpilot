import { useMemo, useState } from "react";
import Pagination from "./Pagination";
import ToolsCard from "./ToolsCard";

export interface ToolItem {
  id: string | number;
  title: string;
  description?: string;
  badgeLabel?: string;
  tags?: string[];
  buttonText?: string;
}

interface ToolsGridProps {
  tools?: ToolItem[];
}

export default function ToolsGrid({
  tools = [
    {
      id: 1,
      title: "Web Scraper",
      description: "Extract data from any website with CSS selectors.",
      badgeLabel: "Popular",
      tags: ["CSS", "Web", "Data"],
      buttonText: "Start Extracting",
    },
    {
      id: 2,
      title: "SEO Auditor",
      description: "Analyze pages and suggest SEO improvements.",
      badgeLabel: "New",
      tags: ["SEO", "Audit"],
      buttonText: "Run Audit",
    },
    {
      id: 3,
      title: "Content Generator",
      description: "Generate marketing content using AI.",
      badgeLabel: "AI",
      tags: ["AI", "Content"],
      buttonText: "Generate",
    },
    {
      id: 4,
      title: "Analytics Dashboard",
      description: "Visualize key metrics from your tools.",
      badgeLabel: "Pro",
      tags: ["Analytics", "Dashboard"],
      buttonText: "View Dashboard",
    },
    {
      id: 5,
      title: "Email Extractor",
      description: "Collect and validate emails from websites and documents.",
      badgeLabel: "Utility",
      tags: ["Email", "Validation", "Data"],
      buttonText: "Extract Emails",
    },
    {
      id: 6,
      title: "Image Downloader",
      description: "Bulk download and organize images from web pages.",
      badgeLabel: "Popular",
      tags: ["Images", "Web", "Automation"],
      buttonText: "Download Images",
    },
    {
      id: 7,
      title: "Proxy Rotator",
      description: "Automatically rotate proxies to bypass IP bans.",
      badgeLabel: "Pro",
      tags: ["Proxy", "Network", "Security"],
      buttonText: "Activate Rotation",
    },
    {
      id: 8,
      title: "Form Filler",
      description: "Autofill online forms using stored templates.",
      badgeLabel: "Beta",
      tags: ["Automation", "Forms", "Productivity"],
      buttonText: "Fill Forms",
    },
    {
      id: 9,
      title: "Keyword Tracker",
      description: "Monitor keyword rankings across multiple search engines.",
      badgeLabel: "SEO",
      tags: ["Keywords", "Search", "Tracking"],
      buttonText: "Track Keywords",
    },
    {
      id: 10,
      title: "Site Monitor",
      description: "Get instant alerts for downtime and performance issues.",
      badgeLabel: "Alert",
      tags: ["Monitoring", "Performance", "Uptime"],
      buttonText: "Start Monitoring",
    },
    {
      id: 11,
      title: "API Connector",
      description: "Integrate and test REST and GraphQL APIs easily.",
      badgeLabel: "Dev Tool",
      tags: ["API", "Integration", "Testing"],
      buttonText: "Connect API",
    },
    {
      id: 12,
      title: "Data Cleaner",
      description: "Remove duplicates, fix formatting, and normalize datasets.",
      badgeLabel: "AI",
      tags: ["Data", "Cleanup", "AI"],
      buttonText: "Clean Data",
    },
  ],
}: ToolsGridProps) {
  // Simple client-side pagination
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;

  const totalPages = Math.max(1, Math.ceil(tools.length / pageSize));
  const showPagination = totalPages > 1;

  const visibleTools = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return tools.slice(start, start + pageSize);
  }, [tools, currentPage]);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {visibleTools.map((t) => (
          <div key={t.id} className="flex justify-center">
            <ToolsCard
              title={t.title}
              description={t.description}
              badgeLabel={t.badgeLabel}
              tags={t.tags}
              buttonText={t.buttonText}
            />
          </div>
        ))}
      </div>

      {/* Pagination */}
      {showPagination && totalPages > 1 && (
        <div className="mt-8 flex justify-center">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
}
