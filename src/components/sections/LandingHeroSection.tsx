"use client";

import React from "react";
import Image from "next/image";
import { newHeroImage } from "@/assets";

function LandingHeroSection() {

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
          <div className="text-left space-y-4 py-3">
            <h2 className="text-5xl font-extrabold leading-10 tracking-tight text-white sm:text-7xl sm:leading-none md:text-7xl">
              Supercharge Your Business with AI-Powered Agents
            </h2>
            <p className="max-w-md justify-start mx-auto mt-3 text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl leading-loose">
              Streamline operations, automate tasks, and make smarter decisions all with the power of AI. Stay focused on growth while AI handles the heavy lifting.
            </p>
            <div className="hidden sm:flex mt-5 md:mt-8 gap-4">
            <button className="px-4 py-3 bg-white rounded outline outline-slate-800 inline-flex justify-center items-center gap-1">
              <div className="justify-start text-slate-800 text-xl font-semibold">Get Started Now</div>
            </button>
            <button className="px-4 py-3 rounded outline outline-white inline-flex justify-center items-center gap-1">
              <div className="justify-start text-white text-xl font-semibold">Read More</div>
            </button>
            </div>
            <div className="sm:hidden flex mt-10 md:mt-8 gap-4">
            <button className="px-2 py-2 bg-white rounded outline inline-flex justify-center items-center gap-1">
              <div className="justify-start text-slate-800 text-lg font-semibold">Get Started Now</div>
            </button>
            <button className="px-2 py-2 rounded outline outline-white inline-flex justify-center items-center gap-1">
              <div className="justify-start text-white text-lg font-semibold">Read More</div>
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingHeroSection;
