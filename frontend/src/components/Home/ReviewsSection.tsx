import { UniversalBadge } from "../UniversalBadge";
import { UniversalCTAButton } from "../UniversalCTAButton";
import ReviewsGrid from "./ReviewsSection/ReviewsGrid";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const ReviewsSection: React.FC = () => {
  const navigate = useNavigate();
  const handleCTAClick = () => {
    void navigate("/reviews");
  };
  return (
    <section className="relative w-full py-16 flex items-center justify-center">
      <motion.div
        className="flex flex-col items-center gap-6 w-full max-w-7xl px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <UniversalBadge
          badgeText="Editors Choice"
          secondaryText="Latest Tool’s Reviews"
          icon="electric"
          className=""
          variant="primary"
          size="md"
        />

        {/* Main heading with animation */}
        <motion.h2
          className="font-semibold text-[40px] leading-[52px] text-center text-neutral-50 capitalize w-full"
          style={{ fontFamily: "Plus Jakarta Sans" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          Top Picks This Month
        </motion.h2>

        {/* Description text with animation */}
        <motion.p
          className="font-normal text-[16px] leading-[24px] text-center text-zinc-300 max-w-[818px]"
          style={{ fontFamily: "Plus Jakarta Sans" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
        >
          Hand-picked software tools that deliver exceptional value and
          performance for modern teams.
        </motion.p>

        {/* Picks Grid below the content with animation */}
        <motion.div
          className="mt-8 w-full overflow-hidden px-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        >
          <ReviewsGrid />
        </motion.div>
        {/* CTA Button with animation */}
        <motion.div
          className="flex justify-center mt-[10px]"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
        >
          <UniversalCTAButton
            text="Explore All Deals"
            icon="arrow"
            variant="primary"
            size="md"
            iconRotation="-rotate-45"
            onClick={handleCTAClick}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export { ReviewsSection };
