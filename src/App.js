import React from "react";
import "../src/assets/style/index.scss";
import "antd/dist/reset.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/header";
import Hero from "./components/hero";
import Footer from "./components/footer";
import BgImage from "./components/bgImage";
import AboutUs from "./components/about";
import Trust from "./components/trust";
import ForiegnBrands from "./components/foreignBrands";
import Repersent from "./components/repersent";
import Perssonel from "./components/perssonel";
import Management from "./components/management";
import ContantUs from "./components/contact-us";
import CopyRights from "./components/copyRights";
import InnerBrands from "./components/innerBrands";
import CustomNavbar from "./components/navbar";
import CustomStepper from "./components/steps";

function App() {
  const location = useLocation();
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
