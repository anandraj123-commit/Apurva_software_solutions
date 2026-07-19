import Contact from "../forms/contact";
import Industries from '../components/Industries';
import FAQ from '../components/DigitalMarketing/faqs';
import SocialOrbitHero from '../components/SocialOrbitAnimation';
const DigitalMarketing = ()=>{
    return (
        <>
        <div className="relative w-full h-auto">
       <img
         src="/img/digital marketing.png"
         alt="Ios Application"
         className="w-full h-auto"
       />
 
{/* Left Side Content */}
<div className="absolute top-1/2 left-9 transform -translate-y-1/2 max-w-lg text-left">
  
  <h1 className="text-3xl font-bold text-gray-900 leading-tight">
    Transform Your Ideas Into <br />
    <span className="text-orange-500">Powerful Digital Solutions</span> <br />
    With Our Expertise
  </h1>

  {/* Button */}
  <button
    className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 transition duration-300"
    onClick={() => {
      document
        .getElementById("contact")
        .scrollIntoView({ behavior: "smooth" });
    }}
  >
    Get Started
  </button>
</div>
</div>
<Industries/>
<Contact/>
<FAQ/>
<SocialOrbitHero/>
</>
    )
}

export default DigitalMarketing;