import React from "react";

// Arrow icon component
const ArrowIcon: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M3.33334 8H12.6667M12.6667 8L8.66668 4M12.6667 8L8.66668 12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Icon types for different button variations
export type CTAIconType =
  | "arrow"
  | "rocket"
  | "star"
  | "check"
  | "download"
  | "custom";

// Additional icons
const RocketIcon: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M8 1L10 6H13L8 14L3 6H6L8 1Z" fill="currentColor" />
  </svg>
);

const StarIcon: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M8 0L10.472 5.528L16 5.528L11.764 8.944L14.236 14.472L8 11.056L1.764 14.472L4.236 8.944L0 5.528L5.528 5.528L8 0Z"
      fill="currentColor"
    />
  </svg>
);

const CheckIcon: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M13.5 4.5L6 12L2.5 8.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DownloadIcon: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M8 1V11M8 11L12 7M8 11L4 7M2 13H14"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface UniversalCTAButtonProps {
  // Button text
  text: string;
  // Icon type or custom icon element
  icon?: CTAIconType | React.ReactNode;
  // Button variants
  variant?: "primary" | "secondary" | "outline-1" | "ghost" | "custom";
  // Size variants
  size?: "sm" | "md" | "lg";
  // Custom styling
  className?: string;
  // Custom colors for gradient (when variant is "custom")
  customGradient?: {
    from: string;
    to: string;
  };
  // Icon position
  iconPosition?: "left" | "right";
  // Click handler
  onClick?: () => void;
  // Disabled state
  disabled?: boolean;
  // Loading state
  loading?: boolean;
  // Icon rotation (useful for arrows)
  iconRotation?: string;
  // Full width
  fullWidth?: boolean;
}

export const UniversalCTAButton: React.FC<UniversalCTAButtonProps> = ({
  text,
  icon = "arrow",
  variant = "primary",
  size = "md",
  className = "",
  customGradient,
  iconPosition = "right",
  onClick,
  disabled = false,
  loading = false,
  iconRotation = "-rotate-45",
  fullWidth = false,
}) => {
  // Size configurations - Updated to match Figma exactly
  const sizeConfig = {
    sm: {
      container: "h-[48px] pl-[32px] pr-[6px] py-[12px] gap-[12px]",
      text: "text-[14px]",
      iconContainer: "w-[24px] h-[24px]",
      iconSize: "w-[12px] h-[12px]",
    },
    md: {
      container: "h-[56px] pl-[40px] pr-[8px] py-[16px] gap-[16px]",
      text: "text-[16px]",
      iconContainer: "w-[32px] h-[32px]",
      iconSize: "w-[16px] h-[16px]",
    },
    lg: {
      container: "h-[64px] pl-[48px] pr-[10px] py-[20px] gap-[20px]",
      text: "text-[18px]",
      iconContainer: "w-[36px] h-[36px]",
      iconSize: "w-[18px] h-[18px]",
    },
  };

  // Variant configurations - Updated with exact Figma styling
  const variantConfig = {
    primary: {
      background: "bg-linear-to-b from-[#501BD6] to-[#7F57E2]",
      border: "border-[rgba(250,250,250,0.08)]",
      textColor: "text-white group-hover:text-black",
      iconBg: "bg-white group-hover:bg-black",
      iconColor: "text-[#7f57e2] group-hover:text-white",
      hover: "hover:bg-white hover:from-white hover:to-white",
      shadow: "shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)]",
    },
    secondary: {
      background: "bg-linear-to-b from-[#6B7280] to-[#4B5563]",
      border: "border-[rgba(250,250,250,0.08)]",
      textColor: "text-white group-hover:text-black",
      iconBg: "bg-white group-hover:bg-black",
      iconColor: "text-[#4B5563] group-hover:text-white",
      hover: "hover:bg-white hover:from-white hover:to-white",
      shadow: "shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)]",
    },
    "outline-1": {
      background: "bg-transparent",
      border: "border-[rgba(250,250,250,0.2)]",
      textColor: "text-white",
      iconBg: "bg-[rgba(250,250,250,0.1)]",
      iconColor: "text-white",
      hover: "hover:bg-[rgba(250,250,250,0.05)]",
      shadow: "",
    },
    ghost: {
      background: "bg-transparent",
      border: "border-transparent",
      textColor: "text-white",
      iconBg: "bg-[rgba(250,250,250,0.1)]",
      iconColor: "text-white",
      hover: "hover:bg-[rgba(250,250,250,0.05)]",
      shadow: "",
    },
    custom: {
      background: customGradient
        ? `bg-linear-to-b from-[${customGradient.from}] to-[${customGradient.to}]`
        : "bg-linear-to-b from-[#501BD6] to-[#7F57E2]",
      border: "border-[rgba(250,250,250,0.08)]",
      textColor: "text-white group-hover:text-black",
      iconBg: "bg-white group-hover:bg-black",
      iconColor: "text-[#7f57e2] group-hover:text-white",
      hover: "hover:bg-white hover:from-white hover:to-white",
      shadow: "shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)]",
    },
  };

  // Icon renderer
  const renderIcon = () => {
    if (React.isValidElement(icon)) {
      return React.cloneElement(
        icon as React.ReactElement<{ className?: string }>,
        {
          className: `${sizeConfig[size].iconSize} ${iconRotation}`,
        }
      );
    }

    const iconComponents = {
      arrow: ArrowIcon,
      rocket: RocketIcon,
      star: StarIcon,
      check: CheckIcon,
      download: DownloadIcon,
      custom: () => null,
    };

    const IconComponent = iconComponents[icon as CTAIconType] || ArrowIcon;
    return (
      <IconComponent
        className={`${sizeConfig[size].iconSize} ${iconRotation}`}
      />
    );
  };

  const config = variantConfig[variant];

  const buttonContent = (
    <>
      {iconPosition === "left" && !loading && (
        <div
          className={`${config.iconBg} rounded-full ${sizeConfig[size].iconContainer} flex items-center justify-center shrink-0 ${config.iconColor}`}
        >
          {renderIcon()}
        </div>
      )}

      <div
        className={`font-['Poppins'] font-normal ${sizeConfig[size].text} ${config.textColor} whitespace-nowrap leading-[24px]`}
      >
        {loading ? "Loading..." : text}
      </div>

      {iconPosition === "right" && !loading && (
        <div
          className={`${config.iconBg} rounded-full ${sizeConfig[size].iconContainer} flex items-center justify-center shrink-0 ${config.iconColor}`}
        >
          {renderIcon()}
        </div>
      )}

      {loading && (
        <div
          className={`${config.iconBg} rounded-full ${sizeConfig[size].iconContainer} flex items-center justify-center shrink-0 ${config.iconColor}`}
        >
          <div
            className={`${sizeConfig[size].iconSize} border-2 border-current border-r-transparent rounded-full animate-spin`}
          />
        </div>
      )}
    </>
  );

  return (
    <button
      className={`
        group
        ${config.background}
        ${config.border}
        ${config.hover}
        ${config.shadow}
        backdrop-blur-sm backdrop-filter
        border border-solid
        flex items-center justify-center
        relative rounded-[100px] shrink-0
        cursor-pointer transition-all duration-200
        ${sizeConfig[size].container}
        ${fullWidth ? "w-full" : ""}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
      onClick={disabled || loading ? undefined : onClick}
      disabled={disabled || loading}
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(250,250,250,0.08)] border-solid inset-0 pointer-events-none rounded-[100px]"
      />
      {buttonContent}
    </button>
  );
};
