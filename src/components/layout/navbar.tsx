"use client";

import { useContext } from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { marketingConfig } from "@/config/navLinks";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/use-scroll";
import { Button } from "@/components/ui/button";
import { ModalContext } from "@/components/modals/providers";
import { Icons } from "@/components/shared/icons";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import Image from "next/image";
import { logo, logo2 } from "../../assets";
import { useTheme } from "next-themes";

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
      className={`sticky top-0 z-40 flex w-full justify-center bg-background/60 backdrop-blur-xl transition-all ${
        scroll ? (scrolled ? "border-b" : "bg-transparent") : "border-b"
      }`}
    >
      <MaxWidthWrapper
        className="flex h-14 items-center justify-between py-4"
        large={documentation}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-1.5">
          <Image
            src={appLogo}
            height={40}
            width={40}
            alt="logo"
            className="rounded-full"
          />
          <span className="font-urban text-xl font-bold">{siteConfig.name}</span>
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
                    "text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                    item.href.startsWith(`/${selectedLayout}`)
                      ? "text-foreground"
                      : "text-foreground/60",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              ))}
          </nav>
        )}
        {/* Login Button */}
          <Button
            className="hidden md:flex gap-2 px-5"
            variant="default"
            size="sm"
            // @ts-ignore
            rounded="full"
            onClick={() => setShowSignInModal(true)}
          >
            <span>Login</span>
            <Icons.arrowRight className="size-4" />
          </Button>
      </MaxWidthWrapper>
    </header>
  );
}
