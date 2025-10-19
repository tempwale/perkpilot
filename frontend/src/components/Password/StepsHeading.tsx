import { UniversalBadge } from "../UniversalBadge";

export default function StepsHeading() {
  return (
    <div className="flex flex-col mt-8 sm:mt-20 items-center gap-4 sm:gap-6 pt-8 sm:pt-20 pb-8 sm:pb-10 px-4">
      <UniversalBadge
        badgeText="#1 Platform"
        secondaryText="For Expert Insights"
        icon="electric"
        className=""
        variant="primary"
        size="md"
      />
      <h2
        data-layer="Quantam safe password generator"
        className="w-full max-w-4xl text-center text-white text-2xl sm:text-5xl font-semibold font-['Plus_Jakarta_Sans'] capitalize leading-tight sm:leading-[60px]"
      >
        Quantam safe password generator
      </h2>
      <p
        data-layer="AI-powered password generation with adaptive strength analysis, contextual intelligence, and quantum-ready security"
        className="w-full max-w-3xl text-center text-zinc-400 text-sm sm:text-lg font-medium font-['Plus_Jakarta_Sans'] leading-relaxed sm:leading-[27px]"
      >
        AI-powered password generation with adaptive strength analysis,
        contextual intelligence, and quantum-ready security
      </p>
    </div>
  );
}
