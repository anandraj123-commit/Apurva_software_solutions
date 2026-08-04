import Hero from "../components/ContactUs/Hero";
import Contact from "../forms/contact";
import Client from "../components/Client";
import Mastermind from '../components/ContactUs/Mastermind'
import { Helmet } from "react-helmet-async";
const ContactUs=()=>{
    return (
        <>
        <Helmet>
  {/* Basic */}
  <meta charSet="UTF-8" />
  <title>Contact Us | Apurva Software Solutions</title>

  <meta
    name="description"
    content="Get in touch with Apurva Software Solutions for web development, mobile apps, and digital solutions. Contact us today to start your project."
  />

  <meta
    name="keywords"
    content="contact Apurva Software Solutions, software company contact, web development inquiry, mobile app development contact"
  />

  <meta name="robots" content="index, follow" />

  {/* Mobile */}
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://apurvasoftwaresolutions.com/contact"
  />

  {/* Open Graph (Facebook, LinkedIn) */}
  <meta property="og:title" content="Contact Apurva Software Solutions" />
  <meta
    property="og:description"
    content="Reach out to our team for expert web, mobile app, and software development services."
  />
  <meta
    property="og:url"
    content="https://apurvasoftwaresolutions.com/contact"
  />
  <meta property="og:type" content="website" />
  <meta
    property="og:image"
    content="https://apurvasoftwaresolutions.com/apurvasoftwaresolutions.png"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Contact Apurva Software Solutions" />
  <meta
    name="twitter:description"
    content="Connect with us to discuss your next web or mobile app project."
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
       <Mastermind/>
       <Contact/>
       <Client/>
        </>
    )
}

export default ContactUs;