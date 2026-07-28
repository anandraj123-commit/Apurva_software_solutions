"use client";

export default function WhyChooseUsForDigitalMarketingService() {
  return <WhyChooseUs />;
}

function WhyChooseUs() {
  return (
    <section className="bg-[white] text-black py-16 px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT IMAGE */}
        <div className="relative w-full h-[400px] md:h-[500px]">
          <div className="absolute rounded-[40%_60%_60%_40%/60%_40%_60%_40%] overflow-hidden">
            <img
              src="/img/web/team.jpg"
              alt="team"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-3xl font-bold leading-tight">
            Why Choose Our <br />
            <span className="text-[#ff4a17]">
              Digital Marketing
            </span>{" "}
            Services <br />
            <span className="text-[#ff4a17]">
              Company?
            </span>
          </h2>

          <p className="text-black mt-6 leading-relaxed">
            Looking to grow your business online? Apurva Software Solutions
            provides result-driven digital marketing services to boost your
            brand visibility, generate quality leads, and increase conversions.
            From SEO to social media marketing, we create strategies tailored
            to your business goals.
          </p>

          {/* FEATURES */}
          <div className="grid grid-cols-2 gap-6 mt-8 text-sm">
            <Feature color="bg-blue-500" text="SEO & Local SEO" />
            <Feature color="bg-pink-500" text="Social Media Marketing" />
            <Feature color="bg-purple-500" text="Google Ads & PPC Campaigns" />
            <Feature color="bg-cyan-400" text="Lead Generation & Branding" />
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