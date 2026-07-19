import {
    FaMobileAlt,
    FaLayerGroup,
    FaChartLine,
    FaBolt,
    FaLightbulb,
    FaShieldAlt,
    FaTools,
    FaCloud,
  } from "react-icons/fa";
  
  import { useState } from "react";
  
  const services = [
    {
      title: "Expert iOS App Development Solutions",
      icon: <FaMobileAlt />,
      color: "#ff4a17",
      desc: [
        "Expertly crafted iOS applications.",
        "Built using Swift & modern frameworks.",
        "High-quality coding standards.",
        "Optimized for all Apple devices.",
        "Scalable architecture design.",
        "Fast and smooth performance.",
        "User-focused development approach.",
        "Reliable and secure solutions.",
      ],
    },
    {
      title: "End-to-End iOS Application Services",
      icon: <FaLayerGroup />,
      color: "#3b82f6",
      desc: [
        "Complete app lifecycle management.",
        "From idea to App Store launch.",
        "UI/UX design as per Apple guidelines.",
        "Backend development support.",
        "Testing and QA services.",
        "App Store deployment.",
        "Maintenance and updates.",
        "Continuous improvement process.",
      ],
    },
    {
      title: "Custom iOS App Development for Scalable Growth",
      icon: <FaChartLine />,
      color: "#22c55e",
      desc: [
        "Custom-built iOS applications.",
        "Designed for business scalability.",
        "Flexible architecture solutions.",
        "Handles growing user base.",
        "Cloud-ready integrations.",
        "Performance optimization.",
        "Future expansion support.",
        "Long-term business growth focus.",
      ],
    },
    {
      title: "High-Performance iOS App Development Company",
      icon: <FaBolt />,
      color: "#a855f7",
      desc: [
        "High-speed app performance.",
        "Efficient resource management.",
        "Low latency operations.",
        "Optimized backend systems.",
        "Smooth user experience.",
        "Robust app architecture.",
        "Advanced iOS development tools.",
        "Enterprise-grade applications.",
      ],
    },
    {
      title: "Innovative iOS Solutions for Future-Ready Apps",
      icon: <FaLightbulb />,
      color: "#ec4899",
      desc: [
        "Innovation-driven development.",
        "Future-ready mobile solutions.",
        "Latest iOS tech stack usage.",
        "AI and smart integrations.",
        "Creative UI/UX design.",
        "Adaptive application features.",
        "Modern development practices.",
        "Next-generation app experiences.",
      ],
    },
    {
      title: "iOS App Security & Data Protection",
      icon: <FaShieldAlt />,
      color: "#14b8a6",
      desc: [
        "Secure coding practices.",
        "Data encryption methods.",
        "Face ID & Touch ID integration.",
        "API security integration.",
        "Protection from vulnerabilities.",
        "Regular security testing.",
        "Apple compliance standards.",
        "Safe data handling.",
      ],
    },
    {
      title: "App Maintenance & Support",
      icon: <FaTools />,
      color: "#f97316",
      desc: [
        "Regular app updates.",
        "Bug fixing support.",
        "Performance monitoring.",
        "Feature enhancements.",
        "iOS version compatibility updates.",
        "24/7 technical support.",
        "Issue resolution.",
        "Long-term maintenance.",
      ],
    },
    {
      title: "Cloud Integration & Backend Solutions",
      icon: <FaCloud />,
      color: "#6366f1",
      desc: [
        "Cloud infrastructure setup.",
        "Firebase & iCloud integration.",
        "Real-time database sync.",
        "API development.",
        "Secure data storage.",
        "Push notifications (APNs).",
        "Scalable backend.",
        "Seamless integrations.",
      ],
    },
  ];
  
  const IosServices = () => {
    return (
      <div className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">
          Ios App <span className="text-[#ff4a17]">Development Services</span>
        </h2>
  
        {/* Row 1 */}
        <div className="grid md:grid-cols-4 gap-6 mb-6">
          {services.slice(0, 4).map((service, index) => (
            <Card key={index} service={service} />
          ))}
        </div>
  
        {/* Row 2 */}
        <div className="grid md:grid-cols-4 gap-6">
          {services.slice(4, 8).map((service, index) => (
            <Card key={index} service={service} />
          ))}
        </div>
      </div>
    );
  };
  
  const Card = ({ service }) => {
    const [hover, setHover] = useState(false);
  
    return (
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          backgroundColor: hover ? service.color : "#ffffff",
          color: hover ? "#ffffff" : "#000000",
        }}
        className="p-6 rounded-xl shadow-md transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
      >
        <div
          className="text-3xl mb-4 transition duration-300"
          style={{ color: hover ? "#fff" : "#ff4a17" }}
        >
          {service.icon}
        </div>
  
        <h3 className="text-lg font-semibold mb-3">
          {service.title}
        </h3>
  
        <ul className="text-sm space-y-1">
          {service.desc.map((line, i) => (
            <li key={i}>• {line}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default IosServices;