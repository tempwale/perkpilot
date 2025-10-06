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
      className="Frame2147206218 w-full max-w-[608px] lg:w-[608px] p-6 bg-white/10 rounded-3xl outline outline-1 outline-offset-[-1px] outline-white/10 inline-flex justify-start items-center gap-6"
    >
      <div
        data-layer="Frame 2147206217"
        className="Frame2147206217 flex-1 inline-flex flex-col justify-start items-start gap-4"
      >
        <div className="self-stretch justify-start text-neutral-50 text-2xl font-medium font-['Plus_Jakarta_Sans'] leading-loose">
          {useCase.title}
        </div>
        <div className="self-stretch justify-start text-zinc-400 text-base font-normal font-['Plus_Jakarta_Sans'] leading-normal">
          {useCase.description}
        </div>
      </div>
      <div
        data-layer="Frame 2147206216"
        className="Frame2147206216 flex justify-start items-center gap-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          data-layer="star_filled"
          className="StarFilled w-[24.35px] h-[24.35px]"
        >
          <path
            d="M5.92672 22.3207L7.57541 15.1933L2.04596 10.3994L9.35092 9.76528L12.1917 3.0437L15.0325 9.76528L22.3375 10.3994L16.8081 15.1933L18.4567 22.3207L12.1917 18.5414L5.92672 22.3207Z"
            fill="#FFDD33"
          />
        </svg>
        <div className="justify-start text-neutral-50 text-base font-semibold font-['Plus_Jakarta_Sans'] leading-normal">
          {useCase.rating}/5.0
        </div>
      </div>
    </div>
  );
};

export default function BestUseCase({ useCases = [] }: BestUseCaseProps) {
  return (
    <div className="w-full px-[20px] md:px-[100px] py-16">
      <div className="w-full max-w-[1240px] mx-auto">
        <div
          data-layer="Frame 2147206215"
          className="Frame2147206215 inline-flex flex-col justify-start items-start gap-10"
        >
          <div
            data-layer="Best Use Case"
            className="BestUseCase self-stretch justify-start text-neutral-50 text-[32px] font-medium font-['Plus_Jakarta_Sans'] leading-[42px]"
          >
            Best Use Case
          </div>
          <div
            data-layer="Frame 2147206222"
            className="Frame2147206222 flex flex-col lg:flex-row justify-start items-start gap-6"
          >
            <div
              data-layer="Frame 2147206220"
              className="Frame2147206220 flex flex-col justify-start items-start gap-6"
            >
              {useCases.slice(0, 2).map((useCase) => (
                <UseCaseCard key={useCase.id} useCase={useCase} />
              ))}
            </div>
            <div
              data-layer="Frame 2147206221"
              className="Frame2147206221 flex flex-col justify-start items-start gap-6"
            >
              {useCases.slice(2, 4).map((useCase) => (
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
