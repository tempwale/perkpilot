import React from "react";
import { motion } from "framer-motion";
import { UniversalBadge } from "../../UniversalBadge";
import Benefits from "./Benefits";

const WhyUsContent: React.FC = () => {
  return (
    <div className="relative w-full py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main content centered with animation */}
        <motion.div
          className="flex flex-col gap-[24px] items-center text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Badge */}
          <UniversalBadge
            badgeText="#1 Platform"
            secondaryText="For Discounted SaaS Deals"
            icon="electric"
            variant="primary"
            size="md"
          />

          {/* Main heading with animation */}
          <motion.h2
            className="font-['Plus_Jakarta_Sans'] font-semibold text-[40px] leading-[52px] text-center text-neutral-50 max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Why Choose Our Platform?
          </motion.h2>

          {/* Description text with animation */}
          <motion.p
            className="font-['Plus_Jakarta_Sans'] font-normal text-[16px] leading-[24px] text-center text-zinc-300 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
          >
            We provide comprehensive software insights to help you make informed
            decisions for your business.
          </motion.p>

          {/* Benefits Grid Component */}
          <Benefits />
        </motion.div>
      </div>
    </div>
  );
};

export default WhyUsContent;
