import IosServices from "../components/IosApplication/IosServices";
import WhyChooseIos from "../components/IosApplication/WhyChooseIos";
import SocialOrbitHero from "../components/SocialOrbitAnimation";
import Contact from "../forms/contact";
import Industries from '../components/Industries';
import FAQ from '../components/IosApplication/Faq';

const IosApplication = () => {
    return (
        <>
      <div className="relative w-full h-auto">
        
        {/* Background Image */}
        <img
          src="/img/react-native application.png"
          alt="Ios Application"
          className="w-full h-auto"
        />
  
        {/* Overlay (optional for better text visibility) */}
        <div className="absolute inset-0 bg-black/20"></div>
  
        {/* Left Side Content */}
        <div className="absolute top-1/2 left-10  hidden lg:block transform -translate-y-1/2 max-w-lg text-left">
          
          <h1 className="text-3xl font-bold text-white leading-tight">
            Build Next-Gen
            <span className="text-[#ff4a17]"> Ios Applications</span> <br />
            Designed for Peak Performance
          </h1>
  
          <p className="mt-4 text-white/90 text-sm leading-relaxed">
          Apurva Software Solutions crafts robust, high-performance iOS applications designed for modern businesses. From seamless background processing to delivering elegant, user-centric experiences aligned with Apple’s Human Interface Guidelines, we leverage Swift and the latest iOS frameworks like SwiftUI and Combine to build secure, scalable, and high-quality mobile apps. Our solutions ensure smooth performance, intuitive design, and reliability across all Apple devices.
          </p>
  
          {/* Button */}
          <button className="mt-6 px-6 py-3 bg-[#ff4a17] text-white rounded-lg shadow-lg hover:bg-orange-600 transition" onClick={() => {
        document
          .getElementById("contact")
          .scrollIntoView({ behavior: "smooth" });
      }}>
            Get In Touch
          </button>
        </div>
      </div>
      <IosServices/>
      <WhyChooseIos/>
      <div className="relative w-full h-auto">
        <img
          src="/img/Ios_Excellence.png"
          alt="Ios Application"
          className="w-full h-auto"
        />
        </div>
        <Industries/>
        <div className="relative w-full h-auto">
        <img
          src="/img/Technology Ios Application.png"
          alt="Android Application"
          className="w-full h-auto"
        />
        </div>
        
      <Contact/>
      <FAQ/>
      
      <SocialOrbitHero/>
      </>
    );
  };
  
  export default IosApplication;