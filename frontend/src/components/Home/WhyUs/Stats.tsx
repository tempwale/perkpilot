import React from "react";

interface StatItem {
  value: string;
  label: string;
}

const Stats: React.FC = () => {
  const stats: StatItem[] = [
    {
      value: "5000+",
      label: "Happy Customers",
    },
    {
      value: "1000+",
      label: "Expert Reviews",
    },
    {
      value: "500+",
      label: "Active Deals",
    },
    {
      value: "2M+",
      label: "Total Savings",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* Linear gradient line at top */}
      <div
        className="w-full h-px mb-12"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #554284 50%, transparent 100%)",
        }}
      />

      <div className="flex items-center justify-between w-full max-w-6xl">
        {stats.map((stat, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col  flex">
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
    </div>
  );
};

export default Stats;
