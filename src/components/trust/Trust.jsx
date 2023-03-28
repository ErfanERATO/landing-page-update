import React from "react";
import "../trust/style.scss";
import "../../assets/style/custom.scss";

const Trust = () => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="banner-holder">
          <div className="banner">
            <div className="title">
              <h2 className="fw-600">اعتماد شما و سپردن تعمیرات لوازم خانگی به متخصصان ما</h2>
            </div>
            <div className="description">
              <p className="fw-300">تعمیرات در کم‌ترین زمان ممکن و بیشترین دقت</p>
            </div>
            <div className="button">
              <a type="button" className="btn btn-lg" href="tel:+989306773732">
                ثبت سفارش سریع
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trust;
