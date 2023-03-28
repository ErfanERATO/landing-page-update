import React from 'react';
import "../innerBrands/style.scss";
import "../../assets/style/custom.scss";
import CustomSwiper from '../swiper';

const InnerBrands = () => {
  return (
    <div className="whole-inner-brands container">
      <div className="row">
        <div className="col-12">
          <div className="swiper-title">
           <h3 className="fw-500">برند‌های ایرانی</h3>
          </div>
          <CustomSwiper/>
        </div>
      </div>
    </div>
  )
}

export default InnerBrands