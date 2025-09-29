import Logo from "./Logo";

const Header = () => {
  return (
    <div
      className="backdrop-blur backdrop-filter bg-[rgba(255,255,255,0.01)] box-border content-stretch flex items-center justify-between px-[100px] py-[16px] relative size-full"
      data-name="Header"
      data-node-id="1:1124"
    >
      <div
        aria-hidden="true"
        className="absolute border-[rgba(255,255,255,0.08)] border-b border-l-0 border-r-0 border-solid border-t-0 bottom-[-1px] left-0 pointer-events-none right-0 top-0"
      />

      {/* Logo and Brand */}
      <div
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
      </div>

      {/* Navigation Menu */}
      <div
        className="content-stretch flex gap-[24px] items-center relative shrink-0"
        data-node-id="1:1131"
      >
        <div
          className="content-stretch flex gap-[24px] items-center relative shrink-0"
          data-node-id="1:1132"
        >
          <div
            className="bg-clip-text bg-gradient-to-r font-['Plus_Jakarta_Sans:SemiBold',_sans-serif] font-semibold from-[#fafafa] leading-[0] relative shrink-0 text-[16px] text-center to-[#949494] whitespace-nowrap"
            data-node-id="1:1134"
            style={{ WebkitTextFillColor: "transparent" }}
          >
            <p className="leading-[32px]">Home</p>
          </div>
          <div
            className="bg-clip-text bg-gradient-to-r font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal from-[rgba(250,250,250,0.6)] leading-[0] relative shrink-0 text-[16px] text-center to-[rgba(148,148,148,0.6)] whitespace-nowrap"
            data-node-id="1:1135"
            style={{ WebkitTextFillColor: "transparent" }}
          >
            <p className="leading-[24px]">Reviews</p>
          </div>
          <div
            className="bg-clip-text bg-gradient-to-r font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal from-[rgba(250,250,250,0.6)] leading-[0] relative shrink-0 text-[16px] text-center to-[rgba(148,148,148,0.6)] whitespace-nowrap"
            data-node-id="1:1136"
            style={{ WebkitTextFillColor: "transparent" }}
          >
            <p className="leading-[24px]">Comparisons</p>
          </div>
          <div
            className="bg-clip-text bg-gradient-to-r font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal from-[rgba(250,250,250,0.6)] leading-[0] relative shrink-0 text-[16px] text-center to-[rgba(148,148,148,0.6)] whitespace-nowrap"
            data-node-id="1:1137"
            style={{ WebkitTextFillColor: "transparent" }}
          >
            <p className="leading-[24px]">Deals</p>
          </div>
          <div
            className="bg-clip-text bg-gradient-to-r font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal from-[rgba(250,250,250,0.6)] leading-[0] relative shrink-0 text-[16px] text-center to-[rgba(148,148,148,0.6)] whitespace-nowrap"
            data-node-id="1:1138"
            style={{ WebkitTextFillColor: "transparent" }}
          >
            <p className="leading-[24px]">Blogs</p>
          </div>
        </div>
      </div>

      {/* Get Started Button */}
      <div
        className="backdrop-blur-sm backdrop-filter bg-gradient-to-b box-border content-stretch flex from-[#501bd6] gap-[12px] h-[40px] items-center justify-center px-[24px] py-[8px] relative rounded-[100px] shrink-0 to-[#7f57e2]"
        data-name="Buttons/main"
        data-node-id="1:1139"
      >
        <div
          aria-hidden="true"
          className="absolute border border-[rgba(250,250,250,0.08)] border-solid inset-0 pointer-events-none rounded-[100px]"
        />
        <div
          className="font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[16px] text-center text-neutral-50 whitespace-nowrap"
          data-node-id="1:1140"
        >
          <p className="leading-[24px]">Get Started</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
