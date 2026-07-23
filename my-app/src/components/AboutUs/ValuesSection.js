
import { useEffect, useRef } from "react";

const values = [
  {
    title: "Ethical Integrity",
    desc: "We believe in doing the right thing—being honest, transparent, and accountable in every interaction to build lasting trust.",
  },
  {
    title: "Focused on Your Success",
    desc: "Our clients’ and learners’ goals are our priority. We listen closely and tailor solutions that deliver real, measurable outcomes.",
  },
  {
    title: "Innovate and Evolve",
    desc: "We embrace the fast pace of technology by continuously updating our skills and exploring new ideas to keep you ahead.",
  },
  {
    title: "Excellence in Delivery",
    desc: "Quality is non-negotiable. We commit to providing precise, reliable, and impactful solutions that exceed expectations.",
  },
];

export default function ValuesSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMove = (e) => {
      const cards = container.querySelectorAll(".mag-card");

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const dx = e.clientX - (rect.left + rect.width / 2);
        const dy = e.clientY - (rect.top + rect.height / 2);

        card.style.transform = `translate(${dx * 0.04}px, ${dy * 0.04}px) scale(1.03)`;
      });
    };

    const reset = () => {
      const cards = container.querySelectorAll(".mag-card");
      cards.forEach((card) => {
        card.style.transform = "translate(0,0) scale(1)";
      });
    };

    container.addEventListener("mousemove", handleMove);
    container.addEventListener("mouseleave", reset);

    return () => {
      container.removeEventListener("mousemove", handleMove);
      container.removeEventListener("mouseleave", reset);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#f3f4f6] px-6 overflow-hidden"
    >
      {/* PARTICLES */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => (
          <span
            key={i}
            className="absolute w-2 h-2 bg-orange-400 rounded-full opacity-20 animate-[orbit_20s_linear_infinite]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      <div className="mx-auto relative z-10">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-3xl  font-bold text-gray-900">
            Our Core Values
          </h2>
          <p className="mt-4 text-gray-600  mx-auto text-sm sm:text-base">
            Our values guide everything we do and shape how we deliver impact to our clients.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((item, i) => (
            <div
              key={i}
              className="mag-card relative min-w-[260px] max-w-[280px] bg-white rounded-2xl p-6 shadow-md transition-transform duration-300 hover:shadow-xl"
              style={{
                animation: `float ${6 + i}s ease-in-out infinite`,
              }}
            >
              {/* ICON */}
              <div className="w-16 h-16 rounded-full border-2 border-[#ff4a17] flex items-center justify-center mb-5">
                <div className="w-6 h-6 bg-[#ff4a17] rounded-sm"></div>
              </div>

              <h3 className="font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* STRIPES */}
     

      {/* KEYFRAMES */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes orbit {
          0% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(20px, -30px);
          }
          50% {
            transform: translate(-20px, -60px);
          }
          75% {
            transform: translate(-40px, 20px);
          }
          100% {
            transform: translate(0, 0);
          }
        }
      `}</style>
    </section>
  );
}