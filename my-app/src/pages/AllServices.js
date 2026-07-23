import ServicesFaqs from '../components/ServicesFaqs';
import Industries from '../components/Industries.jsx';
import Contact from "../forms/contact";
import SocialOrbitHero from '../components/SocialOrbitAnimation.js';
import ImageGrid from '../components/ImageGrid.js';
import DiscussYourProjectForm from '../forms/DiscussYourProjectForm';
const AllServices = ()=>{
    return (
        <>
         <div className="relative w-full h-auto">
        
        {/* Background Image */}
        <img
          src="/img/All Services.png"
          alt="Ios Application"
          className="w-full h-auto"
        />
  
  <div className="absolute inset-0 bg-black/20"></div>

{/* Left Side Content */}
<div className="absolute top-1/2  hidden lg:block left-10 transform -translate-y-1/2 max-w-md text-left">
  
  <h1 className="text-3xl font-bold text-white leading-tight">
    Explore Our <br />
    <span className="text-[#ff4a17]">Complete Digital Services</span> <br />
    Built to Scale Your Business
  </h1>

  <p className="mt-4 text-white/90 text-sm leading-relaxed">
    Apurva Software Solutions offers a full spectrum of digital services designed to empower modern businesses. From custom web and mobile app development to cloud solutions, UI/UX design, and digital marketing — we deliver scalable, secure, and performance-driven solutions. Our team combines cutting-edge technologies with industry best practices to help you innovate, grow, and stay ahead in the digital landscape.
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
    Explore Services
  </button>
</div>
      </div>
      <ImageGrid/>
      <Industries/>
      <DiscussYourProjectForm/>
      <Contact/>
      <ServicesFaqs/>
      <SocialOrbitHero/>
    </>
    )
}

export default AllServices;

