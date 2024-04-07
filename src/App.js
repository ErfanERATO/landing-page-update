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

  const disableAllConsoles = (foreColor = "#D6A419", backColor = "#2d2e32") => {
    var svgDataUrl = `data:image/svg+xml;base64,${btoa(`<svg id="euyUBtFqYS11" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1280 1024" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" > 
  <style><![CDATA[ #euyUBtFqYS11{ --color:${foreColor}; } #euyUBtFqYS12_to {animation: euyUBtFqYS12_to__to 4000ms linear infinite normal forwards}@keyframes euyUBtFqYS12_to__to { 0% {transform: translate(640.000031px,654.202986px)} 40% {transform: translate(640.000031px,654.202986px)} 50% {transform: translate(456.000031px,654.202986px)} 65% {transform: translate(456.000031px,654.202986px)} 77.5% {transform: translate(640.000031px,654.202986px)} 100% {transform: translate(640.000031px,654.202986px)}} #euyUBtFqYS12_ts {animation: euyUBtFqYS12_ts__ts 4000ms linear infinite normal forwards}@keyframes euyUBtFqYS12_ts__ts { 0% {transform: scale(1,1)} 87.5% {transform: scale(1,1)} 100% {transform: scale(0,0)}} #euyUBtFqYS12 {animation: euyUBtFqYS12_c_o 4000ms linear infinite normal forwards}@keyframes euyUBtFqYS12_c_o { 0% {opacity: 0} 27.5% {opacity: 0} 40% {opacity: 1} 100% {opacity: 1}} #euyUBtFqYS16_to {animation: euyUBtFqYS16_to__to 4000ms linear infinite normal forwards}@keyframes euyUBtFqYS16_to__to { 0% {offset-distance: 0%} 25% {offset-distance: 85.646133%} 87.5% {offset-distance: 85.646133%} 100% {offset-distance: 100%}} #euyUBtFqYS16_tr {animation: euyUBtFqYS16_tr__tr 4000ms linear infinite normal forwards}@keyframes euyUBtFqYS16_tr__tr { 0% {transform: rotate(45deg)} 25% {transform: rotate(405deg)} 100% {transform: rotate(405deg)}} #euyUBtFqYS16_ts {animation: euyUBtFqYS16_ts__ts 4000ms linear infinite normal forwards}@keyframes euyUBtFqYS16_ts__ts { 0% {transform: scale(0.99999,0.99999)} 87.5% {transform: scale(0.99999,0.99999)} 100% {transform: scale(0,0)}} #euyUBtFqYS17_to {animation: euyUBtFqYS17_to__to 4000ms linear infinite normal forwards}@keyframes euyUBtFqYS17_to__to { 0% {transform: translate(639.99999px,287.566022px)} 25% {transform: translate(639.99999px,376.404483px)} 100% {transform: translate(639.99999px,376.404483px)}} #euyUBtFqYS17_ts {animation: euyUBtFqYS17_ts__ts 4000ms linear infinite normal forwards}@keyframes euyUBtFqYS17_ts__ts { 0% {transform: scale(1,1)} 87.5% {transform: scale(1,1)} 100% {transform: scale(0,0)}} #euyUBtFqYS17 {animation: euyUBtFqYS17_c_o 4000ms linear infinite normal forwards}@keyframes euyUBtFqYS17_c_o { 0% {opacity: 0} 25% {opacity: 1} 100% {opacity: 1}} #euyUBtFqYS18_to {animation: euyUBtFqYS18_to__to 4000ms linear infinite normal forwards}@keyframes euyUBtFqYS18_to__to { 0% {transform: translate(861.941697px,731.239099px)} 45% {transform: translate(861.941697px,731.239099px)} 55% {transform: translate(861.941697px,687.239099px)} 100% {transform: translate(861.941697px,687.239099px)}} #euyUBtFqYS18 {animation: euyUBtFqYS18_c_o 4000ms linear infinite normal forwards}@keyframes euyUBtFqYS18_c_o { 0% {opacity: 0} 45% {opacity: 0} 55% {opacity: 1} 65% {opacity: 1} 70% {opacity: 0} 100% {opacity: 0}} ]]></style> <g id="euyUBtFqYS12_to" transform="translate(640.000031,654.202986)"><g id="euyUBtFqYS12_ts" transform="scale(1,1)" ><g id="euyUBtFqYS12" transform="translate(-640.000031,-600.01001)" opacity="0" ><path d="M505.81,541.44h27.77l41.55,117.44h-26.61l-7.75-24.14h-43.25l-7.96,24.14h-25.67l41.92-117.44Zm-1.62,73.07h30.08L519.43,568.3l-15.24,46.21Z" fill="var(--color)" /><path d="M590.47,541.44h24.14v48.39l45.38-48.39h31.71l-48.19,48.3l50.67,69.14h-31.55l-36.18-51.27-11.82,11.99v39.28h-24.14v-117.44Z" fill="var(--color)" /><path d="M798.34,648.45c-8.87,9.14-21.7,13.7-38.48,13.7-16.79,0-29.61-4.57-38.48-13.7-11.9-11.21-17.85-27.36-17.85-48.44c0-21.51,5.95-37.66,17.85-48.44c8.87-9.14,21.7-13.7,38.48-13.7s29.61,4.57,38.48,13.7c11.84,10.78,17.77,26.93,17.77,48.44c0,21.08-5.92,37.23-17.77,48.44ZM783.01,630.6c5.71-7.17,8.57-17.37,8.57-30.6c0-13.17-2.86-23.36-8.57-30.56s-13.42-10.8-23.15-10.8-17.48,3.59-23.27,10.76-8.68,17.37-8.68,30.6s2.89,23.42,8.68,30.6c5.79,7.17,13.54,10.76,23.27,10.76s17.44-3.59,23.15-10.76Z" fill="var(--color)" /></g></g></g><g id="euyUBtFqYS16_to" style="offset-path:path('M639.999996,1106.372196L639.999998,479.861994L639.999998,479.861994L639.999998,374.861994');offset-rotate:auto" ><g id="euyUBtFqYS16_tr" transform="rotate(45)"><g id="euyUBtFqYS16_ts" transform="scale(0.99999,0.99999)" ><rect width="73.68" height="73.68" rx="0" ry="0" transform="translate(-36.84,-36.839997)" fill="var(--color)" /></g></g></g><g id="euyUBtFqYS17_to" transform="translate(639.99999,287.566022)" ><g id="euyUBtFqYS17_ts" transform="scale(1,1)"><path id="euyUBtFqYS17" d="M742.56,387.16l10.8-10.8c6.58-6.58,6.58-17.24,0-23.82L651.93,251.11c-6.58-6.58-17.24-6.58-23.82,0L526.64,352.54c-6.58,6.58-6.58,17.24,0,23.82l10.8,10.8l29.49-29.49h27.8l-31.49,31.46c-6.58,6.58-6.59,17.25-.01,23.83l10.79,10.79l66-66v0l66,66l10.77-10.79c6.57-6.58,6.56-17.24-.02-23.81l-31.5-31.47h27.8l29.49,29.48ZM599.02,325.57l41-41l41,41h-82Z" transform="translate(-639.99999,-334.962499)" opacity="0" fill="var(--color)" /></g></g><g id="euyUBtFqYS18_to" transform="translate(861.941697,731.239099)" ><text id="euyUBtFqYS18" dx="0" dy="0" font-family="&quot;euyUBtFqYS11:::Roboto&quot;" font-size="70" font-weight="700" transform="scale(1.297752,1.297752) translate(-157.64833,19.880776)" opacity="0" fill="var(--color)" stroke-width="0" ><tspan y="0" font-weight="700" stroke-width="0" ><![CDATA[ TEAM.DEV ]]></tspan></text></g> <style ><![CDATA[ @font-face {font-family: 'euyUBtFqYS11:::Roboto';font-style: normal;font-weight: 700;src: url(data:font/ttf;charset=utf-8;base64,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) format('truetype');} ]]></style> 
  </svg>`)}`;
    console.clear();
    console.log(
      // "%c                                                 ",
      "%c   Developed By: http://akoteam.dev   ",
      `
  background-color: ${backColor};
  background-image: url(${svgDataUrl});
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  color: ${foreColor};
  padding-top: 200px;
  padding-bottom: 15px;
  padding-left: 100px;
  padding-right: 100px;
  margin: 20px;
`
    );
    console.log = () => { };
    console.warn = () => { };
    console.error = () => { };
    console.clear = () => { };
  };
  useEffect(() => {
    disableAllConsoles("#0ff9d6", "#2d2e32");
  }, []);
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
