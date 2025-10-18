import { UniversalBadgeInverse } from "../UniversalBadgeInverse";

export default function HowItWorks() {
  return (
    <div
      data-layer="Frame 2147206152"
      className="Frame2147206152 self-stretch inline-flex flex-col justify-start items-center gap-6"
    >
      <div
        data-layer="Buttons/main"
        className="ButtonsMain pl-4 pr-6 py-2 bg-zinc-100 rounded-[100px] backdrop-blur-blur inline-flex justify-center items-center gap-3"
      >
        <UniversalBadgeInverse
          badgeText={"#1 Platform"}
          secondaryText="How it works"
        />
      </div>
      <div
        data-layer="Get Paid in 3 Simple Steps"
        className="GetPaidIn3SimpleSteps self-stretch text-center justify-start text-zinc-950 text-5xl font-semibold font-['Plus_Jakarta_Sans'] capitalize leading-[60px]"
      >
        Get Paid in 3 Simple Steps
      </div>
      <div
        data-layer="Our goal is to get you back to work, not stuck in spreadsheets. Creating and sending a polished invoice takes less than a minute."
        className="OurGoalIsToGetYouBackToWorkNotStuckInSpreadsheetsCreatingAndSendingAPolishedInvoiceTakesLessThanAMinute self-stretch text-center justify-start text-zinc-700 text-lg font-medium font-['Plus_Jakarta_Sans'] leading-[27px]"
      >
        Our goal is to get you back to work, not stuck in spreadsheets. Creating
        and sending a polished invoice takes less than a minute.
      </div>
    </div>
  );
}
