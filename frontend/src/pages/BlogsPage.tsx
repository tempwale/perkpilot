import Background from "../components/Background";
import BlogsSection from "../components/Blogs/BlogsSection";
import SearchSection from "../components/Blogs/SearchSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { UniversalBadge } from "../components/UniversalBadge";
import { motion } from "framer-motion";

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
            <motion.div
              className="content-stretch flex flex-col gap-[24px] items-center relative w-full max-w-6xl mx-auto"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <UniversalBadge
                badgeText="#1 Platform"
                secondaryText="For Expert Insights"
                icon="electric"
                className=""
                variant="primary"
                size="md"
              />

              {/* Main Heading with animation */}
              <motion.h1
                className="bg-clip-text bg-gradient-to-b font-bold from-[#ffffff] leading-[72px] relative shrink-0 text-[56px] text-center to-[#949494] whitespace-pre-wrap"
                style={{ WebkitTextFillColor: "transparent" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                Software Blogs
              </motion.h1>

              {/* Description with animation */}
              <motion.div
                className="font-medium leading-[32px] relative shrink-0 text-[20px] text-center text-zinc-400 max-w-[818px] whitespace-pre-wrap"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
              >
                <p className="mb-0">
                  In-depth reviews, comparisons, and insights about the latest
                  software tools and productivity solutions.
                </p>
              </motion.div>
            </motion.div>
          </div>
          <SearchSection />
          <BlogsSection />
          <Footer />
        </div>
      </div>
    </div>
  );
}
