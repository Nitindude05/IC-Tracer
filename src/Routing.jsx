// src/Routing.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import HeroSection from "./Constants/HeroSection";
import Login from "./Constants/Login";
import Signup from "./Constants/Signup";
import CoreServices from "./Components/CoreServices";
import MagicNumbers from "./Constants/MagicNumbers";
import Footer from "./components/Footer";
import Header from "./Components/Header";

const Routing = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/services" element={<CoreServices />} />
        <Route path="/magic" element={<MagicNumbers />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Routing;
