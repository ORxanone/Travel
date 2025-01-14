"use client";
import React from "react";
import OurPackageArrows from "./OurPackageArrows";
import TourCard from "../cards/TourCard";
import package1 from "public/package1.png";
import package2 from "public/package2.png";
import package3 from "public/package3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";

const PackageSlides = () => {
  return (
    <>
      <OurPackageArrows />
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5500,
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        modules={[Pagination, Autoplay, Navigation]}
        className="package-swiper"
      >
        <SwiperSlide>
          <TourCard image={package1} title={""} price={""} />
        </SwiperSlide>
        <SwiperSlide>
          <TourCard image={package2} title={""} price={""} />
        </SwiperSlide>
        <SwiperSlide>
          <TourCard image={package3} title={""} price={""} />
        </SwiperSlide>
        <SwiperSlide>
          <TourCard image={package1} title={""} price={""} />
        </SwiperSlide>
        <SwiperSlide>
          <TourCard image={package2} title={""} price={""} />
        </SwiperSlide>
        <SwiperSlide>
          <TourCard image={package3} title={""} price={""} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default PackageSlides;
