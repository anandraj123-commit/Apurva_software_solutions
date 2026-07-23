
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
       <div className="absolute inset-0 bg-black/20"></div>
  
  {/* Left Side Content */}
  <div className="absolute  hidden lg:block top-1/2 left-10 transform -translate-y-1/2 max-w-lg text-left">
  
  <h1 className="text-3xl font-bold text-white leading-tight">
  Build Engaging 
  <span className="text-[#ff4a17]"> Frontend Experiences</span> <br />
  For Modern & Responsive Interfaces
</h1>

<p className="mt-4 text-white/90 text-sm leading-relaxed">
  Apurva Software Solutions creates visually stunning and highly responsive 
  frontend interfaces that deliver seamless user experiences across all devices. 
  We leverage modern technologies like React, Next.js, and advanced UI frameworks 
  to build fast, interactive, and scalable web applications. Our focus is on clean 
  design, performance optimization, and intuitive navigation to keep users engaged. 
  From pixel-perfect layouts to dynamic components, we ensure your frontend not 
  only looks great but also performs flawlessly.
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

