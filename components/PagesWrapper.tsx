import React, { ReactNode } from "react";
import { Icons } from "@/components/shared/icons";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
interface PagesWrapperProps {
  children: ReactNode;
}

function PagesWrapper({ children }: PagesWrapperProps) {
  return (
    <div className="container px-6 md:px-24 flex flex-col py-6">
      {/* <Link
          href="/models"
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "absolute left-4 top-24 md:left-36 md:top-24",
          )}
        >
          <>
            <Icons.chevronLeft className="mr-2 size-4" />
            Back
          </>
        </Link> */}
      <div className="mt-16">
      {children}
      </div>
    </div>
  );
}

export default PagesWrapper;
