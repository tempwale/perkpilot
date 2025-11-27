import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

function SearchIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M22 22L20 20"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
interface SearchBarProps {
  onSearch?: (query: string) => void;
  onFilterChange?: (filter: string) => void;
  activeFilter?: string;
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
  "All",
  "CRM Softwares",
  "AI Note Takers",
  "Recruiting",
  "Marketing Tools",
  "Project Management",
  "Editors Choice",
];

const comparisonTags = [
  "All",
  "CRM Softwares",
  "AI Note Takers",
  "Recruiting",
  "Marketing Tools",
  "Project Management",
  "Editors Choice",
];

const blogTags = [
  "All",
  "CRM Softwares",
  "AI Note Takers",
  "Recruiting",
  "Marketing Tools",
  "Project Management",
  "Editors Choice",
];

function FloatingSearchPanel({
  onTagClick,
  onClose,
  activeFilter,
}: {
  onTagClick: (tag: string) => void;
  onClose: () => void;
  activeFilter?: string;
}) {
  return (
    <>
      {/* Overlay to capture clicks */}
      <div className="fixed inset-0 z-[999998]" onClick={onClose} />

      {/* Floating Panel */}
      <div className="absolute top-[calc(100%-4.5rem)] left-1/2 transform -translate-x-1/2 backdrop-blur-md backdrop-filter bg-[rgba(0,0,0,0.04)] border border-[rgba(255,255,255,0.08)] border-solid box-border content-stretch flex flex-col gap-[16px] items-start p-[24px] rounded-[24px] max-w-4xl w-[90vw] z-[999999]">
        {/* Categories Section */}
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <p className="font-medium leading-[27px] relative shrink-0 text-[18px] text-white w-full whitespace-pre-wrap">
            Categories
          </p>
          <div className="content-center flex flex-wrap gap-[13px] items-center relative shrink-0 w-full">
            {categoryTags.map((tag, index) => {
              const isActive = activeFilter === tag;
              return (
                <button
                  key={index}
                  onClick={() => onTagClick(tag)}
                  className={`border border-solid box-border content-stretch flex gap-[16px] items-center justify-center px-[16px] py-[8px] relative rounded-[100px] shrink-0 transition-colors ${
                    isActive
                      ? 'bg-gradient-to-b from-[#501bd6] to-[#7f57e2] border-[rgba(80,27,214,0.3)]'
                      : 'bg-[rgba(255,255,255,0.04)] border-[rgba(235,239,245,0.12)] hover:bg-[rgba(255,255,255,0.08)]'
                  }`}
                >
                  <p className="font-medium leading-[21px] relative shrink-0 text-[#ebeff5] text-[14px] text-center">
                    {tag}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Comparisons Section */}
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <p className="font-medium leading-[27px] relative shrink-0 text-[18px] text-white w-full whitespace-pre-wrap">
            Comparisons
          </p>
          <div className="content-center flex flex-wrap gap-[13px] items-center relative shrink-0 w-full">
            {comparisonTags.map((tag, index) => {
              const isActive = activeFilter === tag;
              return (
                <button
                  key={index}
                  onClick={() => onTagClick(tag)}
                  className={`border border-solid box-border content-stretch flex gap-[16px] items-center justify-center px-[16px] py-[8px] relative rounded-[100px] shrink-0 transition-colors ${
                    isActive
                      ? 'bg-gradient-to-b from-[#501bd6] to-[#7f57e2] border-[rgba(80,27,214,0.3)]'
                      : 'bg-[rgba(255,255,255,0.04)] border-[rgba(235,239,245,0.12)] hover:bg-[rgba(255,255,255,0.08)]'
                  }`}
                >
                  <p className="font-medium leading-[21px] relative shrink-0 text-[#ebeff5] text-[14px] text-center">
                    {tag}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Blogs & Articles Section */}
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <p className="font-medium leading-[27px] relative shrink-0 text-[18px] text-white w-full whitespace-pre-wrap">
            Blogs & Articles
          </p>
          <div className="content-center flex flex-wrap gap-[13px] items-center relative shrink-0 w-full">
            {blogTags.map((tag, index) => {
              const isActive = activeFilter === tag;
              return (
                <button
                  key={index}
                  onClick={() => onTagClick(tag)}
                  className={`border border-solid box-border content-stretch flex gap-[16px] items-center justify-center px-[16px] py-[8px] relative rounded-[100px] shrink-0 transition-colors ${
                    isActive
                      ? 'bg-gradient-to-b from-[#501bd6] to-[#7f57e2] border-[rgba(80,27,214,0.3)]'
                      : 'bg-[rgba(255,255,255,0.04)] border-[rgba(235,239,245,0.12)] hover:bg-[rgba(255,255,255,0.08)]'
                  }`}
                >
                  <p className="font-medium leading-[21px] relative shrink-0 text-[#ebeff5] text-[14px] text-center">
                    {tag}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default function SearchBar({
  onSearch,
  onFilterChange,
  activeFilter = "All",
  placeholder = "Tell us your business idea",
  onSuggestionClick,
}: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [isFloatingPanelOpen, setIsFloatingPanelOpen] = useState(false);
  const searchBarRef = useRef<HTMLDivElement>(null);

  // Live search - trigger search as user types
  useEffect(() => {
    if (onSearch) {
      onSearch(query);
    }
  }, [query, onSearch]);

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
    setIsFloatingPanelOpen(false);
    if (onFilterChange) {
      onFilterChange(tag);
    }
  };

  const handleInputClick = () => {
    setIsFloatingPanelOpen(true);
  };

  return (
    <motion.div
      className="w-full mx-auto py-8 flex flex-col items-center relative"
      ref={searchBarRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Search Input */}
      <div
        className="backdrop-blur-[20px] backdrop-filter bg-[rgba(255,255,255,0.04)] border-[1px] border-solid border-[rgba(255,255,255,0.16)] relative rounded-[100px] w-full max-w-4xl h-[64px] mb-6"
        style={{
          boxShadow:
            "0 1px 4px 0 rgba(0, 0, 0, 0.2), 0 1px 4px 0 rgba(0, 0, 0, 0.1)",
        }}
        data-name="Input"
        data-node-id="1:1521"
      >
        <div className="box-border flex flex-wrap gap-[24px] items-center justify-between content-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit] w-full h-full">
          {/* Search Icon and Input */}
          <div className="absolute content-stretch flex gap-[12px] items-center left-[16px] top-1/2 translate-y-[-50%] right-[140px]">
            <div
              className="relative shrink-0 size-[24px]"
              data-name="search-normal"
            >
              <SearchIcon />
            </div>
            <div className="content-stretch flex items-center relative shrink-0 flex-1">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                onClick={handleInputClick}
                placeholder={placeholder}
                className="bg-transparent border-none outline-1-none w-full placeholder:text-[#D4D4D8] placeholder:capitalize"
                style={{
                  color: "var(--Primary-200, #D4D4D8)",
                  fontFamily: '"Plus Jakarta Sans"',
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "24px",
                  textTransform: "capitalize",
                }}
              />
            </div>
          </div>

          {/* Search Button */}
          <button
            onClick={handleSearch}
            className="absolute bg-neutral-50 box-border content-stretch flex gap-[12px] h-[48px] items-center justify-center px-[48px] py-[12px] right-[8px] rounded-[100px] top-1/2 translate-y-[-50%] hover:bg-gradient-to-b hover:from-[#501bd6] hover:to-[#7f57e2] transition-all duration-300 group"
            data-name="Buttons/main"
          >
            <p className="font-medium leading-[24px] relative shrink-0 text-[16px] text-center text-zinc-950 group-hover:text-white transition-colors">
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
          activeFilter={activeFilter}
        />
      )}

      {/* Suggestion Tags */}
      <div
        className="content-stretch flex gap-[8px] md:gap-[16px] items-start relative w-full overflow-x-auto md:overflow-x-visible justify-start md:justify-center px-4 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        data-node-id="234:516"
      >
        {suggestions.map((suggestion, index) => (
          <button
            key={index}
            onClick={() => handleSuggestionClick(suggestion)}
            className="bg-[rgba(255,255,255,0.08)] box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[11px] relative rounded-[100px] shrink-0 hover:bg-[rgba(255,255,255,0.12)] transition-colors text-center"
            data-name="Buttons/main"
          >
            <p className="font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-neutral-50 whitespace-nowrap">
              {suggestion}
            </p>
          </button>
        ))}
      </div>
    </motion.div>
  );
}
