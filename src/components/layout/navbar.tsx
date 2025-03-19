"use client";

import { useContext } from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { marketingConfig } from "@/config/navLinks";
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
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-1.5">
          <Image
            src={newLogo}
            height={40}
            width={40}
            alt="logo"
            className="rounded-full"
          />
          <span className="font-urban text-xl text-white font-bold">{siteConfig.name}</span>
        </Link>

        {/* Centered Navigation Links */}
        {marketingConfig.mainNav && marketingConfig.mainNav.length > 0 && (
          <nav className="hidden md:flex flex-grow justify-center gap-6">
            {marketingConfig.mainNav
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
        <div className="hidden md:flex gap-2">
          <button className="relative border border-white text-white px-4 py-2 rounded-lg overflow-hidden group">
            <span className="absolute inset-0 bg-gray-800 transform -translate-x-full group-hover:translate-x-0 transition duration-300"></span>
            <span className="relative z-10 group-hover:text-white">
                Login
            </span>
          </button>
          <button className="bg-white text-gray-900 px-4 py-2 rounded-md relative overflow-hidden group">
              <span className="absolute top-0 left-0 w-full h-full bg-white opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition duration-500"></span>
              <span className="relative z-10">Get Started Now</span>
          </button>
        </div>

      </MaxWidthWrapper>
    </header>
  );
}
