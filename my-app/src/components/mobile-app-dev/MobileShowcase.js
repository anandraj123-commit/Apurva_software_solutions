import React from "react";

const apps = [
    // Row 1
    [
      {
        title: "Stock Exchange",
        img: "/img/stock-exchange.png",
      },
      {
        title: "E-Commerce",
        img: "/img/E-Commerce.png",
      },
      {
        title: "Astro App",
        img: "/img/Astro-app.png",
      },
    ],
  
    // Row 2
    [
      {
        title: "Healthcare",
        img: "/img/Healthcare.png",
      },
      {
        title: "FinTech",
        img: "/img/FinTech.png",
      },
      {
        title: "Food Delivery",
        img: "/img/Food-Delivery.png",
      },
    ],
  
    // Row 3
    [
      {
        title: "Travel App",
        img: "/img/travel-app.png",
      },
      {
        title: "Education",
        img: "/img/Education.png",
      },
      {
        title: "Social Media",
        img: "/img/Social-Media.png",
      },
    ],
  ];

const MobileShowcase = () => {
  return (
    <section className="w-full  px-6 bg-gray-50 text-center">
         {/* Heading */}
         <h2 className="text-3xl  font-bold text-black text-center">
         Stunning Mobile Experiences
        </h2>

        <h3 className="text-3xl  font-bold  text-black bg-clip-text mt-2 text-center">
          <span class="text-[#ff4a17]">& Next-Gen UI Design</span>
        </h3>

        {apps.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-20 block"
          >
            {row.map((app, index) => (
              <div
                key={index}
                className="group relative flex justify-center"
              >
                {/* Phone Frame */}
                <div className="w-[220px] h-[440px] rounded-[30px] overflow-hidden border border-gray-700 shadow-xl bg-black transform transition duration-500 group-hover:scale-105 group-hover:-translate-y-3 animate-float">
                  
                  <img
                    src={`${app.img}?auto=format&fit=crop&w=400&q=80`}
                    alt={app.title}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition"
                  />

                  {/* Overlay */}
                  <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent p-4">
                    <p className="text-white text-sm font-semibold tracking-wide">
                      {app.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}

      {/* Animation Styles */}
      <style jsx>{`
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>

<button
  onClick={() => {
    document
      .getElementById("contact")
      .scrollIntoView({ behavior: "smooth" });
  }}
  className=" bg-[#ff4a17] text-white text-center px-6 py-3 rounded-lg font-semibold shadow-lg mt-12" 

>
Get Free Consultation
</button>
    </section>
  );
};

export default MobileShowcase;