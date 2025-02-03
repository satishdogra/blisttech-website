import React from "react";
import Header from "../../../public/components/common/Header";
import Footer from "../../../public/components/common/Footer";
import AboutMain from "../../../public/components/aboutmaincomponents/AboutMain";
import AboutMainBanner from "../../../public/components/aboutmaincomponents/AboutMainBanner";
import OurSkill from "../../../public/components/aboutmaincomponents/OurSkill";
import BlisttechContactStrip from "../../../public/components/homecomponents/BlisttechContactStrip";

export default function page() {
  return (
    <>
      <Header />
      <AboutMainBanner />
      <AboutMain />
      <OurSkill />
     <BlisttechContactStrip />
      <Footer />
    </>
  );
}
