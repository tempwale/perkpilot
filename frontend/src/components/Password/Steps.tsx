import { useState } from "react";

export default function Steps() {
  const [words, setWords] = useState<number>(16);

  const handleRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWords(Number(e.target.value));
  };

  return (
    <div className="flex justify-center">
      <div
        data-layer="Frame 2147206340"
        className="Frame2147206340 max-w-[1240px] w-full inline-flex flex-col justify-center items-center gap-10"
      >
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
              settings: Password Length, Language, and Character Types
              (Uppercase, Numbers, Symbols). This tells our engine exactly what
              kind of password you need for maximum convenience and
              compatibility.
            </div>
          </div>
          <div
            data-layer="Rectangle 39991"
            className="Rectangle39991  w-[400px] md:w-[608px] h-[400px] bg-white/10 rounded-2xl"
          />
          <div
            data-layer="Frame 2147206318"
            className="Frame2147206318 hidden md:block w-[428.59px] p-[16.92px] left-[722.20px] top-[-100.31px] absolute bg-white/10 rounded-[16.92px] backdrop-blur-[8.46px] inline-flex flex-col justify-start items-start gap-[16.92px]"
          >
            <div
              data-layer="Frame 2147206316"
              className="Frame2147206316 w-[376.43px] inline-flex justify-between items-end"
            >
              <div
                data-layer="Generation Mode"
                className="GenerationMode text-center justify-start text-neutral-50 text-sm font-medium font-['Plus_Jakarta_Sans'] leading-snug"
              >
                Generation Mode
              </div>
            </div>
            <div
              data-layer="Frame 2147205832"
              className="Frame2147205832 self-stretch p-[5.64px] bg-white/10 rounded-[39.48px] outline outline-[0.70px] outline-offset-[-0.70px] outline-white/10 inline-flex justify-between items-start"
            >
              <div
                data-layer="Buttons/main"
                className="ButtonsMain px-[11.28px] py-[7.75px] bg-neutral-50 rounded-[70.49px] flex justify-center items-center gap-[5.64px]"
              >
                <div
                  data-layer="Random"
                  className="Random text-center justify-start text-zinc-950 text-[9.87px] font-medium font-['Plus_Jakarta_Sans'] leading-[14.80px]"
                >
                  Random
                </div>
              </div>
              <div
                data-layer="Buttons/main"
                className="ButtonsMain px-[11.28px] py-[7.75px] rounded-[70.49px] flex justify-center items-center gap-[5.64px]"
              >
                <div
                  data-layer="Smart"
                  className="Smart text-center justify-start text-neutral-50 text-[9.87px] font-medium font-['Plus_Jakarta_Sans'] leading-[14.80px]"
                >
                  Smart
                </div>
              </div>
              <div
                data-layer="Buttons/main"
                className="ButtonsMain px-[11.28px] py-[7.75px] rounded-[70.49px] flex justify-center items-center gap-[5.64px]"
              >
                <div
                  data-layer="Hybrid"
                  className="Hybrid text-center justify-start text-neutral-50 text-[9.87px] font-medium font-['Plus_Jakarta_Sans'] leading-[14.80px]"
                >
                  Hybrid
                </div>
              </div>
              <div
                data-layer="Buttons/main"
                className="ButtonsMain px-[11.28px] py-[7.75px] rounded-[70.49px] flex justify-center items-center gap-[5.64px]"
              >
                <div
                  data-layer="Emoji"
                  className="Emoji text-center justify-start text-neutral-50 text-[9.87px] font-medium font-['Plus_Jakarta_Sans'] leading-[14.80px]"
                >
                  Emoji
                </div>
              </div>
              <div
                data-layer="Buttons/main"
                className="ButtonsMain px-[11.28px] py-[7.75px] rounded-[70.49px] flex justify-center items-center gap-[5.64px]"
              >
                <div
                  data-layer="Pattern"
                  className="Pattern text-center justify-start text-neutral-50 text-[9.87px] font-medium font-['Plus_Jakarta_Sans'] leading-[14.80px]"
                >
                  Pattern
                </div>
              </div>
            </div>
            <div
              data-layer="Frame 2147206325"
              className="Frame2147206325 self-stretch flex flex-col justify-start items-start gap-[5.64px]"
            >
              <div
                data-layer="Frame 2147206324"
                className="Frame2147206324 inline-flex justify-start items-center gap-[8.46px]"
              >
                <div
                  data-layer="mdi:language"
                  className="MdiLanguage w-[16.92px] h-[16.92px] relative overflow-hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_516_889)">
                      <path
                        d="M9.07479 10.6233L7.28428 8.85392L7.30543 8.83277C8.50005 7.50573 9.39235 5.93518 9.9207 4.22961H11.9861V2.81976H7.05166V1.40991H5.64181V2.81976H0.707336V4.22961H8.58135C8.10905 5.58307 7.36183 6.87308 6.34673 8.00096C5.69115 7.27489 5.14836 6.47832 4.71836 5.63946H3.30851C3.8231 6.78849 4.52803 7.87407 5.40918 8.85392L1.82112 12.3926L2.82211 13.3936L6.34673 9.86901L8.53905 12.0613L9.07479 10.6233ZM13.0435 7.04931H11.6337L8.46151 15.5084H9.87136L10.6609 13.3936H14.0093L14.8058 15.5084H16.2157L13.0435 7.04931ZM11.1966 11.9838L12.3386 8.93146L13.4806 11.9838H11.1966Z"
                        fill="#FAFAFA"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_516_889">
                        <rect width="16.9182" height="16.9182" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div
                  data-layer="Password Language"
                  className="PasswordLanguage text-center justify-start text-white text-xs font-normal font-['Plus_Jakarta_Sans'] leading-[16.92px]"
                >
                  Password Language
                </div>
              </div>
              <div
                data-layer="Input"
                className="Input self-stretch h-[39.48px] pl-[16.92px] pr-[11.28px] py-[8.46px] relative bg-white/10 rounded-lg outline outline-[0.70px] outline-offset-[-0.35px] outline-white/10 inline-flex justify-start items-center flex-wrap content-center overflow-hidden"
              >
                <div
                  data-layer="Frame 13"
                  className="Frame13 left-[11.28px] top-[11.28px] absolute flex justify-start items-center gap-[8.46px]"
                >
                  <div
                    data-layer="Frame 1171275453"
                    className="Frame1171275453 flex justify-start items-center"
                  >
                    <div
                      data-layer="English ( Roman )"
                      className="EnglishRoman justify-start text-neutral-50 text-xs font-normal font-['Poppins'] leading-[16.92px]"
                    >
                      English ( Roman )
                    </div>
                  </div>
                </div>
                <div
                  data-layer="Dashboard Icon"
                  className="DashboardIcon w-[16.92px] h-[16.92px] left-[366.56px] top-[11.28px] absolute overflow-hidden"
                >
                  <div
                    data-layer="Vector"
                    className="Vector w-[7.86px] h-[4.62px] left-[4.53px] top-[6.15px] absolute bg-neutral-50"
                  />
                </div>
              </div>
              <div
                data-layer="Generate passwords using characters and words from different languages."
                className="GeneratePasswordsUsingCharactersAndWordsFromDifferentLanguages self-stretch justify-start text-white text-[7.05px] font-medium font-['Plus_Jakarta_Sans']"
              >
                Generate passwords using characters and words from different
                languages.
              </div>
            </div>
            <div
              data-layer="Input"
              className="Input self-stretch h-[39.48px] px-[11.28px] py-[5.64px] relative bg-white/5 rounded-[70.49px] shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] shadow-[0px_1px_4px_0px_rgba(12,12,13,0.10)] outline outline-[0.70px] outline-offset-[-0.70px] outline-white/20 backdrop-blur-[14.10px] inline-flex justify-between items-center flex-wrap content-center overflow-hidden"
            >
              <div
                data-layer="Frame 13"
                className="Frame13 left-[11.28px] top-[11.24px] absolute flex justify-start items-center gap-[8.46px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M22 22L20 20"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div
                  data-layer="Frame 1171275453"
                  className="Frame1171275453 flex justify-start items-center"
                >
                  <div
                    data-layer="https://example.com"
                    className="HttpsExampleCom justify-start text-zinc-300 text-xs font-normal font-['Plus_Jakarta_Sans'] capitalize leading-[16.92px]"
                  >
                    https://example.com
                  </div>
                </div>
              </div>
            </div>
            <div
              data-layer="Frame 1171275912"
              className="Frame1171275912 self-stretch relative flex flex-col justify-center items-start gap-[5.64px]"
            >
              <div
                data-layer="Frame 2147206321"
                className="Frame2147206321 self-stretch inline-flex justify-between items-start"
              >
                <div
                  data-layer="Password Length"
                  className="PasswordLength justify-start text-neutral-50 text-[8.46px] font-medium font-['Inter'] leading-3"
                >
                  Password Length
                </div>
                <div
                  data-layer="16 Words"
                  className="Words justify-start text-neutral-50 text-[8.46px] font-medium font-['Inter'] leading-3"
                >
                  16 Words
                </div>
              </div>
              <div className="w-full flex flex-col items-start gap-1">
                <input
                  aria-label="password-length"
                  type="range"
                  min={4}
                  max={64}
                  value={words}
                  onChange={handleRange}
                  className={`
      w-full h-2 rounded-lg appearance-none cursor-pointer
      bg-gradient-to-r from-[#7f57e2] to-gray-200
      transition-all duration-200
      [&::-webkit-slider-thumb]:appearance-none
      [&::-webkit-slider-thumb]:w-4
      [&::-webkit-slider-thumb]:h-4
      [&::-webkit-slider-thumb]:rounded-full
      [&::-webkit-slider-thumb]:bg-[#7f57e2]
      [&::-webkit-slider-thumb]:hover:bg-[#6b46d3]
      [&::-webkit-slider-thumb]:cursor-pointer
      [&::-moz-range-thumb]:w-4
      [&::-moz-range-thumb]:h-4
      [&::-moz-range-thumb]:rounded-full
      [&::-moz-range-thumb]:bg-[#7f57e2]
    `}
                  style={{
                    background: `linear-gradient(90deg, #7f57e2 ${
                      ((words - 4) / (64 - 4)) * 100
                    }%, #e5e7eb ${((words - 4) / (64 - 4)) * 100}%)`,
                  }}
                />
              </div>
            </div>
            <div
              data-layer="Characters Type"
              className="CharactersType text-center justify-start text-neutral-50 text-xs font-normal font-['Plus_Jakarta_Sans'] leading-[16.92px]"
            >
              Characters Type
            </div>
            <div
              data-layer="Frame 2147206326"
              className="Frame2147206326 self-stretch flex flex-col justify-center items-start gap-[8.46px]"
            >
              <div
                data-layer="Side Menu"
                className="SideMenu self-stretch rounded-[2.82px] inline-flex justify-between items-center"
              >
                <div
                  data-layer="Frame 1321315155"
                  className="Frame1321315155 flex justify-start items-center gap-[8.46px]"
                >
                  <div
                    data-layer="Uppercase (A-Z)"
                    className="UppercaseAZ justify-center text-[#ebeef4] text-xs font-normal font-['Plus_Jakarta_Sans'] leading-[16.92px]"
                  >
                    Uppercase (A-Z)
                  </div>
                </div>
                <div
                  data-layer="Button"
                  className="Button w-[37.60px] h-[19.74px] relative bg-gradient-to-b from-[#501bd6] to-[#7f57e2] rounded-[46.99px] outline outline-[0.70px] outline-offset-[-0.70px] outline-[#501bd6] overflow-hidden"
                >
                  <div
                    data-layer="Button"
                    className="Button w-[16.45px] h-4 px-[29.14px] py-[3.76px] left-[18.80px] top-[1.88px] absolute bg-white rounded-[46.99px]"
                  />
                </div>
              </div>
              <div
                data-layer="Side Menu"
                className="SideMenu self-stretch rounded-[2.82px] inline-flex justify-between items-center"
              >
                <div
                  data-layer="Frame 1321315155"
                  className="Frame1321315155 flex justify-start items-center gap-[8.46px]"
                >
                  <div
                    data-layer="Lowercase (a-z)"
                    className="LowercaseAZ justify-center text-[#ebeef4] text-xs font-normal font-['Plus_Jakarta_Sans'] leading-[16.92px]"
                  >
                    Lowercase (a-z)
                  </div>
                </div>
                <div
                  data-layer="Button"
                  className="Button w-[37.60px] h-[19.74px] relative bg-gradient-to-b from-[#501bd6] to-[#7f57e2] rounded-[46.99px] outline outline-[0.70px] outline-offset-[-0.70px] outline-[#501bd6] overflow-hidden"
                >
                  <div
                    data-layer="Button"
                    className="Button w-[16.45px] h-4 px-[29.14px] py-[3.76px] left-[18.80px] top-[1.88px] absolute bg-white rounded-[46.99px]"
                  />
                </div>
              </div>
              <div
                data-layer="Side Menu"
                className="SideMenu self-stretch rounded-[2.82px] inline-flex justify-between items-center"
              >
                <div
                  data-layer="Frame 1321315155"
                  className="Frame1321315155 flex justify-start items-center gap-[8.46px]"
                >
                  <div
                    data-layer="Numbers (0-9)"
                    className="Numbers09 justify-center text-[#ebeef4] text-xs font-normal font-['Plus_Jakarta_Sans'] leading-[16.92px]"
                  >
                    Numbers (0-9)
                  </div>
                </div>
                <div
                  data-layer="Button"
                  className="Button w-[37.60px] h-[19.74px] relative bg-gradient-to-b from-[#501bd6] to-[#7f57e2] rounded-[46.99px] outline outline-[0.70px] outline-offset-[-0.70px] outline-[#501bd6] overflow-hidden"
                >
                  <div
                    data-layer="Button"
                    className="Button w-[16.45px] h-4 px-[29.14px] py-[3.76px] left-[18.80px] top-[1.88px] absolute bg-white rounded-[46.99px]"
                  />
                </div>
              </div>
              <div
                data-layer="Side Menu"
                className="SideMenu self-stretch rounded-[2.82px] inline-flex justify-between items-center"
              >
                <div
                  data-layer="Frame 1321315155"
                  className="Frame1321315155 flex justify-start items-center gap-[8.46px]"
                >
                  <div
                    data-layer="Symbls"
                    className="Symbls justify-center text-[#ebeef4] text-xs font-normal font-['Plus_Jakarta_Sans'] leading-[16.92px]"
                  >
                    Symbls
                  </div>
                </div>
                <div
                  data-layer="Button"
                  className="Button w-[37.60px] h-[19.74px] relative bg-gradient-to-b from-[#501bd6] to-[#7f57e2] rounded-[46.99px] outline outline-[0.70px] outline-offset-[-0.70px] outline-[#501bd6] overflow-hidden"
                >
                  <div
                    data-layer="Button"
                    className="Button w-[16.45px] h-4 px-[29.14px] py-[3.76px] left-[18.80px] top-[1.88px] absolute bg-white rounded-[46.99px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-layer="Frame 2147206339"
          className="Frame2147206339 self-stretch relative inline-flex justify-start items-center gap-6 flex flex-col md:flex-row flex-col-reverse"
        >
          <div
            data-layer="Rectangle 39991"
            className="Rectangle39991  w-[400px] md:w-[608px] h-[400px] bg-white/10 rounded-2xl"
          />
          <div
            data-layer="Frame 2147206337"
            className="Frame2147206337  w-[400px] md:w-[608.50px] inline-flex flex-col justify-start items-start gap-5"
          >
            <div
              data-layer="AI Instantly Builds a Fortress"
              className="AiInstantlyBuildsAFortress self-stretch justify-start text-white text-[40px] font-semibold font-['Plus_Jakarta_Sans'] capitalize leading-[52px]"
            >
              AI Instantly Builds a Fortress
            </div>
            <div
              data-layer="Our AI system takes your inputs and simultaneously injects the highest measurable level of Entropy Power. This unique process ensures the password is fully randomized and unpredictable, achieving Maximum Protection (Level 4/4) every single time."
              className="OurAiSystemTakesYourInputsAndSimultaneouslyInjectsTheHighestMeasurableLevelOfEntropyPowerThisUniqueProcessEnsuresThePasswordIsFullyRandomizedAndUnpredictableAchievingMaximumProtectionLevel44EverySingleTime self-stretch justify-start text-zinc-300 text-base font-normal font-['Plus_Jakarta_Sans'] leading-normal"
            >
              Our AI system takes your inputs and simultaneously injects the
              highest measurable level of Entropy Power. This unique process
              ensures the password is fully randomized and unpredictable,
              achieving Maximum Protection (Level 4/4) every single time.
            </div>
          </div>
          <div
            data-layer="Frame 2147206333"
            className="Frame2147206333 hidden md:block w-[469.69px] p-[18.54px] left-[69.15px] top-[77.98px] absolute
         bg-white/10 rounded-[18.54px] outline outline-[0.77px] outline-offset-[-0.77px]
         outline-white/10 backdrop-blur-[9.27px] flex flex-col justify-center items-start gap-[18.54px]"
          >
            <div
              data-layer="Frame 2147206329"
              className="Frame2147206329 w-[432.61px] flex flex-col justify-start items-center gap-[12.36px]"
            >
              <div
                data-layer="Frame 2147206327"
                className="Frame2147206327 self-stretch inline-flex justify-between items-center"
              >
                <div
                  data-layer="Frame 2147206328"
                  className="Frame2147206328 flex justify-start items-center gap-[9.27px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                  >
                    <path
                      d="M3.86259 13.9052L2.41826 3.7949C2.36117 3.39529 2.62184 3.02234 3.01589 2.93477L8.93505 1.6194C9.15581 1.57035 9.38463 1.57035 9.60539 1.6194L15.5245 2.93477C15.9186 3.02234 16.1793 3.39529 16.1222 3.7949L14.6778 13.9052C14.6232 14.2876 14.2916 16.609 9.27022 16.609C4.24885 16.609 3.91721 14.2876 3.86259 13.9052Z"
                      stroke="#FAFAFA"
                      stroke-width="1.15878"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div
                    data-layer="Password Strength"
                    className="PasswordStrength justify-start text-neutral-50 text-xs font-normal font-['Plus_Jakarta_Sans'] leading-[18.54px]"
                  >
                    Password Strength
                  </div>
                </div>
                <div
                  data-layer="Quantum-safe"
                  className="QuantumSafe justify-start text-neutral-50 text-xs font-normal font-['Plus_Jakarta_Sans'] leading-[18.54px]"
                >
                  Quantum-safe
                </div>
              </div>
              <div
                data-layer="Frame 1171275912"
                className="Frame1171275912 self-stretch h-[24.72px] flex flex-col justify-center items-start gap-[6.18px]"
              >
                <div
                  data-layer="Frame 1171275749"
                  className="Frame1171275749 self-stretch flex flex-col justify-start items-start gap-[3.09px]"
                >
                  <div
                    data-layer="Rectangle"
                    className="Rectangle w-[432.61px] h-[4.64px] bg-gradient-to-b from-[#501bd6] to-[#7f57e2] rounded-[3.09px]"
                  />
                </div>
                <div
                  data-layer="Frame 2147206321"
                  className="Frame2147206321 self-stretch inline-flex justify-between items-start"
                >
                  <div
                    data-layer="0%"
                    className="justify-start text-neutral-50 text-[9.27px] font-medium font-['Inter'] leading-[13.91px]"
                  >
                    0%
                  </div>
                  <div
                    data-layer="100%"
                    className="justify-start text-neutral-50 text-[9.27px] font-medium font-['Inter'] leading-[13.91px]"
                  >
                    100%
                  </div>
                </div>
              </div>
            </div>
            <div
              data-layer="Frame 2147206334"
              className="Frame2147206334 self-stretch inline-flex justify-start items-center gap-[18.54px]"
            >
              <div
                data-layer="Frame 2147206331"
                className="Frame2147206331 flex-1 p-[12.36px] bg-white/10 rounded-xl outline outline-[0.77px] outline-offset-[-0.77px] outline-white/10 inline-flex flex-col justify-start items-start gap-[12.36px]"
              >
                <div
                  data-layer="Frame 2147206330"
                  className="Frame2147206330 inline-flex justify-start items-center gap-[9.27px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                  >
                    <path
                      d="M9.27023 4.63501L9.27023 9.27012L13.9053 9.27012"
                      stroke="#FAFAFA"
                      stroke-width="1.15878"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.27023 16.9953C13.5367 16.9953 16.9954 13.5366 16.9954 9.27011C16.9954 5.00361 13.5367 1.54492 9.27023 1.54492C5.00373 1.54492 1.54504 5.00361 1.54504 9.27011C1.54504 13.5366 5.00373 16.9953 9.27023 16.9953Z"
                      stroke="#FAFAFA"
                      stroke-width="1.15878"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div
                    data-layer="Crack Time"
                    className="CrackTime justify-start text-white text-[10.82px] font-medium font-['Plus_Jakarta_Sans'] leading-none"
                  >
                    Crack Time
                  </div>
                </div>
                <div
                  data-layer="755840971 centuries"
                  className="Centuries justify-start text-white text-xs font-normal font-['Plus_Jakarta_Sans'] leading-[18.54px]"
                >
                  755840971 centuries
                </div>
              </div>
              <div
                data-layer="Frame 2147206332"
                className="Frame2147206332 flex-1 p-[12.36px] bg-white/10 rounded-xl outline outline-[0.77px] outline-offset-[-0.77px] outline-white/10 inline-flex flex-col justify-start items-start gap-[12.36px]"
              >
                <div
                  data-layer="Frame 2147206330"
                  className="Frame2147206330 inline-flex justify-start items-center gap-[9.27px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                  >
                    <path
                      d="M13.6153 7.64065H9.26989V0.579346L4.92447 10.8997H9.26989V17.961L13.6153 7.64065Z"
                      fill="white"
                    />
                  </svg>
                  <div
                    data-layer="Entropy"
                    className="Entropy justify-start text-white text-[10.82px] font-medium font-['Plus_Jakarta_Sans'] leading-none"
                  >
                    Entropy
                  </div>
                </div>
                <div
                  data-layer="112.7 bits"
                  className="7Bits w-[51.76px] justify-start text-white text-xs font-normal font-['Plus_Jakarta_Sans'] leading-[18.54px]"
                >
                  112.7 bits
                </div>
              </div>
            </div>
            <div
              data-layer="Frame 2147206336"
              className="Frame2147206336 inline-flex justify-start items-center gap-[12.36px]"
            >
              <div
                data-layer="Ellipse 6070"
                className="Ellipse6070 w-[18.54px] h-[18.54px] bg-gradient-to-b from-[#501bd6] to-[#7f57e2] rounded-full"
              />
              <div
                data-layer="Frame 2147206335"
                className="Frame2147206335 w-[209.35px] inline-flex flex-col justify-start items-start gap-[6.18px]"
              >
                <div
                  data-layer="AI Recommendations"
                  className="AiRecommendations self-stretch justify-start text-neutral-50 text-xs font-normal font-['Plus_Jakarta_Sans'] leading-[18.54px]"
                >
                  AI Recommendations
                </div>
                <div
                  data-layer="Excellent! This password is quantum-safe ready"
                  className="ExcellentThisPasswordIsQuantumSafeReady self-stretch justify-start text-zinc-300 text-[9.27px] font-medium font-['Plus_Jakarta_Sans'] leading-[13.91px]"
                >
                  Excellent! This password is quantum-safe ready
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-layer="Frame 2147206340"
          className="Frame2147206340 self-stretch relative inline-flex justify-start items-center gap-6 flex flex-col md:flex-row"
        >
          <div
            data-layer="Frame 2147206337"
            className="Frame2147206337  w-[400px] md:w-[608.50px] inline-flex flex-col justify-start items-start gap-5"
          >
            <div
              data-layer="Protection is Verified in Real-Time"
              className="ProtectionIsVerifiedInRealTime self-stretch justify-start text-white text-[40px] font-semibold font-['Plus_Jakarta_Sans'] capitalize leading-[52px]"
            >
              Protection is Verified in
              <br />
              Real-Time
            </div>
            <div
              data-layer="Before delivery, two checks guarantee your safety: Safety Check: We instantly scan against known breach databases to confirm the password has No Breaches Found. Crack Time Calculation: We provide a calculated Crack Time and AI Recommendation to prove that your new, Quantum-Safe password is secure for millennia."
              className="BeforeDeliveryTwoChecksGuaranteeYourSafetySafetyCheckWeInstantlyScanAgainstKnownBreachDatabasesToConfirmThePasswordHasNoBreachesFoundCrackTimeCalculationWeProvideACalculatedCrackTimeAndAiRecommendationToProveThatYourNewQuantumSafePasswordIsSecureForMillennia self-stretch justify-start"
            >
              <span className="text-zinc-300 text-base font-normal font-['Plus_Jakarta_Sans'] leading-normal">
                Before delivery, two checks guarantee your safety:
                <br />
                <br />
              </span>
              <span className="text-zinc-300 text-base font-normal font-['Plus_Jakarta_Sans'] leading-normal">
                Safety Check: We instantly scan against known breach databases
                to confirm the password has No Breaches Found.
                <br />
              </span>
              <span className="text-zinc-300 text-base font-normal font-['Plus_Jakarta_Sans'] leading-normal">
                <br />
              </span>
              <span className="text-zinc-300 text-base font-normal font-['Plus_Jakarta_Sans'] leading-normal">
                Crack Time Calculation: We provide a calculated Crack Time and
                AI Recommendation to prove that your new, Quantum-Safe password
                is secure for millennia.
              </span>
            </div>
          </div>
          <div
            data-layer="Rectangle 39991"
            className="Rectangle39991  w-[400px] md:w-[608px] h-[400px] bg-white/10 rounded-2xl"
          />
          <div
            data-layer="Frame 2147206322"
            className="Frame2147206322 hidden md:block w-[399.94px] p-[15.79px] left-[736.53px] top-[77.49px] absolute
             bg-white/10 rounded-2xl outline outline-[0.66px] outline-offset-[-0.66px]
             outline-white/10 backdrop-blur-[7.89px] flex flex-col justify-start items-center gap-[15.79px]"
          >
            <div
              data-layer="Frame 7"
              className="Frame7 w-[36.84px] h-[36.84px] relative bg-gradient-to-b from-[#501bd6] to-[#7f57e2] rounded-[36.84px] overflow-hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M10.0861 6.1394L7.89343 10.5247H10.5246H13.1557L10.9631 14.9099"
                  stroke="#FAFAFA"
                  stroke-width="0.986683"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.38521 15.787L2.71708 4.1101C2.66847 3.76984 2.8902 3.45068 3.22573 3.37611L10.2392 1.81757C10.4271 1.7758 10.622 1.7758 10.81 1.81757L17.8234 3.37611C18.1589 3.45068 18.3807 3.76984 18.3321 4.11011L16.6639 15.787C16.6019 16.2211 16.2254 18.8567 10.5246 18.8567C4.82373 18.8567 4.44722 16.2211 4.38521 15.787Z"
                  stroke="#FAFAFA"
                  stroke-width="0.986683"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div
              data-layer="Maximum Protection Achieved!"
              className="MaximumProtectionAchieved justify-start text-neutral-50 text-[13.16px] font-medium font-['Plus_Jakarta_Sans'] leading-[21.05px]"
            >
              Maximum Protection Achieved!
            </div>
            <div
              data-layer="Security Level 4/4"
              className="SecurityLevel44 justify-start text-zinc-300 text-[10.52px] font-normal font-['Plus_Jakarta_Sans'] leading-none"
            >
              Security Level 4/4
            </div>
            <div
              data-layer="Frame 1171275912"
              className="Frame1171275912 self-stretch flex flex-col justify-center items-start gap-[2.63px]"
            >
              <div
                data-layer="Frame 2147206321"
                className="Frame2147206321 self-stretch inline-flex justify-between items-start"
              >
                <div
                  data-layer="Defence Strength"
                  className="DefenceStrength justify-start text-[#727a8e] text-[7.89px] font-medium font-['Inter'] leading-3"
                >
                  Defence Strength
                </div>
                <div
                  data-layer="100%"
                  className="justify-start text-[#727a8e] text-[7.89px] font-medium font-['Inter'] leading-3"
                >
                  100%
                </div>
              </div>
              <div
                data-layer="Frame 1171275749"
                className="Frame1171275749 self-stretch relative flex flex-col justify-start items-start gap-1"
              >
                <div
                  data-layer="Rectangle"
                  className="Rectangle w-[368px] h-1.5 bg-zinc-300 rounded"
                />
                <div
                  data-layer="Rectangle"
                  className="Rectangle w-[300.26px] h-1.5 bg-gradient-to-b from-[#501bd6] to-[#7f57e2] rounded absolute left-0 top-0 z-10"
                />
              </div>
            </div>
            <div
              data-layer="Frame 1171275913"
              className="Frame1171275913 self-stretch flex flex-col justify-center items-start gap-[2.63px]"
            >
              <div
                data-layer="Frame 2147206321"
                className="Frame2147206321 self-stretch inline-flex justify-between items-start"
              >
                <div
                  data-layer="Entropy Power"
                  className="EntropyPower justify-start text-[#727a8e] text-[7.89px] font-medium font-['Inter'] leading-3"
                >
                  Entropy Power
                </div>
                <div
                  data-layer="122.6 bits"
                  className="6Bits justify-start text-[#727a8e] text-[7.89px] font-medium font-['Inter'] leading-3"
                >
                  122.6 bits
                </div>
              </div>
              <div
                data-layer="Frame 1171275749"
                className="Frame1171275749 self-stretch relative flex flex-col justify-start items-start gap-1"
              >
                <div
                  data-layer="Rectangle"
                  className="Rectangle w-[368px] h-1.5 bg-zinc-300 rounded"
                />
                <div
                  data-layer="Rectangle"
                  className="Rectangle w-[300.26px] h-1.5 bg-gradient-to-b from-[#501bd6] to-[#7f57e2] rounded absolute left-0 top-0 z-10"
                />
              </div>
            </div>
            <div
              data-layer="Frame 2147206323"
              className="Frame2147206323 inline-flex justify-center items-start gap-[7.89px]"
            >
              <div
                data-layer="Buttons/main"
                className="ButtonsMain pl-[10.52px] pr-[15.79px] py-[5.26px] bg-zinc-100/10 rounded-[65.78px] backdrop-blur-[5.26px] flex justify-center items-center gap-[7.89px]"
              >
                <div
                  data-layer="Basic Shield"
                  className="BasicShield text-center justify-start text-neutral-50 text-[9.21px] font-medium font-['Plus_Jakarta_Sans']"
                >
                  Basic Shield
                </div>
              </div>
              <div
                data-layer="Buttons/main"
                className="ButtonsMain pl-[10.52px] pr-[15.79px] py-[5.26px] bg-zinc-100/10 rounded-[65.78px] backdrop-blur-[5.26px] flex justify-center items-center gap-[7.89px]"
              >
                <div
                  data-layer="Advance Guard"
                  className="AdvanceGuard text-center justify-start text-neutral-50 text-[9.21px] font-medium font-['Plus_Jakarta_Sans']"
                >
                  Advance Guard
                </div>
              </div>
              <div
                data-layer="Buttons/main"
                className="ButtonsMain pl-[10.52px] pr-[15.79px] py-[5.26px] bg-zinc-100/10 rounded-[65.78px] backdrop-blur-[5.26px] flex justify-center items-center gap-[7.89px]"
              >
                <div
                  data-layer="Quantum Armour"
                  className="QuantumArmour text-center justify-start text-neutral-50 text-[9.21px] font-medium font-['Plus_Jakarta_Sans']"
                >
                  Quantum Armour
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
