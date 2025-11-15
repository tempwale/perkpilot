interface CompanyStatsProps {
  founded: string;
  employees: string;
  headquarters: string;
  userCount?: string;
}

export default function CompanyStats({
  founded,
  employees,
  headquarters,
  userCount = "4M+",
}: CompanyStatsProps) {
  return (
    <div className="w-full">
      {/* Mobile Layout - 2x2 Grid */}
      <div className="grid grid-cols-2 gap-4 lg:hidden" data-node-id="250:2254">
        <div
          className="flex flex-col gap-[12px] items-start"
          data-node-id="250:2255"
        >
          <p
            className="font-normal leading-[24px] text-[16px] text-zinc-400 w-full"
            style={{ fontFamily: "Plus Jakarta Sans" }}
            data-node-id="250:2256"
          >
            User
          </p>
          <p
            className="font-medium leading-[32px] text-[24px] text-zinc-100 w-full"
            style={{ fontFamily: "Plus Jakarta Sans" }}
            data-node-id="250:2257"
          >
            {userCount}
          </p>
        </div>
        <div
          className="flex flex-col gap-[12px] items-start"
          data-node-id="250:2258"
        >
          <p
            className="font-normal leading-[24px] text-[16px] text-zinc-400"
            style={{ fontFamily: "Plus Jakarta Sans" }}
            data-node-id="250:2259"
          >
            Founded
          </p>
          <p
            className="font-medium leading-[32px] text-[24px] text-zinc-100"
            style={{ fontFamily: "Plus Jakarta Sans" }}
            data-node-id="250:2260"
          >
            {founded}
          </p>
        </div>
        <div
          className="flex flex-col gap-[12px] items-start"
          data-node-id="250:2264"
        >
          <p
            className="font-normal leading-[24px] text-[16px] text-zinc-400"
            style={{ fontFamily: "Plus Jakarta Sans" }}
            data-node-id="250:2265"
          >
            HQ
          </p>
          <p
            className="font-medium leading-[32px] text-[24px] text-zinc-100"
            style={{ fontFamily: "Plus Jakarta Sans" }}
            data-node-id="250:2266"
          >
            {headquarters.split(",")[0]}
          </p>
        </div>
        <div
          className="flex flex-col gap-[12px] items-start"
          data-node-id="250:2261"
        >
          <p
            className="font-normal leading-[24px] text-[16px] text-zinc-400"
            style={{ fontFamily: "Plus Jakarta Sans" }}
            data-node-id="250:2262"
          >
            Employees
          </p>
          <p
            className="font-medium leading-[32px] text-[24px] text-zinc-100"
            style={{ fontFamily: "Plus Jakarta Sans" }}
            data-node-id="250:2263"
          >
            {employees}
          </p>
        </div>
      </div>

      {/* Desktop Layout - Horizontal */}
      <div
        className="hidden lg:flex items-start justify-between max-w-3xl"
        data-node-id="250:2254"
      >
        <div
          className="flex flex-col gap-[12px] items-start w-[104px]"
          data-node-id="250:2255"
        >
          <p
            className="font-normal leading-[24px] text-[16px] text-zinc-400 w-full"
            style={{ fontFamily: "Plus Jakarta Sans" }}
            data-node-id="250:2256"
          >
            User
          </p>
          <p
            className="font-medium leading-[32px] text-[24px] text-zinc-100 w-full"
            style={{ fontFamily: "Plus Jakarta Sans" }}
            data-node-id="250:2257"
          >
            {userCount}
          </p>
        </div>
        <div
          className="flex flex-col gap-[12px] items-start"
          data-node-id="250:2258"
        >
          <p
            className="font-normal leading-[24px] text-[16px] text-zinc-400"
            style={{ fontFamily: "Plus Jakarta Sans" }}
            data-node-id="250:2259"
          >
            Founded
          </p>
          <p
            className="font-medium leading-[32px] text-[24px] text-center text-zinc-100"
            style={{ fontFamily: "Plus Jakarta Sans" }}
            data-node-id="250:2260"
          >
            {founded}
          </p>
        </div>
        <div
          className="flex flex-col gap-[12px] items-start"
          data-node-id="250:2261"
        >
          <p
            className="font-normal leading-[24px] text-[16px] text-zinc-400"
            style={{ fontFamily: "Plus Jakarta Sans" }}
            data-node-id="250:2262"
          >
            Employees
          </p>
          <p
            className="font-medium leading-[32px] text-[24px] text-center text-zinc-100"
            style={{ fontFamily: "Plus Jakarta Sans" }}
            data-node-id="250:2263"
          >
            {employees}
          </p>
        </div>
        <div
          className="flex flex-col gap-[12px] items-start"
          data-node-id="250:2264"
        >
          <p
            className="font-normal leading-[24px] min-w-full text-[16px] text-zinc-400"
            style={{ fontFamily: "Plus Jakarta Sans" }}
            data-node-id="250:2265"
          >
            HQ
          </p>
          <p
            className="font-medium leading-[32px] text-[24px] text-center text-zinc-100"
            style={{ fontFamily: "Plus Jakarta Sans" }}
            data-node-id="250:2266"
          >
            {headquarters.split(",")[0]}
          </p>
        </div>
      </div>
    </div>
  );
}
