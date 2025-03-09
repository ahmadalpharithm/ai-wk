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
import { ModeToggle } from "@/components/layout/mode-toggle";
import Image from "next/image"
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



  const links =
    marketingConfig.mainNav;

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
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-1.5">
          <Image src={appLogo} height={40} width={40} alt="logo" className="flex justify-center items-center rounded-full"/>
            <span className="font-urban text-xl font-bold">
              {siteConfig.name}
            </span>
          </Link>

          {links && links.length > 0 ? (
            <nav className="hidden gap-6 md:flex">
              {links.map((item, index) => (
                <Link
                  key={index}
                  href={item.disabled ? "#" : item.href}
                  prefetch={true}
                  className={cn(
                    "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                    item.href.startsWith(`/${selectedLayout}`)
                      ? "text-foreground"
                      : "text-foreground/60",
                    item.disabled && "cursor-not-allowed opacity-80",
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          ) : null}
        </div>

        <div className="flex items-center space-x-3">
          <div className="hidden md:flex">
          <ModeToggle />
          </div>
          {/* right header for docs */}
            <Button
              className="hidden gap-2 px-5 md:flex"
              variant="default"
              size="sm"
              rounded="full"
              onClick={() => setShowSignInModal(true)}
            >
              <span>Login</span>
              <Icons.arrowRight className="size-4" />
            </Button>
        </div>
      </MaxWidthWrapper>
    </header>
  );
}
