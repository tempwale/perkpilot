import { Link } from "react-router-dom";

interface BreadcrumbProps {
  productName: string;
}

export default function Breadcrumb({ productName }: BreadcrumbProps) {
  return (
    <nav className="mb-6">
      <div
        className="flex items-center gap-2 text-sm font-medium"
        style={{ fontFamily: "Plus Jakarta Sans" }}
      >
        <Link
          to="/"
          className="text-zinc-500 hover:text-zinc-700 transition-colors flex items-center"
          style={{ fontSize: "14px", lineHeight: "21px" }}
        >
          Home
        </Link>
        <span className="text-zinc-500 flex items-center" style={{ fontSize: "14px", lineHeight: "21px" }}>•</span>
        <Link
          to="/reviews"
          className="text-zinc-500 hover:text-zinc-700 transition-colors flex items-center"
          style={{ fontSize: "14px", lineHeight: "21px" }}
        >
          Reviews
        </Link>
        <span className="text-white flex items-center" style={{ fontSize: "14px", lineHeight: "21px" }}>•</span>
        <span
          className="text-zinc-100 flex items-center"
          style={{ fontSize: "14px", lineHeight: "21px" }}
        >
          {productName}
        </span>
      </div>
    </nav>
  );
}
