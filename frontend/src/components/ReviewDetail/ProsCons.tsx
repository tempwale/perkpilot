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
      className="Frame2147206213 w-full max-w-[608px] p-4 md:p-6 bg-white/10 rounded-3xl outline outline-1 outline-offset-[-1px] outline-white/10 inline-flex flex-col justify-start items-start gap-6 md:gap-10"
    >
      <div
        data-layer="Pros"
        className="Pros self-stretch justify-start text-neutral-50 text-2xl md:text-[32px] font-medium font-['Plus_Jakarta_Sans'] leading-8 md:leading-[42px]"
      >
        Pros
      </div>
      <div
        data-layer="Frame 2147206211"
        className="Frame2147206211 self-stretch flex flex-col justify-start items-start gap-6"
      >
        {pros.map((pro) => (
          <div
            key={pro.id}
            data-layer="Feature"
            className="Feature self-stretch inline-flex justify-start items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              data-layer="check"
              className="Check w-6 h-6"
            >
              <path
                d="M5.56641 13L9.56641 17L19.5664 7"
                stroke="#FAFAFA"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="flex-1 justify-start text-neutral-50 text-base md:text-lg font-medium font-['Plus_Jakarta_Sans'] leading-6 md:leading-[27px]">
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
      className="Frame2147206214 w-full max-w-[608px] p-4 md:p-6 bg-white/10 rounded-3xl outline outline-1 outline-offset-[-1px] outline-white/10 inline-flex flex-col justify-start items-start gap-6 md:gap-10"
    >
      <div
        data-layer="Cons"
        className="Cons self-stretch justify-start text-neutral-50 text-2xl md:text-[32px] font-medium font-['Plus_Jakarta_Sans'] leading-8 md:leading-[42px]"
      >
        Cons
      </div>
      <div
        data-layer="Frame 2147206211"
        className="Frame2147206211 self-stretch flex flex-col justify-start items-start gap-6"
      >
        {cons.map((con) => (
          <div
            key={con.id}
            data-layer="Feature"
            className="Feature self-stretch inline-flex justify-start items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              data-layer="cancel"
              className="Cancel w-6 h-6"
            >
              <path
                d="M7.32376 17.7426L12.5664 12.5M17.809 7.25736L12.5664 12.5M12.5664 12.5L7.32376 7.25736M12.5664 12.5L17.809 17.7426"
                stroke="#FAFAFA"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="flex-1 justify-start text-neutral-50 text-base md:text-lg font-medium font-['Plus_Jakarta_Sans'] leading-6 md:leading-[27px]">
              {con.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function ProsCons({ pros, cons }: ProsConsProps) {
  // Component implementation goes here
  // Will render both ProsCard and ConsCard side by side
  return (
    <div className="w-full px-4 md:px-8 flex flex-col lg:flex-row justify-center items-center lg:items-start gap-6 lg:gap-16 my-8 md:my-16 relative">
      <ProsCard pros={pros} />
      <ConsCard cons={cons} />
      <div className="hidden md:block absolute top-0 left-0 w-full h-full mt-20">
        <Background />
      </div>
    </div>
  );
}

export { ProsCard, ConsCard };
