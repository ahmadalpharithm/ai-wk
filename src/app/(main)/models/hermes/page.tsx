import PagesWrapper from '@/components/PagesWrapper'
import React from 'react'
import Link from 'next/link'

function HermesModelPage() {
  return (
    <PagesWrapper>
            <section className="w-full overflow-hidden dark:bg-gray-900">
            <div className="w-full mx-auto">
              {/* User Cover IMAGE
              <div className="w-full xl:h-[20rem] lg:h-[22rem] md:h-[16rem] sm:h-[13rem] h-[9.5rem] object-fill" /> */}
              {/* User Profile Image */}
              <div className="w-full mx-auto flex mt-32 justify-center">
                <video
                  className="rounded-full object-cover xl:w-[16rem] xl:h-[16rem] lg:w-[16rem] lg:h-[16rem] md:w-[12rem] md:h-[12rem] sm:w-[10rem] sm:h-[10rem] w-[8rem] h-[8rem] outline-2 outline-offset-2 outline-green-500 shadow-xl relative xl:bottom-[7rem] lg:bottom-[8rem] md:bottom-[6rem] sm:bottom-[5rem] bottom-[4.3rem]"
                  autoPlay
                  muted
                  loop
                >
                  <source src="/videos/hermesVid.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="xl:w-[80%] lg:w-[90%] md:w-[94%] sm:w-[96%] w-[92%] mx-auto flex flex-col gap-4 justify-center items-center relative xl:-top-[6rem] lg:-top-[6rem] md:-top-[4rem] sm:-top-[3rem] -top-[2.2rem]">
                {/* FullName */}
                <h1 className="text-center text-gray-800 dark:text-white text-4xl font-serif">Hermes - Trader</h1>
                {/* About */}
                <p className="w-full text-gray-700 dark:text-gray-400 text-md text-pretty sm:text-center text-justify">
                Hermes watches the market 24/7, so you don’t have to. Get instant alerts on market-moving events and seize high-confidence opportunities without constant monitoring.
                </p>
                <div className="flex justify-center items-center mx-auto gap-3">
              <Link href="#" className="flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 md:py-2 md:text-lg">
                More
              </Link>
            </div>
              </div>
            </div>
            </section>
    </PagesWrapper>
  )
}

export default HermesModelPage