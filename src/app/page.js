import AboutBlisttech from "../../public/components/aboutuscomponents/AboutBlisttech";
import Footer from "../../public/components/common/Footer";
import Header from "../../public/components/common/Header";
import Contact from "../../public/components/contactcomponents/Contact";
import Count from "../../public/components/countcomponents/Count";
import HomeSlider from "../../public/components/homecomponents/HomeSlider";
import OurExperties from "../../public/components/ourexpertiescompents/OurExperties";
import OurWork from "../../public/components/ourworkcomponents/OurWork";
import Process from "../../public/components/processcomponents/Process";
import SuccessStories from "../../public/components/successstoriescomponents/SuccessStories";
import Technologies from "../../public/components/technologiescomponents/Technologies";


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
