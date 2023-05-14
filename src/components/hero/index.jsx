import React from "react";
import "../hero/style.scss";
import "../../assets/style/custom.scss";

const Hero = ({data}) => {
  return (
    <section>
      <div className="row">
        <div className="col-12">
          <div className="hero-text-title">
            <h1 className="fw-600">خدمات فنی ناصری</h1>
          </div>
          <div className="hero-description">
            <p className="fw-300">
              {data?.landing?.about_us_short}
            </p>
          </div>
        </div>

        <div className="col-12 hero-image">
          <img  src={require("../../assets/image/top-image.svg").default} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
