import { UniversalBadge } from "../UniversalBadge";
import { UniversalCTAButton } from "../UniversalCTAButton";
import ReviewsGrid from "./ReviewsSection/ReviewsGrid";

const ReviewsSection: React.FC = () => {
  return (
    <section className="relative w-full py-16 flex items-center justify-center">
      <div className="flex flex-col items-center gap-6 w-full max-w-7xl px-4">
        <UniversalBadge
          badgeText="Editors Choice"
          secondaryText="Latest Tool’s Reviews"
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
        <div className="mt-8 w-full overflow-hidden px-2">
          <ReviewsGrid />
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

export { ReviewsSection };
