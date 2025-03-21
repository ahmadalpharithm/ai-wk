import OlympusLandingHeroSection from './_components/OlympusLandingHeroSection'
import OlympusGitHub from './_components/OlympusGitHub'
import OlympusCTA from './_components/OlympusCTA'
import HowOlympusWorks from './_components/HowOlympusWorks'
import OlympusComparison from './_components/OlympusComparison'
import OlympusSmartAccounting from './_components/OlympusSmartAccounting'
import OlympusKeyFeatures from './_components/OlympusKeyFeatures'
import OlympusFAQ from './_components/OlympusFaq'


function OlympusHomePage() {
  return (
    <>
        <OlympusLandingHeroSection/>
        <div className="px-4 md:px-16 xl:px-28 2xl:px-32 md:pb-16 xl:pb-24 2xl:pb-32 flex flex-col justify-center items-center">
        <OlympusGitHub/>
        <div className="hidden lg:block py-8 xl:py-12 2xl:py-16">
        <OlympusKeyFeatures/>
        </div>
        </div>
        <div className='w-full'>
        <OlympusSmartAccounting/>
        </div>
        <div className="px-4 md:py-16 md:px-16 xl:px-28 2xl:px-32 md:pb-16 xl:pb-24 2xl:pb-32 gap-16 flex flex-col justify-center items-center">
          <OlympusComparison/>
          <HowOlympusWorks/>
          <OlympusFAQ/>
          <OlympusCTA/>
        </div>
   
    </>
  )
}

export default OlympusHomePage