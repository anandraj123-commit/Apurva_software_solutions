import {
    FaCode,
    FaMobileAlt,
    FaPalette,
    FaBolt,
    FaCloud,
    FaGlobe,
  } from "react-icons/fa";
  
  const services = [
    {
      icon: FaCode,
      title: "Custom Web Development",
      description:
        "Building responsive, scalable and high-performance web applications using modern technologies tailored to your business needs.",
    },
    {
      icon: FaMobileAlt,
      title: "Mobile App Development",
      description:
        "Creating Android, iOS and cross-platform mobile applications that deliver seamless user experiences.",
    },
    {
      icon: FaPalette,
      title: "UI/UX Design",
      description:
        "Designing beautiful, intuitive and conversion-focused interfaces that delight users and improve engagement.",
    },
    {
      icon: FaBolt,
      title: "Performance Optimization",
      description:
        "Improving speed, reliability and efficiency of applications for better customer satisfaction and SEO performance.",
    },
    {
      icon: FaCloud,
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure, deployment automation and secure architecture for modern businesses.",
    },
    {
      icon: FaGlobe,
      title: "SEO & Digital Marketing",
      description:
        "Boost your online presence with strategic SEO, content marketing and digital growth solutions.",
    },
  ];
  
  export default function Services() {
    return (
      <section className="py-24 bg-white">
        <div className="w-full max-w-none mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-black">
              Software Development
              <span className="block text-[#ff4a17]">Services</span>
            </h2>
            <div class="w-20 h-[2px] bg-[#ff4a17] mx-auto mt-4"></div>
          </div>
  
          {/* Service Cards */}
  
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14 ">
            {services.map((service, index) => {
              const Icon = service.icon;
  
              return (
                <div
                key={index}
                className="group bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:!bg-[#ff4a17] hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
              >
                {/* Icon */}
              
                <div className="w-10 h-10 rounded-2xl bg-[#ff4a17] flex items-center justify-center text-white text-3xl shadow-lg mb-6 group-hover:bg-white group-hover:!text-[#ff4a17] transition-all duration-500">
                  <Icon />
                </div>
              
                {/* Title */}
              
                <h3 className="text-lg font-semibold  text-gray-900 mb-4 group-hover:text-white transition-colors duration-500">
                  {service.title}
                </h3>
              
                {/* Description */}
              
                <p className="text-gray-600 leading-relaxed text-sm group-hover:text-white/90 transition-colors duration-500">
                  {service.description}
                </p>
              
                {/* Button */}
              
                <div className="mt-8">
                  <button className="inline-flex items-center gap-2 text-[#ff4a17] font-semibold border border-[#ff4a17] px-5 py-2 rounded-full hover:bg-white hover:text-[#ff4a17] group-hover:text-white group-hover:border-white transition-all duration-500">
                    Learn More →
                  </button>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }