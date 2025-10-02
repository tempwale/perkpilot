import { UniversalBadge } from "../UniversalBadge";
import { UniversalCTAButton } from "../UniversalCTAButton";
import PicksGrid from "./TopPicksSection/PicksGrid";
import TopPicksBackground from "./TopPicksSection/TopPicksBackground";

const TopPicksSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center">
      <TopPicksBackground />
      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-6 w-full max-w-6xl ">
        <UniversalBadge
          badgeText="#1 Platform"
          secondaryText="For Discounted SaaS Deals"
          icon="electric"
          className=""
          variant="primary"
          size="md"
        />

        {/* Main heading */}
        <h2
          className="font-semibold text-[40px] leading-[52px] text-center text-neutral-50 capitalize w-full"
          style={{ fontFamily: "Plus Jakarta Sans" }}
        >
          Top Picks This Month
        </h2>

        {/* Description text */}
        <p
          className="font-normal text-[16px] leading-[24px] text-center text-zinc-300 max-w-[818px]"
          style={{ fontFamily: "Plus Jakarta Sans" }}
        >
          Hand-picked software tools that deliver exceptional value and
          performance for modern teams.
        </p>

        {/* Picks Grid below the content */}
        <div className="mt-8 w-full">
          <PicksGrid />
        </div>
        {/* CTA Button */}
        <div className="flex justify-center mt-[10px]">
          <UniversalCTAButton
            text="Explore All Deals"
            icon="arrow"
            variant="primary"
            size="md"
            iconRotation="-rotate-45"
            onClick={() => console.log("About Us CTA clicked")}
          />
        </div>
      </div>
    </section>
  );
};

export { TopPicksSection };
