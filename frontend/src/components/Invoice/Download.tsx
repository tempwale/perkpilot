export default function Download() {
  return (
    <div
      data-layer="Frame 2147206340"
      className="Frame2147206340 flex flex-col md:flex-row justify-center items-center gap-8 w-full px-4 md:px-0"
    >
      {/* Left Section — Text */}
      <div
        data-layer="Frame 2147206337"
        className="Frame2147206337 w-[90%] sm:w-[480px] md:w-[608.5px] flex flex-col justify-start items-start gap-4 text-center md:text-left"
      >
        <div
          data-layer="Download & Send"
          className="DownloadSend text-zinc-950 text-2xl sm:text-3xl md:text-[40px] font-semibold font-['Plus_Jakarta_Sans'] capitalize leading-tight md:leading-[52px]"
        >
          Download & Send
        </div>
        <div
          data-layer="Instantly download your finished invoice..."
          className="InstantlyDownloadYourFinishedInvoice text-zinc-700 text-sm sm:text-base font-normal font-['Plus_Jakarta_Sans'] leading-normal"
        >
          Instantly download your finished invoice as a clean PDF or send it
          directly to your client via email from the platform. It’s that simple.
          Get paid faster, guaranteed.
        </div>
      </div>

      {/* Right Section — Button Box */}
      <div className="relative w-[90%] sm:w-[480px] md:w-[608px] h-[260px] sm:h-[320px] md:h-[400px] bg-[#e4e6ff] rounded-2xl flex justify-center items-center">
        <button
          type="button"
          data-layer="Buttons/main"
          className="ButtonsMain h-[55px] sm:h-[65px] md:h-[70.28px] w-[80%] sm:w-[360px] md:w-[420px] bg-[#737eff] rounded-full flex justify-center items-center gap-3 sm:gap-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 36 36"
            fill="none"
          >
            <path
              d="M8.78516 29.2847L26.3558 29.2847"
              stroke="#FAFAFA"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.5706 5.85706V23.4277M17.5706 23.4277L22.6954 18.303M17.5706 23.4277L12.4458 18.303"
              stroke="#FAFAFA"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div
            data-layer="Download PDF"
            className="DownloadPdf text-neutral-50 text-lg sm:text-xl font-medium font-['Plus_Jakarta_Sans'] leading-none"
          >
            Download PDF
          </div>
        </button>
      </div>
    </div>
  );
}
