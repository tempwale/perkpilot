import { UniversalBadge } from "../UniversalBadge";

export default function StepsHeading() {
  return (
    <div className="flex flex-col mt-20 items-center gap-6 pt-20 pb-10 px-5">
      <UniversalBadge
        badgeText="#1 Platform"
        secondaryText="For Expert Insights"
        icon="electric"
        className=""
        variant="primary"
        size="md"
      />
      <div
        data-layer="Quantam safe password generator"
        className="QuantamSafePasswordGenerator self-stretch text-center justify-start text-white text-5xl font-semibold font-['Plus_Jakarta_Sans'] capitalize leading-[60px]"
      >
        Quantam safe password generator
      </div>
      <div
        data-layer="AI-powered password generation with adaptive strength analysis, contextual intelligence, and quantum-ready security"
        className="AiPoweredPasswordGenerationWithAdaptiveStrengthAnalysisContextualIntelligenceAndQuantumReadySecurity w-[818px] text-center justify-start text-zinc-400 text-lg font-medium font-['Plus_Jakarta_Sans'] leading-[27px]"
      >
        AI-powered password generation with adaptive strength analysis,
        contextual intelligence, and quantum-ready security
      </div>
    </div>
  );
}
