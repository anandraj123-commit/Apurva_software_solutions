import React from "react";
import { Code, Rocket, Zap, Palette, Smartphone, Star } from "lucide-react";

const services = [
    {
      title: "React Development",
      desc: "We build fast and scalable React applications tailored to modern user needs. Our approach focuses on reusable components and clean architecture. We ensure smooth performance across all devices and browsers. From dashboards to complex platforms, we handle it all. Experience seamless and engaging UI with our expert React solutions.",
      icon: <Zap size={28} />,
      gradient: "from-blue-500 to-cyan-500",
      hoverBg: "hover:bg-[#0f172a]",
    },
    {
      title: "Angular Solutions",
      desc: "Our Angular development delivers structured and enterprise-ready applications. We focus on maintainability, scalability, and strong performance. Ideal for complex business workflows and large systems. Our team ensures optimized architecture and smooth integration. Build powerful applications with confidence using Angular.",
      icon: <Rocket size={28} />,
      gradient: "from-purple-500 to-pink-500",
      hoverBg: "hover:bg-[#1e1b4b]",
    },
    {
      title: "Vue Development",
      desc: "We create lightweight and flexible applications using Vue.js. Our solutions are designed for simplicity and speed. Perfect for startups and modern web platforms. We ensure clean code structure and easy scalability. Deliver smooth and interactive experiences with Vue-powered apps.",
      icon: <Star size={28} />,
      gradient: "from-green-500 to-emerald-500",
      hoverBg: "hover:bg-[#022c22]",
    },
    {
      title: "JavaScript Engineering",
      desc: "We leverage modern JavaScript to build dynamic web applications. Our code follows ES6+ standards and best practices. We ensure responsive, interactive, and high-performance solutions. From simple scripts to complex systems, we cover all needs. Power your web apps with robust JavaScript development.",
      icon: <Code size={28} />,
      gradient: "from-orange-500 to-amber-500",
      hoverBg: "hover:bg-[#3f1d0d]",
    },
    {
      title: "HTML & CSS Design",
      desc: "We craft visually stunning and responsive web layouts. Our designs are pixel-perfect and optimized for all screen sizes. Using modern CSS techniques, we ensure smooth user experience. We focus on clean structure and accessibility. Turn your ideas into beautiful and functional designs.",
      icon: <Palette size={28} />,
      gradient: "from-red-500 to-rose-500",
      hoverBg: "hover:bg-[#3f0d1d]",
    },
    {
      title: "Next Js Development",
      desc: "We build high-performance applications using Next.js framework. Enjoy server-side rendering and lightning-fast load times. Our solutions are SEO-friendly and scalable. Perfect for modern web apps and production-ready platforms. Take your project to the next level with Next.js expertise.",
      icon: <Smartphone size={28} />,
      gradient: "from-indigo-500 to-blue-500",
      hoverBg: "hover:bg-[#172554]",
    },
    {
        title: "Flutter Development",
        desc: "We create beautiful cross-platform mobile apps using Flutter. Our apps deliver native-like performance on both iOS and Android. We focus on smooth UI, fast loading, and responsive design. From MVPs to full-scale apps, we handle everything. Build modern mobile experiences with a single codebase.",
        icon: <Smartphone size={28} />,
        gradient: "from-cyan-500 to-blue-500",
        hoverBg: "hover:bg-[#0c4a6e]",
      },
      {
        title: "PHP Development",
        desc: "We build secure and scalable backend systems using PHP. Our solutions are optimized for performance and reliability. From custom APIs to full web platforms, we cover all needs. We follow clean coding standards and modern frameworks. Power your applications with robust PHP development.",
        icon: <Code size={28} />,
        gradient: "from-indigo-500 to-purple-500",
        hoverBg: "hover:bg-[#2e1065]",
      },
      {
        title: "Single Page Applications",
        desc: "We develop fast and dynamic single page applications for seamless user experiences. Our SPAs eliminate page reloads and ensure smooth navigation. Built with modern frameworks like React and Vue. Optimized for speed, performance, and scalability. Deliver lightning-fast web apps with SPA architecture.",
        icon: <Zap size={28} />,
        gradient: "from-orange-500 to-red-500",
        hoverBg: "hover:bg-[#431407]",
      }
  ];

export default function ServicesUI() {
  return (
    <div className="min-h-screen bg-white text-black px-6 py-16">
      
      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-3 md:text-5xl font-bold mb-6">
          Frontend Development <span className="text-[#ff4a17]">Services</span>
        </h1>
        <p className="text-gray-600 leading-relaxed">
          We craft modern, high-performance web interfaces that deliver
          seamless user experiences. From dynamic single-page apps to
          enterprise-grade solutions, our team ensures your product stands
          out with clean design and optimized performance.
        </p>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((item, index) => (
          <div
            key={index}
            className={`group bg-[#f1f4fa] border border-gray-200 rounded-2xl p-8 
            transition-all duration-300 cursor-pointer
            hover:scale-105 ${item.hoverBg}`}
          >
            {/* ICON */}
            <div
              className={`w-14 h-14 flex items-center justify-center rounded-xl mb-6 
              bg-gradient-to-br ${item.gradient}
              transition-transform duration-500 group-hover:rotate-180`}
            >
              {item.icon}
            </div>

            {/* TITLE */}
            <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition">
              {item.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-300 transition">
              {item.desc}
            </p>

            {/* LINE */}
            <div className="mt-6 w-10 h-[2px] bg-[#ff4a17] group-hover:bg-white transition"></div>
          </div>
        ))}
      </div>
    </div>
  );
}