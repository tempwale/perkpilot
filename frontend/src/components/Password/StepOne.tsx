import ControlsPanel from "./ControlsPanel";

export default function StepOne() {
  return (
    <div
      data-layer="Frame 2147206338"
      className="Frame2147206338 self-stretch relative inline-flex justify-start items-center gap-6 overflow-hidden flex flex-col md:flex-row"
    >
      <div
        data-layer="Frame 2147206337"
        className="Frame2147206337 w-[400px] md:w-[608.50px] inline-flex flex-col justify-start items-start gap-5"
      >
        <div
          data-layer="You Set the Rules"
          className="YouSetTheRules self-stretch justify-start text-white text-[40px] font-semibold font-['Plus_Jakarta_Sans'] capitalize leading-[52px]"
        >
          You Set the Rules
        </div>
        <div
          data-layer="Select your Generation Mode (Smart, Emoji, etc.) and fine-tune the settings: Password Length, Language, and Character Types (Uppercase, Numbers, Symbols). This tells our engine exactly what kind of password you need for maximum convenience and compatibility."
          className="SelectYourGenerationModeSmartEmojiEtcAndFineTuneTheSettingsPasswordLengthLanguageAndCharacterTypesUppercaseNumbersSymbolsThisTellsOurEngineExactlyWhatKindOfPasswordYouNeedForMaximumConvenienceAndCompatibility self-stretch justify-start text-zinc-300 text-base font-normal font-['Plus_Jakarta_Sans'] leading-normal"
        >
          Select your Generation Mode (Smart, Emoji, etc.) and fine-tune the
          settings: Password Length, Language, and Character Types (Uppercase,
          Numbers, Symbols). This tells our engine exactly what kind of password
          you need for maximum convenience and compatibility.
        </div>
      </div>

      <div
        data-layer="Rectangle 39991"
        className="Rectangle39991  w-[400px] md:w-[608px] h-[400px] bg-white/10 rounded-2xl flex justify-center items-center relative overflow-hidden"
      >
        <ControlsPanel />
      </div>
    </div>
  );
}
