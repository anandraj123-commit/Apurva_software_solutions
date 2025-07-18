const Footer = () => {
    return (
        <footer id="footer" class="footer dark-background">
            <div class="container footer-top">
                <div class="row gy-4">
                    <div class="col-lg-4 col-md-6 footer-about">
                        <a href="index.html" class="logo d-flex align-items-center">
                            <span class="sitename">Dewi</span>
                        </a>
                        <div class="footer-contact pt-3">
                            <p>Veer Kuwar Singh colony</p>
                            <p>Gaya,Bihar</p>
                            <p class="mt-3"><strong>Phone:</strong> <span>+91 6203253537</span></p>
                            <p><strong>Email:</strong> <span>apurvasoftware.solutions@outlook.com</span></p>
                        </div>
                        <div class="social-links d-flex mt-4">
                            <a href=""><i class="bi bi-twitter-x"></i></a>
                            <a href=""><i class="bi bi-facebook"></i></a>
                            <a href=""><i class="bi bi-instagram"></i></a>
                            <a href=""><i class="bi bi-linkedin"></i></a>
                        </div>
                    </div>

                    <div class="col-lg-2 col-md-3 footer-links">
                        <h4>Useful Links</h4>
                        <ul>
                            <li><i class="bi bi-chevron-right"></i> <a href="#hero">Home</a></li>
                            <li><i class="bi bi-chevron-right"></i> <a href="#about">About us</a></li>
                            <li><i class="bi bi-chevron-right"></i> <a href="#services">Services</a></li>
                            <li><i class="bi bi-chevron-right"></i> <a href="#portfolio">Portfolio</a></li>
                            <li><i class="bi bi-chevron-right"></i> <a href="#team">Teams</a></li>
                        </ul>
                    </div>

                    <div class="col-lg-2 col-md-3 footer-links">
                        <h4>Our Services</h4>
                        <ul>
                            <li><i class="bi bi-chevron-right"></i> <a href="#portfolio">Software Application</a></li>
                            <li><i class="bi bi-chevron-right"></i> <a href="#portfolio">Cloud Solutions</a></li>
                            <li><i class="bi bi-chevron-right"></i> <a href="#portfolio">Cyber Security</a></li>
                            <li><i class="bi bi-chevron-right"></i> <a href="#portfolio">Digital Marketing</a></li>
                            <li><i class="bi bi-chevron-right"></i> <a href="#portfolio">Maintenance & Support</a></li>
                        </ul>
                    </div>
                
                    <div class="col-lg-4 col-md-12 footer-newsletter">
                        <h4> Stay Ahead with Apurva Software Solutions!</h4>
                        <p>Subscribe to our newsletter and receive the latest updates on our innovative software products, technology trends, development insights, and service enhancements — right in your inbox!
                        </p>
                        <form action="forms/newsletter.php" method="post" class="php-email-form">
                            <div class="newsletter-form"><input type="email" name="email"/><input type="submit" value="Subscribe"/></div>
                                <div class="loading">Loading</div>
                                <div class="error-message"></div>
                                <div class="sent-message">Your subscription request has been sent. Thank you!</div>
                            </form>
                            </div>

                    </div>
                </div>

                <div class="container copyright text-center mt-4">
                    <p>© <span>Copyright</span> <strong class="px-1 sitename">Apurva Software Solutions</strong> <span>All Rights Reserved</span></p>
                </div>
        </footer>
    )
}

export default Footer;