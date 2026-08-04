import ServicesFaqs from '../components/ServicesFaqs';
import Industries from '../components/Industries.jsx';
import Contact from "../forms/contact";
import SocialOrbitHero from '../components/SocialOrbitAnimation.js';
import ImageGrid from '../components/ImageGrid.js';
import DiscussYourProjectForm from '../forms/DiscussYourProjectForm';
import { Helmet } from "react-helmet-async";
const AllServices = ()=>{
   
 


    return (
        <>
         <Helmet>
  <meta charSet="UTF-8" />
  <title>All Services | Web, Mobile & Digital Solutions</title>

  <meta
    name="description"
    content="Explore Apurva Software Solutions' complete range of services including web development, mobile apps, UI/UX design, cloud solutions, and digital marketing to scale your business."
  />

  <meta
    name="keywords"
    content="web development services, mobile app development, UI UX design, cloud solutions, digital marketing services, software company India"
  />

  <meta name="robots" content="index, follow" />

  {/* Mobile */}
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://apurvasoftwaresolutions.com/Services-We-Offer"
  />

  {/* Open Graph */}
  <meta property="og:title" content="Complete Digital Services | Apurva Software Solutions" />
  <meta
    property="og:description"
    content="Discover our full range of scalable digital services including web, mobile, cloud, and marketing solutions."
  />
  <meta
    property="og:url"
    content="https://apurvasoftwaresolutions.com/Services-We-Offer"
  />
  <meta property="og:type" content="website" />
  <meta
    property="og:image"
    content="https://apurvasoftwaresolutions.com/apurvasoftwaresolutions.png"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="All Services | Apurva Software Solutions" />
  <meta
    name="twitter:description"
    content="Explore web, mobile, cloud, and marketing services designed to grow your business."
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

