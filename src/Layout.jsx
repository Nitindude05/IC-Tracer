import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CoreServices from "./Components/CoreServices";
import CustomerSection from "./Constants/CustomerSections"
import MagicNumbers from "./Constants/MagicNumbers";

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />

        <CoreServices />

        <CustomerSection />

        <MagicNumbers />
      </main>
      <Footer />
    </>
  );
}
