import { Link } from "react-router-dom";
const Hero = () => {
    return (
      <section className="relative h-screen flex items-center justify-center overflow-hidden dark-background">
  
        {/* ✅ Background Image */}
        <img
          src="/img/hero-bg.jpg"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover animate-[zoomBg_20s_ease-in-out_infinite]"
        />
  
        {/* ✅ Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
  
        {/* ✅ CSS Animations */}
       
  
        {/* ✅ Content */}
        <div className="relative z-10 text-center px-4">
  
          <h2 className="display-4 text-white font-bold animate-fadeUp">
            Plan. Build. Grow.
          </h2>
  
          <p className="lead text-white/90 mt-3 max-w-2xl mx-auto animate-fadeUp [animation-delay:0.3s]">
            We craft solutions that empower growing businesses worldwide with
            innovation and impact.
          </p>
  
          {/* ✅ Buttons */}
          <div className="flex flex-col sm:flex-row mt-6 gap-4 justify-center items-center animate-fadeUp [animation-delay:0.6s]">
  
          <a
  href="#about"
  style={{ backgroundColor: "var(--accent-color)", color: "#fff" }}
  className="btn px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
>
  Explore More
</a>
  
<Link
  to="/discuss-your-project"
  style={{ backgroundColor: "var(--accent-color)", color: "#fff" }}
  className="btn px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
>
  Discuss Your Project
</Link>
  
            <a
              href="https://www.youtube.com/watch?v=8eHWiixeoj0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white transition-all duration-300 hover:scale-105"
            >
              <i className="bi bi-play-circle text-2xl"></i>
              <span>Watch Video</span>
            </a>
  
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;