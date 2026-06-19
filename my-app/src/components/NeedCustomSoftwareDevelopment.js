"use client";
import React from "react";
import { Code2, Cloud, Wrench } from "lucide-react";

export default function NeedCustomSoftwareDevelopment() {
  return (
    <section className="bg-[white] text-white min-h-screen flex items-center px-6 md:px-16 relative overflow-hidden">

      {/* LEFT CONTENT */}
      <div className="max-w-xl z-10">

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Need a Custom <br />
          Software{" "}
          <span className="bg-[#ff4a17] text-transparent bg-clip-text">
            Development
          </span>{" "}
          Company?
        </h1>

        {/* Description */}
        <p className="text-black text-sm md:text-base mb-8 leading-relaxed">
          Whether you need software development services, custom software
          development, or cloud applications, our custom software development
          company has the right solution. Contact us today to discover how our
          software development services can help your business succeed.
        </p>

        {/* Feature Cards */}
        <div className="space-y-4 mb-8">

          <div className="flex items-center gap-3 border border-gray-800 rounded-xl px-4 py-3 bg-white/5 backdrop-blur-md">
            <Wrench className="text-[#ff4a17]" size={18} />
            <span className="text-sm text-black">Software Development Consulting</span>
          </div>

          <div className="flex items-center gap-3 border border-gray-800 rounded-xl px-4 py-3 bg-white/5 backdrop-blur-md">
            <Code2 className="text-[#ff4a17]" size={18} />
            <span className="text-sm text-black">Custom Software Development Services</span>
          </div>

          <div className="flex items-center gap-3 border border-gray-800 rounded-xl px-4 py-3 bg-white/5 backdrop-blur-md">
            <Cloud className="text-[#ff4a17]" size={18} />
            <span className="text-sm text-black">Cloud Application Development</span>
          </div>

        </div>

        {/* CTA Button */}
        <button className="px-6 py-3 rounded-full bg-[#ff4a17] text-white font-medium flex items-center gap-2 hover:opacity-90 transition">
          Start a Project →
        </button>

      </div>

      {/* RIGHT IMAGE */}
      <div className="hidden md:flex absolute -right-24 bottom-0 h-full">
        <img
          src="/img/Apurva_software_solutions_promoter.png"
          alt="apurva software solutions"
          className="h-[100%] object-contain"
        />
      </div>

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-cyan-900/20 pointer-events-none" />

    </section>
  );
}