"use client";



export default function WhyChooseUs() {
  return (
    <section className="bg-[white] text-black py-16 px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT IMAGE */}
        <div className="relative w-full h-[400px] md:h-[500px]">
          <div className="absolute  rounded-[40%_60%_60%_40%/60%_40%_60%_40%] overflow-hidden">
            <img
              src="/img/web/team.jpg" // replace with your image
              alt="team"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-3xl font-bold leading-tight">
            Why Choose Our <br />
            <span className="text-[#ff4a17]">
              Custom Software
            </span>{" "}
            Development <br />
            <span className="text-[#ff4a17]">
              Company?
            </span>
          </h2>

          <p className="text-black mt-6 leading-relaxed">
            Looking for a reliable custom software development company in India?
            Apurva Software Solutions is your trusted technology partner. We
            deliver modern web and mobile applications using React, Node.js,
            Flutter, and Python. Our solutions are scalable, secure, and tailored
            to your business needs.
          </p>

          {/* FEATURES */}
          <div className="grid grid-cols-2 gap-6 mt-8 text-sm">
            <Feature color="bg-blue-500" text="React.js & React Native" />
            <Feature color="bg-pink-500" text="Flutter & Node.js" />
            <Feature color="bg-purple-500" text="Python & JavaScript" />
            <Feature color="bg-cyan-400" text="Secure & Scalable" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ color, text }) {
  return (
    <div className="flex items-center gap-3">
      <span className={`w-3 h-3 rounded-full ${color}`}></span>
      <p className="text-black">{text}</p>
    </div>
  );
}