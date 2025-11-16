
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

export default function Steps() {
  return (
    <div className="flex justify-center">
      <div className="Frame2147206340 max-w-[1240px] w-full flex-col justify-center items-center gap-10">
        <StepOne />
        <StepTwo />
        <StepThree />
      </div>
    </div>
  );
}
