import Link from "next/link";
import * as React from "react";
import Image from "next/image";
import { newLogo } from "@/assets";


export function SiteFooter() {
  return (
<footer className="border-t border-neutral-700/20 py-10 px-8 bg-white">
  <div className="mx-auto max-w-7xl">
    <div className="flex flex-wrap items-center justify-between gap-10 md:items-start lg:flex-nowrap">
      <div className="w-full sm:w-1/2 lg:w-1/3">
        <Link href="/">
          <Image alt="Logo" className="h-12" src={newLogo} width={50} height={50} />
        </Link>
        <div className="my-4 text-gray-700">
          <p>Copyright © ai-wk {new Date().getFullYear()}.</p>
        </div>
      </div>
      <div className="w-full md:w-2/3">
        <div className="grid grid-cols-1 gap-4 text-sm sm:grid-cols-3 sm:gap-10 md:grid-cols-3">
          <div>
            <h3 className="font-bold uppercase text-gray-700">Company</h3>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li><Link href="#">About</Link></li>
              <li><Link href="#">Contact Us</Link></li>
              <li><Link href="#">FAQs</Link></li>
              <li><Link href="#">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold uppercase text-gray-700">Models</h3>
            <ul className="mt-4 space-y-2 text-gray-700">
            <li><Link href="#">Luca</Link></li>
            <li><Link href="#">Orion</Link></li>
            <li><Link href="#">Olympus</Link></li>
            <li><Link href="#">Douglas</Link></li>
            <li><Link href="#">Hermes</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold uppercase text-gray-700">Use Cases</h3>
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
