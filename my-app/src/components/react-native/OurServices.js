import React from "react";

const services = [
  {
    title: "Cross-Platform Engineering",
    description:
      "We craft high-performance mobile applications using a unified React Native codebase, enabling seamless deployment across iOS and Android. Our modular architecture and TypeScript-driven development ensure faster releases without compromising scalability.",
    icon: "📱",
  },
  {
    title: "Performance Optimization",
    description:
      "Our team fine-tunes every layer of your app by identifying performance bottlenecks, reducing unnecessary renders, and optimizing runtime efficiency. The result is smooth interactions, lightning-fast load times, and a consistently fluid user experience.",
    icon: "⚡",
  },
  {
    title: "Advanced Native Integration",
    description:
      "For complex features, we extend beyond JavaScript by building custom native modules. This allows direct interaction with device hardware, platform APIs, and advanced capabilities, delivering truly native-level performance when needed.",
    icon: "🔗",
  },
  {
    title: "Scalable Backend & Data Systems",
    description:
      "We design resilient backend architectures and intelligent data layers that support real-time updates, offline access, and efficient state management. Our approach ensures your app remains reliable, responsive, and ready to scale with growth.",
    icon: "🗄️",
  },
];

const OurServices = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our <span className="text-[#ff4a17]">Services</span>
        </h2>

        <p className="text-gray-500 mt-3 mb-12">
          Tailored mobile solutions designed to accelerate your digital growth
        </p>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition duration-300 text-left"
            >
              <div className="text-3xl mb-4">{service.icon}</div>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurServices;