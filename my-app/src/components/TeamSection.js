import { Phone, Mail, Users } from "lucide-react";

export default function TeamSection() {
  return (
    <section className="py-24 bg-[#f1f4fa]">
      <div className="container mx-auto px-6">
        {/* Section Header */}

        <div className="text-center mb-16">

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900">
            Experts Behind
            <span className="block text-[#ff4a17]">
              Apurva Software Solutions
            </span>
          </h2>
        </div>

        {/* Content */}

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <div className="relative flex justify-center">
  <img
    src="/img/working-3.jpg"
    alt="Team"
    className="
      w-full
      max-w-[550px]
      h-[550px]
      object-cover
      shadow-2xl
      rounded-[58%_42%_35%_65%/45%_35%_65%_55%]
    "
  />
</div>

          {/* Right Content */}

          <div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Apurva Software Solutions is a trusted software development
              company specializing in custom software development, web
              applications, mobile applications, AI solutions, cloud services,
              and digital transformation.
            </p>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Our experienced team delivers scalable, secure and innovative
              technology solutions that help businesses grow faster and operate
              more efficiently.
            </p>

            {/* Contact Cards */}

            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-5 p-6 rounded-3xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition">
                <div className="w-16 h-16 rounded-2xl bg-[#ff4a17] flex items-center justify-center text-white">
                  <Phone size={28} />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Phone Number</p>
                  <h4 className="text-lg font-bold text-gray-900">
                    +91 6203253537
                  </h4>
                </div>
              </div>

              <div className="flex items-center gap-5 p-6 rounded-3xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition">
                <div className="w-16 h-16 rounded-2xl bg-[#ff4a17] flex items-center justify-center text-white">
                  <Mail size={28} />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Email Address</p>
                  <h4 className="text-lg font-bold text-gray-900">
                    supports@apurvasoftwaresolutions.com
                  </h4>
                </div>
              </div>
            </div>

            {/* Buttons */}

            <div className="flex flex-wrap gap-4 mt-10">
  <a
    href="tel:+919876543210"
    className="px-6 py-2.5 rounded-full bg-[#ff4a17] text-white font-semibold hover:scale-105 transition"
  >
    Call Now
  </a>

  <a
    href="mailto:info@apurvasoftwaresolutions.com"
    className="px-6 py-2.5 rounded-full border-2 border-[#ff4a17] text-[#ff4a17] font-semibold hover:bg-[#ff4a17] hover:text-white transition"
  >
    Send Email
  </a>
</div>
          </div>
        </div>
      </div>
    </section>
  );
}