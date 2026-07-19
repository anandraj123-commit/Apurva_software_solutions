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
    {
      question: "What industries do you serve?",
      answer:
        "We work across multiple industries including healthcare, fintech, e-commerce, education, logistics, and startups, delivering tailored digital solutions for each domain.",
    },
    {
      question: "How long does it take to develop an app?",
      answer:
        "The timeline depends on the complexity and features of your project. A basic app may take 4–8 weeks, while complex applications can take several months.",
    },
    {
      question: "Do you provide UI/UX design services?",
      answer:
        "Yes, we design intuitive and visually appealing user interfaces following modern design principles and Apple’s Human Interface Guidelines.",
    },
    {
      question: "Can you integrate third-party services and APIs?",
      answer:
        "Absolutely. We integrate payment gateways, analytics tools, social logins, cloud services, and other APIs to enhance app functionality.",
    },
    {
      question: "Will my app be scalable in the future?",
      answer:
        "Yes, we design applications with scalable architecture so your app can handle growth, increased users, and new features over time.",
    },
    {
      question: "Do you provide post-launch support?",
      answer:
        "Yes, we offer ongoing maintenance, updates, and support to ensure your app remains secure and up-to-date.",
    },
    {
      question: "How do you ensure app security?",
      answer:
        "We follow best practices like secure data storage, encryption, authentication, and regular security audits to protect your app and user data.",
    },
    {
      question: "Can you help with cloud integration?",
      answer:
        "Yes, we integrate cloud platforms like AWS, Firebase, and Azure for scalable storage, real-time data, and backend services.",
    },
    {
      question: "Do you build apps for startups?",
      answer:
        "Absolutely. We help startups validate ideas, build MVPs, and scale their products efficiently with cost-effective solutions.",
    },
    {
      question: "What technologies do you use for development?",
      answer:
        "We use modern technologies like Swift, SwiftUI, React, Node.js, and cloud platforms to build high-quality applications.",
    },
    {
      question: "Can you redesign my existing app?",
      answer:
        "Yes, we can revamp your app’s UI/UX, improve usability, and enhance overall performance to meet modern standards.",
    },
    {
      question: "Do you offer custom software development?",
      answer:
        "Yes, we build custom software solutions tailored to your specific business needs and workflows.",
    },
    {
      question: "How do you manage project communication?",
      answer:
        "We maintain transparent communication through regular updates, meetings, and collaboration tools to keep you informed at every stage.",
    },
    {
      question: "Will I own the source code of my app?",
      answer:
        "Yes, once the project is completed, you will have full ownership of the source code and intellectual property.",
    },
    {
      question: "How can I get started with your services?",
      answer:
        "Simply contact us through our website or schedule a consultation. We’ll discuss your requirements and propose the best solution for your project.",
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