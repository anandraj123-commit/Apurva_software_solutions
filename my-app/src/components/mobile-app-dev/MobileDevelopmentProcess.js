import {
    Search,
    PenTool,
    Code2,
    Rocket,
  } from "lucide-react";
  
  const process = [
    {
      step: "Step 01",
      title: "Requirement Analysis",
      description:
        "We understand your business goals, identify user needs, and define the technical roadmap to build the right mobile solution.",
      icon: Search,
      gradient: "from-blue-500 to-cyan-400",
      align: "left",
      dot: "bg-cyan-400",
    },
    {
      step: "Step 02",
      title: "UI/UX Design",
      description:
        "Our designers create modern interfaces and interactive prototypes focused on usability, accessibility, and engaging experiences.",
      icon: PenTool,
      gradient: "from-purple-500 to-pink-500",
      align: "right",
      dot: "bg-pink-500",
    },
    {
      step: "Step 03",
      title: "Development",
      description:
        "Using modern technologies, our developers transform approved designs into secure, scalable, and high-performance applications.",
      icon: Code2,
      gradient: "from-green-500 to-teal-400",
      align: "left",
      dot: "bg-green-400",
    },
    {
      step: "Step 04",
      title: "Deployment & Growth",
      description:
        "We launch your application, monitor performance, provide maintenance, and continuously improve features based on user feedback.",
      icon: Rocket,
      gradient: "from-[#ff4a17] to-red-500",
      align: "right",
      dot: "bg-[#ff4a17]",
    },
  ];
  
  export default function MobileDevelopmentProcess() {
    return (
      <section className="relative overflow-hidden bg-white py-24">
        {/* Background Glow */}
  
        <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="absolute right-0 bottom-20 h-96 w-96 rounded-full bg-pink-600/10 blur-[140px]" />
  
        <div className="mx-auto px-6 w-full max-w-none">
          {/* Heading */}
  
          <div className="mb-24 text-center">
            <h2 className="text-3xl  font-bold leading-tight text-black">
              Our Mobile App{" "}
              <span className="text-[#ff4a17]">
                Development Process
              </span>{" "}
            </h2>
  
            <p className="mx-auto mt-8  text-sm leading-9 text-black">
              From planning to deployment, every stage is carefully executed to
              create reliable, scalable, and user-friendly mobile applications.
            </p>
          </div>
  
          {/* Timeline */}
  
          <div className="space-y-16">
            {process.map((item, index) => {
              const Icon = item.icon;
  
              return (
                <div
                  key={index}
                  className={`flex ${
                    item.align === "right"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div className="relative w-full lg:w-[82%]">
                    {/* Floating Circle */}
  
                    <div
                      className={`hidden lg:flex absolute top-1/2 -translate-y-1/2 ${
                        item.align === "left"
                          ? "-right-28"
                          : "-left-28"
                      } h-20 w-20 rounded-full border border-white/20 bg-white/10 backdrop-blur-md items-center justify-center`}
                    >
                      <div
                        className={`h-8 w-8 rounded-full ${item.dot}`}
                      ></div>
                    </div>
  
                    {/* Card */}
  
                    <div
                      className={`rounded-3xl bg-gradient-to-r ${item.gradient} p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(0,0,0,0.45)]`}
                    >
                      <div className="flex gap-6">
                        <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-white/15 backdrop-blur-lg">
                          <Icon className="h-10 w-10 text-white" />
                        </div>
  
                        <div>
                          <p className="text-xl text-white/80">
                            {item.step}
                          </p>
  
                          <h3 className="mt-1 text-xl font-bold text-white">
                            {item.title}
                          </h3>
                        </div>
                      </div>
  
                      <p className="mt-8 text-sm leading-10 text-white/90">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }