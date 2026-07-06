import { useState } from "react";

const faqs = [
  {
    question: "What is full stack development?",
    answer:
      "Full stack development involves building both frontend and backend components of an application, ensuring seamless integration and performance.",
  },
  {
    question: "What technologies do you use for full stack development?",
    answer:
      "We use modern tools like React, Node.js, Python, and scalable cloud services to build high-performance applications.",
  },
  {
    question: "How long does it take to build a full stack application?",
    answer:
      "Timelines vary depending on complexity, but most projects range from a few weeks to several months.",
  },
  {
    question: "Do you provide maintenance and support?",
    answer:
      "Yes, we offer ongoing support, updates, and maintenance to keep your application secure and efficient.",
  },
  {
    question: "Can you migrate my existing application to a modern stack?",
    answer:
      "Yes, we specialize in upgrading legacy systems to modern technologies with improved performance and scalability.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-10">
        Frequently Asked <span className="text-[#ff4a17]">Questions</span>
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg bg-white shadow-sm"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-5 text-left font-medium"
            >
              {faq.question}
              <span
                className={`text-xl transition-transform duration-300 ${
                  activeIndex === index ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeIndex === index ? "max-h-40 px-5" : "max-h-0 px-5"
              }`}
            >
              <p className="py-4 text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}