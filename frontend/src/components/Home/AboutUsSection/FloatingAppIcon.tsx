import React from "react";
import FloatinAppIconSvg from "../../../assets/aboutus/FloatinAppIcon.svg";

const FloatingAppIcon: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center">
      {/* Floating discount badge - positioned above the circular container */}
      <div className="mb-2 bg-gradient-to-b from-[#501bd6] to-[#7f57e2] rounded-full px-[12px] py-[6px] flex items-center justify-center">
        <span className="font-['Plus_Jakarta_Sans'] font-semibold text-[12px] leading-[18px] text-white whitespace-nowrap">
          20% OFF
        </span>
      </div>

      {/* Main circular container with app icon */}
      <div className="relative bg-white border-4 border-[#501bd6] rounded-full w-[116px] h-[116px] flex items-center justify-center overflow-hidden">
        {/* Background gradient elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Purple gradient circle */}
          <div className="absolute w-[198px] h-[198px] -left-[39px] top-[52px] opacity-20">
            <div className="w-full h-full bg-gradient-to-br from-purple-400 to-purple-600 rounded-full blur-lg"></div>
          </div>

          {/* Pink gradient circle */}
          <div className="absolute w-[143px] h-[143px] left-[76px] top-[40px] opacity-15">
            <div className="w-full h-full bg-gradient-to-br from-pink-400 to-pink-600 rounded-full blur-lg"></div>
          </div>

          {/* Blue gradient circle */}
          <div className="absolute w-[141px] h-[141px] left-[55px] top-[40px] opacity-15">
            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 rounded-full blur-lg"></div>
          </div>
        </div>

        {/* App icon from SVG file */}
        <div className="relative z-10 w-[80px] h-[80px] flex items-center justify-center">
          <img
            src={FloatinAppIconSvg}
            alt="App Icon"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default FloatingAppIcon;
