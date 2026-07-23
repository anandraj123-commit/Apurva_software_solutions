import ConsultationHero from "../components/CustomWebApplication/ConsultationHero";
import HeroSection from "../components/CustomWebApplication/HeroSection";
import ProcessSection from "../components/CustomWebApplication/ProcessSection";
import Services from "../components/CustomWebApplication/Services";
import Technologies from "../components/CustomWebApplication/Technologies";
import Industries from "../components/Industries";
import Contact from "../forms/contact";
import SocialOrbitAnimation from '../components/SocialOrbitAnimation';

const CustomWebApplication = () => {
  return (
    <>
      
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