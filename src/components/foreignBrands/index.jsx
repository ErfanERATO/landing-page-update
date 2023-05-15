import React from "react";
import "../foreignBrands/style.scss";
import "../../assets/style/custom.scss";
import CustomSwiper from "../swiper";

const ForiegnBrands = ({ data }) => {
  return (
    <div className="whole-foriegn-brands container" id="brands">
      <div className="row">
        <div className="col-12">
          <div className="title">
            <h2 className="fw-600">برند‌های تحت پوشش</h2>
          </div>
        </div>
        <div className="col-12">
          <div className="swiper-title">
            <h3 className="fw-500">برند‌های خارجی</h3>
          </div>
          <CustomSwiper data={data?.foreign_brands} />
        </div>
      </div>
    </div>
  );
};

export default ForiegnBrands;
