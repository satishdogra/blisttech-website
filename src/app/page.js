import AboutBlisttech from "../../public/components/aboutuscomponents/AboutBlisttech";
import Footer from "../../public/components/common/Footer";
import Header from "../../public/components/common/Header";
import Contact from "../../public/components/homecomponents/Contact";
import Count from "../../public/components/homecomponents/Count";
import HomeSlider from "../../public/components/homecomponents/HomeSlider";
import OurExperties from "../../public/components/homecomponents/OurExperties";
import OurWork from "../../public/components/homecomponents/OurWork";
import Process from "../../public/components/homecomponents/Process";
import SuccessStories from "../../public/components/homecomponents/SuccessStories";
import Technologies from "../../public/components/homecomponents/Technologies";

export default function Home() {
  return (
    <>
      <Header />
      <HomeSlider />
      <OurExperties />
      <SuccessStories />
      <OurWork />
      <Count />
      <Process />
      <Technologies />
      <AboutBlisttech />
      <Contact />
      <Footer />
    </>
  );
}
