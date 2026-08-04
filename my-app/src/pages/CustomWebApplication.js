import ConsultationHero from "../components/CustomWebApplication/ConsultationHero";
import HeroSection from "../components/CustomWebApplication/HeroSection";
import ProcessSection from "../components/CustomWebApplication/ProcessSection";
import Services from "../components/CustomWebApplication/Services";
import Technologies from "../components/CustomWebApplication/Technologies";
import Industries from "../components/Industries";
import Contact from "../forms/contact";
import SocialOrbitAnimation from '../components/SocialOrbitAnimation';
import { Helmet } from "react-helmet-async";

const CustomWebApplication = () => {
  return (
    <>
<Helmet>
  {/* Basic */}
  <meta charSet="UTF-8" />
  <title>Custom Web Application Development | Apurva Software Solutions</title>

  <meta
    name="description"
    content="Build scalable and secure custom web applications with Apurva Software Solutions. We create tailored solutions using modern technologies like React and Node.js."
  />

  <meta
    name="keywords"
    content="custom web application development, web app development company, React web apps, Node.js applications, scalable web solutions"
  />

  <meta name="robots" content="index, follow" />

  {/* Mobile */}
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://apurvasoftwaresolutions.com/custom-web-application"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Custom Web Application Development Services"
  />
  <meta
    property="og:description"
    content="Get tailored web applications built for scalability, performance, and business growth."
  />
  <meta
    property="og:url"
    content="https://apurvasoftwaresolutions.com/custom-web-application"
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
    content="Custom Web Application Development"
  />
  <meta
    name="twitter:description"
    content="Build powerful and scalable custom web applications with modern technologies."
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
      
      {/* Image with Button */}
      <div className="relative w-full">
  
  <img
    src="/img/custom-web-application.png"
    alt="Custom Web Application"
    className="w-full"
  />

<div className="absolute inset-0 bg-black/20"></div>
  
  {/* Left Side Content */}
  <div className="absolute  hidden lg:block top-1/2 left-10 transform -translate-y-1/2 max-w-lg text-left">
  
  <h1 className="text-3xl font-bold text-white leading-tight">
  Build Tailored 
  <span className="text-[#ff4a17]"> Custom Web Applications</span> <br />
  For Scalable Business Growth
</h1>

<p className="mt-4 text-white/90 text-sm leading-relaxed">
  Apurva Software Solutions delivers fully customized web applications 
  designed to match your unique business needs and workflows. We build 
  scalable, secure, and high-performance solutions using modern technologies 
  like React, Node.js, and cloud infrastructure. From intuitive user 
  interfaces to powerful backend systems, our applications are crafted 
  to streamline operations, improve efficiency, and enhance user engagement. 
  Whether it’s a startup idea or an enterprise platform, we turn your vision 
  into a reliable and future-ready digital solution.
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

      <HeroSection />
      <ProcessSection />
      <ConsultationHero />
      <Services />
      <Technologies />
      <Industries />
      <Contact />
      <SocialOrbitAnimation />

    </>
  );
};

export default CustomWebApplication;