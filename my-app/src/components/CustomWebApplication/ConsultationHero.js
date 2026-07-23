const ConsultationHero = () => {
  return (
    <section className="bg-[white] text-black min-h-screen flex items-center px-6 w-full max-w-none relative overflow-hidden">
      
      <div className="mx-auto grid md:grid-cols-2 gap-12 items-center w-full">
        
        {/* LEFT CONTENT */}
        <div>
          <p className="text-[#ff4a17] tracking-widest uppercase text-sm mb-4">
            SIMPLE TO GET STARTED
          </p>

          <h1 className="text-3xl font-bold leading-tight mb-6">
            Get A Free{" "}
            <span className=" text-[#ff4a17] bg-clip-text">
              Consultation
            </span>
          </h1>

          <p className="text-black leading-relaxed mb-8">
          Apurva Software Solutions focuses on delivering tailored software development, expert consulting, and innovative product solutions that align with modern business needs. We believe true success in the tech industry comes from building forward-thinking, scalable, and impactful digital products. By combining creativity with technical excellence, we help our clients stay ahead through cutting-edge and reliable software solutions designed for long-term growth.
          </p>

          <button
  onClick={() => {
    document
      .getElementById("contact")
      .scrollIntoView({ behavior: "smooth" });
  }}
  className="bg-[#ff4a17] text-white px-8 py-4 rounded-xl font-medium shadow-lg hover:scale-105 transition"
>
  Consult Today
</button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">
          
          {/* Circle Image */}
          <div className="w-[400px] h-[400px] rounded-full  overflow-hidden relative">
            <img
              src="/img/team/apurva-software-solutions.jpg" // replace with your image
              alt="team"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Support Card */}
          <div className="absolute bottom-10 left-10 bg-[#ff4a17] backdrop-blur-lg px-6 py-4 rounded-xl border border-white/20 shadow-xl flex items-center gap-4">
            <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center">
              ↗
            </div>
            <div>
              <p className="font-bold text-white">24/7</p>
              <p className="text-gray-300 text-sm">Active Support</p>
            </div>
          </div>

       
        </div>
      </div>
    </section>
  );
};

export default ConsultationHero;