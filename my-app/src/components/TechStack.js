import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiTypescript,
  SiRedux,
  SiMobx,
  SiFirebase,
  SiGraphql,
  SiJest,
} from "react-icons/si";
import { FaServer, FaMobileAlt } from "react-icons/fa";

const techStack = [
  { name: "React Native", icon: <SiReact /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Redux", icon: <SiRedux /> },
  { name: "MobX", icon: <SiMobx /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "GraphQL", icon: <SiGraphql /> },
  { name: "REST APIs", icon: <FaServer /> },
  { name: "Jest", icon: <SiJest /> },
  { name: "Detox", icon: <FaMobileAlt /> },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const TechStack = () => {
  return (
    <div className="bg-white py-16 px-6">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">
          Our <span className="text-[#ff4a17]">Tech Stack</span>
        </h2>
        <p className="text-gray-500 mt-3">
          We use cutting-edge technologies to build robust mobile applications
        </p>
      </div>

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto"
      >
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="h-28 cursor-pointer"
            style={{ perspective: "1000px" }} // Tailwind doesn't support this
          >
            <motion.div
              className="relative w-full h-full"
              whileHover={{ rotateY: 180 }}
              transition={{ duration: 0.6 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Front */}
              <div
                className="absolute inset-0 flex items-center justify-center bg-gray-50 border rounded-xl"
                style={{ backfaceVisibility: "hidden" }}
              >
                <span className="text-[#ff4a17] font-semibold text-sm text-center px-2">
                  {tech.name}
                </span>
              </div>

              {/* Back */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center bg-[#ff4a17] text-white rounded-xl"
                style={{
                  transform: "rotateY(180deg)",
                  backfaceVisibility: "hidden",
                }}
              >
                <div className="text-3xl mb-2">
                  {tech.icon}
                </div>
                <span className="text-xs">{tech.name}</span>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechStack;