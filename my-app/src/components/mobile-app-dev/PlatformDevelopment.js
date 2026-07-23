import {
    Smartphone,
    Monitor,
    Tablet,
    Watch,
  } from "lucide-react";
  
  export default function PlatformDevelopment() {
    const platforms = [
      {
        title: "iOS Development",
        description: "Native iOS apps using Swift and Objective-C",
        icon: Smartphone,
        gradient: "from-blue-500 to-cyan-400",
      },
      {
        title: "Android Development",
        description: "Native Android apps using Kotlin and Java",
        icon: Monitor,
        gradient: "from-green-500 to-emerald-400",
      },
      {
        title: "Tablet Apps",
        description: "Optimized apps for iPad and Android tablets",
        icon: Tablet,
        gradient: "from-purple-500 to-pink-500",
      },
      {
        title: "Wearable Apps",
        description: "Apple Watch and Wear OS applications",
        icon: Watch,
        gradient: "from-[#ff4a17] to-red-500",
      },
    ];
  
    return (
      <section className="bg-gray-100 py-24">
        <div className="max-w-full mx-auto px-6">
  
          {/* Heading */}
  
          <div className="text-center mb-20">
            <h2 className="text-3xl  font-bold leading-tight text-black">
              Platform{" "}
              <span className="text-[#ff4a17]">
                Development
              </span>
            </h2>
  
            <p className="mt-4 text-sm text-black">
              We develop applications for all major platforms and devices
            </p>
          </div>
  
          {/* Cards */}
  
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {platforms.map((item, index) => {
              const Icon = item.icon;
  
              return (
                <div
                  key={index}
                  className="group rounded-3xl border border-white/10 bg-[#0D0D18] p-10 transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
                >
                  {/* Icon */}
  
                  <div
                    className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${item.gradient} flex items-center justify-center`}
                  >
                    <Icon className="w-10 h-10 text-white stroke-[2]" />
                  </div>
  
                  {/* Title */}
  
                  <h3 className="mt-10 text-xl font-semibold text-white">
                    {item.title}
                  </h3>
  
                  {/* Description */}
  
                  <p className="mt-6 text-gray-400 text-sm leading-10">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }