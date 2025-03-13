"use client"
 
import { Checkbox } from "@/components/ui/checkbox"
import React from 'react'
// import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
// import { Icons } from "@/components/shared/icons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import FileUpload from '@/components/FileUpload';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
// import { Button } from "@/components/ui/button"

function OrionInfoPage() {
  return (
    <div className="container px-6 py-24 flex w-screen flex-col items-center justify-center">

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
                Ticker(s):
                </Label>
                <Input
                  id="text"
                  placeholder="e.g APL,AMZN"
                  type="text"
                  autoCapitalize="none"
                  autoCorrect="on"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="text">
                Upload research reports:
                </Label>
                <FileUpload/>
              </div>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <button className={cn(buttonVariants())}>
                    {"Proceed"}
                  </button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Click on proceed</AlertDialogTitle>
                    <AlertDialogDescription>
                    You will consume $20 credit with this research. Are you sure?
                    </AlertDialogDescription>
                    <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Don&apos;t ask me again!
                    </label>
                  </div>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Proceed</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </form>
      </div>
    </div>
  </div>

  )
}

export default OrionInfoPage