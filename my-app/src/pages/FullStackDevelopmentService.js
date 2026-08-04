import FullStackServices from '../components/FullStackDevelopmentService/FullStackServices'
import SocialOrbitHero from '../components/SocialOrbitAnimation';
import Contact from '../forms/contact';
import TechStack from '../components/FullStackDevelopmentService/ TechStack';
import Industries from '../components/Industries';
import FAQ from '../components/FullStackDevelopmentService/Faqs';
import { Helmet } from "react-helmet-async";
const FullStackDevelopmentService = ()=>{
    return (
        <>
<Helmet>
  {/* Basic */}
  <meta charSet="UTF-8" />
  <title>Full Stack Development Services | Apurva Software Solutions</title>

  <meta
    name="description"
    content="Build scalable and secure full stack applications with Apurva Software Solutions. We specialize in React, Node.js, APIs, and cloud-based solutions for modern businesses."
  />

  <meta
    name="keywords"
    content="full stack development, React Node.js development, web application development, API development, cloud applications, Apurva Software Solutions"
  />

  <meta name="robots" content="index, follow" />

  {/* Mobile */}
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://apurvasoftwaresolutions.com/full-stack-development-service"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Full Stack Development Services for Scalable Applications"
  />

  <meta
    property="og:description"
    content="End-to-end full stack development using React, Node.js, and modern cloud technologies to build fast, secure, and scalable applications."
  />

  <meta
    property="og:url"
    content="https://apurvasoftwaresolutions.com/full-stack-development-service"
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
    content="Full Stack Development Services"
  />

  <meta
    name="twitter:description"
    content="Build powerful full stack applications with modern technologies like React and Node.js."
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
          src="/img/FullStack-Development-Service.png"
          alt="Custom Web Application"
          className="w-full"
        />
<div className="absolute inset-0 bg-black/20"></div>
  <div className="absolute  hidden lg:block top-1/2 left-10 transform -translate-y-1/2 max-w-lg text-left">
  
  <h1 className="text-3xl font-bold text-white leading-tight">
  Build Scalable 
  <span className="text-[#ff4a17]"> Full Stack Solutions</span> <br />
  For Modern Digital Experiences
</h1>

<p className="mt-4 text-white/90 text-sm leading-relaxed">
  Apurva Software Solutions delivers end-to-end full stack development 
  services, combining powerful backend systems with intuitive frontend 
  interfaces. We build robust, scalable, and secure applications using 
  modern technologies like React, Node.js, and cloud platforms. From 
  database design to API development and seamless UI integration, we 
  ensure high performance and smooth user experiences. Whether it's a 
  startup idea or enterprise solution, our full stack approach helps 
  you launch faster, scale efficiently, and stay future-ready.
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
        <FullStackServices/>
        <TechStack/>
        <div className="relative w-full">
        <img
          src="/img/why-choose-us-for-fullstack-development.png"
          alt="why-choose-us-for-fullstack-development"
          className="w-full"
        />
        </div>
        
        
        <Industries/>
        <FAQ/>
        <Contact/>
        <SocialOrbitHero/>
        </>
        )
}

export default FullStackDevelopmentService;