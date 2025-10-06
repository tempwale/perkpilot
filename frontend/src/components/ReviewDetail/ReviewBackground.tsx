interface ReviewBackgroundProps {
  className?: string;
}

export default function ReviewBackground({
  className = "",
}: ReviewBackgroundProps) {
  return (
    <div
      className={`absolute inset-0 w-full h-[642px] flex-shrink-0 ${className}`}
      style={{
        background: "linear-gradient(180deg, #000 0%, #1A0945 100%)",
      }}
    />
  );
}
