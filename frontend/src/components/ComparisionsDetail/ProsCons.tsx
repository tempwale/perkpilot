export function ProsConsTable() {
  return (
    <div
      data-layer="Frame 2147206213"
      className="Frame2147206213 self-stretch p-4 bg-white/10 rounded-3xl outline outline-1 outline-offset-[-1px] outline-white/10 inline-flex flex-col justify-start items-start gap-6"
    >
      <div
        data-layer="Pros"
        className="Pros self-stretch justify-start text-neutral-50 text-2xl font-medium font-['Plus_Jakarta_Sans'] leading-loose"
      >
        Pros
      </div>
      <div
        data-layer="Frame 2147206211"
        className="Frame2147206211 self-stretch flex flex-col justify-start items-start gap-6"
      >
        <div className="Feature self-stretch inline-flex justify-start items-start gap-3">
          <span className="w-1.75 h-1.75 rounded-full bg-neutral-50 mt-2 shrink-0" />
          <div className="flex-1">
            <div className="ExcellentForTeamCollaboration justify-start text-neutral-50 text-base font-normal font-['Plus_Jakarta_Sans'] leading-normal">
              Excellent for team collaboration
            </div>
          </div>
        </div>

        <div className="Feature self-stretch inline-flex justify-start items-start gap-3">
          <span className="w-1.75 h-1.75 rounded-full bg-neutral-50 mt-2 shrink-0" />
          <div className="flex-1">
            <div className="PowerfulDatabaseFunctionality justify-start text-neutral-50 text-base font-normal font-['Plus_Jakarta_Sans'] leading-normal">
              Powerful database functionality
            </div>
          </div>
        </div>

        <div className="Feature self-stretch inline-flex justify-start items-start gap-3">
          <span className="w-1.75 h-1.75 rounded-full bg-neutral-50 mt-2 shrink-0" />
          <div className="flex-1">
            <div className="RichContentBlocks justify-start text-neutral-50 text-base font-normal font-['Plus_Jakarta_Sans'] leading-normal">
              Rich content blocks
            </div>
          </div>
        </div>

        <div className="Feature self-stretch inline-flex justify-start items-start gap-3">
          <span className="w-1.75 h-1.75 rounded-full bg-neutral-50 mt-2 shrink-0" />
          <div className="flex-1">
            <div className="GreatTemplateSystem justify-start text-neutral-50 text-base font-normal font-['Plus_Jakarta_Sans'] leading-normal">
              Great template system
            </div>
          </div>
        </div>
      </div>
      <div
        data-layer="Cons"
        className="Cons self-stretch justify-start text-neutral-50 text-2xl font-medium font-['Plus_Jakarta_Sans'] leading-loose"
      >
        Cons
      </div>
      <div
        data-layer="Frame 2147206213"
        className="Frame2147206213 self-stretch flex flex-col justify-start items-start gap-6"
      >
        <div className="Feature self-stretch inline-flex justify-start items-start gap-3">
          <span className="w-1.75 h-1.75 rounded-full bg-neutral-50 mt-2 shrink-0" />
          <div className="flex-1">
            <div className="RealTimeCollaborationFeatures justify-start text-neutral-50 text-lg font-medium font-['Plus_Jakarta_Sans'] leading-[27px]">
              Real-time collaboration features
            </div>
          </div>
        </div>

        <div className="Feature self-stretch inline-flex justify-start items-start gap-3">
          <span className="w-1.75 h-1.75 rounded-full bg-neutral-50 mt-2 shrink-0" />
          <div className="flex-1">
            <div className="RealTimeCollaborationFeatures justify-start text-neutral-50 text-lg font-medium font-['Plus_Jakarta_Sans'] leading-[27px]">
              Real-time collaboration features
            </div>
          </div>
        </div>

        <div className="Feature self-stretch inline-flex justify-start items-start gap-3">
          <span className="w-1.75 h-1.75 rounded-full bg-neutral-50 mt-2 shrink-0" />
          <div className="flex-1">
            <div className="RealTimeCollaborationFeatures justify-start text-neutral-50 text-lg font-medium font-['Plus_Jakarta_Sans'] leading-[27px]">
              Real-time collaboration features
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProsCons() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ProsConsTable />
        <ProsConsTable />
        <ProsConsTable />
      </div>
    </div>
  );
}
