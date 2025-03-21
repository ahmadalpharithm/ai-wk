import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import MobileLandingModelCard from "./MobileLandingModelCard";

interface LandingModelListProps {
  modelData: Record<string, { image: string; title: string; subtitle: string; href: string }>;
  activeButton: string;
}

const MobileLandingModelList: React.FC<LandingModelListProps> = ({ modelData, activeButton }) => {
  const swiperRef = useRef<any>(null);
  const buttons = Object.keys(modelData);

  useEffect(() => {
    const activeIndex = buttons.indexOf(activeButton); 
    if (swiperRef.current && activeIndex !== -1) {
      swiperRef.current.swiper.slideTo(activeIndex);
    }
  }, [activeButton, buttons]);

  return (
    <div className="max-w-md">
      <Swiper
        ref={swiperRef}
        modules={[Pagination, EffectCoverflow]}
        spaceBetween={100}
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
        loop={false} // Disable loop to maintain correct order
        className="mySwiper"
      >
        {buttons.map((button) => (
          <SwiperSlide key={button} className="transition-transform duration-300">
            {({ isActive }) => (
              <div
                className={`transition-all duration-500 ease-in-out ${
                  isActive
                    ? "transform translate-y-[-10px] z-10 scale-105"
                    : "transform translate-y-16 opacity-80"
                }`}
              >
                <MobileLandingModelCard
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

export default MobileLandingModelList;
