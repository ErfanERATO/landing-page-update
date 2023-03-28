import React from "react";
import "../src/assets/style/index.scss";
import "antd/dist/reset.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Footer from "./components/footer/Footer";
import BgImage from "./components/bgImage";
import AboutUs from "./components/about/AboutUs";
import Trust from "./components/trust/Trust";
import ForiegnBrands from "./components/foreignBrands/Brands";
import Repersent from "./components/repersent/Repersent";
import Perssonel from "./components/perssonel";
import Management from "./components/management";
import ContantUs from "./components/contact-us/ContantUs";
import CopyRights from "./components/copyRights";
import InnerBrands from "./components/innerBrands";
import CustomNavbar from "./components/navbar/Navbar";

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
        <AboutUs/>
        <Trust/>
        <ForiegnBrands />
        <InnerBrands/>
        <Repersent/>
        <Perssonel/>
        <Management/>
        <ContantUs/>
      </main>
      <Footer />
      <CopyRights/>
    </>
  );
}

export default App;
