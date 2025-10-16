import HowItWorks from "../components/SEO/HowItWorks";
import Analyze from "../components/SEO/Analyze";
import SEOHeading from "../components/SEO/SEOHeading";
import Discover from "../components/SEO/Discover";
import Reviews from "../components/SEO/Reviews";
import Footer from "../components/SEO/Footer";

export default function SEOPage() {
  return (
    <div className="flex flex-col items-center bg-[#F3F4FF] gap-24">
      <SEOHeading />
      <Analyze />
      <HowItWorks />
      <Discover />
      <Reviews />
      <Footer />
    </div>
  );
}
