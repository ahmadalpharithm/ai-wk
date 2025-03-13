import React from 'react';
import Link from 'next/link';
import { SignedIn } from "@clerk/nextjs";
import Image from 'next/image';
import { olympus } from '@/assets/models';


function OlympusModelHero() {
  return (
    <section className="sm:mt-6 lg:mt-8 mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="my-4 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-12 lg:flex-justify lg:flex flex-col lg:flex-row">
        {/* Video Section */}
        <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-2">
        {/* <video
            className="h-56 w-full object-cover rounded-lg lg:w-full lg:h-96"
            autoPlay
            muted
            loop
          >
            <source src="/videos/douglasVid.mp4" type="video/mp4" />
          </video> */}
          <Image className="h-56 w-full object-cover rounded-lg lg:w-full lg:h-96" src={olympus} width={500} height={500} alt='intro'/>
        </div>
        {/* End of Video Section */}
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
            <span className="block text-gray-900 uppercase italic dark:text-gray-200 xl:inline">Olympus (Arena)</span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          Olympus lets you set the stage - AI traders play the market. Define participant parameters, simulate scenarios, and observe from a &quot;god&quot;s view&quot; for powerful market activity insights. Free subject to daily quota.
          </p>
          {/* Button Section */}
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="flex gap-3">
              <Link href="/models/olympus" className="w-full flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 md:py-2 md:text-lg">
                More
              </Link>
              <Link href="#" className="w-full flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-gray-800 bg-indigo-100 hover:bg-indigo-200 md:py-2 md:text-lg">
                Play
              </Link>
            </div>
          </div>
          {/* End of Button Section */}
        </div>
      </div>
    </section>
  );
}

export default OlympusModelHero;