import Customize from "../components/Invoice/Customize";
import Details from "../components/Invoice/Details";
import HowItWorks from "../components/Invoice/HowItWorks";
import InvoiceForm from "../components/Invoice/InvoiceForm";
import InvoiceHeading from "../components/Invoice/InvoiceHeading";
import InvoiceSummary from "../components/Invoice/InvoiceSummary";
import Download from "../components/Invoice/Download";
import FAQ from "../components/Invoice/FAQ";
import CTA from "../components/Invoice/CTA";
import Footer from "../components/Footer";
import Header from "../components/Header";
export default function InvoiceGeneratorPage() {
  return (
    <div className="w-full min-h-screen pt-20  bg-[#F3F4FF] flex flex-col items-center gap-6">
      <Header forceBlackText={true} /> <InvoiceHeading />
      <div className="flex flex-row gap-6">
        <InvoiceForm />
        <InvoiceSummary />
      </div>
      <HowItWorks />
      <Details />
      <Customize />
      <Download />
      <FAQ />
      <CTA />
      <Footer />
      <Footer />
    </div>
  );
}
