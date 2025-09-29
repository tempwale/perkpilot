import React from "react";

interface AppIconProps {
  src: string;
  className?: string;
}

export const AppIcon: React.FC<AppIconProps> = ({ src, className = "" }) => (
  <div
    className={`${className}`}
    style={{
      borderRadius: "77.571px",
      background: "#FFF",
      boxShadow:
        "0 3.448px 6.895px 0 rgba(97, 86, 255, 0.25), 0 6.895px 53.266px 0 rgba(85, 50, 255, 0.46), 0 6.895px 33.787px 0 rgba(100, 57, 255, 0.25), 0 6.895px 430.952px 0 rgba(168, 75, 255, 0.00)",
      width: "56px",
      height: "56px",
      aspectRatio: "1/1",
      overflow: "hidden",
      position: "relative",
    }}
  >
    <div className="absolute left-1/2 size-[32px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <img alt="" className="block max-w-none size-full" src={src} />
    </div>
  </div>
);
