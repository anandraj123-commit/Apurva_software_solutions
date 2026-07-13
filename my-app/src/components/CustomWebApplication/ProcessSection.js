const processSteps = [
    {
      title: "Discovery & Strategy",
      desc: "We begin by understanding your goals, audience, and market. This helps us craft a clear roadmap before development starts.",
      icon: "📋",
    },
    {
      title: "Interface Design",
      desc: "Our team designs intuitive and visually appealing interfaces that ensure smooth user experiences across all devices.",
      icon: "🎨",
    },
    {
      title: "Development Phase",
      desc: "We build scalable and high-performance applications using modern technologies tailored to your business needs.",
      icon: "💻",
    },
    {
      title: "Testing & Deployment",
      desc: "Before launch, we rigorously test your application to ensure reliability, security, and flawless performance.",
      icon: "🛡️",
    },
    {
      title: "Continuous Support",
      desc: "Our job doesn’t end at launch. We monitor, maintain, and optimize your system for long-term success.",
      icon: "🎧",
    },
    {
      title: "Growth & Optimization",
      desc: "We continuously enhance your platform with updates, analytics, and improvements to boost performance and engagement.",
      icon: "🚀",
    },
  ];
  
  const ProcessSection = () => {
    const iconStyles = [
      "bg-blue-900",
      "bg-purple-900",
      "bg-orange-900",
      "bg-green-900",
      "bg-pink-900",
      "bg-indigo-900",
    ];
  
    return (
      <section className="bg-[#f1f4fa] text-black py-20 px-6">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-black text-transparent bg-clip-text">
            How We Build <span className="text-[#ff4a17]">Digital Products</span>
          </h2>
          <p className="text-black mt-4">
            A structured workflow designed for quality and efficiency
          </p>
        </div>
  
        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
  
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl border border-gray-800 bg-white hover:border-[#ff4a17] transition duration-300"
            >
              
              {/* Glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-[#ff4a17]/10 blur-2xl rounded-2xl"></div>
  
              {/* Icon */}
              <div
                className={`relative z-10 w-14 h-14 flex items-center justify-center rounded-xl text-2xl mb-6 text-white ${
                  iconStyles[index % iconStyles.length]
                }`}
              >
                {step.icon}
              </div>
  
              {/* Title */}
              <h3 className="relative z-10 text-xl font-semibold mb-3 group-hover:text-[#ff4a17] transition">
                {step.title}
              </h3>
  
              {/* Description */}
              <p className="relative z-10 text-black leading-relaxed text-sm">
                {step.desc}
              </p>
            </div>
          ))}
  
        </div>
      </section>
    );
  };
  
  export default ProcessSection;