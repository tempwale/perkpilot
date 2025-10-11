import { useState } from "react";

const DEFAULT_FAQS = [
  {
    id: "what-is-figma",
    q: "What is Figma used for?",
    a: "Figma is a collaborative interface design tool used for UI/UX design, prototyping, wireframing, and creating design systems. It's ideal for designing web and mobile applications with real-time team collaboration.",
  },
  {
    id: "figma-cost",
    q: "How much does Figma cost?",
    a: "Figma offers a free tier for individuals and scalable paid plans for teams and organizations. Pricing depends on feature needs and team size.",
  },
  {
    id: "figma-vs-sketch",
    q: "Is Figma better than Sketch?",
    a: "Figma and Sketch each have strengths; Figma excels at collaboration and cross-platform use while Sketch has a long-standing Mac-native ecosystem.",
  },
  {
    id: "figma-offline",
    q: "Can Figma be used offline?",
    a: "Figma's desktop app allows some offline work, but full collaboration features require an internet connection.",
  },
  {
    id: "figma-platforms",
    q: "Does Figma work on Windows and Mac?",
    a: "Yes — Figma runs in the browser and has desktop apps for Windows and Mac.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(DEFAULT_FAQS[0].id);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full flex justify-center">
      <div
        data-layer="Frame 2147223642"
        className="Frame2147223642 w-full max-w-[818px] inline-flex flex-col justify-start items-center gap-10"
      >
        <div
          data-layer="Frame 2147206341"
          className="Frame2147206341 self-stretch flex flex-col justify-start items-center gap-10"
        >
          <div
            data-layer="Frame 2147206152"
            className="Frame2147206152 self-stretch flex flex-col justify-start items-center gap-6"
          >
            <div
              data-layer="Frequently Asked Questions"
              className="FrequentlyAskedQuestions self-stretch text-center justify-start text-white text-5xl font-semibold font-['Plus_Jakarta_Sans'] capitalize leading-[60px]"
            >
              Frequently Asked Questions
            </div>
          </div>
        </div>

        <div
          data-layer="Cards"
          className="Cards w-full max-w-[808px] flex flex-col justify-start items-start gap-4"
        >
          <div
            data-layer="Questions"
            className="Questions self-stretch flex flex-col justify-center items-start gap-4 w-full"
          >
            {DEFAULT_FAQS.map((faq) => {
              const expanded = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  data-layer={`Card-${faq.id}`}
                  className="Card self-stretch p-6 bg-white/10 rounded-3xl flex flex-col justify-start items-start gap-4 overflow-hidden w-full"
                >
                  <div className="w-full flex items-center justify-between gap-4">
                    <button
                      onClick={() => toggle(faq.id)}
                      aria-expanded={expanded}
                      aria-controls={`${faq.id}-panel`}
                      className="flex-1 text-left text-neutral-50 text-xl font-medium font-['Plus_Jakarta_Sans']"
                    >
                      {faq.q}
                    </button>

                    <div className="w-8 h-8 flex items-center justify-center">
                      {expanded ? (
                        <svg
                          width="16"
                          height="2"
                          viewBox="0 0 16 2"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="16" height="2" fill="#FAFAFA" rx="1" />
                        </svg>
                      ) : (
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 1v10M1 6h10"
                            stroke="#FAFAFA"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </div>
                  </div>

                  <div
                    id={`${faq.id}-panel`}
                    role="region"
                    aria-labelledby={faq.id}
                    className={`mt-4 text-zinc-300 text-base font-normal font-['Plus_Jakarta_Sans'] leading-normal ${
                      expanded ? "block" : "hidden"
                    }`}
                  >
                    {faq.a}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
