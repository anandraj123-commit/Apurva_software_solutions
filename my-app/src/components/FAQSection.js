"use client";
import { useState } from "react";

const faqs = [
  {
    question: "What details do I need to provide to start a custom software development project?",
    answer: "You should provide your project goals, target audience, required features, and budget. Our team will guide you through the rest."
  },
  {
    question: "How quickly can your software development company start my project?",
    answer: "We usually start within a few days after requirement finalization."
  },
  {
    question: "Do you have senior developers to supervise custom software development projects?",
    answer: "Yes, all projects are supervised by experienced senior developers."
  },
  {
    question: "What kind of support does your custom software development company provide?",
    answer: "We provide ongoing support, maintenance, and updates."
  },
  {
    question: "Do I need technical knowledge to work with your software development company?",
    answer: "No, we handle everything and keep communication simple."
  },
  {
    question: "What if I'm not satisfied with a developer on my project?",
    answer: "We will replace the developer immediately to ensure satisfaction."
  },
  {
    question: "How do I choose the right software development services for my business?",
    answer: "We analyze your business needs and suggest the best solution."
  },
  {
    question: "Can your company scale the team for larger projects?",
    answer: "Yes, we can scale quickly based on project requirements."
  },
  {
    question: "What is the experience level of your developers?",
    answer: "Our developers have 3+ to 10+ years of experience."
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white text-black py-16 px-4">
<div className="text-center max-w-7xl mx-auto px-5">
        <h2 className="text-3xl font-bold text-gray-900">
        Frequently Asked{" "}
          <span className="bg-[#ff4a17] bg-clip-text text-transparent">
          Questions
          </span>
        </h2>

        <div className="w-20 h-[2px] bg-[#ff4a17] mx-auto mt-4"></div>
        </div>


      {/* 🔥 FAQ List */}
      <div className="mx-auto space-y-4 mt-4">
        {faqs.map((item, index) => {
          const isOpen = index === openIndex;

          return (
            <div
              key={index}
              className="border border-gray-800 rounded-2xl bg-[white] overflow-hidden transition-all duration-300"
            >
              {/* Question */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-3 py-3 text-left"
              >
                <span className="text-sm md:text-lg font-sm">
                  {item.question}
                </span>

                <span
                  className={`transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {/* Answer */}
              <div
                className={`px-5 transition-all duration-300 ${
                  isOpen ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <p className="text-sm text-[#ff4a17]">
                  {item.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}