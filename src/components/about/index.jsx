import React from "react";
import "../about/style.scss";
import "../../assets/style/custom.scss";

const AboutUs = () => {
  let elements = [
    {
      icon: (
        <img src={require("../../assets/image/icon/glass-stats.png")} alt="" />
      ),
      sub: "قیمت مناسب",
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
      sub: "قیمت مناسب",
    },
    {
      icon: <img src={require("../../assets/image/icon/truck.png")} alt="" />,
      sub: "قیمت مناسب",
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
            <p className="fw-300">
              خدمات فنی ناصری مرکز تخصصی نصب، اموزش و تعمیرات لوازم خانگی در
              نیشابور بوده و مجری تخصصی خدمات پس از فروش برند های مطرح ایرانی و
              خارجی درکنار شماست تا دسترسی به متخصصان و تکنیسین های مجرب را برای
              شما آسان کند .علاوه بر گرد آوری تیم تخصصی تعمیرات ، استفاده از
              قطعات اصلی ارئه فاکتور انلاین و گارانتی رسمی کرده است.
              <br />
              مجموعه ما با داشتن بیشترین متقاضی‌ در نیشابور برای خرید قطعات
              دستگاه ، شوینده مناسب ،کیسه جاروبرقی و انواع لوازم جانبی ،درخدمت
              شما مشتریان گرامی میباشد.
            </p>
          </div>
        </div>

        <div className="col-md-11" >
          <div className="row justify-content-center" >
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
