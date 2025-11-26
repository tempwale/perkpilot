import type { ToolComparisonBlog } from "../../hooks/useComparisionDetail";

export default function Brief({ data }: { data?: ToolComparisonBlog }) {
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
      className="Frame2147206226 w-full max-w-[819px] md:max-w-[819px] mx-auto sm:max-w-[350px] p-6 sm:p-4 bg-white/5 backdrop-blur rounded-[24px] border border-white/10 flex flex-col gap-4"
    >
      <h2
        data-layer="Notion vs Obsidian vs Roam Research"
        className="NotionVsObsidianVsRoamResearch self-stretch text-white text-[32px] sm:text-[32px] md:text-[40px] font-semibold font-['Plus_Jakarta_Sans'] capitalize leading-[42px] md:leading-[52px]"
      >
        {title}
      </h2>

      <p
        data-layer="Description"
        className="Description self-stretch text-zinc-400 text-[18px] md:text-[20px] font-medium font-['Plus_Jakarta_Sans'] leading-[26px]"
      >
        {description}
      </p>

      <p
        data-layer="Additional description"
        className="AdditionalDescription self-stretch text-zinc-400 text-base font-normal font-['Plus_Jakarta_Sans'] leading-[24px]"
      >
        {description}
      </p>

      <div
        data-layer="Frame 2147206227"
        className="Frame2147206227 self-stretch flex justify-center items-center gap-2.5 px-4 py-2 bg-white/5 border-l-2 border-white rounded-tr-[16px] rounded-br-[16px]"
      >
        <span
          data-layer="Tip"
          className="Tip flex-1 text-white text-[16px] font-normal font-['Plus_Jakarta_Sans'] leading-[24px]"
        >
          {tipText}
        </span>
      </div>
    </div>
  );
}
