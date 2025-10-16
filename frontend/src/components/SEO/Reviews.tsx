export default function Reviews() {
  return (
    <div className="pt-20">
      <div
        data-layer="What Our Users Say"
        className="WhatOurUsersSay self-stretch text-center justify-start text-zinc-950 text-5xl font-semibold font-['Plus_Jakarta_Sans'] capitalize leading-[60px]"
      >
        What Our Users Say
      </div>
      <div
        data-layer="Join thousands of website owners who've improved their SEO with our free audit tool."
        className="JoinThousandsOfWebsiteOwnersWhoVeImprovedTheirSeoWithOurFreeAuditTool self-stretch text-center justify-start text-zinc-700 text-lg font-medium font-['Plus_Jakarta_Sans'] leading-[27px]"
      >
        Join thousands of website owners who've improved their SEO with our free
        audit tool.
      </div>
      {/* Reviews horizontal scroller */}
      <div className="pt-10 ">
        <div className="overflow-x-auto no-scrollbar -mx-4 px-4">
          <div className="inline-flex gap-6 w-max snap-x snap-mandatory">
            <div
              data-layer="Frame 2147223665"
              className="Frame2147223665 w-[503px] p-6 bg-white rounded-3xl inline-flex flex-col justify-start items-center gap-4 snap-start flex-shrink-0"
            >
              <div
                data-layer="Frame 2147223659"
                className="Frame2147223659 self-stretch inline-flex justify-between items-center"
              >
                <div
                  data-layer="Frame 2147223676"
                  className="Frame2147223676 flex justify-start items-center gap-4"
                >
                  <img
                    data-layer="Ellipse 1"
                    className="Ellipse1 w-14 h-14 rounded-full"
                    src="https://placehold.co/56x56"
                    alt="profile"
                  />
                  <div
                    data-layer="Frame 2147223658"
                    className="Frame2147223658 inline-flex flex-col justify-center items-start gap-1"
                  >
                    <div
                      data-layer="Sarah Johnson"
                      className="SarahJohnson justify-center text-zinc-950 text-lg font-medium font-['Plus_Jakarta_Sans'] leading-[27px]"
                    >
                      Sarah Johnson
                    </div>
                    <div
                      data-layer="Marketing Director, TechFlow Solutions"
                      className="MarketingDirectorTechflowSolutions justify-center text-zinc-700 text-xs font-medium font-['Plus_Jakarta_Sans'] leading-[18px]"
                    >
                      Marketing Director, TechFlow Solutions
                    </div>
                  </div>
                </div>
                <div
                  data-layer="Img - Rated 5 out of 5"
                  className="ImgRated5OutOf5 h-[21px] flex justify-start items-center gap-1"
                  aria-hidden="true"
                >
                  {/* Inline SVG star repeated 5 times for crisp rendering */}
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      className="w-4 h-4"
                    >
                      <path
                        d="M7.20014 1.38803L5.40814 5.18003L1.40814 5.78803C0.736137 5.85203 0.400137 6.86003 0.928137 7.38803L3.80814 10.316L3.13614 14.524C3.00814 15.26 3.80814 15.788 4.40014 15.452L8.00014 13.58L11.6001 15.452C12.2721 15.788 13.0081 15.26 12.8641 14.524L12.2081 10.316L15.0721 7.38803C15.6001 6.86003 15.2641 5.91603 14.6081 5.78803L10.6081 5.18003L8.80014 1.38803C8.46414 0.716033 7.53614 0.716033 7.20014 1.38803Z"
                        fill="#FDAD00"
                      />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="mt-3 text-zinc-700 text-lg font-medium leading-[27px] text-left">
                "This SEO audit tool found 23 critical issues we didn't even
                know existed. After implementing their recommendations, our
                organic traffic increased by 45% in just 3 months!"
              </div>
            </div>

            {/* duplicate card as example - remove or map over data in real usage */}
            <div className="Frame2147223665 w-[503px] p-6 bg-white rounded-3xl inline-flex flex-col justify-start items-center gap-4 snap-start flex-shrink-0">
              <div className="Frame2147223659 self-stretch inline-flex justify-between items-center">
                <div className="Frame2147223676 flex justify-start items-center gap-4">
                  <img
                    className="Ellipse1 w-14 h-14 rounded-full"
                    src="https://placehold.co/56x56"
                    alt="profile"
                  />
                  <div className="Frame2147223658 inline-flex flex-col justify-center items-start gap-1">
                    <div className="SarahJohnson justify-center text-zinc-950 text-lg font-medium font-['Plus_Jakarta_Sans'] leading-[27px]">
                      Alex Kim
                    </div>
                    <div className="MarketingDirectorTechflowSolutions justify-center text-zinc-700 text-xs font-medium font-['Plus_Jakarta_Sans'] leading-[18px]">
                      Founder, BrightApps
                    </div>
                  </div>
                </div>
                <div
                  className="ImgRated5OutOf5 h-[21px] flex justify-start items-center gap-1"
                  aria-hidden="true"
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      className="w-4 h-4"
                    >
                      <path
                        d="M7.20014 1.38803L5.40814 5.18003L1.40814 5.78803C0.736137 5.85203 0.400137 6.86003 0.928137 7.38803L3.80814 10.316L3.13614 14.524C3.00814 15.26 3.80814 15.788 4.40014 15.452L8.00014 13.58L11.6001 15.452C12.2721 15.788 13.0081 15.26 12.8641 14.524L12.2081 10.316L15.0721 7.38803C15.6001 6.86003 15.2641 5.91603 14.6081 5.78803L10.6081 5.18003L8.80014 1.38803C8.46414 0.716033 7.53614 0.716033 7.20014 1.38803Z"
                        fill="#FDAD00"
                      />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="mt-3 text-zinc-700 text-lg font-medium leading-[27px] text-left">
                "A fast, clear audit that highlighted the issues we needed to
                fix — the recommendations were actionable and easy to
                implement."
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
