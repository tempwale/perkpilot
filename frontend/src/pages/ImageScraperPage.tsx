import HowItWorks from "../components/ImageScraper/HowItWorks";
import Analyze from "../components/ImageScraper/Analyze";
import ImageScraperHeading from "../components/ImageScraper/ImageScraperHeading";
import Discover from "../components/ImageScraper/Discover";
import Reviews from "../components/ImageScraper/Reviews";
import CTAFooter from "../components/ImageScraper/Footer";
import Header from "../components/Header";
import FAQ from "../components/ImageScraper/FAQ";
import Footer from "../components/Footer";

export default function ImageScraperPage() {
  return (
    <div className="w-full ">
      {/* Header section with black background */}
      <div className="w-full bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <Header forceBlackText={true} />{" "}
        </div>
      </div>

      {/* Main content section */}
      <div className="flex flex-col items-center  bg-gradient-to-b from-[#dddfff] to-white  gap-6 w-full">
        <ImageScraperHeading />
        <Analyze />
        <HowItWorks />
        <Discover />
        <Reviews />
        <FAQ />
        <CTAFooter />
        <Footer />
      </div>
    </div>
  );
}
