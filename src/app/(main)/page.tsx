"use client"


import React, { useState } from 'react';
import LandingHeroSection from "@/components/sections/LandingHeroSection";
import LandingModels from "@/components/sections/LandingModels";
import { douglas, hermes, olympus, orion, luca } from '@/assets/models';
import WorkforceComponent from '@/components/sections/WorkforceComponent';
import MobileWorkForceComponent from '@/components/sections/MobileWorkForceComponent';
import AIBusiness from '@/components/sections/AIBusiness';
import MobileAIBusiness from '@/components/sections/MobileAIBusiness';
import LandingModelList from '@/components/sections/LandingModelList';
import MobileLandingModelList from '@/components/sections/MobileModelList';


const modelData = {
  "Market Simulation": {
    image: olympus,
    title: "Market Simulation",
    subtitle: "Smarter Market Insights, Faster Decisions",
    href: "/olympus"
  },
  "Stock": {
    image: hermes,
    title: "Stock",
    subtitle: "Analyze stock performance and get AI insights for informed trading.",
    href: "#"
  },
  "Investment Analyst": {
    image: orion,
    title: "Investment Analyst",
    subtitle: "Assess risks, find investment opportunities, and get AI financial advice.",
    href: "/orion"
  },
  "Accountant": {
    image: luca,
    title: "Accountant AI",
    subtitle: "Automate bookkeeping and transactions for financial accuracy.",
    href: "/luca"
  },
  "Presenter": {
    image: douglas,
    title: "AI Presenter",
    subtitle: "Transform business data into compelling presentations",
    href: "#"
  }
};

export default function HomePage() {
  const [activeButton, setActiveButton] = useState('Investment Analyst');
  const buttons = Object.keys(modelData);

  return (
    <>
      <LandingHeroSection />
      <LandingModels buttons={buttons} activeButton={activeButton} setActiveButton={setActiveButton} />
      {/* Larger screen model card display */}
      <div className="hidden lg:flex w-full justify-center">
        {/* @ts-ignore */}
        <LandingModelList modelData={modelData} activeButton={activeButton} />
      </div>
      <div className="px-4 md:px-16 xl:px-28 2xl:px-32 md:pb-16 xl:pb-24 2xl:pb-32 flex flex-col justify-center items-center">

      {/* AI Business Section - Visible on larger screens */}
      <div className="hidden lg:block py-10 xl:py-16 2xl:py-20">
        <AIBusiness />
      </div>
      {/* Mobile model card display */}
      <div className="block lg:hidden">
        {/* @ts-ignore */}
        <MobileLandingModelList modelData={modelData} activeButton={activeButton}  />
      </div>
      <div className="block lg:hidden">
        <MobileAIBusiness />
      </div>
    </div>
      <div className='hidden md:block'>
      <WorkforceComponent/>
      </div>
      <div className='block md:hidden pb-10'>
      <MobileWorkForceComponent/>
      </div>
    </>
  );
}
