import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ComparisionsCard from "./ComparisionsCard";
import { fetchHomePage } from "../../../hooks/useHomePage";
import type { Comparison } from "../../../hooks/useHomePage";
import deviconFigma from "../../../assets/images/app-icons/devicon_figma.svg";
import deviconFramermotion from "../../../assets/images/app-icons/devicon_framermotion.svg";
import deviconSlack from "../../../assets/images/app-icons/devicon_slack.svg";
import logosAirtable from "../../../assets/images/app-icons/logos_airtable.svg";
import skillIconsWebflow from "../../../assets/images/app-icons/skill-icons_webflow.svg";

// Default mock data as fallback
const defaultComparisons: Comparison[] = [
  {
    _id: "default-1",
    heroHeading: "Framer Vs Webflow",
    sectionHeadline: "Battle of Best No-Code Dev Tool",
    heroBody: "Collaborative power vs. desktop dominance. Which one fits your workflow?",
    toolsMentioned: [
      { toolName: "Framer", toolLogo: deviconFramermotion },
      { toolName: "Webflow", toolLogo: skillIconsWebflow },
    ],
  },
  {
    _id: "default-2",
    heroHeading: "Figma Vs Adobe XD",
    sectionHeadline: "Design Tool Showdown",
    heroBody: "Real-time collaboration meets Adobe's ecosystem. Find your perfect design companion.",
    toolsMentioned: [
      { toolName: "Figma", toolLogo: deviconFigma },
      { toolName: "Adobe XD", toolLogo: deviconFigma },
    ],
  },
  {
    _id: "default-3",
    heroHeading: "Notion Vs Obsidian",
    sectionHeadline: "Knowledge Management Battle",
    heroBody: "All-in-one workspace versus powerful note-linking. Which suits your thinking style?",
    toolsMentioned: [
      { toolName: "Notion", toolLogo: logosAirtable },
      { toolName: "Obsidian", toolLogo: deviconSlack },
    ],
  },
  {
    _id: "default-4",
    heroHeading: "Framer Vs Webflow",
    sectionHeadline: "Battle of Best No-Code Dev Tool",
    heroBody: "Collaborative power vs. desktop dominance. Which one fits your workflow?",
    toolsMentioned: [
      { toolName: "Framer", toolLogo: deviconFramermotion },
      { toolName: "Webflow", toolLogo: skillIconsWebflow },
    ],
  },
  {
    _id: "default-5",
    heroHeading: "Figma Vs Adobe XD",
    sectionHeadline: "Design Tool Showdown",
    heroBody: "Real-time collaboration meets Adobe's ecosystem. Find your perfect design companion.",
    toolsMentioned: [
      { toolName: "Figma", toolLogo: deviconFigma },
      { toolName: "Adobe XD", toolLogo: deviconFigma },
    ],
  },
  {
    _id: "default-6",
    heroHeading: "Notion Vs Obsidian",
    sectionHeadline: "Knowledge Management Battle",
    heroBody: "All-in-one workspace versus powerful note-linking. Which suits your thinking style?",
    toolsMentioned: [
      { toolName: "Notion", toolLogo: logosAirtable },
      { toolName: "Obsidian", toolLogo: deviconSlack },
    ],
  },
];

const ComparisionsGrid: React.FC = () => {
  const navigate = useNavigate();
  const [comparisons, setComparisons] = useState<Comparison[]>(defaultComparisons);

  useEffect(() => {
    const loadComparisons = async () => {
      try {
        const homepageData = await fetchHomePage();
        if (homepageData.softwareComparisons?.comparisons && homepageData.softwareComparisons.comparisons.length > 0) {
          const uniqueComparisons = homepageData.softwareComparisons.comparisons.filter((comparison, index, self) =>
            index === self.findIndex((c) => c._id === comparison._id)
          );
          setComparisons(uniqueComparisons);
        }
      } catch {
        // On error, keep showing default data
      }
    };

    void loadComparisons();
  }, []);

  const handleViewComparison = (comparisonId: string) => {
    navigate(`/comparison/${comparisonId}`);
  };

  return (
    <div className="w-full lg: py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center items-stretch">
        {comparisons.map((comparison, index) => (
          <div key={`${comparison._id}-${index}`} className="w-full flex">
            <ComparisionsCard
              app1Name={comparison.toolsMentioned?.[0]?.toolName || "Tool 1"}
              app1Icon={comparison.toolsMentioned?.[0]?.toolLogo || ""}
              app2Name={comparison.toolsMentioned?.[1]?.toolName || "Tool 2"}
              app2Icon={comparison.toolsMentioned?.[1]?.toolLogo || ""}
              title={comparison.heroHeading}
              subtitle={comparison.sectionHeadline || ""}
              description={comparison.heroBody || ""}
              onViewComparison={() => handleViewComparison(comparison._id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComparisionsGrid;
