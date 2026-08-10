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

  <meta name="keywords" content="Apurva Software Solutions, software company India, IT company profile, web development company, mobile app development company, digital marketing company, custom software development, IT solutions provider, full stack development company, UI UX design company, software development company India, professional web development team India, mobile app developers India, digital transformation company India, startup software development company, enterprise software development services, affordable IT services company India, experienced software developers team, custom web and app development services, leading IT solutions provider India, business software solutions company, scalable software development services, innovative technology company India, web and mobile app development experts, cloud based software development company, secure software development services, agile software development company, ecommerce website development company India, SaaS application development company, cross platform app development company, React and Angular development company, API development services India, backend development company India, frontend development experts India, software consulting services company, IT outsourcing company India, dedicated development team India, hire software developers India, custom enterprise solutions provider, mobile first development company India, responsive web design company India, software maintenance and support services, performance optimization services IT, AI powered software development company, fintech software development company India, healthcare IT solutions provider India, education software development company India, on demand app development company, trusted IT partner for startups" />

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
