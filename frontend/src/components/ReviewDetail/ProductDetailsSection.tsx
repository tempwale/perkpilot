import NavigationTabs from "./NavigationTabs";

interface ProductDetailsSectionProps {
  title: string;
}

export default function ProductDetailsSection({
  title,
}: ProductDetailsSectionProps) {
  return (
    <div className="w-full px-[20px] md:px-[100px] py-32">
      <div className="w-full max-w-[1240px] mx-auto">
        <NavigationTabs title={title} />
      </div>
    </div>
  );
}
