import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
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
  const [isScrolled, setIsScrolled] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`${
          isScrolled
            ? "backdrop-blur-[8px] backdrop-filter bg-[rgba(255,255,255,0.01)]"
            : "bg-transparent"
        } border-b border-[rgba(255,255,255,0.08)] border-solid box-border flex items-center justify-between px-[20px] lg:px-[100px] py-[24px] fixed top-0 left-0 w-full h-[80px] shrink-0 z-[100] transition-all duration-300`}
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
          className="hidden lg:flex content-stretch gap-[24px] items-center relative shrink-0"
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
            <Link
              to="/comparisons"
              className={`bg-clip-text bg-gradient-to-r font-['Plus_Jakarta_Sans:${
                isActive("/comparisons") ? "SemiBold" : "Regular"
              }',_sans-serif] ${
                isActive("/comparisons") ? "font-semibold" : "font-normal"
              } ${
                isActive("/comparisons")
                  ? "from-[#fafafa] to-[#949494]"
                  : "from-[rgba(250,250,250,0.6)] to-[rgba(148,148,148,0.6)]"
              } leading-[0] relative shrink-0 text-[16px] text-center whitespace-nowrap hover:from-[#fafafa] hover:to-[#949494] transition-all`}
              data-node-id="1:1136"
              style={{ WebkitTextFillColor: "transparent" }}
            >
              <p className="leading-[24px]">Comparisons</p>
            </Link>
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
            <Link
              to="/blogs"
              className={`bg-clip-text bg-gradient-to-r font-['Plus_Jakarta_Sans:${
                isActive("/blogs") ? "SemiBold" : "Regular"
              }',_sans-serif] ${
                isActive("/blogs") ? "font-semibold" : "font-normal"
              } ${
                isActive("/blogs")
                  ? "from-[#fafafa] to-[#949494]"
                  : "from-[rgba(250,250,250,0.6)] to-[rgba(148,148,148,0.6)]"
              } leading-[0] relative shrink-0 text-[16px] text-center whitespace-nowrap hover:from-[#fafafa] hover:to-[#949494] transition-all`}
              data-node-id="1:1138"
              style={{ WebkitTextFillColor: "transparent" }}
            >
              <p className="leading-[24px]">Blogs</p>
            </Link>
          </div>
        </div>

        {/* Desktop Get Started Button */}
        <div
          className="hidden lg:flex backdrop-blur-sm backdrop-filter bg-gradient-to-b from-[#501bd6] to-[#7f57e2] h-[48px] items-center justify-center px-[32px] py-[12px] gap-[12px] rounded-[100px] border border-[rgba(250,250,250,0.08)]"
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
          className="lg:hidden relative shrink-0 size-[40px] flex items-center justify-center"
          data-name="mobile-menu-button"
        >
          {isMobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
        </button>
      </div>

      {/* Mobile Menu Portal - positioned outside main header to avoid blur effect on logo */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
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
              <Link
                to="/comparisons"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`bg-clip-text bg-gradient-to-r font-['Plus_Jakarta_Sans:${
                  isActive("/comparisons") ? "SemiBold" : "Regular"
                }',_sans-serif] ${
                  isActive("/comparisons") ? "font-semibold" : "font-normal"
                } ${
                  isActive("/comparisons")
                    ? "from-[#fafafa] to-[#949494]"
                    : "from-[rgba(250,250,250,0.95)] to-[rgba(148,148,148,0.95)]"
                } text-[22px] py-4 block hover:from-[#fafafa] hover:to-[#949494] transition-all border-b border-[rgba(255,255,255,0.08)]`}
                style={{ WebkitTextFillColor: "transparent" }}
              >
                Comparisons
              </Link>
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
              <Link
                to="/blogs"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`bg-clip-text bg-gradient-to-r font-['Plus_Jakarta_Sans:${
                  isActive("/blogs") ? "SemiBold" : "Regular"
                }',_sans-serif] ${
                  isActive("/blogs") ? "font-semibold" : "font-normal"
                } ${
                  isActive("/blogs")
                    ? "from-[#fafafa] to-[#949494]"
                    : "from-[rgba(250,250,250,0.95)] to-[rgba(148,148,148,0.95)]"
                } text-[22px] py-4 block hover:from-[#fafafa] hover:to-[#949494] transition-all border-b border-[rgba(255,255,255,0.08)]`}
                style={{ WebkitTextFillColor: "transparent" }}
              >
                Blogs
              </Link>

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
