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
                      {/* Overlay (optional for better text visibility) */}
          <div className="absolute inset-0 bg-black/20"></div>
  
  {/* Left Side Content */}
  <div className="absolute  hidden lg:block top-1/2 left-10 transform -translate-y-1/2 max-w-lg text-left">
  
  <h1 className="text-3xl font-bold text-white leading-tight">
  Transform Ideas Into
  <span className="text-[#ff4a17]"> High-Performance Mobile Apps</span> <br />
  Built for Android, iOS & Beyond
</h1>

<p className="mt-4 text-white/90 text-sm leading-relaxed">
  At Apurva Software Solutions, we create innovative mobile applications that
  combine exceptional performance, intuitive design, and scalable architecture.
  Whether you need a native Android or iOS application, or a cross-platform
  solution using modern frameworks, our team delivers seamless digital
  experiences tailored to your business goals. From UI/UX design and secure
  backend integration to real-time features, cloud connectivity, and ongoing
  maintenance, we build reliable mobile apps that engage users, accelerate
  growth, and keep your business ahead of the competition.
</p>

  {/* Button */}
  <button 
    className="mt-6 px-6 py-3 bg-[#ff4a17] text-white rounded-lg shadow-lg hover:bg-orange-600 transition"
    onClick={() => {
      document
        .getElementById("contact")
        .scrollIntoView({ behavior: "smooth" });
    }}
  >
    Start Your Project
  </button>
</div>
  
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