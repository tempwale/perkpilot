import NavigationTabs from "./NavigationTabs";

interface ProductDetailsSectionProps {
  overview?: string;
  features?: Array<{ title: string; description?: string; _id?: string }>;
  pricing?: Array<{
    plan: string;
    amount: string;
    note?: string;
    _id?: string;
  }>;
  keyFeatures?: string[];
  alternatives?: Array<{
    name: string;
    type?: string;
    avatarUrl?: string;
    price?: string;
    rating?: number;
    reviewCount?: number;
    compareNote?: string;
    _id?: string;
  }>;
}

export default function ProductDetailsSection({
  overview,
  features,
  pricing,
  keyFeatures,
  alternatives,
}: ProductDetailsSectionProps) {
  return (
    <div className="w-full px-[20px] md:px-[100px] py-32">
      <div className="w-full max-w-[1240px] mx-auto">
        <NavigationTabs
          overview={overview}
          features={features}
          pricing={pricing}
          keyFeatures={keyFeatures}
          alternatives={alternatives}
        />
      </div>
    </div>
  );
}
