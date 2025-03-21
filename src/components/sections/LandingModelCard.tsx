import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


interface LandingModelCardProps {
  image: string;
  title: string;
  subtitle: string;
  href: string;
}

const LandingModelCard: React.FC<LandingModelCardProps> = ({ image, title, subtitle, href }) => {
  return (
    <div className="w-[900px] relative bg-stone-100 rounded-xl overflow-hidden h-[550px]">
      {/* Image Section */}
      <div className="w-[520.60px] h-[513.77px] left-[550.40px] top-[66.50px] absolute rounded-xl overflow-hidden">
        <Image src={image} width={1000} height={1000} alt={title} />
      </div>
      {/* Text Content Section */}
      <div className="flex justify-center items-center p-10 mt-32 md:w-1/2 md:pr-12">
        <div className="w-150 text-left">
          <h4 className="text-zinc-500 text-xl xl:text-2xl font-semibold">{title}</h4>
          <h2 className="text-3xl xl:text-5xl 2xl:text-5xl font-semibold leading-10 tracking-tight text-slate-800 sm:text-5xl sm:leading-none md:text-5xl">
            {subtitle}
          </h2>
          <div className="mt-5 sm:flex md:mt-8 gap-2">
            <Link href={href}>
              <button className="w-28 p-2.5 bg-slate-800 cursor-pointer rounded outline outline-offset-[-0.97px] outline-slate-800 inline-flex justify-center items-center gap-1">
                <div className="text-white text-sm font-medium">Learn More</div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingModelCard;
