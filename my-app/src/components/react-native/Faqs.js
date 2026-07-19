import React, { useState } from "react";

const faqs = [
  {
    question: "Do you build fully native apps or use React Native?",
    answer:
      "We mainly build cross-platform apps using React Native, enabling a shared codebase for both iOS and Android. When needed, we extend capabilities using native modules for better performance.",
  },
  {
    question: "Will my app perform well on both iOS and Android devices?",
    answer:
      "Yes, we optimize rendering, reduce unnecessary re-renders, and test on real devices to ensure smooth performance and native-like experience across platforms.",
  },
  {
    question: "Can you improve or rebuild my existing React Native app?",
    answer:
      "Absolutely. We analyze your existing app, fix performance issues, update dependencies, and restructure the codebase to make it scalable and future-ready.",
  },
  {
    question: "How do you handle performance in complex applications?",
    answer:
      "We use memoization, lazy loading, efficient state management, and performance tools like Hermes to ensure fast load times and smooth UI.",
  },
  {
    question: "Do you support backend integration and real-time features?",
    answer:
      "Yes, we integrate APIs, real-time systems, push notifications, and offline capabilities to ensure your app remains reliable under all conditions.",
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