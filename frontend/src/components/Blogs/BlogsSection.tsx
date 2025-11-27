import BlogsGrid from "./BlogsSections/BlogsGrid";

interface BlogsSectionProps {
  searchQuery?: string;
  activeFilter?: string;
}

export default function BlogsSection({ searchQuery = "", activeFilter = "All" }: BlogsSectionProps) {
  return <BlogsGrid searchQuery={searchQuery} activeFilter={activeFilter} />;
}
