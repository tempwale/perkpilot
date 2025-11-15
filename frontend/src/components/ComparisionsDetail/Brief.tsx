import type { ToolComparisonBlog } from "../../hooks/useComparisionDetail";

export default function Brief({ data }: { data?: ToolComparisonBlog }) {
  // Use data from API if available
  const title = data?.heroHeading || "Notion vs Obsidian vs Roam Research";
  const description =
    data?.heroBody ||
    "Notion isn't a proper project management tool, so if you're looking for that, the clear winner is Obsidian.";
  const tipText =
    data?.tipBulbText ||
    "Notion is a team knowledge base, not a project management tool.";

  return (
    <div
      data-layer="Frame 2147206226"
      className="Frame2147206226  p-6 bg-white/5 rounded-3xl outline outline-1 outline-offset-[-1px] outline-white/10 inline-flex flex-col justify-start items-start gap-4 w-full"
    >
      <div
        data-layer="Notion vs Obsidian vs Roam Research"
        className="NotionVsObsidianVsRoamResearch self-stretch justify-start text-white text-[40px] font-semibold font-['Plus_Jakarta_Sans'] capitalize leading-[52px]"
      >
        {title}
      </div>
      <div
        data-layer="Description"
        className="Description self-stretch justify-start text-zinc-400 text-xl font-medium font-['Plus_Jakarta_Sans'] leading-relaxed"
      >
        {description}
      </div>
      <div
        data-layer="Additional description"
        className="AdditionalDescription self-stretch justify-start text-zinc-400 text-base font-normal font-['Plus_Jakarta_Sans'] leading-normal"
      >
        {description}
      </div>
      <div
        data-layer="Frame 2147206227"
        className="Frame2147206227 self-stretch px-4 py-2 bg-white/5 rounded-tr-2xl rounded-br-2xl border-l-2 border-white inline-flex justify-center items-center gap-2.5"
      >
        <div
          data-layer="Tip"
          className="Tip flex-1 justify-start text-neutral-50 text-base font-normal font-['Plus_Jakarta_Sans'] leading-normal"
        >
          {tipText}
        </div>
      </div>
    </div>
  );
}
