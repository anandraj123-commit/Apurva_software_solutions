import AndroidServices from "../components/Androidapplication /AndroidServices";
import WhyChooseAndroid from "../components/Androidapplication /WhyChooseAndroid";
import SocialOrbitHero from "../components/SocialOrbitAnimation";
import Contact from "../forms/contact";
import Industries from '../components/Industries';
import FAQ from '../components/Androidapplication /Faq';
import { Helmet } from "react-helmet-async";

const Androidapplication = () => {
    return (
        <>
         <Helmet>
        <title>Android App Development Services | Apurva Software Solutions</title>

        <meta
          name="description"
          content="Build high-performance Android applications with Apurva Software Solutions. We create scalable, user-friendly apps using Kotlin and modern Android technologies."
        />

        <meta name="keywords" content="android app development, android development company India, Kotlin app development, mobile app development services, custom android app development company, hire android developers India, android app development for startups, enterprise android app development solutions, secure android app development services, scalable android applications, native android app development, android studio development services, UI UX design for android apps, ecommerce android app development, fintech android app development, healthcare android app solutions, on demand android app development, android app maintenance services, android app testing services, cloud integrated android apps, AI powered android applications, affordable android app development company, best android app developers India" />

        {/* Open Graph */}
        <meta property="og:title" content="Android App Development Services" />
        <meta
          property="og:description"
          content="Custom Android apps designed for performance and scalability."
        />
        <meta
          property="og:image"
          content="https://apurvasoftwaresolutions.com/apurvasoftwaresolutions.png"
        />
        <meta
          property="og:url"
          content="https://apurvasoftwaresolutions.com/Android-Application"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Android App Development Services" />
        <meta
          name="twitter:description"
          content="Build scalable Android apps with modern technologies."
        />
        <meta
          name="twitter:image"
          content="https://apurvasoftwaresolutions.com/apurvasoftwaresolutions.png"
        />

         {/* Extra */}
  <meta name="author" content="Apurva Software Solutions" />
  <meta name="language" content="English" />
  <meta name="revisit-after" content="7 days" />

  {/* Favicon */}
  <link rel="icon" href="/favicon.ico" />
      </Helmet>

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
        <div className="absolute top-1/2 left-10 hidden lg:block transform -translate-y-1/2 max-w-lg text-left">
          
          <h1 className="text-3xl font-bold text-white leading-tight">
            Build Next-Gen
            <span className="text-[#ff4a17]"> Android Applications</span> <br />
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