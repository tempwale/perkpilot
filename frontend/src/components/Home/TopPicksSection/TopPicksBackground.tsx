import React from "react";

const TopPicksBackground: React.FC = () => {
  return (
    <div
      role="presentation"
      aria-hidden="true"
      style={{
        width: "1240px",
        height: "1200px",
        background:
          "linear-gradient(180deg, rgba(49, 26, 107, 0.56) 0%, rgba(0, 0, 0, 0.56) 50%)",
        borderRadius: "24px 24px 0 0",
        pointerEvents: "none",
        userSelect: "none",
      }}
    />
  );
};

export default TopPicksBackground;
