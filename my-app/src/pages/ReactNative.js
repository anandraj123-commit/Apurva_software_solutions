import AppShowcase from '../components/AppShowcase';
import WhyChooseReactNative from '../components/react-native/WhyChooseReactNative';
import Contact from '../forms/contact';
import SocialOrbitHero from '../components/SocialOrbitAnimation';
import FAQ from '../components/react-native/Faqs';
import Industries from '../components/Industries';
import OurServices from '../components/react-native/OurServices';
import TechStack from '../components/TechStack';
const ReactNative = ()=>{
  return (
    <>
     <div className="relative w-full h-auto">
     <img
          src="/img/react-native application.png"
          alt="Ios Application"
          className="w-full h-auto"
        />
          {/* Overlay (optional for better text visibility) */}
          <div className="absolute inset-0 bg-black/20"></div>
  
  {/* Left Side Content */}
  <div className="absolute top-1/2 left-10 transform -translate-y-1/2 max-w-md text-left">
  
  <h1 className="text-3xl font-bold text-white leading-tight">
    Build Powerful <br />
    <span className="text-[#ff4a17]">React Native Apps</span> <br />
    For Seamless Cross-Platform Experiences
  </h1>

  <p className="mt-4 text-white/90 text-sm leading-relaxed">
    Apurva Software Solutions delivers high-quality React Native applications 
    that run flawlessly on both iOS and Android using a single codebase. 
    We focus on performance, scalability, and intuitive user experiences by 
    leveraging modern tools, reusable components, and efficient state management. 
    From smooth animations to real-time features, our apps are built to be fast, 
    reliable, and ready for growth across platforms.
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
    <WhyChooseReactNative/>
    <OurServices/>
     <AppShowcase/>
     <Industries/>
     < TechStack/>
     <Contact/>
      <FAQ/>
      <SocialOrbitHero/>
   </>
  )
}

export default ReactNative;