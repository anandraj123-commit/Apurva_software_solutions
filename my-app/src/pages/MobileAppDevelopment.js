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
import { Helmet } from "react-helmet-async";
const MobileAppDevelopment = ()=>{
    return(
    <>
<Helmet>
  {/* Basic SEO */}
  <meta charSet="UTF-8" />
  <title>Mobile App Development Company | Android, iOS & Cross-Platform Solutions</title>

  <meta name="description" content="Leading mobile app development company delivering high-performance Android, iOS, and cross-platform apps with Flutter and React Native. We build scalable, user-centric applications tailored for startups and enterprises."/>

  <meta name="keywords" content="mobile app development, android app development, ios app development, flutter app development, react native app development, app development company, mobile app developers, android app developers, ios app developers, cross platform app development, custom mobile app development company, best mobile app development services India, affordable mobile app development company, hire mobile app developers India, enterprise mobile app development solutions, android app development company India, custom Android app development services, hire Android developers India, android app development for startups, secure Android mobile app development, ios app development company India, custom iPhone app development services, hire iOS developers India, iOS app development for startups, scalable iOS mobile app solutions, flutter app development company India, custom Flutter app development services, hire Flutter developers India, cross platform Flutter app development, Flutter app development for startups, react native app development company India, custom React Native app development services, hire React Native developers India, cross platform app development using React Native, React Native app development for startups, mobile app UI UX design services, mobile app maintenance and support services, ecommerce mobile app development company, healthcare mobile app development services, fintech mobile app development company, education mobile app development solutions, on demand mobile app development services, startup mobile app development company India, mobile app development with cloud integration, AI powered mobile app development services, mobile app development company with fast delivery, affordable cross platform app development services, professional mobile app development agency India, full stack mobile app development company, mobile app development services for small businesses India"/>

  <meta name="robots" content="index, follow" />

  {/* Mobile */}
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://apurvasoftwaresolutions.com/mobile-app-development"
  />

  {/* Open Graph (Facebook / LinkedIn) */}
  <meta
    property="og:title"
    content="Mobile App Development Company for Android & iOS"
  />

  <meta
    property="og:description"
    content="We build high-performance mobile apps for Android, iOS, and cross-platform using modern technologies."
  />

  <meta
    property="og:url"
    content="https://apurvasoftwaresolutions.com/mobile-app-development"
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
    content="Mobile App Development Services"
  />

  <meta
    name="twitter:description"
    content="Build scalable Android & iOS apps with modern UI and performance-driven architecture."
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