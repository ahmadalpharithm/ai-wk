import React from 'react'
import Image from 'next/image'
import { olympus } from '@/assets/models'



function OlympusLandingHeroSection() {
  return (
    <div className="relative w-full bg-orange-100 overflow-hidden">
    <div className="relative flex flex-col items-center mt-32 max-w-screen-2xl px-6 mx-auto md:flex-row lg:px-10 xl:px-32">
    <div className="px-7 max-w-7xl mx-auto flex flex-col gap-y-10 lg:flex-row items-center gap-x-10 justify-center py-10 lg:py-12 dark:bg-gray-800">
      <div className="w-full flex flex-col gap-y-5">
        <h1 className="w-full text-4xl sm:text-5xl md:text-6xl text-stone-900 xl:text-6xl 2xl:text-7xl leading-[1.2] md:text-center lg:text-left font-bold dark:text-white">
        Olympus: AI-Powered Market Simulation
        </h1>
        <p className="max-w-lg sm:max-w-2xl xl:max-w-3xl text-base text-slate-800 sm:text-lg md:text-xl xl:text-2xl leading-loosetext-sm md:max-w-xl md:mx-auto lg:mx-0 lg:max-w-full md:text-center lg:text-left dark:text-gray-300">
        Olympus is an advanced simulation model designed to analyze equity market trading scenarios. This model employs multiple AI agents that role-play different market participants, such as: Hedge funds, Long-only funds, retail investors, companies and influencers</p>
        <div className="flex gap-x-5 flex-col gap-y-2.5 lg:flex-row">
          <button  className="flex w-full lg:w-fit items-center text-white justify-center rounded-lg bg-neutral-900 outline outline-offset-[-1px] outline-neutral-900 px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200"><span>Get
              Started Now
          </span>
          </button>
        </div>
      </div>
      <div className="hero-image md:px-5 lg:px-0 w-full lg:w-1/2 rounded-3xl md:pt-2 lg:pt-0 relative isolate z-10">
      <div className="w-[534px] h-[509.73px] md:left-72 relative rounded-lg overflow-hidden">
      <Image className="rounded-3xl w-full" src={olympus} alt="luca" width={750} height={750} />
    </div>

      </div>
    </div>
      </div>
    </div>
  )
}

export default OlympusLandingHeroSection
