import React from "react";
import "./style.scss";
const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <div>
        <img src={require("../../assets/image/with_text 2.png")} alt="" />
        {/* <h3>خدمات فنی ناصری</h3> */}
        <div className="lds-spinner">
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
