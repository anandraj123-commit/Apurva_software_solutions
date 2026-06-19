export default function DevelopmentExpertise() {
    return (
      <section className="text-white py-20 px-6 md:px-20 overflow-hidden"     style={{ backgroundColor: "#222" }}>
        <div className="grid md:grid-cols-2 gap-10 items-center">
  
          {/* LEFT CONTENT */}
          <div>
            {/* TAGS */}
            <div className="flex gap-3 mb-6 flex-wrap">
              <Tag text="Innovation Driven" />
              <Tag text="Client Focused" />
              <Tag text="Quality Assured" />
            </div>
  
            {/* HEADING */}
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
              Development <br />
              <span
                className="text-transparent bg-clip-text"
                style={{
                  color: "var(--accent-color)"
                }}
              >
                Expertise
              </span>
            </h1>
  
            {/* LIST */}
            <ul className="mt-6 space-y-3 text-white">
              <ListItem text="Expert Team of Developers & Designers" />
              <ListItem text="Cutting-Edge Technology Stack" />
              <ListItem text="24/7 Support & Maintenance" />
            </ul>
  
            {/* BUTTON */}
            <button
              className="mt-8 px-6 py-3 rounded-xl transition hover:scale-105 text-white"
              style={{
                background: "var(--accent-color)",
                boxShadow: "0 0 20px var(--accent-color)"
              }}
            >
              Contact Us!
            </button>
          </div>
  
          {/* RIGHT SIDE SVG */}


          <div className="flex justify-center items-center h-[400px]">
            <img
              src="/mainIconsdark.svg"
              alt="logo"
              className="w-100 h-100 floating-svg"
            />
          </div>
  
        </div>
      </section>
    );
  }

/* SMALL COMPONENTS */
function Tag({ text }) {
  return (
    <span className="px-4 py-1 rounded-full bg-black text-sm text-white border border-gray-700">
      {text}
    </span>
  );
}

function ListItem({ text }) {
    return (
      <li className="flex items-center text-white gap-3">
        <span
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: "var(--accent-color)" }}
        ></span>
        {text}
      </li>
    );
  }