import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do you specialize in Native or Cross-platform development?",
    answer:
      "We specialize in both native (Swift, Kotlin) and cross-platform (React Native, Flutter) development, choosing the best approach based on your business needs.",
  },
  {
    question: "How do you handle backend integration and API security?",
    answer:
      "We use secure APIs, authentication mechanisms (JWT, OAuth), and follow best practices like encryption and rate limiting.",
  },
  {
    question: "Can your mobile apps handle offline functionality?",
    answer:
      "Yes, we implement offline-first architecture using local storage and sync strategies.",
  },
  {
    question: "How do you ensure UI consistency across thousands of device types?",
    answer:
      "We follow responsive design systems, test across devices, and use scalable UI frameworks.",
  },
  {
    question: "What is your App Store deployment and CI/CD strategy?",
    answer:
      "We use CI/CD pipelines with automated testing and streamlined deployment to App Store and Play Store.",
  },
];

const FAQItem = ({ item, isOpen, onClick }) => {
  return (
    <div
      className="group border border-white/10 rounded-xl mb-4 
                 bg-white/5 backdrop-blur-lg 
                 hover:border-white/20 transition-all duration-300"
    >
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center p-3 text-left"
      >
        <span className="text-black text-lg">
          {item.question}
        </span>

        <ChevronDown
          className={`text-black transition-transform duration-300 ${
            isOpen ? "rotate-180 text-blue-400" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-40 opacity-100 px-5 pb-5" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-black text-sm leading-relaxed">
          {item.answer}
        </p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-[white] py-20 px-6 text-black">
      <div className="w-full mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-black">
          Mobile App Development
        </h2>

        <h3 className="text-3xl  font-bold  text-black bg-clip-text mt-2">
          <span class="text-[#ff4a17]">Questions & Answers</span>
        </h3>

        

        <p className="text-black mt-4 text-sm md:text-xl">
          Find answers to common questions about mobile app development services and our expertise.
        </p>

        {/* FAQ List */}
        <div className="mt-12 text-left">
          {faqs.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;