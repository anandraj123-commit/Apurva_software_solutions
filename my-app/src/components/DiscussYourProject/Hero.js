const Hero = () => {
    return (
      <section className="relative h-[80vh] flex items-center text-white overflow-hidden">
  
        {/* Background Image (Zoom Animation) */}
        <img
          src="/img/hero-bg.jpg"
          className="absolute w-full h-full object-cover animate-zoom"
          alt=""
        />
  
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
  
        {/* Animated Gradient Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ff4a1720] to-transparent animate-glowMove"></div>
  
        {/* Content */}
        <div className="relative z-10 container mx-auto px-6">
  
          {/* Heading (Reveal Animation) */}
          <h1 className="text-5xl font-bold leading-tight overflow-hidden text-white">
            <span className="block animate-slideUp">
              Let's Build Something
            </span>
  
            <span className="block text-[#ff4a17]">
              Amazing Together
            </span>
          </h1>
  
          {/* Paragraph */}
          <p className="mt-4 text-lg max-w-xl font-bold text-white animate-fadeIn delay-300">
            Share your vision and requirements — our expert team will turn it
            into a powerful digital reality.
          </p>
  
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
      </section>
    );
  };
  
  export default Hero;