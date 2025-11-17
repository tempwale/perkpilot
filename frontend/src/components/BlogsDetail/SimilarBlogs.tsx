import BlogsCard from "../Blogs/BlogsSections/BlogsCard";
import SimilarBlogsHeading from "./SimilarBlogsHeading";
import type { BlogMoreBlog } from "../../types/blogs.types";

interface SimilarBlogsProps {
  sectionTitle?: string;
  blogs?: BlogMoreBlog[];
}

export default function SimilarBlogs({
  sectionTitle = "Similar Blogs",
  blogs = [],
}: SimilarBlogsProps) {
  const formatDate = (date?: string): string => {
    if (!date) return "";
    try {
      const d = new Date(date);
      if (isNaN(d.getTime())) return date;
      return d.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
    } catch {
      return date;
    }
  };

  return (
    <div className="w-full max-w-[1232px] mx-auto">
      <SimilarBlogsHeading title={sectionTitle} />
      <div className="mt-6 flex flex-col md:flex-row items-start gap-6">
        {blogs.length > 0 ? (
          blogs.map((blog, idx) => (
            <BlogsCard
              key={blog.blogId || idx}
              id={blog.blogId || `blog-${idx}`}
              slug={blog.blogSlug}
              title={blog.title}
              description={blog.description}
              imageUrl={blog.image}
              featured={blog.featured}
              views={blog.viewCount}
              tags={blog.tags || (blog.category ? [blog.category] : [])}
              readTime={blog.readingTime}
              date={formatDate(blog.date)}
            />
          ))
        ) : (
          <>
            <BlogsCard id="blog-1" />
            <BlogsCard id="blog-2" />
          </>
        )}
      </div>
    </div>
  );
}
