import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-black">
      <div className="px-[50px]">
        <Header />
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.08)] to-transparent"></div>
        <HeroSection />
      </div>
    </div>
  );
}

export default App;
