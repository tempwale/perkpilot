export default function InvoiceHeading() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
      <div
        data-layer="Frame 2147223649"
        className="Frame2147223649 w-full flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-4 sm:gap-0"
      >
        <div
          data-layer="Frame 2147223648"
          className="Frame2147223648 flex justify-start items-center gap-3"
        >
          <div
            data-layer="Frame 2147223646"
            className="Frame2147223646 w-14 h-14 relative bg-[#737eff] rounded-2xl overflow-hidden"
          >
            <div
              data-layer="archive"
              className="Archive w-8 h-8 left-[12px] top-[12px] absolute overflow-hidden"
            >
              <div
                data-layer="Vector"
                className="Vector w-0 h-[13.33px] left-[9.33px] top-[8px] absolute origin-top-left -rotate-90 outline-[1.50px] -outline-offset-[-0.75px] outline-1-neutral-50"
              />
              <div
                data-layer="Vector"
                className="Vector w-0 h-[13.33px] left-[9.33px] top-[12px] absolute origin-top-left -rotate-90 outline-[1.50px] -outline-offset-[-0.75px] outline-1-neutral-50"
              />
              <div
                data-layer="Vector"
                className="Vector w-0 h-2 left-[12px] top-[22.67px] absolute origin-top-left -rotate-90 outline-[1.50px] -outline-offset-[-0.75px] outline-1-neutral-50"
              />
              <div
                data-layer="Vector"
                className="Vector w-[26.67px] h-[26.67px] left-[2.67px] top-[2.67px] absolute rounded-[0.60px] outline-[1.50px] -outline-offset-[-0.75px] outline-1-neutral-50"
              />
            </div>
          </div>
          <div
            data-layer="Frame 2147223647"
            className="Frame2147223647 w-full sm:w-[249px] flex-col justify-start items-start gap-1"
          >
            <div
              data-layer="Invoice Generator"
              className="InvoiceGenerator self-stretch justify-start text-zinc-950 text-lg sm:text-xl font-medium font-['Plus_Jakarta_Sans'] leading-snug sm:leading-loose"
            >
              Invoice Generator
            </div>
            <div
              data-layer="Create professional invoices instantly"
              className="CreateProfessionalInvoicesInstantly self-stretch justify-start text-zinc-700 text-xs sm:text-sm font-medium font-['Plus_Jakarta_Sans'] leading-[18px] sm:leading-[21px]"
            >
              Create professional invoices instantly
            </div>
          </div>
        </div>
        <div
          data-layer="Frame 2147224680"
          className="Frame2147224680 w-full sm:w-auto flex flex-col sm:flex-row sm:justify-start items-stretch sm:items-center gap-3 sm:gap-6"
        >
          <div
            data-layer="Buttons/main"
            className="ButtonsMain w-full sm:w-auto h-12 flex items-center justify-center pl-6 pr-4 py-2 rounded-full outline-1 -outline-offset-[-1px] outline-[#737eff] gap-3"
          >
            <div
              data-layer="English US"
              className="EnglishUs text-center justify-start text-[#737eff] text-sm sm:text-base font-medium font-['Plus_Jakarta_Sans'] leading-normal"
            >
              English US
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M6 9.18799L12 15.188L18 9.18799"
                stroke="#737EFF"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div
            data-layer="Buttons/main"
            className="ButtonsMain w-full sm:w-auto h-12 px-4 py-2 bg-[#737eff] rounded-full flex justify-center items-center gap-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M6 20.188L18 20.188"
                stroke="#FAFAFA"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 4.18799V16.188M12 16.188L15.5 12.688M12 16.188L8.5 12.688"
                stroke="#FAFAFA"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div
              data-layer="Download PDF"
              className="DownloadPdf text-center justify-start text-neutral-50 text-sm sm:text-base font-medium font-['Plus_Jakarta_Sans'] leading-normal"
            >
              Download PDF
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
