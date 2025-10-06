import { useState } from "react";
import ProductOverview from "./tabs/ProductOverview";
import ProductFeatures from "./tabs/ProductFeatures";
import ProductPricing from "./tabs/ProductPricing";
import ProductReviews from "./tabs/ProductReviews";
import ProductAlternatives from "./tabs/ProductAlternatives";



export default function NavigationTabs() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Product Over View" },
    { id: "features", label: "Product Features" },
    { id: "pricing", label: "Product Pricing" },
    { id: "reviews", label: "Product Reviews" },
    { id: "alternatives", label: "Product Alternatives" },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return <ProductOverview  />;
      case "features":
        return <ProductFeatures  />;
      case "pricing":
        return <ProductPricing />;
      case "reviews":
        return <ProductReviews />;

      case "alternatives":
        return <ProductAlternatives />;
      default:
        return <ProductOverview  />;
    }
  };

  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-start relative w-full"
      data-node-id="250:2524"
    >
      {/* Navigation Tabs */}
      <div
        className="bg-[rgba(255,255,255,0.08)] border border-[rgba(235,239,245,0.12)] border-solid box-border content-stretch flex items-center justify-between px-[16px] py-[8px] relative rounded-[100px] shrink-0 w-full overflow-x-auto"
        data-node-id="250:2525"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`box-border content-stretch flex gap-[12px] h-[48px] items-center px-[24px] py-[16px] relative rounded-[100px] shrink-0 transition-all duration-200 whitespace-nowrap ${
              activeTab === tab.id
                ? "bg-gradient-to-b from-[#501bd6] to-[#7f57e2]"
                : "bg-[rgba(255,255,255,0)] hover:bg-[rgba(255,255,255,0.05)]"
            }`}
            data-name="Buttons/main"
          >
            <p className="font-['Poppins:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white">
              {tab.label}
            </p>
          </button>
        ))}
      </div>

      {/* Content Area */}
      {renderTabContent()}
    </div>
  );
}
