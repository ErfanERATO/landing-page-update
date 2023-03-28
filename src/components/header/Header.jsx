import React from "react";
import "../header/style.scss";
import { BsTelephone } from "react-icons/bs";
import { TfiLocationPin } from "react-icons/tfi";

const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="row">
          <div className="col-12">
            <div className="full-header container">
              <div className="information">
                <div className="phone">
                  <i className="isax isax-call" style={{ color: "#096CF0", fontSize: "1.375rem" }}></i>

                  <a href="tel:+989306773732">+989306773732</a>
                </div>
                <div className="location">
                  <i className="isax isax-location" style={{ color: "#096CF0", fontSize: "1.375rem" }}></i>
                  <a href="#location">... نیشابور-خیابان طالقانی</a>
                </div>
              </div>
              <div className="logo">
                <img src={require("../../assets/image/white.png")} alt="" />
              </div>

              <div></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
