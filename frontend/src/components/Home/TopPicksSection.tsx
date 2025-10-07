import { UniversalBadge } from "../UniversalBadge";
import { UniversalCTAButton } from "../UniversalCTAButton";
import PicksGrid from "./TopPicksSection/PicksGrid";
import TopPicksBackground from "./TopPicksSection/TopPicksBackground";
import { motion } from "framer-motion";

const TopPicksSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-4 md:px-8">
      <TopPicksBackground />
      <motion.div
        className="absolute top-8 md:top-16 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-4 md:gap-6 w-full max-w-6xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <UniversalBadge
          badgeText="#1 Platform"
          secondaryText="For Discounted SaaS Deals"
          icon="electric"
          className=""
          variant="primary"
          size="md"
        />

        {/* Main heading with animation */}
        <motion.h2
          className="font-semibold text-[28px] md:text-[36px] lg:text-[40px] leading-[36px] md:leading-[46px] lg:leading-[52px] text-center text-neutral-50 capitalize w-full px-4"
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
          className="font-normal text-[14px] md:text-[16px] leading-[21px] md:leading-[24px] text-center text-zinc-300 max-w-[300px] md:max-w-[600px] lg:max-w-[818px] px-4"
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
          className="mt-6 md:mt-8 w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        >
          <PicksGrid />
        </motion.div>
        {/* CTA Button with animation */}
        <motion.div
          className="flex justify-center mt-6 md:mt-[10px] pb-8 md:pb-0"
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
            onClick={() => console.log("About Us CTA clicked")}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export { TopPicksSection };
