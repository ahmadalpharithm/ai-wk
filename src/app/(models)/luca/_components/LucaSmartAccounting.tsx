"use client"

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { accountants, freelancers, smallBusiness, companies } from "@/assets/luca";

const sections = [
  {
    title: "Small business owners",
    description: "Looking for an affordable way to manage finances without hiring an accountant.",
    image: accountants,
  },
  {
    title: "Freelancers & self-employed",
    description: "needing real-time financial tracking.",
    image: freelancers,
  },
  {
    title: "Professional accountants",
    description: "seeking to enhance productivity and manage multiple clients efficiently.",
    image: smallBusiness,
  },
  {
    title: "Companies",
    description: "requiring structured financial records for tax reporting, auditing, and planning..",
    image: companies,
  },
];

function LucaSmartAccounting() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<StaticImageData>(accountants); // Default image

  const handleToggle = (index: number, image: string) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle active section
         // @ts-ignore
    setSelectedImage(image); // Update side image
  };

  return (
    <div className="w-full h-[643px] relative bg-violet-100 overflow-hidden">
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
        Smart Accounting for Everyone
      </div>

      {/* List Section */}
      <div className="w-[579px] left-[75px] top-[169px] absolute flex flex-col gap-4">
        {sections.map((item, index) => (
          <div
            key={index}
            className="py-4 border-b border-stone-900 cursor-pointer"
            // @ts-ignore
            onClick={() => handleToggle(index, item.image)}
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

export default LucaSmartAccounting;
