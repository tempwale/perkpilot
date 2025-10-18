import Background from "../components/Background";
import Footer from "../components/Footer";
import Header from "../components/Header";
import AvailableTools from "../components/Tools/AvailableTools";
import Popular from "../components/Tools/Popular";
import ToolsGrid from "../components/Tools/ToolsGrid";
import ToolsHeading from "../components/Tools/ToolsHeading";

export default function ToolsPage() {
  return (
    <div className="flex flex-col bg-black pt-20">
      <Header />
      <div className="mt-10 w-full flex justify-center">
        <div className="w-full max-w-7xl px-4">
          <ToolsHeading />
          <div className="mt-8 flex justify-center">
            <Popular />
            <Background />
          </div>
          <AvailableTools />
          <ToolsGrid />
        </div>
      </div>
      <Footer />
    </div>
  );
}
