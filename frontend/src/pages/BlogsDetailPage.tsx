import Brief from "../components/BlogsDetail/Brief";
import Hero from "../components/BlogsDetail/Hero";
import ToolsMentioned from "../components/BlogsDetail/ToolsMentioned";
import BlogModules from "../components/BlogsDetail/BlogModules";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ToolDeal from "../components/BlogsDetail/ToolDeal";
import SimilarBlogs from "../components/BlogsDetail/SimilarBlogs";

export default function ComparisionsDetailPage() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Header />
      {/* BackgroundUp is absolutely positioned and will sit behind content */}
      <main className="py-40 flex-1 flex items-center justify-center Rectangle2823 w-full h-[640px] bg-gradient-to-b from-black to-[#190845]">
        <Hero className="justify-center items-center" />
      </main>
      <div className="flex  mx-auto Rectangle2824 w-full h-[200px] bg-gradient-to-t from-black to-[#190845]">
        <ToolsMentioned />
      </div>
      <div className="py-40 flex-1 flex items-center justify-center Rectangle2823 w-full h-[640px] bg-gradient-to-b from-black to-[#190845]">
        <div className="w-full max-w-[1232px] mx-auto flex flex-col md:flex-row items-start gap-8">
          <div className="flex-1 flex flex-col gap-6">
            <Brief />
            <ToolDeal />
            <Brief />
            <ToolDeal />
          </div>

          <aside className="w-full md:w-[397px] flex-shrink-0">
            <BlogModules />
          </aside>
        </div>
      </div>
      {/* BackgroundDown is absolutely positioned and will sit behind content */}
      <div className="flex mx-auto Rectangle2824 w-full h-[750px] bg-gradient-to-t from-black to-[#190845]">
        <SimilarBlogs />
      </div>

      <Footer />
    </div>
  );
}
