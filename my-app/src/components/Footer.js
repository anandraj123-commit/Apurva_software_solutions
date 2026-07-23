import Subscribe from '../forms/subscribe';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../assets/css/Footer.css';

const Footer = (props) => {
  const [isBlink, setIsBlink] = useState(true);

  return (
    <footer id="footer" className="footer dark-background w-full max-w-none px-6 ">
        <div className="row">
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
              <li><i className="bi bi-chevron-right"></i> <a href="about">About Us</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="/maintenance-support">Maintenance & Support</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#portfolio">Portfolio</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#team">Team</a></li>
              <li><i className="bi bi-chevron-right"></i> <Link to="/blogs">Blogs</Link></li>
              <li>
                <i className="bi bi-chevron-right"></i>
                <a
                  href="#internship"
                  className={isBlink ? 'blink' : ''}
                  onClick={() => {
                    setIsBlink(false);
                    props.handleInternshipModal(true);
                  }}
                >
                  Internship
                </a>
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
            <Subscribe onSubmitFormRequest={props.onSubmitFormRequest} top="0" lft="0" rtl="0" />
          </div>

        </div>
    

      {/* ✅ SEO KEYWORDS – Visible & Styled */}
      <div className=" footer-seo">
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

      <div className=" footer-seo mt-4">
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
      <div className="copyright text-center mt-4">
        <p>
          © <strong>Apurva Software Solutions</strong> — All Rights Reserved
        </p>
      </div>

    </footer>
  );
};

export default Footer;
