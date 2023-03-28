import React from "react";
import "../swiper/style.scss";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination, Navigation } from "swiper";

const CustomSwiper = () => {
  let elements = [
    {
      image: require("../../assets/image/brands/brand1.png"),
    },
    {
      image: require("../../assets/image/brands/brand2.png"),
    },
    {
      image: require("../../assets/image/brands/brand3.png"),
    },
    {
      image: require("../../assets/image/brands/brand4.png"),
    },
    {
      image: require("../../assets/image/brands/brand5.png"),
    },
    {
      image: require("../../assets/image/brands/brand1.png"),
    },
    {
      image: require("../../assets/image/brands/brand2.png"),
    },
    {
      image: require("../../assets/image/brands/brand3.png"),
    },
    {
      image: require("../../assets/image/brands/brand4.png"),
    },
  ];
  return (
    <Swiper
      spaceBetween={20}
      modules={[Pagination]}
      className="mySwiper"
      slidesPerView={"auto"}
    >
      {elements.map((element, key) => (
        <SwiperSlide key={key} clickable={true}>
          <div className="card-brand">
            <img src={element.image} alt="" style={{ width: "100%" }} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CustomSwiper;
