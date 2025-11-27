import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchSection from "../components/Deals/SearchSection";
import Background from "../components/Background";
import DealsSection from "../components/Deals/DealsSection";
import { UniversalBadge } from "../components/UniversalBadge";
import Stats, { type StatApiEntry } from "../components/Deals/Stats";
import { CTASection } from "../components/CTASection";
import { motion } from "framer-motion";
import fetchDealPage, { type DealPageData } from "../hooks/useDealPage";
import { STATS_API } from "../config/backend";
import fetchDeals, { type Deal } from "../hooks/useDeals";

export default function DealsPage() {
  const [dealPageData, setDealPageData] = useState<DealPageData | null>(null);
  const [statsData, setStatsData] = useState<StatApiEntry[] | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [allDeals, setAllDeals] = useState<Deal[]>([]);
  const [filteredDeals, setFilteredDeals] = useState<Deal[]>([]);

  useEffect(() => {
    let mounted = true;
    async function loadDealPage() {
      try {
        const data = await fetchDealPage();
        if (mounted) {
          setDealPageData(data);
        }
      } catch (err) {
        console.error("Error loading deal page:", err);
      }
    }
    void loadDealPage();
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    let mounted = true;
    async function loadStats() {
      try {
        const res = await fetch(STATS_API);
        if (!mounted) return;

        if (!res.ok) {
          if (res.status === 404) {
            setStatsData([]);
            return;
          }
          throw new Error(`Failed to fetch stats: ${res.status}`);
        }
        const data = (await res.json()) as { stats?: StatApiEntry[] };
        console.log("data", data);
        if (mounted) {
          setStatsData(data.stats || []);
        }
      } catch (err) {
        console.error("Error loading stats:", err);
        if (mounted) {
          setStatsData([]);
        }
      }
    }
    void loadStats();
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    let mounted = true;
    async function loadAllDeals() {
      try {
        const deals = await fetchDeals();
        if (mounted) {
          setAllDeals(deals);
          setFilteredDeals(deals);
        }
      } catch (err) {
        console.error("Error loading deals:", err);
      }
    }
    void loadAllDeals();
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    let filtered = [...allDeals];

    // Apply category filter first
    if (activeFilter && activeFilter !== "All") {
      filtered = filtered.filter((deal) =>
        deal.category?.toLowerCase() === activeFilter.toLowerCase() ||
        deal.tag?.toLowerCase() === activeFilter.toLowerCase()
      );
    }

    // Apply search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter((deal) => {
        const titleMatch = deal.title?.toLowerCase().includes(query);
        const categoryMatch = deal.category?.toLowerCase().includes(query);
        const descriptionMatch = deal.description?.toLowerCase().includes(query);
        const tagMatch = deal.tag?.toLowerCase().includes(query);
        const featuresMatch = deal.features?.some((f) =>
          f.toLowerCase().includes(query)
        );

        return (
          titleMatch ||
          categoryMatch ||
          descriptionMatch ||
          tagMatch ||
          featuresMatch
        );
      });
    }

    setFilteredDeals(filtered);
  }, [searchQuery, activeFilter, allDeals]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  const topTagline = dealPageData?.topTagline || "#1 Platform";
  const heading = dealPageData?.heading || "Software Deals";
  const subheading = dealPageData?.subheading || 
    "Stop searching endlessly. Tell our AI Agent your vision and get an instant,\npersonalized list of all the software you need-with exclusive discounts.";
  const featuredDeals = dealPageData?.deals || [];
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-full">
        <Header />
        {/* Content container with top padding to account for fixed header */}
        <div className="pt-[80px]">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.08)] to-transparent"></div>
          <div className="hidden md:block translate-y-[500px]">
            <Background />
          </div>
          {/* Hero Section */}
          <div className="pt-12 sm:pt-16 md:pt-24 px-4 sm:px-6">
            <motion.div
              className="content-stretch flex flex-col gap-4 sm:gap-6 md:gap-[24px] items-center relative w-full max-w-6xl mx-auto text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <UniversalBadge
                badgeText={topTagline}
                secondaryText="For Discounted SaaS Deals"
                icon="electric"
                className=""
                variant="primary"
                size="md"
              />

              {/* Main Heading with animation */}
              <motion.h1
                className="bg-clip-text bg-gradient-to-b font-bold from-[#ffffff] leading-tight sm:leading-[48px] md:leading-[56px] lg:leading-[72px] relative shrink-0 text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-center to-[#949494] whitespace-pre-wrap px-2"
                style={{ WebkitTextFillColor: "transparent" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                {heading}
              </motion.h1>

              {/* Description with animation */}
              <motion.div
                className="font-medium leading-5 sm:leading-6 md:leading-[28px] lg:leading-[32px] relative shrink-0 text-sm sm:text-base md:text-lg lg:text-[20px] text-center text-zinc-400 max-w-[818px] whitespace-pre-wrap px-2 sm:px-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
              >
                {subheading.split("\n").map((line, idx) => (
                  <p key={idx} className={idx === 0 ? "mb-0" : ""}>
                    {line}
                  </p>
                ))}
              </motion.div>
            </motion.div>
          </div>
          <div className="px-4 sm:px-6 lg:px-8">
            <SearchSection
              onSearch={handleSearch}
              onFilterChange={handleFilterChange}
              activeFilter={activeFilter}
            />
          </div>
          {searchQuery ? (
            <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
              <div className="max-w-7xl mx-auto mb-4 sm:mb-6">
                <p className="text-neutral-50 text-sm sm:text-base md:text-lg px-2 sm:px-0">
                  {filteredDeals.length > 0 ? (
                    <>
                      Found <span className="font-bold">{filteredDeals.length}</span> deals matching "{searchQuery}"
                    </>
                  ) : (
                    <>No deals found matching "{searchQuery}"</>
                  )}
                </p>
              </div>
              <DealsSection deals={filteredDeals} showPagination={true} />
            </div>
          ) : (
          <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <DealsSection featuredDeals={featuredDeals} />
          </div>
          )}
          <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <Stats statsData={statsData} />
          </div>
          <div className="px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12">
          <CTASection />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
