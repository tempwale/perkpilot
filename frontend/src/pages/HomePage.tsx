import Header from "../components/Header";
import HeroSection from "../components/Home/HeroSection";
import AboutUsSection from "../components/Home/AboutUsSection";
import WhyUsSection from "../components/Home/WhyUsSection";
import { TopPicksSection } from "../components/Home/TopPicksSection";
import ComparisionsSection from "../components/Home/ComparisionsSection";
import { ReviewsSection } from "../components/Home/ReviewsSection";
import { CTASection } from "../components/CTASection";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <div className="max-w-full overflow-x-hidden">
        <Header />
        {/* Content container with top padding to account for fixed header */}
        <div className="pt-[80px]">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.08)] to-transparent"></div>
          <HeroSection />
          <AboutUsSection />
          <WhyUsSection />
          <TopPicksSection />
          <ComparisionsSection />
          <ReviewsSection />
          <CTASection />
          <Footer />
        </div>
      </div>
    </div>
  );
}
