import React from 'react'
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/shared/icons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import FileUpload from '@/components/FileUpload';

function OrionModelPage() {
  return (
    <div className="container px-6 flex h-screen w-screen flex-col items-center justify-center">
    <Link
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
    </Link>
    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[550px]">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Orion Model
        </h1>
      </div>
      <div>
          <form>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="text">
                Enter tickers to Investigate
                </Label>
                <Input
                  id="text"
                  placeholder="Enter tickers value here"
                  type="text"
                  autoCapitalize="none"
                  autoCorrect="on"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="text">
                Optional Upload - earnings scripts if happened less than 24 hours
                </Label>
                <FileUpload/>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="text">
                Optional Upload - research reports
                </Label>
                <FileUpload/>
              </div>
              <button className={cn(buttonVariants())}>
                {"Proceed"}
              </button>
            </div>
          </form>
      </div>
    </div>
  </div>

  )
}

export default OrionModelPage