"use client";

import { useState } from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { mainConfig } from "@/config/navLinks";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { blackLogo } from "../../assets";
import { Menu, X } from "lucide-react";

interface NavBarProps {
  scroll?: boolean;
  large?: boolean;
}

export function ModelsNavigation({ scroll = false }: NavBarProps) {
  const selectedLayout = useSelectedLayoutSegment();
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full lg:px-12 xl:px-36 py-4 px-4 z-50 bg-transparent flex justify-between items-center transition-all">
      
      {/* Logo */}
      <Link href="/" className="inline-flex justify-start items-center gap-1.5">
        <Image src={blackLogo} height={40} width={40} alt="logo" className="rounded-full" />
        <div className="text-slate-950 text-2xl font-extrabold">{siteConfig.name}</div>
      </Link>

      {/* Desktop Navigation */}
      {mainConfig.mainNav && mainConfig.mainNav.length > 0 && (
        <nav className="hidden md:flex flex-grow justify-center items-center gap-6">
          {mainConfig.mainNav.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              prefetch={true}
              className={cn(
                "text-lg font-medium transition-colors text-gray-900 hover:text-white sm:text-sm",
                item.href.startsWith(`/${selectedLayout}`) ? "text-foreground" : "text-gray-900",
                item.disabled && "cursor-not-allowed opacity-80"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      )}

      {/* Login & Signup Buttons (Hidden on Mobile) */}
      <div className="hidden md:flex justify-start items-center gap-3">
        <button className="w-20 p-2.5 cursor-pointer rounded outline outline-gray-900 flex justify-center items-center gap-1">
          <div className="text-slate-950 text-sm font-medium">Login</div>
        </button>
        <button className="p-2.5 bg-slate-950 cursor-pointer rounded outline outline-gray-900 flex justify-center items-center gap-1">
          <div className="text-white text-sm font-medium">Get Started Now</div>
        </button>
      </div>

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          "fixed right-4 top-4 z-50 rounded-full p-2 transition-colors duration-200 hover:bg-muted focus:outline-none active:bg-muted md:hidden",
          open && "hover:bg-muted active:bg-muted"
        )}
      >
        {open ? <X className="size-5 text-muted-foreground" /> : <Menu className="size-5 text-muted-foreground" />}
      </button>

      {/* Mobile Navigation */}
      {open && (
        <div className="fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-6 md:hidden z-40">
          {mainConfig.mainNav.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-xl font-semibold text-gray-900 hover:text-slate-700"
              onClick={() => setOpen(false)}
            >
              {item.title}
            </Link>
          ))}

          {/* Mobile Login & Signup Buttons */}
          <div className="flex flex-col gap-4">
            <button className="w-40 p-2.5 cursor-pointer rounded outline outline-gray-900 flex justify-center items-center">
              <div className="text-slate-950 text-lg font-medium">Login</div>
            </button>
            <button className="w-40 p-2.5 bg-slate-950 cursor-pointer rounded outline outline-gray-900 flex justify-center items-center">
              <div className="text-white text-lg font-medium">Get Started Now</div>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
