import  Stats from '../components/Stats';
import Industries from '../components/Industries';
import Client from '../components/Client';
import Contact from '../forms/contact';
import FAQSection from '../components/mobile-app-dev/FAQItem';
import MobileShowcase from '../components/mobile-app-dev/MobileShowcase';
import WhyChooseUs from '../components/mobile-app-dev/WhyChooseUs';
import PlatformDevelopment from '../components/mobile-app-dev/PlatformDevelopment';
import SocialOrbitHero from '../components/SocialOrbitAnimation';
import MobileDevelopmentProcess from '../components/mobile-app-dev/MobileDevelopmentProcess';
const MobileAppDevelopment = ()=>{
    return(
    <>
            <div className="relative w-full">
            <img
              src="/img/apurva-software-solutions-mobile-app-development.png"
              alt="Mobile App Development"
              className="w-full"
            />
                          <button
      onClick={() => {
        document
          .getElementById("contact")
          .scrollIntoView({ behavior: "smooth" });
      }}
      className="absolute bottom-62 left-[52px] bg-[#ff4a17] text-white px-6 py-3 rounded-lg font-semibold shadow-lg" style={{ left: "52px",bottom:' 62px'
      }}
    > 
      Start a Project
    </button>
    </div>
    <WhyChooseUs/>
    <PlatformDevelopment/>
    <img src="/img/advanced-mobile-app-feature.png" alt="advanced-mobile-app-feature" className="w-full"/>
    <MobileDevelopmentProcess/>
    <MobileShowcase/>
    <Stats/>
    <Industries/>
    <Client/>
    <Contact/>
    <FAQSection/>
    <SocialOrbitHero/>

     </>
    )
    
}

export default MobileAppDevelopment;