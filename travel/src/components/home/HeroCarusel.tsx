"use client";
import Image from "next/image";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import imgPc from "public/hero-caruseljpg.jpg";
import imgPc2 from "public/hero-caruseljpg.jpg";
import imgPc3 from "public/hero-caruseljpg.jpg";

const HeroCarusel = () => {
  return (
    <Swiper
      slidesPerView={"auto"}
      autoplay={{
        delay: 5500,
      }}
      modules={[Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="bg-blue-gradient-header flex min-h-[80vh] justify-between max-md:flex-col-reverse max-sm:pb-10 sm:min-h-[80vh]">
          <Image
            src={imgPc}
            alt="Glassgroup"
            layout="fill"
            objectFit="cover"
            priority // Şəkli preloading edir
            className="z-0"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-blue-gradient-header flex min-h-[80vh] justify-between max-md:flex-col-reverse max-sm:pb-10 sm:min-h-[80vh]">
          <Image
            src={imgPc2}
            alt="Glassgroup"
            layout="fill"
            objectFit="cover"
            priority
            className="z-0"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-blue-gradient-header relative flex min-h-[80vh] justify-between max-md:flex-col-reverse max-sm:pb-10 sm:min-h-[80vh]">
          <Image
            src={imgPc3}
            alt="Glassgroup"
            layout="fill"
            objectFit="cover"
            priority
            className="z-0"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroCarusel;
