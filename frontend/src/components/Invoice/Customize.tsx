import invoiceImg from "../../assets/images/invoice.png";

export default function Customize() {
  return (
    <div
      data-layer="Frame 2147206340"
      className="Frame2147206340 flex flex-col-reverse md:flex-row justify-center items-center gap-8 w-full px-4 md:px-0 md:w-[1240.5px]"
    >
      {/* Left Side (Image Section) */}
      <div className="Rectangle39991 w-[90%] sm:w-[480px] md:w-[608px] h-auto md:h-[400px] bg-[#e4e6ff] rounded-2xl flex items-center justify-center p-4">
        <div className="Rectangle39991 w-[60%] sm:w-[200px] md:w-[248px] h-[260px] sm:h-[320px] md:h-[360px] rounded-2xl overflow-hidden shadow-sm">
          <img
            src={invoiceImg}
            alt="Invoice preview"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right Side (Text Section) */}
      <div
        data-layer="Frame 2147206337"
        className="Frame2147206337 w-[90%] sm:w-[480px] md:w-[608.5px] flex flex-col justify-start items-start gap-4 text-center md:text-left"
      >
        <div
          data-layer="Customize & Generate"
          className="CustomizeGenerate text-zinc-950 text-2xl sm:text-3xl md:text-[40px] font-semibold font-['Plus_Jakarta_Sans'] capitalize leading-tight md:leading-[52px]"
        >
          Customize & Generate
        </div>
        <div
          data-layer="Watch your data instantly transform..."
          className="WatchYourDataInstantlyTransform text-left text-zinc-700 text-sm sm:text-base font-normal font-['Plus_Jakarta_Sans'] leading-normal"
        >
          Watch your data instantly transform into a professional, sleek
          invoice. Choose from multiple templates and easily upload your
          business logo to reinforce your brand identity.
        </div>
      </div>
    </div>
  );
}
