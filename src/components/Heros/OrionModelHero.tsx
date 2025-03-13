import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { orion } from '@/assets/models'


function OrionModelHero() {
  return (
    <section className="sm:mt-6 lg:mt-8 mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="my-4 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-12">
    <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-2">
        {/* <video
            className="h-56 w-full object-cover rounded-lg lg:w-full lg:h-96"
            autoPlay
            muted
            loop
          >
            <source src="/videos/orionVid.mp4" type="video/mp4" />
          </video> */}
         <Image className="h-56 w-full object-cover rounded-lg lg:w-full lg:h-96" src={orion} width={500} height={500} alt='intro'/>
    </div>
    <div className="sm:text-center lg:text-left">
      <h1 className="md:block text-4xl mt-4 tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-7xl">
        <span className="block text-indigo-300 -mr-56 uppercase italic dark:text-gray-200 xl:inline">Orion (Analyst)</span>
      </h1>
      <div className='lg:w-1/2 flex flex-col gap-2 p-3 bg-indigo-200'>
      <p className="mt-3 text-base text-gray-700 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
      Orion delivers pro-grade buy-side research in minutes. Skip the hours of data gathering—get comprehensive insights instantly and focus on making smarter investment decisions.  
      </p>
      <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
        <div className="flex gap-3">
          <Link href="/models/orion" className="w-full flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 md:py-2 md:text-lg">
            More
          </Link>
          <Link href="#" className="w-full flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 md:py-2 md:text-lg">
            Subscribe
          </Link>
        </div>
      </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default OrionModelHero