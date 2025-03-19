import Link from "next/link";
import * as React from "react";
import Image from "next/image";
import { newLogo, logo2 } from "@/assets";


export function SiteFooter() {
  return (
<footer className="border-t border-neutral-700/20 py-10 px-8 bg-white">
  <div className="mx-auto max-w-7xl">
    <div className="flex flex-wrap items-center justify-between gap-10 md:items-start lg:flex-nowrap">
      <div className="w-44 inline-flex flex-col justify-start items-start gap-3.5">
    <div className="self-stretch inline-flex justify-start items-center gap-2.5">
        <Image alt="Logo" className="h-12" src={logo2} width={50} height={50} />
        <div className="justify-start text-slate-950 text-4xl font-extrabold">ai-wk</div>
    </div>
    <div className="self-stretch justify-start text-slate-950 text-sm font-normal">Copyright © ai-wk {new Date().getFullYear()}..</div>
</div>
      <div className="w-full md:w-2/3">
        <div className="grid grid-cols-2 gap-4 text-sm sm:grid-cols-3 sm:gap-10 md:grid-cols-3">
          <div>
            <h2 className="self-stretch justify-start text-neutral-400 text-lg font-normal">Company</h2>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li><Link href="#">About</Link></li>
              <li><Link href="#">Contact Us</Link></li>
              <li><Link href="#">FAQs</Link></li>
              <li><Link href="#">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="self-stretch justify-start text-neutral-400 text-lg font-normal">Models</h2>
            <ul className="mt-4 space-y-2 text-gray-700">
            <li><Link href="#">Luca</Link></li>
            <li><Link href="#">Orion</Link></li>
            <li><Link href="#">Olympus</Link></li>
            <li><Link href="#">Douglas</Link></li>
            <li><Link href="#">Hermes</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="self-stretch justify-start text-neutral-400 text-lg font-normal">Use Cases</h2>
            <ul className="mt-4 space-y-2 text-gray-700">
            <li><Link href="#">Large Organisations</Link></li>
            <li><Link href="#">Small Corporations</Link></li>
            <li><Link href="#">Personal</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

  );
}
