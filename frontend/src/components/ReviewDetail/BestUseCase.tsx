interface UseCaseItem {
  id: string;
  title: string;
  description: string;
  rating: number;
}

interface BestUseCaseProps {
  useCases?: UseCaseItem[];
}

interface UseCaseCardProps {
  useCase: UseCaseItem;
}

const UseCaseCard = ({ useCase }: UseCaseCardProps) => {
  return (
    <div
      data-layer="Frame 2147206218"
      className="Frame2147206218 box-border w-full md:w-[608px] flex flex-row items-center p-4 md:p-6 bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.08)] rounded-2xl md:rounded-[24px] gap-4 md:gap-6 min-h-[120px] md:h-[120px]"
    >
      <div
        data-layer="Frame 2147206217"
        className="Frame2147206217 flex-1 flex flex-col items-start gap-3 md:gap-4 min-w-0"
      >
        <div className="text-[#FAFAFA] text-xl md:text-2xl font-medium font-['Plus_Jakarta_Sans'] leading-7 md:leading-8">
          {useCase.title}
        </div>
        <div className="text-[#A1A1AA] text-sm md:text-base font-normal font-['Plus_Jakarta_Sans'] leading-5 md:leading-6">
          {useCase.description}
        </div>
      </div>
      <div
        data-layer="Frame 2147206216"
        className="Frame2147206216 flex flex-row items-center gap-3 md:gap-4 flex-none shrink-0"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          data-layer="star_filled"
          className="StarFilled w-5 h-5 md:w-[24.35px] md:h-[24.35px] flex-none"
        >
          <path
            d="M5.92672 22.3207L7.57541 15.1933L2.04596 10.3994L9.35092 9.76528L12.1917 3.0437L15.0325 9.76528L22.3375 10.3994L16.8081 15.1933L18.4567 22.3207L12.1917 18.5414L5.92672 22.3207Z"
            fill="#FFDD33"
          />
        </svg>
        <div className="text-[#FAFAFA] text-sm md:text-base font-semibold font-['Plus_Jakarta_Sans'] leading-5 md:leading-6 flex-none whitespace-nowrap">
          {useCase.rating}/5.0
        </div>
      </div>
    </div>
  );
};

export default function BestUseCase({ useCases = [] }: BestUseCaseProps) {
  const defaultUseCases: UseCaseItem[] = [
    {
      id: "1",
      title: "UI/UX Design",
      description: "Perfect for designing web and mobile interfaces.",
      rating: 4.8,
    },
    {
      id: "2",
      title: "Prototyping",
      description: "Create interactive prototypes for user testing.",
      rating: 4.8,
    },
    {
      id: "3",
      title: "Design Systems",
      description: "Build and maintain consistent design systems.",
      rating: 4.8,
    },
    {
      id: "4",
      title: "Team Collaboration",
      description: "Collaborate with designers and developers.",
      rating: 4.8,
    },
  ];

  const displayUseCases = useCases.length > 0 ? useCases : defaultUseCases;

  return (
    <div className="w-full px-[20px] md:px-[100px] py-8 md:py-16">
      <div className="w-full max-w-[1240px] mx-auto">
        <div
          data-layer="Frame 2147206215"
          className="Frame2147206215 flex flex-col items-start gap-6 md:gap-10"
        >
          <div
            data-layer="Best Use Case"
            className="BestUseCase text-[#FAFAFA] text-2xl md:text-[32px] font-medium font-['Plus_Jakarta_Sans'] leading-8 md:leading-[42px]"
          >
            Best Use Case
          </div>
          {/* Mobile: Single column, Desktop: Alternating left/right */}
          <div
            data-layer="Frame 2147206222"
            className="Frame2147206222 flex flex-col md:flex-row items-start gap-4 md:gap-6 w-full"
          >
            {/* Mobile: Show all cards in single column */}
            <div className="md:hidden flex flex-col items-start gap-4 w-full">
              {displayUseCases.map((useCase) => (
                <UseCaseCard key={useCase.id} useCase={useCase} />
              ))}
            </div>
            {/* Desktop: Alternating left/right columns */}
            <div
              data-layer="Frame 2147206220"
              className="hidden md:flex flex-col items-start gap-6 w-full md:w-[608px]"
            >
              {displayUseCases
                .filter((_, index) => index % 2 === 0)
                .map((useCase) => (
                <UseCaseCard key={useCase.id} useCase={useCase} />
              ))}
            </div>
            <div
              data-layer="Frame 2147206221"
              className="hidden md:flex flex-col items-start gap-6 w-full md:w-[608px]"
            >
              {displayUseCases
                .filter((_, index) => index % 2 === 1)
                .map((useCase) => (
                <UseCaseCard key={useCase.id} useCase={useCase} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { UseCaseCard };
