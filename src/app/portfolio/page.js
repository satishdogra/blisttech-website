import React from "react";
import Header from "../../../public/components/common/Header";
import Footer from "../../../public/components/common/Footer";
import PortfolioBanner from "../../../public/components/portfoliocomponents/PortfolioBanner";
import BlisttechContactStrip from "../../../public/components/homecomponents/BlisttechContactStrip";
import Portfolios from "../../../public/components/portfoliocomponents/Portfolios";
import LandingPage from "../../../public/components/portfoliocomponents/LandingPage";

export default function page() {
  return (
    <>
      <Header />
      <PortfolioBanner />
      <Portfolios />
      <LandingPage />
      <BlisttechContactStrip />
      <Footer />
    </>
  );
}
