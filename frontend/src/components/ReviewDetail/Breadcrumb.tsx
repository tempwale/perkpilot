import { Link } from "react-router-dom";

interface BreadcrumbProps {
  title: string;
}

export default function Breadcrumb({ title }: BreadcrumbProps) {
  return (
    <nav className="mb-6">
      <div
        className="flex items-center gap-2 text-sm font-medium"
        style={{ fontFamily: "Plus Jakarta Sans" }}
      >
        <span className="text-zinc-500">•</span>

        <Link
          to="/"
          className="text-zinc-500 hover:text-zinc-700 transition-colors"
          style={{ fontSize: "14px", lineHeight: "21px" }}
        >
          Home
        </Link>
        <span className="text-zinc-500">•</span>
        <Link
          to="/reviews"
          className="text-zinc-500 hover:text-zinc-700 transition-colors"
          style={{ fontSize: "14px", lineHeight: "21px" }}
        >
          Reviews
        </Link>
        <span className="text-white">•</span>
        <span
          className="text-zinc-100"
          style={{ fontSize: "14px", lineHeight: "21px" }}
        >
          {title}
        </span>
      </div>
    </nav>
  );
}
