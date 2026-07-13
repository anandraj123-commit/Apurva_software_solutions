import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaJs,
  FaAngular,
  FaMobileAlt,
  FaPython,
  FaServer,
} from "react-icons/fa";

const techData = [
  {
    title: "ReactJS",
    icon: <FaReact />,
    desc: "Our ReactJS web app development services help businesses build scalable, high-performance applications with modern UI experiences.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "JavaScript",
    icon: <FaJs />,
    desc: "JavaScript enables dynamic and interactive web applications. It powers both frontend and backend through modern frameworks.",
    color: "from-yellow-400 to-yellow-600",
  },
  {
    title: "AngularJS",
    icon: <FaAngular />,
    desc: "Our Angular experts build powerful single-page applications with clean architecture and scalable solutions.",
    color: "from-red-500 to-pink-600",
  },
  {
    title: "Flutter Web",
    icon: <FaMobileAlt />,
    desc: "Flutter allows building beautiful cross-platform apps with a single codebase and high performance UI.",
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "Python",
    icon: <FaPython />,
    desc: "We use Python to build scalable backend systems, automation tools, and modern web applications.",
    color: "from-green-400 to-yellow-500",
  },
  {
    title: "Django",
    icon: <FaServer />,
    desc: "Django helps us build secure and scalable web apps quickly with powerful backend capabilities.",
    color: "from-green-700 to-green-900",
  },
  {
    title: "MERN Stack",
    icon: <FaReact />,
    desc: "MERN stack combines MongoDB, Express, React, and Node.js to build full-stack applications with seamless performance and scalability.",
    color: "from-green-400 to-green-600",
  },
  {
    title: "MEAN Stack",
    icon: <FaAngular />,
    desc: "MEAN stack leverages MongoDB, Express, Angular, and Node.js to create dynamic and enterprise-grade web applications.",
    color: "from-red-400 to-red-600",
  },
  {
    title: "MEVN Stack",
    icon: <FaJs />,
    desc: "MEVN stack integrates MongoDB, Express, Vue, and Node.js to develop flexible and modern full-stack applications.",
    color: "from-green-300 to-emerald-500",
  },
  {
    title: "Next.js",
    icon: <FaReact />,
    desc: "Next.js enables fast, SEO-friendly web applications with server-side rendering and optimized performance.",
    color: "from-gray-400 to-gray-700",
  },
  {
    title: "DevOps",
    icon: <FaServer />,
    desc: "Our DevOps solutions streamline development and operations, ensuring faster delivery, automation, and system reliability.",
    color: "from-orange-400 to-red-500",
  },
  {
    title: "GitHub Actions",
    icon: <FaJs />,
    desc: "GitHub Actions helps automate workflows, CI/CD pipelines, and testing directly from your repository.",
    color: "from-gray-600 to-gray-900",
  },
  {
    title: "Jenkins",
    icon: <FaServer />,
    desc: "Jenkins enables continuous integration and delivery, helping teams automate builds, testing, and deployment pipelines.",
    color: "from-red-500 to-orange-600",
  },
  {
    title: "AWS",
    icon: <FaServer />,
    desc: "AWS provides scalable cloud infrastructure, enabling secure, flexible, and high-performance application deployment.",
    color: "from-yellow-400 to-orange-500",
  },
  {
    title: "MySQL",
    icon: <FaServer />,
    desc: "MySQL is a reliable relational database system used for structured data storage and high-performance applications.",
    color: "from-blue-400 to-blue-700",
  },
  {
    title: "PostgreSQL",
    icon: <FaServer />,
    desc: "PostgreSQL is an advanced open-source database known for reliability, scalability, and powerful data handling.",
    color: "from-indigo-400 to-indigo-700",
  },
  {
    title: "MongoDB",
    icon: <FaServer />,
    desc: "MongoDB is a NoSQL database designed for flexibility, scalability, and handling large volumes of unstructured data.",
    color: "from-green-500 to-green-800",
  },
  {
    title: "PHP",
    icon: <FaServer />,
    desc: "PHP is a widely-used server-side scripting language ideal for building dynamic websites and robust web applications with fast performance and flexibility.",
    color: "from-indigo-500 to-purple-700",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Technologies = () => {
  return (
    <section className="bg-white text-black py-20 px-6 lg:px-20 overflow-hidden">
      
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl lg:text-5xl font-bold">
          Technologies <span className="text-[#ff4a17]">We Master</span>
        </h2>
        <p className="mt-4 text-lg">
          Leveraging the latest stack for powerful solutions
        </p>
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {techData.map((tech, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              rotateX: 5,
              rotateY: 5,
            }}
            transition={{ type: "spring", stiffness: 200 }}
            className="group relative p-8 rounded-2xl bg-[#f1f4fa] border border-white/10 transition duration-300 hover:border-[#ff4a17]"
          >
            
            {/* Glow Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition duration-500 bg-gradient-to-br from-[#ff4a17] to-transparent rounded-2xl"></div>

            {/* Icon */}
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              className={`w-16 h-16 flex items-center justify-center rounded-xl text-2xl mb-6 bg-gradient-to-br ${tech.color}`}
            >
              <span className="text-white">{tech.icon}</span>
            </motion.div>

            {/* Title */}
            <h3 className="text-2xl font-semibold mb-4">
              {tech.title}
            </h3>

            {/* Description */}
            <p className="leading-relaxed">
              {tech.desc}
            </p>

            {/* Bottom Line Animation */}
            <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#ff4a17] group-hover:w-full transition-all duration-500"></div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Technologies;