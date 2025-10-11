import Check from "./Check";

export default function FeatureComparision() {
  return (
    <div
      data-layer="Frame 2147206227"
      className="Frame2147206227 w-full p-6 bg-white/5 rounded-3xl outline outline-1 outline-offset-[-1px] outline-white/10 inline-flex flex-col justify-start items-start gap-6"
    >
      <div
        data-layer="Feature Comparison"
        className="FeatureComparison self-stretch justify-start text-white text-[40px] font-semibold font-['Plus_Jakarta_Sans'] capitalize leading-[52px]"
      >
        Feature Comparison
      </div>

      {/* Header Row */}
      <div
        data-layer="Frame 2147206228"
        className="Frame2147206228 self-stretch inline-flex justify-between items-start"
      >
        <div className="Feature text-zinc-200 text-xl font-medium font-['Plus_Jakarta_Sans'] leading-relaxed">
          Feature
        </div>
        <div className="Notion pl-30 text-zinc-200 text-xl font-medium font-['Plus_Jakarta_Sans'] leading-relaxed">
          Notion
        </div>
        <div className="Frame2147206236 flex justify-start items-center gap-[100px]">
          <div className="Obsidia text-zinc-200 text-xl font-medium font-['Plus_Jakarta_Sans'] leading-relaxed">
            Obsidian
          </div>
          <div className="RoamResearch text-zinc-200 text-xl font-medium font-['Plus_Jakarta_Sans'] leading-relaxed">
            Roam Research
          </div>
        </div>
      </div>

      {/* Features List */}
      {[
        "Block-based editing",
        "Database functionality",
        "Team collaboration",
        "Offline access",
        "Graph view",
        "Bi-directional linking",
        "Templates",
        "API access",
        "Mobile apps",
        "Real-time sync",
      ].map((feature, i) => (
        <div
          key={i}
          className="self-stretch inline-flex justify-between items-center"
        >
          <div className="w-[200px] flex justify-start items-center gap-2.5">
            <div className="text-zinc-200 text-base font-normal font-['Plus_Jakarta_Sans'] leading-normal">
              {feature}
            </div>
          </div>

          {/* Notion */}
          <div className="Check px-[5px] py-[3px] flex justify-start items-center gap-2.5 overflow-hidden">
            <Check />
          </div>

          {/* Obsidian */}
          <div className="w-[100px] pr-6 flex justify-end items-center gap-2.5">
            <div className="Check px-[5px] py-[3px] flex justify-start items-center gap-2.5 overflow-hidden">
              <Check />
            </div>
          </div>

          {/* Roam Research */}
          <div className="w-[140px] flex justify-center items-end gap-2.5">
            <div className="Check px-[5px] py-[3px] flex justify-start items-center gap-2.5 overflow-hidden">
              <Check />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
