import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div
      className="backdrop-blur-[8px] backdrop-filter bg-[rgba(255,255,255,0.01)] border-b border-[rgba(255,255,255,0.08)] border-solid box-border flex items-center justify-between px-[100px] py-[24px] relative w-full max-w-[1440px] h-[80px] shrink-0 mx-auto"
      data-name="Header"
      data-node-id="1:1124"
    >
      {/* Logo and Brand */}
      <Link
        to="/"
        className="content-stretch flex gap-[16px] items-center relative shrink-0"
        data-node-id="1:1125"
      >
        <Logo size={40} />
        <div
          className="font-['Plus_Jakarta_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[24px] text-neutral-50 whitespace-nowrap"
          data-node-id="1:1130"
        >
          <p className="leading-[32px]">PerkPilot</p>
        </div>
      </Link>

      {/* Navigation Menu */}
      <div
        className="content-stretch flex gap-[24px] items-center relative shrink-0"
        data-node-id="1:1131"
      >
        <div
          className="content-stretch flex gap-[24px] items-center relative shrink-0"
          data-node-id="1:1132"
        >
          <Link
            to="/"
            className={`bg-clip-text bg-gradient-to-r font-['Plus_Jakarta_Sans:${
              isActive("/") ? "SemiBold" : "Regular"
            }',_sans-serif] ${
              isActive("/") ? "font-semibold" : "font-normal"
            } ${
              isActive("/")
                ? "from-[#fafafa] to-[#949494]"
                : "from-[rgba(250,250,250,0.6)] to-[rgba(148,148,148,0.6)]"
            } leading-[0] relative shrink-0 text-[16px] text-center whitespace-nowrap hover:from-[#fafafa] hover:to-[#949494] transition-all`}
            data-node-id="1:1134"
            style={{ WebkitTextFillColor: "transparent" }}
          >
            <p className="leading-[32px]">Home</p>
          </Link>
          <div
            className="bg-clip-text bg-gradient-to-r font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal from-[rgba(250,250,250,0.6)] leading-[0] relative shrink-0 text-[16px] text-center to-[rgba(148,148,148,0.6)] whitespace-nowrap cursor-pointer hover:from-[#fafafa] hover:to-[#949494] transition-all"
            data-node-id="1:1135"
            style={{ WebkitTextFillColor: "transparent" }}
          >
            <p className="leading-[24px]">Reviews</p>
          </div>
          <div
            className="bg-clip-text bg-gradient-to-r font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal from-[rgba(250,250,250,0.6)] leading-[0] relative shrink-0 text-[16px] text-center to-[rgba(148,148,148,0.6)] whitespace-nowrap cursor-pointer hover:from-[#fafafa] hover:to-[#949494] transition-all"
            data-node-id="1:1136"
            style={{ WebkitTextFillColor: "transparent" }}
          >
            <p className="leading-[24px]">Comparisons</p>
          </div>
          <Link
            to="/deals"
            className={`bg-clip-text bg-gradient-to-r font-['Plus_Jakarta_Sans:${
              isActive("/deals") ? "SemiBold" : "Regular"
            }',_sans-serif] ${
              isActive("/deals") ? "font-semibold" : "font-normal"
            } ${
              isActive("/deals")
                ? "from-[#fafafa] to-[#949494]"
                : "from-[rgba(250,250,250,0.6)] to-[rgba(148,148,148,0.6)]"
            } leading-[0] relative shrink-0 text-[16px] text-center whitespace-nowrap hover:from-[#fafafa] hover:to-[#949494] transition-all`}
            data-node-id="1:1137"
            style={{ WebkitTextFillColor: "transparent" }}
          >
            <p className="leading-[24px]">Deals</p>
          </Link>
          <div
            className="bg-clip-text bg-gradient-to-r font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal from-[rgba(250,250,250,0.6)] leading-[0] relative shrink-0 text-[16px] text-center to-[rgba(148,148,148,0.6)] whitespace-nowrap cursor-pointer hover:from-[#fafafa] hover:to-[#949494] transition-all"
            data-node-id="1:1138"
            style={{ WebkitTextFillColor: "transparent" }}
          >
            <p className="leading-[24px]">Blogs</p>
          </div>
        </div>
      </div>

      {/* Get Started Button */}
      <div
        className="backdrop-blur-sm backdrop-filter bg-gradient-to-b from-[#501bd6] to-[#7f57e2] flex h-[48px] items-center justify-center px-[32px] py-[12px] gap-[12px] rounded-[100px] border border-[rgba(250,250,250,0.08)]"
        data-name="Buttons/main"
        data-node-id="1:1139"
      >
        <div
          className="font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium leading-[0] text-[16px] text-center text-neutral-50 whitespace-nowrap"
          data-node-id="1:1140"
        >
          <p className="leading-[24px]">Get Started</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
