import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import HeroSection from "./Constants/HeroSection";
import CoreServices from "./Components/CoreServices";
import MagicNumbers from "./Constants/MagicNumbers";
import LearnMore from "./Pages/LearnMore";
import BasicParts from "./Pages/BasicParts";
import EOLParts from "./Pages/EOLParts";
import AlternativeSolution from "./Pages/AlternativeSolution";
import PCBAProjects from "./Pages/PCBAProjects";

function App() {
  return (
    <Routes>
      {/* ✅ Normal routes inside layout */}
      <Route element={<Layout />}>
        <Route path="/" element={<HeroSection />} />
        <Route path="/services" element={<CoreServices />} />
        <Route path="/magic" element={<MagicNumbers />} />
      </Route>

      {/* ✅ Standalone page (no header/footer) */}
      <Route path="/learn-more" element={<LearnMore />} />
      <Route path="/service/basic-parts" element={<BasicParts />} />
      <Route path="/service/eol-parts" element={<EOLParts />} />
      <Route path="/service/alternative-solution" element={<AlternativeSolution />} />
      <Route path="/service/pcba-projects" element={<PCBAProjects />} />
    </Routes>
  );
}

export default App;
