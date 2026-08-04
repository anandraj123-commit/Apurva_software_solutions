import IosServices from "../components/IosApplication/IosServices";
import WhyChooseIos from "../components/IosApplication/WhyChooseIos";
import SocialOrbitHero from "../components/SocialOrbitAnimation";
import Contact from "../forms/contact";
import Industries from '../components/Industries';
import FAQ from '../components/IosApplication/Faq';
import { Helmet } from "react-helmet-async";

const IosApplication = () => {
    return (
        <>
<Helmet>
  {/* Basic */}
  <meta charSet="UTF-8" />
  <title>iOS App Development Services | Apurva Software Solutions</title>

  <meta
    name="description"
    content="Build high-performance iOS applications with Apurva Software Solutions. We specialize in Swift, SwiftUI, and scalable mobile app development for Apple devices."
  />

  <meta
    name="keywords"
    content="iOS app development, Swift development, iPhone app development, mobile app development, SwiftUI apps, Apurva Software Solutions"
  />

  <meta name="robots" content="index, follow" />

  {/* Mobile */}
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://apurvasoftwaresolutions.com/Ios-Application"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="iOS App Development Services for High Performance Apps"
  />

  <meta
    property="og:description"
    content="We build secure, scalable, and high-performance iOS applications using Swift and modern Apple frameworks."
  />

  <meta
    property="og:url"
    content="https://apurvasoftwaresolutions.com/Ios-Application"
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
    content="iOS App Development Services"
  />

  <meta
    name="twitter:description"
    content="Create powerful iOS apps using Swift, SwiftUI, and modern Apple technologies."
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