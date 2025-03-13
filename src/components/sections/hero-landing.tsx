import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/shared/icons";

export default async function HeroLanding() {

  return (
    <section className="space-y-6 py-12 sm:py-20 lg:py-20">
      <div className="container flex max-w-5xl flex-col items-center gap-5 text-center">

        <h1 className="text-balance font-urban text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-[66px]">
        Build, Train & Deploy AI Models Seamlessly with{" "}
          <span className="text-gradient_indigo-purple font-extrabold">
            ai-wk
          </span>
        </h1>
        <p
          className="max-w-2xl text-balance leading-normal text-muted-foreground sm:text-xl sm:leading-8"
          style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
        >
             AI-WK empowers developers and businesses with cutting-edge AI models. 
             Fine-tune, integrate, and scale AI solutions effortlessly.
        </p>
        <div
          className="flex justify-center space-x-2 md:space-x-4"
          style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
        >
        </div>
      </div>
    </section>
  );
}
