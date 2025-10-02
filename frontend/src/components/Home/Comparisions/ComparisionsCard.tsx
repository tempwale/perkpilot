import React from "react";

interface ComparisionsCardProps {
  app1Name: string;
  app1Icon: string;
  app2Name: string;
  app2Icon: string;
  title: string;
  subtitle: string;
  description: string;
  onViewComparison?: () => void;
}

const ComparisionsCard: React.FC<ComparisionsCardProps> = ({
  app1Name,
  app1Icon,
  app2Name,
  app2Icon,
  title,
  subtitle,
  description,
  onViewComparison,
}) => {
  const LineIcon = () => (
    <div className="h-0 w-4 relative">
      <div className="absolute inset-0 border-t border-zinc-400"></div>
    </div>
  );

  const DotIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
    >
      <circle cx="6.16667" cy="6.2832" r="6" fill="#FAFAFA" />
    </svg>
  );

  return (
    <div className="bg-gradient-to-b from-[#1b132c] to-[#0f0d15] rounded-[24px] p-6 flex flex-col w-full max-w-sm h-full min-h-[299px]">
      {/* Icons and VS Section */}
      <div className="flex flex-col gap-3 items-center w-full flex-grow">
        {/* Icon Row */}
        <div className="flex items-center">
          {/* App 1 Icon */}
          <div className="bg-neutral-50 border border-neutral-50 rounded-full p-2.5 w-14 h-14 flex items-center justify-center">
            <img
              src={app1Icon}
              alt={app1Name}
              className="w-8 h-8 object-contain"
            />
          </div>

          {/* Line */}
          <div className="flex items-center justify-center rotate-180">
            <LineIcon />
          </div>

          {/* VS Badge */}
          <div className="bg-neutral-50 rounded-full w-8 h-8 flex items-center justify-center">
            <p
              className="text-zinc-950 text-sm font-medium"
              style={{ fontFamily: "Poppins" }}
            >
              vs
            </p>
          </div>

          {/* Line */}
          <div className="flex items-center justify-center rotate-180">
            <LineIcon />
          </div>

          {/* App 2 Icon */}
          <div className="bg-neutral-50 border border-neutral-50 rounded-full p-2.5 w-14 h-14 flex items-center justify-center">
            <img
              src={app2Icon}
              alt={app2Name}
              className="w-8 h-8 object-contain"
            />
          </div>
        </div>

        {/* Title */}
        <p
          className="text-neutral-50 text-xl font-medium text-center leading-8 w-full"
          style={{ fontFamily: "Poppins" }}
        >
          {title}
        </p>

        {/* Subtitle with dot */}
        <div className="flex items-center gap-3">
          <DotIcon />
          <p
            className="text-zinc-300 text-sm font-medium text-center"
            style={{ fontFamily: "Poppins" }}
          >
            {subtitle}
          </p>
        </div>

        {/* Description */}
        <p
          className="text-zinc-300 text-sm font-normal text-center w-full"
          style={{ fontFamily: "Poppins" }}
        >
          {description}
        </p>
      </div>

      {/* CTA Button */}
      <button
        onClick={onViewComparison}
        className="bg-gradient-to-b from-[#501bd6] to-[#7f57e2] rounded-full h-12 flex items-center justify-center px-3 py-2 w-full hover:opacity-90 transition-opacity mt-4"
      >
        <p
          className="text-neutral-50 text-base font-normal leading-6"
          style={{ fontFamily: "Poppins" }}
        >
          View Full Comparison
        </p>
      </button>
    </div>
  );
};

export default ComparisionsCard;
