import BackgroundDown from "../components/BackgroundDown";
import Brief from "../components/ComparisionsDetail/Brief";
import FeatureComparision from "../components/ComparisionsDetail/FeatureComparision";
import Hero from "../components/ComparisionsDetail/Hero";
import ProsCons from "../components/ComparisionsDetail/ProsCons";
import ToolsMentioned from "../components/ComparisionsDetail/ToolsMentioned";
import BlogModules from "../components/ComparisionsDetail/BlogModules";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function ComparisionsDetailPage() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Header />
      {/* BackgroundUp is absolutely positioned and will sit behind content */}
      <main className="py-20 md:py-40 flex-1 flex items-center justify-center Rectangle2823 w-full bg-gradient-to-b from-black to-[#190845]">
        <Hero className="justify-center items-center" />
      </main>

      <div className="w-full bg-gradient-to-t from-black to-[#190845]">
        <ToolsMentioned />
      </div>

      <section className="py-20 md:py-40 w-full bg-gradient-to-b from-black to-[#190845]">
        <div className="w-full max-w-[1240px] mx-auto flex flex-col md:flex-row items-start gap-8 px-4 md:px-0">
          <div className="flex-1 flex flex-col gap-6 relative">
            {/* overlay that sits above Brief + FeatureComparision */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-[#501bd6]/10 to-transparent opacity-80 mix-blend-screen" />

            <div className="relative z-10 flex flex-col gap-6">
              <Brief />
              <FeatureComparision />
            </div>

            <ProsCons />
          </div>

          <aside className="w-full md:w-[400px] lg:w-[480px] flex-shrink-0">
            <div className="sticky top-24">
              <BlogModules />
            </div>
          </aside>
        </div>
      </section>
      {/* BackgroundDown is absolutely positioned and will sit behind content */}
      <BackgroundDown />
      <Footer />
    </div>
  );
}
