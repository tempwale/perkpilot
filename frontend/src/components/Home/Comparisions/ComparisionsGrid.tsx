import React from "react";
import ComparisionsCard from "./ComparisionsCard";

const ComparisionsGrid: React.FC = () => {
  const comparisons = [
    {
      app1Name: "Framer",
      app1Icon: "src/assets/images/app-icons/devicon_figma.svg",
      app2Name: "Webflow",
      app2Icon: "src/assets/images/app-icons/devicon_figma.svg",
      title: "Framer Vs Webflow",
      subtitle: "Battle of Best No-Code Dev Tool",
      description:
        "Collaborative power vs. desktop dominance. Which one fits your workflow?",
    },
    {
      app1Name: "Figma",
      app1Icon: "src/assets/images/app-icons/devicon_figma.svg",
      app2Name: "Adobe XD",
      app2Icon: "src/assets/images/app-icons/devicon_figma.svg",
      title: "Figma Vs Adobe XD",
      subtitle: "Design Tool Showdown",
      description:
        "Real-time collaboration meets Adobe's ecosystem. Find your perfect design companion.",
    },
    {
      app1Name: "Notion",
      app1Icon: "src/assets/images/app-icons/devicon_figma.svg",
      app2Name: "Obsidian",
      app2Icon: "src/assets/images/app-icons/devicon_figma.svg",
      title: "Notion Vs Obsidian",
      subtitle: "Knowledge Management Battle",
      description:
        "All-in-one workspace versus powerful note-linking. Which suits your thinking style?",
    },
    {
      app1Name: "Framer",
      app1Icon: "src/assets/images/app-icons/devicon_figma.svg",
      app2Name: "Webflow",
      app2Icon: "src/assets/images/app-icons/devicon_figma.svg",
      title: "Framer Vs Webflow",
      subtitle: "Battle of Best No-Code Dev Tool",
      description:
        "Collaborative power vs. desktop dominance. Which one fits your workflow?",
    },
    {
      app1Name: "Figma",
      app1Icon: "src/assets/images/app-icons/devicon_figma.svg",
      app2Name: "Adobe XD",
      app2Icon: "src/assets/images/app-icons/devicon_figma.svg",
      title: "Figma Vs Adobe XD",
      subtitle: "Design Tool Showdown",
      description:
        "Real-time collaboration meets Adobe's ecosystem. Find your perfect design companion.",
    },
    {
      app1Name: "Notion",
      app1Icon: "src/assets/images/app-icons/devicon_figma.svg",
      app2Name: "Obsidian",
      app2Icon: "src/assets/images/app-icons/devicon_figma.svg",
      title: "Notion Vs Obsidian",
      subtitle: "Knowledge Management Battle",
      description:
        "All-in-one workspace versus powerful note-linking. Which suits your thinking style?",
    },
  ];

  const handleViewComparison = (title: string) => {
    console.log(`View comparison clicked for: ${title}`);
    // Add your navigation logic here
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center items-stretch">
        {comparisons.map((comparison, index) => (
          <div key={index} className="w-full flex">
            <ComparisionsCard
              app1Name={comparison.app1Name}
              app1Icon={comparison.app1Icon}
              app2Name={comparison.app2Name}
              app2Icon={comparison.app2Icon}
              title={comparison.title}
              subtitle={comparison.subtitle}
              description={comparison.description}
              onViewComparison={() => handleViewComparison(comparison.title)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComparisionsGrid;
