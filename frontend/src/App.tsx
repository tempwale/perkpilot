import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DealsPage from "./pages/DealsPage";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/deals" element={<DealsPage />} />
    </Routes>
  );
}

export default App;
