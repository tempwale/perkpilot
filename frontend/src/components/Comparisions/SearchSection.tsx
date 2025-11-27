import SearchBar from "./SearchSection/SearchBar";

interface SearchSectionProps {
  onSearch?: (query: string) => void;
  onFilterChange?: (filter: string) => void;
  activeFilter?: string;
}

export default function SearchSection({ onSearch, onFilterChange, activeFilter }: SearchSectionProps) {
  return <SearchBar onSearch={onSearch} onFilterChange={onFilterChange} activeFilter={activeFilter} />;
}

export { SearchBar };
