import React from "react";
import Header from "../../../public/components/common/Header";
import Footer from "../../../public/components/common/Footer";
import BlisttechContactStrip from "../../../public/components/homecomponents/BlisttechContactStrip";
import LandingPageDesign from "../../../public/components/landingpagedesigncomponents/LandingPageDesign";

export default function page() {
  return (
    <>
      <Header />
      <LandingPageDesign />    
      <BlisttechContactStrip />
      <Footer />
    </>
  );
}
