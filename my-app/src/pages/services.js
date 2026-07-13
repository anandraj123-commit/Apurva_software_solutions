import "../assets/css/services.css";
import { Link } from 'react-router-dom';
import '../assets/css/Footer.css';
import useEmailSender from '../components/hooks/useEmailSender';
import Contact from "../forms/contact";
import Hero from '../components/services/Hero';


export default function HeroServices() {
  const { sendEmails } = useEmailSender();
  async function onSubmitFormRequest(formData,INFOTYPE) {
    return await sendEmails(formData,INFOTYPE);
  }
  return (
    <>
    <img src="/img/website-mainteance-image.png"/>

<section class="maintenance-process py-5">
  <div class="container text-center">
  <h2 className="text-3xl font-bold">
        Website Development &{" "}
          <span className="bg-[#ff4a17] bg-clip-text text-transparent">
          Maintenance Process
          </span>
      </h2>
        <div className="w-20 h-[2px] bg-[#ff4a17] mx-auto mt-4"></div>
        <p class="section-subtitle">
      Having decades of experience, we have developed processes and systems
      from onboarding to satisfaction.
    </p>
  
    <div class="row mt-5">

      <div class="col-md-3 col-sm-6 mb-4">
        <span class="step-label">Step 01</span>
        <div class="step-icon yellow">
          <i class="bi bi-lightbulb"></i>
        </div>
        <h5>Get a Quote</h5>
        <p class="step-subtitle">Detailed Scope</p>
        <p class="step-desc">
          Get an instant detailed scope of work quote.
        </p>
      </div>

    
      <div class="col-md-3 col-sm-6 mb-4">
        <span class="step-label">Step 02</span>
        <div class="step-icon blue">
          <i class="bi bi-pencil-square"></i>
        </div>
        <h5>Pick a Plan</h5>
        <p class="step-subtitle">Tailored Made For You</p>
        <p class="step-desc">
          Choose the right plan suitable for your website.
        </p>
      </div>

     
      <div class="col-md-3 col-sm-6 mb-4">
        <span class="step-label">Step 03</span>
        <div class="step-icon purple">
          <i class="bi-person-check"></i>
        </div>
        <h5>Onboard</h5>
        <p class="step-subtitle">To the Program</p>
        <p class="step-desc">
          Intense onboarding optimization to improve performance.
        </p>
      </div>

      
      <div class="col-md-3 col-sm-6 mb-4">
        <span class="step-label">Step 04</span>
        <div class="step-icon orange">
          <i class="bi bi-headset"></i>
        </div>
        <h5>Get Support</h5>
        <p class="step-subtitle">Ongoing & Unparalleled Support</p>
        <p class="step-desc">
          Be relaxed now! You are backed by the most advanced technical team.
        </p>
      </div>

    </div>
  </div>
</section>

<section class="faq-section py-5">
  <div class="container">
    <div class="text-center">
  <h2 className="text-3xl font-bold">
        Frequently{" "}
          <span className="bg-[#ff4a17] bg-clip-text text-transparent">
          Asked Question
          </span>
      </h2>
      <div className="w-20 h-[2px] bg-[#ff4a17] mx-auto mt-4"></div>
      </div>

    <div class="accordion faq-accordion" id="faqAccordion">

      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#faq1">
            As a known software development company, what services do you offer?
          </button>
        </h2>
        <div id="faq1" class="accordion-collapse collapse text-black" data-bs-parent="#faqAccordion">
          <div class="accordion-body">
            We offer custom software development, web & mobile apps, UI/UX design,
            cloud solutions, cybersecurity, SEO, and maintenance services.
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#faq2">
            Does your company work with all types of technology and platforms?
          </button>
        </h2>
        <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
          <div class="accordion-body">
            Yes, we work with MERN, MEAN, React, Angular, Node.js, cloud platforms,
            and custom enterprise solutions.
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#faq3">
            Do you provide after-development services?
          </button>
        </h2>
        <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
          <div class="accordion-body">
            Absolutely. We provide maintenance, monitoring, security updates,
            performance optimization, and support plans.
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#faq4">
            Does your company work in a zero time zone?
          </button>
        </h2>
        <div id="faq4" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
          <div class="accordion-body">
            Yes, we provide flexible working hours and support clients globally
            across time zones.
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#faq5">
            How much time will it take to develop the software?
          </button>
        </h2>
        <div id="faq5" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
          <div class="accordion-body">
            Timelines depend on project scope, complexity, and integrations.
            We provide a clear milestone-based plan before starting.
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<Contact/>


</>
  );
}

function ImageBox({ color, img }) {
  return (
    <div className={`img-box ${color}`}>
      <img src={img} alt="Team Member" />
    </div>
  );
}
