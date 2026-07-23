const industries = [
  {
    title: "Banking & Finance",
    icon: "🏦",
    img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c",
    color: "hover:bg-[#1e3a8a]",
    iconBg: "bg-blue-600",
    desc: [
      "We craft secure and scalable fintech platforms.",
      "Advanced dashboards for real-time financial insights.",
      "Automated reporting to simplify business decisions.",
      "Seamless API integrations for banking systems.",
      "High-level encryption for data protection.",
      "Optimized user experiences for financial tools."
    ]
  },
  {
    title: "Health Care",
    icon: "❤️",
    img: "https://images.unsplash.com/photo-1584515933487-779824d29309",
    color: "hover:bg-[#7c2d12]",
    iconBg: "bg-red-500",
    desc: [
      "We design patient-centric healthcare applications.",
      "Secure medical data handling and compliance.",
      "Telemedicine and remote care solutions.",
      "AI-powered diagnostics and reporting systems.",
      "Streamlined hospital management platforms.",
      "Improved patient engagement with smart tools."
    ]
  },
  {
    title: "Hospitality",
    icon: "🏨",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    color: "hover:bg-[#78350f]",
    iconBg: "bg-yellow-600",
    desc: [
      "Smart booking and reservation systems.",
      "Custom CRM tools for guest management.",
      "Automation for hotel operations.",
      "Enhanced guest digital experiences.",
      "Seamless payment and billing integration.",
      "Real-time analytics for business growth."
    ]
  },
  {
    title: "Entertainment & Media",
    icon: "🎮",
    img: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc",
    color: "hover:bg-[#4c1d95]",
    iconBg: "bg-purple-600",
    desc: [
      "Interactive platforms for digital media.",
      "Streaming and content delivery solutions.",
      "Scalable apps for large audiences.",
      "Immersive UI/UX for engagement.",
      "Content management made simple.",
      "Analytics to track user behavior."
    ]
  },
  {
    title: "Travel & Tourism",
    icon: "✈️",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    color: "hover:bg-[#0f766e]",
    iconBg: "bg-teal-600",
    desc: [
      "Custom booking engines for travel agencies.",
      "Real-time itinerary and tracking systems.",
      "User-friendly travel applications.",
      "Secure payment and ticketing systems.",
      "Smart recommendation engines.",
      "Seamless integrations with APIs."
    ]
  },
  {
    title: "IT Sector",
    icon: "💻",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    color: "hover:bg-[#1e293b]",
    iconBg: "bg-gray-800",
    desc: [
      "Dedicated developers for scaling teams.",
      "Custom enterprise software solutions.",
      "Cloud-native application development.",
      "Automation and DevOps practices.",
      "Robust backend architecture.",
      "Agile and fast delivery cycles."
    ]
  },
  {
    title: "Manufacturing",
    icon: "🏭",
    img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc",
    color: "hover:bg-[#3f3f46]",
    iconBg: "bg-zinc-700",
    desc: [
      "End-to-end manufacturing automation.",
      "ERP and inventory management systems.",
      "IoT-enabled smart factory solutions.",
      "Data-driven production optimization.",
      "Real-time monitoring dashboards.",
      "Improved operational efficiency."
    ]
  },
  {
    title: "e-Commerce & Retail",
    icon: "🛒",
    img: "https://images.unsplash.com/photo-1515169067868-5387ec356754",
    color: "hover:bg-[#7f1d1d]",
    iconBg: "bg-pink-600",
    desc: [
      "Fully customized online store development.",
      "Secure payment gateway integration.",
      "Advanced product management systems.",
      "Conversion-focused UI/UX design.",
      "Scalable architecture for growth.",
      "Omnichannel retail experiences."
    ]
  }
];

export default function Industries() {
  return (
    <section className="bg-white w-full max-w-none px-6">
      
      {/* Heading */}
      <div className="text-center mx-auto">
        <h2 className="text-3xl font-bold text-black">
          Industries we{" "}
          <span className="text-[#ff4a17]">empower</span>
        </h2>
        <div className="w-20 h-[2px] bg-[#ff4a17] mx-auto mt-4"></div>
      </div>

      {/* Grid */}
      <div className="grid mt-14 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {industries.map((item, i) => (
          <div
            key={i}
            className={`group rounded-2xl overflow-hidden border transition-all duration-500 
            hover:-translate-y-3 hover:shadow-2xl ${item.color}`}
          >

            {/* Image */}
            <div
              className="h-40 bg-cover bg-center relative"
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <div
  className={`absolute top-3 right-3 ${item.iconBg} text-white p-2 rounded-lg text-lg shadow-lg 
  transition-all duration-500 group-hover:rotate-180 group-hover:scale-110`}
>
  {item.icon}
</div>
            </div>

            {/* Content */}
            <div className="p-6 transition-all duration-500 group-hover:text-white">
            <h3 className="text-lg font-semibold mb-3 text-black transition-colors duration-300 group-hover:text-white">
  {item.title}
</h3>

              <ul className="text-sm space-y-1 leading-relaxed">
                {item.desc.map((line, idx) => (
                  <li key={idx} className="opacity-90">
                    • {line}
                  </li>
                ))}
              </ul>

              <div className="w-10 h-[2px] bg-[#ff4a17] mt-4 group-hover:bg-white transition-all"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}