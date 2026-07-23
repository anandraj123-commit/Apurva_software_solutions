const Hero = () => {
    return (
  <>
       <div className="relative w-full h-auto text-white">
  
  {/* Background Image (Zoom Animation) */}
  <img src="/img/apurvasoftwaresolutions-contactus-page.png"
          className="w-full"
          alt=" apurva software solutions contact us page"
/>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Animated Gradient Glow */}
  
  <div className="absolute  hidden lg:block top-1/2 left-10 transform -translate-y-1/2 max-w-lg text-left">
  
  <h1 className="text-3xl font-bold text-white leading-tight">
  Get In Touch 
  <span className="text-[#ff4a17]"> With Us</span> <br />
  We’d Love To Hear From You
</h1>

<p className="mt-4 text-white/90 text-sm leading-relaxed">
  Have questions, ideas, or need assistance with your next project? 
  The team at Apurva Software Solutions is here to help. 

  Reach out to us with your requirements, and our experts will get back to you 
  with the right guidance and tailored solutions. Let’s connect and create 
  something impactful together.
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
</div>
</>
    );
  };
  
  export default Hero;