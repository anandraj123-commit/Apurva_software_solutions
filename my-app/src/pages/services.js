import "../assets/css/services.css";
import { Link } from 'react-router-dom';
import '../assets/css/Footer.css';
import useEmailSender from '../components/hooks/useEmailSender';
import Contact from "../forms/contact";

export default function HeroServices() {
  const { sendEmails } = useEmailSender();
  async function onSubmitFormRequest(formData,INFOTYPE) {
    return await sendEmails(formData,INFOTYPE);
  }
  return (
    <>
    <section className="hero-services">
      <div className="container">
        {/* LOGO ROW */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="hero-logo">
            <Link to="/" aria-label="Apurva Software Solutions Home">
             <img src="/img/logo3.png" alt="Apurva Software Solutions Logo"/>
           </Link>
            </div>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="row align-items-center">
          {/* LEFT CONTENT */}
          <div className="col-lg-7 text-white">
            <h1 className="hero-title">We Manage Your Website</h1>

            <p className="hero-description">
              Let our Experts take care of your website so that you can focus on your business.
            </p>

            <h6 className="mt-4 plan-title">What we offer in annual Plan</h6>

            <div className="row g-3 mt-2">
              {[
                "Website Design & Development",
                "Mobile Application Development",
                "24×7×365 Website Monitoring",
                "Unlimited Technical Support",
                "Content Edit",
                "Website Maintenance",
                "Domain Hosting Assistance",
                "Website Security Management",
                "Regular Backup",
                "SEO,SMM,Local SEO,Google AdWords & Meta Ads"
              ].map((item, index) => (
                <div className="col-md-4" key={index}>
                  <div className="info-card">{item}</div>
                </div>
              ))}
            </div>

            <p className="free-text mt-4">
              Get One Month Free Maintenance
            </p>

            <button
             className="btn btn-primary btn-lg mt-2"
             onClick={() => {
             document.getElementById("contact")?.scrollIntoView({
             behavior: "smooth",
            });
      }}
>
  Contact Us →
</button>
          </div>

          {/* RIGHT IMAGE GRID */}
          <div className="col-lg-5 image-grid">
            <ImageBox color="green" img="https://randomuser.me/api/portraits/women/44.jpg" />
            <ImageBox color="orange" img="https://randomuser.me/api/portraits/men/32.jpg" />
            <ImageBox color="yellow" img="https://randomuser.me/api/portraits/men/54.jpg" />
            <ImageBox color="blue" img="https://randomuser.me/api/portraits/women/68.jpg" />
          </div>
        </div>
      </div>
    </section>

<section class="hero-benefits-section py-5">
<div class="container">
  <div class="text-center mb-5">
    <h2 class="benefits-title">
      What Are The Benefits Of
      <span class="highlight-text"> Website Maintenance</span>
    </h2>
    <p class="benefits-subtitle">
      Willing to give your visitors a smooth experience?
    </p>
  </div>
  <div class="row g-4">
    <div class="col-lg-6">
      <div class="benefit-card">
        <div class="icon purple">
          <i class="fa-solid fa-brain"></i>
        </div>
        <h4>Peace of Mind</h4>
        <p>
          Give all your worries upon our shoulders and keep peace of your mind.
        </p>
        <ul>
          <li>Regular Backup</li>
          <li>24×7 Uptime Monitoring and Action</li>
          <li>Team of Passionate Developers</li>
          <li>Hand-Holding Support</li>
          <li>Consultation with Expert as Needs</li>
        </ul>
      </div>
    </div>

   
    <div class="col-lg-6">
      <div class="benefit-card">
        <div class="icon orange">
          <i class="fa-solid fa-chart-line"></i>
        </div>
        <h4>Website Peak Performance</h4>
        <p>
          The Core Focus of the Services is to reach your website’s peak performance.
        </p>
        <ul>
          <li>Optimize Website Speed & Performance</li>
          <li>Best Caching Implementation</li>
          <li>Optimize images and reduce size up to 90%</li>
          <li>Compression Techniques for Fast Download</li>
          <li>Get rid of spam comments</li>
        </ul>
      </div>
    </div>

    <div class="col-lg-6">
        <div class="benefit-card">
          <div class="icon orange">
            <i class="fa-solid fa-screwdriver-wrench"></i>
          </div>

          <h4>Professional Maintenance</h4>
          <p>
            Regularly we do check-ups and updates of all your core files,
            plugins, and themes.
          </p>

          <ul>
            <li>Regular Core Update</li>
            <li>Consistent Plugin Update</li>
            <li>Theme update for a fresh experience</li>
            <li>Deleted unused themes and plugins</li>
            <li>Regularly find & fix broken links</li>
          </ul>
        </div>
      </div>

    
      <div class="col-lg-6">
        <div class="benefit-card">
          <div class="icon blue">
          <i class="fa-solid fa-chart-line"></i>

          </div>

          <h4>Increase Traffic, Boost Ranking</h4>
          <p>
            Get all the support to rank on Google, and make it visible
            to local and global customers.
          </p>

          <ul>
            <li>SEO Redirect Support</li>
            <li>Broken link fix</li>
            <li>Search Console Issue Fix</li>
            <li>Google Analytics Integration</li>
            <li>Sitemap submit to Search Console</li>
          </ul>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="benefit-card">
        <div class="icon pink">
            <i class="bi bi-shield-check"></i>
          </div>

          <h4>Privacy, Security & Protection</h4>
          <p>
            From the moment you opt for our services be carefree about the
            security of your site. We remove all the malware and clean up
            your site from various security threats.
          </p>

          <ul>
            <li>Clean up logs and database</li>
            <li>Scan and Remove Malware</li>
            <li>Firewall Setup and Virus Protection</li>
            <li>Automated Security Scan</li>
            <li>Spam and Phishing Prevention</li>
          </ul>
        </div>
      </div>
      
      <div class="col-lg-6">
        <div class="benefit-card">
          <div class="icon red">
            <i class="fa-solid fa-triangle-exclamation"></i>
          </div>

          <h4>Emergency Fix & Protection</h4>
          <p>
            We monitor your site continuously with the help of our 24×7
            monitoring. We ensure that your site never goes down and is
            safe from any kind of brute-force attacks.
          </p>

          <ul>
            <li>Diagnose and Fix Errors as they appear</li>
            <li>Constant Monitoring for Database Errors</li>
            <li>Debug Chronic Issues</li>
            <li>Brute-force Attacker Protection</li>
            <li>Captcha Protection</li>
          </ul>
        </div>
      </div>

     
      <div class="col-lg-6">
        <div class="benefit-card">
          <div class="icon green">
            <i class="bi bi-phone"></i>
          </div>

          <h4>Mobile & Browser Optimization</h4>
          <p>
            We ensure that you never get penalized due to being non-responsive
            to any section of your website. Any non-responsive issue we address
            to make it fully responsive.
          </p>

          <ul class="icon-list">
            <li>Minor Mobile Responsiveness Issue Resolution</li>
            <li>Browser Caching for Mobile Speed</li>
            <li>Gzip Caching Implementation</li>
            <li>Lazy Load for Performance</li>
            <li>Solving Alignment Issues</li>
          </ul>
        </div>
      </div>


      <div class="col-lg-6">
        <div class="benefit-card">
          <div class="icon yellow">
            <i class="bi bi-percent"></i>
          </div>

          <h4>Increase Conversion Rate</h4>
          <p>
            Our Web Care service will certainly improve your conversion rate by
            making everything work fine all the time.
          </p>

          <ul class="icon-list">
            <li>CDN Implementation</li>
            <li>Implement Conversion-Friendly Changes</li>
            <li>Assistance for your Marketing Campaign</li>
            <li>Implementing Third-Party Scripts</li>
            <li>Conversion Consultation as Required</li>
          </ul>
        </div>
      </div>

      <div class="col-12">
        <div class="benefit-card">

          <div class="icon purple mb-3">
            <i class="bi bi-hand-thumbs-up"></i>
          </div>

          <h4>Clarity of Deliverability</h4>
          <p>
            We ensure that you are getting what you have paid for. It is also to
            make sure that you are up to date with the operations that we are
            doing on your site.
          </p>

          <ul class="icon-list">
            <li> Monthly preventive activity report</li>
            <li> Advanced performance report</li>
            <li> Uptime monitoring report</li>
            <li>Ticket insight report</li>
            <li>Google Analytics traffic report</li>
          </ul>

        </div>
      </div>

  </div>
</div>
</section>

<section id="contact" className="contact section">
        <div className="container section-title text-center">
          <h2>Contact</h2>
          <p>Apurva Software Solutions - We build what you truly need.</p>
        </div>
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-6 col-md-12">
              <div className="row gy-4">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="info-item d-flex flex-column justify-content-center align-items-center">
                    <i className="bi bi-geo-alt"></i>
                    <h3>Address</h3>
                    <p>Veer Kuwar Singh Colony, Gaya, Bihar</p>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="info-item d-flex flex-column justify-content-center align-items-center">
                    <i className="bi bi-telephone"></i>
                    <h3>Call Us</h3>
                    <p>+91 6203253537</p>
                    <p>+91 9629776056</p>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="info-item d-flex flex-column justify-content-center align-items-center">
                    <i className="bi bi-envelope"></i>
                    <h3>Email Us</h3>
                    {/* <p>apurvasoftware.solutions@outlook.com</p> */}
                    <p>supports@apurvasoftwaresolutions.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <Contact onSubmitFormRequest={onSubmitFormRequest} />
            </div>
          </div>
        </div>
      </section>

<section class="maintenance-process py-5">
  <div class="container text-center">

    <h2 class="section-title">Website Development & Maintenance Process</h2>
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
    <h2 class="text-center fw-bold mb-4">
      Frequently Asked <span class="text-purple">Questions</span>
    </h2>

    <div class="accordion faq-accordion" id="faqAccordion">

      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#faq1">
            As a known software development company, what services do you offer?
          </button>
        </h2>
        <div id="faq1" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
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



<footer id="footer" className="footer dark-background">

<div className="container footer-top">
  <div className="row gy-4">

    {/* About Company */}
    <div className="col-lg-4 col-md-6 footer-about">
      <a href="/" className="logo d-flex align-items-center" title="Apurva Software Solutions Home">
        <span className="sitename">Apurva Software Solutions</span>
      </a>

      <div className="footer-contact pt-3">
        <p>Veer Kuwar Singh Colony</p>
        <p>Gaya, Bihar</p>
        <p className="mt-3">
          <strong>Phone:</strong>{' '}
          <span title="Call Apurva Software Solutions">+91 6203253537</span>
        </p>
        <p>
          <strong>Email:</strong>{' '}
          <span title="Support Email">supports@apurvasoftwaresolutions.com</span>
        </p>
      </div>

      {/* Social Links */}
      <div className="social-links d-flex mt-4">
        <a href="https://x.com/ApurvaSoftware" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-twitter-x"></i>
        </a>
        <a href="https://www.facebook.com/apurvasoftwaresolns/" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-facebook"></i>
        </a>
        <a href="https://www.instagram.com/apurvasoftwaresolutions/" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/company/apurva-software-solutions" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-linkedin"></i>
        </a>
        <a href="https://www.youtube.com/@Apurva-Software-Solutions" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-youtube"></i>
        </a>
      </div>
    </div>

    {/* Useful Links */}
    <div className="col-lg-2 col-md-3 footer-links">
      <h4>Useful Links</h4>
      <ul>
        <li><i className="bi bi-chevron-right"></i> <Link to="/">Home</Link></li>
        <li><i className="bi bi-chevron-right"></i> <a href="/#about">About Us</a></li>
        <li><i className="bi bi-chevron-right"></i> <a href="/#services">Services</a></li>
        <li><i className="bi bi-chevron-right"></i> <a href="/#portfolio">Portfolio</a></li>
        <li><i className="bi bi-chevron-right"></i> <a href="/#team">Team</a></li>
        <li><i className="bi bi-chevron-right"></i> <Link to="/blogs">Blogs</Link></li>
        <li>
          <i className="bi bi-chevron-right"></i>
          <Link to = "/#internship">Internship</Link>
        </li>
      </ul>
    </div>

    {/* Services Links */}
    <div className="col-lg-2 col-md-3 footer-links">
      <h4>Our Services</h4>
      <ul>
        <li><i className="bi bi-chevron-right"></i> Software Development</li>
        <li><i className="bi bi-chevron-right"></i> SPA Development</li>
        <li><i className="bi bi-chevron-right"></i> PWA Applications</li>
        <li><i className="bi bi-chevron-right"></i> Cloud Solutions</li>
        <li><i className="bi bi-chevron-right"></i> Cyber Security</li>
        <li><i className="bi bi-chevron-right"></i> Digital Marketing</li>
      </ul>
    </div>

    {/* Newsletter */}
    <div className="col-lg-4 col-md-12 footer-newsletter subscribe">
      <h4>Stay Ahead with Apurva Software Solutions</h4>
      <p>
        Subscribe to receive the latest updates on software development,
        PWA solutions, SPA performance, and digital innovation.
      </p>
      {/* <Subscribe onSubmitFormRequest={props.onSubmitFormRequest} /> */}
    </div>

  </div>
</div>

{/* ✅ SEO KEYWORDS – Visible & Styled */}
<div className="container footer-seo mt-4">
<p className="footer-seo-text">
<strong>Expertise:</strong>{' '}
Software Development Company in India • Custom Software Development Services •
Enterprise Software Solutions • Scalable Software Development •
Cost-Effective Software Solutions • Agile Software Development •
End-to-End Software Development • Secure Software Development •
Software Development for Startups • Software Development for MSMEs •
Single Page Application (SPA) Development • SPA Development Services •
Fast SPA Applications • High-Performance SPA •
SPA with React • SPA with Angular •
SPA Performance Optimization • SEO-Friendly SPA Development •
Lightweight Single Page Applications • Responsive SPA Design •
Progressive Web Application (PWA) Development • PWA Development Services •
Fast PWA Applications • Offline-First PWA •
Installable Web Applications • PWA for Android and iOS •
Secure PWA Development • High-Performance PWA Apps •
Modern Web Application Development • Fast & Responsive Web Applications •
Custom Web Application Solutions • Cloud-Based Web Applications •
Business Web Application Development • Secure Web App Development •
Mobile App Development Services • Android App Development •
iOS App Development • Cross-Platform App Development •
Hybrid Mobile App Development • Business Mobile Applications •
IT Solutions for Startups • Startup MVP Development •
MVP Software Development • Product Development for Startups •
MSME Digital Transformation • Affordable IT Services for MSMEs •
Growth-Oriented Software Solutions • Performance-Optimized Applications •
Core Web Vitals Optimization • High-Speed Web Development •
Optimized Frontend & Backend Development •
React.js Development Services • Angular Development Company •
Next.js Application Development • Node.js Backend Development •
MongoDB & MySQL Database Solutions • MERN & MEAN Stack Development •
Full Stack Development Services • Cloud Application Development •
Microservices Architecture • API Development Services •
Business Process Automation • CRM & ERP Software Development •
Workflow Automation Solutions • UI/UX Design Services •
Mobile-First & Responsive Design • SEO-Friendly Web Development •
Secure Authentication & Data Protection • Software Maintenance & Support •
Application Optimization Services • Digital Transformation Services •
Legacy System Modernization • Technology Modernization Solutions •
Trusted Software Development Company • Reliable IT Partner •
Professional Software Services • Software Development Company in Bihar •
Software Company in Gaya • Indian Software Development Company •
Business Growth Through Technology • ROI-Focused Software Development •
Scalable Digital Platforms • High-Impact Software Products •
Modern Application Architecture • Real-Time Web Applications •
Best Software Development Company • End-to-End Digital Solutions •
Apurva Software Solutions
</p>
</div>

<div className="container footer-seo mt-4">
<p className="footer-seo-text">
<strong>Why Choose Apurva Software Solutions:</strong>{' '}
Trusted Software Development Company in India •
Pan-India Software Development Services •
Serving Clients Across India •
Remote Software Development Company •
Software Development Company Based in Gaya, Bihar •
Delivering Digital Solutions Across India •
Reliable IT Partner for Startups & MSMEs •
Cost-Effective Software Development Solutions •
Affordable Software Development Services in India •
Startup-Friendly Development Approach •
MSME-Focused Digital Solutions •
Scalable Software Architecture •
Secure & Robust Application Development •
Performance-Optimized Web Applications •
Fast & Responsive Web Application Development •
Single Page Application (SPA) Development Experts •
High-Performance SPA Development •
SEO-Friendly SPA Development •
Progressive Web Application (PWA) Development Company •
Fast PWA Applications •
Offline-First PWA Solutions •
Installable Web Applications •
Web Apps That Work Like Mobile Apps •
Modern Web Application Development •
Custom Software Development Services •
Tailor-Made Software Solutions •
Business-Oriented Software Development •
Mobile App Development Services •
Android App Development Company •
iOS App Development Services •
Cross-Platform Mobile App Development •
Hybrid App Development Solutions •
Enterprise-Grade Software Development •
Cloud-Based Application Development •
Scalable Cloud Solutions •
API Development & Integration Services •
Microservices Architecture Development •
High Availability Application Design •
React.js Development Services •
Angular Development Company •
Next.js Application Development •
Node.js Backend Development •
MongoDB & MySQL Database Solutions •
MERN Stack Development •
MEAN Stack Development •
Full Stack Software Development Services •
Agile Software Development Methodology •
Rapid MVP Development for Startups •
MVP Software Development Company •
Faster Time-to-Market Solutions •
Business Automation Software Development •
Workflow Automation Solutions •
CRM Software Development •
ERP Software Development Services •
Inventory & Billing Software Solutions •
Custom Business Dashboards •
UI/UX Focused Application Development •
User-Centric Software Design •
Mobile-First & Responsive Design •
Clean & Modern UI Development •
High-Speed Web Performance Optimization •
Core Web Vitals Optimization •
SEO-Optimized Web Development •
Search Engine Friendly Applications •
Google-Friendly SPA & PWA Development •
Secure Authentication Systems •
Data Protection & Application Security •
Role-Based Access Control Solutions •
Secure Payment Gateway Integration •
Reliable Software Maintenance & Support •
Long-Term Application Support Services •
Performance Monitoring & Optimization •
Bug Fixing & Version Upgrades •
Digital Transformation Services •
Legacy System Modernization •
Technology Modernization Solutions •
Business Digitalization Services •
Paperless Business Solutions •
Smart Digital Platforms •
Innovation-Driven Software Development •
Future-Ready Application Development •
Trusted Indian Software Development Company •
Professional IT Services Provider •
Customer-Centric Development Process •
Transparent Pricing Model •
On-Time Project Delivery •
Dedicated Development Team •
End-to-End Project Ownership •
Quality-Driven Software Engineering •
Long-Term Technology Partner •
ROI-Focused Software Development •
Business Growth Through Technology •
Scalable Digital Platforms •
High-Impact Software Products •
Real-Time Web Application Development •
Modern Application Architecture •
Enterprise SPA & PWA Solutions •
Serving Delhi, Mumbai, Bengaluru, Hyderabad, Chennai, Pune, Kolkata,
Ahmedabad, Noida, Gurugram, Patna, Ranchi, and All Over India via Remote Delivery •
Best Software Development Company for Startups •
End-to-End Digital Solutions Provider •
Apurva Software Solutions
</p> 
</div>


{/* Copyright */}
<div className="container copyright text-center mt-4">
  <p>
    © <strong>Apurva Software Solutions</strong> — All Rights Reserved
  </p>
</div>

</footer>
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
