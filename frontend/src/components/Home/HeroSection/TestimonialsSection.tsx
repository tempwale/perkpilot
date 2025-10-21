import React from "react";

// Star icon component
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
      fill="#FFC107"
    />
  </svg>
);

// Individual testimonial item
interface TestimonialItemProps {
  quote: string;
}

const TestimonialItem: React.FC<TestimonialItemProps> = ({ quote }) => (
  <div className="flex flex-col gap-[12px] items-center justify-center w-[280px] md:w-[260px] flex-shrink-0 px-4 md:px-0">
    {/* 5-star rating */}
    <div className="flex gap-[4px] items-center">
      {[...Array(5)].map((_, index) => (
        <StarIcon key={index} />
      ))}
    </div>

    {/* Quote */}
    <div className="font-['Inter'] font-normal italic text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] text-center text-zinc-100 min-w-full">
      <p className="whitespace-pre-wrap">{quote}</p>
    </div>
  </div>
);

// Main testimonials component
export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote:
        '"Saved a good amount of money by purchasing tools via perkpilot."',
    },
    {
      quote:
        '"Perkpilot is awesome platform for finding deals at discounted price."',
    },
    {
      quote:
        '"Choosing perkpilot over other marketplace is the best decision."',
    },
  ];

  return (
    <div className="w-full overflow-x-auto">
      <div className="flex flex-row items-center justify-between w-full min-w-[700px] md:min-w-0 mx-auto px-4 md:px-30 py-10 md:py-20 gap-4 md:gap-0">
        {testimonials.map((testimonial, index) => (
          <TestimonialItem key={index} quote={testimonial.quote} />
        ))}
      </div>
    </div>
  );
};
