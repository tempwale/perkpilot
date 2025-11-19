import React, { useState, useEffect, useRef, useMemo } from "react";
import { STATS_API } from "../../config/backend";

interface StatItem {
  value: string;
  label: string;
  numericValue: number;
  suffix: string;
}

export interface StatApiEntry {
  numberValue?: string;
  message?: string;
}

interface StatsProps {
  statsData?: StatApiEntry[] | null;
}

function normalizeStats(entries: StatApiEntry[] = [], fallback: StatItem[]): StatItem[] {
  const converted = entries
    .map((entry) => {
      const numValue = entry.numberValue || "";
      const message = entry.message || "";
      if (!numValue && !message) {
        return null;
      }

      const match = numValue.match(/^(\d+\.?\d*)([KM]?\+?)$/);
      let numeric = 0;
      let suffix = "+";

      if (match) {
        numeric = parseFloat(match[1]);
        suffix = match[2] || "+";
      } else if (numValue) {
        numeric = parseFloat(numValue.replace(/[^0-9.]/g, "")) || 0;
        suffix = numValue.replace(/[0-9.]/g, "") || "+";
      }

      return {
        value: numValue || "0+",
        label: message,
        numericValue: numeric,
        suffix,
      };
    })
    .filter((stat): stat is StatItem => stat !== null)
    .slice(0, 4);

  const padded = [...converted];
  while (padded.length < 4) {
    padded.push(fallback[padded.length]);
  }
  return padded;
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

const Stats: React.FC<StatsProps> = ({ statsData }) => {
  const [ref, isInView] = useInView(0.3);
  const [stats, setStats] = useState<StatItem[]>([]);
  const [loading, setLoading] = useState(!statsData);

  const defaultStats: StatItem[] = useMemo(
    () => [
      { value: "500+", label: "Active Deals", numericValue: 500, suffix: "+" },
      { value: "1000+", label: "Expert Reviews", numericValue: 1000, suffix: "+" },
      { value: "5000+", label: "Happy Customers", numericValue: 5000, suffix: "+" },
      { value: "2M+", label: "Total Savings", numericValue: 2, suffix: "M+" },
    ],
    []
  );

  useEffect(() => {
    // If statsData provided via props, use it directly (no fetch)
    if (statsData) {
      setStats(normalizeStats(statsData, defaultStats));
      setLoading(false);
      return;
    }

    let mounted = true;
    async function fetchStats() {
      try {
        const response = await fetch(STATS_API);
        if (!response.ok) {
          // Only use defaults if API fails (not 404 - that means no stats saved yet)
          if (response.status === 404) {
            // No stats in DB yet - set empty array, will use defaults in displayStats
            if (mounted) {
              setStats([]);
              setLoading(false);
            }
            return;
          }
          // For other errors, use defaults
          if (mounted) {
            setStats([]);
            setLoading(false);
          }
          return;
        }
        
        const data = await response.json();
        if (!mounted) return;

        if (mounted) {
          setStats(normalizeStats(data.stats, defaultStats));
          setLoading(false);
        }
      } catch (err) {
        console.error("Error fetching stats:", err);
        // On error, set empty array - will use defaults in displayStats
        if (mounted) {
          setStats([]);
          setLoading(false);
        }
      }
    }

    void fetchStats();
    return () => {
      mounted = false;
    };
  }, [statsData, defaultStats]);
  const displayStats: StatItem[] = useMemo(() => {
    if (loading || stats.length === 0 || stats.every((s) => !s.value && !s.label)) {
      return defaultStats;
    }
    return stats;
  }, [defaultStats, loading, stats]);

  // Animated counters for each stat with fixed durations
  const animatedValue0 = useCountUp(displayStats[0]?.numericValue || 0, 2000, isInView);
  const animatedValue1 = useCountUp(displayStats[1]?.numericValue || 0, 2300, isInView);
  const animatedValue2 = useCountUp(displayStats[2]?.numericValue || 0, 2500, isInView);
  const animatedValue3 = useCountUp(displayStats[3]?.numericValue || 0, 2800, isInView);

  const animatedValues = [
    animatedValue0,
    animatedValue1,
    animatedValue2,
    animatedValue3,
  ];

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
        {displayStats.map((stat, index) => (
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
            {index < displayStats.length - 1 && (
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
                {formatValue(animatedValues[2], displayStats[2])}
              </div>
              <div className="text-[16px] leading-6 text-zinc-500 w-full">
                {displayStats[2].label}
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-[13px] items-start justify-center p-4 border-r-[1.5px] border-[#0c071b]">
              <div className="text-[40px] font-semibold leading-[52px] text-neutral-50 capitalize">
                {formatValue(animatedValues[1], displayStats[1])}
              </div>
              <div className="text-[16px] leading-6 text-zinc-500 w-full">
                {displayStats[1].label}
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="flex w-full">
            <div className="flex-1 flex flex-col gap-[13px] items-start justify-center p-4 border-r-[1.5px] border-[#0c071b]">
              <div className="text-[40px] font-semibold leading-[52px] text-neutral-50 capitalize">
                {formatValue(animatedValues[0], displayStats[0])}
              </div>
              <div className="text-[16px] leading-6 text-zinc-500 w-full">
                {displayStats[0].label}
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-[13px] items-start justify-center p-4">
              <div className="text-[40px] font-semibold leading-[52px] text-neutral-50 capitalize">
                {formatValue(animatedValues[3], displayStats[3])}
              </div>
              <div className="text-[16px] leading-6 text-zinc-500 w-full">
                {displayStats[3].label}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
