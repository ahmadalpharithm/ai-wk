"use client"


import React, { useRef } from "react";
import Slider from "react-slick";
import OlympusFeatureCard from "./OlympusFeatureCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const features = [
  { number: "01", title: "Realistic Market Simulations", description: "AI-driven agents mimic real investor behaviors." },
  { number: "02", title: "Comprehensive Market Reports", description: "Insights into strategies, performance, and decision-making." },
  { number: "03", title: "Customizable Scenarios", description: "Tailor simulations for specific market conditions." },
  { number: "04", title: "Fast, Unbiased, and Cost-Effective", description: "More efficient and accurate than human-driven simulations." }
];

const OlympusKeyFeatures: React.FC = () => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Adjust the number of visible cards
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Large screens
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768, // Tablets
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div className="flex flex-col justify-start items-start gap-10 w-full">
      <div className="self-stretch justify-start text-zinc-800 text-3xl font-semibold">Key Features</div>
      <div className="w-full max-w-[1342px]">
        <Slider ref={sliderRef} {...settings}>
          {features.map((feature) => (
            <div key={feature.number}> {/* Add padding to prevent cut-off */}
              <OlympusFeatureCard
                number={feature.number}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="flex gap-4">
        {/* Left Arrow */}
        <button onClick={() => sliderRef.current?.slickPrev()} className="cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M26.6667 16H5.33333M5.33333 16L13.3333 8M5.33333 16L13.3333 24" stroke="#1E1E1E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        {/* Right Arrow */}
        <button onClick={() => sliderRef.current?.slickNext()} className="cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M5.33333 16L26.6667 16M26.6667 16L18.6667 24M26.6667 16L18.6667 8" stroke="#1E1E1E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default OlympusKeyFeatures;
