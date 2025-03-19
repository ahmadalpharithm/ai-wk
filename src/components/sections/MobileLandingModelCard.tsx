import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


interface LandingModelCardProps {
  image: string;
  title: string;
  subtitle: string;
  href: string;
}

function MobileLandingModelCard({ image, title, subtitle, href } : LandingModelCardProps) {
  return (
    <div className="w-80 h-100 relative bg-stone-100 rounded-[9.82px] overflow-hidden">
    <div className="w-64 h-64 left-[20.14px] top-[172.01px] absolute rounded-md overflow-hidden">
            <Image src={image} width={500} height={500} alt={title} />
    </div>
    <div className="w-64 left-[20.14px] top-[15.21px] absolute inline-flex flex-col justify-start items-start gap-2.5">
        <div className="self-stretch justify-start text-zinc-500 text-xs font-semibold">{title}</div>
        <div className="w-64 justify-start text-slate-800 text-lg font-semibold">{subtitle}</div>
        <Link href={href}>
        <button className="w-24 p-2 bg-slate-800 rounded outline outline-offset-[-0.82px] outline-slate-800 inline-flex justify-center items-center gap-[3.27px]">
            <div className="justify-start text-white text-[10.07px] font-medium">Learn More</div>
        </button>
        </Link>
    </div>
</div>
  )
}

export default MobileLandingModelCard