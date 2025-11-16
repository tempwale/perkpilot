export default function InvoiceForm() {
  return (
    <div className="flex flex-col gap-6 px-4 w-full max-w-lg mx-auto">
      <div
        data-layer="Frame 2147223654"
        className="Frame2147223654 self-stretch flex flex-col gap-6"
      >
        <div
          data-layer="Upload Your Logo"
          className="UploadYourLogo text-left sm:text-center justify-start text-zinc-950 text-base md:text-xl font-medium font-['Plus_Jakarta_Sans'] leading-snug md:leading-loose"
        >
          Upload Your Logo
        </div>
        <div
          data-layer="Buttons/main"
          className="ButtonsMain w-full sm:w-auto h-10 sm:h-12 pl-4 pr-6 py-2 rounded-[100px] outline-1 -outline-offset-[-1px] outline-[#737eff] flex justify-center items-center gap-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M6 20.688L18 20.688"
              stroke="#737EFF"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 16.688V4.68799M12 4.68799L15.5 8.18799M12 4.68799L8.5 8.18799"
              stroke="#737EFF"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div
            data-layer="Upload Logo"
            className="UploadLogo text-center justify-start text-[#737eff] text-sm sm:text-base font-medium font-['Plus_Jakarta_Sans'] leading-normal"
          >
            Upload Logo
          </div>
        </div>
      </div>
      <div
        data-layer="Frame 2147223651"
        className="Frame2147223651 self-stretch p-4 md:p-6 bg-white rounded-3xl flex flex-col justify-start items-start gap-4"
      >
        <div
          data-layer="Invoice Details"
          className="InvoiceDetails text-center justify-start text-zinc-950 text-xl font-medium font-['Plus_Jakarta_Sans'] leading-loose"
        >
          Invoice Details
        </div>
        <div
          data-layer="Frame 2147223652"
          className="Frame2147223652 self-stretch w-full flex flex-col sm:flex-row justify-start items-start gap-4"
        >
          <div
            data-layer="Frame 2147206178"
            className="Frame2147206178 flex-1 flex flex-col justify-start items-start gap-3"
          >
            <div
              data-layer="Invoice Number"
              className="InvoiceNumber self-stretch justify-center text-zinc-950 text-sm font-medium font-['Poppins']"
            >
              Invoice Number
            </div>
            <div
              data-layer="Input"
              className="Input self-stretch h-12 md:h-14 px-3 md:px-4 py-2 rounded-2xl outline-1 -outline-offset-[-0.50px] outline-1-zinc-200 flex justify-start items-center gap-3 overflow-hidden"
            >
              <div
                data-layer="1"
                className="flex-1 justify-start text-zinc-950 text-sm md:text-base font-normal font-['Poppins'] leading-normal"
              >
                1
              </div>
            </div>
          </div>
          <div
            data-layer="Frame 2147206179"
            className="Frame2147206179 flex-1 flex flex-col justify-start items-start gap-3"
          >
            <div
              data-layer="Currency"
              className="Currency self-stretch justify-center text-zinc-950 text-sm font-medium font-['Poppins']"
            >
              Currency
            </div>
            <div
              data-layer="Input"
              className="Input self-stretch h-12 md:h-14 px-3 md:px-4 py-2 rounded-2xl outline-1 -outline-offset-[-0.50px] outline-1-zinc-200 flex justify-between items-center overflow-hidden"
            >
              <div
                data-layer="USD"
                className="Usd justify-start text-zinc-800 text-sm md:text-base font-normal font-['Poppins'] leading-normal"
              >
                USD
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="#09090B"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div
          data-layer="Frame 2147223653"
          className="Frame2147223653 self-stretch w-full flex flex-col sm:flex-row justify-start items-start gap-4"
        >
          <div
            data-layer="Frame 2147206178"
            className="Frame2147206178 flex-1 flex flex-col justify-start items-start gap-3"
          >
            <div
              data-layer="Date"
              className="Date self-stretch justify-center text-zinc-950 text-sm font-medium font-['Poppins']"
            >
              Date
            </div>
            <div
              data-layer="Input"
              className="Input self-stretch h-12 md:h-14 px-3 md:px-4 py-2 rounded-2xl outline-1 -outline-offset-[-0.50px] outline-1-zinc-200 flex justify-start items-center gap-3 overflow-hidden"
            >
              <div
                data-layer="08/11/2025"
                className="112025 flex-1 justify-start text-zinc-400 text-sm md:text-base font-normal font-['Poppins'] leading-normal"
              >
                08/11/2025
              </div>
            </div>
          </div>
          <div
            data-layer="Frame 2147206179"
            className="Frame2147206179 flex-1 flex flex-col justify-start items-start gap-3"
          >
            <div
              data-layer="Due Date"
              className="DueDate self-stretch justify-center text-zinc-950 text-sm font-medium font-['Poppins']"
            >
              Due Date
            </div>
            <div
              data-layer="Input"
              className="Input self-stretch h-12 md:h-14 px-3 md:px-4 py-2 rounded-2xl outline-1 -outline-offset-[-0.50px] outline-1-zinc-200 flex justify-between items-center overflow-hidden"
            >
              <div
                data-layer="dd/mm/yy"
                className="DdMmYy justify-start text-zinc-400 text-sm md:text-base font-normal font-['Poppins'] leading-normal"
              >
                dd/mm/yy
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M15 4V2M15 4V6M15 4H10.5M3 10V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V10H3Z"
                  stroke="#A1A1AA"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 10V6C3 4.89543 3.89543 4 5 4H7"
                  stroke="#A1A1AA"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 2V6"
                  stroke="#A1A1AA"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 10V6C21 4.89543 20.1046 4 19 4H18.5"
                  stroke="#A1A1AA"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div
          data-layer="Frame 2147223654"
          className="Frame2147223654 self-stretch w-full flex flex-col sm:flex-row justify-start items-start gap-4"
        >
          <div
            data-layer="Frame 2147206178"
            className="Frame2147206178 flex-1 flex flex-col justify-start items-start gap-3"
          >
            <div
              data-layer="Payment Terms"
              className="PaymentTerms self-stretch justify-center text-zinc-950 text-sm font-medium font-['Poppins']"
            >
              Payment Terms
            </div>
            <div
              data-layer="Input"
              className="Input self-stretch h-12 md:h-14 px-3 md:px-4 py-2 rounded-2xl outline-1 -outline-offset-[-0.50px] outline-1-zinc-200 flex justify-start items-center gap-3 overflow-hidden"
            >
              <div
                data-layer="Net 30"
                className="Net30 flex-1 justify-start text-zinc-400 text-sm md:text-base font-normal font-['Poppins'] leading-normal"
              >
                Net 30
              </div>
            </div>
          </div>
          <div
            data-layer="Frame 2147206179"
            className="Frame2147206179 flex-1 flex flex-col justify-start items-start gap-3"
          >
            <div
              data-layer="PO Number"
              className="PoNumber self-stretch justify-center text-zinc-950 text-sm font-medium font-['Poppins']"
            >
              PO Number
            </div>
            <div
              data-layer="Input"
              className="Input self-stretch h-12 md:h-14 px-3 md:px-4 py-2 rounded-2xl outline-1 -outline-offset-[-0.50px] outline-1-zinc-200 flex justify-between items-center overflow-hidden"
            >
              <div
                data-layer="Optional"
                className="Optional flex-1 justify-start text-zinc-400 text-sm md:text-base font-normal font-['Poppins'] leading-normal"
              >
                Optional
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        data-layer="Frame 2147223652"
        className="Frame2147223652 self-stretch p-4 md:p-6 bg-white rounded-3xl flex flex-col justify-start items-start gap-4"
      >
        <div
          data-layer="From Your Business"
          className="FromYourBusiness text-center justify-start text-zinc-950 text-xl font-medium font-['Plus_Jakarta_Sans'] leading-loose"
        >
          From Your Business
        </div>
        <div
          data-layer="Frame 2147223652"
          className="Frame2147223652 self-stretch w-full flex flex-col sm:flex-row justify-start items-start gap-4"
        >
          <div
            data-layer="Frame 2147206178"
            className="Frame2147206178 flex-1 flex flex-col justify-start items-start gap-3"
          >
            <div
              data-layer="Business Name"
              className="BusinessName self-stretch justify-center text-zinc-950 text-sm font-medium font-['Poppins']"
            >
              Business Name
            </div>
            <div
              data-layer="Input"
              className="Input self-stretch h-12 md:h-14 px-3 md:px-4 py-2 rounded-2xl outline-1 -outline-offset-[-0.50px] outline-1-zinc-200 flex justify-start items-center gap-3 overflow-hidden"
            >
              <div
                data-layer="Your company name"
                className="YourCompanyName flex-1 justify-start text-zinc-400 text-sm md:text-base font-normal font-['Poppins'] leading-normal"
              >
                Your company name
              </div>
            </div>
          </div>
        </div>
        <div
          data-layer="Frame 2147223653"
          className="Frame2147223653 self-stretch w-full flex flex-col sm:flex-row justify-start items-start gap-4"
        >
          <div
            data-layer="Frame 2147206178"
            className="Frame2147206178 flex-1 flex flex-col justify-start items-start gap-3"
          >
            <div
              data-layer="Email"
              className="Email self-stretch justify-center text-zinc-950 text-sm font-medium font-['Poppins']"
            >
              Email
            </div>
            <div
              data-layer="Input"
              className="Input self-stretch h-12 md:h-14 px-3 md:px-4 py-2 rounded-2xl outline-1 -outline-offset-[-0.50px] outline-1-zinc-200 flex justify-start items-center gap-3 overflow-hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M7 9L12 12.5L17 9"
                  stroke="#A1A1AA"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 17V7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17Z"
                  stroke="#A1A1AA"
                  strokeWidth={1.5}
                />
              </svg>
              <div
                data-layer="Email"
                className="Email flex-1 justify-start text-zinc-400 text-sm md:text-base font-normal font-['Poppins'] leading-normal"
              >
                Email
              </div>
            </div>
          </div>
          <div
            data-layer="Frame 2147206179"
            className="Frame2147206179 flex-1 flex flex-col justify-start items-start gap-3"
          >
            <div
              data-layer="Phone"
              className="Phone self-stretch justify-center text-zinc-950 text-sm font-medium font-['Poppins']"
            >
              Phone
            </div>
            <div
              data-layer="Input"
              className="Input self-stretch h-12 md:h-14 px-3 md:px-4 py-2 rounded-2xl outline-1 -outline-offset-[-0.50px] outline-1-zinc-200 flex justify-start items-center gap-3 overflow-hidden"
            >
              <div
                data-layer="+91"
                className="91 justify-start text-zinc-400 text-sm md:text-base font-normal font-['Poppins'] leading-normal"
              >
                +91
              </div>
              <div
                data-layer="0000000000"
                className="flex-1 justify-start text-zinc-400 text-sm md:text-base font-normal font-['Poppins'] leading-normal"
              >
                0000000000
              </div>
            </div>
          </div>
        </div>
        <div
          data-layer="Frame 2147223654"
          className="Frame2147223654 self-stretch w-full flex flex-col sm:flex-row justify-start items-start gap-4"
        >
          <div
            data-layer="Frame 2147206178"
            className="Frame2147206178 flex-1 flex flex-col justify-start items-start gap-3"
          >
            <div
              data-layer="Address"
              className="Address self-stretch justify-center text-zinc-950 text-sm font-medium font-['Poppins']"
            >
              Address
            </div>
            <div
              data-layer="Input"
              className="Input self-stretch px-3 md:px-4 py-2 rounded-2xl outline-1 -outline-offset-[-0.50px] outline-1-zinc-200 flex justify-start items-center gap-3 overflow-hidden"
            >
              <div
                data-layer="Detail address here..."
                className="DetailAddressHere flex-1 justify-start text-zinc-400 text-sm md:text-base font-normal font-['Poppins'] leading-normal"
              >
                Detail address here...
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        data-layer="Frame 2147223653"
        className="Frame2147223653 self-stretch p-6 bg-white rounded-3xl flex-col justify-start items-start gap-4"
      >
        <div
          data-layer="Bill To Client"
          className="BillToClient text-center justify-start text-zinc-950 text-xl font-medium font-['Plus_Jakarta_Sans'] leading-loose"
        >
          Bill To Client
        </div>
        <div
          data-layer="Frame 2147223652"
          className="Frame2147223652 self-stretch inline-flex justify-start items-start gap-4"
        >
          <div
            data-layer="Frame 2147206178"
            className="Frame2147206178 flex-1 flex-col justify-start items-start gap-3"
          >
            <div
              data-layer="Client Name"
              className="ClientName self-stretch justify-center text-zinc-950 text-sm font-medium font-['Poppins']"
            >
              Client Name
            </div>
            <div
              data-layer="Input"
              className="Input self-stretch h-14 px-4 py-3 rounded-2xl outline-1 -outline-offset-[-0.50px] outline-1-zinc-200 inline-flex justify-start items-center gap-3 overflow-hidden"
            >
              <div
                data-layer="Client company name"
                className="ClientCompanyName flex-1 justify-start text-zinc-400 text-base font-normal font-['Poppins'] leading-normal"
              >
                Client company name
              </div>
            </div>
          </div>
        </div>
        <div
          data-layer="Frame 2147223653"
          className="Frame2147223653 self-stretch inline-flex justify-start items-start gap-4"
        >
          <div
            data-layer="Frame 2147206178"
            className="Frame2147206178 flex-1 flex-col justify-start items-start gap-3"
          >
            <div
              data-layer="Email"
              className="Email self-stretch justify-center text-zinc-950 text-sm font-medium font-['Poppins']"
            >
              Email
            </div>
            <div
              data-layer="Input"
              className="Input self-stretch h-14 px-4 py-3 rounded-2xl outline-1 -outline-offset-[-0.50px] outline-1-zinc-200 inline-flex justify-start items-center gap-3 overflow-hidden"
            >
              <div
                data-layer="mail"
                className="Mail w-6 h-6 relative overflow-hidden"
              >
                <div
                  data-layer="Vector"
                  className="Vector w-[3.50px] h-2.5 left-[7px] top-[12.50px] absolute origin-top-left -rotate-90 outline-[1.50px] -outline-offset-[-0.75px] outline-1-zinc-400"
                />
                <div
                  data-layer="Vector"
                  className="Vector w-5 h-3.5 left-[2px] top-[5px] absolute rounded-sm outline-[1.50px] -outline-offset-[-0.75px] outline-1-zinc-400"
                />
              </div>
              <div
                data-layer="Email"
                className="Email flex-1 justify-start text-zinc-400 text-base font-normal font-['Poppins'] leading-normal"
              >
                Email
              </div>
            </div>
          </div>
          <div
            data-layer="Frame 2147206179"
            className="Frame2147206179 flex-1 flex-col justify-start items-start gap-3"
          >
            <div
              data-layer="Phone"
              className="Phone self-stretch justify-center text-zinc-950 text-sm font-medium font-['Poppins']"
            >
              Phone
            </div>
            <div
              data-layer="Input"
              className="Input self-stretch h-14 px-4 py-3 rounded-2xl outline-1 -outline-offset-[-0.50px] outline-1-zinc-200 inline-flex justify-start items-center gap-3 overflow-hidden"
            >
              <div
                data-layer="+91"
                className="91 justify-start text-zinc-400 text-base font-normal font-['Poppins'] leading-normal"
              >
                +91
              </div>
              <div
                data-layer="0000000000"
                className="flex-1 justify-start text-zinc-400 text-base font-normal font-['Poppins'] leading-normal"
              >
                0000000000
              </div>
            </div>
          </div>
        </div>
        <div
          data-layer="Frame 2147223654"
          className="Frame2147223654 self-stretch w-full flex flex-col sm:flex-row justify-start items-start gap-4"
        >
          <div
            data-layer="Frame 2147206178"
            className="Frame2147206178 flex-1 flex flex-col justify-start items-start gap-3"
          >
            <div
              data-layer="Address"
              className="Address self-stretch justify-center text-zinc-950 text-sm font-medium font-['Poppins']"
            >
              Address
            </div>
            <div
              data-layer="Input"
              className="Input self-stretch px-4 py-3 rounded-2xl outline-1 -outline-offset-[-0.50px] outline-1-zinc-200 inline-flex justify-start items-center gap-3 overflow-hidden"
            >
              <div
                data-layer="Detail address here..."
                className="DetailAddressHere flex-1 justify-start text-zinc-400 text-base font-normal font-['Poppins'] leading-normal"
              >
                Detail address here...
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        data-layer="Frame 2147223653"
        className="Frame2147223653 self-stretch p-6 bg-white rounded-3xl flex-col justify-start items-start gap-4"
      >
        <div
          data-layer="Bill To Client"
          className="BillToClient text-center justify-start text-zinc-950 text-xl font-medium font-['Plus_Jakarta_Sans'] leading-loose"
        >
          Bill To Client
        </div>
        <div
          data-layer="Frame 2147223652"
          className="Frame2147223652 self-stretch inline-flex justify-start items-start gap-4"
        >
          <div
            data-layer="Frame 2147206178"
            className="Frame2147206178 flex-1 flex-col justify-start items-start gap-3"
          >
            <div
              data-layer="Client Name"
              className="ClientName self-stretch justify-center text-zinc-950 text-sm font-medium font-['Poppins']"
            >
              Client Name
            </div>
            <div
              data-layer="Input"
              className="Input self-stretch h-14 px-4 py-3 rounded-2xl outline-1 -outline-offset-[-0.50px] outline-1-zinc-200 inline-flex justify-start items-center gap-3 overflow-hidden"
            >
              <div
                data-layer="Client company name"
                className="ClientCompanyName flex-1 justify-start text-zinc-400 text-base font-normal font-['Poppins'] leading-normal"
              >
                Client company name
              </div>
            </div>
          </div>
        </div>
        <div
          data-layer="Frame 2147223653"
          className="Frame2147223653 self-stretch inline-flex justify-start items-start gap-4"
        >
          <div
            data-layer="Frame 2147206178"
            className="Frame2147206178 flex-1 flex-col justify-start items-start gap-3"
          >
            <div
              data-layer="Email"
              className="Email self-stretch justify-center text-zinc-950 text-sm font-medium font-['Poppins']"
            >
              Email
            </div>
            <div
              data-layer="Input"
              className="Input self-stretch h-14 px-4 py-3 rounded-2xl outline-1 -outline-offset-[-0.50px] outline-1-zinc-200 inline-flex justify-start items-center gap-3 overflow-hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M7 9L12 12.5L17 9"
                  stroke="#A1A1AA"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2 17V7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17Z"
                  stroke="#A1A1AA"
                  stroke-width="1.5"
                />
              </svg>
              <div
                data-layer="Email"
                className="Email flex-1 justify-start text-zinc-400 text-base font-normal font-['Poppins'] leading-normal"
              >
                Email
              </div>
            </div>
          </div>
          <div
            data-layer="Frame 2147206179"
            className="Frame2147206179 flex-1 flex-col justify-start items-start gap-3"
          >
            <div
              data-layer="Phone"
              className="Phone self-stretch justify-center text-zinc-950 text-sm font-medium font-['Poppins']"
            >
              Phone
            </div>
            <div
              data-layer="Input"
              className="Input self-stretch h-14 px-4 py-3 rounded-2xl outline-1 -outline-offset-[-0.50px] outline-1-zinc-200 inline-flex justify-start items-center gap-3 overflow-hidden"
            >
              <div
                data-layer="+91"
                className="91 justify-start text-zinc-400 text-base font-normal font-['Poppins'] leading-normal"
              >
                +91
              </div>
              <div
                data-layer="0000000000"
                className="flex-1 justify-start text-zinc-400 text-base font-normal font-['Poppins'] leading-normal"
              >
                0000000000
              </div>
            </div>
          </div>
        </div>
        <div
          data-layer="Frame 2147223654"
          className="Frame2147223654 self-stretch inline-flex justify-start items-start gap-4"
        >
          <div
            data-layer="Frame 2147206178"
            className="Frame2147206178 flex-1 flex-col justify-start items-start gap-3"
          >
            <div
              data-layer="Address"
              className="Address self-stretch justify-center text-zinc-950 text-sm font-medium font-['Poppins']"
            >
              Address
            </div>
            <div
              data-layer="Input"
              className="Input self-stretch px-4 py-3 rounded-2xl outline-1 -outline-offset-[-0.50px] outline-1-zinc-200 inline-flex justify-start items-center gap-3 overflow-hidden"
            >
              <div
                data-layer="Detail address here..."
                className="DetailAddressHere flex-1 justify-start text-zinc-400 text-base font-normal font-['Poppins'] leading-normal"
              >
                Detail address here...
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        data-layer="Frame 2147223654"
        className="Frame2147223654 self-stretch p-6 bg-white rounded-3xl flex-col justify-start items-start gap-6"
      >
        <div
          data-layer="Items"
          className="Items text-center justify-start text-zinc-950 text-xl font-medium font-['Plus_Jakarta_Sans'] leading-loose"
        >
          Items
        </div>
        <div
          data-layer="Frame 2147223655"
          className="Frame2147223655 self-stretch flex flex-col justify-start items-start gap-4"
        >
          <div
            data-layer="Item 01"
            className="Item01 text-center justify-start text-zinc-800 text-base font-normal font-['Plus_Jakarta_Sans'] leading-normal"
          >
            Item 01
          </div>
          <div
            data-layer="Frame 2147223654"
            className="Frame2147223654 self-stretch inline-flex justify-start items-start gap-4"
          >
            <div
              data-layer="Frame 2147206178"
              className="Frame2147206178 flex-1 flex-col justify-start items-start gap-3"
            >
              <div
                data-layer="Description"
                className="Description self-stretch justify-center text-zinc-950 text-sm font-medium font-['Poppins']"
              >
                Description{" "}
              </div>
              <div
                data-layer="Input"
                className="Input self-stretch px-3 md:px-4 py-2 rounded-2xl outline-1 -outline-offset-[-0.50px] outline-1-zinc-200 flex justify-start items-center gap-3 overflow-hidden"
              >
                <div
                  data-layer="Description of item/service"
                  className="DescriptionOfItemService flex-1 justify-start text-zinc-400 text-sm md:text-base font-normal font-['Poppins'] leading-normal"
                >
                  Description of item/service
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div
            data-layer="Frame 2147223653"
            className="Frame2147223653 self-stretch w-full flex flex-col sm:flex-row justify-start items-start gap-4"
          >
            <div
              data-layer="Frame 2147206178"
              className="Frame2147206178 flex-1 flex flex-col justify-start items-start gap-3"
            >
              <div
                data-layer="Quantity"
                className="Quantity self-stretch justify-center text-zinc-950 text-sm font-medium font-['Poppins']"
              >
                Quantity
              </div>
              <div
                data-layer="Input"
                className="Input self-stretch h-12 md:h-14 px-3 md:px-4 py-2 rounded-2xl outline-1 -outline-offset-[-0.50px] outline-1-zinc-200 flex justify-start items-center gap-3 overflow-hidden"
              >
                <div
                  data-layer="1"
                  className="flex-1 justify-start text-zinc-400 text-sm md:text-base font-normal font-['Poppins'] leading-normal"
                >
                  1
                </div>
              </div>
            </div>
            <div
              data-layer="Frame 2147206180"
              className="Frame2147206180 flex-1 flex flex-col justify-start items-start gap-3"
            >
              <div
                data-layer="Rate"
                className="Rate self-stretch justify-center text-zinc-950 text-sm font-medium font-['Poppins']"
              >
                Rate
              </div>
              <div
                data-layer="Input"
                className="Input self-stretch h-12 md:h-14 px-3 md:px-4 py-2 rounded-2xl outline-1 -outline-offset-[-0.50px] outline-1-zinc-200 flex justify-start items-center gap-3 overflow-hidden"
              >
                <div
                  data-layer="0"
                  className="flex-1 justify-start text-zinc-400 text-sm md:text-base font-normal font-['Poppins'] leading-normal"
                >
                  0
                </div>
              </div>
            </div>
            <div
              data-layer="Frame 2147206179"
              className="Frame2147206179 flex-1 flex flex-col justify-start items-start gap-3"
            >
              <div
                data-layer="Amount"
                className="Amount self-stretch justify-center text-zinc-950 text-sm font-medium font-['Poppins']"
              >
                Amount
              </div>
              <div
                data-layer="Input"
                className="Input self-stretch h-12 md:h-14 px-3 md:px-4 py-2 rounded-2xl outline-1 -outline-offset-[-0.50px] outline-1-zinc-200 flex justify-start items-center gap-3 overflow-hidden"
              >
                <div
                  data-layer="0.00"
                  className="00 flex-1 justify-start text-zinc-400 text-sm md:text-base font-normal font-['Poppins'] leading-normal"
                >
                  0.00
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-layer="Buttons/main"
          className="ButtonsMain w-full sm:w-auto h-10 sm:h-12 pl-4 pr-6 py-2 rounded-[100px] outline-1 -outline-offset-[-1px] outline-[#737eff] flex justify-center items-center gap-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M6 12H12M18 12H12M12 12V6M12 12V18"
              stroke="#737EFF"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div
            data-layer="Add Item"
            className="AddItem text-center justify-start text-[#737eff] text-sm sm:text-base font-medium font-['Plus_Jakarta_Sans'] leading-normal"
          >
            Add Item
          </div>
        </div>
      </div>
      <div
        data-layer="Frame 2147223655"
        className="Frame2147223655 self-stretch p-4 md:p-6 bg-white rounded-3xl flex flex-col justify-start items-start gap-6"
      >
        <div
          data-layer="Additional Charges"
          className="AdditionalCharges text-center justify-start text-zinc-950 text-xl font-medium font-['Plus_Jakarta_Sans'] leading-loose"
        >
          Additional Charges
        </div>
        <div
          data-layer="Frame 2147223655"
          className="Frame2147223655 self-stretch flex flex-col justify-start items-start gap-4"
        >
          <div
            data-layer="Frame 2147223653"
            className="Frame2147223653 self-stretch w-full flex flex-col sm:flex-row justify-start items-end gap-4"
          >
            <div
              data-layer="Frame 2147206178"
              className="Frame2147206178 flex-1 flex flex-col justify-start items-start gap-3"
            >
              <div
                data-layer="Tax"
                className="Tax self-stretch justify-center text-zinc-950 text-sm font-medium font-['Poppins']"
              >
                Tax
              </div>
              <div
                data-layer="Input"
                className="Input self-stretch h-12 md:h-14 px-3 md:px-4 py-2 rounded-2xl outline-1 -outline-offset-[-0.50px] outline-1-zinc-200 flex justify-start items-center gap-3 overflow-hidden"
              >
                <div
                  data-layer="0"
                  className="flex-1 justify-start text-zinc-400 text-sm md:text-base font-normal font-['Poppins'] leading-normal"
                >
                  0
                </div>
              </div>
            </div>
            <div
              data-layer="Frame 2147206183"
              className="Frame2147206183 flex-col justify-start items-start gap-3"
            >
              <div
                data-layer="Input"
                className="Input h-12 md:h-14 px-3 md:px-4 py-2 rounded-2xl outline-1 -outline-offset-[-0.50px] outline-1-zinc-200 flex justify-start items-center gap-3 overflow-hidden"
              >
                <div
                  data-layer="%"
                  className="justify-start text-zinc-950 text-sm md:text-base font-normal font-['Poppins'] leading-normal"
                >
                  %
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="#09090B"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div
              data-layer="Frame 2147206182"
              className="Frame2147206182 flex-1 flex flex-col justify-start items-start gap-3"
            >
              <div
                data-layer="Discount"
                className="Discount self-stretch justify-center text-zinc-950 text-sm font-medium font-['Poppins']"
              >
                Discount
              </div>
              <div
                data-layer="Input"
                className="Input self-stretch h-12 md:h-14 px-3 md:px-4 py-2 rounded-2xl outline-1 -outline-offset-[-0.50px] outline-1-zinc-200 flex justify-start items-center gap-3 overflow-hidden"
              >
                <div
                  data-layer="0"
                  className="flex-1 justify-start text-zinc-400 text-sm md:text-base font-normal font-['Poppins'] leading-normal"
                >
                  0
                </div>
              </div>
            </div>
            <div
              data-layer="Frame 2147206181"
              className="Frame2147206181 flex flex-col justify-start items-start gap-3"
            >
              <div
                data-layer="Input"
                className="Input h-12 md:h-14 px-3 md:px-4 py-2 rounded-2xl outline-1 -outline-offset-[-0.50px] outline-1-zinc-200 flex justify-start items-center gap-3 overflow-hidden"
              >
                <div
                  data-layer="%"
                  className="justify-start text-zinc-950 text-sm md:text-base font-normal font-['Poppins'] leading-normal"
                >
                  %
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="#09090B"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div
            data-layer="Frame 2147223654"
            className="Frame2147223654 self-stretch inline-flex justify-start items-start gap-4"
          >
            <div
              data-layer="Frame 2147206178"
              className="Frame2147206178 flex-1 flex-col justify-start items-start gap-3"
            >
              <div
                data-layer="Shipping"
                className="Shipping self-stretch justify-center text-zinc-950 text-sm font-medium font-['Poppins']"
              >
                Shipping
              </div>
              <div
                data-layer="Input"
                className="Input self-stretch h-14 px-4 py-3 rounded-2xl outline-1 -outline-offset-[-0.50px] outline-1-zinc-200 inline-flex justify-start items-center gap-3 overflow-hidden"
              >
                <div
                  data-layer="0"
                  className="flex-1 justify-start text-zinc-400 text-base font-normal font-['Poppins'] leading-normal"
                >
                  0
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        data-layer="Frame 2147223656"
        className="Frame2147223656 self-stretch p-4 md:p-6 bg-white rounded-3xl flex flex-col justify-start items-start gap-6"
      >
        <div
          data-layer="Additional Information"
          className="AdditionalInformation text-center justify-start text-zinc-950 text-xl font-medium font-['Plus_Jakarta_Sans'] leading-loose"
        >
          Additional Information
        </div>
        <div
          data-layer="Frame 2147223655"
          className="Frame2147223655 self-stretch flex flex-col justify-start items-start gap-4"
        >
          <div
            data-layer="Frame 2147223654"
            className="Frame2147223654 self-stretch inline-flex justify-start items-start gap-4"
          >
            <div
              data-layer="Frame 2147206178"
              className="Frame2147206178 flex-1 flex-col justify-start items-start gap-3"
            >
              <div
                data-layer="Notes"
                className="Notes self-stretch justify-center text-zinc-950 text-sm font-medium font-['Poppins']"
              >
                Notes
              </div>
              <div
                data-layer="Input"
                className="Input self-stretch h-24 md:h-14 px-3 md:px-4 py-2 rounded-2xl outline-1 -outline-offset-[-0.50px] outline-1-zinc-200 flex justify-start items-start gap-3 overflow-hidden"
              >
                <div
                  data-layer="Any additional notes or information"
                  className="AnyAdditionalNotesOrInformation flex-1 justify-start text-zinc-400 text-sm md:text-base font-normal font-['Poppins'] leading-normal"
                >
                  Any additional notes or information
                </div>
              </div>
            </div>
          </div>
          <div
            data-layer="Frame 2147223655"
            className="Frame2147223655 self-stretch inline-flex justify-start items-start gap-4"
          >
            <div
              data-layer="Frame 2147206178"
              className="Frame2147206178 flex-1 flex-col justify-start items-start gap-3"
            >
              <div
                data-layer="Terms & Conditions"
                className="TermsConditions self-stretch justify-center text-zinc-950 text-sm font-medium font-['Poppins']"
              >
                Terms & Conditions
              </div>
              <div
                data-layer="Input"
                className="Input self-stretch h-24 md:h-14 px-3 md:px-4 py-2 rounded-2xl outline-1 -outline-offset-[-0.50px] outline-1-zinc-200 flex justify-start items-start gap-3 overflow-hidden"
              >
                <div
                  data-layer="Payment terms, late fees, etc."
                  className="PaymentTermsLateFeesEtc flex-1 justify-start text-zinc-400 text-sm md:text-base font-normal font-['Poppins'] leading-normal"
                >
                  Payment terms, late fees, etc.
                </div>
              </div>
            </div>
          </div>
          <div
            data-layer="Buttons/main"
            className="ButtonsMain h-12 pl-6 pr-10 py-3 rounded-[100px] outline-1 -outline-offset-[-1px] outline-[#737eff] inline-flex justify-center items-center gap-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M6 20L18 20"
                stroke="#737EFF"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 16V4M12 4L15.5 7.5M12 4L8.5 7.5"
                stroke="#737EFF"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div
              data-layer="Upload Signature"
              className="UploadSignature text-center justify-start text-[#737eff] text-base font-medium font-['Plus_Jakarta_Sans'] leading-normal"
            >
              Upload Signature
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
