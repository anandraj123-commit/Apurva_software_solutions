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

<button
  onClick={() => {
    document
      .getElementById("contact")
      .scrollIntoView({ behavior: "smooth" });
  }}
  className="absolute bottom-10 left-[10px] bg-[#ff4a17] text-white px-6 py-3 rounded-lg font-semibold shadow-lg"
>
  Get Free Consultation
</button>

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