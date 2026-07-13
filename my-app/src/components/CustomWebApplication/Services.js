import {
    RefreshCw,
    ShoppingCart,
    Layout,
    Server,
    BarChart3,
    Globe,
    ShieldCheck,
    Cloud,
    Code,
    Smartphone,
    Database,
    Cpu,
  } from "lucide-react";
  
  const services = [
    {
      title: "Legacy System Modernization",
      desc: "We transform outdated systems into modern, scalable solutions. Improve performance, security, and maintainability. Reduce technical debt with clean architecture. Enable faster updates and integrations. Future-proof your business technology stack.",
      icon: RefreshCw,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Custom Web Applications",
      desc: "We build tailored web applications for your unique needs. Deliver high performance and seamless user experience. Designed to scale as your business grows. Clean, maintainable, and efficient codebase. Focused on solving real-world problems.",
      icon: Code,
      gradient: "from-pink-500 to-red-500",
    },
    {
      title: "Website & Portal Development",
      desc: "We create responsive and user-friendly websites. Design portals for customers, employees, and partners. Optimized for speed, accessibility, and SEO. Built with modern UI/UX practices. Perfect for engagement and conversions.",
      icon:Layout,
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "E-commerce Solutions",
      desc: "Launch powerful and scalable online stores. Secure payment integration and smooth checkout. Optimized for high conversions and performance. Manage products, orders, and users easily. Built for growth and reliability.",
      icon: ShoppingCart,
      gradient: "from-orange-400 to-yellow-500",
    },
    {
      title: "Enterprise Applications",
      desc: "Develop robust enterprise-grade web applications. Built for high performance and scalability. Secure and reliable for critical operations. Integrates seamlessly with existing systems. Supports complex business workflows.",
      icon: Server,
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      title: "Analytics & Dashboards",
      desc: "Turn raw data into meaningful insights. Build real-time dashboards and reports. Visualize trends and key performance metrics. Make data-driven decisions with confidence. Designed for clarity and usability.",
      icon: BarChart3,
      gradient: "from-lime-400 to-green-500",
    },
    {
      title: "API Development & Integration",
      desc: "Design and build secure, scalable APIs. Enable smooth system-to-system communication. Integrate third-party services effortlessly. Improve performance and flexibility. Built with best practices and standards.",
      icon: Globe,
      gradient: "from-cyan-400 to-blue-500",
    },
    {
      title: "Cloud Application Development",
      desc: "Build scalable cloud-native applications. Ensure high availability and performance. Deploy using modern cloud infrastructure. Optimize cost and resource usage. Designed for flexibility and growth.",
      icon:Cloud,
      gradient: "from-blue-400 to-indigo-500",
    },
    {
      title: "Web Security Solutions",
      desc: "Protect your applications from modern threats. Implement best security practices and protocols. Conduct audits and vulnerability assessments. Ensure data privacy and compliance. Build trust with secure systems.",
      icon: ShieldCheck,
      gradient: "from-red-500 to-pink-500",
    },
    {
      title: "Mobile-Friendly Web Apps",
      desc: "Create fully responsive web applications. Deliver seamless experience across devices. Optimized for mobile performance and usability. Consistent UI across screen sizes. Built for modern users on the go.",
      icon: Smartphone,
      gradient: "from-teal-400 to-cyan-500",
    },
    {
      title: "Database Design & Optimization",
      desc: "Design efficient and scalable database systems. Optimize queries for high performance. Ensure data integrity and reliability. Handle large-scale data with ease. Improve speed and system efficiency.",
      icon: Database,
      gradient: "from-indigo-400 to-purple-500",
    },
    {
      title: "AI & Automation Solutions",
      desc: "Integrate AI to enhance your applications. Automate repetitive and complex tasks. Improve efficiency and decision-making. Build smarter and adaptive systems. Stay ahead with intelligent solutions.",
      icon: Cpu,
      gradient: "from-green-400 to-emerald-500",
    },
  ];
  
  export default function Services() {
    return (
      <section className="bg-[#f1f4fa] text-white py-20 px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-black text-transparent bg-clip-text">
            Services <span className="text-[#ff4a17]">Offered</span>
          </h2>
         
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
  
            return (
              <div
                key={i}
                className="bg-white border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,255,0.15)] transition duration-300"
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient}`}
                >
                  <Icon className="text-white" size={24} />
                </div>
  
                {/* Title */}
                <h3 className="text-xl font-semibold mt-6 mb-3 group-hover:text-[#ff4a17]">
                  {service.title}
                </h3>
  
                {/* Description */}
                <p className="text-black text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    );
  }