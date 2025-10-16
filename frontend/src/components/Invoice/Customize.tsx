import invoiceImg from "../../assets/images/invoice.png";

export default function Customize() {
  return (
    <div
      data-layer="Frame 2147206339"
      className="Frame2147206339 self-stretch inline-flex justify-center items-center gap-6"
    >
      <div className="Rectangle39991 w-[608px] h-[400px] bg-[#e4e6ff] rounded-2xl flex items-center justify-center">
        <div className="Rectangle39991 w-[248px] h-[360px] rounded-2xl overflow-hidden shadow-sm">
          <img
            src={invoiceImg}
            alt="Invoice preview"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div
        data-layer="Frame 2147206337"
        className="Frame2147206337 w-[608.50px] inline-flex flex-col justify-start items-start gap-5"
      >
        <div
          data-layer="Customize & Generate"
          className="CustomizeGenerate self-stretch justify-start text-zinc-950 text-[40px] font-semibold font-['Plus_Jakarta_Sans'] capitalize leading-[52px]"
        >
          Customize & Generate
        </div>
        <div
          data-layer="Watch your data instantly transform into a professional, sleek invoice. Choose from multiple templates and easily upload your business logo to reinforce your brand identity."
          className="WatchYourDataInstantlyTransformIntoAProfessionalSleekInvoiceChooseFromMultipleTemplatesAndEasilyUploadYourBusinessLogoToReinforceYourBrandIdentity self-stretch justify-start text-zinc-700 text-base font-normal font-['Plus_Jakarta_Sans'] leading-normal"
        >
          Watch your data instantly transform into a professional, sleek
          invoice. Choose from multiple templates and easily upload your
          business logo to reinforce your brand identity.
        </div>
      </div>
    </div>
  );
}
