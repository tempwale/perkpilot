import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchSection from "../components/Comparisions/SearchSection";
import Background from "../components/Background";
import { UniversalBadge } from "../components/UniversalBadge";
import ComparisionsSection from "../components/Comparisions/ComparisionsSection";
import { motion } from "framer-motion";
import fetchComparisonPageSettings, {
  type ComparisonPageSettings,
} from "../hooks/useComparisonPageSettings";

const DEFAULT_SUBHEADLINE =
  "In-depth side-by-side comparisons to help you choose the right tools for your workflow.";

export default function ComparisionsPage() {
  const [settings, setSettings] = useState<ComparisonPageSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const data = await fetchComparisonPageSettings();
        setSettings(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load settings");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  const badgeText = settings?.comparisonPageTopTagline ?? "#1 Platform";
  const secondaryText = "For Software Comparisons";
  const headline = settings?.comparisonPageHeading ?? "Software Comparisons";
  const subHeadline = settings?.comparisonPageSubheading ?? DEFAULT_SUBHEADLINE;
  // Only evaluate maintenance status after settings have loaded
  const isMaintenance = settings ? settings.comparisonPageStatus === "maintenance" : undefined;

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-full">
        <Header />
        <div className="pt-[80px]">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.08)] to-transparent"></div>
          <div className="hidden md:block translate-y-[500px]">
            <Background />
          </div>
          <div className="pt-24 px-4">
            <motion.div
              className="content-stretch flex flex-col gap-[24px] items-center relative w-full max-w-6xl mx-auto"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <UniversalBadge
                badgeText={badgeText}
                secondaryText={secondaryText}
                icon="electric"
                className=""
                variant="primary"
                size="md"
              />

              <motion.h1
                className="bg-clip-text bg-gradient-to-b font-bold from-[#ffffff] leading-[72px] relative shrink-0 text-[56px] text-center to-[#949494] whitespace-pre-wrap"
                style={{ WebkitTextFillColor: "transparent" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                {headline}
              </motion.h1>

              <motion.div
                className="font-medium leading-[32px] relative shrink-0 text-[20px] text-center text-zinc-400 max-w-[818px] whitespace-pre-wrap"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
              >
                {subHeadline}
              </motion.div>

              {loading && (
                <p className="text-sm text-zinc-400">Loading page settings...</p>
              )}
              {error && (
                <p className="text-sm text-red-400">{error}</p>
              )}
              {isMaintenance === true && (
                <div className="px-4 py-3 bg-yellow-500/10 text-yellow-200 text-sm rounded-2xl border border-yellow-500/30">
                  The comparisons page is currently in maintenance mode. Content
                  may be limited.
                </div>
              )}
            </motion.div>
          </div>
          {!loading && isMaintenance === false && (
            <>
          <SearchSection
            onSearch={handleSearch}
            onFilterChange={handleFilterChange}
            activeFilter={activeFilter}
          />
          <ComparisionsSection
            searchQuery={searchQuery}
            activeFilter={activeFilter}
          />
            </>
          )}
          <Footer />
        </div>
      </div>
    </div>
  );
}
