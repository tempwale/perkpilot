import Breadcrumb from "./Breadcrumb";
import ProductHeader from "./ProductHeader";
import CompanyStats from "./CompanyStats";
import PricingSidebar from "./PricingSidebar";
import type { ReactNode } from "react";

interface PricingItem {
  plan?: string;
  amount?: string;
  note?: string;
  _id?: string;
  tier?: string;
  price?: number | string;
  features?: string[];
}

interface ReviewData {
  title: string;
  logoComponent: ReactNode;
  category: string;
  shortDescription: string;
  rating: string;
  totalReviews: number;
  founded: string;
  employees: string;
  headquarters: string;
  userCount: string | number;
  pricing: PricingItem[];
  lastUpdated: string;
}

interface ReviewDetailContentProps {
  reviewData: ReviewData;
}

export default function ReviewDetailContent({
  reviewData,
}: ReviewDetailContentProps) {
  return (
    <div className="relative z-10 px-[20px] md:px-[135px] py-8 md:py-20">
      <div className="w-full max-w-[1440px] mx-auto">
        {/* Breadcrumb */}
        <Breadcrumb productName={reviewData.title} />

        {/* Main Content Grid - Responsive */}
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-3 lg:gap-8 mt-8">
          {/* Left Content - Product Info */}
          <div className="lg:col-span-2">
            <ProductHeader
              logoComponent={reviewData.logoComponent}
              title={reviewData.title}
              category={reviewData.category}
              shortDescription={reviewData.shortDescription}
              rating={reviewData.rating}
              totalReviews={reviewData.totalReviews}
            />

            <div className="mt-8 lg:mt-[160px]">
              <CompanyStats
                founded={reviewData.founded}
                employees={reviewData.employees}
                headquarters={reviewData.headquarters}
                userCount={typeof reviewData.userCount === 'number' ? reviewData.userCount.toString() : reviewData.userCount}
              />
            </div>
          </div>

          <div className="lg:col-span-1 lg:-mt-[40px] flex justify-center items-start">
            <PricingSidebar
              title={reviewData.title}
              pricing={reviewData.pricing.map((p: PricingItem) => {
                const plan = p.plan || p.tier || '';
                const amount = typeof p.amount === 'string' 
                  ? p.amount 
                  : typeof p.price === 'number' 
                    ? p.price.toString() 
                    : typeof p.price === 'string'
                      ? p.price
                      : '';
                const note = p.note || (Array.isArray(p.features) ? p.features.join(', ') : undefined);
                return {
                  plan,
                  amount,
                  note,
                  _id: p._id,
                };
              })}
              lastUpdated={reviewData.lastUpdated}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
