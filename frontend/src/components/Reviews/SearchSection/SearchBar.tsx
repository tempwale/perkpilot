import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className || "w-5 h-5 md:w-6 md:h-6"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 22L20 20"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
interface SearchBarProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
  onSuggestionClick?: (suggestion: string) => void;
}

const suggestions = [
  "Top Latest AI Tools",
  "Low Budget Marketing Softwares",
  "Web 3 Design Kit",
  "Micro SaaS Ideas",
  "Free Productive Tools",
  "DYN Resources",
];

const categoryTags = [
  "CRM Softwares",
  "AI Note Takers",
  "Recruiting",
  "Marketing Tools",
  "Project Management",
  "Editors Choice",
  "29 More +",
];

const comparisonTags = [
  "CRM Softwares",
  "AI Note Takers",
  "Recruiting",
  "Marketing Tools",
  "Project Management",
  "Editors Choice",
  "29 More +",
];

const blogTags = [
  "CRM Softwares",
  "AI Note Takers",
  "Recruiting",
  "Marketing Tools",
  "Project Management",
  "Editors Choice",
  "29 More +",
];

function FloatingSearchPanel({
  onTagClick,
  onClose,
}: {
  onTagClick: (tag: string) => void;
  onClose: () => void;
}) {
  return (
    <>
      {/* Overlay to capture clicks */}
      <div className="fixed inset-0 z-[999998]" onClick={onClose} />

      {/* Floating Panel */}
      <div className="absolute top-[calc(100%+0.5rem)] md:top-[calc(100%-4.5rem)] left-1/2 transform -translate-x-1/2 backdrop-blur-md backdrop-filter bg-[rgba(0,0,0,0.04)] border border-[rgba(255,255,255,0.08)] border-solid box-border content-stretch flex flex-col gap-3 md:gap-4 items-start p-4 md:p-6 rounded-2xl md:rounded-[24px] max-w-4xl w-[95vw] md:w-[90vw] z-[999999] max-h-[80vh] overflow-y-auto">
        {/* Categories Section */}
        <div className="content-stretch flex flex-col gap-3 md:gap-4 items-start relative shrink-0 w-full">
          <p className="font-medium leading-6 md:leading-[27px] relative shrink-0 text-base md:text-[18px] text-white w-full whitespace-pre-wrap">
            Categories
          </p>
          <div className="content-center flex flex-wrap gap-2 md:gap-3 items-center relative shrink-0 w-full">
            {categoryTags.map((tag, index) => (
              <button
                key={index}
                onClick={() => onTagClick(tag)}
                className="bg-[rgba(255,255,255,0.04)] border border-[rgba(235,239,245,0.12)] border-solid box-border content-stretch flex gap-2 md:gap-4 items-center justify-center px-3 md:px-4 py-1.5 md:py-2 relative rounded-[100px] shrink-0 hover:bg-[rgba(255,255,255,0.08)] transition-colors"
              >
                <p className="font-medium leading-5 md:leading-[21px] relative shrink-0 text-[#ebeff5] text-xs md:text-sm text-center">
                  {tag}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Comparisons Section */}
        <div className="content-stretch flex flex-col gap-3 md:gap-4 items-start relative shrink-0 w-full">
          <p className="font-medium leading-6 md:leading-[27px] relative shrink-0 text-base md:text-[18px] text-white w-full whitespace-pre-wrap">
            Comparisons
          </p>
          <div className="content-center flex flex-wrap gap-2 md:gap-3 items-center relative shrink-0 w-full">
            {comparisonTags.map((tag, index) => (
              <button
                key={index}
                onClick={() => onTagClick(tag)}
                className="bg-[rgba(255,255,255,0.04)] border border-[rgba(235,239,245,0.12)] border-solid box-border content-stretch flex gap-2 md:gap-4 items-center justify-center px-3 md:px-4 py-1.5 md:py-2 relative rounded-[100px] shrink-0 hover:bg-[rgba(255,255,255,0.08)] transition-colors"
              >
                <p className="font-medium leading-5 md:leading-[21px] relative shrink-0 text-[#ebeff5] text-xs md:text-sm text-center">
                  {tag}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Blogs & Articles Section */}
        <div className="content-stretch flex flex-col gap-3 md:gap-4 items-start relative shrink-0 w-full">
          <p className="font-medium leading-6 md:leading-[27px] relative shrink-0 text-base md:text-[18px] text-white w-full whitespace-pre-wrap">
            Blogs & Articles
          </p>
          <div className="content-center flex flex-wrap gap-2 md:gap-3 items-center relative shrink-0 w-full">
            {blogTags.map((tag, index) => (
              <button
                key={index}
                onClick={() => onTagClick(tag)}
                className="bg-[rgba(255,255,255,0.04)] border border-[rgba(235,239,245,0.12)] border-solid box-border content-stretch flex gap-2 md:gap-4 items-center justify-center px-3 md:px-4 py-1.5 md:py-2 relative rounded-[100px] shrink-0 hover:bg-[rgba(255,255,255,0.08)] transition-colors"
              >
                <p className="font-medium leading-5 md:leading-[21px] relative shrink-0 text-[#ebeff5] text-xs md:text-sm text-center">
                  {tag}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default function SearchBar({
  onSearch,
  placeholder = "Tell us your business idea",
  onSuggestionClick,
}: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [isFloatingPanelOpen, setIsFloatingPanelOpen] = useState(false);
  const searchBarRef = useRef<HTMLDivElement>(null);

  // Close floating panel when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // Close panel if clicking outside the search bar container
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target as Node)
      ) {
        setIsFloatingPanelOpen(false);
      }
    }

    function handleEscapeKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsFloatingPanelOpen(false);
      }
    }

    if (isFloatingPanelOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isFloatingPanelOpen]);

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query);
    }
    setIsFloatingPanelOpen(false);
    console.log("Searching for:", query);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    setIsFloatingPanelOpen(false);
    if (onSuggestionClick) {
      onSuggestionClick(suggestion);
    }
    if (onSearch) {
      onSearch(suggestion);
    }
  };

  const handleTagClick = (tag: string) => {
    setQuery(tag);
    setIsFloatingPanelOpen(false);
    if (onSearch) {
      onSearch(tag);
    }
  };

  const handleInputClick = () => {
    setIsFloatingPanelOpen(true);
  };

  return (
    <motion.div
      className="w-full mx-auto py-4 md:py-8 flex flex-col items-center relative px-4 md:px-0"
      ref={searchBarRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Search Input */}
      <div
        className="backdrop-blur-[20px] backdrop-filter bg-[rgba(255,255,255,0.04)] border-[1px] border-solid border-[rgba(255,255,255,0.16)] relative rounded-[100px] w-full max-w-4xl h-12 md:h-[64px] mb-4 md:mb-6"
        style={{
          boxShadow:
            "0 1px 4px 0 rgba(0, 0, 0, 0.2), 0 1px 4px 0 rgba(0, 0, 0, 0.1)",
        }}
        data-name="Input"
        data-node-id="1:1521"
      >
        <div className="box-border flex flex-wrap gap-3 md:gap-6 items-center justify-between content-center overflow-clip px-3 md:px-4 py-1.5 md:py-2 relative rounded-[inherit] w-full h-full">
          {/* Search Icon and Input */}
          <div className="absolute content-stretch flex gap-2 md:gap-3 items-center left-3 md:left-4 top-1/2 translate-y-[-50%] right-[80px] md:right-[140px]">
            <div
              className="relative shrink-0 w-5 h-5 md:w-6 md:h-6 flex-none"
              data-name="search-normal"
            >
              <SearchIcon className="w-full h-full" />
            </div>
            <div className="content-stretch flex items-center relative shrink-0 flex-1 min-w-0">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                onClick={handleInputClick}
                placeholder={placeholder}
                className="bg-transparent border-none outline-none w-full placeholder:text-[#D4D4D8] placeholder:capitalize text-sm md:text-base"
                style={{
                  color: "var(--Primary-200, #D4D4D8)",
                  fontFamily: '"Plus Jakarta Sans"',
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "1.5",
                  textTransform: "capitalize",
                }}
              />
            </div>
          </div>

          {/* Search Button */}
          <button
            onClick={handleSearch}
            className="absolute bg-neutral-50 box-border content-stretch flex gap-1.5 md:gap-3 h-9 md:h-12 items-center justify-center px-3 md:px-12 py-1.5 md:py-3 right-1.5 md:right-2 rounded-[100px] top-1/2 translate-y-[-50%] hover:bg-gradient-to-b hover:from-[#501bd6] hover:to-[#7f57e2] transition-all duration-300 group"
            data-name="Buttons/main"
          >
            <p className="font-medium leading-4 md:leading-6 relative shrink-0 text-xs md:text-base text-center text-zinc-950 group-hover:text-white transition-colors whitespace-nowrap">
              Search
            </p>
          </button>
        </div>
      </div>

      {/* Floating Panel */}
      {isFloatingPanelOpen && (
        <FloatingSearchPanel
          onTagClick={handleTagClick}
          onClose={() => setIsFloatingPanelOpen(false)}
        />
      )}

      {/* Suggestion Tags */}
      <div
        className="content-stretch flex gap-2 md:gap-4 items-start relative w-full overflow-x-auto md:overflow-x-visible justify-start md:justify-center px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        data-node-id="234:516"
      >
        {suggestions.map((suggestion, index) => (
          <button
            key={index}
            onClick={() => handleSuggestionClick(suggestion)}
            className="bg-[rgba(255,255,255,0.08)] box-border content-stretch flex gap-1.5 md:gap-2 items-center justify-center px-3 md:px-4 py-2 md:py-2.5 relative rounded-[100px] shrink-0 hover:bg-[rgba(255,255,255,0.12)] transition-colors text-center"
            data-name="Buttons/main"
          >
            <p className="font-medium leading-4 md:leading-normal not-italic relative shrink-0 text-[10px] md:text-xs text-center text-neutral-50 whitespace-nowrap">
              {suggestion}
            </p>
          </button>
        ))}
      </div>
    </motion.div>
  );
}
