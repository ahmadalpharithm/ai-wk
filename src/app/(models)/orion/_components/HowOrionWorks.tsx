import React from 'react'

function HowOrionWorks() {
  return (
    <div className="w-[1440px] h-[559px] px-20 py-28 bg-red-950 inline-flex flex-col justify-center items-start gap-14">
    <h1 className="w-80 justify-start text-white text-5xl font-bold  leading-[55px]">How Orion Works...</h1>
    <div className="self-stretch inline-flex justify-between items-center">
        <div className="self-stretch inline-flex flex-col justify-start items-start gap-4">
            <div className="flex flex-col justify-start items-start">
                <h2 className="justify-start text-white text-opacity-50 text-3xl font-medium">01</h2>
                <h3 className="w-56 justify-start text-white text-xl font-medium ">Input Stock Ticker(s)</h3>
            </div>
            <p className="w-56 justify-start text-white text-base font-normal leading-7">Enter a company’s ticker symbol or upload a list.</p>
        </div>
        <div className="w-0.5 h-20 origin-top-left bg-white text-white outline outline-offset-[-1px] outline-white"></div>
        <div className="w-56 self-stretch inline-flex flex-col justify-start items-start gap-4">
            <div className="self-stretch flex flex-col justify-start items-start">
                <div className="justify-start text-white text-opacity-50 text-3xl font-medium">02</div>
                <div className="w-64 justify-start text-white text-xl font-medium ">AI-Powered Analysis</div>
            </div>
            <div className="self-stretch justify-start text-white text-base font-normal leading-7">Orion scans and processes high-quality data sources.</div>
        </div>
        <div className="w-0.5 h-20 origin-top-left bg-white text-white outline outline-offset-[-1px] outline-white"></div>
        <div className="w-56 self-stretch inline-flex flex-col justify-start items-start gap-4">
            <div className="self-stretch flex flex-col justify-start items-start">
                <div className="justify-start text-white text-opacity-50 text-3xl font-medium">03</div>
                <div className="self-stretch justify-start text-white text-xl font-medium ">Professional Report Generated</div>
            </div>
            <div className="self-stretch justify-start text-white text-base font-normal leading-7">Receive a structured investment report with key scores and insights.</div>
        </div>
        <div className="w-0.5 h-20 origin-top-left bg-white text-white outline outline-offset-[-1px] outline-white"></div>
        <div className="w-56 self-stretch inline-flex flex-col justify-start items-start gap-4">
            <div className="self-stretch flex flex-col justify-start items-start">
                <h2 className="justify-start text-white text-opacity-50 text-3xl font-medium">04</h2>
                <h3 className="self-stretch justify-start text-white text-xl font-medium ">Instant Delivery</h3>
            </div>
            <p className="w-72 justify-start text-white text-base font-normal leading-7">Reports are sent directly to your email or Telegram.</p>
        </div>
    </div>
</div>
  )
}

export default HowOrionWorks