import AppShowcase from '../components/AppShowcase';
import WhyChooseReactNative from '../components/react-native/WhyChooseReactNative';
import Contact from '../forms/contact';
import SocialOrbitHero from '../components/SocialOrbitAnimation';
import FAQ from '../components/react-native/Faqs';
import Industries from '../components/Industries';
import OurServices from '../components/react-native/OurServices';
import TechStack from '../components/TechStack';
import { Helmet } from "react-helmet-async";
const ReactNative = ()=>{
  return (
    <>
      <Helmet>
        {/* Basic SEO */}
        <title>React Native App Development Company | Cross-Platform Apps</title>

        <meta
          name="description"
          content="Build high-performance React Native apps for Android and iOS with a single codebase. Apurva Software Solutions delivers scalable, fast, and user-friendly mobile applications."
        />

        <meta
          name="keywords"
          content="react native development, react native app development, cross platform apps, mobile app development company, ios android apps"
        />

        <meta name="robots" content="index, follow" />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://apurvasoftwaresolutions.com/React-Native-Application"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="React Native App Development Company"
        />

        <meta
          property="og:description"
          content="Create powerful cross-platform mobile apps using React Native for Android & iOS."
        />

        <meta
          property="og:url"
          content="https://apurvasoftwaresolutions.com/React-Native-Application"
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:image"
          content="https://apurvasoftwaresolutions.com/apurvasoftwaresolutions.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="React Native App Development Services"
        />

        <meta
          name="twitter:description"
          content="Build fast and scalable cross-platform apps using React Native."
        />

        <meta
          name="twitter:image"
          content="https://apurvasoftwaresolutions.com/apurvasoftwaresolutions.png"
        />

        {/* Extra */}
        <meta name="author" content="Apurva Software Solutions" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet> 

     <div className="relative w-full h-auto">
     <img
          src="/img/react-native application.png"
          alt="Ios Application"
          className="w-full h-auto"
        />
          {/* Overlay (optional for better text visibility) */}
          <div className="absolute inset-0 bg-black/20"></div>
  
  {/* Left Side Content */}
  <div className="absolute  hidden lg:block top-1/2 left-10 transform -translate-y-1/2 max-w-lg text-left">
  
  <h1 className="text-3xl font-bold text-white leading-tight">
    Build Powerful 
    <span className="text-[#ff4a17]"> React Native Apps</span> <br />
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