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
  const titlePros = "Pros";
  const titleCons = "Cons";
  const prosConsPairs = card?.prosConsPairs || [];

  return (
    <div
      data-layer="Frame 2147206213"
      className="Frame2147206213 w-full flex flex-col gap-6 bg-white/5 border border-white/10 rounded-[24px] p-6"
    >
      <div
        data-layer="Pros"
        className="Pros text-white text-[24px] font-semibold font-['Plus_Jakarta_Sans'] leading-[32px]"
      >
        {titlePros}
      </div>

      <div className="flex flex-col gap-6">
        {prosConsPairs.slice(0, 4).map((pair, idx) => (
          <div
            key={`pro-${idx}`}
            className="Feature flex items-start gap-3 text-white text-[16px] font-normal leading-[24px]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white/80 mt-2 shrink-0" />
            <p className="flex-1 font-['Plus_Jakarta_Sans']">{pair.pro}</p>
          </div>
        ))}
      </div>

      <div
        data-layer="Cons"
        className="Cons text-white text-[24px] font-semibold font-['Plus_Jakarta_Sans'] leading-[32px]"
      >
        {titleCons}
      </div>

      <div className="flex flex-col gap-6">
        {prosConsPairs.slice(0, 3).map((pair, idx) => (
          <div
            key={`con-${idx}`}
            className="Feature flex items-start gap-3 text-white text-[16px] font-normal leading-[24px]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white/80 mt-2 shrink-0" />
            <p className="flex-1 font-['Plus_Jakarta_Sans']">{pair.con}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProsCons({ data }: ProsConsProps) {
  const cards = data || [];

  if (cards.length === 0) {
    return (
      <div className="text-center text-gray-400">No pros and cons data available</div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((card, idx) => (
        <ProsConsTable key={idx} card={card} />
      ))}
    </div>
  );
}
