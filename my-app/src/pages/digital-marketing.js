import Contact from "../forms/contact";
import Industries from '../components/Industries';
import FAQ from '../components/DigitalMarketing/faqs';
import SocialOrbitHero from '../components/SocialOrbitAnimation';
import ThreeColumnTestimonials from '../components/TestimonialScroller';
import WhyChooseUsForDigitalMarketingService from '../components/WhyChooseUsForDigitalMarketingService';
import DigitalMarketingServices from '../components/Digital Marketing Services';
import Client from "../components/Client";
import { Helmet } from "react-helmet-async";
const DigitalMarketing = ()=>{
    return (
        <>

<Helmet>
  {/* Basic */}
  <meta charSet="UTF-8" />
  <title>Digital Marketing Services | Apurva Software Solutions</title>

  <meta
    name="description"
    content="Boost your online presence with Apurva Software Solutions. We offer SEO, social media marketing, PPC, and digital marketing strategies to grow your business."
  />

  <meta
    name="keywords"
    content="digital marketing services, SEO services, social media marketing, PPC advertising, online marketing company"
  />

  <meta name="robots" content="index, follow" />

  {/* Mobile */}
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://apurvasoftwaresolutions.com/digital-marketing"
  />

  {/* Open Graph */}

  <meta
    property="og:title"
    content="Digital Marketing Services for Business Growth"
  />

  <meta
    property="og:description"
    content="Grow your business with expert SEO, social media, and performance marketing services."
  />

  <meta
    property="og:url"
    content="https://apurvasoftwaresolutions.com/digital-marketing"
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
    content="Digital Marketing Services"
  />

  <meta
    name="twitter:description"
    content="Improve visibility and generate leads with our digital marketing strategies."
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


        <div className="relative w-full h-auto">
       <img
         src="/img/digital marketing.png"
         alt="Ios Application"
         className="w-full h-auto"
       />

<div className="absolute inset-0 bg-black/20"></div>
 
{/* Left Side Content */}
<div className="absolute  hidden lg:block top-1/2 left-9 transform -translate-y-1/2 max-w-lg text-left">
  
  <h1 className="text-3xl font-bold text-gray-900 leading-tight">
    Transform Your Ideas Into <br />
    <span className="text-[#ff4a17]">Powerful Digital Solutions</span> <br />
    With Our Expertise
  </h1>

  {/* Button */}
  <button
    className="mt-6 px-6 py-3 bg-[#ff4a17] text-white rounded-lg shadow-md hover:bg-orange-600 transition duration-300"
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
<WhyChooseUsForDigitalMarketingService/>
<DigitalMarketingServices/>
<Industries/>
<Contact/>
<FAQ/>
<ThreeColumnTestimonials/>
<Client/>
<SocialOrbitHero/>
</>
    )
}

export default DigitalMarketing;