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

        <meta name="keywords" content="discuss your project, software development consultation, IT consultation services India, web development consultation, mobile app development consultation, custom software consultation services, free project consultation IT company, hire software developers consultation, request project discussion India, get software project estimate, web application development consultation, mobile app project planning services, startup software consultation India, enterprise IT consultation services, digital transformation consultation company, UI UX design consultation services, cloud solutions consultation India, SaaS development consultation company, ecommerce project consultation services, API development consultation India, dedicated development team consultation, hire developers for project discussion, business software solutions consultation, IT project requirement analysis services, software architecture consultation India, product development consultation services, MVP development consultation for startups, agile software consultation services, technology consulting company India, digital product strategy consultation, performance optimization consultation services, software maintenance consultation, secure software development consultation, DevOps consultation services India, cloud migration consultation company, AI software development consultation, fintech software consultation services, healthcare IT consultation India, education software consultation services, on demand app development consultation, cross platform app consultation services, React and Node.js consultation company, scalable software solutions consultation, custom enterprise software consultation, business automation consultation services, IT outsourcing consultation India, project planning and roadmap consultation, full stack development consultation services, affordable IT consultation company India, trusted software partner consultation"/>
   

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