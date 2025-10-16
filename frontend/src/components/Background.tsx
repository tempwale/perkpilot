import React from "react";

interface BackgroundProps {
  className?: string;
  style?: React.CSSProperties;
}

export const Background: React.FC<BackgroundProps> = ({
  className = "",
  style = {},
}) => {
  return (
    <div
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{
        background:
          "linear-gradient(180deg, rgba(103, 43, 255, 0.80) 0%, rgba(159, 121, 255, 0.80) 225.96%)",
        filter: "blur(150px)",
        height: "240.523px",
        flexShrink: 0,
        zIndex: 0,
        // Center the gradient effect and move it down
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        ...style,
      }}
      aria-hidden="true"
      data-testid="hero-background"
    />
  );
};

export default Background;
