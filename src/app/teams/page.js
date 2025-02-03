import React from "react";
import Header from "../../../public/components/common/Header";
import Footer from "../../../public/components/common/Footer";
import TeamBanner from "../../../public/components/teamcomponents/TeamBanner";
import OurTeam from "../../../public/components/teamcomponents/MeetOurTeam";
import BlisttechContactStrip from "../../../public/components/homecomponents/BlisttechContactStrip";


export default function page() {
  return (
    <>
      <Header />
      <TeamBanner />
      <OurTeam />
      <BlisttechContactStrip />
      <Footer />
    </>
  );
}
