import React from "react";

// Light bulb icon component
const LightBulbIcon: React.FC<{ className?: string }> = ({
  className = "",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    className={className}
  >
    <path
      d="M21 2.08984L20 3.08984"
      stroke="#FAFAFA"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 2.08984L4 3.08984"
      stroke="#FAFAFA"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 16.0898L20 15.0898"
      stroke="#FAFAFA"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 16.0898L4 15.0898"
      stroke="#FAFAFA"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 18.0898H15"
      stroke="#FAFAFA"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 21.0898H14"
      stroke="#FAFAFA"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.9998 3.08984C7.9997 3.08984 5.95186 5.04013 5.99985 8.08984C6.02324 9.57673 6.4997 10.5898 7.49985 11.5898C8.5 12.5898 9 13.0898 8.99985 15.0898H14.9998C15 13.0899 15.5 12.5899 16.4997 11.59L16.4998 11.5898C17.4997 10.5898 17.9765 9.57673 17.9998 8.08984C18.0478 5.04013 16 3.08984 11.9998 3.08984Z"
      stroke="#FAFAFA"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface LightBulbButtonProps {
  className?: string;
}

export const LightBulbButton: React.FC<LightBulbButtonProps> = ({
  className = "",
}) => {
  return (
    <div
      className={`bg-gradient-to-b from-[#501BD6] to-[#7F57E2] border border-[rgba(255,255,255,0.08)] border-solid flex w-[56px] h-[40px] px-[24px] py-[16px] justify-center items-center gap-[8px] flex-shrink-0 rounded-[100px] ${className}`}
      data-name="Buttons/main"
      data-node-id="1:237"
    >
      <div
        className="overflow-clip relative shrink-0 size-[24px]"
        data-name="light-bulb-on"
        data-node-id="1:239"
      >
        <LightBulbIcon />
      </div>
    </div>
  );
};
