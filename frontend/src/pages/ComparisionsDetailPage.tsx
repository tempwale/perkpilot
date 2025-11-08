import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackgroundDown from "../components/BackgroundDown";
import Brief from "../components/ComparisionsDetail/Brief";
import FeatureComparision from "../components/ComparisionsDetail/FeatureComparision";
import Hero from "../components/ComparisionsDetail/Hero";
import ProsCons from "../components/ComparisionsDetail/ProsCons";
import ToolsMentioned from "../components/ComparisionsDetail/ToolsMentioned";
import BlogModules from "../components/ComparisionsDetail/BlogModules";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Author from "../components/ComparisionsDetail/Author";
import fetchComparisonDetail from "../hooks/useComparisionDetail";
import type { ToolComparisonBlog } from "../hooks/useComparisionDetail";
import { fetchAuthorById, type Author as AuthorData } from "../hooks/useAuthor";

export default function ComparisionsDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [comparison, setComparison] = useState<ToolComparisonBlog | null>(null);
  const [author, setAuthor] = useState<AuthorData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      if (!id) {
        setError("No comparison ID provided");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const data = await fetchComparisonDetail(id);
        setComparison(data);
        console.log("Comparison data:", data);
        console.log("Author ID from comparison:", data.authorId || data.author);

        // Fetch author if authorId or author field is present
        const authorIdToFetch = data.authorId || data.author;
        if (authorIdToFetch) {
          console.log("Fetching author with ID:", authorIdToFetch);
          try {
            const authorData = await fetchAuthorById(authorIdToFetch);
            setAuthor(authorData);
            console.log("Fetched author data:", authorData);
          } catch (authorErr) {
            console.error("Failed to fetch author:", authorErr);
            // Don't fail the whole page if author fetch fails
          }
        } else {
          console.log("No authorId found in comparison data");
        }
      } catch (err: any) {
        setError(err.message || "Failed to fetch comparison");
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen relative">
        <Header />
        <main className="py-20 md:py-40 flex-1 flex items-center justify-center w-full bg-[#040404]">
          <p className="text-gray-400">Loading comparison...</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !comparison) {
    return (
      <div className="flex flex-col min-h-screen relative">
        <Header />
        <main className="py-20 md:py-40 flex-1 flex items-center justify-center w-full bg-[#040404]">
          <p className="text-red-500">{error || "Comparison not found"}</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen relative">
      <Header />
      {/* BackgroundUp is absolutely positioned and will sit behind content */}
      <main className="py-20  md:py-40 flex-1 flex items-center justify-center Rectangle2823 w-full bg-[#040404] lg:bg-gradient-to-b from-black to-[#190845]">
        <Hero data={comparison} className="justify-center items-center" />
      </main>

      <div className="w-full h-[880px] lg:h-[350px] bg-[#040404] lg:bg-gradient-to-t from-black to-[#190845]">
        <ToolsMentioned
          data={comparison.toolsMentioned}
          sectionHeadline={comparison.sectionHeadline}
          tipBulbText={comparison.tipBulbText}
        />
      </div>

      <section className="py-20 md:py-40 w-full bg-[#040404] lg:bg-gradient-to-b from-black to-[#190845]">
        <div className="w-full max-w-[1350px]  flex flex-col mx-auto lg:mx-32 lg:flex-row items-start gap-8 px-4 md:px-0">
          <div className="w-full flex-1 flex flex-col gap-6 relative">
            {/* overlay that sits above Brief + FeatureComparision */}
            <div className="absolute inset-0 pointer-events-none bg-[#040404] lg:bg-gradient-to-b from-transparent via-[#501bd6]/10 to-transparent opacity-80 mix-blend-screen" />

            <div className="relative z-10 flex flex-col gap-6 pt-10 md:pt-0">
              <Brief data={comparison} />
              <FeatureComparision data={comparison.featuresComparison} />
            </div>

            <ProsCons data={comparison.prosConsCards} />

            <Author authorData={author || undefined} data={comparison.author} />
          </div>

          <aside className="hidden md:block w-full md:w-[400px] lg:w-[480px] flex-shrink-0">
            <div className="sticky top-24">
              <BlogModules data={comparison.toolBlogCards} />
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
