import React from "react";

// ✅ ImageBox component (IMPORTANT)
const ImageBox = ({ color, img }) => {
  return (
    <div className={`image-box ${color}`}>
      <img src={img} alt="" style={{ width: "100%", borderRadius: "10px" }} />
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative hero-wrapper">

      {/* Background Image */}
      <img
        src="/img/hero-bg.jpg"
        className="hero-bg"
        alt=""
      />

      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Glow */}
      <div className="hero-glow"></div>

      {/* Content */}
      <div className="hero-content container">
        <div className="row align-items-center">

          {/* LEFT */}
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

            <p className="free-text mt-4 text-white">
              Get One Month Free Maintenance
            </p>

            <button
              className="btn bg-[#ff4a17] text-white btn-lg mt-2"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Contact Us →
            </button>
          </div>

          {/* RIGHT */}
          <div className="col-lg-5 image-grid">
            <img src="/img/website-mainteance-image.png"/>
          </div>

        </div>
      </div>

      {/* CSS */}
      <style>{`
        .hero-wrapper {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          color: white;
        }

        .hero-bg {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          animation: zoom 20s infinite alternate ease-in-out;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.6);
        }

        .hero-glow {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, transparent, rgba(255,74,23,0.2), transparent);
          animation: glowMove 8s linear infinite;
        }

        .hero-content {
          position: relative;
          z-index: 10;
          padding: 80px 20px;
        }

        @keyframes zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }

        @keyframes glowMove {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .info-card {
          background: #ff4a17;
          padding: 10px;
          border-radius: 8px;
          font-size: 14px;
        }
      `}</style>
    </section>
  );
};

export default Hero;