import Subscribe from '../forms/subscribe';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import HomeFooterSeo from '../components/HomeFooterSeo';
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
              <li><i className="bi bi-chevron-right"></i> <a href="/about">About Us</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="/maintenance-support">Maintenance & Support</a></li>
              {/* <li><i className="bi bi-chevron-right"></i> <a href="#portfolio">Portfolio</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#team">Team</a></li> */}
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
     <HomeFooterSeo/>


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
