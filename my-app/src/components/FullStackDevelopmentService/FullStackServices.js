"use client";

import {
  Server,
  Database,
  Cloud,
  Shield,
  Code2,
  GitBranch,
  Monitor,
  Settings
} from "lucide-react";

const services = [
  {
    title: "Frontend Development",
    icon: Monitor,
    iconColor: "text-[#ff4a17]",
    hoverIcon: "group-hover:text-orange-700",
    border: "hover:border-[#ff4a17]",
    bg: "hover:bg-orange-100",
    animation: "group-hover:-translate-y-1",
    desc: [
      "Modern UI built with React and Next.js.",
      "Responsive design for all screen sizes.",
      "Pixel-perfect and premium UI/UX.",
      "Optimized performance and fast loading.",
      "Reusable and scalable components.",
      "Smooth animations and transitions.",
      "SEO-friendly frontend architecture.",
      "User-focused design approach.",
    ],
  },
  {
    title: "End-to-End Development",
    icon: Code2,
    iconColor: "text-blue-500",
    hoverIcon: "group-hover:text-blue-700",
    border: "hover:border-blue-500",
    bg: "hover:bg-blue-100",
    animation: "group-hover:rotate-12",
    desc: [
      "Complete software lifecycle from idea to launch.",
      "We plan, design, develop, and deploy solutions.",
      "Frontend and backend handled seamlessly.",
      "Agile methodology ensures faster delivery.",
      "Scalable architecture for future growth.",
      "Clean and maintainable code practices.",
      "Optimized performance and responsiveness.",
      "Continuous improvement and iteration.",
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    iconColor: "text-green-500",
    hoverIcon: "group-hover:text-green-700",
    border: "hover:border-green-500",
    bg: "hover:bg-green-100",
    animation: "group-hover:scale-125",
    desc: [
      "Robust backend systems using modern tech.",
      "Node.js, Python, Java, and .NET expertise.",
      "Secure and scalable API development.",
      "Microservices-based architecture.",
      "Efficient data processing pipelines.",
      "Authentication and authorization systems.",
      "High performance and low latency APIs.",
      "Cloud-ready backend solutions.",
    ],
  },
  {
    title: "Database Solutions",
    icon: Database,
    iconColor: "text-purple-500",
    hoverIcon: "group-hover:text-purple-700",
    border: "hover:border-purple-500",
    bg: "hover:bg-purple-100",
    animation: "group-hover:-translate-y-2",
    desc: [
      "Design of efficient database structures.",
      "SQL and NoSQL database expertise.",
      "Data modeling and normalization.",
      "Query optimization for performance.",
      "Secure data storage and encryption.",
      "Real-time data synchronization.",
      "Backup and disaster recovery systems.",
      "Scalable database infrastructure.",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    iconColor: "text-cyan-500",
    hoverIcon: "group-hover:text-cyan-700",
    border: "hover:border-cyan-500",
    bg: "hover:bg-cyan-100",
    animation: "group-hover:animate-bounce",
    desc: [
      "Cloud infrastructure setup and management.",
      "CI/CD pipelines for automation.",
      "Docker and Kubernetes expertise.",
      "AWS, Azure, and GCP deployment.",
      "Monitoring and logging systems.",
      "High availability configurations.",
      "Cost optimization strategies.",
      "Secure cloud architecture design.",
    ],
  },
  {
    title: "API Development",
    icon: GitBranch,
    iconColor: "text-pink-500",
    hoverIcon: "group-hover:text-pink-700",
    border: "hover:border-pink-500",
    bg: "hover:bg-pink-100",
    animation: "group-hover:rotate-180",
    desc: [
      "RESTful API design and development.",
      "GraphQL APIs for flexible data access.",
      "Third-party API integrations.",
      "Versioning and documentation support.",
      "Secure API authentication methods.",
      "High-performance request handling.",
      "Scalable API architecture.",
      "Testing and monitoring APIs.",
    ],
  },
  {
    title: "Security & Performance",
    icon: Shield,
    iconColor: "text-yellow-500",
    hoverIcon: "group-hover:text-yellow-700",
    border: "hover:border-yellow-500",
    bg: "hover:bg-yellow-100",
    animation: "group-hover:scale-110",
    desc: [
      "Advanced application security practices.",
      "Performance optimization techniques.",
      "Load testing and stress testing.",
      "Data encryption and protection.",
      "Vulnerability assessment.",
      "Compliance with industry standards.",
      "Secure coding best practices.",
      "Continuous monitoring and updates.",
    ],
  },
  {
    title: "Maintenance & Support",
    icon: Settings,
    iconColor: "text-red-500",
    hoverIcon: "group-hover:text-red-700",
    border: "hover:border-red-500",
    bg: "hover:bg-red-100",
    animation: "group-hover:rotate-90",
    desc: [
      "24/7 monitoring and issue resolution.",
      "Regular updates and performance tuning.",
      "Bug fixing and stability improvements.",
      "Security patches and upgrades.",
      "Continuous feature enhancements.",
      "Server and infrastructure maintenance.",
      "Backup and recovery management.",
      "Long-term technical support partnership.",
    ],
  }
];

export default function FullStackServices() {
  return (
    <section className="bg-white text-black px-6 w-full max-w-none">
      {/* Heading */}
      <div className="text-center mx-auto mb-16">
        <h2 className="text-3xl  font-bold">
          Full Stack {" "}
          <span className="text-[#ff4a17]">Development Services</span>
        </h2>
        <p className="mt-4 text-gray-600">
          We deliver end-to-end full stack solutions, transforming ideas into
          scalable, high-performance digital products across every layer of
          modern web applications.
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-4 gap-8  mx-auto">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <div
              key={index}
              className={`group border rounded-2xl p-6 transition-all duration-300 
              bg-[#f1f4fa] hover:shadow-2xl hover:-translate-y-2 
              ${service.border} ${service.bg}`}
            >
              {/* Icon */}
              <div
                className={`mb-4 transition duration-500 
                ${service.iconColor} ${service.hoverIcon} ${service.animation}`}
              >
                <Icon size={36} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-4">
                {service.title}
              </h3>

              {/* Content */}
              <ul className="text-sm space-y-1 text-gray-700">
                {service.desc.map((line, i) => (
                  <li key={i}>• {line}</li>
                ))}
              </ul>

              {/* CTA */}
              <button className="mt-6 text-[#ff4a17] text-sm hover:underline">
                Learn More →
              </button>
            </div>
          );
        })}
      </div>

      {/* Floating Button */}
      <div className="fixed bottom-6 right-6">
        <button className="bg-[#ff4a17] text-white px-6 py-3 rounded-full shadow-xl hover:scale-105 transition-all duration-300">
          Got questions?
        </button>
      </div>
    </section>
  );
}