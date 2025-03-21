import React from 'react'

function LucaFAQ() {
  return (
    <div className="inline-flex justify-start items-start gap-20">
    <div className="w-[479px] justify-start text-stone-900 text-4xl font-bold">FAQs (Frequently Asked Questions) </div>
    <div className="w-[726px] inline-flex flex-col justify-start items-start">
        <div className="self-stretch pb-6 border-b border-black flex flex-col justify-start items-start gap-14">
            <div className="self-stretch flex flex-col justify-start items-start gap-6">
                <div className="self-stretch inline-flex justify-between items-center">
                    <div className="justify-start text-stone-900 text-xl font-semibold leading-9">What are the pricing plans for Luca?</div>
                    <div className="w-0 h-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 16.667V3.33366M10 3.33366L15 8.33366M10 3.33366L5 8.33366" stroke="#1E1E1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-4">
                    <div className="self-stretch justify-start text-stone-900 text-base font-light leading-normal">Standard Plan – $20/month            Get full access to Luca’s AI-powered bookkeeping and financial reporting. (No document storage included.)</div>
                    <div className="self-stretch justify-start text-stone-900 text-base font-light leading-normal">Premium Plan – $50/month            Enjoy all Standard Plan features plus secure document storage for invoices and receipts.looking for an affordable way to manage finances without hiring an accountant.</div>
                    <div className="self-stretch justify-start text-black text-base font-light leading-normal"> Try Luca risk-free with a 2-week free trial—no commitment required.</div>
                </div>
            </div>
        </div>
        <div className="self-stretch py-6 border-b border-black flex flex-col justify-start items-start gap-6">
            <div className="w-[726px] inline-flex justify-between items-center">
                <div className="justify-start text-stone-900 text-xl font-semibold leading-9">Can Luca be Customized?</div>
                <div className="w-0 h-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 16.667V3.33366M10 3.33366L15 8.33366M10 3.33366L5 8.33366" stroke="#1E1E1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </div>
            </div>
            <div className="self-stretch justify-start text-black text-base font-light leading-normal">Need custom features? Contact us to tailor Luca to your specific business needs.</div>
        </div>
    </div>
</div>
  )
}

export default LucaFAQ