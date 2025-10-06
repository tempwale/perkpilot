import React from "react";

interface StatItem {
  value: string;
  label: string;
}

const Stats: React.FC = () => {
  const stats: StatItem[] = [
    {
      value: "500+",
      label: "Active Deals",
    },
    {
      value: "1000+",
      label: "Expert Reviews",
    },
    {
      value: "5000+",
      label: "Happy Customers",
    },
    {
      value: "2M+",
      label: "Total Savings",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full py-6 md:py-20">
      {/* Desktop Layout - Horizontal */}
      <div className="hidden md:flex items-center justify-between w-full max-w-6xl">
        {stats.map((stat, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center">
              <div
                className="text-[48px] font-semibold leading-tight mb-2"
                style={{
                  fontFamily: "Plus Jakarta Sans",
                  color: "#FAFAFA",
                }}
              >
                {stat.value}
              </div>
              <div
                className="text-[16px] leading-6 text-center"
                style={{
                  fontFamily: "Plus Jakarta Sans",
                  color: "#71717A",
                }}
              >
                {stat.label}
              </div>
            </div>
            {index < stats.length - 1 && (
              <div
                className="w-px h-16 mx-8"
                style={{ backgroundColor: "#0c071b" }}
              />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Mobile Layout - 2x2 Grid */}
      <div className="md:hidden w-full max-w-sm border-t border-black pt-6">
        <div className="flex flex-col gap-6 w-full">
          {/* First Row */}
          <div className="flex w-full">
            <div className="flex-1 flex flex-col gap-[13px] items-start justify-center p-4 border-r-[1.5px] border-[#0c071b]">
              <div className="text-[40px] font-semibold leading-[52px] text-neutral-50 capitalize">
                {stats[2].value}
              </div>
              <div className="text-[16px] leading-6 text-zinc-500 w-full">
                {stats[2].label}
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-[13px] items-start justify-center p-4 border-r-[1.5px] border-[#0c071b]">
              <div className="text-[40px] font-semibold leading-[52px] text-neutral-50 capitalize">
                {stats[1].value}
              </div>
              <div className="text-[16px] leading-6 text-zinc-500 w-full">
                {stats[1].label}
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="flex w-full">
            <div className="flex-1 flex flex-col gap-[13px] items-start justify-center p-4 border-r-[1.5px] border-[#0c071b]">
              <div className="text-[40px] font-semibold leading-[52px] text-neutral-50 capitalize">
                {stats[0].value}
              </div>
              <div className="text-[16px] leading-6 text-zinc-500 w-full">
                {stats[0].label}
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-[13px] items-start justify-center p-4">
              <div className="text-[40px] font-semibold leading-[52px] text-neutral-50 capitalize">
                {stats[3].value}
              </div>
              <div className="text-[16px] leading-6 text-zinc-500 w-full">
                {stats[3].label}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
