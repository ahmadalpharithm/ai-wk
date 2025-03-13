"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/shared/icons";
import { newHeroImage } from '@/assets';
import { caroImage2, caroImage3 } from '@/assets/carousel';


const heroSlides = [
  {
    image: newHeroImage, // Update with actual paths
    text: "So you can have a better perspective"
  },
  {
    image: caroImage2,
    text: "So you can be creative more"
  },
  {
    image: caroImage3,
    text: "So you can enjoy life more"
  }
];

function NewHeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
      <div className="absolute inset-0 transition-opacity duration-1000">
        <Image src={heroSlides[currentSlide].image} alt="Background Image" layout="fill" objectFit="cover" />
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
        <div className="container flex max-w-5xl flex-col items-center gap-5 text-center">
          <h1 className="text-balance font-urban text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-[66px]">
          LET AI WORK FOR YOU
          </h1>
          <p
            className="max-w-2xl text-balance leading-normal sm:text-xl sm:leading-8 transition-opacity duration-1000"
          >
            {heroSlides[currentSlide].text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewHeroSection;
