import { useState } from "react";
import "../assets/scss/DiscussYourProject.scss";
import Hero from "../components/DiscussYourProject/Hero";

const DiscussYourProject = () => {

  // ✅ STATE FOR SELECTED SERVICES
  const [selectedServices, setSelectedServices] = useState([]);

  const [currency, setCurrency] = useState("INR");
  const [selectedBudget, setSelectedBudget] = useState("");

const budgetOptions = {
    INR: [
      "₹1,000 – ₹10,000",
      "₹10,000 – ₹50,000",
      "₹50,000 – ₹1,00,000",
      "₹1,00,000 – ₹5,00,000",
      "₹5,00,000+",
      "Custom Budget",
    ],
    USD: [
      "$100 – $1,000",
      "$1,000 – $5,000",
      "$5,000 – $10,000",
      "$10,000 – $50,000",
      "$50,000+",
      "Custom Budget",
    ],
  };

  // ✅ TOGGLE FUNCTION
  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((item) => item !== service)
        : [...prev, service]
    );
  };

  return (
    <div className="w-full discussYourProject">

      {/* ================= HERO SECTION ================= */}
      <Hero />

      {/* ================= FORM SECTION ================= */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">

          {/* HEADER */}
          <div className="bg-gradient-to-r from-[#ff4a17] to-[#ff7a50] text-white p-8">
            <h2 className="text-2xl font-bold">Share Your Requirements</h2>
            <p className="opacity-90">
              Fill in the details below and we'll reach out within one working day.
            </p>
          </div>

          <div className="p-8 space-y-10">

            {/* STEP 1 */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Step 1: Personal Information</h3>

              <div className="grid md:grid-cols-2 gap-4">
                <input className="input" placeholder="Full Name" />
                <input className="input" placeholder="Email Address" />
                <input className="input" placeholder="Country" />
                <input className="input" placeholder="Mobile Number" />
              </div>

              <input className="input mt-4 w-full" placeholder="Current Address" />
            </div>

            {/* STEP 2 */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Step 2: Services Required</h3>

              <div className="grid md:grid-cols-3 gap-4">
                {[
                  "Web Development",
                  "Mobile App Development",
                  "Web Design",
                  "Software Development",
                  "Ecommerce",
                  "Logo Design",
                  "SEO Optimization",
                  "Hiring Resource",
                  "Website Maintenance",
                  "Custom Software",
                  "Strategy Consulting",
                  "Digital Marketing",
                ].map((item, i) => (

                    <div
                    key={i}
                    onClick={() => toggleService(item)}
                    className={`service-card cursor-pointer transition-all duration-300
                      ${
                        selectedServices.includes(item)
                          ? "bg-[#ff4a17] text-white"
                          : "bg-white text-black hover:shadow-md hover:scale-105"
                      }
                    `}
                  >
                    {item}
                  </div>

                ))}
              </div>
            </div>

            {/* STEP 3 */}
            <div>
  <h3 className="font-semibold text-lg mb-4">Step 3: Budget Range</h3>

  {/* 🔁 Currency Toggle */}
  <div className="flex gap-4 mb-6">
    <button
      onClick={() => setCurrency("INR")}
      className={`px-4 py-2 rounded-lg border ${
        currency === "INR"
          ? "bg-[#ff4a17] text-white"
          : "bg-white text-black"
      }`}
    >
      ₹ Rupees
    </button>

    <button
      onClick={() => setCurrency("USD")}
      className={`px-4 py-2 rounded-lg border ${
        currency === "USD"
          ? "bg-[#ff4a17] text-white"
          : "bg-white text-black"
      }`}
    >
      $ Dollar
    </button>
  </div>

  {/* 💰 Budget Options */}
  <div className="grid md:grid-cols-3 gap-4">
    {budgetOptions[currency].map((item, i) => (
      <div
        key={i}
        onClick={() => setSelectedBudget(item)}
        className={`budget-card cursor-pointer transition-all duration-300
          
          ${
            selectedBudget === item
              ? "bg-[#ff4a17] text-white scale-105 shadow-lg"
              : "bg-white text-black hover:shadow-md hover:scale-105"
          }
        
        `}
      >
        {item}
      </div>
    ))}
  </div>
</div>

            {/* STEP 4 */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Step 4: Project Details</h3>

              <textarea
                className="input w-full h-32"
                placeholder="Tell us about your project..."
              />
            </div>

            {/* SUBMIT */}
            <div className="text-center">
              <button
                className="submit-btn"
                onClick={() => console.log("Selected Services:", selectedServices)}
              >
                Submit Request
              </button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default DiscussYourProject;