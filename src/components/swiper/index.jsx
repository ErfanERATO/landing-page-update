import React from "react";
import "../swiper/style.scss";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination, Navigation } from "swiper";

const CustomSwiper = ({ data = [] }) => {
  return (
    <Swiper
      spaceBetween={20}
      modules={[Pagination]}
      className="mySwiper"
      slidesPerView={"auto"}
    >
      {data.map((element, key) => (
        <SwiperSlide key={key} clickable={true}>
          <div className="card-brand flex-column position-relative">
            <img
              src={element?.photo[0]?.url}
              alt=""
              style={{ width: "100%" }}
            />
            <h4 className="brand-name">{element?.title}</h4>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CustomSwiper;
