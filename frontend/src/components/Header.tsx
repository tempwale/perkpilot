import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Logo from "./Logo";

// Hamburger Menu Icon Component
const HamburgerIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 12H21"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 6H21"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 18H21"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
// Close Icon Component
const CloseIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 6L6 18"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 6L18 18"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div
        className="backdrop-blur-[8px] backdrop-filter bg-[rgba(255,255,255,0.01)] border-b border-[rgba(255,255,255,0.08)] border-solid box-border flex items-center justify-between px-[20px] md:px-[100px] py-[24px] relative w-full max-w-full h-[80px] shrink-0 mx-auto z-[100]"
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

        {/* Desktop Navigation Menu */}
        <div
          className="hidden md:flex content-stretch gap-[24px] items-center relative shrink-0"
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
            <Link
              to="/reviews"
              className={`bg-clip-text bg-gradient-to-r font-['Plus_Jakarta_Sans:${
                isActive("/reviews") ? "SemiBold" : "Regular"
              }',_sans-serif] ${
                isActive("/reviews") ? "font-semibold" : "font-normal"
              } ${
                isActive("/reviews")
                  ? "from-[#fafafa] to-[#949494]"
                  : "from-[rgba(250,250,250,0.6)] to-[rgba(148,148,148,0.6)]"
              } leading-[0] relative shrink-0 text-[16px] text-center whitespace-nowrap hover:from-[#fafafa] hover:to-[#949494] transition-all`}
              data-node-id="1:1135"
              style={{ WebkitTextFillColor: "transparent" }}
            >
              <p className="leading-[24px]">Reviews</p>
            </Link>
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

        {/* Desktop Get Started Button */}
        <div
          className="hidden md:flex backdrop-blur-sm backdrop-filter bg-gradient-to-b from-[#501bd6] to-[#7f57e2] h-[48px] items-center justify-center px-[32px] py-[12px] gap-[12px] rounded-[100px] border border-[rgba(250,250,250,0.08)]"
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

        {/* Mobile Hamburger Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden relative shrink-0 size-[40px] flex items-center justify-center"
          data-name="mobile-menu-button"
        >
          {isMobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
        </button>
      </div>

      {/* Mobile Menu Portal - positioned outside main header to avoid blur effect on logo */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Dark background overlay with custom backdrop filter */}
          <div
            className="absolute inset-0"
            style={{
              background: "rgba(0, 0, 0, 0.04)",
              backdropFilter: "blur(12px)",
            }}
            onClick={() => setIsMobileMenuOpen(false)}
          />
          {/* Mobile menu content */}
          <div className="absolute top-[80px] left-0 right-0 bg-[#0a0612] border-b border-[rgba(255,255,255,0.1)] shadow-2xl">
            <div className="flex flex-col px-[20px] py-[32px] space-y-6">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`bg-clip-text bg-gradient-to-r font-['Plus_Jakarta_Sans:${
                  isActive("/") ? "SemiBold" : "Regular"
                }',_sans-serif] ${
                  isActive("/") ? "font-semibold" : "font-normal"
                } ${
                  isActive("/")
                    ? "from-[#fafafa] to-[#949494]"
                    : "from-[rgba(250,250,250,0.95)] to-[rgba(148,148,148,0.95)]"
                } text-[22px] py-4 block hover:from-[#fafafa] hover:to-[#949494] transition-all border-b border-[rgba(255,255,255,0.08)]`}
                style={{ WebkitTextFillColor: "transparent" }}
              >
                Home
              </Link>
              <Link
                to="/reviews"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`bg-clip-text bg-gradient-to-r font-['Plus_Jakarta_Sans:${
                  isActive("/reviews") ? "SemiBold" : "Regular"
                }',_sans-serif] ${
                  isActive("/reviews") ? "font-semibold" : "font-normal"
                } ${
                  isActive("/reviews")
                    ? "from-[#fafafa] to-[#949494]"
                    : "from-[rgba(250,250,250,0.95)] to-[rgba(148,148,148,0.95)]"
                } text-[22px] py-4 block hover:from-[#fafafa] hover:to-[#949494] transition-all border-b border-[rgba(255,255,255,0.08)]`}
                style={{ WebkitTextFillColor: "transparent" }}
              >
                Reviews
              </Link>
              <div
                className="bg-clip-text bg-gradient-to-r font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal from-[rgba(250,250,250,0.95)] to-[rgba(148,148,148,0.95)] text-[22px] py-4 cursor-pointer block hover:from-[#fafafa] hover:to-[#949494] transition-all border-b border-[rgba(255,255,255,0.08)]"
                style={{ WebkitTextFillColor: "transparent" }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Comparisons
              </div>
              <Link
                to="/deals"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`bg-clip-text bg-gradient-to-r font-['Plus_Jakarta_Sans:${
                  isActive("/deals") ? "SemiBold" : "Regular"
                }',_sans-serif] ${
                  isActive("/deals") ? "font-semibold" : "font-normal"
                } ${
                  isActive("/deals")
                    ? "from-[#fafafa] to-[#949494]"
                    : "from-[rgba(250,250,250,0.95)] to-[rgba(148,148,148,0.95)]"
                } text-[22px] py-4 block hover:from-[#fafafa] hover:to-[#949494] transition-all border-b border-[rgba(255,255,255,0.08)]`}
                style={{ WebkitTextFillColor: "transparent" }}
              >
                Deals
              </Link>
              <div
                className="bg-clip-text bg-gradient-to-r font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal from-[rgba(250,250,250,0.95)] to-[rgba(148,148,148,0.95)] text-[22px] py-4 cursor-pointer block hover:from-[#fafafa] hover:to-[#949494] transition-all border-b border-[rgba(255,255,255,0.08)]"
                style={{ WebkitTextFillColor: "transparent" }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blogs
              </div>

              {/* Mobile Get Started Button */}
              <div className="pt-6">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="backdrop-blur-sm backdrop-filter bg-gradient-to-b from-[#501bd6] to-[#7f57e2] flex h-[56px] items-center justify-center px-[32px] py-[12px] gap-[12px] rounded-[100px] border border-[rgba(250,250,250,0.08)] w-full hover:opacity-90 transition-opacity shadow-xl"
                  data-name="Buttons/main"
                >
                  <div className="font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium text-[18px] text-center text-neutral-50">
                    Get Started
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
