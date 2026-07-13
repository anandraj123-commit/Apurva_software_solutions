import AndroidServices from "../components/Androidapplication /AndroidServices";
import WhyChooseAndroid from "../components/Androidapplication /WhyChooseAndroid";
import SocialOrbitHero from "../components/SocialOrbitAnimation";
import Contact from "../forms/contact";
import Industries from '../components/Industries';
import FAQ from '../components/Androidapplication /Faq';

const Androidapplication = () => {
    return (
        <>
      <div className="relative w-full h-auto">
        
        {/* Background Image */}
        <img
          src="/img/Android_Application.png"
          alt="Android Application"
          className="w-full h-auto"
        />
  
        {/* Overlay (optional for better text visibility) */}
        <div className="absolute inset-0 bg-black/20"></div>
  
        {/* Left Side Content */}
        <div className="absolute top-1/2 left-10 transform -translate-y-1/2 max-w-md text-left">
          
          <h1 className="text-3xl font-bold text-white leading-tight">
            Build Next-Gen <br />
            <span className="text-[#ff4a17]">Android Applications</span> <br />
            Designed for Peak Performance
          </h1>
  
          <p className="mt-4 text-white/90 text-sm leading-relaxed">
            Apurva Software Solutions crafts robust, high-performance Android
            solutions tailored for modern businesses. From handling intensive
            background operations to delivering smooth, user-centric Material
            Design experiences, we utilize Kotlin and the latest Jetpack
            components to build scalable and reliable mobile apps.
          </p>
  
          {/* Button */}
          <button className="mt-6 px-6 py-3 bg-[#ff4a17] text-white rounded-lg shadow-lg hover:bg-orange-600 transition" onClick={() => {
        document
          .getElementById("contact")
          .scrollIntoView({ behavior: "smooth" });
      }}>
            Start Your Project
          </button>
        </div>
      </div>
      <AndroidServices/>
      <WhyChooseAndroid/>
      <div className="relative w-full h-auto">
        <img
          src="/img/Android_Excellence.png"
          alt="Android Application"
          className="w-full h-auto"
        />
        </div>
        <Industries/>
        <div className="relative w-full h-auto">
        <img
          src="/img/technology-android-app-dev.png"
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
  
  export default Androidapplication;