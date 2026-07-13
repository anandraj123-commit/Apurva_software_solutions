import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export default function MobileService() {
  return (
 
          <div className="w-full flex justify-center">
            {/* PHONE FRAME */}
            <div className="relative w-[360px] h-[720px] rounded-[56px] bg-black shadow-2xl overflow-hidden border border-white/10">
      
              {/* TOP NOTCH */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[120px] h-[34px] bg-black rounded-full shadow-md z-20" />
      
              {/* SCREEN */}
              <div className="absolute inset-[60px_0_34px_0] bg-gradient-to-br from-gray-900 to-black p-4 overflow-hidden">
      
                {/* HEADER */}
                <div className="flex items-center justify-between mb-6">
                  <h1 className="text-white text-sm font-semibold">
                    Mobile App Services
                  </h1>
      
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                    📱
                  </div>
                </div>
      
                {/* CARD 1 */}
                <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                    <div>
                      <h2 className="text-white text-sm font-medium">
                        Mobile App Development Services
                      </h2>
                      <p className="text-white/50 text-xs">
                        iOS & Android
                      </p>
                    </div>
                  </div>
      
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-blue-500/20 rounded-lg p-3 text-center">
                      <p className="text-blue-400 font-bold">iOS</p>
                      <p className="text-white/60 text-xs">Native</p>
                    </div>
      
                    <div className="bg-purple-500/20 rounded-lg p-3 text-center">
                      <p className="text-purple-400 font-bold">Android</p>
                      <p className="text-white/60 text-xs">Native</p>
                    </div>
                  </div>
                </div>
      
                {/* CARD 2 */}
                <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 mb-4">
                  <h3 className="text-white text-sm mb-3">
                    Mobile App Technologies
                  </h3>
      
                  {[
                    { name: "React Native", type: "Framework" },
                    { name: "Flutter", type: "Framework" },
                    { name: "Swift", type: "iOS Language" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 py-2 border-b border-white/10 last:border-0"
                    >
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30" />
                      <div>
                        <p className="text-white text-sm">{item.name}</p>
                        <p className="text-white/40 text-xs">{item.type}</p>
                      </div>
                    </div>
                  ))}
                </div>
      
                {/* IMAGE PLACEHOLDER */}
                <img
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3"
                  alt="app"
                  className="rounded-lg mt-4"
                />
              </div>
      
              {/* BOTTOM HOME INDICATOR */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[130px] h-[5px] bg-white/60 rounded-full" />
            </div>
          </div>
        );
      }
  

/* ---------------- NAVBAR (Sticky + clean like agency sites) ---------------- */
function Navbar() {
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 w-full bg-white/90 backdrop-blur shadow-sm z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">AppSolutions</h1>

        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </div>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:scale-105 transition">
          Get Quote
        </button>
      </div>
    </motion.header>
  );
}

/* ---------------- HERO (VERY CLOSE STRUCTURE) ---------------- */
function Hero() {
  return (
    <section className="pt-28 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center py-24">

        <motion.div initial="hidden" animate="show" variants={stagger}>
          <motion.h1 variants={fadeUp} className="text-5xl font-bold leading-tight">
            Top Mobile App Development Company
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 text-blue-100 text-lg">
            We build scalable Android, iOS & cross-platform apps with modern UI/UX,
            strong architecture, and enterprise-grade performance.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex gap-4">
            <button className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
              Start Project
            </button>

            <button className="border border-white px-6 py-3 rounded-xl hover:scale-105 transition">
              View Portfolio
            </button>
          </motion.div>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl shadow-2xl"
          src="https://images.unsplash.com/photo-1551650975-87deedd944c3"
        />
      </div>
    </section>
  );
}

/* ---------------- CLIENT STRIP (like agency trust section) ---------------- */
function Clients() {
  return (
    <section className="bg-white py-10 border-b">
      <div className="max-w-6xl mx-auto text-center text-gray-500">
        Trusted by startups & enterprises worldwide
      </div>
    </section>
  );
}

/* ---------------- SERVICES (GRID CARDS like reference site) ---------------- */
function Services() {
  const items = [
    "Android App Development",
    "iOS App Development",
    "Flutter App Development",
    "UI/UX Design",
    "Web Development",
    "App Maintenance",
  ];

  return (
    <section id="services" className="py-24 max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center">
        Mobile App Development Services
      </h2>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={stagger}
        className="grid md:grid-cols-3 gap-8 mt-12"
      >
        {items.map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            whileHover={{ y: -8 }}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl border"
          >
            <h3 className="text-xl font-semibold">{item}</h3>
            <p className="text-gray-500 mt-3">
              High-performance scalable digital solution with clean UI.
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

/* ---------------- ABOUT (2 COLUMN like agency page) ---------------- */
function About() {
  return (
    <section id="about" className="bg-gray-100 py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <img
          className="rounded-2xl shadow-xl"
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
        />

        <div>
          <h2 className="text-3xl font-bold">Why Choose Us</h2>

          <div className="mt-8 space-y-5">
            {[
              "Experienced Developers",
              "Clean UI/UX Design",
              "Fast Delivery",
              "Scalable Architecture",
            ].map((t, i) => (
              <div key={i} className="bg-white p-5 rounded-xl shadow">
                <h3 className="font-semibold">{t}</h3>
                <p className="text-gray-500 text-sm mt-1">
                  We build production-ready mobile applications.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- INDUSTRIES (like agency SEO section) ---------------- */
function Industries() {
  const list = [
    "Healthcare",
    "Finance",
    "E-commerce",
    "Education",
    "Logistics",
    "Travel",
  ];

  return (
    <section className="py-24 text-center">
      <h2 className="text-3xl font-bold">Industries We Serve</h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12 px-6">
        {list.map((i, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition"
          >
            {i}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- PROCESS (timeline style like reference site) ---------------- */
function Process() {
  const steps = [
    "Requirement Analysis",
    "UI/UX Design",
    "App Development",
    "Testing",
    "Deployment",
  ];

  return (
    <section id="process" className="bg-gray-100 py-24 text-center">
      <h2 className="text-3xl font-bold">Our Development Process</h2>

      <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto mt-12 px-6">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.08 }}
            className="bg-blue-600 text-white p-6 rounded-xl shadow"
          >
            <div className="text-3xl font-bold">{i + 1}</div>
            <p className="mt-2">{s}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- CTA (very similar agency conversion section) ---------------- */
function CTA() {
  return (
    <section id="contact" className="bg-blue-600 text-white py-20 text-center">
      <h2 className="text-3xl font-bold">
        Ready to Build Your Mobile App?
      </h2>

      <p className="mt-4 text-blue-100">
        Let’s turn your idea into a scalable digital product.
      </p>

      <button className="mt-8 bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:scale-105 transition">
        Get Free Consultation
      </button>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 text-center">
      <h3 className="text-white font-bold">AppSolutions</h3>
      <p className="text-sm mt-2">
        Mobile App Development Company
      </p>
      <p className="mt-6 text-xs">© 2026 All Rights Reserved</p>
    </footer>
  );
}