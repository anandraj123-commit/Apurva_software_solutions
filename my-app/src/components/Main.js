import ImageCarousel from './Slider';
import PortfolioBasicTabs from './Tabs';
import FeaturesTab from './FeaturesTab';
import ModalOverLay from './overlay/ModalOverlay';
import Contact from '../forms/contact';
import AlertBox from './AlertBox';

const Main = (props) => {
  return (
    <main className="main">
      <section id="hero" className="hero section dark-background">
        <img
          src="/img/hero-bg.jpg"
          alt="Hero Background"
          className="img-fluid w-100"
        />
        <div className="container d-flex flex-column align-items-center text-center">
          <h2 className="display-4">Plan. Build. Grow.</h2>
          <p className="lead">
            We craft solutions that empower growing businesses worldwide with
            innovation and impact.
          </p>
          <div className="d-flex flex-column flex-sm-row mt-4 gap-3">
            <a href="#about" className="btn btn-primary btn-get-started">
              Get Started
            </a>
            <a
              href="https://www.youtube.com/watch?v=8eHWiixeoj0"
              target="_blank"
              rel="noopener noreferrer"
              className="glightbox btn-watch-video d-flex align-items-center justify-content-center"
            >
              <i className="bi bi-play-circle me-2"></i>
              <span>Watch Video</span>
            </a>
          </div>
        </div>
      </section>
      <AlertBox />

      <section id="about" className="about section">
        <div className="container">
          <div className="row gy-4">
            <div
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3 className="h3">
                Empowering businesses through intelligent technology and purposeful
                innovation.
              </h3>
              <img
                src="img/about.jpg"
                className="img-fluid rounded-4 mb-4"
                alt="About Us"
              />
              <p>
                We strive to exceed expectations with every line of code — delivering
                value where others see complexity, and building trust through
                transparency, innovation, and integrity.
              </p>
              <p>
                At Apurva Software Solutions, we embrace challenges others shy away
                from. With precision and purpose, we deliver reliable, tailored
                solutions that simplify complexity. Our team is driven by innovation,
                guided by integrity, and committed to delivering value that goes beyond
                expectations. We don't just build software — we build trust, clarity,
                and long-lasting partnerships.
              </p>
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              <div className="content ps-0 ps-lg-5">
                <p className="fst-italic">
                  At Apurva Software Solutions, we are dedicated to crafting innovative
                  digital experiences through thoughtful design and seamless
                  development. With a focus on quality, performance, and user-centric
                  solutions, we transform your ideas into intelligent, scalable software
                  that drives success.
                </p>
                <ul className="list-unstyled">
                  <li className="d-flex align-items-start mb-3">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    <span>
                      We deliver solutions that work — with seamless performance, smart
                      design, and a commitment to your business goals.
                    </span>
                  </li>
                  <li className="d-flex align-items-start mb-3">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    <span>
                      We take pride in delivering quality that speaks for itself — with
                      every product built to perform flawlessly and delight users at every
                      touchpoint.
                    </span>
                  </li>
                  <li className="d-flex align-items-start mb-3">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    <span>
                      At Apurva Software Solutions, we don’t just deliver code — we
                      craft experiences. Our solutions are designed to simplify
                      complexity, empower users, and create lasting impact without
                      compromise.
                    </span>
                  </li>
                </ul>
                <p>
                  At Apurva Software Solutions, we believe in delivering only what
                  truly adds value — no fluff, no shortcuts. Every solution we craft is
                  designed with precision, built for performance, and tested for
                  real-world impact. We ensure a seamless experience, free from
                  unnecessary complications, guided by trust, innovation, and a passion
                  for excellence.
                </p>
                <div className="position-relative mt-4">
                  <img
                    src="img/about-2.jpg"
                    className="img-fluid rounded-4"
                    alt="About Us Secondary"
                  />
                  <a
                    href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                    className="glightbox pulsating-play-btn"
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="stats" className="stats section light-background">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="stats-item d-flex align-items-center w-100 h-100">
                <i className="bi bi-emoji-smile color-blue flex-shrink-0 me-3"></i>
                <div>
                  <span className="purecounter fs-3">232</span>
                  <p>Happy Clients</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="stats-item d-flex align-items-center w-100 h-100">
                <i className="bi bi-journal-richtext color-orange flex-shrink-0 me-3"></i>
                <div>
                  <span className="purecounter fs-3">551</span>
                  <p>Projects</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="stats-item d-flex align-items-center w-100 h-100">
                <i className="bi bi-headset color-green flex-shrink-0 me-3"></i>
                <div>
                  <span className="purecounter fs-3">324</span>
                  <p>Hours Of Support</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="stats-item d-flex align-items-center w-100 h-100">
                <i className="bi bi-people color-pink flex-shrink-0 me-3"></i>
                <div>
                  <span className="purecounter fs-3">15</span>
                  <p>Hard Workers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services section">
        <div className="container section-title text-center">
          <h2>Services</h2>
          <p>Featured Services</p>
        </div>
        <div className="container">
          <div className="row gy-5">
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div className="service-item">
                <div className="img">
                  <img
                    src="img/services-1.jpg"
                    className="img-fluid"
                    alt="Innovate Intelligently"
                  />
                </div>
                <div className="details position-relative p-4">
                  <div className="icon">
                    <i className="bi bi-activity"></i>
                  </div>
                  <a href="service-details.html" className="stretched-link">
                    <h3>Innovate Intelligently</h3>
                  </a>
                  <p>
                    Nothing too small, no challenge too great — we engineer solutions
                    that drive progress and earn confidence.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div className="service-item">
                <div className="img">
                  <img
                    src="img/services-2.jpg"
                    className="img-fluid"
                    alt="Effortless Performance"
                  />
                </div>
                <div className="details position-relative p-4">
                  <div className="icon">
                    <i className="bi bi-broadcast"></i>
                  </div>
                  <a href="service-details.html" className="stretched-link">
                    <h3>Effortless Performance</h3>
                  </a>
                  <p>
                    We take on complexity with clarity — building solutions that are
                    simple, secure, and built to last.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div className="service-item">
                <div className="img">
                  <img
                    src="img/services-3.jpg"
                    className="img-fluid"
                    alt="Smart Protection"
                  />
                </div>
                <div className="details position-relative p-4">
                  <div className="icon">
                    <i className="bi bi-easel"></i>
                  </div>
                  <a href="service-details.html" className="stretched-link">
                    <h3>Smart Protection</h3>
                  </a>
                  <p>
                    We embrace challenges others avoid — delivering secure, reliable
                    solutions even in the most complex scenarios.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="clients" className="clients section light-background">
        <div className="container">
          <div className="row gy-4">
            <div className="col-xl-2 col-md-3 col-sm-4 col-6 client-logo">
              <img
                src="img/clients/client-1.png"
                className="img-fluid"
                alt="Client 1"
              />
            </div>
            <div className="col-xl-2 col-md-3 col-sm-4 col-6 client-logo">
              <img
                src="img/clients/client-2.png"
                className="img-fluid"
                alt="Client 2"
              />
            </div>
            <div className="col-xl-2 col-md-3 col-sm-4 col-6 client-logo">
              <img
                src="img/clients/client-3.png"
                className="img-fluid"
                alt="Client 3"
              />
            </div>
            <div className="col-xl-2 col-md-3 col-sm-4 col-6 client-logo">
              <img
                src="img/clients/client-4.png"
                className="img-fluid"
                alt="Client 4"
              />
            </div>
            <div className="col-xl-2 col-md-3 col-sm-4 col-6 client-logo">
              <img
                src="img/clients/client-5.png"
                className="img-fluid"
                alt="Client 5"
              />
            </div>
            <div className="col-xl-2 col-md-3 col-sm-4 col-6 client-logo">
              <img
                src="img/clients/client-6.png"
                className="img-fluid"
                alt="Client 6"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="features section">
        <div className="container">
          <FeaturesTab />
        </div>
      </section>

      <section id="services-2" className="services-2 section light-background">
        <div className="container section-title text-center">
          <h2>Services</h2>
          <p>Check Our Services</p>
        </div>
        <div className="container">
          <div className="row gy-4">
            <div className="col-md-6 col-sm-12">
              <div className="service-item d-flex position-relative h-100 p-3">
                <i className="bi bi-briefcase icon flex-shrink-0 me-3"></i>
                <div>
                  <h4 className="title">
                    <a href="#" onClick={(e) => e.preventDefault()} className="stretched-link">
                      Custom Software Development
                    </a>
                  </h4>
                  <p className="description">
                    Apurva Software Solutions delivers tailored software crafted to meet
                    unique business goals with precision.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="service-item d-flex position-relative h-100 p-3">
                <i className="bi bi-card-checklist icon flex-shrink-0 me-3"></i>
                <div>
                  <h4 className="title">
                    <a href="#" onClick={(e) => e.preventDefault()} className="stretched-link">
                      Web & Mobile App Development
                    </a>
                  </h4>
                  <p className="description">
                    Apurva Software Solutions builds responsive web and mobile apps for
                    seamless user experience across devices.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="service-item d-flex position-relative h-100 p-3">
                <i className="bi bi-bar-chart icon flex-shrink-0 me-3"></i>
                <div>
                  <h4 className="title">
                    <a href="#" onClick={(e) => e.preventDefault()} className="stretched-link">
                      Cloud Solutions
                    </a>
                  </h4>
                  <p className="description">
                    Apurva Software Solutions offers scalable cloud solutions for
                    secure, efficient, and flexible business operations.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="service-item d-flex position-relative h-100 p-3">
                <i className="bi bi-binoculars icon flex-shrink-0 me-3"></i>
                <div>
                  <h4 className="title">
                    <a href="#" onClick={(e) => e.preventDefault()} className="stretched-link">
                      AI, ML & Data Analytics
                    </a>
                  </h4>
                  <p className="description">
                    Apurva Software Solutions leverages AI, ML, and Data Analytics to
                    drive smart, data-driven business decisions.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="service-item d-flex position-relative h-100 p-3">
                <i className="bi bi-brightness-high icon flex-shrink-0 me-3"></i>
                <div>
                  <h4 className="title">
                    <a href="#" onClick={(e) => e.preventDefault()} className="stretched-link">
                      E-commerce Development
                    </a>
                  </h4>
                  <p className="description">
                    Apurva Software Solutions creates powerful, user-friendly
                    e-commerce platforms to boost online sales and engagement.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="service-item d-flex position-relative h-100 p-3">
                <i className="bi bi-calendar4-week icon flex-shrink-0 me-3"></i>
                <div>
                  <h4 className="title">
                    <a href="#" onClick={(e) => e.preventDefault()} className="stretched-link">
                      Software Testing & QA
                    </a>
                  </h4>
                  <p className="description">
                    Apurva Software Solutions ensures reliable performance through
                    rigorous software testing and quality assurance practices.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="service-item d-flex position-relative h-100 p-3">
                <i className="bi bi-file-earmark-code icon flex-shrink-0 me-3"></i>
                <div>
                  <h4 className="title">
                    <a href="#" onClick={(e) => e.preventDefault()} className="stretched-link">
                      Cybersecurity Services
                    </a>
                  </h4>
                  <p className="description">
                    Apurva Software Solutions provides robust cybersecurity services to
                    protect digital assets from threats and vulnerabilities.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="service-item d-flex position-relative h-100 p-3">
                <i className="bi bi-database icon flex-shrink-0 me-3"></i>
                <div>
                  <h4 className="title">
                    <a href="#" onClick={(e) => e.preventDefault()} className="stretched-link">
                      UI/UX Design
                    </a>
                  </h4>
                  <p className="description">
                    Apurva Software Solutions crafts intuitive UI/UX designs that
                    enhance user engagement and elevate brand experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="service-item d-flex position-relative h-100 p-3">
                <i className="bi bi-code-slash icon flex-shrink-0 me-3"></i>
                <div>
                  <h4 className="title">
                    <a href="#" onClick={(e) => e.preventDefault()} className="stretched-link">
                      IT Consulting & Product Strategy
                    </a>
                  </h4>
                  <p className="description">
                    Apurva Software Solutions offers expert IT consulting and product
                    strategy to align technology with business goals.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="service-item d-flex position-relative h-100 p-3">
                <i className="bi bi-hdd-network icon flex-shrink-0 me-3"></i>
                <div>
                  <h4 className="title">
                    <a href="#" onClick={(e) => e.preventDefault()} className="stretched-link">
                      Maintenance & Support
                    </a>
                  </h4>
                  <p className="description">
                    Apurva Software Solutions provides ongoing maintenance and support
                    to ensure your software runs smoothly and efficiently.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="service-item d-flex position-relative h-100 p-3">
                <i className="bi bi-megaphone icon flex-shrink-0 me-3"></i>
                <div>
                  <h4 className="title">
                    <a href="#" onClick={(e) => e.preventDefault()} className="stretched-link">
                      Digital Marketing
                    </a>
                  </h4>
                  <p className="description">
                    Apurva Software Solutions delivers result-driven digital marketing
                    strategies to boost online visibility and business growth.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="service-item d-flex position-relative h-100 p-3">
                <i className="bi bi-globe icon flex-shrink-0 me-3"></i>
                <div>
                  <h4 className="title">
                    <a href="#" onClick={(e) => e.preventDefault()} className="stretched-link">
                      Project Consulting & Strategy
                    </a>
                  </h4>
                  <p className="description">
                    Apurva Software Solutions offers strategic project consulting to
                    ensure successful planning, execution, and business alignment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="testimonials section dark-background">
        <img
          src="img/testimonials-bg.jpg"
          className="testimonials-bg img-fluid w-100"
          alt="Testimonials Background"
        />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="swiper init-swiper">
                <div className="swiper-wrapper">
                  <ImageCarousel />
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="portfolio section">
        <div className="container section-title text-center" data-aos="fade-up">
          <h2>Portfolio</h2>
          <p>Check Our Portfolio</p>
        </div>
        <div className="container">
          <div
            className="isotope-layout"
            data-default-filter="*"
            data-layout="masonry"
            data-sort="original-order"
          >
            <PortfolioBasicTabs
              className="filter-active"
              tabArgument={props.tabArgument}
            />
          </div>
        </div>
      </section>

      <section id="team" className="team section light-background">
        <div className="container section-title text-center">
          <h2>Team</h2>
          <p>Check Our Team</p>
        </div>
        <div className="container">
          <div className="row gy-5">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="member">
                <div className="pic">
                  <img
                    src="img/team/juli.jpg"
                    className="img-fluid rounded"
                    alt="Juli Kumari"
                  />
                </div>
                <div className="member-info text-center">
                  <h4>Juli Kumari</h4>
                  <span>Chief Executive Officer & Founder</span>
                  <div className="social d-flex justify-content-center gap-2 mt-2">
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      <i className="bi bi-twitter-x"></i>
                    </a>
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="member">
                <div className="pic">
                  <img
                    src="img/team/manju.jpg"
                    className="img-fluid rounded"
                    alt="Manju Kumari"
                  />
                </div>
                <div className="member-info text-center">
                  <h4>Manju Kumari</h4>
                  <span>Director & President</span>
                  <div className="social d-flex justify-content-center gap-2 mt-2">
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      <i className="bi bi-twitter-x"></i>
                    </a>
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="member">
                <div className="pic">
                  <img
                    src="img/team/abhishek.jpg"
                    className="img-fluid rounded"
                    alt="Avishek Raj"
                  />
                </div>
                <div className="member-info text-center">
                  <h4>Avishek Raj</h4>
                  <span>CTO</span>
                  <div className="social d-flex justify-content-center gap-2 mt-2">
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      <i className="bi bi-twitter-x"></i>
                    </a>
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
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
                    <p>apurvasoftware.solutions@outlook.com</p>
                    <p>supports@apurvasoftwaresolutions.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <Contact onSubmitFormRequest={props.onSubmitFormRequest} />
            </div>
          </div>
        </div>
      </section>
      <ModalOverLay ref={props.modalRef} {...props} />
    </main>
  );
};

export default Main;