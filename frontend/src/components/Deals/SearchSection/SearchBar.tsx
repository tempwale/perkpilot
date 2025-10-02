import React, { useState } from "react";

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

export default function SearchBar({
  onSearch,
  placeholder = "Tell us your business idea",
  onSuggestionClick,
}: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query);
    }
    console.log("Searching for:", query);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    if (onSuggestionClick) {
      onSuggestionClick(suggestion);
    }
    if (onSearch) {
      onSearch(suggestion);
    }
  };

  return (
    <div className="w-full mx-auto py-8 flex flex-col items-center">
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
          <div className="absolute content-stretch flex gap-[12px] items-center left-[16px] top-1/2 translate-y-[-50%] flex-1">
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
                placeholder={placeholder}
                className="capitalize font-normal leading-[24px] text-[16px] text-zinc-300 bg-transparent border-none outline-none w-full placeholder:text-zinc-300 placeholder:capitalize"
              />
            </div>
          </div>

          {/* Search Button */}
          <button
            onClick={handleSearch}
            className="absolute bg-neutral-50 box-border content-stretch flex gap-[12px] h-[48px] items-center justify-center px-[48px] py-[12px] right-[8px] rounded-[100px] top-1/2 translate-y-[-50%] hover:bg-white transition-colors"
            data-name="Buttons/main"
          >
            <p className="font-medium leading-[24px] relative shrink-0 text-[16px] text-center text-zinc-950">
              Search
            </p>
          </button>
        </div>
      </div>

      {/* Suggestion Tags */}
      <div
        className="content-stretch flex gap-[16px] items-start relative w-full flex-nowrap justify-center pt-10"
        data-node-id="234:516"
      >
        {suggestions.map((suggestion, index) => (
          <button
            key={index}
            onClick={() => handleSuggestionClick(suggestion)}
            className="bg-[rgba(255,255,255,0.08)] box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[11px] relative rounded-[100px] shrink-0 hover:bg-[rgba(255,255,255,0.12)] transition-colors"
            data-name="Buttons/main"
          >
            <p className="font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-neutral-50">
              {suggestion}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
