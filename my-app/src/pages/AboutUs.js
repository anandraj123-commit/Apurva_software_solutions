import Stats from '../components/Stats';
import SocialOrbitHero from '../components/SocialOrbitAnimation';
import Client from '../components/Client';
import Services from '../components/Services';
import TeamSection from '../components/TeamSection';
import Hero from '../components/AboutUs/Hero';
import AboutSection from '../components/AboutUs/AboutSection';
import FAQSection from '../components/FAQSection';
import ValuesSection from '../components/AboutUs/ValuesSection';
import Achievements from '../components/AboutUs/Achievements';
import { Helmet } from "react-helmet-async";
const AboutUs=()=>{
    return (
       <>
     <Helmet>
  {/* Basic */}
  <meta charSet="UTF-8" />
  <title>About Us | Apurva Software Solutions</title>

  <meta
    name="description"
    content="Learn about Apurva Software Solutions, our mission, team, and expertise in web development, mobile apps, and digital marketing services."
  />

  <meta
    name="keywords"
    content="about Apurva Software Solutions, software company, web development team, mobile app developers, digital marketing company"
  />

  <meta name="robots" content="index, follow" />

  {/* Mobile */}
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://apurvasoftwaresolutions.com/about"
  />

  {/* Open Graph (Facebook, LinkedIn) */}
  <meta property="og:title" content="About Apurva Software Solutions" />
  <meta
    property="og:description"
    content="Know more about our company, our vision, and how we help businesses grow with technology."
  />
  
  <meta
    property="og:url"
    content="https://apurvasoftwaresolutions.com/about"
  />
  <meta property="og:type" content="website" />
  <meta
    property="og:image"
    content="https://apurvasoftwaresolutions.com/apurvasoftwaresolutions.png"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="About Apurva Software Solutions" />

  <meta
    name="twitter:description"
    content="Discover our journey, expertise, and commitment to delivering high-quality software solutions."
  />

  <meta
    name="twitter:image"
    content="https://apurvasoftwaresolutions.com/apurvasoftwaresolutions.png"
  />

  {/* Extra SEO */}
  <meta name="author" content="Apurva Software Solutions" />
  <meta name="language" content="English" />
  <meta name="revisit-after" content="7 days" />

  {/* Favicon */}
  <link rel="icon" href="/favicon.ico" />
</Helmet>

       <Hero/>
       <AboutSection/>
       <ValuesSection/>
       <Achievements/>
       <Stats/>
       <Services/>
       <Client/>
       <TeamSection/>
       <FAQSection/>
        <SocialOrbitHero bgColor="white"/>
       </>
    )
}

export default AboutUs;
