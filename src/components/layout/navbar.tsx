"use client";

import { useContext } from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { mainConfig } from "@/config/navLinks";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/use-scroll";
import { ModalContext } from "@/components/modals/providers";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import Image from "next/image";
import { logo, logo2 } from "../../assets";
import { useTheme } from "next-themes";
import { newLogo } from "../../assets";

interface NavBarProps {
  scroll?: boolean;
  large?: boolean;
}

export function NavBar({ scroll = false }: NavBarProps) {
  const scrolled = useScroll(50);
  const { setShowSignInModal } = useContext(ModalContext);
  const selectedLayout = useSelectedLayoutSegment();
  const documentation = selectedLayout === "docs";
  const { theme, resolvedTheme } = useTheme();
  const appLogo = resolvedTheme === "dark" ? logo : logo2;

  return (
    <header
      className={`absolute top-0 left-0 w-full z-50 bg-transparent flex justify-center  transition-all `}
    >
      <MaxWidthWrapper
        className="flex h-14 items-center justify-between py-4"
        large={documentation}
      >

        <Link href="/" className="inline-flex justify-start items-center gap-1.5">
        <Image
            src={newLogo}
            height={40}
            width={40}
            alt="logo"
            className="rounded-full"
          />
    <div className="justify-start text-white text-2xl font-extrabold">{siteConfig.name}</div>
    </Link>

        {/* Centered Navigation Links */}
        {mainConfig.mainNav && mainConfig.mainNav.length > 0 && (
          <nav className="hidden md:flex flex-grow justify-center gap-6">
            {mainConfig.mainNav
                  // @ts-ignore
              .map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  prefetch={true}
                  className={cn(
                    "text-lg font-medium transition-colors text-white hover:text-foreground/80 sm:text-sm",
                    item.href.startsWith(`/${selectedLayout}`)
                      ? "text-foreground"
                      : "text-white",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              ))}
          </nav>
        )}
        {/* Login Button */}
        <div className=" justify-start items-center gap-3 hidden md:inline-flex">
          <button className="w-20 p-2.5 rounded outline outline-offset-[-1px] outline-white flex justify-center items-center gap-1">
              <div className="justify-start text-white text-sm font-medium">Login</div>
          </button>
          <button className="p-2.5 bg-white rounded outline outline-offset-[-1px] outline-white flex justify-center items-center gap-1">
              <div className="justify-start text-slate-950 text-sm font-medium">Get Started Now</div>
          </button>
        </div>
      </MaxWidthWrapper>
    </header>
  );
}
