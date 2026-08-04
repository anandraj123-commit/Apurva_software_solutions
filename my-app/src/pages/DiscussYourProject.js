import { useState } from "react";
import "../assets/scss/DiscussYourProject.scss";
import Hero from "../components/DiscussYourProject/Hero";
import DiscussYourProjectForm from '../forms/DiscussYourProjectForm';
import { Helmet } from "react-helmet-async";
const DiscussYourProject = () => {
  return (
    <>

<Helmet>
        <title>Discuss Your Project | Apurva Software Solutions</title>

        <meta
          name="description"
          content="Discuss your project with Apurva Software Solutions. Get expert consultation for web development, mobile apps, and custom software solutions tailored to your business."
        />

        <meta
          name="keywords"
          content="discuss project, software consultation, web development company, mobile app development, custom software services"
        />

        <meta name="robots" content="index, follow" />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://apurvasoftwaresolutions.com/discussYourProject"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Discuss Your Project" />
        <meta
          property="og:description"
          content="Talk to experts and turn your ideas into powerful digital solutions."
        />
        <meta
          property="og:url"
          content="https://apurvasoftwaresolutions.com/discussYourProject"
        />
        <meta property="og:type" content="website" />

        <meta
          property="og:image"
          content="https://apurvasoftwaresolutions.com/apurvasoftwaresolutions.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Discuss Your Project" />
        <meta
          name="twitter:description"
          content="Get expert consultation for your next project."
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
      <div className="w-full discussYourProject">

{/* ================= HERO SECTION ================= */}
<Hero />
{/* ================= FORM SECTION ================= */}
<DiscussYourProjectForm/>
</div>
    
    </>
 
  );
};

export default DiscussYourProject;