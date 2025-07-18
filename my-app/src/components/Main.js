import ImageCarousel from './Slider';
import PortfolioBasicTabs from './Tabs';
import FeaturesTab from './FeaturesTab';
const Main = () => {
    return (
        <main class="main">
            <section id="hero" class="hero section dark-background">
                <img src="/img/hero-bg.jpg" alt="" />
                <div class="container d-flex flex-column align-items-center">
                    <h2>Plan. Build. Grow.</h2>
                    <p>We craft solutions that empower growing businesses worldwide with innovation and impact.</p>
                    <div class="d-flex mt-4">
                        <a href="#about" class="btn-get-started">Get Started</a>
                        <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" class="glightbox btn-watch-video d-flex align-items-center"><i class="bi bi-play-circle"></i><span>Watch Video</span></a>
                    </div>
                </div>

            </section>
            <section id="about" class="about section">

                <div class="container">

                    <div class="row gy-4">
                        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                            <h3>Empowering businesses through intelligent technology and purposeful innovation.</h3>
                            <img src="img/about.jpg" class="img-fluid rounded-4 mb-4" alt="" />
                            <p>We strive to exceed expectations with every line of code — delivering value where others see complexity, and building trust through transparency, innovation, and integrity.</p>
                            <p>At Apurva Software Solutions, we embrace challenges others shy away from. With precision and purpose, we deliver reliable, tailored solutions that simplify complexity. Our team is driven by innovation, guided by integrity, and committed to delivering value that goes beyond expectations. We don't just build software — we build trust, clarity, and long-lasting partnerships.</p>
                        </div>
                        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="250">
                            <div class="content ps-0 ps-lg-5">
                                <p class="fst-italic">
                                At Apurva Software Solutions, we are dedicated to crafting innovative digital experiences through thoughtful design and seamless development. With a focus on quality, performance, and user-centric solutions, we transform your ideas into intelligent, scalable software that drives success.
                                </p>
                                <ul>
                                    <li><i class="bi bi-check-circle-fill"></i> <span>We deliver solutions that work — with seamless performance, smart design, and a commitment to your business goals.</span></li>
                                    <li><i class="bi bi-check-circle-fill"></i> <span>We take pride in delivering quality that speaks for itself — with every product built to perform flawlessly and delight users at every touchpoint.</span></li>
                                    <li><i class="bi bi-check-circle-fill"></i> <span>At Apurva Software Solutions, we don’t just deliver code — we craft experiences. Our solutions are designed to simplify complexity, empower users, and create lasting impact without compromise.</span></li>
                                </ul>
                                <p>
                                At Apurva Software Solutions, we believe in delivering only what truly adds value — no fluff, no shortcuts. Every solution we craft is designed with precision, built for performance, and tested for real-world impact. We ensure a seamless experience, free from unnecessary complications, guided by trust, innovation, and a passion for excellence.
                                </p>

                                <div class="position-relative mt-4">
                                    <img src="img/about-2.jpg" class="img-fluid rounded-4" alt="" />
                                    <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" class="glightbox pulsating-play-btn"></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>


            <section id="stats" class="stats section light-background">

                <div class="container">

                    <div class="row gy-4">

                        <div class="col-lg-3 col-md-6">
                            <div class="stats-item d-flex align-items-center w-100 h-100">
                                <i class="bi bi-emoji-smile color-blue flex-shrink-0"></i>
                                <div>
                                    <span class="purecounter">232</span>
                                    <p>Happy Clients</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6">
                            <div class="stats-item d-flex align-items-center w-100 h-100">
                                <i class="bi bi-journal-richtext color-orange flex-shrink-0"></i>
                                <div>
                                    <span class="purecounter">551</span>
                                    <p>Projects</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="stats-item d-flex align-items-center w-100 h-100">
                                <i class="bi bi-headset color-green flex-shrink-0"></i>
                                <div>
                                    <span class="purecounter">324</span>
                                    <p>Hours Of Support</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6">
                            <div class="stats-item d-flex align-items-center w-100 h-100">
                                <i class="bi bi-people color-pink flex-shrink-0"></i>
                                <div>
                                    <span>15</span>
                                    <p>Hard Workers</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </section>


            <section id="services" class="services section">
                <div class="container section-title">
                    <h2>Services</h2>
                    <p>Featured Srvices<br /></p>
                </div>
                <div class="container">
                    <div class="row gy-5">
                        <div class="col-xl-4 col-md-6">
                            <div class="service-item">
                                <div class="img">
                                    <img src="img/services-1.jpg" class="img-fluid" alt="" />
                                </div>
                                <div class="details position-relative">
                                    <div class="icon">
                                        <i class="bi bi-activity"></i>
                                    </div>
                                    <a href="service-details.html" class="stretched-link">
                                        <h3>Innovate Intelligently</h3>
                                    </a>
                                    <p>Nothing too small, no challenge too great — we engineer solutions that drive progress and earn confidence.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-6">
                            <div class="service-item">
                                <div class="img">
                                    <img src="img/services-2.jpg" class="img-fluid" alt="" />
                                </div>
                                <div class="details position-relative">
                                    <div class="icon">
                                        <i class="bi bi-broadcast"></i>
                                    </div>
                                    <a href="service-details.html" class="stretched-link">
                                        <h3>Effortless Performance</h3>
                                    </a>
                                    <p>We take on complexity with clarity — building solutions that are simple, secure, and built to last.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-6">
                            <div class="service-item">
                                <div class="img">
                                    <img src="img/services-3.jpg" class="img-fluid" alt="" />
                                </div>
                                <div class="details position-relative">
                                    <div class="icon">
                                        <i class="bi bi-easel"></i>
                                    </div>
                                    <a href="service-details.html" class="stretched-link">
                                        <h3>Smart Protection</h3>
                                    </a>
                                    <p>We embrace challenges others avoid — delivering secure, reliable solutions even in the most complex scenarios.</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </section>


            <section id="clients" class="clients section light-background">

                <div class="container">

                    <div class="row gy-4">

                        <div class="col-xl-2 col-md-3 col-6 client-logo">
                            <img src="img/clients/client-1.png" class="img-fluid" alt="" />
                        </div>

                        <div class="col-xl-2 col-md-3 col-6 client-logo">
                            <img src="img/clients/client-2.png" class="img-fluid" alt="" />
                        </div>

                        <div class="col-xl-2 col-md-3 col-6 client-logo">
                            <img src="img/clients/client-3.png" class="img-fluid" alt="" />
                        </div>

                        <div class="col-xl-2 col-md-3 col-6 client-logo">
                            <img src="img/clients/client-4.png" class="img-fluid" alt="" />
                        </div>

                        <div class="col-xl-2 col-md-3 col-6 client-logo">
                            <img src="img/clients/client-5.png" class="img-fluid" alt="" />
                        </div>

                        <div class="col-xl-2 col-md-3 col-6 client-logo">
                            <img src="img/clients/client-6.png" class="img-fluid" alt="" />
                        </div>

                    </div>

                </div>

            </section>

            <section id="features" class="features section">
                <div class="container">
                <FeaturesTab/>
                </div>
            </section>
            <section id="services-2" class="services-2 section light-background">
                <div class="container section-title">
                    <h2>Services</h2>
                    <p>CHECK OUR SERVICES</p>
                </div>

                <div class="container">

                    <div class="row gy-4">

                        <div class="col-md-6">
                            <div class="service-item d-flex position-relative h-100">
                                <i class="bi bi-briefcase icon flex-shrink-0"></i>
                                <div>
                                    <h4 class="title"><a href="#" class="stretched-link">Custom Software Development</a></h4>
                                    <p class="description">Apurva Software Solutions delivers tailored software crafted to meet unique business goals with precision.</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="service-item d-flex position-relative h-100">
                                <i class="bi bi-card-checklist icon flex-shrink-0"></i>
                                <div>
                                    <h4 class="title"><a href="#" class="stretched-link">Web & Mobile App Development</a></h4>
                                    <p class="description">Apurva Software Solutions builds responsive web and mobile apps for seamless user experience across devices.</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="service-item d-flex position-relative h-100">
                                <i class="bi bi-bar-chart icon flex-shrink-0"></i>
                                <div>
                                    <h4 class="title"><a href="#" class="stretched-link">Cloud Solutions</a></h4>
                                    <p class="description">Apurva Software Solutions offers scalable cloud solutions for secure, efficient, and flexible business operations.</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="service-item d-flex position-relative h-100">
                                <i class="bi bi-binoculars icon flex-shrink-0"></i>
                                <div>
                                    <h4 class="title"><a href="#" class="stretched-link">AI, ML & Data Analytics</a></h4>
                                    <p class="description">Apurva Software Solutions leverages AI, ML, and Data Analytics to drive smart, data-driven business decisions.</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="service-item d-flex position-relative h-100">
                                <i class="bi bi-brightness-high icon flex-shrink-0"></i>
                                <div>
                                    <h4 class="title"><a href="#" class="stretched-link">E-commerce Development</a></h4>
                                    <p class="description">Apurva Software Solutions creates powerful, user-friendly e-commerce platforms to boost online sales and engagement.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="service-item d-flex position-relative h-100">
                                <i class="bi bi-calendar4-week icon flex-shrink-0"></i>
                                <div>
                                    <h4 class="title"><a href="#" class="stretched-link"> Software Testing & QA</a></h4>
                                    <p class="description">Apurva Software Solutions ensures reliable performance through rigorous software testing and quality assurance practices.</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="service-item d-flex position-relative h-100">
                                <i class="bi bi-file-earmark-code icon flex-shrink-0"></i>
                                <div>
                                    <h4 class="title"><a href="#" class="stretched-link">Cybersecurity Services</a></h4>
                                    <p class="description">Apurva Software Solutions provides robust cybersecurity services to protect digital assets from threats and vulnerabilities.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="service-item d-flex position-relative h-100">
                                <i class="bi bi-database icon flex-shrink-0"></i>
                                <div>
                                    <h4 class="title"><a href="#" class="stretched-link"> UI/UX Design</a></h4>
                                    <p class="description">Apurva Software Solutions crafts intuitive UI/UX designs that enhance user engagement and elevate brand experience.</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="service-item d-flex position-relative h-100">
                                <i class="bi bi-code-slash icon flex-shrink-0"></i>
                                <div>
                                    <h4 class="title"><a href="#" class="stretched-link">IT Consulting & Product Strategy</a></h4>
                                    <p class="description">Apurva Software Solutions offers expert IT consulting and product strategy to align technology with business goals.</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="service-item d-flex position-relative h-100">
                                <i class="bi bi-hdd-network icon flex-shrink-0"></i>
                                <div>
                                    <h4 class="title"><a href="#" class="stretched-link">Maintenance & Support</a></h4>
                                    <p class="description">Apurva Software Solutions provides ongoing maintenance and support to ensure your software runs smoothly and efficiently.</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="service-item d-flex position-relative h-100">
                                <i class="bi bi-megaphone icon flex-shrink-0"></i>
                                <div>
                                    <h4 class="title"><a href="#" class="stretched-link">Digital Marketing</a></h4>
                                    <p class="description">Apurva Software Solutions delivers result-driven digital marketing strategies to boost online visibility and business growth.</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="service-item d-flex position-relative h-100">
                                <i class="bi bi-globe icon flex-shrink-0"></i>
                                <div>
                                    <h4 class="title"><a href="#" class="stretched-link">Project Consulting & Strategy</a></h4>
                                    <p class="description">Apurva Software Solutions offers strategic project consulting to ensure successful planning, execution, and business alignment.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id="testimonials" class="testimonials section dark-background">
                <img src="img/testimonials-bg.jpg" class="testimonials-bg" alt="" />
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="swiper init-swiper">
                                <div class="swiper-wrapper">
                                    <ImageCarousel />
                                </div>
                                <div class="swiper-pagination"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Portfolio Section --> */}
            <section id="portfolio" class="portfolio section">

                {/* <!-- Section Title --> */}
                <div class="container section-title" data-aos="fade-up">
                    <h2>Portfolio</h2>
                    <p>CHECK OUR PORTFOLIO</p>
                </div>

                <div class="container">
                    <div class="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
                        <PortfolioBasicTabs className="filter-active" />
                    </div>
                </div>

            </section>

            {/* <!-- Team Section --> */}
            <section id="team" class="team section light-background">
                {/* <!-- Section Title --> */}
                <div class="container section-title">
                    <h2>Team</h2>
                    <p>CHECK OUR TEAM</p>
                </div>

                <div class="container">

                    <div class="row gy-5">

                        <div class="col-lg-4 col-md-6">
                            <div class="member">
                                <div class="pic"><img src="img/team/team-1.jpg" class="img-fluid" alt="" /></div>
                                <div class="member-info">
                                    <h4>Walter White</h4>
                                    <span>Chief Executive Officer</span>
                                    <div class="social">
                                        <a href=""><i class="bi bi-twitter-x"></i></a>
                                        <a href=""><i class="bi bi-facebook"></i></a>
                                        <a href=""><i class="bi bi-instagram"></i></a>
                                        <a href=""><i class="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6">
                            <div class="member">
                                <div class="pic"><img src="img/team/team-2.jpg" class="img-fluid" alt="" /></div>
                                <div class="member-info">
                                    <h4>Sarah Jhonson</h4>
                                    <span>Product Manager</span>
                                    <div class="social">
                                        <a href=""><i class="bi bi-twitter-x"></i></a>
                                        <a href=""><i class="bi bi-facebook"></i></a>
                                        <a href=""><i class="bi bi-instagram"></i></a>
                                        <a href=""><i class="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="col-lg-4 col-md-6">
                            <div class="member">
                                <div class="pic"><img src="img/team/team-3.jpg" class="img-fluid" alt="" /></div>
                                <div class="member-info">
                                    <h4>William Anderson</h4>
                                    <span>CTO</span>
                                    <div class="social">
                                        <a href=""><i class="bi bi-twitter-x"></i></a>
                                        <a href=""><i class="bi bi-facebook"></i></a>
                                        <a href=""><i class="bi bi-instagram"></i></a>
                                        <a href=""><i class="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </section>

            <section id="contact" class="contact section">


                <div class="container section-title">
                    <h2>Contact</h2>
                    <p>Apurva Software Solutions-We build what you truly need.</p>
                </div>

                <div class="container">
                    <div class="row gy-4">
                        <div class="col-lg-6 ">
                            <div class="row gy-4">
                                <div class="col-lg-12">
                                    <div class="info-item d-flex flex-column justify-content-center align-items-center">
                                        <i class="bi bi-geo-alt"></i>
                                        <h3>Address</h3>
                                        <p>Veer Kuwar Singh Colony,Gaya,Bihar</p>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="info-item d-flex flex-column justify-content-center align-items-center">
                                        <i class="bi bi-telephone"></i>
                                        <h3>Call Us</h3>
                                        <p>+91 6203253537</p>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="info-item d-flex flex-column justify-content-center align-items-center">
                                        <i class="bi bi-envelope"></i>
                                        <h3>Email Us</h3>
                                        <p>apurvasoftware.solutions@outlook.com</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="col-lg-6">
                            <form action="forms/contact.php" method="post" class="php-email-form">
                                <div class="row gy-4">

                                    <div class="col-md-6">
                                        <input type="text" name="name" class="form-control" placeholder="Your Name" required="" />
                                    </div>

                                    <div class="col-md-6 ">
                                        <input type="email" class="form-control" name="email" placeholder="Your Email" required="" />
                                    </div>

                                    <div class="col-md-12">
                                        <input type="text" class="form-control" name="subject" placeholder="Subject" required="" />
                                    </div>

                                    <div class="col-md-12">
                                        <textarea class="form-control" name="message" rows="4" placeholder="Message" required=""></textarea>
                                    </div>

                                    <div class="col-md-12 text-center">
                                        <div class="loading">Loading</div>
                                        <div class="error-message"></div>
                                        <div class="sent-message">Your message has been sent. Thank you!</div>
                                        <button type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Main;