export default function InvoiceForm() {
  return (
    <div className="flex flex-col gap-6">
      <div
        data-layer="Frame 2147223650"
        className="Frame2147223650 w-[608px] p-6 bg-white rounded-3xl inline-flex justify-between items-center"
      >
        <div
          data-layer="Upload Your Logo"
          className="UploadYourLogo text-center justify-start text-zinc-950 text-xl font-medium font-['Plus_Jakarta_Sans'] leading-loose"
        >
          Upload Your Logo
        </div>
        <div
          data-layer="Buttons/main"
          className="ButtonsMain h-12 pl-6 pr-10 py-3 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-[#737eff] flex justify-center items-center gap-3"
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
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 16.688V4.68799M12 4.68799L15.5 8.18799M12 4.68799L8.5 8.18799"
              stroke="#737EFF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div
            data-layer="Upload Logo"
            className="UploadLogo text-center justify-start text-[#737eff] text-base font-medium font-['Plus_Jakarta_Sans'] leading-normal"
          >
            Upload Logo
          </div>
        </div>
      </div>
      <div
        data-layer="Frame 2147223651"
        className="Frame2147223651 w-[608px] p-6 bg-white rounded-3xl inline-flex flex-col justify-start items-start gap-4"
      >
        <div
          data-layer="Invoice Details"
          className="InvoiceDetails text-center justify-start text-zinc-950 text-xl font-medium font-['Plus_Jakarta_Sans'] leading-loose"
        >
          Invoice Details
        </div>
        <div
          data-layer="Frame 2147223652"
          className="Frame2147223652 self-stretch inline-flex justify-start items-start gap-4"
        >
          <div
            data-layer="Frame 2147206178"
            className="Frame2147206178 flex-1 inline-flex flex-col justify-start items-start gap-3"
          >
            <div
              data-layer="Invoice Number"
              className="InvoiceNumber self-stretch justify-center text-zinc-950 text-sm font-medium font-['Poppins']"
            >
              Invoice Number
            </div>
            <div
              data-layer="Input"
              className="Input self-stretch h-14 px-4 py-3 rounded-2xl outline outline-1 outline-offset-[-0.50px] outline-zinc-200 inline-flex justify-start items-center gap-3 overflow-hidden"
            >
              <div
                data-layer="1"
                className="flex-1 justify-start text-zinc-950 text-base font-normal font-['Poppins'] leading-normal"
              >
                1
              </div>
            </div>
          </div>
          <div
            data-layer="Frame 2147206179"
            className="Frame2147206179 flex-1 inline-flex flex-col justify-start items-start gap-3"
          >
            <div
              data-layer="Currency"
              className="Currency self-stretch justify-center text-zinc-950 text-sm font-medium font-['Poppins']"
            >
              Currency
            </div>
            <div
              data-layer="Input"
              className="Input self-stretch h-14 px-4 py-3 rounded-2xl outline outline-1 outline-offset-[-0.50px] outline-zinc-200 inline-flex justify-between items-center overflow-hidden"
            >
              <div
                data-layer="USD"
                className="Usd justify-start text-zinc-800 text-base font-normal font-['Poppins'] leading-normal"
              >
                USD
              </div>
              <div
                data-layer="nav-arrow-down"
                className="NavArrowDown w-6 h-6 relative overflow-hidden"
              >
                <div
                  data-layer="Vector"
                  className="Vector w-[4.64px] h-3 left-[6px] top-[13.64px] absolute origin-top-left -rotate-90 outline outline-[1.50px] outline-offset-[-0.75px] outline-zinc-950"
                />
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
            className="Frame2147206178 flex-1 inline-flex flex-col justify-start items-start gap-3"
          >
            <div
              data-layer="Date"
              className="Date self-stretch justify-center text-zinc-950 text-sm font-medium font-['Poppins']"
            >
              Date
            </div>
            <div
              data-layer="Input"
              className="Input self-stretch h-14 px-4 py-3 rounded-2xl outline outline-1 outline-offset-[-0.50px] outline-zinc-200 inline-flex justify-start items-center gap-3 overflow-hidden"
            >
              <div
                data-layer="08/11/2025"
                className="112025 flex-1 justify-start text-zinc-400 text-base font-normal font-['Poppins'] leading-normal"
              >
                08/11/2025
              </div>
            </div>
          </div>
          <div
            data-layer="Frame 2147206179"
            className="Frame2147206179 flex-1 inline-flex flex-col justify-start items-start gap-3"
          >
            <div
              data-layer="Due Date"
              className="DueDate self-stretch justify-center text-zinc-950 text-sm font-medium font-['Poppins']"
            >
              Due Date
            </div>
            <div
              data-layer="Input"
              className="Input self-stretch h-14 px-4 py-3 rounded-2xl outline outline-1 outline-offset-[-0.50px] outline-zinc-200 inline-flex justify-between items-center overflow-hidden"
            >
              <div
                data-layer="dd/mm/yy"
                className="DdMmYy justify-start text-zinc-400 text-base font-normal font-['Poppins'] leading-normal"
              >
                dd/mm/yy
              </div>
              <div
                data-layer="calendar"
                className="Calendar w-6 h-6 relative overflow-hidden"
              >
                <div
                  data-layer="Vector"
                  className="Vector w-[18px] h-[19px] left-[3px] top-[2px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-zinc-400"
                />
                <div
                  data-layer="Vector"
                  className="Vector w-1 h-1.5 left-[3px] top-[4px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-zinc-400"
                />
                <div
                  data-layer="Vector"
                  className="Vector w-0 h-1 left-[7px] top-[2px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-zinc-400"
                />
                <div
                  data-layer="Vector"
                  className="Vector w-[2.50px] h-1.5 left-[18.50px] top-[4px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-zinc-400"
                />
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
            className="Frame2147206178 flex-1 inline-flex flex-col justify-start items-start gap-3"
          >
            <div
              data-layer="Payment Terms"
              className="PaymentTerms self-stretch justify-center text-zinc-950 text-sm font-medium font-['Poppins']"
            >
              Payment Terms
            </div>
            <div
              data-layer="Input"
              className="Input self-stretch h-14 px-4 py-3 rounded-2xl outline outline-1 outline-offset-[-0.50px] outline-zinc-200 inline-flex justify-start items-center gap-3 overflow-hidden"
            >
              <div
                data-layer="Net 30"
                className="Net30 flex-1 justify-start text-zinc-400 text-base font-normal font-['Poppins'] leading-normal"
              >
                Net 30
              </div>
            </div>
          </div>
          <div
            data-layer="Frame 2147206179"
            className="Frame2147206179 flex-1 inline-flex flex-col justify-start items-start gap-3"
          >
            <div
              data-layer="PO Number"
              className="PoNumber self-stretch justify-center text-zinc-950 text-sm font-medium font-['Poppins']"
            >
              PO Number
            </div>
            <div
              data-layer="Input"
              className="Input self-stretch h-14 px-4 py-3 rounded-2xl outline outline-1 outline-offset-[-0.50px] outline-zinc-200 inline-flex justify-between items-center overflow-hidden"
            >
              <div
                data-layer="Optional"
                className="Optional flex-1 justify-start text-zinc-400 text-base font-normal font-['Poppins'] leading-normal"
              >
                Optional
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        data-layer="Frame 2147223652"
        className="Frame2147223652 self-stretch p-6 bg-white rounded-3xl inline-flex flex-col justify-start items-start gap-4"
      >
        <div
          data-layer="From Your Business"
          className="FromYourBusiness text-center justify-start text-zinc-950 text-xl font-medium font-['Plus_Jakarta_Sans'] leading-loose"
        >
          From Your Business
        </div>
        <div
          data-layer="Frame 2147223652"
          className="Frame2147223652 self-stretch inline-flex justify-start items-start gap-4"
        >
          <div
            data-layer="Frame 2147206178"
            className="Frame2147206178 flex-1 inline-flex flex-col justify-start items-start gap-3"
          >
            <div
              data-layer="Business Name"
              className="BusinessName self-stretch justify-center text-zinc-950 text-sm font-medium font-['Poppins']"
            >
              Business Name
            </div>
            <div
              data-layer="Input"
              className="Input self-stretch h-14 px-4 py-3 rounded-2xl outline outline-1 outline-offset-[-0.50px] outline-zinc-200 inline-flex justify-start items-center gap-3 overflow-hidden"
            >
              <div
                data-layer="Your company name"
                className="YourCompanyName flex-1 justify-start text-zinc-400 text-base font-normal font-['Poppins'] leading-normal"
              >
                Your company name
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
            className="Frame2147206178 flex-1 inline-flex flex-col justify-start items-start gap-3"
          >
            <div
              data-layer="Email"
              className="Email self-stretch justify-center text-zinc-950 text-sm font-medium font-['Poppins']"
            >
              Email
            </div>
            <div
              data-layer="Input"
              className="Input self-stretch h-14 px-4 py-3 rounded-2xl outline outline-1 outline-offset-[-0.50px] outline-zinc-200 inline-flex justify-start items-center gap-3 overflow-hidden"
            >
              <div
                data-layer="mail"
                className="Mail w-6 h-6 relative overflow-hidden"
              >
                <div
                  data-layer="Vector"
                  className="Vector w-[3.50px] h-2.5 left-[7px] top-[12.50px] absolute origin-top-left -rotate-90 outline outline-[1.50px] outline-offset-[-0.75px] outline-zinc-400"
                />
                <div
                  data-layer="Vector"
                  className="Vector w-5 h-3.5 left-[2px] top-[5px] absolute rounded-sm outline outline-[1.50px] outline-offset-[-0.75px] outline-zinc-400"
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
            className="Frame2147206179 flex-1 inline-flex flex-col justify-start items-start gap-3"
          >
            <div
              data-layer="Phone"
              className="Phone self-stretch justify-center text-zinc-950 text-sm font-medium font-['Poppins']"
            >
              Phone
            </div>
            <div
              data-layer="Input"
              className="Input self-stretch h-14 px-4 py-3 rounded-2xl outline outline-1 outline-offset-[-0.50px] outline-zinc-200 inline-flex justify-start items-center gap-3 overflow-hidden"
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
            className="Frame2147206178 flex-1 inline-flex flex-col justify-start items-start gap-3"
          >
            <div
              data-layer="Address"
              className="Address self-stretch justify-center text-zinc-950 text-sm font-medium font-['Poppins']"
            >
              Address
            </div>
            <div
              data-layer="Input"
              className="Input self-stretch px-4 py-3 rounded-2xl outline outline-1 outline-offset-[-0.50px] outline-zinc-200 inline-flex justify-start items-center gap-3 overflow-hidden"
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
        <div
          data-layer="Frame 2147223653"
          className="Frame2147223653 self-stretch p-6 bg-white rounded-3xl inline-flex flex-col justify-start items-start gap-4"
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
              className="Frame2147206178 flex-1 inline-flex flex-col justify-start items-start gap-3"
            >
              <div
                data-layer="Client Name"
                className="ClientName self-stretch justify-center text-zinc-950 text-sm font-medium font-['Poppins']"
              >
                Client Name
              </div>
              <div
                data-layer="Input"
                className="Input self-stretch h-14 px-4 py-3 rounded-2xl outline outline-1 outline-offset-[-0.50px] outline-zinc-200 inline-flex justify-start items-center gap-3 overflow-hidden"
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
              className="Frame2147206178 flex-1 inline-flex flex-col justify-start items-start gap-3"
            >
              <div
                data-layer="Email"
                className="Email self-stretch justify-center text-zinc-950 text-sm font-medium font-['Poppins']"
              >
                Email
              </div>
              <div
                data-layer="Input"
                className="Input self-stretch h-14 px-4 py-3 rounded-2xl outline outline-1 outline-offset-[-0.50px] outline-zinc-200 inline-flex justify-start items-center gap-3 overflow-hidden"
              >
                <div
                  data-layer="mail"
                  className="Mail w-6 h-6 relative overflow-hidden"
                >
                  <div
                    data-layer="Vector"
                    className="Vector w-[3.50px] h-2.5 left-[7px] top-[12.50px] absolute origin-top-left -rotate-90 outline outline-[1.50px] outline-offset-[-0.75px] outline-zinc-400"
                  />
                  <div
                    data-layer="Vector"
                    className="Vector w-5 h-3.5 left-[2px] top-[5px] absolute rounded-sm outline outline-[1.50px] outline-offset-[-0.75px] outline-zinc-400"
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
              className="Frame2147206179 flex-1 inline-flex flex-col justify-start items-start gap-3"
            >
              <div
                data-layer="Phone"
                className="Phone self-stretch justify-center text-zinc-950 text-sm font-medium font-['Poppins']"
              >
                Phone
              </div>
              <div
                data-layer="Input"
                className="Input self-stretch h-14 px-4 py-3 rounded-2xl outline outline-1 outline-offset-[-0.50px] outline-zinc-200 inline-flex justify-start items-center gap-3 overflow-hidden"
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
              className="Frame2147206178 flex-1 inline-flex flex-col justify-start items-start gap-3"
            >
              <div
                data-layer="Address"
                className="Address self-stretch justify-center text-zinc-950 text-sm font-medium font-['Poppins']"
              >
                Address
              </div>
              <div
                data-layer="Input"
                className="Input self-stretch px-4 py-3 rounded-2xl outline outline-1 outline-offset-[-0.50px] outline-zinc-200 inline-flex justify-start items-center gap-3 overflow-hidden"
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
      </div>
      <div
        data-layer="Frame 2147223653"
        className="Frame2147223653 self-stretch p-6 bg-white rounded-3xl inline-flex flex-col justify-start items-start gap-4"
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
            className="Frame2147206178 flex-1 inline-flex flex-col justify-start items-start gap-3"
          >
            <div
              data-layer="Client Name"
              className="ClientName self-stretch justify-center text-zinc-950 text-sm font-medium font-['Poppins']"
            >
              Client Name
            </div>
            <div
              data-layer="Input"
              className="Input self-stretch h-14 px-4 py-3 rounded-2xl outline outline-1 outline-offset-[-0.50px] outline-zinc-200 inline-flex justify-start items-center gap-3 overflow-hidden"
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
            className="Frame2147206178 flex-1 inline-flex flex-col justify-start items-start gap-3"
          >
            <div
              data-layer="Email"
              className="Email self-stretch justify-center text-zinc-950 text-sm font-medium font-['Poppins']"
            >
              Email
            </div>
            <div
              data-layer="Input"
              className="Input self-stretch h-14 px-4 py-3 rounded-2xl outline outline-1 outline-offset-[-0.50px] outline-zinc-200 inline-flex justify-start items-center gap-3 overflow-hidden"
            >
              <div
                data-layer="mail"
                className="Mail w-6 h-6 relative overflow-hidden"
              >
                <div
                  data-layer="Vector"
                  className="Vector w-[3.50px] h-2.5 left-[7px] top-[12.50px] absolute origin-top-left -rotate-90 outline outline-[1.50px] outline-offset-[-0.75px] outline-zinc-400"
                />
                <div
                  data-layer="Vector"
                  className="Vector w-5 h-3.5 left-[2px] top-[5px] absolute rounded-sm outline outline-[1.50px] outline-offset-[-0.75px] outline-zinc-400"
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
            className="Frame2147206179 flex-1 inline-flex flex-col justify-start items-start gap-3"
          >
            <div
              data-layer="Phone"
              className="Phone self-stretch justify-center text-zinc-950 text-sm font-medium font-['Poppins']"
            >
              Phone
            </div>
            <div
              data-layer="Input"
              className="Input self-stretch h-14 px-4 py-3 rounded-2xl outline outline-1 outline-offset-[-0.50px] outline-zinc-200 inline-flex justify-start items-center gap-3 overflow-hidden"
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
            className="Frame2147206178 flex-1 inline-flex flex-col justify-start items-start gap-3"
          >
            <div
              data-layer="Address"
              className="Address self-stretch justify-center text-zinc-950 text-sm font-medium font-['Poppins']"
            >
              Address
            </div>
            <div
              data-layer="Input"
              className="Input self-stretch px-4 py-3 rounded-2xl outline outline-1 outline-offset-[-0.50px] outline-zinc-200 inline-flex justify-start items-center gap-3 overflow-hidden"
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
        className="Frame2147223654 self-stretch p-6 bg-white rounded-3xl inline-flex flex-col justify-start items-start gap-6"
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
              className="Frame2147206178 flex-1 inline-flex flex-col justify-start items-start gap-3"
            >
              <div
                data-layer="Description"
                className="Description self-stretch justify-center text-zinc-950 text-sm font-medium font-['Poppins']"
              >
                Description{" "}
              </div>
              <div
                data-layer="Input"
                className="Input self-stretch px-4 py-3 rounded-2xl outline outline-1 outline-offset-[-0.50px] outline-zinc-200 inline-flex justify-start items-center gap-3 overflow-hidden"
              >
                <div
                  data-layer="Description of item/service"
                  className="DescriptionOfItemService flex-1 justify-start text-zinc-400 text-base font-normal font-['Poppins'] leading-normal"
                >
                  Description of item/service
                  <br />
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
              className="Frame2147206178 flex-1 inline-flex flex-col justify-start items-start gap-3"
            >
              <div
                data-layer="Quantity"
                className="Quantity self-stretch justify-center text-zinc-950 text-sm font-medium font-['Poppins']"
              >
                Quantity
              </div>
              <div
                data-layer="Input"
                className="Input self-stretch h-14 px-4 py-3 rounded-2xl outline outline-1 outline-offset-[-0.50px] outline-zinc-200 inline-flex justify-start items-center gap-3 overflow-hidden"
              >
                <div
                  data-layer="1"
                  className="flex-1 justify-start text-zinc-400 text-base font-normal font-['Poppins'] leading-normal"
                >
                  1
                </div>
              </div>
            </div>
            <div
              data-layer="Frame 2147206180"
              className="Frame2147206180 flex-1 inline-flex flex-col justify-start items-start gap-3"
            >
              <div
                data-layer="Rate"
                className="Rate self-stretch justify-center text-zinc-950 text-sm font-medium font-['Poppins']"
              >
                Rate
              </div>
              <div
                data-layer="Input"
                className="Input self-stretch h-14 px-4 py-3 rounded-2xl outline outline-1 outline-offset-[-0.50px] outline-zinc-200 inline-flex justify-start items-center gap-3 overflow-hidden"
              >
                <div
                  data-layer="0"
                  className="flex-1 justify-start text-zinc-400 text-base font-normal font-['Poppins'] leading-normal"
                >
                  0
                </div>
              </div>
            </div>
            <div
              data-layer="Frame 2147206179"
              className="Frame2147206179 flex-1 inline-flex flex-col justify-start items-start gap-3"
            >
              <div
                data-layer="Amount"
                className="Amount self-stretch justify-center text-zinc-950 text-sm font-medium font-['Poppins']"
              >
                Amount
              </div>
              <div
                data-layer="Input"
                className="Input self-stretch h-14 px-4 py-3 rounded-2xl outline outline-1 outline-offset-[-0.50px] outline-zinc-200 inline-flex justify-start items-center gap-3 overflow-hidden"
              >
                <div
                  data-layer="0.00"
                  className="00 flex-1 justify-start text-zinc-400 text-base font-normal font-['Poppins'] leading-normal"
                >
                  0.00
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-layer="Buttons/main"
          className="ButtonsMain h-12 pl-6 pr-10 py-3 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-[#737eff] inline-flex justify-center items-center gap-3"
        >
          <div
            data-layer="plus"
            className="Plus w-6 h-6 relative overflow-hidden"
          >
            <div
              data-layer="Vector"
              className="Vector w-3 h-3 left-[6px] top-[6px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-[#737eff]"
            />
          </div>
          <div
            data-layer="Add Item"
            className="AddItem text-center justify-start text-[#737eff] text-base font-medium font-['Plus_Jakarta_Sans'] leading-normal"
          >
            Add Item
          </div>
        </div>
      </div>
      <div
        data-layer="Frame 2147223655"
        className="Frame2147223655 self-stretch p-6 bg-white rounded-3xl inline-flex flex-col justify-start items-start gap-6"
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
            className="Frame2147223653 self-stretch inline-flex justify-start items-end gap-4"
          >
            <div
              data-layer="Frame 2147206178"
              className="Frame2147206178 flex-1 inline-flex flex-col justify-start items-start gap-3"
            >
              <div
                data-layer="Tax"
                className="Tax self-stretch justify-center text-zinc-950 text-sm font-medium font-['Poppins']"
              >
                Tax
              </div>
              <div
                data-layer="Input"
                className="Input self-stretch h-14 px-4 py-3 rounded-2xl outline outline-1 outline-offset-[-0.50px] outline-zinc-200 inline-flex justify-start items-center gap-3 overflow-hidden"
              >
                <div
                  data-layer="0"
                  className="flex-1 justify-start text-zinc-400 text-base font-normal font-['Poppins'] leading-normal"
                >
                  0
                </div>
              </div>
            </div>
            <div
              data-layer="Frame 2147206183"
              className="Frame2147206183 inline-flex flex-col justify-start items-start gap-3"
            >
              <div
                data-layer="Input"
                className="Input h-14 px-4 py-3 rounded-2xl outline outline-1 outline-offset-[-0.50px] outline-zinc-200 inline-flex justify-start items-center gap-3 overflow-hidden"
              >
                <div
                  data-layer="%"
                  className="justify-start text-zinc-950 text-base font-normal font-['Poppins'] leading-normal"
                >
                  %
                </div>
                <div
                  data-layer="nav-arrow-down"
                  className="NavArrowDown w-6 h-6 relative overflow-hidden"
                >
                  <div
                    data-layer="Vector"
                    className="Vector w-[4.64px] h-3 left-[6px] top-[13.64px] absolute origin-top-left -rotate-90 outline outline-[1.50px] outline-offset-[-0.75px] outline-zinc-950"
                  />
                </div>
              </div>
            </div>
            <div
              data-layer="Frame 2147206182"
              className="Frame2147206182 flex-1 inline-flex flex-col justify-start items-start gap-3"
            >
              <div
                data-layer="Discount"
                className="Discount self-stretch justify-center text-zinc-950 text-sm font-medium font-['Poppins']"
              >
                Discount
              </div>
              <div
                data-layer="Input"
                className="Input self-stretch h-14 px-4 py-3 rounded-2xl outline outline-1 outline-offset-[-0.50px] outline-zinc-200 inline-flex justify-start items-center gap-3 overflow-hidden"
              >
                <div
                  data-layer="0"
                  className="flex-1 justify-start text-zinc-400 text-base font-normal font-['Poppins'] leading-normal"
                >
                  0
                </div>
              </div>
            </div>
            <div
              data-layer="Frame 2147206181"
              className="Frame2147206181 inline-flex flex-col justify-start items-start gap-3"
            >
              <div
                data-layer="Input"
                className="Input h-14 px-4 py-3 rounded-2xl outline outline-1 outline-offset-[-0.50px] outline-zinc-200 inline-flex justify-start items-center gap-3 overflow-hidden"
              >
                <div
                  data-layer="%"
                  className="justify-start text-zinc-950 text-base font-normal font-['Poppins'] leading-normal"
                >
                  %
                </div>
                <div
                  data-layer="nav-arrow-down"
                  className="NavArrowDown w-6 h-6 relative overflow-hidden"
                >
                  <div
                    data-layer="Vector"
                    className="Vector w-[4.64px] h-3 left-[6px] top-[13.64px] absolute origin-top-left -rotate-90 outline outline-[1.50px] outline-offset-[-0.75px] outline-zinc-950"
                  />
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
              className="Frame2147206178 flex-1 inline-flex flex-col justify-start items-start gap-3"
            >
              <div
                data-layer="Shipping"
                className="Shipping self-stretch justify-center text-zinc-950 text-sm font-medium font-['Poppins']"
              >
                Shipping
              </div>
              <div
                data-layer="Input"
                className="Input self-stretch h-14 px-4 py-3 rounded-2xl outline outline-1 outline-offset-[-0.50px] outline-zinc-200 inline-flex justify-start items-center gap-3 overflow-hidden"
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
        className="Frame2147223656 self-stretch p-6 bg-white rounded-3xl inline-flex flex-col justify-start items-start gap-6"
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
              className="Frame2147206178 flex-1 inline-flex flex-col justify-start items-start gap-3"
            >
              <div
                data-layer="Notes"
                className="Notes self-stretch justify-center text-zinc-950 text-sm font-medium font-['Poppins']"
              >
                Notes
              </div>
              <div
                data-layer="Input"
                className="Input self-stretch h-14 px-4 py-3 rounded-2xl outline outline-1 outline-offset-[-0.50px] outline-zinc-200 inline-flex justify-start items-center gap-3 overflow-hidden"
              >
                <div
                  data-layer="Any additional notes or information"
                  className="AnyAdditionalNotesOrInformation flex-1 justify-start text-zinc-400 text-base font-normal font-['Poppins'] leading-normal"
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
              className="Frame2147206178 flex-1 inline-flex flex-col justify-start items-start gap-3"
            >
              <div
                data-layer="Terms & Conditions"
                className="TermsConditions self-stretch justify-center text-zinc-950 text-sm font-medium font-['Poppins']"
              >
                Terms & Conditions
              </div>
              <div
                data-layer="Input"
                className="Input self-stretch h-14 px-4 py-3 rounded-2xl outline outline-1 outline-offset-[-0.50px] outline-zinc-200 inline-flex justify-start items-center gap-3 overflow-hidden"
              >
                <div
                  data-layer="Payment terms, late fees, etc."
                  className="PaymentTermsLateFeesEtc flex-1 justify-start text-zinc-400 text-base font-normal font-['Poppins'] leading-normal"
                >
                  Payment terms, late fees, etc.
                </div>
              </div>
            </div>
          </div>
          <div
            data-layer="Buttons/main"
            className="ButtonsMain h-12 pl-6 pr-10 py-3 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-[#737eff] inline-flex justify-center items-center gap-3"
          >
            <div
              data-layer="upload"
              className="Upload w-6 h-6 relative overflow-hidden"
            >
              <div
                data-layer="Vector"
                className="Vector w-3 h-0 left-[6px] top-[20px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-[#737eff]"
              />
              <div
                data-layer="Vector"
                className="Vector w-[7px] h-3 left-[8.50px] top-[4px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-[#737eff]"
              />
            </div>
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
