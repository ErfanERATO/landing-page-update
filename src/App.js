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

function App() {
  return (
    <>
      <BgImage>
        <Header />
        <CustomNavbar />
        <Hero />
      </BgImage>

      <main>
        <AboutUs />
        <Trust />
        <ForiegnBrands />
        <InnerBrands />
        <Repersent />
        <CustomStepper />
        <Management />
        <Perssonel />
        <ContantUs />
      </main>
      <Footer />
      <CopyRights />
    </>
  );
}

export default App;
