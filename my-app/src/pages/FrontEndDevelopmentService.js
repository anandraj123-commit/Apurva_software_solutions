
import ServicesUI from "../components/Frontend/ServicesUI";
import Industries from "../components/Industries";
import SocialOrbitHero from "../components/SocialOrbitAnimation";
import Contact from "../forms/contact";
import Subscribe from "../forms/subscribe";
import { Helmet } from "react-helmet-async";
const FrontEndDevelopmentService = ()=>{
    return (
        <>
<Helmet>
  {/* Basic */}
  <meta charSet="UTF-8" />
  <title>Frontend Development Services | Apurva Software Solutions</title>

  <meta
    name="description"
    content="Build engaging and responsive frontend experiences with Apurva Software Solutions. We specialize in React, Next.js, and modern UI technologies for fast and scalable web applications."
  />

  <meta
    name="keywords"
    content="frontend development, React development, Next.js services, UI development, responsive web design, Apurva Software Solutions"
  />

  <meta name="robots" content="index, follow" />

  {/* Mobile */}
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://apurvasoftwaresolutions.com/front-end-services"
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="Frontend Development Services for Modern Web Applications"
  />

  <meta
    property="og:description"
    content="We build fast, responsive, and scalable frontend applications using React, Next.js, and modern UI frameworks."
  />

  <meta
    property="og:url"
    content="https://apurvasoftwaresolutions.com/front-end-services"
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
    content="Frontend Development Services"
  />

  <meta
    name="twitter:description"
    content="Create modern, high-performance frontend applications with React and Next.js."
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

