"use client";
import React from "react";

const col1 = [
  {
    name: "Anand Raj",
    role: "Founder, Apurva Software",
    company: "Apurva",
    image: "https://i.pravatar.cc/100?img=1",
    rating: 5,
    text: "This platform completely transformed our business workflow. Highly recommended!",
  },
  {
    name: "Juli",
    role: "UI/UX Designer",
    company: "Freelancer",
    image: "https://i.pravatar.cc/100?img=5",
    rating: 4,
    text: "Beautiful design and very smooth experience. Loved working with it.",
  },
  {
    name: "Rahul Kumar",
    role: "Full Stack Developer",
    company: "Tech Corp",
    image: "https://i.pravatar.cc/100?img=8",
    rating: 5,
    text: "The performance and architecture are top-notch. Very impressive.",
  },
];

const col2 = [
  {
    name: "Priya Singh",
    role: "Project Manager",
    company: "Innovate Ltd",
    image: "https://i.pravatar.cc/100?img=12",
    rating: 5,
    text: "Extremely reliable and professional service. Our team loves it.",
  },
  {
    name: "Amit Verma",
    role: "Entrepreneur",
    company: "StartupX",
    image: "https://i.pravatar.cc/100?img=15",
    rating: 4,
    text: "Helped us scale quickly with minimal effort. Great support team!",
  },
  {
    name: "Neha Sharma",
    role: "Marketing Lead",
    company: "Brandify",
    image: "https://i.pravatar.cc/100?img=20",
    rating: 5,
    text: "Our conversions improved significantly after using this.",
  },
];

const col3 = [
  {
    name: "Ravi Kumar",
    role: "Backend Engineer",
    company: "CodeBase",
    image: "https://i.pravatar.cc/100?img=25",
    rating: 5,
    text: "Robust and scalable solution. Exactly what we needed.",
  },
  {
    name: "Sneha Patel",
    role: "Product Designer",
    company: "DesignHub",
    image: "https://i.pravatar.cc/100?img=30",
    rating: 4,
    text: "Clean UI and great usability. A delight to use daily.",
  },
  {
    name: "Karan Mehta",
    role: "CEO",
    company: "NextGen",
    image: "https://i.pravatar.cc/100?img=35",
    rating: 5,
    text: "Absolutely worth it. Boosted our productivity massively.",
  },
];

const Stars = ({ count }) => {
  return (
    <div className="flex gap-1 mb-2">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-yellow-400 text-xs">★</span>
      ))}
    </div>
  );
};

const Column = ({ data, animation }) => {
  return (
    <div className="overflow-hidden h-[380px] relative">
      
      {/* Gradient Fade */}
      <div className="absolute top-0 w-full h-16 bg-gradient-to-b from-gray-50 to-transparent z-10" />
      <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-gray-50 to-transparent z-10" />

      <div className={`flex flex-col ${animation}`}>
        {[...data, ...data].map((item, i) => (
          <div
            key={i}
            className="bg-white shadow-lg rounded-xl p-4 my-3 mx-2 hover:scale-[1.03] transition-all duration-300"
          >
            {/* Top section */}
            <div className="flex items-center gap-3 mb-3">
              <img
                src={item.image}
                alt={item.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h4 className="text-sm font-semibold text-gray-800">
                  {item.name}
                </h4>
                <p className="text-xs text-gray-500">
                  {item.role}
                </p>
              </div>
            </div>

            {/* Rating */}
            <Stars count={item.rating} />

            {/* Text */}
            <p className="text-sm text-gray-600 leading-relaxed">
              "{item.text}"
            </p>

            {/* Company */}
            <p className="text-xs text-gray-400 mt-2">
              {item.company}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function ThreeColumnTestimonials() {
  return (
<section className="bg-gray-50 py-12 px-4 rounded-xl">
       {/* 🔥 Header Section */}
       <div className="text-center max-w-7xl mx-auto px-5">
        <h2 className="text-4xl font-bold text-gray-900">
          Client{" "}
          <span className="bg-[#ff4a17] bg-clip-text text-transparent">
            Testimonials
          </span>
        </h2>

        <div className="w-20 h-[2px] bg-[#ff4a17] mx-auto mt-4"></div>

        </div>
     {/* 🔥 3 Column Layout */}
     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Column data={col1} animation="animate-scrollSlow" />
        <Column data={col2} animation="animate-scrollMedium" />
        <Column data={col3} animation="animate-scrollFast" />
      </div>

    </section>
  );
}