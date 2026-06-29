
import ServicesUI from "../components/Frontend/ServicesUI";
import Industries from "../components/Industries";
import SocialOrbitHero from "../components/SocialOrbitAnimation";
import Contact from "../forms/contact";
import Subscribe from "../forms/subscribe";
const FrontEndDevelopmentService = ()=>{
    return (
        <>
        <div className="relative w-full">
        <img
          src="/img/Frontend-development-service.png"
          alt="Custom Web Application"
          className="w-full"
        />
                <button
  onClick={() => {
    document
      .getElementById("contact")
      .scrollIntoView({ behavior: "smooth" });
  }}
  className="absolute bottom-10 left-[10px] bg-[#ff4a17] text-white px-6 py-3 rounded-lg font-semibold shadow-lg" style={{ left: "40px",bottom:'15px'
  }}
>
  Start a Project
</button>
        </div>
        <ServicesUI/>
        <img
          src="/img/technologies-we-serve.png"
          alt="Custom Web Application"
          className="w-full"
        />
        
        <Industries/>
        <img
          src="/img/why-choose-us.png"
          alt="Custom Web Application"
          className="w-full"
        />
        <Contact/>
        <SocialOrbitHero/>
</>
    )
}


export default FrontEndDevelopmentService;

