import Subscribe  from '../forms/subscribe';
import { Link } from 'react-router-dom';
const Footer = (props) => {
    return (
        <footer id="footer" className="footer dark-background">
            <div className="container footer-top">
                <div className="row gy-4">
                    <div className="col-lg-4 col-md-6 footer-about">
                        <a href="index.html" className="logo d-flex align-items-center">
                            <span className="sitename">Apurva Software Solutions</span>
                        </a>
                        <div className="footer-contact pt-3">
                            <p>Veer Kuwar Singh colony</p>
                            <p>Gaya,Bihar</p>
                            <p className="mt-3"><strong>Phone:</strong> <span>+91 6203253537</span></p>
                            <p><strong>Email:</strong> <span>apurvasoftware.solutions@outlook.com</span><br></br>
                            <span>supports@apurvasoftwaresolutions.com</span></p>
                        </div>
                        <div className="social-links d-flex mt-4">
                            <a href="#"><i className="bi bi-twitter-x"></i></a>
                            <a href="#"><i className="bi bi-facebook"></i></a>
                            <a href="#"><i className="bi bi-instagram"></i></a>
                            <a href="#"><i className="bi bi-linkedin"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-3 footer-links">
                        <h4>Useful Links</h4>
                        <ul>
                            <li><i className="bi bi-chevron-right"></i> <Link to="/">Home</Link></li>
                            <li><i className="bi bi-chevron-right"></i> <a href="#about">About us</a></li>
                            <li><i className="bi bi-chevron-right"></i> <a href="#services">Services</a></li>
                            <li><i className="bi bi-chevron-right"></i> <a href="#portfolio">Portfolio</a></li>
                            <li><i className="bi bi-chevron-right"></i> <a href="#team">Teams</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-md-3 footer-links">
                        <h4>Our Services</h4>
                        <ul>
                            <li><i className="bi bi-chevron-right"></i> <Link to="/?portfolio='Software Application'">Software Application</Link></li>
                            <li><i className="bi bi-chevron-right"></i> <Link to="/?portfolio='Cloud Solutions'">Cloud Solutions</Link></li>
                            <li><i className="bi bi-chevron-right"></i> <Link to="/?portfolio='Cyber Security'">Cyber Security</Link></li>
                            <li><i className="bi bi-chevron-right"></i> <Link to="/?portfolio='Digital Marketing'">Digital Marketing</Link></li>
                            <li><i className="bi bi-chevron-right"></i> <Link to="/?portfolio='Maintenance & Support'">Maintenance & Support</Link></li>
                        </ul>
                    </div>
                
                    <div className="col-lg-4 col-md-12 footer-newsletter subscribe">
                        <h4> Stay Ahead with Apurva Software Solutions!</h4>
                        <p>Subscribe to our newsletter and receive the latest updates on our innovative software products, technology trends, development insights, and service enhancements — right in your inbox!
                        </p>
                        <Subscribe onSubmitFormRequest = {props.onSubmitFormRequest}/>
                            </div>
                    </div>
                </div>

                <div className="container copyright text-center mt-4">
                    <p>© <span>Copyright</span> <strong className="px-1 sitename">Apurva Software Solutions</strong> <span>All Rights Reserved</span></p>
                </div>
        </footer>
    )
}

export default Footer;