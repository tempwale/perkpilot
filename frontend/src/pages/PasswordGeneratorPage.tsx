import Background from "../components/Background";
import Header from "../components/Header";
import { CTASection } from "../components/Password/CTASection";
import FAQ from "../components/Password/FAQ";
import GenerateMode from "../components/Password/GenerateMode";
import GeneratePassword from "../components/Password/GeneratePassword";
import PasswordHeading from "../components/Password/PasswordHeading";
import Steps from "../components/Password/Steps";
import StepsHeading from "../components/Password/StepsHeading";

export default function PasswordGeneratorPage() {
  return (
    <div className="flex flex-col bg-black">
      <Header />
      <PasswordHeading />
      <div className="flex flex-row">
        <GeneratePassword />
        <GenerateMode />
      </div>

      {/* Push Background down */}
      <div className="mt-12 translate-y-[-1050px]">
        <Background />
      </div>

      <StepsHeading />
      <Steps />
      <FAQ />
      <CTASection />
    </div>
  );
}
