import React, { useState, useEffect } from "react";
import BlogsCard from "./BlogsCard";
import Pagination from "./Pagination";

const blogsData = [
  {
    imageUrl: "",
    featured: true,
    views: 1234,
    title: "The Ultimate Remote Work Stack For 2025",
    description:
      "From just a startup idea to getting 1000s of customers every month and getting loved by globally users like our latest feature about SaaS financing for struggling startups.",
    tags: ["SaaS", "Founders", "Marketplace"],
    readTime: "2 Minute Read",
    date: "27/06/2025",
  },
  {
    imageUrl: "",
    featured: true,
    views: 567,
    title: "How to Build a SaaS MVP in 2025",
    description:
      "A step-by-step guide to launching your SaaS MVP and getting your first users.",
    tags: ["SaaS", "MVP", "Startups"],
    readTime: "3 Minute Read",
    date: "01/07/2025",
  },
  {
    imageUrl: "",
    featured: true,
    views: 890,
    title: "Remote Team Management Tools Compared",
    description: "We compare the best tools for managing remote teams in 2025.",
    tags: ["Remote", "Management", "Tools"],
    readTime: "4 Minute Read",
    date: "15/08/2025",
  },
  {
    imageUrl: "",
    featured: false,
    views: 321,
    title: "Design Systems for SaaS Products",
    description: "Why every SaaS needs a design system and how to build one.",
    tags: ["Design", "SaaS", "UI/UX"],
    readTime: "5 Minute Read",
    date: "22/09/2025",
  },
  {
    imageUrl: "",
    featured: false,
    views: 222,
    title: "Marketing Automation Trends 2025",
    description: "The latest trends in marketing automation for SaaS founders.",
    tags: ["Marketing", "Automation", "Trends"],
    readTime: "2 Minute Read",
    date: "30/09/2025",
  },
  {
    imageUrl: "",
    featured: false,
    views: 999,
    title: "How to Fundraise for Your SaaS Startup",
    description: "Tips and tricks for raising capital in 2025.",
    tags: ["Fundraising", "SaaS", "Startups"],
    readTime: "6 Minute Read",
    date: "05/10/2025",
  },
  {
    imageUrl: "",
    featured: false,
    views: 764,
    title: "The Future of AI in SaaS Applications",
    description:
      "Exploring how artificial intelligence is transforming SaaS platforms in 2025.",
    tags: ["AI", "SaaS", "Innovation"],
    readTime: "4 Minute Read",
    date: "12/10/2025",
  },
  {
    imageUrl: "",
    featured: false,
    views: 645,
    title: "Building Customer Loyalty with SaaS Communities",
    description:
      "How to foster loyal customers through active online communities and engagement.",
    tags: ["Customer Success", "Community", "Retention"],
    readTime: "3 Minute Read",
    date: "18/10/2025",
  },
  {
    imageUrl: "",
    featured: false,
    views: 812,
    title: "Top 10 SaaS Security Best Practices for 2025",
    description:
      "Learn how to secure your SaaS product and protect customer data.",
    tags: ["Security", "SaaS", "Compliance"],
    readTime: "5 Minute Read",
    date: "23/10/2025",
  },
  {
    imageUrl: "",
    featured: false,
    views: 503,
    title: "Why UI/UX Design is the Heart of SaaS Growth",
    description:
      "Design that converts — how great UX drives better SaaS retention and growth.",
    tags: ["Design", "UI/UX", "SaaS"],
    readTime: "3 Minute Read",
    date: "27/10/2025",
  },
  {
    imageUrl: "",
    featured: false,
    views: 1102,
    title: "Scaling Your SaaS from 100 to 10,000 Users",
    description:
      "The strategies high-growth SaaS founders use to scale effectively.",
    tags: ["Scaling", "Growth", "SaaS"],
    readTime: "7 Minute Read",
    date: "01/11/2025",
  },
  {
    imageUrl: "",
    featured: true,
    views: 1450,
    title: "Inside the 2025 SaaS Startup Playbook",
    description:
      "From idea validation to post-launch growth — the ultimate guide for SaaS founders in 2025.",
    tags: ["Playbook", "Startups", "SaaS"],
    readTime: "8 Minute Read",
    date: "05/11/2025",
  },
];

const BlogsGrid: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const showPagination = true;

  // Responsive check
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Reset to page 1 when switching between mobile/desktop
  useEffect(() => {
    setCurrentPage(1);
  }, [isMobile]);

  // 3 rows per page: 6 cards desktop, 3 cards mobile
  const itemsPerPage = isMobile ? 3 : 6;
  const totalPages = Math.ceil(blogsData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayBlogs = showPagination
    ? blogsData.slice(startIndex, endIndex)
    : blogsData;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full flex flex-col items-center gap-8 pb-20">
      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl mx-auto">
        {displayBlogs.map((blog, idx) => (
          <BlogsCard key={idx} {...blog} />
        ))}
      </div>
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
