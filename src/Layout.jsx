import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CoreServices from "./components/CoreServices";
import CustomerSection from "./constants/CustomerSections";
import MagicNumbers from "./constants/MagicNumbers";

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
