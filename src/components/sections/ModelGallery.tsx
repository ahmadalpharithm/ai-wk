import React from 'react'
import { orion, luca, hermes, olympus, douglas } from '@/assets/models'
import Image from 'next/image'
import Link from 'next/link'

function ModelGallery() {
  return (
    <section className="bg-white">
  <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
      <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-gray-50 h-auto md:h-[500px] flex flex-col">
        <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
          <Image width={400} height={400} src={hermes} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
        {/* <h3 className="font-festive z-10 absolute top-99 left-0 p-4 xs:text-xl md:text-3xl text-white text-3xl">Accountant</h3> */}
        <Link href="/models/hermes" className="relative border-2 md:top-67 border-gray-100 text-gray-100 px-6 py-3 rounded-lg overflow-hidden group">
            <span className="absolute inset-0 bg-gray-800 transform -translate-x-full group-hover:translate-x-0 transition duration-300" />
            <span className="relative z-10 font-bold flex whitespace-nowrap justify-center items-center group-hover:text-white">
                Stock Trader
            </span>
        </Link>
        </div>
      </div>
      <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-gray-50 h-auto md:h-[500px] flex flex-col">
        <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
          <Image width={400} height={400} src={orion} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
          <Link href="/models/orion" className="relative border-2 md:top-67 border-gray-100 text-gray-100 px-6 py-3 rounded-lg overflow-hidden group">
            <span className="absolute inset-0 bg-gray-800 transform -translate-x-full group-hover:translate-x-0 transition duration-300" />
            <span className="relative z-10  whitespace-nowrap font-bold flex justify-center items-center group-hover:text-white">
                Investment Analyst
            </span>
        </Link>
        </div>
      </div>
      <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-gray-50 h-auto md:h-[500px] flex flex-col">
        <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
          <Image width={400} height={400} src={olympus} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
          <Link href="/models/olympus" className="relative border-2 md:top-67 border-gray-100 text-gray-100 px-6 py-3 rounded-lg overflow-hidden group">
            <span className="absolute inset-0 bg-gray-800 transform -translate-x-full group-hover:translate-x-0 transition duration-300" />
            <span className="relative z-10  whitespace-nowrap font-bold flex justify-center items-center group-hover:text-white">
                Market Simulation
            </span>
        </Link>
        </div>
      </div>
      <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-gray-50 h-auto md:h-[500px] flex flex-col">
        <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
          <Image width={400} height={400} src={luca} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
          <Link href="/models/luca" className="relative border-2 md:top-67 border-gray-100 text-gray-100 px-6 py-3 rounded-lg overflow-hidden group">
            <span className="absolute inset-0 bg-gray-800 transform -translate-x-full group-hover:translate-x-0 transition duration-300" />
            <span className="relative z-10  whitespace-nowrap font-bold flex justify-center items-center group-hover:text-white">
                Accountant
            </span>
        </Link>
        </div>
      </div>
      <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-gray-50 h-auto md:h-[500px] flex flex-col">
        <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
          <Image width={400} height={400} src={douglas} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
          <Link href="/models/douglas" className="relative border-2 md:top-67 border-gray-100 text-gray-100 px-6 py-3 rounded-lg overflow-hidden group">
            <span className="absolute inset-0 bg-gray-800 transform -translate-x-full group-hover:translate-x-0 transition duration-300" />
            <span className="relative z-10  whitespace-nowrap font-bold flex justify-center items-center group-hover:text-white">
                Presenter
            </span>
        </Link>
        </div>
      </div>
      
      {/* <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
        <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
          <Image width={400} height={400}  src={douglas} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
          <h3 className="z-10 text-2xl font-festive font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Presenter</h3>
        </div>
        <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
          <Image width={400} height={400}  src={orion} alt="" className="absolute inset-0 h-full w-full object-fill group-hover:scale-105 transition-transform duration-500 ease-in-out" />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
          <h3 className="font-festive z-10 absolute top-0 left-0 p-4 xs:text-xl md:text-3xl text-white text-3xl">Analyst</h3>
        </div>
        <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
          <Image width={400} height={400}  src={hermes} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
          <h3 className="font-festive z-10 absolute top-0 left-0 p-4 xs:text-xl md:text-3xl text-white text-3xl">Trader</h3>
        </div>
      </div> */}
      {/* <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-[500px] flex flex-col">
        <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
          <Image width={400} height={400}  src={olympus} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
          <h3 className="font-festive z-10 absolute top-60 left-20 p-4 xs:text-xl md:text-3xl text-white text-3xl">Arena</h3>
        </div>
      </div> */}
    </div>
  </div>
</section>

  )
}

export default ModelGallery