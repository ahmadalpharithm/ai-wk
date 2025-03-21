import React from 'react'
import Image from 'next/image'
import { frame } from '@/assets'
function MobileAIBusiness() {
  return (
    <div className="relative p-8 w-full bg-white overflow-hidden">
    <div className='flex flex-col justify-center items-center gap-3'>
    <h2 className="self-stretch justify-start text-slate-950 text-3xl font-semibold">Tailored AI Solutions for Your Business</h2>
    <p className="w-80 self-stretch justify-start text-zinc-500 text-base font-medium leading-normal">very company has unique challenges—our AI models adapt to meet your specific needs.</p>

    <div className='flex flex-col justify-center space-y-6 items-center'>
    <div className="self-stretch inline-flex flex-col justify-start items-start gap-3.5">
        <div className="w-6 h-6 relative overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="M21 21.5H4.6C4.03995 21.5 3.75992 21.5 3.54601 21.391C3.35785 21.2951 3.20487 21.1422 3.10899 20.954C3 20.7401 3 20.4601 3 19.9V3.5M21 7.5L15.5657 12.9343C15.3677 13.1323 15.2687 13.2313 15.1545 13.2684C15.0541 13.3011 14.9459 13.3011 14.8455 13.2684C14.7313 13.2313 14.6323 13.1323 14.4343 12.9343L12.5657 11.0657C12.3677 10.8677 12.2687 10.7687 12.1545 10.7316C12.0541 10.6989 11.9459 10.6989 11.8455 10.7316C11.7313 10.7687 11.6323 10.8677 11.4343 11.0657L7 15.5M21 7.5H17M21 7.5V11.5" stroke="#03061D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
    <h3 className="self-stretch justify-start text-slate-950 text-lg font-semibold">Custom AI Model Tuning</h3>
    <p className="self-stretch justify-start text-zinc-500 text-base font-medium leading-loose">Modify and fine-tune AI capabilities to align with your industry, market, and goals.</p>

    </div>
    </div>
    <div className='flex flex-col justify-center space-y-6 items-center'>
    <div className="self-stretch inline-flex flex-col justify-start items-start gap-3.5">
        <div className="w-6 h-6 relative overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="M12 16.5V21.5M18 21.5L14.0486 18.2072C13.3198 17.5998 12.9554 17.2962 12.5487 17.1801C12.19 17.0778 11.81 17.0778 11.4513 17.1801C11.0446 17.2962 10.6802 17.5998 9.95141 18.2072L6 21.5M8 11.5V12.5M12 9.5V12.5M16 7.5V12.5M22 3.5H2M3 3.5H21V11.7C21 13.3802 21 14.2202 20.673 14.862C20.3854 15.4265 19.9265 15.8854 19.362 16.173C18.7202 16.5 17.8802 16.5 16.2 16.5H7.8C6.11984 16.5 5.27976 16.5 4.63803 16.173C4.07354 15.8854 3.6146 15.4265 3.32698 14.862C3 14.2202 3 13.3802 3 11.7V3.5Z" stroke="#03061D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
        </div>
    <h3 className="self-stretch justify-start text-slate-950 text-lg font-semibold">Seamless Integration</h3>
    <p className="self-stretch justify-start text-zinc-500 text-base font-medium leading-loose">Easily integrate AI into your existing workflows and business tools.</p>

    </div>
    </div>
    </div>
    <div className="self-stretch h-96 relative rounded-lg overflow-hidden">
        <Image  className="rounded-xl object-cover w-80 h-80 left-[15.76px] top-[24.16px] absolute" src={frame} width={1000} height={1000} alt="frame" />
    </div>
</div>
  )
}

export default MobileAIBusiness