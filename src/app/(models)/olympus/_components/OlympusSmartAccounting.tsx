"use client"

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

import { hedge, traders, funds, policy } from "@/assets/olympus";

const sections: { title: string; description: string; image: StaticImageData }[] = [
  {
    title: "Traders & Investors",
    description: "looking to gain a deeper understanding of market behavior.",
    image: traders,
  },
  {
    title: "Hedge Funds & Asset Managers",
    description: "test reactions to specific market events.",
    image: funds,
  },
  {
    title: "Academics & Researchers",
    description: "studying market dynamics and investor psychology",
    image: hedge,
  },
  {
    title: "Companies & Policymakers",
    description: "to analyze potential responses to regulations or corporate actions.",
    image: policy,
  },
];


function OlympusSmartAccounting() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<StaticImageData>(traders); // Default image

  const handleToggle = (index: number, image: StaticImageData) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle active section
    setSelectedImage(image); // Update side image
  };
  

  return (
    <div className="w-full h-[643px] relative bg-orange-100 overflow-hidden">
      {/* Side Image */}
      <Image
        src={selectedImage}
        alt="Accounting section"
        width={521}
        height={384}
        className="absolute left-[832px] top-[96px] rounded-xl transition-opacity duration-300"
      />

      {/* Title */}
      <div className="w-96 left-[75px] top-[73px] absolute text-stone-900 text-4xl font-bold">
      Who benefits from Olympus?
      </div>

      {/* List Section */}
      <div className="w-[579px] left-[75px] top-[169px] absolute flex flex-col gap-4">
        {sections.map((item, index) => (
          <div
            key={index}
            className="py-4 border-b border-stone-900 cursor-pointer"
            // @ts-ignore
            onClick={() => handleToggle(index, item?.image)}
          >
            {/* Title Row */}
            <div className="flex justify-between items-center">
              <span className="text-stone-900 text-xl font-semibold">{item.title}</span>
              <div className="w-5 h-5">
                {activeIndex === index ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 16.6665V3.33317M10 3.33317L15 8.33317M10 3.33317L5 8.33317" stroke="#1E1E1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 3.3335V16.6668M10 16.6668L15 11.6668M10 16.6668L5 11.6668" stroke="#1E1E1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
            </div>

            {/* Description (only show if active) */}
            {activeIndex === index && (
              <p className="mt-2 text-stone-900 text-lg font-light">{item.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default OlympusSmartAccounting;
