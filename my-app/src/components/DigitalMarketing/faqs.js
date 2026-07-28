import React, { useState } from "react";

const faqs = [
  {
    question: "What digital marketing services do you offer?",
    answer:
      "We offer a complete range of digital marketing services including SEO, social media marketing, Google Ads (PPC), content marketing, email campaigns, and lead generation. Our strategies are tailored to help your business grow online and achieve measurable results.",
  },
  {
    question: "How long does it take to see results from SEO?",
    answer:
      "SEO is a long-term strategy. Typically, you may start seeing noticeable improvements within 3–6 months depending on competition, industry, and current website performance. We focus on sustainable growth and long-term rankings.",
  },
  {
    question: "Do you manage social media accounts?",
    answer:
      "Yes, we handle complete social media management including content creation, posting, engagement, and paid campaigns. Our goal is to increase your brand visibility, engagement, and follower growth across platforms.",
  },
  {
    question: "What is PPC advertising and how does it work?",
    answer:
      "PPC (Pay-Per-Click) advertising allows you to run ads on platforms like Google and pay only when someone clicks. We create optimized campaigns that target the right audience, ensuring maximum ROI and lead generation.",
  },
  {
    question: "Can you help generate leads for my business?",
    answer:
      "Absolutely. We use a combination of SEO, paid ads, landing pages, and funnel strategies to generate high-quality leads. Our focus is on attracting the right audience that converts into customers.",
  },
  {
    question: "Do you provide content marketing services?",
    answer:
      "Yes, we create high-quality blogs, articles, social media content, and ad creatives. Our content strategies are designed to improve SEO, engage users, and establish your brand authority.",
  },
  {
    question: "How do you track campaign performance?",
    answer:
      "We use tools like Google Analytics, Search Console, and ad dashboards to track performance. You receive regular reports with insights on traffic, conversions, and ROI.",
  },
  {
    question: "Can you improve my website’s conversion rate?",
    answer:
      "Yes, we optimize your website with better UI/UX, faster loading speed, and effective call-to-actions. Our goal is to turn visitors into customers through conversion-focused strategies.",
  },
  {
    question: "Do you offer local SEO services?",
    answer:
      "Yes, we specialize in local SEO to help your business rank in local search results. This includes Google My Business optimization, local keywords, and location-based strategies.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We work with various industries including e-commerce, healthcare, real estate, education, startups, and local businesses. Our strategies are customized for each business type.",
  },
  {
    question: "How much does digital marketing cost?",
    answer:
      "The cost depends on your goals, services required, and competition level. We offer flexible packages and customized solutions to fit your budget and business needs.",
  },
  {
    question: "Do you run social media ads?",
    answer:
      "Yes, we run targeted ad campaigns on platforms like Facebook, Instagram, and LinkedIn. Our campaigns are designed to increase reach, engagement, and conversions.",
  },
  {
    question: "Can you help grow my brand online?",
    answer:
      "Absolutely. We build strong brand presence through consistent content, social media engagement, SEO, and paid campaigns. Our strategies focus on long-term brand growth.",
  },
  {
    question: "Do you provide email marketing services?",
    answer:
      "Yes, we create and manage email campaigns including newsletters, automation, and drip campaigns. This helps in customer retention and increasing repeat business.",
  },
  {
    question: "What is conversion rate optimization (CRO)?",
    answer:
      "CRO focuses on improving your website or landing page to increase the percentage of visitors who take action. We analyze user behavior and optimize design and content for better results.",
  },
  {
    question: "Can you manage my Google Ads account?",
    answer:
      "Yes, we handle everything from campaign setup to optimization. We ensure your ads reach the right audience and deliver maximum return on investment.",
  },
  {
    question: "Do you offer marketing automation services?",
    answer:
      "Yes, we use automation tools to streamline marketing processes like email campaigns, lead nurturing, and customer engagement. This improves efficiency and saves time.",
  },
  {
    question: "How do you communicate project updates?",
    answer:
      "We provide regular updates through reports, meetings, and communication tools. Transparency is our priority, so you’re always informed about progress and results.",
  },
  {
    question: "Will I get regular reports?",
    answer:
      "Yes, we provide detailed reports showing performance metrics like traffic, leads, conversions, and ROI. This helps you track the effectiveness of campaigns.",
  },
  {
    question: "How can I get started with your digital marketing services?",
    answer:
      "You can contact us through our website or schedule a consultation. We’ll understand your business goals and create a customized digital marketing strategy for you.",
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
          Common questions about our digital marketing services
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