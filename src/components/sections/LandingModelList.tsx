import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import LandingModelCard from "./LandingModelCard";

interface LandingModelListProps {
  modelData: Record<string, { image: string; title: string; subtitle: string; href: string }>;
  activeButton: string;
}

const LandingModelList: React.FC<LandingModelListProps> = ({ modelData, activeButton }) => {
  const swiperRef = useRef<any>(null);
  const buttons = Object.keys(modelData);

  useEffect(() => {
    const activeIndex = buttons.indexOf(activeButton);
    if (swiperRef.current && activeIndex !== -1) {
      swiperRef.current.swiper.slideTo(activeIndex);
    }
  }, [activeButton, buttons]);

  return (
    <div className="max-w-full mx-auto">
      <Swiper
        ref={swiperRef}
        modules={[Pagination, EffectCoverflow]}
        breakpoints={{
          320: { slidesPerView: 1.2, spaceBetween: 10 }, // Mobile
          768: { slidesPerView: 1.4, spaceBetween: 20 }, // Tablet
          1024: { slidesPerView: 1.7, spaceBetween: 30 }, // Small screens
          1440: { slidesPerView: 2, spaceBetween: 40 }, // Larger screens
          2560: { slidesPerView: 2.5, spaceBetween: 30 }, // 4K screens
        }}
        centeredSlides={true}
        grabCursor={true}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 0.5,
          slideShadows: false,
        }}
        loop={false}
        className="mySwiper"
      >
        {buttons.map((button) => (
          <SwiperSlide key={button} className="flex justify-center items-center mx-auto transition-transform duration-300">
            {({ isActive }) => (
              <div
                className={`transition-all duration-500 ease-in-out ${
                  isActive ? "transform translate-y-[-18px] scale-105" : "transform translate-y-20"
                }`}
              >
                <LandingModelCard
                  image={modelData[button].image}
                  title={modelData[button].title}
                  subtitle={modelData[button].subtitle}
                  href={modelData[button].href}
                />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LandingModelList;
