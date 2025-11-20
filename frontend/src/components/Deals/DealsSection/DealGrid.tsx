import { useState, useEffect, type ReactNode } from "react";
import DealCard from "./DealCard";
import Pagination from "../../Deals/DealsSection/Pagination";
import { motion } from "framer-motion";
import fetchDeals, { type Deal } from "../../../hooks/useDeals";

// UI-facing deal shape that may include backend-specific fields.
type UIDeal = Partial<Deal> & {
  _id?: string;
  id?: number;
  logoUri?: string;
  logoComponent?: ReactNode;
  verified?: boolean;
  tag?: string;
  dealType?: string;
  features?: string[];
  discount?: string;
  savings?: string;
  category?: string;
  primary_cta_link?: string;
  secondary_cta_link?: string;
};

interface DealGridProps {
  deals?: UIDeal[];
  featuredDeals?: Array<{
    _id: string;
    title?: string;
    category?: string;
    description?: string;
    logoUri?: string;
    verified?: boolean;
    tag?: string;
    features?: string[];
    discount?: string;
    savings?: string;
    primary_cta_link?: string;
    secondary_cta_link?: string;
  }>;
  onViewDetails?: (dealId: string | number) => void;
  onGetDeal?: (dealId: string | number) => void;
  itemsPerPage?: number;
  showPagination?: boolean;
}

export default function DealGrid({
  deals,
  featuredDeals,
  onViewDetails,
  onGetDeal,
  itemsPerPage = 6,
  showPagination = true,
}: DealGridProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [apiDeals, setApiDeals] = useState<UIDeal[]>([]);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const hasPropDeals = Array.isArray(deals);


  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); 
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Reset to page 1 when switching between mobile/desktop
  useEffect(() => {
    setCurrentPage(1);
  }, [isMobile]);


  useEffect(() => {
    if (hasPropDeals) {
      setApiDeals([]);
      setLoading(false);
      setFetchError(null);
      return;
    }
    if (featuredDeals && featuredDeals.length) {
      const convertedDeals: UIDeal[] = featuredDeals.map((deal) => ({
        _id: deal._id,
        title: deal.title,
        category: deal.category,
        description: deal.description,
        logoUri: deal.logoUri,
        verified: deal.verified,
        tag: deal.tag,
        dealType: deal.tag,
        features: deal.features,
        discount: deal.discount,
        savings: deal.savings,
        primary_cta_link: deal.primary_cta_link,
        secondary_cta_link: deal.secondary_cta_link,
      }));
      setApiDeals(convertedDeals);
      return;
    }

    let mounted = true;
    async function load() {
      setLoading(true);
      setFetchError(null);
      try {
        const data = await fetchDeals();
        if (!mounted) return;
        // cast minimal Deal[] into UIDeal[] for UI mapping (safe: fields are optional)
        setApiDeals(data as UIDeal[]);
      } catch (e) {
        console.error("fetchDeals error", e);
        if (mounted) setFetchError(e instanceof Error ? e.message : String(e));
      } finally {
        if (mounted) setLoading(false);
      }
    }

    load();
    return () => {
      mounted = false;
    };
  }, [hasPropDeals, featuredDeals]);

  // Decide which data source to use: prop -> featuredDeals -> API -> empty array
  const sourceDeals = hasPropDeals
    ? deals ?? []
    : apiDeals;

  // Calculate items per page based on screen size
  const effectiveItemsPerPage = isMobile ? 3 : itemsPerPage;

  // Calculate pagination
  const totalPages = Math.ceil(sourceDeals.length / effectiveItemsPerPage);
  const startIndex = (currentPage - 1) * effectiveItemsPerPage;
  const endIndex = startIndex + effectiveItemsPerPage;
  const displayDeals = showPagination
    ? sourceDeals.slice(startIndex, endIndex)
    : sourceDeals;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of grid when page changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleViewDetails = (dealId: string | number) => {
    if (onViewDetails) {
      onViewDetails(dealId);
    } else {
      console.log(`View details for deal ${dealId}`);
    }
  };

  const handleGetDeal = (dealId: string | number) => {
    if (onGetDeal) {
      onGetDeal(dealId);
    } else {
      console.log(`Get deal ${dealId}`);
    }
  };

  return (
    <div className="w-full">
      {/* Grid Container with animation */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {loading && (
          <div className="col-span-full text-center py-6">Loading deals...</div>
        )}

        {fetchError && (
          <div className="col-span-full text-center text-red-500 py-6">
            {fetchError}
          </div>
        )}

        {!loading && !fetchError && displayDeals.length === 0 && (
          <div className="col-span-full text-center py-6 text-gray-500">
            No deals available at the moment.
          </div>
        )}

        {displayDeals.map((deal, idx) => {
          // Normalize API shape (supports different property names)
          const idKey = deal.id ?? deal._id ?? `deal-${idx}`;
          const category = deal.category ?? deal.dealType ?? "";
          const dealType = deal.dealType ?? deal.tag ?? "";
          const logoComponent =
            deal.logoComponent ??
            (deal.logoUri ? (
              <img
                src={deal.logoUri}
                alt={deal.title ?? "logo"}
                className="w-14 h-14 object-contain"
              />
            ) : null);

          return (
            <motion.div
              key={idKey}
              className="flex"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.07, ease: "easeOut" }}
            >
              <DealCard
                title={deal.title}
                category={category}
                description={deal.description}
                logoComponent={logoComponent}
                dealType={dealType}
                features={deal.features ?? []}
                discount={deal.discount ?? ""}
                savings={deal.savings ?? ""}
                redeemUrl={deal.primary_cta_link}
                onViewDetails={() => handleViewDetails(idKey)}
                onGetDeal={() => handleGetDeal(idKey)}
              />
            </motion.div>
          );
        })}
      </motion.div>

      {/* Pagination */}
      {showPagination && totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}
