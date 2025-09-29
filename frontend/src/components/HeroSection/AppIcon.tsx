import React from "react";
import { imgEllipse19, imgEllipse21, imgEllipse20, imgVector } from "./assets";

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
    <div className="absolute h-[198.238px] left-[-39.65px] top-[525.55px] w-[441.295px]">
      <div className="absolute inset-[-130.43%_-58.59%]">
        <img alt="" className="block max-w-none size-full" src={imgEllipse19} />
      </div>
    </div>
    <div className="absolute h-[143.076px] left-[75.85px] top-[398.2px] w-[210.305px]">
      <div className="absolute inset-[-60.24%_-40.98%]">
        <img alt="" className="block max-w-none size-full" src={imgEllipse21} />
      </div>
    </div>
    <div className="absolute css-j7119y h-[141.352px] left-[55.16px] top-[399.92px] w-[230.99px]">
      <div className="absolute inset-[-60.98%_-37.31%]">
        <img alt="" className="block max-w-none size-full" src={imgEllipse20} />
      </div>
    </div>
    <div className="absolute inset-[119.88%_39.76%_-49.4%_39.76%]">
      <img alt="" className="block max-w-none size-full" src={imgVector} />
    </div>
    <div className="absolute left-1/2 size-[32px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <img alt="" className="block max-w-none size-full" src={src} />
    </div>
  </div>
);
