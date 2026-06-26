import { useEffect, useRef } from "react";

export default function Achievements() {
  const sectionRef = useRef(null);

  // TIME DISTORTION EFFECT
  useEffect(() => {
    const el = sectionRef.current;

    let t = 0;
    const animate = () => {
      t += 0.01;

      el.style.transform = `translateY(${Math.sin(t) * 3}px)`;

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[white] text-black px-6 lg:px-20 py-20 relative overflow-hidden"
    >
      {/* SCAN LINE */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-[2px] bg-orange-400 opacity-20 animate-scan"></div>
      </div>

      {/* DOT PATTERN */}
      <div className="absolute top-6 right-10 grid grid-cols-10 gap-2 opacity-80">
        {Array.from({ length: 50 }).map((_, i) => (
          <span
            key={i}
            className="w-1.5 h-1.5 bg-[#ff4a17] rounded-full animate-dot"
            style={{ animationDelay: `${i * 0.05}s` }}
          ></span>
        ))}
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Our Achievements
          </h1>

          <p className="text-black leading-relaxed max-w-xl">
            Our milestones at Zisan Tech Solutions showcase our unwavering commitment to excellence, client-focused results, and continual advancement. We are driven by a passion to deliver meaningful SAP and IT solutions.
          </p>

          <br />

          {/* STATS */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {[
              { num: "500+", label: "Students Trained" },
              { num: "100+", label: "Enterprise Clients" },
              { num: "50+", label: "Projects Delivered" },
              { num: "10+", label: "Years of Experience" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#ff4a17] backdrop-blur-md rounded-2xl p-6 text-center shadow-lg border border-white/10 stat-card"
                style={{ animationDelay: `${i * 0.3}s` }}
              >
                <h2 className="text-3xl font-bold text-white">
                  {item.num}
                </h2>
                <p className="text-sm text-white mt-2">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center">

          {/* DELAYED BORDER */}
          <div className="absolute top-4 left-2 w-full h-full border-2 border-[#ff4a17] rounded-2xl z-20 animate-borderShift"></div>

          {/* IMAGE */}
          <div className="relative rounded-2xl overflow-hidden max-w-md w-full shadow-2xl z-10 animate-imagePhase">
  <div className="relative w-full h-[450px]">
    <img
      src="/img/about/apurva-software-solutions-aboutus.jpg"
      alt="timeline"
      className="w-full h-full object-cover"
    />
  </div>
</div>

        </div>
      </div>

      {/* ANIMATIONS */}
      <style jsx>{`

        /* SCAN LINE */
        @keyframes scan {
          0% { transform: translateY(0); }
          100% { transform: translateY(100vh); }
        }
        .animate-scan {
          animation: scan 6s linear infinite;
        }

        /* DOT FLICKER */
        @keyframes dot {
          0%,100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
        .animate-dot {
          animation: dot 2s ease-in-out infinite;
        }

        /* STATS WAVE PULSE */
        @keyframes pulseWave {
          0% { transform: scale(1); }
          50% { transform: scale(1.08); }
          100% { transform: scale(1); }
        }
        .stat-card {
          animation: pulseWave 3s ease-in-out infinite;
        }

        /* IMAGE PHASE SHIFT */
        @keyframes imagePhase {
          0%,100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.9;
          }
        }
        .animate-imagePhase {
          animation: imagePhase 5s ease-in-out infinite;
        }

        /* BORDER LAG EFFECT */
        @keyframes borderShift {
          0%,100% {
            transform: translate(0,0);
          }
          50% {
            transform: translate(6px,6px);
          }
        }
        .animate-borderShift {
          animation: borderShift 5s ease-in-out infinite;
        }

      `}</style>
    </section>
  );
}