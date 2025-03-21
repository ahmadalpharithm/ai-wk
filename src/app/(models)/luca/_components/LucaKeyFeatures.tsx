import React from 'react'

function LucaKeyFeatures() {
  return (
    <div className="flex flex-col justify-start items-start gap-10">
    <div className="self-stretch justify-start text-zinc-800 text-3xl font-semibold">Key features</div>
    <div className="w-full max-w-[1342px] inline-flex justify-start items-center gap-8">
        <div className="self-stretch p-5 rounded-lg outline outline-offset-[-2px] outline-neutral-100 inline-flex flex-col justify-start items-start gap-4">
            <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <div className="justify-start text-neutral-400 text-3xl font-medium">01</div>
                <div className="justify-start text-stone-900 text-xl font-semibold">Automated Bookkeeping</div>
            </div>
            <div className="self-stretch justify-start text-neutral-500 text-lg font-normal leading-7">Converts text inputs into structured accounting records.</div>
        </div>
        <div className="self-stretch p-5 rounded-lg outline outline-offset-[-2px] outline-neutral-100 inline-flex flex-col justify-start items-start gap-4">
            <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <div className="justify-start text-neutral-400 text-3xl font-medium">02</div>
                <div className="justify-start text-stone-900 text-xl font-semibold">Real-Time Financial Reporting</div>
            </div>
            <div className="self-stretch justify-start text-neutral-500 text-lg font-normal leading-7">Instantly updates records and generates reports.</div>
        </div>
        <div className="self-stretch p-5 rounded-lg outline outline-offset-[-2px] outline-neutral-100 inline-flex flex-col justify-start items-start gap-4">
            <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <div className="justify-start text-neutral-400 text-3xl font-medium">03</div>
                <div className="self-stretch justify-start text-stone-900 text-xl font-semibold">Flexible Input</div>
            </div>
            <div className="self-stretch justify-start text-neutral-500 text-lg font-normal leading-7">Manual entry options for users who prefer hands-on control.</div>
        </div>
        <div className="self-stretch p-5 rounded-lg outline outline-offset-[-2px] outline-neutral-100 inline-flex flex-col justify-start items-start gap-4">
            <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <div className="justify-start text-neutral-400 text-3xl font-medium">04</div>
                <div className="self-stretch justify-start text-stone-900 text-xl font-semibold">Document & Receipt Management</div>
            </div>
            <div className="self-stretch justify-start text-neutral-500 text-lg font-normal leading-7">Attach invoices, receipts, and supporting files.</div>
        </div>
        <div className="self-stretch p-5 rounded-lg outline outline-offset-[-2px] outline-neutral-100 inline-flex flex-col justify-start items-start gap-4">
            <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <div className="justify-start text-neutral-400 text-3xl font-medium">05</div>
                <div className="justify-start text-stone-900 text-xl font-semibold">Always Available</div>
            </div>
            <div className="self-stretch justify-start text-neutral-500 text-lg font-normal leading-7">24/7 AI support, ready whenever you need it.</div>
        </div>
    </div>
    <div className="flex gap-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M26.6667 16H5.33333M5.33333 16L13.3333 8M5.33333 16L13.3333 24" stroke="#1E1E1E" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M5.33333 16L26.6667 16M26.6667 16L18.6667 24M26.6667 16L18.6667 8" stroke="#1E1E1E" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </div>

</div>
  )
}

export default LucaKeyFeatures