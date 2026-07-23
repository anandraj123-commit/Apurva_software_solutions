const Hero = () => {
    return (
      <>
       <div className="relative w-full h-auto text-white">
  
  {/* Background Image (Zoom Animation) */}
  <img
    src="/img/apurvasoftwaresolutions-create-your-project.png"
    className="w-full"
    alt="apurva software solutions discuss your project"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Animated Gradient Glow */}
  
  <div className="absolute  hidden lg:block top-1/2 left-10 transform -translate-y-1/2 max-w-lg text-left">
  
  <h1 className="text-3xl font-bold text-white leading-tight">
  Let’s Discuss 
  <span className="text-[#ff4a17]"> Your Project</span> <br />
  Turn Your Ideas Into Reality
</h1>

<p className="mt-4 text-white/90 text-sm leading-relaxed">
  Have an idea in mind or planning to build something amazing? At Apurva Software 
  Solutions, we’re here to help you bring your vision to life. Whether it’s a web 
  application, mobile app, or a custom software solution, our team is ready to guide 
  you at every step — from concept to launch.
  
  Share your requirements with us, and we’ll provide expert insights, strategic 
  planning, and the right technology solutions tailored to your business goals. 
  Let’s collaborate to create something impactful, scalable, and future-ready.
</p>

  {/* Button */}
  <button 
    className="mt-6 px-6 py-3 bg-[#ff4a17] text-white rounded-lg shadow-lg hover:bg-orange-600 transition"
    onClick={() => {
      document
        .getElementById("contact")
        .scrollIntoView({ behavior: "smooth" });
    }}
  >
    Start Your Project
  </button>
</div>
  {/* CSS (inside same file) */}
  <style>{`

    /* Background Slow Zoom */
    @keyframes zoom {
      0% { transform: scale(1); }
      100% { transform: scale(1.1); }
    }
    .animate-zoom {
      animation: zoom 20s ease-in-out infinite alternate;
    }

    /* Text Slide Up Reveal */
    @keyframes slideUp {
      0% {
        transform: translateY(100%);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
    .animate-slideUp {
      animation: slideUp 1s ease forwards;
    }

    /* Fade In */
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    .animate-fadeIn {
      animation: fadeIn 1.5s ease forwards;
    }

    /* Moving Glow Layer */
    @keyframes glowMove {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
    .animate-glowMove {
      animation: glowMove 8s linear infinite;
    }

    /* Glow Text Pulse */
    @keyframes glowText {
      0%, 100% {
        text-shadow: 0 0 10px #ff4a17, 0 0 20px #ff4a17;
      }
      50% {
        text-shadow: 0 0 25px #ff4a17, 0 0 40px #ff4a17;
      }
    }
    .animate-glowText {
      animation: glowText 2s ease-in-out infinite;
    }

  `}</style>
</div>
      </>
     
    );
  };
  
  export default Hero;