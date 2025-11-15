interface ProsConsCard {
  cardNumber: number;
  titlePros: string;
  titleCons: string;
  prosConsPairs: Array<{
    pro: string;
    con: string;
  }>;
}

interface ProsConsProps {
  data?: ProsConsCard[];
}

export function ProsConsTable({ card }: { card?: ProsConsCard }) {
  const titlePros = card?.titlePros || "Pros";
  const titleCons = card?.titleCons || "Cons";
  const prosConsPairs = card?.prosConsPairs || [];

  return (
    <div
      data-layer="Frame 2147206213"
      className="Frame2147206213 self-stretch p-4 bg-white/10 rounded-3xl outline outline-1 outline-offset-[-1px] outline-white/10 inline-flex flex-col justify-start items-start gap-6"
    >
      <div
        data-layer="Pros"
        className="Pros self-stretch justify-start text-neutral-50 text-2xl font-medium font-['Plus_Jakarta_Sans'] leading-loose"
      >
        {titlePros}
      </div>
      <div
        data-layer="Frame 2147206211"
        className="Frame2147206211 self-stretch flex flex-col justify-start items-start gap-6"
      >
        {prosConsPairs.map((pair, idx) => (
          <div
            key={`pro-${idx}`}
            className="Feature self-stretch inline-flex justify-start items-start gap-3"
          >
            <span className="w-1.75 h-1.75 rounded-full bg-neutral-50 mt-2 shrink-0" />
            <div className="flex-1">
              <div className="ProItem justify-start text-neutral-50 text-base font-normal font-['Plus_Jakarta_Sans'] leading-normal">
                {pair.pro}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        data-layer="Cons"
        className="Cons self-stretch justify-start text-neutral-50 text-2xl font-medium font-['Plus_Jakarta_Sans'] leading-loose"
      >
        {titleCons}
      </div>
      <div
        data-layer="Frame 2147206213"
        className="Frame2147206213 self-stretch flex flex-col justify-start items-start gap-6"
      >
        {prosConsPairs.map((pair, idx) => (
          <div
            key={`con-${idx}`}
            className="Feature self-stretch inline-flex justify-start items-start gap-3"
          >
            <span className="w-1.75 h-1.75 rounded-full bg-neutral-50 mt-2 shrink-0" />
            <div className="flex-1">
              <div className="ConItem justify-start text-neutral-50 text-lg font-medium font-['Plus_Jakarta_Sans'] leading-[27px]">
                {pair.con}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProsCons({ data }: ProsConsProps) {
  const cards = data || [];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.length > 0 ? (
          cards.map((card, idx) => <ProsConsTable key={idx} card={card} />)
        ) : (
          <div className="col-span-full text-center text-gray-400">
            No pros and cons data available
          </div>
        )}
      </div>
    </div>
  );
}
