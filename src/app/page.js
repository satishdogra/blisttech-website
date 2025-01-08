import Footer from "../../public/components/common/Footer";
import Header from "../../public/components/common/Header";
import HomeSlider from "../../public/components/homecomponents/HomeSlider";
import OurExperties from "../../public/components/ourexpertiescompents/OurExperties";


export default function Home() {
  return (
    <>
      <Header />
      <HomeSlider />
      <OurExperties />
      <Footer />
    </>
  );
}
