import FullStackServices from '../components/FullStackDevelopmentService/FullStackServices'
import SocialOrbitHero from '../components/SocialOrbitAnimation';
import Contact from '../forms/contact';
import TechStack from '../components/FullStackDevelopmentService/ TechStack';
import Industries from '../components/Industries';
import FAQ from '../components/FullStackDevelopmentService/Faqs';
const FullStackDevelopmentService = ()=>{
    return (
        <>
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