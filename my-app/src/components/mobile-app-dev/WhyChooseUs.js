import React from "react";
import { Smartphone, Layers, Zap, Shield } from "lucide-react";

const features = [
  {
    icon: <Smartphone size={28} />,
    title: "Optimized Native Experience",
    desc: "Deliver lightning-fast apps with seamless performance tailored for each platform.",
  },
  {
    icon: <Layers size={28} />,
    title: "Unified Cross-Platform Code",
    desc: "Reduce costs and time using a single codebase that works flawlessly on all devices.",
  },
  {
    icon: <Zap size={28} />,
    title: "Accelerated Development Cycle",
    desc: "Launch your app faster with agile workflows and modern development practices.",
  },
  {
    icon: <Shield size={28} />,
    title: "Enterprise-Level Security",
    desc: "Protect your data with advanced encryption, authentication, and secure architecture.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[white] text-black px-6 w-full max-w-none">
      
      {/* Header */}
      <div className="text-center  mx-auto">
        <h2 className="text-3xl  font-bold leading-tight">
          Why Partner With Our{" "}
          <span className="text-[#ff4a17]">
            Mobile App Experts?
          </span>
        </h2>
        <p className="text-black mt-4 text-sm">
          We craft scalable, high-performance mobile applications designed to
          deliver exceptional user experiences and measurable business growth.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:scale-105 transition duration-300"
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#ff4a17] text-white">
              {item.icon}
            </div>

            <h3 className="text-xl font-semibold mb-2">
              {item.title}
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;