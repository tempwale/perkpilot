import React, { useState, useEffect } from "react";
import ComparisionsCard from "./ComparisionsCard";
import Pagination from "./Pagination";
import { motion } from "framer-motion";
import fetchComparisions from "../../../hooks/useComparisions";

const ComparisionsGrid: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [comparisonsData, setComparisonsData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const showPagination = true;

  // Fetch comparisions on mount
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const data = await fetchComparisions();
        setComparisonsData(data);
      } catch (err: any) {
        setError(err.message || "Failed to fetch comparisions");
        setComparisonsData([]);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  // Responsive check
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Reset to page 1 when switching between mobile/desktop
  useEffect(() => {
    setCurrentPage(1);
  }, [isMobile]);

  // 3 rows per page: 6 cards desktop, 3 cards mobile
  const itemsPerPage = isMobile ? 3 : 6;
  const totalPages = Math.ceil(comparisonsData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayComparisons = showPagination
    ? comparisonsData.slice(startIndex, endIndex)
    : comparisonsData;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full flex flex-col items-center gap-8 pb-20 px-5">
      {/* Loading state */}
      {loading && (
        <div className="flex items-center justify-center w-full h-40">
          <p className="text-lg text-gray-500">Loading comparisions...</p>
        </div>
      )}

      {/* Error state */}
      {error && (
        <div className="flex items-center justify-center w-full h-40">
          <p className="text-lg text-red-500">{error}</p>
        </div>
      )}

      {/* Comparisons Cards Grid with animation */}
      {!loading && !error && (
        <>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {displayComparisons.map((comparison, idx) => (
              <motion.div
                key={comparison._id || idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.07,
                  ease: "easeOut",
                }}
              >
                <ComparisionsCard
                  _id={comparison._id}
                  slug={comparison.slug}
                  heroHeading={comparison.heroHeading}
                  heroBody={comparison.heroBody}
                  comparisonHeroImage={comparison.comparisonHeroImage}
                  toolsMentioned={comparison.toolsMentioned}
                  blogCategory={comparison.blogCategory}
                  readingTime={comparison.readingTime}
                />
              </motion.div>
            ))}
          </motion.div>
          {/* Pagination */}
          {showPagination && totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </>
      )}
    </div>
  );
};

export default ComparisionsGrid;
