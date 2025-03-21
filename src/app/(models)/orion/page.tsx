import React from 'react'
import OrionLandingHeroSection from './_components/OrionLandingHeroSection'
import OrionGitHub from './_components/OrionGitHub'
import OrionCTA from './_components/OrionCTA'
import HowOrionWorks from './_components/HowOrionWorks'
import OrionComparison from './_components/OrionComparison'
import OrionSmartAccounting from './_components/OrionSmartAccounting'
import OrionKeyFeatures from './_components/OrionKeyFeatures'
import OrionFAQ from './_components/OrionFaq'


function LucaHomePage() {
  return (
    <>
        <OrionLandingHeroSection/>
        <div className="px-4 md:px-16 xl:px-28 2xl:px-32 md:pb-16 xl:pb-24 2xl:pb-32 flex flex-col justify-center items-center">
        <OrionGitHub/>
        <div className="hidden lg:block py-8 xl:py-12 2xl:py-16">
        <OrionKeyFeatures/>
        </div>
        </div>
        <div className='w-full'>
        <OrionSmartAccounting/>
        </div>
        <div className="px-4 md:py-16 md:px-16 xl:px-28 2xl:px-32 md:pb-16 xl:pb-24 2xl:pb-32 gap-16 flex flex-col justify-center items-center">
          <OrionComparison/>
          <HowOrionWorks/>
          <OrionFAQ/>
          <OrionCTA/>
        </div>
   
    </>
  )
}

export default LucaHomePage