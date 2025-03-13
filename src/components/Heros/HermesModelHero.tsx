import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { hermes } from '@/assets/models'
import { SignedIn } from "@clerk/nextjs"; // Import Clerk auth components

function HermesModelHero() {
  return (
        <section className="sm:mt-6 lg:mt-8 mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="my-4 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-12">
        {/*   Image Section     */}
        <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-2">
        {/* <video
            className="h-56 w-full object-cover rounded-lg lg:w-full lg:h-96"
                autoPlay
                muted
                loop
          >
            <source src="/videos/hermesVid.mp4" type="video/mp4" />
          </video> */}
           <Image className="h-56 w-full object-cover rounded-lg lg:w-full lg:h-96" src={hermes} width={500} height={500} alt='intro'/>
        </div>
        {/*   End of Image Section     */}
        <div className="sm:text-center lg:text-left">
        <h1 className="hidden md:block text-4xl tracking-tight mt-4 font-extrabold text-gray-800 sm:text-5xl md:text-7xl">
        <span className="block text-indigo-300 -ml-32 uppercase italic dark:text-gray-200 xl:inline">Hermes (Trader)</span>
      </h1>
      <h1 className="sm:hidden block text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-7xl">
        <span className="block text-indigo-300 uppercase italic dark:text-gray-200 xl:inline">Hermes (Trader)</span>
      </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          Hermes watches the market 24/7, so you don’t have to. Get instant alerts on market-moving events and seize high-confidence opportunities without constant monitoring.
          </p>
          {/* Button Section */}
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="flex gap-3">
                  <Link href="/models/hermes" className="w-full flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 md:py-2 md:text-lg">
                    More
                  </Link>
                  <Link href="#" className="w-full flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-gray-800 bg-indigo-100 hover:bg-indigo-200 md:py-2 md:text-lg">
                    Free
                  </Link>
                </div>
                </div>
          {/* End of Button Section */}
        </div>
      </div>
    </section>
  )
}

export default HermesModelHero