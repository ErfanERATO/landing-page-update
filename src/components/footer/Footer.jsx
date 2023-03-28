import React from "react";
import "../footer/style.scss";
import "../../assets/style/custom.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer container">
        <div className="row justify-content-between">
          <div className="col-md-2">
            <div className="footer-about">
              <h3 className="fw-600">درباره‌ی ما</h3>
              <p className="fw-400">درباره‌ما</p>
              <p className="fw-400">خدمات ما</p>
              <p className="fw-400">پرسنل و تکنسین</p>
            </div>
          </div>
          <div className="col-md-2">
            <div className="footer-services">
              <h3 className="fw-600">خدمات</h3>
              <p className="fw-400">نمایندگی</p>
              <p className="fw-400">برند‌ها</p>
              <p className="fw-400">راه‌های ارتباطی</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer-logo">
              <div className="logo">
                <img
                  src={require("../../assets/image/with_text 3.png")}
                  alt=""
                />
              </div>
              <p className="fw-400">
                نمایندگی تعمیرات لوازم خانگی :لباسشویی اتوماتیک ماشین ظرفشویی
                یخچال فریزر کولر گازی اسپیلت با بیش از 30 سال سابقه
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
