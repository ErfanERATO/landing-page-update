import React from "react";
import "../repersent/style.scss";
import "../../assets/style/custom.scss";

const Repersent = () => {
  return (
    <div className="represent-section" id="represents">
      <div className="row">
        <div className="col-12">
          <div className="title">
            <h2 className="fw-600">نمایندگی‌های فعال</h2>
          </div>
        </div>
      </div>

      <div className="all-represents">
        <div className="row container">
          <div className="col-12">
            <div className="first-row">
              <div className="logo1">
                <img
                  src={require("../../assets/image/colorlogo/logoc1.png")}
                  alt=""
                />
              </div>
              <div className="logo2">
                <img
                  src={require("../../assets/image/colorlogo/logoc2.png")}
                  alt=""
                />
              </div>
              <div className="logo3">
                <img
                  src={require("../../assets/image/colorlogo/logoc3.png")}
                  alt=""
                />
              </div>
              <div className="logo4">
                <img
                  src={require("../../assets/image/colorlogo/logoc4.png")}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="col-12">
            <div className="second-row">
              <div className="logo5">
                <img
                  src={require("../../assets/image/colorlogo/logoc5.png")}
                  alt=""
                />
              </div>
              <div className="logo6">
                <img
                  src={require("../../assets/image/colorlogo/logoc6.png")}
                  alt=""
                />
              </div>
              <div className="logo7">
                <img
                  src={require("../../assets/image/colorlogo/logoc7.png")}
                  alt=""
                />
              </div>
              <div className="logo8">
                <img
                  src={require("../../assets/image/colorlogo/logoc8.png")}
                  alt=""
                />
              </div>
              <div className="logo9">
                <img
                  src={require("../../assets/image/colorlogo/logoc9.png")}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repersent;
