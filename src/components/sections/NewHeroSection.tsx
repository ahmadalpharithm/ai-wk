"use client";

import React from "react";
import Image from "next/image";
import { newHeroImage } from "@/assets";
import { caroImage2, caroImage3 } from "@/assets/carousel";
import Slider, { Settings } from 'react-slick';

function NewHeroSection() {
  const sliderSettings : Settings = {
    dots: true,
    autoplaySpeed: 6000,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    
  };

  const heroSlides = [
    {
      image: newHeroImage,
      text: "So you can have a better perspective",
    },
    {
      image: caroImage2,
      text: "So you can be creative more",
    },
    {
      image: caroImage3,
      text: "So you can enjoy life more",
    },
  ];

  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
      <Slider {...sliderSettings} className="absolute inset-0 w-full h-full">
        {heroSlides.map((slide, index) => (
          <div key={index} className="relative w-full h-screen">
            <Image
              src={slide.image}
              alt="Background Image"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-black opacity-50" />
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
              <div className="container flex max-w-5xl flex-col items-center gap-5 text-center">
                <h1 className="text-balance font-urban text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-[66px]">
                  LET AI WORK FOR YOU
                </h1>
                <p className="max-w-2xl text-balance leading-normal sm:text-xl sm:leading-8 transition-opacity duration-1000">
                  {slide.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default NewHeroSection;
