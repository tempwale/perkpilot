import React from "react";

interface LogoProps {
  size?: number;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 40, className = "" }) => {
  return (
    <div
      className={`relative shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Circular background with gradient */}
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#501bd6" />
            <stop offset="100%" stopColor="#7f57e2" />
          </linearGradient>
        </defs>

        {/* Main circle */}
        <circle cx="20" cy="20" r="20" fill="url(#logoGradient)" />

        {/* Lightning bolt - scaled and centered */}
        <g transform="translate(13, 7) scale(1.0)">
          <path
            d="M13.25 10.7461H7V0.589844L0.75 15.4336H7V25.5898L13.25 10.7461Z"
            fill="white"
          />
        </g>
      </svg>
    </div>
  );
};

export default Logo;
