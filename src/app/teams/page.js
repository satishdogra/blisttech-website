import React from "react";
import Header from "../../../public/components/common/Header";
import Footer from "../../../public/components/common/Footer";
import TeamBanner from "../../../public/components/homecomponents/TeamBanner";
import SuccessStories from "../../../public/components/homecomponents/SuccessStories";

export default function page() {
  return (
    <>
      <Header />
      <TeamBanner />
      <Footer />
    </>
  );
}
