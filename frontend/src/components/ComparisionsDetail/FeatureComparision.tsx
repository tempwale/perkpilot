import Check from "./Check";

interface Feature {
  featureName: string;
  tool1Available?: boolean;
  tool2Available?: boolean;
  tool3Available?: boolean;
  toolScores?: Array<{
    tool: string;
    score: number | null;
  }>;
}

interface FeatureComparisonData {
  sectionTitle: string;
  featuresHeadline: string;
  tools: string[];
  features: Feature[];
}

export default function FeatureComparision({
  data,
}: {
  data?: FeatureComparisonData;
}) {
  // Use data from API if available
  const title = data?.featuresHeadline || "Feature Comparison";
  const tools = data?.tools || ["Tool 1", "Tool 2", "Tool 3"];
  const features = data?.features || [];

  return (
    <div
      data-layer="Frame 2147206227"
      className="Frame2147206227 w-full p-6 bg-white/5 rounded-3xl outline-1 -outline-offset-[-1px] outline-white/10 flex-col justify-start items-start gap-6"
    >
      <div
        data-layer="Feature Comparison"
        className="FeatureComparison self-stretch justify-start text-white text-[40px] font-semibold font-['Plus_Jakarta_Sans'] capitalize leading-[52px]"
      >
        {title}
      </div>

      {/* Features List as a responsive table */}
      <div className="w-full overflow-x-auto">
        <table className="w-full table-fixed border-collapse">
          <thead>
            <tr className="text-left">
              <th className="text-zinc-200 text-base font-medium font-['Plus_Jakarta_Sans'] lg:px-4 py-3 ">
                Feature
              </th>
              {tools.map((tool, idx) => (
                <th
                  key={idx}
                  className="text-zinc-200 text-base font-medium font-['Plus_Jakarta_Sans']  lg:px-4 py-3 "
                >
                  {tool}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.length > 0 ? (
              features.map((feature, i) => (
                <tr key={i}>
                  <td className="px-4 py-4 align-top">
                    <div className="text-zinc-200 text-base font-normal font-['Plus_Jakarta_Sans'] leading-normal">
                      {feature.featureName}
                    </div>
                  </td>
                  <td className="px-4 py-4 align-middle">
                    <div className="flex items-center justify-center h-full">
                      {feature.tool1Available && <Check />}
                    </div>
                  </td>
                  <td className="px-4 py-4 align-middle">
                    <div className="flex items-center justify-center h-full">
                      {feature.tool2Available && <Check />}
                    </div>
                  </td>
                  <td className="px-4 py-4 align-middle">
                    <div className="flex items-center justify-center h-full">
                      {feature.tool3Available && <Check />}
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={tools.length + 1}
                  className="px-4 py-4 text-center"
                >
                  <div className="text-zinc-400 text-base font-normal font-['Plus_Jakarta_Sans']">
                    No features to compare
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
