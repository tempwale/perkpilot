import React from "react";
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
    <section className="w-full py-20 px-40">
      <div className="max-w-7xl mx-auto">
        <ComparisionsHeading onPrevious={handlePrevious} onNext={handleNext} />

        {/* Add comparison content here */}
        <div className="mt-12">
          <ComparisionsGrid />
        </div>
      </div>
    </section>
  );
};

export default ComparisionsSection;
