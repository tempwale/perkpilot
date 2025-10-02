import React from "react";

interface AboutUsBackgroundProps {
  className?: string;
}

const AboutUsBackground: React.FC<AboutUsBackgroundProps> = ({
  className = "",
}) => {
  return (
    <div
      className={`absolute top-[180px] left-1/2 transform -translate-x-1/2 flex-shrink-0 z-20 ${className}`}
      style={{
        background:
          "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.80) 100%)",
        width: "1440px",
        height: "381px",
        maxWidth: "100vw",
      }}
    />
  );
};

export default AboutUsBackground;
