"use client";

import {
  FaReact,
  FaAngular,
  FaNodeJs,
  FaDocker,
  FaJenkins,
  FaGithub,
  FaAws
} from "react-icons/fa";

import { motion } from "framer-motion";

import {
  SiFlutter,
  SiExpress,
  SiReact,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

import { useState } from "react";

const techData = [
  {
    title: "React.js",
    icon: <FaReact className="text-[#61DBFB]" />,
    border: "hover:border-[#61DBFB]",
    shadow: "hover:shadow-[0_10px_30px_rgba(97,219,251,0.4)]",
    desc: "React.js enables us to build highly interactive, scalable, and component-based user interfaces. It ensures fast rendering with virtual DOM, making applications responsive and efficient.\n\nWe use React for building modern web apps, dashboards, SaaS platforms, and high-performance frontends.",
  },
  {
    title: "Angular.js",
    icon: <FaAngular className="text-[white]" />,
    border: "hover:border-[#dd1b16]",
    shadow: "hover:shadow-[0_10px_30px_rgba(221,27,22,0.4)]",
    desc: "Angular is a powerful framework for enterprise-grade applications. It provides structured architecture, dependency injection, and strong typing.\n\nWe use Angular to develop scalable single-page applications (SPAs) with maintainable codebases.",
  },
  {
    title: "Flutter",
    icon: <SiFlutter className="text-[#02569B]" />,
    border: "hover:border-[#02569B]",
    shadow: "hover:shadow-[0_10px_30px_rgba(2,86,155,0.4)]",
    desc: "Flutter allows us to create beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.\n\nIt ensures high performance and smooth UI with rich widgets and fast development cycles.",
  },
  {
    title: "Node.js",
    icon: <FaNodeJs className="text-[#68A063]" />,
    border: "hover:border-[#68A063]",
    shadow: "hover:shadow-[0_10px_30px_rgba(104,160,99,0.4)]",
    desc: "Node.js is used for building fast and scalable backend services. It handles concurrent requests efficiently using event-driven architecture.\n\nWe use Node.js for APIs, real-time apps, and microservices-based systems.",
  },
  {
    title: "Express.js",
    icon: <SiExpress className="text-gray-300" />,
    border: "hover:border-gray-400",
    shadow: "hover:shadow-[0_10px_25px_rgba(255,255,255,0.1)]",
    desc: "Express.js is a minimal and flexible Node.js framework for building robust APIs and backend services.\n\nIt simplifies routing, middleware integration, and server-side logic development.",
  },
  {
    title: "React Native",
    icon: <SiReact className="text-[#00d8ff]" />,
    border: "hover:border-[#00d8ff]",
    shadow: "hover:shadow-[0_10px_30px_rgba(0,216,255,0.4)]",
    desc: "React Native enables cross-platform mobile app development using a single codebase.\n\nWe build fast, scalable, and native-like mobile apps for Android and iOS platforms.",
  },
  {
    title: "Docker",
    icon: <FaDocker className="text-[#0db7ed]" />,
    border: "hover:border-[#0db7ed]",
    shadow: "hover:shadow-[0_10px_30px_rgba(13,183,237,0.4)]",
    desc: "Docker helps us containerize applications, ensuring consistency across development, testing, and production environments.\n\nIt simplifies deployment, scaling, and infrastructure management.",
  },
  {
    title: "Jenkins",
    icon: <FaJenkins className="text-[white]" />,
    border: "hover:border-[#d24939]",
    shadow: "hover:shadow-[0_10px_30px_rgba(210,73,57,0.4)]",
    desc: "Jenkins is used for continuous integration and continuous deployment (CI/CD).\n\nIt automates build, testing, and deployment pipelines for faster and reliable delivery.",
  },
  {
    title: "GitHub",
    icon: <FaGithub className="text-white" />,
    border: "hover:border-white",
    shadow: "hover:shadow-[0_10px_30px_rgba(255,255,255,0.2)]",
    desc: "GitHub is our primary version control and collaboration platform.\n\nIt helps manage code repositories, track changes, and collaborate efficiently across teams.",
  },
  {
    title: "MongoDB",
    icon: <SiMongodb className="text-[#4DB33D]" />,
    border: "hover:border-[#4DB33D]",
    shadow: "hover:shadow-[0_10px_30px_rgba(77,179,61,0.4)]",
    desc: "MongoDB is a NoSQL database that provides flexibility and scalability.\n\nWe use it for modern applications requiring dynamic schemas and high performance.",
  },
  {
    title: "MySQL",
    icon: <SiMysql className="text-[#00758F]" />,
    border: "hover:border-[#00758F]",
    shadow: "hover:shadow-[0_10px_30px_rgba(0,117,143,0.4)]",
    desc: "MySQL is a reliable relational database system.\n\nWe use it for structured data storage, transactions, and enterprise-level applications.",
  },
  {
    title: "AWS",
    icon: <FaAws className="text-[#FF9900]" />,
    border: "hover:border-[#FF9900]",
    shadow: "hover:shadow-[0_10px_30px_rgba(255,153,0,0.4)]",
    desc: "Amazon Web Services (AWS) provides scalable and reliable cloud infrastructure for modern applications.\n\nWe use AWS for deployment, storage, server management, and building highly available and secure systems.",
  }
];

const Sparkle = ({ x, y }) => {
  return (
    <motion.span
      className="absolute w-[4px] h-[4px] bg-[#ff4a17] rounded-full pointer-events-none"
      initial={{ opacity: 1, scale: 0 }}
      animate={{ opacity: 0, scale: 3 }}
      transition={{ duration: 1 }}
      style={{ top: y, left: x }}
    />
  );
};

const TechCard = ({ item }) => {
  const [sparkles, setSparkles] = useState([]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newSparkle = {
      id: Date.now() + Math.random(),
      x,
      y,
    };

    setSparkles((prev) => [...prev.slice(-10), newSparkle]);

    setTimeout(() => {
      setSparkles((prev) =>
        prev.filter((s) => s.id !== newSparkle.id)
      );
    }, 600);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`relative overflow-hidden group rounded-2xl border border-gray-700 bg-[#f1f4fa]   p-8 transition duration-300 transform hover:-translate-y-2 ${item.border} ${item.shadow}`}
    >
      {sparkles.map((s) => (
        <Sparkle key={s.id} x={s.x} y={s.y} />
      ))}

      <div className="relative z-10 w-14 h-14 flex items-center justify-center rounded-xl bg-[#ff4a17] mb-5 text-2xl text-white">
        {item.icon}
      </div>

      <h3 className="relative z-10 text-lg font-semibold mb-3 text-[#ff4a17] group-hover:text-[#ff4a17] transition">
        {item.title}
      </h3>

      <p className="relative z-10 text-black leading-relaxed whitespace-pre-line text-sm">
        {item.desc}
      </p>
    </div>
  );
};

export default function TechnologySection() {
  return (
    <section className="bg-white w-full max-w-none px-6">
      <div className="text-center  mx-auto">
        <h2 className="text-3xl font-bold text-gray-900">
          Our{" "}
          <span className="bg-[#ff4a17] bg-clip-text text-transparent">
            Technology
          </span>
        </h2>

        <div className="w-20 h-[2px] bg-[#ff4a17] mx-auto mt-4"></div>

        <p className="text-black mt-4">
          We use modern tools, frameworks, and DevOps practices to build scalable digital solutions.
        </p>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          {techData.map((item, i) => (
            <TechCard key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}