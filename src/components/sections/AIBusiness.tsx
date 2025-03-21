import React from 'react'
import { frame } from '@/assets'
import Image from 'next/image'
import { aiFrame } from '@/assets'

function AIBusiness() {
  return (
    <div className="inline-flex justify-start items-center gap-16">
    <div className="w-[491px] h-[534px] relative rounded-xl overflow-hidden">
         <Image  className="rounded-xl object-cover max-h-[500px] xl:max-h-[650px] 2xl:max-h-[750px]" src={aiFrame} width={1000} height={1000} alt="frame" />
    </div>
    <div className="max-w-[732px] inline-flex flex-col justify-start items-start gap-10">
        <div className="flex flex-col justify-start items-start gap-3.5">
        <h2 className="text-slate-950 text-5xl xl:text-6xl 2xl:text-7xl font-semibold leading-tight">
                Tailored AI Solutions for Your Business
            </h2>
            <p className="text-zinc-500 text-lg xl:text-xl font-medium leading-loose">
                very company has unique challenges—our AI models adapt to meet your specific needs.
            </p>
        </div>
        <div className="self-stretch inline-flex justify-start items-center gap-7">
            <div className="w-96 inline-flex flex-col justify-start items-start gap-3.5">
                <div className="w-6 h-6 relative overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="M21 21.5H4.6C4.03995 21.5 3.75992 21.5 3.54601 21.391C3.35785 21.2951 3.20487 21.1422 3.10899 20.954C3 20.7401 3 20.4601 3 19.9V3.5M21 7.5L15.5657 12.9343C15.3677 13.1323 15.2687 13.2313 15.1545 13.2684C15.0541 13.3011 14.9459 13.3011 14.8455 13.2684C14.7313 13.2313 14.6323 13.1323 14.4343 12.9343L12.5657 11.0657C12.3677 10.8677 12.2687 10.7687 12.1545 10.7316C12.0541 10.6989 11.9459 10.6989 11.8455 10.7316C11.7313 10.7687 11.6323 10.8677 11.4343 11.0657L7 15.5M21 7.5H17M21 7.5V11.5" stroke="#03061D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                </div>
                <div className="self-stretch justify-start text-slate-950 text-xl font-semibold">Custom AI Model Tuning</div>
                <div className="self-stretch justify-start text-zinc-500 text-lg font-medium leading-loose">Modify and fine-tune AI capabilities to align with your industry, market, and goals.</div>
                <button className="w-28 p-2.5 cursor-pointer bg-slate-800 rounded outline outline-offset-[-0.97px] outline-slate-800 inline-flex justify-center items-center gap-1">
                    <div className="justify-start text-white text-sm font-medium">Contact Us</div>
                </button>
            </div>
            
            <div className="w-20  origin-top-left rotate-90 outline outline-offset-[-0.30px] outline-slate-950"></div>
            <div className="w-72 inline-flex flex-col justify-start items-start gap-3.5">
                <div className="w-6 h-6 relative overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="M12 16.5V21.5M18 21.5L14.0486 18.2072C13.3198 17.5998 12.9554 17.2962 12.5487 17.1801C12.19 17.0778 11.81 17.0778 11.4513 17.1801C11.0446 17.2962 10.6802 17.5998 9.95141 18.2072L6 21.5M8 11.5V12.5M12 9.5V12.5M16 7.5V12.5M22 3.5H2M3 3.5H21V11.7C21 13.3802 21 14.2202 20.673 14.862C20.3854 15.4265 19.9265 15.8854 19.362 16.173C18.7202 16.5 17.8802 16.5 16.2 16.5H7.8C6.11984 16.5 5.27976 16.5 4.63803 16.173C4.07354 15.8854 3.6146 15.4265 3.32698 14.862C3 14.2202 3 13.3802 3 11.7V3.5Z" stroke="#03061D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                </div>
                <div className="self-stretch justify-start text-slate-950 text-xl font-semibold">Seamless Integration</div>
                <div className="self-stretch justify-start text-zinc-500 text-lg font-mediuM leading-loose">Easily integrate AI into your existing workflows and business tools.</div>
            </div>
        </div>
    </div>
</div>
  )
}

export default AIBusiness