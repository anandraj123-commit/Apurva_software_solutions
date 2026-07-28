"use client";



import {
    FaSearch,
    FaBullhorn,
    FaChartLine,
    FaEnvelope,
    FaHashtag,
    FaGlobe,
    FaUsers,
    FaAd,
    FaRobot,
    FaVideo,
    FaShoppingCart,
    FaBrain,
    FaCommentDots,
    FaFunnelDollar,
  } from "react-icons/fa";
  
  const services = [
    {
      icon: FaSearch,
      title: "SEO Optimization",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      description:
        "Improve your website visibility on search engines with advanced SEO strategies. We focus on keyword research, on-page optimization, and high-quality backlinks. Our approach ensures long-term organic growth and better search rankings. Drive consistent traffic and qualified leads to your business.",
    },
    {
      icon: FaBullhorn,
      title: "Social Media Marketing",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop",
      description:
        "Build a strong presence across platforms like Instagram, Facebook, and LinkedIn. We create engaging content, run targeted campaigns, and grow your audience organically. Our strategies focus on increasing engagement, brand awareness, and conversions. Stay connected with your audience effectively.",
    },
    {
      icon: FaAd,
      title: "Google Ads (PPC)",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
      description:
        "Generate instant traffic and leads through highly optimized Google Ads campaigns. We create targeted ads, manage budgets efficiently, and continuously optimize for better ROI. Reach your ideal customers at the right time. Maximize conversions while minimizing cost per click.",
    },
    {
      icon: FaChartLine,
      title: "Analytics & Growth",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      description:
        "Make data-driven decisions with advanced analytics and performance tracking. We monitor user behavior, campaign performance, and conversion metrics. Our insights help you optimize strategies for better results. Achieve sustainable growth with measurable outcomes.",
    },
    {
      icon: FaEnvelope,
      title: "Email Marketing",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=300&fit=crop",
      description:
        "Engage your audience with personalized and automated email campaigns. From newsletters to drip sequences, we ensure higher open and click rates. Build lasting relationships with your customers. Convert subscribers into loyal clients with strategic messaging.",
    },
    {
      icon: FaHashtag,
      title: "Content Marketing",
      image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=400&h=300&fit=crop",
      description:
        "Create valuable and engaging content that builds trust and authority. We develop blogs, articles, and creatives tailored to your audience. Our content strategies improve SEO and user engagement. Establish your brand as an industry leader.",
    },
    {
      icon: FaGlobe,
      title: "Website Marketing",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop",
      description:
        "Turn your website into a powerful marketing tool with optimization strategies. We improve user experience, speed, and conversion paths. Attract, engage, and convert visitors effectively. Ensure your website delivers real business results.",
    },
    {
      icon: FaUsers,
      title: "Lead Generation",
      image: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=400&h=300&fit=crop",
      description:
        "Generate high-quality leads using proven digital marketing techniques. We design funnels, landing pages, and targeted campaigns. Focus on attracting the right audience for better conversions. Grow your business with a steady pipeline of prospects.",
    },
  
    // 🔥 Trending Services
    {
      icon: FaRobot,
      title: "AI Marketing Automation",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
      description:
        "Leverage AI tools to automate repetitive marketing tasks and workflows. Personalize campaigns at scale and improve targeting accuracy. Save time while increasing efficiency and performance. Stay ahead with intelligent marketing solutions.",
    },
    {
      icon: FaVideo,
      title: "Short Video Marketing",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop",
      description:
        "Capture attention with short-form videos on platforms like Reels and YouTube Shorts. We create engaging and viral-ready content strategies. Boost brand visibility and audience engagement. Drive traffic and conversions through video storytelling.",
    },
    {
      icon: FaShoppingCart,
      title: "E-commerce Marketing",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      description:
        "Scale your online store with data-driven e-commerce marketing strategies. From product ads to retargeting campaigns, we cover it all. Improve customer acquisition and retention. Maximize your online sales and revenue.",
    },
    {
      icon: FaBrain,
      title: "AI Content Creation",
      image: "https://images.unsplash.com/photo-1677442135136-760c813028c0?w=400&h=300&fit=crop",
      description:
        "Create high-quality content faster using advanced AI tools and techniques. Generate blogs, ad copies, and creatives efficiently. Maintain consistency and creativity across all platforms. Save time while boosting content output.",
    },
    {
      icon: FaCommentDots,
      title: "Chatbot Marketing",
      image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=400&h=300&fit=crop",
      description:
        "Engage your visitors instantly with intelligent chatbot solutions. Provide real-time support and capture leads automatically. Improve user experience and response time. Convert visitors into customers with smart conversations.",
    },
    {
      icon: FaFunnelDollar,
      title: "Sales Funnel Optimization",
      image: "https://images.unsplash.com/photo-1559526324-593bc073d938?w=400&h=300&fit=crop",
      description:
        "Design and optimize sales funnels that guide users from awareness to conversion. Identify drop-off points and improve user journeys. Increase conversion rates with strategic funnel improvements. Turn traffic into revenue effectively.",
    },
  ];

export default function DigitalMarketingServices() {
  return <Services />;
}

function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="w-full px-6 md:px-12">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-black">
            Digital Marketing
            <span className="block text-[#ff4a17]">Services</span>
          </h2>
          <div className="w-20 h-[2px] bg-[#ff4a17] mx-auto mt-4"></div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
              >
                {/* Background Image */}
                <div className="h-40 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 bg-white group-hover:bg-[#ff4a17] transition-all duration-500">
                  
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl bg-[#ff4a17] text-white flex items-center justify-center text-xl mb-4  group-hover:text-[#ff4a17] transition">
                    <Icon />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900  mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 ">
                    {service.description}
                  </p>

                  {/* Button */}
                  <button className="mt-5 text-sm font-semibold text-[#ff4a17] border border-[#ff4a17] px-4 py-1 rounded-full  group-hover:border-white transition">
                    Learn More →
                  </button>
                </div>

                {/* Overlay Glow Effect */}
                <div className="absolute inset-0 bg-[#ff4a17]/0 group-hover:bg-[#ff4a17]/10 transition-all duration-500 pointer-events-none"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}