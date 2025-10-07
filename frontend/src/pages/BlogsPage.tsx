import Background from "../components/Background";
import DealsSection from "../components/Deals/DealsSection";
import SearchSection from "../components/Deals/SearchSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { UniversalBadge } from "../components/UniversalBadge";

export default function BlogsPage() {
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
          <div className="pt-24 px-4">
            <div className="content-stretch flex flex-col gap-[24px] items-center relative w-full max-w-6xl mx-auto">
              <UniversalBadge
                badgeText="#1 Platform"
                secondaryText="For Expert Insights"
                icon="electric"
                className=""
                variant="primary"
                size="md"
              />

              {/* Main Heading */}
              <h1
                className="bg-clip-text bg-gradient-to-b font-bold from-[#ffffff] leading-[72px] relative shrink-0 text-[56px] text-center to-[#949494] whitespace-pre-wrap"
                style={{ WebkitTextFillColor: "transparent" }}
              >
                Software Blogs
              </h1>

              {/* Description */}
              <div className="font-medium leading-[32px] relative shrink-0 text-[20px] text-center text-zinc-400 max-w-[818px] whitespace-pre-wrap">
                <p className="mb-0">
                  In-depth reviews, comparisons, and insights about the latest
                  software tools and productivity solutions.
                </p>
              </div>
            </div>
          </div>
          <SearchSection />
          <DealsSection />

          <Footer />
        </div>
      </div>
    </div>
  );
}
