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

interface FAQProps {
  faqs?: Array<{
    question?: string;
    answer?: string;
    _id?: string;
  }>;
}

export default function FAQ({ faqs }: FAQProps = {}) {
  const formattedFAQs =
    faqs && faqs.length > 0
      ? faqs.map((faq, index) => ({
          id: faq._id || `faq-${index}`,
          q: faq.question || "",
          a: faq.answer || "",
        }))
      : DEFAULT_FAQS;

  const [openId, setOpenId] = useState<string | null>(
    formattedFAQs[0]?.id || null
  );

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full flex justify-center">
      <div
        data-layer="Frame 2147223642"
        className="Frame2147223642 w-full max-w-[818px] flex flex-col items-center gap-10"
      >
        <div
          data-layer="Frame 2147206341"
          className="Frame2147206341 w-full flex flex-col items-center gap-10"
        >
          <div
            data-layer="Frame 2147206152"
            className="Frame2147206152 w-full flex flex-col items-center gap-6"
          >
            <div
              data-layer="Frequently Asked Questions"
              className="FrequentlyAskedQuestions w-full text-center text-5xl font-semibold font-['Plus_Jakarta_Sans'] capitalize leading-[60px] bg-gradient-to-b from-white to-[#949494] bg-clip-text text-transparent"
            >
              Frequently Asked Questions
            </div>
          </div>
        </div>

        <div
          data-layer="Cards"
          className="Cards w-full max-w-[808px] flex flex-col items-start gap-4"
        >
          <div
            data-layer="Questions"
            className="Questions w-full flex flex-col items-start gap-4"
          >
            {formattedFAQs.map((faq) => {
              const expanded = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  data-layer={`Card-${faq.id}`}
                  className="Card w-full p-6 bg-white/8 rounded-3xl flex flex-col items-start gap-10"
                >
                  <div className="w-full flex items-center gap-2">
                    <button
                      onClick={() => toggle(faq.id)}
                      aria-expanded={expanded}
                      aria-controls={`${faq.id}-panel`}
                      className={`flex-1 text-left text-neutral-50 font-medium font-['Plus_Jakarta_Sans'] ${
                        expanded ? "text-xl leading-[26px]" : "text-xl leading-8"
                      }`}
                    >
                      {faq.q}
                    </button>

                    <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                      {expanded ? (
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 12H18"
                            stroke="#FAFAFA"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ) : (
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 6V18M6 12H18"
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
                    className={`w-full text-[#D4D4D8] text-base font-normal font-['Plus_Jakarta_Sans'] leading-6 ${
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
