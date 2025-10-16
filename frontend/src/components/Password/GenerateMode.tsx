import { useState } from "react";

export default function GeneratedMode() {
  const [words, setWords] = useState<number>(16);

  const handleRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWords(Number(e.target.value));
  };

  return (
    <div>
      <div
        data-layer="Frame 2147206318"
        className="Frame2147206318 w-[608px] p-6 bg-white/10 rounded-3xl backdrop-blur-md inline-flex flex-col justify-start items-start gap-6"
      >
        <div
          data-layer="Frame 2147206316"
          className="Frame2147206316 w-[534px] inline-flex justify-between items-end"
        >
          <div
            data-layer="Generation Mode"
            className="GenerationMode text-center justify-start text-neutral-50 text-xl font-medium font-['Plus_Jakarta_Sans'] leading-loose"
          >
            Generation Mode
          </div>
        </div>
        <div
          data-layer="Frame 2147205832"
          className="Frame2147205832 self-stretch p-2 bg-white/10 rounded-[56px] outline outline-1 outline-offset-[-1px] outline-white/10 inline-flex justify-between items-start"
        >
          <div
            data-layer="Buttons/main"
            className="ButtonsMain px-4 py-[11px] bg-neutral-50 rounded-[100px] flex justify-center items-center gap-2"
          >
            <div
              data-layer="Random"
              className="Random text-center justify-start text-zinc-950 text-sm font-medium font-['Plus_Jakarta_Sans'] leading-[21px]"
            >
              Random
            </div>
          </div>
          <div
            data-layer="Buttons/main"
            className="ButtonsMain px-4 py-[11px] rounded-[100px] flex justify-center items-center gap-2"
          >
            <div
              data-layer="Smart"
              className="Smart text-center justify-start text-neutral-50 text-sm font-medium font-['Plus_Jakarta_Sans'] leading-[21px]"
            >
              Smart
            </div>
          </div>
          <div
            data-layer="Buttons/main"
            className="ButtonsMain px-4 py-[11px] rounded-[100px] flex justify-center items-center gap-2"
          >
            <div
              data-layer="Hybrid"
              className="Hybrid text-center justify-start text-neutral-50 text-sm font-medium font-['Plus_Jakarta_Sans'] leading-[21px]"
            >
              Hybrid
            </div>
          </div>
          <div
            data-layer="Buttons/main"
            className="ButtonsMain px-4 py-[11px] rounded-[100px] flex justify-center items-center gap-2"
          >
            <div
              data-layer="Emoji"
              className="Emoji text-center justify-start text-neutral-50 text-sm font-medium font-['Plus_Jakarta_Sans'] leading-[21px]"
            >
              Emoji
            </div>
          </div>
          <div
            data-layer="Buttons/main"
            className="ButtonsMain px-4 py-[11px] rounded-[100px] flex justify-center items-center gap-2"
          >
            <div
              data-layer="Pattern"
              className="Pattern text-center justify-start text-neutral-50 text-sm font-medium font-['Plus_Jakarta_Sans'] leading-[21px]"
            >
              Pattern
            </div>
          </div>
        </div>
        <div
          data-layer="Frame 2147206325"
          className="Frame2147206325 self-stretch flex flex-col justify-start items-start gap-2"
        >
          <div
            data-layer="Frame 2147206324"
            className="Frame2147206324 inline-flex justify-start items-center gap-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12.87 15.07L10.33 12.56L10.36 12.53C12.0547 10.6475 13.3205 8.41951 14.07 6H17V4H10V2H8V4H1V6H12.17C11.5 7.92 10.44 9.75 9 11.35C8.07 10.32 7.3 9.19 6.69 8H4.69C5.42 9.63 6.42 11.17 7.67 12.56L2.58 17.58L4 19L9 14L12.11 17.11L12.87 15.07ZM18.5 10H16.5L12 22H14L15.12 19H19.87L21 22H23L18.5 10ZM15.88 17L17.5 12.67L19.12 17H15.88Z"
                fill="#FAFAFA"
              />
            </svg>
            <div
              data-layer="Password Language"
              className="PasswordLanguage text-center justify-start text-white text-base font-normal font-['Plus_Jakarta_Sans'] leading-normal"
            >
              Password Language
            </div>
          </div>
          <div
            data-layer="Input"
            className="Input self-stretch h-14 pl-6 pr-4 py-3 relative bg-white/10 rounded-xl outline outline-1 outline-offset-[-0.50px] outline-white/10 inline-flex justify-start items-center flex-wrap content-center overflow-hidden"
          >
            <div
              data-layer="Frame 13"
              className="Frame13 left-[16px] top-[16px] absolute flex justify-start items-center gap-3"
            >
              <div
                data-layer="Frame 1171275453"
                className="Frame1171275453 flex justify-start items-center"
              >
                <div
                  data-layer="English ( Roman )"
                  className="EnglishRoman justify-start text-neutral-50 text-base font-normal font-['Poppins'] leading-normal"
                >
                  English ( Roman )
                </div>
              </div>
            </div>
            <div
              data-layer="Dashboard Icon"
              className="DashboardIcon w-6 h-6 left-[520px] top-[25px] absolute overflow-hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="7"
                viewBox="0 0 12 7"
                fill="none"
              >
                <path
                  d="M5.575 6.55C5.44167 6.55 5.31267 6.525 5.188 6.475C5.06267 6.425 4.95833 6.35833 4.875 6.275L0.275 1.675C0.0916663 1.49167 0 1.25833 0 0.974999C0 0.691666 0.0916663 0.458333 0.275 0.275C0.458333 0.0916663 0.691667 0 0.975 0C1.25833 0 1.49167 0.0916663 1.675 0.275L5.575 4.175L9.475 0.275C9.65833 0.0916663 9.89167 0 10.175 0C10.4583 0 10.6917 0.0916663 10.875 0.275C11.0583 0.458333 11.15 0.691666 11.15 0.974999C11.15 1.25833 11.0583 1.49167 10.875 1.675L6.275 6.275C6.175 6.375 6.06667 6.44567 5.95 6.487C5.83333 6.529 5.70833 6.55 5.575 6.55Z"
                  fill="#FAFAFA"
                />
              </svg>
            </div>
          </div>
          <div
            data-layer="Generate passwords using characters and words from different languages."
            className="GeneratePasswordsUsingCharactersAndWordsFromDifferentLanguages self-stretch justify-start text-white text-[10px] font-medium font-['Plus_Jakarta_Sans']"
          >
            Generate passwords using characters and words from different
            languages.
          </div>
        </div>
        <div
          data-layer="Input"
          className="Input self-stretch h-14 px-4 py-2 relative bg-white/5 rounded-[100px] shadow-[0px_1px_4px_0px_rgba(12,12,13,0.05)] shadow-[0px_1px_4px_0px_rgba(12,12,13,0.10)] outline outline-1 outline-offset-[-1px] outline-white/20 backdrop-blur-[20px] inline-flex justify-between items-center flex-wrap content-center overflow-hidden"
        >
          <div
            data-layer="Frame 13"
            className="Frame13 left-[16px] top-[16px] absolute flex justify-start items-center gap-3"
          >
            <div
              data-layer="search-normal"
              data-property-1="linear"
              className="SearchNormal w-6 h-6 relative"
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
            </div>
            <div
              data-layer="Frame 1171275453"
              className="Frame1171275453 flex justify-start items-center"
            >
              <div
                data-layer="https://example.com"
                className="HttpsExampleCom justify-start text-zinc-300 text-base font-normal font-['Plus_Jakarta_Sans'] capitalize leading-normal"
              >
                https://example.com
              </div>
            </div>
          </div>
        </div>
        <div
          data-layer="Frame 1171275912"
          className="Frame1171275912 self-stretch relative flex flex-col justify-center items-start gap-2"
        >
          <div
            data-layer="Frame 2147206321"
            className="Frame2147206321 self-stretch inline-flex justify-between items-start"
          >
            <div
              data-layer="Password Length"
              className="PasswordLength justify-start text-neutral-50 text-xs font-medium font-['Inter'] leading-[18px]"
            >
              Password Length
            </div>
            <div
              data-layer="16 Words"
              className="Words justify-start text-neutral-50 text-xs font-medium font-['Inter'] leading-[18px]"
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

          <div
            data-layer="16 Words"
            className="Words justify-start text-neutral-50 text-xs font-medium font-['Inter'] leading-[18px]"
          >
            {words} Words
          </div>
        </div>
        <div
          data-layer="Frame 2147206326"
          className="Frame2147206326 self-stretch flex flex-col justify-center items-start gap-3"
        >
          <div
            data-layer="Side Menu"
            className="SideMenu self-stretch rounded inline-flex justify-between items-center"
          >
            <div
              data-layer="Frame 1321315155"
              className="Frame1321315155 flex justify-start items-center gap-3"
            >
              <div
                data-layer="Uppercase (A-Z)"
                className="UppercaseAZ justify-center text-[#ebeef4] text-base font-normal font-['Plus_Jakarta_Sans'] leading-normal"
              >
                Uppercase (A-Z)
              </div>
            </div>
            <div
              data-layer="Button"
              className="Button w-[53.33px] h-7 relative bg-gradient-to-b from-[#501bd6] to-[#7f57e2] rounded-[66.67px] outline outline-1 outline-offset-[-1px] outline-[#501bd6] overflow-hidden"
            >
              <div
                data-layer="Button"
                className="Button w-[23.33px] h-[22.67px] px-[41.33px] py-[5.33px] left-[26.67px] top-[2.67px] absolute bg-white rounded-[66.67px]"
              />
            </div>
          </div>
          <div
            data-layer="Side Menu"
            className="SideMenu self-stretch rounded inline-flex justify-between items-center"
          >
            <div
              data-layer="Frame 1321315155"
              className="Frame1321315155 flex justify-start items-center gap-3"
            >
              <div
                data-layer="Lowercase (a-z)"
                className="LowercaseAZ justify-center text-[#ebeef4] text-base font-normal font-['Plus_Jakarta_Sans'] leading-normal"
              >
                Lowercase (a-z)
              </div>
            </div>
            <div
              data-layer="Button"
              className="Button w-[53.33px] h-7 relative bg-gradient-to-b from-[#501bd6] to-[#7f57e2] rounded-[66.67px] outline outline-1 outline-offset-[-1px] outline-[#501bd6] overflow-hidden"
            >
              <div
                data-layer="Button"
                className="Button w-[23.33px] h-[22.67px] px-[41.33px] py-[5.33px] left-[26.67px] top-[2.67px] absolute bg-white rounded-[66.67px]"
              />
            </div>
          </div>
          <div
            data-layer="Side Menu"
            className="SideMenu self-stretch rounded inline-flex justify-between items-center"
          >
            <div
              data-layer="Frame 1321315155"
              className="Frame1321315155 flex justify-start items-center gap-3"
            >
              <div
                data-layer="Numbers (0-9)"
                className="Numbers09 justify-center text-[#ebeef4] text-base font-normal font-['Plus_Jakarta_Sans'] leading-normal"
              >
                Numbers (0-9)
              </div>
            </div>
            <div
              data-layer="Button"
              className="Button w-[53.33px] h-7 relative bg-gradient-to-b from-[#501bd6] to-[#7f57e2] rounded-[66.67px] outline outline-1 outline-offset-[-1px] outline-[#501bd6] overflow-hidden"
            >
              <div
                data-layer="Button"
                className="Button w-[23.33px] h-[22.67px] px-[41.33px] py-[5.33px] left-[26.67px] top-[2.67px] absolute bg-white rounded-[66.67px]"
              />
            </div>
          </div>
          <div
            data-layer="Side Menu"
            className="SideMenu self-stretch rounded inline-flex justify-between items-center"
          >
            <div
              data-layer="Frame 1321315155"
              className="Frame1321315155 flex justify-start items-center gap-3"
            >
              <div
                data-layer="Symbls"
                className="Symbls justify-center text-[#ebeef4] text-base font-normal font-['Plus_Jakarta_Sans'] leading-normal"
              >
                Symbls
              </div>
            </div>
            <div
              data-layer="Button"
              className="Button w-[53.33px] h-7 relative bg-gradient-to-b from-[#501bd6] to-[#7f57e2] rounded-[66.67px] outline outline-1 outline-offset-[-1px] outline-[#501bd6] overflow-hidden"
            >
              <div
                data-layer="Button"
                className="Button w-[23.33px] h-[22.67px] px-[41.33px] py-[5.33px] left-[26.67px] top-[2.67px] absolute bg-white rounded-[66.67px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
