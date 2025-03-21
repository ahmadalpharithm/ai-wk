import React from 'react'

function HowLucaWorks() {
  return (
    <div className="w-[1440px] h-[559px] px-20 py-28 bg-violet-950 inline-flex flex-col justify-center items-start gap-14">
    <h1 className="w-80 justify-start text-white text-5xl font-bold  leading-[55px]">How Luca Works...</h1>
    <div className="self-stretch inline-flex justify-between items-center">
        <div className="self-stretch inline-flex flex-col justify-start items-start gap-4">
            <div className="flex flex-col justify-start items-start">
                <h2 className="justify-start text-white text-opacity-50 text-3xl font-medium">01</h2>
                <h3 className="w-56 justify-start text-white text-xl font-medium ">Input Financial Transactions</h3>
            </div>
            <p className="w-56 justify-start text-white text-base font-normal leading-7">Enter transactions via text message or manual entry.</p>
        </div>
        <div className="w-0.5 h-20 origin-top-left bg-white text-white outline outline-offset-[-1px] outline-white"></div>
        <div className="w-56 self-stretch inline-flex flex-col justify-start items-start gap-4">
            <div className="self-stretch flex flex-col justify-start items-start">
                <div className="justify-start text-white text-opacity-50 text-3xl font-medium">02</div>
                <div className="w-64 justify-start text-white text-xl font-medium ">Automated Entry Creation</div>
            </div>
            <div className="self-stretch justify-start text-white text-base font-normal leading-7">Luca categorizes and records transactions instantly.</div>
        </div>
        <div className="w-0.5 h-20 origin-top-left bg-white text-white outline outline-offset-[-1px] outline-white"></div>
        <div className="w-56 self-stretch inline-flex flex-col justify-start items-start gap-4">
            <div className="self-stretch flex flex-col justify-start items-start">
                <div className="justify-start text-white text-opacity-50 text-3xl font-medium">03</div>
                <div className="self-stretch justify-start text-white text-xl font-medium ">Real-Time Financial<br/>Reports</div>
            </div>
            <div className="self-stretch justify-start text-white text-base font-normal leading-7">Balance sheets, income statements, and cash flow updates in real-time.</div>
        </div>
        <div className="w-0.5 h-20 origin-top-left bg-white text-white outline outline-offset-[-1px] outline-white"></div>
        <div className="w-56 self-stretch inline-flex flex-col justify-start items-start gap-4">
            <div className="self-stretch flex flex-col justify-start items-start">
                <h2 className="justify-start text-white text-opacity-50 text-3xl font-medium">04</h2>
                <h3 className="self-stretch justify-start text-white text-xl font-medium ">Attach Supporting Documents</h3>
            </div>
            <p className="w-72 justify-start text-white text-base font-normal leading-7">Upload invoices and receipts for easy reference.</p>
        </div>
    </div>
</div>
  )
}

export default HowLucaWorks