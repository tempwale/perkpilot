import React, { useState, useEffect } from "react";
import BlogsCard from "./BlogsCard";
import Pagination from "./Pagination";
import { motion } from "framer-motion";
import { fetchBlogs} from "../../../hooks/useBlogs";
import { type Blog } from "../../../types/blogs.types";

const formatDate = (date?: string | Date): string => {
  if (!date) return "";
  const d = new Date(date);
  if (isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};


const transformBlog = (blog: Blog) => ({
  id: blog._id || blog.id || "",
  slug: blog.blogSlug, 
  imageUrl: blog.blogHeroImage || "",
  featured: blog.blogIsFeatured ?? false,
  views: blog.blogViewCount ?? 0,
  title: blog.blogHeading || "",
  description: blog.blogBody || "",
  tags: blog.blogCategory ? [blog.blogCategory] : [],
  readTime: blog.blogReadingTime || "",
  date: formatDate(blog.createdAt),
});

interface BlogsGridProps {
  searchQuery?: string;
  activeFilter?: string;
}

const BlogsGrid: React.FC<BlogsGridProps> = ({ searchQuery = "", activeFilter = "All" }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const showPagination = true;


  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);


  // Fetch all blogs on mount
  useEffect(() => {
    const loadBlogs = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetchBlogs({
          page: 1,
          limit: 1000, // Fetch all blogs for client-side filtering
          published: true,
          sortBy: "-createdAt",
        });
        setBlogs(response.data);
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError(err instanceof Error ? err.message : "Failed to load blogs");
      } finally {
        setLoading(false);
      }
    };

    void loadBlogs();
  }, []);

  // Reset to page 1 when search query, filter, or mobile state changes
  useEffect(() => {
    setCurrentPage(1);
  }, [isMobile, searchQuery, activeFilter]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Filter and sort blogs
  const filteredAndSortedBlogs = React.useMemo(() => {
    let filtered = [...blogs];

    // Apply category filter
    if (activeFilter && activeFilter !== "All") {
      filtered = filtered.filter((blog) =>
        blog.blogCategory?.toLowerCase() === activeFilter.toLowerCase()
      );
    }

    // Apply search query
    if (searchQuery.trim()) {
      const lowerQuery = searchQuery.toLowerCase();
      filtered = filtered.filter((blog) => {
        return (
          blog.blogHeading?.toLowerCase().includes(lowerQuery) ||
          blog.blogBody?.toLowerCase().includes(lowerQuery) ||
          blog.blogCategory?.toLowerCase().includes(lowerQuery)
        );
      });
    }

    // Sort: featured first, then by date (newest first)
    filtered.sort((a, b) => {
      const aFeatured = a.blogIsFeatured ?? false;
      const bFeatured = b.blogIsFeatured ?? false;

      // Featured blogs come first
      if (aFeatured && !bFeatured) return -1;
      if (!aFeatured && bFeatured) return 1;

      // Both featured or both not featured - sort by date (newest first)
      const aDate = a.createdAt ? new Date(a.createdAt).getTime() : 0;
      const bDate = b.createdAt ? new Date(b.createdAt).getTime() : 0;
      return bDate - aDate;
    });

    return filtered;
  }, [blogs, searchQuery, activeFilter]);

  // Pagination
  const itemsPerPage = isMobile ? 3 : 6;
  const totalPages = Math.ceil(filteredAndSortedBlogs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedBlogs = filteredAndSortedBlogs.slice(startIndex, endIndex);

  const displayBlogs = paginatedBlogs.map(transformBlog);

  if (loading) {
    return (
      <div className="w-full flex flex-col items-center gap-8 pb-20">
        <div className="text-zinc-400">Loading blogs...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full flex flex-col items-center gap-8 pb-20">
        <div className="text-red-400">Error: {error}</div>
      </div>
    );
  }

  if (displayBlogs.length === 0 && !loading) {
    return (
      <div className="w-full flex flex-col items-center gap-8 pb-20">
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-lg text-gray-400">No blogs found matching your search</p>
          {(searchQuery || activeFilter !== "All") && (
            <p className="text-sm text-gray-500">Try searching with different keywords or filters</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center gap-8 pb-20">
      {/* Blog Cards Grid with animation */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {displayBlogs.map((blog, idx) => (
          <motion.div
            key={blog.id || idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.07, ease: "easeOut" }}
          >
            <BlogsCard {...blog} />
          </motion.div>
        ))}
      </motion.div>
      {/* Pagination */}
      {showPagination && totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default BlogsGrid;