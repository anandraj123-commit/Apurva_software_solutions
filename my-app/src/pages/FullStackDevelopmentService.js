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
                      <button
  onClick={() => {
    document
      .getElementById("contact")
      .scrollIntoView({ behavior: "smooth" });
  }}
  className="absolute bottom-62 left-[52px] bg-[#ff4a17] text-white px-6 py-3 rounded-lg font-semibold shadow-lg" style={{ left: "52px",bottom:' 62px'
  }}
> 
  Start a Project
</button>
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