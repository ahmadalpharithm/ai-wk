import React from 'react'

function LucaCTA() {
  return (
    <div className="w-[1292px] px-20 py-16 bg-[#172554] rounded-xl inline-flex flex-col justify-center items-start gap-14">
    <div className="self-stretch inline-flex justify-between items-end">
        <div className="w-96 inline-flex flex-col justify-start items-start gap-3">
            <h4 className="self-stretch justify-start text-white text-xl font-medium">Sample Luca’s Output</h4>
            <p className="self-stretch justify-start text-white text-base font-normal leading-7">Download a copy of a report generated by Luca.</p>
        </div>
        <p className="justify-start text-white cursor-pointer text-base font-medium underline leading-7">Download Here</p>
    </div>
    <div className="self-stretch inline-flex justify-between items-center">
        <h1 className="w-96 justify-start text-white text-5xl font-bold leading-[55px]">Ready to make your accounting smarter?</h1>
        <button className="px-4 py-3.5 bg-white rounded flex justify-center items-center gap-1">
            <div className="justify-start text-stone-900 text-lg font-semibold">Get Started Now</div>
        </button>
    </div>
</div>
  )
}

export default LucaCTA