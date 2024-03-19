"use client";

import Image from "next/image";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

export default function Home() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={5}
        slidesPerView={2}
        navigation
      >
        <SwiperSlide>
          <Image src={"/imagem-1.jpg"} width={720} height={420} alt="Imagem" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={"/imagem-2.jpg"} width={720} height={420} alt="Imagem" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={"/imagem-3.jpg"} width={720} height={420} alt="Imagem" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={"/imagem-4.jpg"} width={720} height={420} alt="Imagem" />
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
}
