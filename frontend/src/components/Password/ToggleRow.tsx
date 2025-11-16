import type { ReactNode } from "react";

type Props = {
  label: string;
  children?: ReactNode;
};

export default function ToggleRow({ label, children }: Props) {
  return (
    <div className="SideMenu self-stretch rounded-[2.82px] inline-flex justify-between items-center">
      <div className="Frame1321315155 flex justify-start items-center gap-[8.46px]">
        <div className="UppercaseAZ justify-center text-[#ebeef4] text-xs font-normal font-['Plus_Jakarta_Sans'] leading-[16.92px]">
          {label}
        </div>
      </div>
      <div className="Button w-[37.60px] h-[19.74px] relative bg-gradient-to-b from-[#501bd6] to-[#7f57e2] rounded-[46.99px] outline-[0.70px]-offset-[-0.70px] outline-[#501bd6] overflow-hidden">
        <div className="Button w-[16.45px] h-4 px-[29.14px] py-[3.76px] left-[18.80px] top-[1.88px] absolute bg-white rounded-[46.99px]" />
      </div>
      {children}
    </div>
  );
}
