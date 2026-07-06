export default function DevelopmentExpertise() {
    return (
      <img
      src="/img/apurva-software-solutions-development-expertise.png"
      alt="Development Expertise"
      className="w-full"
    />
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
      <li className="flex items-center text-black gap-3">
        <span
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: "var(--accent-color)" }}
        ></span>
        {text}
      </li>
    );
  }