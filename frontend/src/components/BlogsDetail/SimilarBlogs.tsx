import BlogsCard from "../Blogs/BlogsSections/BlogsCard";
import ComparisionsHeading from "./ComparisionsHeading";

export default function SimilarBlogs() {
  return (
    <div className="w-full max-w-[1232px] mx-auto">
      <ComparisionsHeading />
      <div className="mt-6 flex flex-col md:flex-row items-start gap-6">
        <BlogsCard id="blog-1" />
        <BlogsCard id="blog-2" />
      </div>
    </div>
  );
}
