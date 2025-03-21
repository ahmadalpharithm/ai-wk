import React from 'react'
import LucaLandingHeroSection from './_components/LucaLandingHeroSection'
import LucaGitHub from './_components/LucaGitHub'
import LucaCTA from './_components/LucaCTA'
import HowLucaWorks from './_components/HowLucaWorks'
import LucaComparison from './_components/LucaComparison'
import LucaSmartAccounting from './_components/LucaSmartAccounting'
import LucaKeyFeatures from './_components/LucaKeyFeatures'
import LucaFAQ from './_components/LucaFaq'


function LucaHomePage() {
  return (
    <>
        <LucaLandingHeroSection/>
        <div className="px-4 md:px-16 xl:px-28 2xl:px-32 md:pb-16 xl:pb-24 2xl:pb-32 flex flex-col justify-center items-center">
        <LucaGitHub/>
        <div className="hidden lg:block py-8 xl:py-12 2xl:py-16">
        <LucaKeyFeatures/>
        </div>
        </div>
        <div className='w-full'>
        <LucaSmartAccounting/>
        </div>
        <div className="px-4 md:py-16 md:px-16 xl:px-28 2xl:px-32 md:pb-16 xl:pb-24 2xl:pb-32 gap-16 flex flex-col justify-center items-center">
          <LucaComparison/>
          <HowLucaWorks/>
          <LucaFAQ/>
          <LucaCTA/>
        </div>
   
    </>
  )
}

export default LucaHomePage