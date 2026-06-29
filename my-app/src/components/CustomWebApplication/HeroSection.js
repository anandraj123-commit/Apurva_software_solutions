const HeroSection = () => {
  return (
    <section className="relative bg-white text-black overflow-hidden">
      {/* Background glow lines */}
      <div className="absolute inset-0 opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center relative z-10">
        
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Customized Web <br />
            Development <br />
            <span className="text-[#ff4a17]">Solutions</span>
          </h1>

          
<p> Launching a website today requires more than just basic development—it demands strategy, creativity, and technical expertise. For businesses without an in-house team, this can quickly become overwhelming. That’s where we step in. We offer dependable and end-to-end web development services designed to simplify your digital journey.</p>
<p>From crafting modern, high-performing websites to upgrading and maintaining existing platforms, we handle everything so you can focus on growing your business. Our goal is simple: to help you succeed in the digital space with solutions that are both powerful and user-friendly.</p>
<p>We specialize in custom web design, performance optimization, SEO, and seamless integration with social platforms and third-party tools. Our team works collaboratively—planning, designing, developing, and continuously improving your website or application to ensure it stays ahead of the curve.</p>
<p>With a strong focus on speed, usability, and innovation, we deliver smart web solutions that drive digital transformation and streamline your business operations.</p>

        
          {/* Buttons */}
          <div className="mt-8 flex gap-4">
          <button
  onClick={() => {
    document
      .getElementById("contact")
      .scrollIntoView({ behavior: "smooth" });
  }}
  className="bg-[#ff4a17] text-white px-6 py-3 rounded-full font-medium transition hover:bg-black"
>
  Get a Free Consultation
</button>
            
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <img
            src="/img/web-application.png" // replace with your image
            alt="web development"
            className="rounded-xl shadow-lg"
          />

          {/* Floating Badge - Projects */}
          <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md px-4 py-2 rounded-xl border border-gray-700">
            <p className="text-[#ff4a17] font-bold">500+</p>
            <p className="text-sm text-[white]">Projects Delivered</p>
          </div>

          {/* Floating Badge - Satisfaction */}
          <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-md px-4 py-2 rounded-xl border border-gray-700 flex items-center gap-2">
            <span className="w-2 h-2 bg-[#ff4a17] rounded-full"></span>
            <p className="text-sm text-gray-300">
              100% Client Satisfaction
            </p>
          </div>
        </div>
      </div>

     
    </section>
  );
};

export default HeroSection;