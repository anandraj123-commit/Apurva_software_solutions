import Subscribe from '../forms/subscribe';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../assets/css/Footer.css';

const Footer = (props) => {
    const [isBlink, setIsBlink] = useState(true);

    return (
        <footer id="footer" className="footer dark-background">
            <div className="container footer-top">
                <div className="row gy-4">
                    {/* About Company */}
                    <div className="col-lg-4 col-md-6 footer-about">
                        <a href="index.html" className="logo d-flex align-items-center" title="Apurva Software Solutions Home">
                            <span className="sitename" title="Apurva Software Solutions">Apurva Software Solutions</span>
                        </a>
                        <div className="footer-contact pt-3">
                            <p>Veer Kuwar Singh colony</p>
                            <p>Gaya, Bihar</p>
                            <p className="mt-3"><strong>Phone:</strong> <span title="Call Apurva Software Solutions">+91 6203253537</span></p>
                            <p>
                                <strong>Email:</strong>
                                <span title="Email Apurva Software Solutions">apurvasoftware.solutions@outlook.com</span><br />
                                <span title="Support Email for Apurva Software Solutions">supports@apurvasoftwaresolutions.com</span>
                            </p>
                        </div>

                        {/* Social Media Links */}
                        <div className="social-links d-flex mt-4">
                            <a href="https://x.com/ApurvaSoftware" target="_blank" rel="noopener noreferrer" title="Follow us on X (Twitter)">
                                <i className="bi bi-twitter-x" title="Twitter - Apurva Software Solutions"></i>
                            </a>
                            <a href="https://www.facebook.com/apurvasoftwaresolns/" target="_blank" rel="noopener noreferrer" title="Visit our Facebook Page">
                                <i className="bi bi-facebook" title="Facebook - Apurva Software Solutions"></i>
                            </a>
                            <a href="https://www.instagram.com/apurvasoftwaresolutions/" target="_blank" rel="noopener noreferrer" title="Follow us on Instagram">
                                <i className="bi bi-instagram" title="Instagram - Apurva Software Solutions"></i>
                            </a>
                            <a href="https://www.linkedin.com/company/apurva-software-solutions" target="_blank" rel="noopener noreferrer" title="Connect on LinkedIn">
                                <i className="bi bi-linkedin" title="LinkedIn - Apurva Software Solutions"></i>
                            </a>
                            <a href="https://www.youtube.com/@Apurva-Software-Solutions" target="_blank" rel="noopener noreferrer" title="Subscribe on YouTube">
                                <i className="bi bi-youtube" title="YouTube - Apurva Software Solutions"></i>
                            </a>
                        </div>
                    </div>

                    {/* Useful Links */}
                    <div className="col-lg-2 col-md-3 footer-links">
                        <h4 title="Quick navigation links">Useful Links</h4>
                        <ul>
                            <li><i className="bi bi-chevron-right"></i> <Link to="/" title="Home - Apurva Software Solutions">Home</Link></li>
                            <li><i className="bi bi-chevron-right"></i> <a href="#about" title="About Apurva Software Solutions">About us</a></li>
                            <li><i className="bi bi-chevron-right"></i> <a href="#services" title="Services offered by Apurva Software Solutions">Services</a></li>
                            <li><i className="bi bi-chevron-right"></i> <a href="#portfolio" title="Portfolio of Apurva Software Solutions">Portfolio</a></li>
                            <li><i className="bi bi-chevron-right"></i> <a href="#team" title="Our Team at Apurva Software Solutions">Teams</a></li>
                            <li><i className="bi bi-chevron-right"></i> <Link to="/blogs" title="Our Blogs at Apurva Software Solutions">Blogs</Link></li>
                            <li>
                                <i className="bi bi-chevron-right"></i>
                                <a
                                    href="#internship"
                                    title="Internship opportunities at Apurva Software Solutions"
                                    className={`${isBlink ? "blink" : ''}`}
                                    onClick={() => {
                                        setIsBlink(false);
                                        props.handleInternshipModal(true)
                                    }}
                                >
                                    Internship
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Services Links */}
                    <div className="col-lg-2 col-md-3 footer-links">
                        <h4 title="Digital Marketing and Other Services">Our Services</h4>
                        <ul>
                            <li><i className="bi bi-chevron-right"></i> <Link to="/?portfolio=ALL&value=0#portfolio" title="View All Services">All</Link></li>
                            <li><i className="bi bi-chevron-right"></i> <Link to="/?portfolio='Cloud Solutions'&value=1#portfolio" title="Software Application Services">Software Application</Link></li>
                            <li><i className="bi bi-chevron-right"></i> <Link to="/?portfolio=Software Application&value=2#portfolio" title="Cloud Solutions Services">Cloud Solutions</Link></li>
                            <li><i className="bi bi-chevron-right"></i> <Link to="/?portfolio='Cyber Security'&value=3#portfolio" title="Cyber Security Services">Cyber Security</Link></li>
                            <li><i className="bi bi-chevron-right"></i> <Link to="/?portfolio='Digital Marketing'&value=4#portfolio" title="Digital Marketing Services">Digital Marketing</Link></li>
                            <li><i className="bi bi-chevron-right"></i> <Link to="/?portfolio='Maintenance & Support'&value=5#portfolio" title="Maintenance & Support Services">Maintenance & Support</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="col-lg-4 col-md-12 footer-newsletter subscribe">
                        <h4 title="Subscribe for updates from Apurva Software Solutions">Stay Ahead with Apurva Software Solutions!</h4>
                        <p title="Get regular updates on our software and marketing services">
                            Subscribe to our newsletter and receive the latest updates on our innovative software products, technology trends, development insights, and service enhancements — right in your inbox!
                        </p>
                        <Subscribe onSubmitFormRequest={props.onSubmitFormRequest} />
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="container copyright text-center mt-4">
                <p>© <span>Copyright</span> <strong className="px-1 sitename" title="Apurva Software Solutions">Apurva Software Solutions</strong> <span>All Rights Reserved</span></p>
            </div>
        </footer>
    );
}

export default Footer;
