import React from "react";
import "../hero/style.scss";
import "../../assets/style/custom.scss";

const Hero = () => {
  return (
    <section>
      <div className="row">
        <div className="col-12">
          <div className="hero-text-title">
            <h1 className="fw-600">خدمات فنی ناصری</h1>
          </div>
          <div className="hero-description">
            <p className="fw-300">
              نمایندگی تعمیرات لوازم خانگی :لباسشویی اتوماتیک ماشین ظرفشویی
              یخچال فریزر کولر گازی اسپیلت
            </p>
          </div>
        </div>

        <div className="col-12 hero-image">
          <img  src={require("../../assets/image/top-image.png")} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
