import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchSection from "../components/Reviews/SearchSection";
import Background from "../components/Background";
import ReviewsSection from "../components/Reviews/ReviewsSection";
import { UniversalBadge } from "../components/UniversalBadge";

export default function ReviewsPage() {
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
          <div className="pt-24 px-[20px] md:px-[100px] w-full max-w-[1440px] mx-auto">
            <div className="content-stretch flex flex-col gap-[24px] items-center relative w-full">
              <UniversalBadge
                badgeText="#1 Platform"
                secondaryText="For Software Reviews"
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
                Software Reviews
              </h1>

              {/* Description */}
              <div className="font-medium leading-[32px] relative shrink-0 text-[20px] text-center text-zinc-400 max-w-[818px] whitespace-pre-wrap">
                <p className="mb-0">
                  Honest, in-depth reviews of the software tools that matter
                </p>
                <p>to your productivity and workflow.</p>
              </div>
            </div>
          </div>
          <SearchSection />
          <ReviewsSection />

          <Footer />
        </div>
      </div>
    </div>
  );
}
