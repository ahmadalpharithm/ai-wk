"use client";

import React from "react";
import Image from "next/image";
import { newHeroImage } from "@/assets";
function LandingHeroSection() {
  return (
    <div className="relative w-full overflow-hidden">
      <Image
        src={newHeroImage}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="absolute top-0 left-0 w-full h-full"
        priority
      />
      <div className="relative flex flex-col items-center mt-32 max-w-screen-2xl px-6 mx-auto md:flex-row sm:px-8 lg:px-12 xl:px-32">
        <div className="flex items-center py-3 md:w-3/4 md:pb-20 md:pt-8 md:pr-12">
          <div className="text-left space-y-4 py-2">
            <h2 className="text-5xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl md:text-7xl xl:text-7xl 2xl:text-8xl">
              Supercharge Your Business with AI-Powered Agents
            </h2>
            <p className="max-w-lg sm:max-w-2xl xl:max-w-3xl text-base text-white sm:text-lg md:text-xl xl:text-2xl leading-loose">
              Streamline operations, automate tasks, and make smarter decisions all with the power of AI. Stay focused on growth while AI handles the heavy lifting.
            </p>
            <div className="hidden sm:flex gap-6">
              <button className="px-6 py-3 bg-white rounded outline outline-slate-800 inline-flex justify-center items-center gap-2 text-lg xl:text-2xl 2xl:text-3xl font-semibold text-slate-800">
                Get Started Now
              </button>
              <button className="px-6 py-3 rounded outline outline-white inline-flex justify-center items-center gap-2 text-lg xl:text-2xl 2xl:text-3xl font-semibold text-white">
                Read More
              </button>
            </div>
            <div className="flex sm:hidden gap-6">
              <button className="px-4 py-2 bg-white rounded outline outline-slate-800 inline-flex justify-center items-center gap-2 text-lg xl:text-2xl 2xl:text-3xl font-semibold text-slate-800">
                Get Started Now
              </button>
              <button className="px-4 py-2 rounded outline outline-white inline-flex justify-center items-center gap-2 text-lg xl:text-2xl 2xl:text-3xl font-semibold text-white">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingHeroSection;
