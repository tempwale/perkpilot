import React, { useState, useEffect } from "react";
import ComparisionsCard from "./ComparisionsCard";
import Pagination from "./Pagination";
import { motion } from "framer-motion";

const comparisonsData = [
  {
    app1Logo: undefined,
    app2Logo: undefined,
    title: "Notion vs Obsidian",
    description:
      "Deep dive into two of the most popular note-taking apps, comparing features, pricing, and use cases.",
    tags: ["Productivity", "NotesTaking", "Work"],
  },
  {
    app1Logo: undefined,
    app2Logo: undefined,
    title: "Slack vs Teams",
    description:
      "Which team chat app is best for your workflow? We compare features, integrations, and pricing.",
    tags: ["Communication", "Collaboration", "Teams"],
  },
  {
    app1Logo: undefined,
    app2Logo: undefined,
    title: "Figma vs Sketch",
    description:
      "UI design showdown: real-time collaboration vs. native performance.",
    tags: ["Design", "UI/UX", "Collaboration"],
  },
  {
    app1Logo: undefined,
    app2Logo: undefined,
    title: "Airtable vs Google Sheets",
    description:
      "Database power or spreadsheet simplicity? Find out which is right for you.",
    tags: ["Database", "Productivity", "SaaS"],
  },
  {
    app1Logo: undefined,
    app2Logo: undefined,
    title: "Webflow vs WordPress",
    description:
      "No-code web design vs. classic CMS. Which platform should you choose?",
    tags: ["Web Design", "CMS", "No-Code"],
  },
  {
    app1Logo: undefined,
    app2Logo: undefined,
    title: "Zoom vs Google Meet",
    description:
      "Video conferencing face-off: features, reliability, and integrations compared.",
    tags: ["Video", "Remote Work", "Meetings"],
  },
  {
    app1Logo: undefined,
    app2Logo: undefined,
    title: "Trello vs Asana",
    description:
      "Project management tools battle it out—Kanban boards vs. task lists and timelines.",
    tags: ["Project Management", "Productivity", "Teams"],
  },
  {
    app1Logo: undefined,
    app2Logo: undefined,
    title: "Canva vs Adobe Express",
    description:
      "Design made easy: which tool gives you more creative freedom and usability?",
    tags: ["Design", "Graphics", "Marketing"],
  },
  {
    app1Logo: undefined,
    app2Logo: undefined,
    title: "Dropbox vs Google Drive",
    description:
      "Cloud storage giants compared—security, pricing, and integrations head-to-head.",
    tags: ["Cloud", "Storage", "Collaboration"],
  },
  {
    app1Logo: undefined,
    app2Logo: undefined,
    title: "QuickBooks vs FreshBooks",
    description:
      "Which accounting software best fits your small business needs?",
    tags: ["Finance", "Accounting", "Business"],
  },
  {
    app1Logo: undefined,
    app2Logo: undefined,
    title: "Shopify vs WooCommerce",
    description:
      "E-commerce platforms compared: hosted simplicity vs. WordPress flexibility.",
    tags: ["E-Commerce", "Web Design", "SaaS"],
  },
  {
    app1Logo: undefined,
    app2Logo: undefined,
    title: "Zapier vs Make (Integromat)",
    description:
      "Automation platforms face off: speed, reliability, and integration depth.",
    tags: ["Automation", "Productivity", "APIs"],
  },
  {
    app1Logo: undefined,
    app2Logo: undefined,
    title: "Monday.com vs ClickUp",
    description:
      "All-in-one productivity platforms compared—features, UI, and workflow customization.",
    tags: ["Teams", "Project Management", "Productivity"],
  },
  {
    app1Logo: undefined,
    app2Logo: undefined,
    title: "GitHub vs GitLab",
    description:
      "Code hosting and collaboration showdown—best CI/CD, pricing, and dev tools.",
    tags: ["Development", "DevOps", "Collaboration"],
  },
  {
    app1Logo: undefined,
    app2Logo: undefined,
    title: "Spotify vs Apple Music",
    description:
      "Music streaming services compared: catalog, recommendations, and sound quality.",
    tags: ["Music", "Streaming", "Entertainment"],
  },
  {
    app1Logo: undefined,
    app2Logo: undefined,
    title: "ChatGPT vs Gemini",
    description:
      "AI chat assistants go head-to-head: creativity, accuracy, and usability.",
    tags: ["AI", "Productivity", "Chatbots"],
  },
  {
    app1Logo: undefined,
    app2Logo: undefined,
    title: "Calendly vs Google Calendar",
    description:
      "Simplify scheduling—smart automation vs. built-in convenience.",
    tags: ["Scheduling", "Productivity", "Business"],
  },
  {
    app1Logo: undefined,
    app2Logo: undefined,
    title: "Miro vs FigJam",
    description:
      "Collaborative whiteboards for teams—brainstorming, design, and remote collaboration.",
    tags: ["Collaboration", "Design", "Remote Work"],
  },
  {
    app1Logo: undefined,
    app2Logo: undefined,
    title: "Linear vs Jira",
    description:
      "Issue tracking and agile project management compared—speed vs. flexibility.",
    tags: ["Development", "Agile", "Teams"],
  },
  {
    app1Logo: undefined,
    app2Logo: undefined,
    title: "Grammarly vs ProWritingAid",
    description:
      "Writing assistants compared—AI grammar help vs. deep stylistic analysis.",
    tags: ["Writing", "AI", "Productivity"],
  },
];

const ComparisionsGrid: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const showPagination = true;

  // Responsive check
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Reset to page 1 when switching between mobile/desktop
  useEffect(() => {
    setCurrentPage(1);
  }, [isMobile]);

  // 3 rows per page: 6 cards desktop, 3 cards mobile
  const itemsPerPage = isMobile ? 3 : 6;
  const totalPages = Math.ceil(comparisonsData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayComparisons = showPagination
    ? comparisonsData.slice(startIndex, endIndex)
    : comparisonsData;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full flex flex-col items-center gap-8 pb-20 px-5">
      {/* Comparisons Cards Grid with animation */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {displayComparisons.map((comparison, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.07, ease: "easeOut" }}
          >
            <ComparisionsCard
              {...comparison}
              id={`comparison-${startIndex + idx + 1}`}
            />
          </motion.div>
        ))}
      </motion.div>
      {/* Pagination */}
      {showPagination && totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default ComparisionsGrid;
