const Stats = () => {
    const items = [
      {
        icon: "bi-emoji-smile",
        color: "color-blue",
        value: 232,
        label: "Happy Clients",
      },
      {
        icon: "bi-journal-richtext",
        color: "color-orange",
        value: 551,
        label: "Projects",
      },
      {
        icon: "bi-headset",
        color: "color-green",
        value: 324,
        label: "Hours Of Support",
      },
      {
        icon: "bi-people",
        color: "color-pink",
        value: 15,
        label: "Hard Workers",
      },
    ];
  
    return (
      <section
        id="stats"
        className="stats section light-background overflow-hidden"
      >
        {/* ✅ CSS INSIDE SAME FILE */}
        <style>
        {`
    @keyframes slideLeft {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-50%);
      }
    }

    .animate-slide-left {
      animation: slideLeft 30s linear infinite;
    }

    .animate-slide-left:hover {
      animation-play-state: paused;
    }
  `}
        </style>
  
        <div className="w-full max-w-none px-6">
          <div className="overflow-hidden">
            <div className="row gy-4 flex-nowrap animate-slide-left">
  
              {/* Duplicate items for seamless infinite loop */}
              {[...items, ...items].map((item, i) => (
                <div
                  key={i}
                  className="col-lg-3 col-md-6 col-sm-6 col-12 flex-shrink-0"
                >
                  <div className="stats-item d-flex align-items-center w-100 h-100 p-3 rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
  
                    <i
                      className={`bi ${item.icon} ${item.color} flex-shrink-0 me-3 text-3xl`}
                    ></i>
  
                    <div>
                      <span className="purecounter fs-3">
                        {item.value}
                      </span>
                      <p>{item.label}</p>
                    </div>
  
                  </div>
                </div>
              ))}
  
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Stats;