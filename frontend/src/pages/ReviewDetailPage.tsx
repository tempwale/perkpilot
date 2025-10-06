import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ReviewBackground from "../components/ReviewDetail/ReviewBackground";
import ReviewDetailContent from "../components/ReviewDetail/ReviewDetailContent";
import ProductDetailsSection from "../components/ReviewDetail/ProductDetailsSection";
import RatingsDetails from "../components/ReviewDetail/RatingsDetails";
import ProsCons from "../components/ReviewDetail/ProsCons";
import BestUseCase from "../components/ReviewDetail/BestUseCase";
import PopularIntegrations from "../components/ReviewDetail/PopularIntegrations";
import CTAReviewDetails from "../components/ReviewDetail/CTAReviewDetails";

// Sample data - in a real app this would come from an API
const getReviewData = (id: string) => {
  const reviewsData: { [key: string]: any } = {
    "1": {
      id: "1",
      title: "Framer",
      category: "No-Code Tool",
      shortDescription:
        "Every communications experience, Integrated contact center, voice, video, chat, and APIs.",
      fullDescription:
        "Framer is a powerful no-code design and prototyping tool that enables teams to create interactive, responsive websites and applications without writing code. With its intuitive interface and robust feature set, Framer bridges the gap between design and development, making it an ideal choice for designers, product teams, and agencies who want to bring their ideas to life quickly and efficiently.",
      logoComponent: (
        <svg
          width="21"
          height="32"
          viewBox="0 0 21 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1_1900)">
            <path
              d="M0 0H21V10.6667H10.5L0 0ZM0 10.6667H10.5L21 21.3333H10.5V32L0 21.3333V10.6667Z"
              fill="#0D0D11"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_1900">
              <rect width="21" height="32" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      verified: true,
      rating: "4.8/5.0 Ratings",
      ratingNumber: 4.8,
      totalReviews: 1247,
      website: "https://framer.com",
      founded: "2014",
      employees: "50-100",
      headquarters: "Amsterdam, Netherlands",
      keyFeatures: [
        "Visual Web Design",
        "Interactive Prototyping",
        "Responsive Layouts",
        "Component System",
        "Real-time Collaboration",
        "CMS Integration",
        "Custom Code Support",
        "Animation Tools",
      ],
      pros: [
        "Real-time collaboration",
        "Browser-based",
        "Excellent prototyping",
        "Power design tool",
        "No coding required",
        "Great performance",
        "Intuitive interface",
        "Strong community",
      ],
      cons: [
        "Limited offline access",
        "Pages limitations",
        "Not ideal for e-com",
        "Heavy websites lag",
        "Learning curve",
        "Pricing can be high",
        "Limited integrations",
        "Export limitations",
      ],
      pricing: {
        starter: {
          name: "Starter",
          price: "$5",
          period: "/month",
          features: ["1 site", "100 CMS items", "Basic forms"],
        },
        mini: {
          name: "Mini",
          price: "$14",
          period: "/month",
          features: ["3 sites", "1,000 CMS items", "Custom domain"],
        },
        basic: {
          name: "Basic",
          price: "$25",
          period: "/month",
          features: ["10 sites", "10,000 CMS items", "Advanced forms"],
        },
        pro: {
          name: "Pro",
          price: "$50",
          period: "/month",
          features: ["Unlimited sites", "Unlimited CMS", "Team collaboration"],
        },
      },
      screenshots: [
        "/src/assets/images/screenshots/framer-1.jpg",
        "/src/assets/images/screenshots/framer-2.jpg",
        "/src/assets/images/screenshots/framer-3.jpg",
      ],
      videoUrl: "https://www.youtube.com/embed/framer-demo",
      bestUseCases: [
        {
          id: "1",
          title: "UI/UX Design",
          description: "Perfect for designing web and mobile interfaces.",
          rating: 4.8,
        },
        {
          id: "2",
          title: "Prototyping",
          description: "Create interactive prototypes for user testing.",
          rating: 4.8,
        },
        {
          id: "3",
          title: "Design Systems",
          description: "Build and maintain consistent design systems.",
          rating: 4.8,
        },
        {
          id: "4",
          title: "Team Collaboration",
          description: "Collaborate with designers and developers.",
          rating: 4.8,
        },
      ],
      integrations: [
        { id: "1", name: "Slack" },
        { id: "2", name: "Jira" },
        { id: "3", name: "Notion" },
        { id: "4", name: "Miro" },
        { id: "5", name: "Zeplin" },
        { id: "6", name: "Abstract" },
        { id: "7", name: "Principle" },
        { id: "8", name: "Protopie" },
      ],
    },
    "2": {
      id: "2",
      title: "Figma",
      category: "Design",
      shortDescription: "The collaborative user interface design tool.",
      fullDescription:
        "Figma is the leading collaborative design platform used by millions of designers and developers worldwide. It combines powerful design tools with real-time collaboration, making it the go-to choice for teams building digital products. From wireframes to high-fidelity prototypes, Figma provides everything you need to design, prototype, and gather feedback in one seamless workflow.",
      logoComponent: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 12C12 10.34 13.34 9 15 9C16.66 9 18 10.34 18 12C18 13.66 16.66 15 15 15C13.34 15 12 13.66 12 12Z"
            fill="#1ABCFE"
          />
          <path
            d="M6 21C6 19.34 7.34 18 9 18H12V21C12 22.66 10.66 24 9 24C7.34 24 6 22.66 6 21Z"
            fill="#0ACF83"
          />
          <path
            d="M12 0V9H15C16.66 9 18 7.66 18 6C18 4.34 16.66 3 15 3H12V0Z"
            fill="#FF7262"
          />
          <path
            d="M6 6C6 7.66 7.34 9 9 9H12V3H9C7.34 3 6 4.34 6 6Z"
            fill="#F24E1E"
          />
          <path
            d="M6 15C6 16.66 7.34 18 9 18H12V12H9C7.34 12 6 13.34 6 15Z"
            fill="#A259FF"
          />
        </svg>
      ),
      verified: true,
      rating: "4.9/5.0 Ratings",
      ratingNumber: 4.9,
      totalReviews: 2156,
      website: "https://figma.com",
      founded: "2012",
      employees: "1000+",
      headquarters: "San Francisco, CA",
      keyFeatures: [
        "Real-time Collaboration",
        "Vector Editing",
        "Prototyping",
        "Design Systems",
        "Component Libraries",
        "Version History",
        "Developer Handoff",
        "Plugins & Integrations",
      ],
      pros: [
        "Unlimited Files",
        "Advanced Prototyping",
        "Team Libraries",
        "Version Control",
        "Great collaboration",
        "Cross-platform",
        "Free tier available",
        "Strong community",
      ],
      cons: [
        "Internet dependency",
        "Learning curve",
        "Performance issues",
        "Limited offline features",
        "Can be slow",
        "Limited animation",
        "File organization",
        "Resource intensive",
      ],
      pricing: {
        starter: {
          name: "Starter",
          price: "Free",
          period: "",
          features: ["3 Figma files", "3 FigJam files", "Personal drafts"],
        },
        figmaPro: {
          name: "Figma Pro",
          price: "$12",
          period: "/month",
          features: ["Unlimited files", "Version history", "Team libraries"],
        },
        figmaOrg: {
          name: "Figma Org",
          price: "$45",
          period: "/month",
          features: [
            "Advanced admin",
            "Design system analytics",
            "Guest access",
          ],
        },
        enterprise: {
          name: "Enterprise",
          price: "$75",
          period: "/month",
          features: ["Advanced security", "Custom SSO", "Priority support"],
        },
      },
      screenshots: [
        "/src/assets/images/screenshots/figma-1.jpg",
        "/src/assets/images/screenshots/figma-2.jpg",
        "/src/assets/images/screenshots/figma-3.jpg",
      ],
      videoUrl: "https://www.youtube.com/embed/figma-demo",
      bestUseCases: [
        {
          id: "1",
          title: "UI/UX Design",
          description: "Perfect for designing web and mobile interfaces.",
          rating: 4.8,
        },
        {
          id: "2",
          title: "Prototyping",
          description: "Create interactive prototypes for user testing.",
          rating: 4.8,
        },
        {
          id: "3",
          title: "Design Systems",
          description: "Build and maintain consistent design systems.",
          rating: 4.8,
        },
        {
          id: "4",
          title: "Team Collaboration",
          description: "Collaborate with designers and developers.",
          rating: 4.8,
        },
      ],
      integrations: [
        { id: "1", name: "Slack" },
        { id: "2", name: "Jira" },
        { id: "3", name: "Notion" },
        { id: "4", name: "Miro" },
        { id: "5", name: "Zeplin" },
        { id: "6", name: "Abstract" },
        { id: "7", name: "Principle" },
        { id: "8", name: "Protopie" },
      ],
    },
  };

  return reviewsData[id] || null;
};

export default function ReviewDetailPage() {
  const { id } = useParams<{ id: string }>();
  const reviewData = getReviewData(id || "1");

  if (!reviewData) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">
            Review Not Found
          </h1>
          <p className="text-gray-400">
            The review you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-full">
        <Header />
        {/* Content container with top padding to account for fixed header */}
        <div className="pt-[80px]">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.08)] to-transparent"></div>

          <div className="relative ">
            <div className="hidden md:block">
              <ReviewBackground />
            </div>
            <ReviewDetailContent reviewData={reviewData} />
          </div>
        <ProductDetailsSection />
        <RatingsDetails />
        <ProsCons
          pros={reviewData.pros.map((pro: string, index: number) => ({
            id: `pro-${index}`,
            text: pro,
          }))}
          cons={reviewData.cons.map((con: string, index: number) => ({
            id: `con-${index}`,
            text: con,
          }))}
        />
        <BestUseCase useCases={reviewData.bestUseCases} />
        <PopularIntegrations integrations={reviewData.integrations} />
        <CTAReviewDetails />
        <Footer />
        </div>
      </div>
    </div>
  );
}
