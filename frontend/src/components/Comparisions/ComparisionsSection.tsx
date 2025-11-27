import ComparisionsGrid from "./ComparisionsSection/ComparisionsGrid";

interface ComparisonsSectionProps {
  searchQuery?: string;
  activeFilter?: string;
}

export default function ComparisionsSection({ searchQuery = "", activeFilter = "All" }: ComparisonsSectionProps) {
  return <ComparisionsGrid searchQuery={searchQuery} activeFilter={activeFilter} />;
}
