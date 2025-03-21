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
  }, [activeButton]);

  return (
    <div className="w-full max-w-6xl mx-auto">
      <Swiper
        ref={swiperRef}
        modules={[Pagination, EffectCoverflow]}
        spaceBetween={30}
        slidesPerView={1.4}
        centeredSlides={true}
        grabCursor={true}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 2.5,
          slideShadows: true,
        }}
        loop={true}
        className="mySwiper"
      >
        {buttons.map((key) => (
          <SwiperSlide key={key} className="transition-transform duration-300">
            {({ isActive }) => (
              <div
                className={`transition-all duration-500 ease-in-out ${
                  isActive
                    ? "transform translate-y-[-10px] z-10 scale-105"
                    : "transform translate-y-16 opacity-80"
                }`}
              >
                <LandingModelCard
                  image={modelData[key].image}
                  title={modelData[key].title}
                  subtitle={modelData[key].subtitle}
                  href={modelData[key].href}
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
