import React from "react";
import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="bg-white text-[#ff4a17] py-16 px-6">
      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1 mb-6 rounded-full bg-[#111] border border-gray-700 text-sm text-gray-300">
            <span className="w-2 h-2 bg-[#ff4a17] rounded-full"></span>
            About Company
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            A Company that{" "}
            <span className="text-transparent bg-clip-text bg-[#ff4a17]">
              help
            </span>{" "}
            you do{" "}
            <span className="text-transparent bg-clip-text bg-[#ff4a17]">
              more
            </span>
          </h1>

          {/* Paragraph */}
          <p className="mt-6 text-black leading-relaxed max-w-xl">
            Apurva Software Solutions is a modern software development company,
            specializing in building scalable web and mobile applications. Our
            expert team collaborates with clients to understand their goals and
            deliver solutions tailored to their business needs.
          </p>

          {/* Bullet Points */}
          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-3">
              <CheckCircle className="text-[#ff4a17]" size={20} />
              <p className="text-black">
                We are leaders in web and app development
              </p>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle className="text-[#ff4a17]" size={20} />
              <p className="text-black">
                Serving clients across multiple countries
              </p>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle className="text-[#ff4a17]" size={20} />
              <p className="text-black">
                Helping you maximize efficiency and growth
              </p>
            </div>
          </div>

          {/* Button */}
          <button className="mt-8 px-6 py-3 rounded-lg bg-[#ff4a17] transition text-white">
            Discover More
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <img
            src="/img/about/apurva-software-solutions_aboutUs.jpg" // replace with your image
            alt="Team Working"
            className="rounded-2xl w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutSection;