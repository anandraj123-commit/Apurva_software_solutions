import React, { useState } from "react";

const faqs = [
  {
    question: "Do you build fully native apps or cross-platform solutions?",
    answer:
      "We specialize in crafting high-performance native iOS applications using Swift and SwiftUI. For projects requiring faster delivery across platforms, we also provide efficient cross-platform solutions tailored to your business goals.",
  },
  {
    question: "How do you ensure apps run smoothly on all Apple devices?",
    answer:
      "Our team rigorously tests apps on multiple devices and screen sizes. By using adaptive layouts and Apple’s design standards, we guarantee a seamless and consistent experience across iPhones and iPads.",
  },
  {
    question: "Can you upgrade or fix my existing application?",
    answer:
      "Absolutely. We analyze your current app, resolve bugs, improve performance, and modernize the architecture to ensure scalability and long-term maintainability.",
  },
  {
    question: "How do you handle large data and performance challenges?",
    answer:
      "We implement advanced optimization techniques like lazy loading, efficient caching, and background processing to maintain fast and responsive performance even with complex datasets.",
  },
  {
    question: "Do you assist with App Store submission and approval?",
    answer:
      "Yes, we handle the entire App Store process—from compliance checks to metadata optimization—ensuring your app meets Apple’s guidelines and gets approved without delays.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-full mx-auto">

        <h2 className="text-3xl font-bold text-center mb-4">
          Frequently <span className="text-[#ff4a17]">Asked Questions</span>
        </h2>

        <p className="text-center text-gray-500 mb-8">
          Common questions about our iOS development expertise
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full text-left p-4 flex justify-between items-center font-semibold"
              >
                {faq.question}
                <span className="text-xl">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </button>

              {activeIndex === index && (
                <div className="px-4 pb-4 text-gray-600 text-sm">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;