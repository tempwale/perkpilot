import Background from "../Background";

interface ProItem {
  id: string;
  text: string;
}

interface ConItem {
  id: string;
  text: string;
}

interface ProsConsProps {
  pros: ProItem[];
  cons: ConItem[];
}

const ProsCard = ({ pros }: { pros: ProItem[] }) => {
  return (
    <div
      data-layer="Frame 2147206213"
      className="Frame2147206213 box-border w-full md:w-[608px] flex flex-col items-start p-6 bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.08)] rounded-[24px] gap-10"
    >
      <div
        data-layer="Pros"
        className="Pros text-[#FAFAFA] text-[32px] font-medium font-['Plus_Jakarta_Sans'] leading-[42px]"
      >
        Pros
      </div>
      <div
        data-layer="Frame 2147206211"
        className="Frame2147206211 flex flex-col items-start gap-6 w-full"
      >
        {pros.map((pro) => (
          <div
            key={pro.id}
            data-layer="Feature"
            className="Feature flex flex-row items-center gap-2 w-full h-[27px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              data-layer="check"
              className="Check w-6 h-6 flex-none"
            >
              <path
                d="M5.56641 13L9.56641 17L19.5664 7"
                stroke="#FAFAFA"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="flex-1 text-[#FAFAFA] text-lg font-medium font-['Plus_Jakarta_Sans'] leading-[27px]">
              {pro.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ConsCard = ({ cons }: { cons: ConItem[] }) => {
  return (
    <div
      data-layer="Frame 2147206214"
      className="Frame2147206214 box-border w-full md:w-[608px] flex flex-col items-start p-6 bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.08)] rounded-[24px] gap-10"
    >
      <div
        data-layer="Cons"
        className="Cons text-[#FAFAFA] text-[32px] font-medium font-['Plus_Jakarta_Sans'] leading-[42px]"
      >
        Cons
      </div>
      <div
        data-layer="Frame 2147206211"
        className="Frame2147206211 flex flex-col items-start gap-6 w-full"
      >
        {cons.map((con) => (
          <div
            key={con.id}
            data-layer="Feature"
            className="Feature flex flex-row items-center gap-2 w-full h-[27px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              data-layer="cancel"
              className="Cancel w-6 h-6 flex-none"
            >
              <path
                d="M7.32376 17.7426L12.5664 12.5M17.809 7.25736L12.5664 12.5M12.5664 12.5L7.32376 7.25736M12.5664 12.5L17.809 17.7426"
                stroke="#FAFAFA"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="flex-1 text-[#FAFAFA] text-lg font-medium font-['Plus_Jakarta_Sans'] leading-[27px]">
              {con.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function ProsCons({ pros, cons }: ProsConsProps) {
  return (
    <div className="w-full px-[20px] md:px-[100px] py-8 md:py-16">
      <div className="w-full max-w-[1240px] mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-6 md:gap-6">
          <ProsCard pros={pros} />
          <ConsCard cons={cons} />
        </div>
      </div>
    </div>
  );
}

export { ProsCard, ConsCard };
