const industries = [
  {
    title: "Banking & Finance",
    desc: "We build custom data analytic dashboards, financial reporting tools and business intelligence.",
    icon: "🏦",
    img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c"
  },
  {
    title: "Health Care",
    desc: "The healthcare industry faces unique technology challenges.",
    icon: "❤️",
    img: "https://images.unsplash.com/photo-1584515933487-779824d29309"
  },
  {
    title: "Hospitality",
    desc: "Custom software solutions for hospitality businesses.",
    icon: "🏨",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945"
  },
  {
    title: "Entertainment & Media",
    desc: "Software solutions for media & entertainment.",
    icon: "🎮",
    img: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Travel & Tourism",
    desc: "Tailor-made software for travel companies.",
    icon: "✈️",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  },
  {
    title: "IT Sector",
    desc: "We provide best developers for IT companies.",
    icon: "💻",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  },
  {
    title: "Manufacturing",
    desc: "System integration for manufacturing industries.",
    icon: "🏭",
    img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "e-Commerce & Retail",
    desc: "Fully customized e-commerce solutions.",
    icon: "🛒",
    img: "https://images.unsplash.com/photo-1515169067868-5387ec356754"
  }
];

export default function Industries() {
  return (
    <section className="bg-[#f1f4fa] text-white py-20 px-6">
      
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold">
          Industries we{" "}
          <span className="bg-[#ff4a17] bg-clip-text text-transparent">
            serve
          </span>
        </h2>

        <div className="w-20 h-[2px] bg-[#ff4a17] mx-auto mt-4"></div>

        <p className="text-gray-400 mt-4">
          Industry-Specific Custom Software Development Services
        </p>
      </div>

      {/* Grid */}
      <div className="grid mt-14 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {industries.map((item, i) => (
          <div
            key={i}
            className="group  rounded-2xl overflow-hidden border border-gray-800 hover:border-[#FF5A00] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(255,90,0,0.3)]"
          >
            
            {/* Image */}
            <div
              className="h-40 bg-cover bg-center relative"
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <div className="absolute top-3 right-3 bg-[#ff4a17] p-2 rounded-lg text-lg shadow-lg">
                {item.icon}
              </div>
            </div>

            {/* Content */}
            <div className="group  p-6 rounded-2xl">
  
  <h3 className="text-lg text-black font-semibold mb-2 transition-colors duration-300 group-hover:text-[#ff4a17]">
    {item.title}
  </h3>

  <p className="text-black text-sm">
    {item.desc}
  </p>

  <div className="w-10 h-[2px] bg-[#ff4a17] mt-4"></div>

</div>
          </div>
        ))}
      </div>
    </section>
  );
}