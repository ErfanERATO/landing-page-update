import "antd/dist/reset.css";
import React from "react";
import "../src/assets/style/index.scss";
import AboutUs from "./components/about";
import BgImage from "./components/bgImage";
import ContantUs from "./components/contact-us";
import CopyRights from "./components/copyRights";
import Footer from "./components/footer";
import ForiegnBrands from "./components/foreignBrands";
import Header from "./components/header";
import Hero from "./components/hero";
import InnerBrands from "./components/innerBrands";
import Management from "./components/management";
import CustomNavbar from "./components/navbar";
import Perssonel from "./components/perssonel";
import Repersent from "./components/repersent";
import CustomStepper from "./components/steps";
import Trust from "./components/trust";
import SplashScreen from "./components/splashScreen";
import { useGet } from "./hooks/useGet";

function App() {
  const { data, loading } = useGet({ url: "web/data" });
  console.log(data);
  if (loading) {
    return <SplashScreen />;
  }

  return (
    <>
      <BgImage>
        <Header data={data?.data} />
        <CustomNavbar />
        <Hero data={data?.data} />
      </BgImage>
      <main>
        <AboutUs info={data?.data} />
        <Trust />
        <ForiegnBrands data={data?.data} />
        <InnerBrands data={data?.data} />
        <Repersent data={data?.data?.active_brands} />
        <CustomStepper />
        <Management data={data?.data?.management} />
        <Perssonel data={data?.data?.tec} />
        <ContantUs data={data?.data} />
      </main>
      <Footer />
      <CopyRights />
    </>
  );
}

export default App;
