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

      {/* Features List as a responsive table */}
      <div className="w-full overflow-x-auto">
        <table className="w-full table-fixed border-collapse">
          <thead>
            <tr className="text-left">
              <th className="text-zinc-200 text-base font-medium font-['Plus_Jakarta_Sans'] lg:px-4 py-3 ">
                Feature
              </th>
              <th className="text-zinc-200 text-base font-medium font-['Plus_Jakarta_Sans']  lg:px-4 py-3 ">
                Notion
              </th>
              <th className="text-zinc-200 text-base font-medium font-['Plus_Jakarta_Sans']  lg:px-4 py-3 ">
                Obsidian
              </th>
              <th className="text-zinc-200 text-base font-medium font-['Plus_Jakarta_Sans']  lg:px-4 py-3 ">
                Roam Research
              </th>
            </tr>
          </thead>
          <tbody>
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
              <tr key={i}>
                <td className="px-4 py-4 align-top">
                  <div className="text-zinc-200 text-base font-normal font-['Plus_Jakarta_Sans'] leading-normal">
                    {feature}
                  </div>
                </td>
                <td className="px-4 py-4 align-middle">
                  <div className="flex items-center justify-center h-full">
                    <Check />
                  </div>
                </td>
                <td className="px-4 py-4 align-middle">
                  <div className="flex items-center justify-center h-full">
                    <Check />
                  </div>
                </td>
                <td className="px-4 py-4 align-middle">
                  <div className="flex items-center justify-center h-full">
                    <Check />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
