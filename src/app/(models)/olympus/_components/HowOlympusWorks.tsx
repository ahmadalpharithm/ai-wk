import React from 'react'

function HowOlympusWorks() {
  return (
    <div className="w-[1440px] h-[559px] px-20 py-28 bg-yellow-900 inline-flex flex-col justify-center items-start gap-14">
    <h1 className="w-80 justify-start text-white text-5xl font-bold  leading-[55px]">How Olympus Works...</h1>
    <div className="self-stretch inline-flex justify-between items-center">
        <div className="self-stretch inline-flex flex-col justify-start items-start gap-4">
            <div className="flex flex-col justify-start items-start">
                <h2 className="justify-start text-white text-opacity-50 text-3xl font-medium">01</h2>
                <h3 className="w-56 justify-start text-white text-xl font-medium ">Select Market Conditions</h3>
            </div>
            <p className="w-56 justify-start text-white text-base font-normal leading-7">Choose the background, events, and market participants.</p>
        </div>
        <div className="w-0.5 h-20 origin-top-left bg-white text-white outline outline-offset-[-1px] outline-white"></div>
        <div className="w-56 self-stretch inline-flex flex-col justify-start items-start gap-4">
            <div className="self-stretch flex flex-col justify-start items-start">
                <div className="justify-start text-white text-opacity-50 text-3xl font-medium">02</div>
                <div className="w-64 justify-start text-white text-xl font-medium ">Set AI Agent Strategies</div>
            </div>
            <div className="self-stretch justify-start text-white text-base font-normal leading-7">Configure personalities, investment styles, and objectives.</div>
        </div>
        <div className="w-0.5 h-20 origin-top-left bg-white text-white outline outline-offset-[-1px] outline-white"></div>
        <div className="w-56 self-stretch inline-flex flex-col justify-start items-start gap-4">
            <div className="self-stretch flex flex-col justify-start items-start">
                <div className="justify-start text-white text-opacity-50 text-3xl font-medium">03</div>
                <div className="self-stretch justify-start text-white text-xl font-medium ">Run the Simulation</div>
            </div>
            <div className="self-stretch justify-start text-white text-base font-normal leading-7">Watch how different participants interact in real time.</div>
        </div>
        <div className="w-0.5 h-20 origin-top-left bg-white text-white outline outline-offset-[-1px] outline-white"></div>
        <div className="w-56 self-stretch inline-flex flex-col justify-start items-start gap-4">
            <div className="self-stretch flex flex-col justify-start items-start">
                <h2 className="justify-start text-white text-opacity-50 text-3xl font-medium">04</h2>
                <h3 className="self-stretch justify-start text-white text-xl font-medium ">Receive a Detailed Report</h3>
            </div>
            <p className="w-72 justify-start text-white text-base font-normal leading-7">A full “God’s View” report covering agent actions, returns, assessments, and key success factors. Customize report focus areas based on your needs.</p>
        </div>
    </div>
</div>
  )
}

export default HowOlympusWorks