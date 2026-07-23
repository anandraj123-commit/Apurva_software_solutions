"use client";

import {
  Flame,
  Zap,
  Circle,
  Code,
  Database,
  Container,
  Cloud,
  Boxes,
  GitBranch,
} from "lucide-react";

const techStack = [
  {
    title: "MERN Stack",
    animation: "group-hover:rotate-12",
    icon: Flame,
    color: "text-[#ff4a17]",
    border: "hover:border-[#ff4a17]",
    badge: "Frontend",
    badgeColor: "bg-blue-500/20 text-blue-400",
    desc: "MongoDB, Express.js, React, Node.js",
    detail: `The MERN stack is a powerful JavaScript-based technology stack used to build modern web applications. It combines MongoDB for database management, Express.js for backend APIs, React for dynamic user interfaces, and Node.js for server-side execution. This stack allows developers to use a single language across the entire application. It ensures faster development cycles and better performance. The architecture supports scalability and flexibility. It is widely used for real-time applications. Developers benefit from a huge ecosystem and community. It enables seamless data flow between frontend and backend. Ideal for startups and enterprise-grade applications.`,
  },
  {
    title: "Next.js",
    animation: "group-hover:scale-125",
    icon: Zap,
    color: "text-yellow-400",
    border: "hover:border-yellow-400",
    badge: "Frontend",
    badgeColor: "bg-blue-500/20 text-blue-400",
    desc: "React framework with SSR & SSG",
    detail: `Next.js is a powerful React framework designed for production-grade applications. It supports server-side rendering and static site generation. This improves performance and SEO significantly. It includes built-in routing and API handling. Developers can create fast-loading pages with optimized assets. It enhances user experience with smooth navigation. It allows hybrid rendering strategies. It simplifies complex frontend architecture. It integrates well with backend services. Ideal for scalable and high-performance web apps.`,
  },
  {
    title: "Node.js",
    animation: "group-hover:animate-pulse", 
    icon: Circle,
    color: "text-green-500",
    border: "hover:border-green-500",
    badge: "Backend",
    badgeColor: "bg-green-500/20 text-green-400",
    desc: "JavaScript runtime for backend",
    detail: `Node.js is a high-performance JavaScript runtime built on Chrome's V8 engine. It enables developers to build scalable backend services. Its non-blocking architecture ensures fast execution. It is ideal for real-time applications like chat apps. Node.js supports a vast ecosystem through npm. It allows building APIs efficiently. It handles concurrent requests smoothly. It integrates well with databases and frontend frameworks. It reduces development complexity. Widely used in modern web development.`,
  },
  {
    title: "Python / Django",
    animation: "group-hover:-rotate-6", 
    icon: Code,
    color: "text-green-400",
    border: "hover:border-green-400",
    badge: "Backend",
    badgeColor: "bg-green-500/20 text-green-400",
    desc: "High-level Python web framework",
    detail: `Django is a high-level Python framework for rapid development. It follows the batteries-included philosophy. It comes with built-in authentication and admin panel. It ensures security against common vulnerabilities. Django promotes clean and reusable code. It supports ORM for database operations. It is highly scalable and maintainable. It is widely used for enterprise applications. Developers can build robust systems quickly. Ideal for data-driven applications.`,
  },
  {
    title: "PostgreSQL",
    animation: "group-hover:-translate-y-2",
    icon: Database,
    color: "text-purple-400",
    border: "hover:border-purple-400",
    badge: "Database",
    badgeColor: "bg-purple-500/20 text-purple-400",
    desc: "Advanced open-source database",
    detail: `PostgreSQL is a powerful open-source relational database system. It supports advanced SQL features and extensions. It ensures high reliability and data integrity. It handles complex queries efficiently. It supports JSON and structured data. It offers strong concurrency support. It is highly scalable for large datasets. It includes robust backup and recovery options. It integrates well with modern applications. Ideal for enterprise-level database solutions.`,
  },
  {
    title: "Docker & Kubernetes",
    animation: "group-hover:rotate-6 group-hover:scale-110",
    icon: Container,
    color: "text-cyan-400",
    border: "hover:border-cyan-400",
    badge: "DevOps",
    badgeColor: "bg-red-500/20 text-red-400",
    desc: "Containerization & orchestration",
    detail: `Docker and Kubernetes revolutionize application deployment. Docker allows containerization of applications. Kubernetes manages container orchestration at scale. It ensures high availability and scalability. It simplifies deployment processes. It supports microservices architecture. It improves resource utilization. It enables faster release cycles. It enhances system reliability. Essential for modern DevOps workflows.`,
  },
  {
    title: "AWS / Cloud",
    animation: "group-hover:animate-bounce",
    icon: Cloud,
    color: "text-orange-400",
    border: "hover:border-orange-400",
    badge: "Cloud",
    badgeColor: "bg-[#ff4a17]/20 text-orange-400",
    desc: "Cloud infrastructure services",
    detail: `AWS provides scalable cloud infrastructure services. It includes compute, storage, and networking solutions. It supports serverless architectures. It ensures high availability and reliability. It offers global data centers. It enhances application scalability. It provides cost-effective solutions. It integrates with DevOps tools. It supports security and compliance. Ideal for modern cloud-based applications.`,
  },
  {
    title: "Microservices",
    animation: "group-hover:scale-125 group-hover:-rotate-6",
    icon: Boxes,
    color: "text-pink-400",
    border: "hover:border-pink-400",
    badge: "Architecture",
    badgeColor: "bg-pink-500/20 text-pink-400",
    desc: "Distributed system design",
    detail: `Microservices architecture breaks applications into small services. Each service operates independently. It improves scalability and flexibility. It allows faster development cycles. It simplifies maintenance and updates. It supports distributed systems. It enhances fault isolation. It integrates with APIs easily. It is ideal for large-scale applications. Widely adopted in modern software systems.`,
  },
  {
    title: "CI/CD Pipelines",
    animation: "group-hover:rotate-180",
    icon: GitBranch,
    color: "text-indigo-400",
    border: "hover:border-indigo-400",
    badge: "DevOps",
    badgeColor: "bg-indigo-500/20 text-indigo-400",
    desc: "Automation & deployment",
    detail: `CI/CD pipelines automate software delivery processes. They enable continuous integration and deployment. They reduce manual errors significantly. They ensure faster release cycles. They improve code quality through testing. They support automation workflows. They integrate with version control systems. They enhance team collaboration. They ensure reliable deployments. Essential for modern development practices.`,
  },
  {
    title: "Jenkins (CI/CD)",
    animation: "group-hover:scale-110 group-hover:animate-pulse",
    icon: GitBranch,
    color: "text-red-400",
    border: "hover:border-red-400",
    badge: "DevOps",
    badgeColor: "bg-red-500/20 text-red-400",
    desc: "Automation server for CI/CD",
    detail: `Jenkins is a leading open-source automation server used for continuous integration and continuous deployment. It helps automate the building, testing, and deployment of applications. Jenkins supports a wide range of plugins for integration with various tools. It enables faster delivery cycles and reduces manual effort. It ensures consistent build environments. It integrates with Git, Docker, and cloud platforms. It improves code quality through automated testing. It allows pipeline-as-code configurations. It enhances collaboration among development teams. Essential for modern DevOps workflows.`,
  },
  {
    title: "Micro Frontends",
    animation: "group-hover:-translate-y-3 group-hover:scale-105",
    icon: Boxes,
    color: "text-pink-400",
    border: "hover:border-pink-400",
    badge: "Architecture",
    badgeColor: "bg-pink-500/20 text-pink-400",
    desc: "Frontend modular architecture",
    detail: `Micro frontends break large frontend applications into smaller, independent modules. Each team can develop and deploy features separately. It improves scalability and maintainability. It allows technology flexibility across modules. It enhances team productivity and ownership. It supports faster development cycles. It integrates seamlessly into a single UI. It reduces risk during deployments. It enables better code organization. Ideal for large-scale enterprise applications.`,
  },
  {
    title: "MEAN Stack",
    animation: "group-hover:rotate-6", 
    icon: Flame,
    color: "text-green-400",
    border: "hover:border-green-400",
    badge: "Full Stack",
    badgeColor: "bg-green-500/20 text-green-400",
    desc: "MongoDB, Express, Angular, Node",
    detail: `MEAN stack is a full-stack JavaScript framework using MongoDB, Express.js, Angular, and Node.js. It allows end-to-end development using a single language. Angular provides a powerful frontend framework. Node.js handles backend operations efficiently. MongoDB ensures flexible data storage. It supports scalable and dynamic applications. It reduces development complexity. It enables rapid prototyping. It integrates well with REST APIs. Ideal for enterprise-grade applications.`,
  },
  {
    title: "MEVN Stack",
    animation: "group-hover:scale-110", 
    icon: Flame,
    color: "text-emerald-400",
    border: "hover:border-emerald-400",
    badge: "Full Stack",
    badgeColor: "bg-emerald-500/20 text-emerald-400",
    desc: "MongoDB, Express, Vue, Node",
    detail: `MEVN stack combines MongoDB, Express.js, Vue.js, and Node.js for full-stack development. Vue.js offers a lightweight and flexible frontend framework. It enables fast UI development. Node.js powers the backend efficiently. MongoDB provides scalable database solutions. It ensures smooth data flow across layers. It is easy to learn and implement. It supports modular architecture. It improves development speed. Ideal for modern and interactive web applications.`,
  },
  {
    title: "SaaS Applications",
    animation: "group-hover:animate-bounce",  
    icon: Cloud,
    color: "text-orange-400",
    border: "hover:border-orange-400",
    badge: "Cloud",
    badgeColor: "bg-[#ff4a17]/20 text-orange-400",
    desc: "Software as a Service platforms",
    detail: `SaaS applications are cloud-based software solutions delivered over the internet. They eliminate the need for local installation and maintenance. Users can access them from anywhere with a browser. SaaS platforms are highly scalable and cost-efficient. They support multi-tenant architecture for multiple users. They ensure automatic updates and maintenance. They provide high availability and reliability. They integrate easily with third-party services. They enhance business productivity and accessibility. Widely used for modern cloud-based applications.`,
  },
  {
    title: "Ionic Framework",
    animation: "group-hover:rotate-12 group-hover:scale-110",
    icon: Code,
    color: "text-cyan-400",
    border: "hover:border-cyan-400",
    badge: "Mobile",
    badgeColor: "bg-cyan-500/20 text-cyan-400",
    desc: "Cross-platform mobile development",
    detail: `Ionic is a powerful framework for building cross-platform mobile applications. It allows developers to use web technologies like HTML, CSS, and JavaScript. It supports Angular, React, and Vue integrations. Ionic enables development for iOS, Android, and web from a single codebase. It provides a rich library of pre-built UI components. It ensures native-like performance and experience. It integrates with Capacitor for native device features. It speeds up development and reduces costs. It supports scalable and maintainable architecture. Ideal for modern hybrid mobile applications.`,
  }
];

export default function TechStack() {
    return (
      <section className="bg-white px-6 w-full max-w-none">
        {/* Heading */}
        <div className="text-center mx-auto mb-16">
          <h2 className="text-3xl  font-bold">
            Full Stack <span className="text-[#ff4a17]">Technology Stack</span>
          </h2>
          <p className="mt-4 text-gray-700">
            We leverage modern technologies across all layers to build scalable,
            high-performance digital solutions.
          </p>
        </div>
  
        {/* Grid */}
        <div className="grid md:grid-cols-4 gap-8  mx-auto">
          {techStack.map((tech, index) => {
            const Icon = tech.icon;
  
            return (
              <div
                key={index}
                className={`group border border-gray-300 rounded-2xl p-6 
                bg-[#f1f4fa] transition-all duration-500 
                hover:-translate-y-2 hover:shadow-xl
                ${tech.border} ${tech.hoverBg}`}
              >
                <div className="flex items-center gap-3 mb-3">
                <Icon
  className={`${tech.color} transform transition-all duration-500 ease-in-out ${tech.animation}`}
  size={28}
/>
                  <h3 className="text-lg font-semibold">{tech.title}</h3>
                </div>
  
                <p className="text-sm mb-3 text-gray-700">{tech.desc}</p>
  
                <span
                  className={`inline-block text-xs px-3 py-1 rounded-full mb-4 ${tech.badgeColor}`}
                >
                  {tech.badge}
                </span>
  
                <p className="text-sm text-gray-700 leading-relaxed">
                  {tech.detail}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    );
  }