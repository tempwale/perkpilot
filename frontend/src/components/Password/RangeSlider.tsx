import type { ChangeEvent } from "react";

type Props = {
  value: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  min?: number;
  max?: number;
  ariaLabel?: string;
};

export default function RangeSlider({
  value,
  onChange,
  min = 4,
  max = 64,
  ariaLabel = "password-length",
}: Props) {
  const pct = ((value - min) / (max - min)) * 100;

  return (
    <input
      aria-label={ariaLabel}
      type="range"
      min={min}
      max={max}
      value={value}
      onChange={onChange}
      className={`
        w-full h-2 rounded-lg appearance-none cursor-pointer
        bg-gradient-to-r from-[#7f57e2] to-gray-200
        transition-all duration-200
        [&::-webkit-slider-thumb]:appearance-none
        [&::-webkit-slider-thumb]:w-4
        [&::-webkit-slider-thumb]:h-4
        [&::-webkit-slider-thumb]:rounded-full
        [&::-webkit-slider-thumb]:bg-[#7f57e2]
        [&::-webkit-slider-thumb]:hover:bg-[#6b46d3]
        [&::-webkit-slider-thumb]:cursor-pointer
        [&::-moz-range-thumb]:w-4
        [&::-moz-range-thumb]:h-4
        [&::-moz-range-thumb]:rounded-full
        [&::-moz-range-thumb]:bg-[#7f57e2]
      `}
      style={{
        background: `linear-gradient(90deg, #7f57e2 ${pct}%, #e5e7eb ${pct}%)`,
      }}
    />
  );
}
