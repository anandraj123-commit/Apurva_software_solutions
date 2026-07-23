import { useEffect } from "react";

const AboutUs = () => {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-10");
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.2 }
    );

    els.forEach((el) => observer.observe(el));
  }, []);

  return (
    <section id="about" className="about section">
  

  <div className="w-full max-w-none px-0 section-title text-center">
        <p className="!text-3xl">What We <span className="text-[#ff4a17]">Do</span></p>
        </div>

      <div className="w-full max-w-none px-6">
        <div className="row gy-4">

          {/* LEFT */}
          <div className="col-lg-6 reveal opacity-0 translate-y-10 transition-all duration-700 delay-100">
            
            <h3 className="h3 mb-4">
              Empowering businesses through intelligent technology and purposeful innovation.
            </h3>

            <div className="overflow-hidden rounded-4 group">
              <img
                src="img/about.jpg"
                className="img-fluid mb-4 transition-transform duration-700 group-hover:scale-110"
                alt="About Us"
              />
            </div>

            <p className="transition-all duration-500 hover:translate-x-1">
              We strive to exceed expectations with every line of code — delivering
              value where others see complexity, and building trust through
              transparency, innovation, and integrity.
            </p>

            <p className="transition-all duration-500 hover:translate-x-1">
              At Apurva Software Solutions, we embrace challenges others shy away
              from. With precision and purpose, we deliver reliable, tailored
              solutions that simplify complexity. Our team is driven by innovation,
              guided by integrity, and committed to delivering value that goes beyond
              expectations. We don't just build software — we build trust, clarity,
              and long-lasting partnerships.
            </p>
          </div>

          {/* RIGHT */}
          <div className="col-lg-6 reveal opacity-0 translate-y-10 transition-all duration-700 delay-200">
            <div className="content ps-0 ps-lg-5">
              
              <p className="fst-italic mb-4">
                At Apurva Software Solutions, we are dedicated to crafting innovative
                digital experiences through thoughtful design and seamless
                development. With a focus on quality, performance, and user-centric
                solutions, we transform your ideas into intelligent, scalable software
                that drives success.
              </p>

              <ul className="list-unstyled space-y-3">
                <li className="flex items-start gap-2 transition-all duration-300 hover:translate-x-2">
                  <i className="bi bi-check-circle-fill text-[#ff4a17]"></i>
                  <span>
                    We deliver solutions that work — with seamless performance, smart
                    design, and a commitment to your business goals.
                  </span>
                </li>

                <li className="flex items-start gap-2 transition-all duration-300 hover:translate-x-2">
                  <i className="bi bi-check-circle-fill text-[#ff4a17]"></i>
                  <span>
                    We take pride in delivering quality that speaks for itself — with
                    every product built to perform flawlessly and delight users at every
                    touchpoint.
                  </span>
                </li>

                <li className="flex items-start gap-2 transition-all duration-300 hover:translate-x-2">
                  <i className="bi bi-check-circle-fill text-[#ff4a17]"></i>
                  <span>
                    At Apurva Software Solutions, we don’t just deliver code — we
                    craft experiences. Our solutions are designed to simplify
                    complexity, empower users, and create lasting impact without
                    compromise.
                  </span>
                </li>
              </ul>

              <p className="mt-4">
                At Apurva Software Solutions, we believe in delivering only what
                truly adds value — no fluff, no shortcuts. Every solution we craft is
                designed with precision, built for performance, and tested for
                real-world impact. We ensure a seamless experience, free from
                unnecessary complications, guided by trust, innovation, and a passion
                for excellence.
              </p>

              <div className="relative mt-4 overflow-hidden rounded-4 group">
                <img
                  src="img/about-2.jpg"
                  className="img-fluid transition-transform duration-700 group-hover:scale-110"
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
  );
};

export default AboutUs;