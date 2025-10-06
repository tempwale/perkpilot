import React, { useState, useEffect, useRef } from "react";

interface StatItem {
  value: string;
  label: string;
  numericValue: number;
  suffix: string;
}

// Custom hook for counting animation
const useCountUp = (
  end: number,
  duration: number = 2000,
  shouldStart: boolean = false
) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) {
      setCount(0);
      return;
    }

    let startTimestamp: number | null = null;
    let animationId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationId = window.requestAnimationFrame(step);
      }
    };
    animationId = window.requestAnimationFrame(step);

    return () => {
      if (animationId) {
        window.cancelAnimationFrame(animationId);
      }
    };
  }, [end, duration, shouldStart]);

  return count;
};

// Hook to detect when element is in viewport
const useInView = (threshold = 0.1) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return [ref, isInView] as const;
};

const Stats: React.FC = () => {
  const [ref, isInView] = useInView(0.3);

  const stats: StatItem[] = [
    {
      value: "5000+",
      label: "Happy Customers",
      numericValue: 5000,
      suffix: "+",
    },
    {
      value: "1000+",
      label: "Expert Reviews",
      numericValue: 1000,
      suffix: "+",
    },
    {
      value: "500+",
      label: "Active Deals",
      numericValue: 500,
      suffix: "+",
    },
    {
      value: "2M+",
      label: "Total Savings",
      numericValue: 2,
      suffix: "M+",
    },
  ];

  // Animated counters for each stat with fixed durations
  const animatedValue0 = useCountUp(stats[0].numericValue, 2000, isInView);
  const animatedValue1 = useCountUp(stats[1].numericValue, 2300, isInView);
  const animatedValue2 = useCountUp(stats[2].numericValue, 2500, isInView);
  const animatedValue3 = useCountUp(stats[3].numericValue, 2800, isInView);

  const animatedValues = [animatedValue0, animatedValue1, animatedValue2, animatedValue3];

  const formatValue = (animatedValue: number, originalStat: StatItem) => {
    if (originalStat.suffix === "M+") {
      return `${animatedValue}${originalStat.suffix}`;
    }
    return `${animatedValue.toLocaleString()}${originalStat.suffix}`;
  };

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center w-full py-6 md:py-20"
    >
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
                {formatValue(animatedValues[index], stat)}
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
                {formatValue(animatedValues[2], stats[2])}
              </div>
              <div className="text-[16px] leading-6 text-zinc-500 w-full">
                {stats[2].label}
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-[13px] items-start justify-center p-4 border-r-[1.5px] border-[#0c071b]">
              <div className="text-[40px] font-semibold leading-[52px] text-neutral-50 capitalize">
                {formatValue(animatedValues[1], stats[1])}
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
                {formatValue(animatedValues[0], stats[0])}
              </div>
              <div className="text-[16px] leading-6 text-zinc-500 w-full">
                {stats[0].label}
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-[13px] items-start justify-center p-4">
              <div className="text-[40px] font-semibold leading-[52px] text-neutral-50 capitalize">
                {formatValue(animatedValues[3], stats[3])}
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
