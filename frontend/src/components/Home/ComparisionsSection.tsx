import React from "react";
import { motion } from "framer-motion";
import ComparisionsHeading from "./Comparisions/ComparisionsHeading";
import ComparisionsGrid from "./Comparisions/ComparisionsGrid";

const ComparisionsSection: React.FC = () => {
  const handlePrevious = () => {
    console.log("Previous comparison clicked");
    // Add your navigation logic here
  };

  const handleNext = () => {
    console.log("Next comparison clicked");
    // Add your navigation logic here
  };

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-40">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <ComparisionsHeading onPrevious={handlePrevious} onNext={handleNext} />

        {/* Add comparison content here */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <ComparisionsGrid />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ComparisionsSection;
