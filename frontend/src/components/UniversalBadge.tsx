import React from "react";

// Electric/Lightning icon component
const ElectricIcon: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    className={className}
  >
    <path d="M8.5 1L3.5 8H7.5L7 15L12 8H8L8.5 1Z" fill="white" />
  </svg>
);

// Icon types for different badge variations
export type BadgeIconType =
  | "electric"
  | "star"
  | "check"
  | "heart"
  | "rocket"
  | "custom";

// Star icon
const StarIcon: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    className={className}
  >
    <path
      d="M8 0L10.472 5.528L16 5.528L11.764 8.944L14.236 14.472L8 11.056L1.764 14.472L4.236 8.944L0 5.528L5.528 5.528L8 0Z"
      fill="white"
    />
  </svg>
);

// Check icon
const CheckIcon: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    className={className}
  >
    <path
      d="M13.5 4.5L6 12L2.5 8.5"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Heart icon
const HeartIcon: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    className={className}
  >
    <path
      d="M14 3.5C14 2.11929 12.8807 1 11.5 1C10.1193 1 9 2.11929 9 3.5C9 2.11929 7.88071 1 6.5 1C5.11929 1 4 2.11929 4 3.5C4 6.5 8 10.5 8 10.5S12 6.5 12 3.5H14Z"
      fill="white"
    />
  </svg>
);

// Rocket icon
const RocketIcon: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    className={className}
  >
    <path d="M8 1L10 6H13L8 14L3 6H6L8 1Z" fill="white" />
  </svg>
);

interface UniversalBadgeProps {
  // Main badge text (appears in the colored section)
  badgeText: string;
  // Secondary text (appears with gradient)
  secondaryText?: string;
  // Icon type or custom icon element
  icon?: BadgeIconType | React.ReactNode;
  // Custom styling
  className?: string;
  // Badge color variants
  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "custom";
  // Custom colors for gradient (when variant is "custom")
  customGradient?: {
    from: string;
    to: string;
  };
  // Size variants
  size?: "sm" | "md" | "lg";
  // Click handler
  onClick?: () => void;
}

export const UniversalBadge: React.FC<UniversalBadgeProps> = ({
  badgeText,
  secondaryText,
  icon = "electric",
  className = "",
  variant = "primary",
  customGradient,
  size = "md",
  onClick,
}) => {
  // Size configurations
  const sizeConfig = {
    sm: {
      container: "gap-[8px] pl-[12px] pr-[16px] py-[6px]",
      badgeSection: "gap-[3px] h-[20px] pl-[6px] pr-[8px] py-[3px]",
      badgeText: "text-[10px]",
      secondaryText: "text-[12px]",
      iconSize: "size-[12px]",
    },
    md: {
      container: "gap-[12px] pl-[16px] pr-[24px] py-[8px]",
      badgeSection: "gap-[4px] h-[24px] pl-[8px] pr-[12px] py-[4px]",
      badgeText: "text-[12px]",
      secondaryText: "text-[14px]",
      iconSize: "size-[16px]",
    },
    lg: {
      container: "gap-[16px] pl-[20px] pr-[32px] py-[12px]",
      badgeSection: "gap-[6px] h-[32px] pl-[12px] pr-[16px] py-[6px]",
      badgeText: "text-[14px]",
      secondaryText: "text-[16px]",
      iconSize: "size-[20px]",
    },
  };

  // Color variants
  const colorVariants = {
    primary: "from-[#501bd6] to-[#7f57e2]",
    secondary: "from-[#6B7280] to-[#4B5563]",
    success: "from-[#10B981] to-[#059669]",
    warning: "from-[#F59E0B] to-[#D97706]",
    danger: "from-[#EF4444] to-[#DC2626]",
    custom: customGradient
      ? `from-[${customGradient.from}] to-[${customGradient.to}]`
      : "from-[#501bd6] to-[#7f57e2]",
  };

  // Icon renderer
  const renderIcon = () => {
    if (React.isValidElement(icon)) {
      return React.cloneElement(
        icon as React.ReactElement<{ className?: string }>,
        {
          className: `${sizeConfig[size].iconSize}`,
        }
      );
    }

    const iconComponents = {
      electric: ElectricIcon,
      star: StarIcon,
      check: CheckIcon,
      heart: HeartIcon,
      rocket: RocketIcon,
      custom: () => null,
    };

    const IconComponent = iconComponents[icon as BadgeIconType] || ElectricIcon;
    return <IconComponent className={sizeConfig[size].iconSize} />;
  };

  return (
    <div
      className={`bg-[rgba(244,244,245,0.08)] box-border content-stretch flex items-center justify-center relative rounded-[100px] ${
        sizeConfig[size].container
      } ${
        onClick
          ? "cursor-pointer hover:bg-[rgba(244,244,245,0.12)] transition-colors"
          : ""
      } ${className}`}
      onClick={onClick}
    >
      {/* Main badge section with icon and text */}
      <div
        className={`bg-gradient-to-b box-border content-stretch flex items-center relative rounded-[100px] shrink-0 ${colorVariants[variant]} ${sizeConfig[size].badgeSection}`}
      >
        {/* Icon */}
        <div className="relative shrink-0">{renderIcon()}</div>

        {/* Badge text */}
        <div
          className={`font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-center text-white whitespace-nowrap ${sizeConfig[size].badgeText}`}
        >
          <p className="leading-[normal]">{badgeText}</p>
        </div>
      </div>

      {/* Secondary text (optional) */}
      {secondaryText && (
        <div
          className={`bg-clip-text bg-gradient-to-r font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium from-[#ffffff] leading-[0] relative shrink-0 text-center to-[#949494] whitespace-nowrap ${sizeConfig[size].secondaryText}`}
          style={{ WebkitTextFillColor: "transparent" }}
        >
          <p className="leading-[normal]">{secondaryText}</p>
        </div>
      )}
    </div>
  );
};
