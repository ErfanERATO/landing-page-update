import React from "react";
import "../about/style.scss";
import "../../assets/style/custom.scss";

const AboutUs = ({ info }) => {
  console.log("INfo" , info)
  let elements = [
    {
      icon: (
        <img src={require("../../assets/image/icon/glass-stats.png")} alt="" />
      ),
      sub: "کیفیت بالای کار",
    },
    {
      icon: (
        <img src={require("../../assets/image/icon/price-tag.png")} alt="" />
      ),
      sub: "قیمت مناسب",
    },
  ];

  let data = [
    {
      icon: (
        <img src={require("../../assets/image/icon/thumb-up.png")} alt="" />
      ),
      sub: "نیروی کار متخصص",
    },
    {
      icon: <img src={require("../../assets/image/icon/truck.png")} alt="" />,
      sub: "ارسال سریع",
    },
  ];

  return (
    <section className="about-us-section container" id="about-us" dir="ltr">
      <div className="row">
        <div className="col-12">
          <div className="abot-us-title">
            <h2 className="fw-600">درباره‌ی ما</h2>
          </div>
        </div>
        <div className="col-12">
          <div className="about-us-description">
            <p className="fw-300">{info?.landing?.about_us}</p>
          </div>
        </div>

        <div className="col-md-11">
          <div className="row justify-content-center">
            <div className="col-sm-11 col-md-4">
              <div className="about-box-title">
                <h2 className="fw-600">
                  خدمات فنی <span>ناصری</span>
                </h2>
                <p className="fw-300">با بیش از 30 سال تحربه</p>
              </div>
            </div>

            {elements.map((element, key) => (
              <div className="col-sm-6 col-md-2">
                <div key={key} className="about-card">
                  <div className="card-content">
                    <div className="icon">{element.icon}</div>
                    <div className="sub fw-400">{element.sub}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-md-11">
          <div className="row justify-content-center">
            {data.map((element, key) => (
              <div className="col-sm-6 col-md-2">
                <div key={key} className="about-card">
                  <div className="card-content">
                    <div className="icon">{element.icon}</div>
                    <div className="sub fw-400">{element.sub}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
