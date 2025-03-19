"use client";

import React from "react";
import Image from "next/image";
import { newHeroImage } from "@/assets";

function NewHeroSection() {

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Image
        src={newHeroImage}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0 w-full h-full"
      />
      <div className="relative flex flex-col items-center mt-32 max-w-screen-xl px-4 mx-auto md:flex-row sm:px-6 p-8">
        <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-12">
          <div className="text-left">
            <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-white sm:text-5xl sm:leading-none md:text-7xl">
              Supercharge Your Business with AI-Powered Agents
            </h2>
            <p className="max-w-md mx-auto mt-3 text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Streamline Operations, automate tasks, and make smarter decisions all with the power of AI.
            </p>
            <div className="mt-5 sm:flex md:mt-8 gap-2">
              <button className="px-4 py-3 text-gray-800 bg-gray-50 rounded-md md:py-2 md:text-lg">
                Get started Now
              </button>
              <button className="px-8 py-3 text-gray-100 border border-gray-200 rounded-md md:py-2 md:text-lg">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewHeroSection;
