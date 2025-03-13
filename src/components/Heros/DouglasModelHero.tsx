import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { douglas } from '@/assets/models'

function DouglasModelHero() {
  return (
<section className="sm:mt-6 lg:mt-8 mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="my-4 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-12">

    {/* Text Section */}
    <div className="sm:text-center lg:text-right flex-1">
      <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
      Douglas builds your PowerPoint, not just an outline. It collaborates with you, transforming your ideas into professionally designed slides using investment banking best practices.
      </p>
      <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
        <div className="flex gap-3">
          <Link href="/models/luca" className="w-full flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 md:py-2 md:text-lg">
            More
          </Link>
          <Link href="#" className="w-full flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-gray-800 bg-indigo-100 hover:bg-indigo-200 md:py-2 md:text-lg">
            Subscribe
          </Link>
        </div>
      </div>
      {/* Title that Overlaps Video */}
      <div className="relative w-full flex justify-center mt-16 lg:justify-start">
        <h1 className="hidden md:block absolute lg:-right-28 lg:top-1/2 lg:-translate-y-1/2 z-10 text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-7xl">
          <span className="block text-yellow-300  italic dark:text-gray-200 xl:inline"><span className='uppercase'>Douglas </span>(Presenter)</span>
        </h1>
      </div>
    </div>
    {/* Video Section */}
    <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-2 relative">
    <Image className="h-56 w-full object-cover rounded-lg lg:w-full lg:h-96" src={douglas} width={500} height={500} alt='intro'/>
      {/* <video
        className="h-56 w-full object-cover rounded-lg lg:w-full lg:h-96"
        autoPlay
        muted
        loop
      >
        <source src="/videos/lucaVid.mp4" type="video/mp4" />
      </video> */}
    </div>

  </div>
</section>
  )
}

export default DouglasModelHero