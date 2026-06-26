import { useEffect, useRef } from "react";

const Mastermind = () => {
  const imgRef = useRef(null);

  // subtle floating + mouse parallax
  useEffect(() => {
    const handleMove = (e) => {
      if (!imgRef.current) return;

      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 20;

      imgRef.current.style.transform = `translate(${x}px, ${y}px) scale(1.02)`;
    };

    window.addEventListener("mousemove", handleMove);

    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-black">
            Masterminds To <br /> Your Positive Goal
          </h1>

          <p className="text-gray-600 mt-6 mb-8 max-w-lg">
            Experience a rise in your pursuits with our expert consulting.
            We excel in tailoring success strategies to your unique goals,
            covering diverse fields for maximum impact.
          </p>

          <button className="relative overflow-hidden bg-[#ff4a17] px-6 py-3 rounded-lg font-semibold text-white shadow-lg group">
            <span className="relative z-20">Services</span>
            <span className="absolute inset-0 bg-[#ff4a17] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">
          {/* border frame */}
          <div className="absolute w-full h-full border-2 border-[#ff4a17] rounded-2xl translate-x-6 translate-y-6"></div>

          <img
            ref={imgRef}
            src="/img/contact/apurva_software_solutions_contactus.jpg"
            alt="team"
            className="rounded-2xl w-full max-w-md relative z-10 transition-transform duration-300 ease-out animate-float"
          />
        </div>
      </div>

      {/* animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Mastermind;