import BlogsCard from "../Blogs/BlogsSections/BlogsCard";
import SimilarBlogsHeading from "./SimilarBlogsHeading";

export default function SimilarBlogs() {
  return (
    <div className="w-full max-w-[1232px] mx-auto">
      <SimilarBlogsHeading />
      <div className="mt-6 flex flex-col md:flex-row items-start gap-6">
        <BlogsCard id="blog-1" />
        <BlogsCard id="blog-2" />
      </div>
    </div>
  );
}
