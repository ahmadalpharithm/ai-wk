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
    <div className="max-w-7xl">
      <Swiper
        ref={swiperRef}
        modules={[Pagination, EffectCoverflow]}
        spaceBetween={300}
        slidesPerView={1.4}
        centeredSlides={true}
        grabCursor={true}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 0.5,
          slideShadows: true,
        }}
        loop={false} // Disable loop to maintain correct order
        className="mySwiper"
      >
        {buttons.map((button) => (
          <SwiperSlide key={button} className="transition-transform duration-300">
            {({ isActive }) => (
              <div
                className={`transition-all duration-500 ease-in-out ${
                  isActive
                    ? "transform translate-y-[-18px] scale-105"
                    : "transform translate-y-20"
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
