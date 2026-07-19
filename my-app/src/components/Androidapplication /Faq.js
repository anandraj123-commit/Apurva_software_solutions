import { useState } from "react";

const faqs = [
{
question: "Do you build native Android or use cross-platform frameworks?",
answer:
"We primarily build native Android applications using Kotlin and Java for maximum performance and flexibility. However, we also offer cross-platform solutions when required, depending on your project goals and budget.",
},
{
question: "How do you handle Android fragmentation across devices?",
answer:
"We design and test applications across multiple screen sizes, resolutions, and Android versions. Using responsive layouts and adaptive components, we ensure consistent performance on a wide range of devices.",
},
{
question: "Can you rescue an existing, buggy Android application?",
answer:
"Yes, we specialize in fixing and optimizing existing apps. We analyze your current codebase, resolve bugs, improve performance, and refactor the architecture to make it scalable and stable.",
},
{
question: "How do you ensure the app remains performant with heavy data?",
answer:
"We implement efficient data handling techniques such as pagination, caching, background processing, and optimized APIs to maintain smooth performance even with large datasets.",
},
{
question: "What is your process for Google Play Store approval?",
answer:
"We follow all Google Play guidelines, perform thorough testing, optimize app metadata, and handle submission. We also assist with compliance requirements to ensure smooth approval without delays.",
},
];

const FAQ = () => {
const [activeIndex, setActiveIndex] = useState(null);

const toggleFAQ = (index) => {
setActiveIndex(activeIndex === index ? null : index);
};

return ( <section className="py-16 px-6 bg-gray-50"> <div className="max-w-6xl mx-auto">


    <h2 className="text-3xl font-bold text-center mb-4">
      Frequently <span className="text-[#ff4a17]">Asked Questions</span>
    </h2>

    <p className="text-center text-gray-500 mb-10">
      Everything you need to know about our Android app development services
    </p>

    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full text-left p-3 flex justify-between items-center font-semibold text-sm"
          >
            {faq.question}
            <span className="text-xl">
              {activeIndex === index ? "-" : "+"}
            </span>
          </button>

          <div
            className={`px-5 transition-all duration-300 text-sm ${
              activeIndex === index ? "max-h-40 pb-5" : "max-h-0"
            } overflow-hidden text-gray-600`}
          >
            {faq.answer}
          </div>
        </div>
      ))}
    </div>

  </div>
</section>


);
};

export default FAQ;
