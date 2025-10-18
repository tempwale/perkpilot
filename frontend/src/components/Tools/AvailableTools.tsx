import { SearchBar } from "./ToolsHeading";

const suggestions = [
  "Top Latest AI Tools",
  "Low Budget Marketing Softwares",
  "Web 3 Design Kit",
  "Micro SaaS Ideas",
  "Free Productive Tools",
];

export default function AvailableTools() {
  return (
    <div className="flex flex-col bg-black pt-20 items-center">
      <div
        data-layer="Available Tools"
        className="AvailableTools text-center text-white text-5xl font-semibold font-['Plus_Jakarta_Sans'] capitalize leading-[60px] max-w-3xl"
      >
        Available Tools
      </div>
      <div
        data-layer="Pick what you need, use it instantly."
        className="PickWhatYouNeedUseItInstantly text-center text-zinc-400 text-lg font-medium font-['Plus_Jakarta_Sans'] leading-[27px] max-w-3xl mt-4"
      >
        Pick what you need, use it instantly.
      </div>

      {/* Insert SearchBar here, centered */}
      <div className="w-full max-w-4xl mt-6 px-4">
        <SearchBar />
      </div>

      {/* Suggestion tags (quick search) */}
      <div className="w-full max-w-4xl mt-4 px-4">
        <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
          {suggestions.map((tag, i) => (
            <button
              key={i}
              type="button"
              className="bg-[rgba(255,255,255,0.08)] box-border flex items-center justify-center px-[16px] py-[8px] rounded-[100px] hover:bg-[rgba(255,255,255,0.12)] transition-colors"
            >
              <span className="text-[13px] text-neutral-50 font-medium">
                {tag}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
