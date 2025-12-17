import { useRef } from "react";

const skills = [
  { name: "Java", icon: "☕" },
  { name: "Hibernate", icon: "⬡" },
  { name: "Spring Boot", icon: "🌱" },
  { name: "Spring Security", icon: "🔐" },
  { name: "C++", icon: "💠" },
  { name: "JavaScript", icon: "🟨" },
  { name: "React", icon: "⚛️" },
  { name: "TailwindCSS", icon: "🌊" },
  { name: "Python", icon: "🐍" },
  { name: "JUnit", icon: "🧪" },
  { name: "Maven", icon: "📦" },
  { name: "SQL", icon: "🗄️" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Go", icon: "🚀" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Git", icon: "🔧" },
  { name: "Docker", icon: "🐳" }
];

export default function Skills() {
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const circles = containerRef.current.children;
    const { clientX, clientY } = e;

    [...circles].forEach((circle) => {
      const rect = circle.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      const dx = cx - clientX;
      const dy = cy - clientY;
      const distance = Math.sqrt(dx * dx + dy * dy) || 1;

      const force = Math.min(100 / distance, 3);
      circle.style.transform = `translate(${dx * force}px, ${dy * force}px)`;
    });
  };

  const reset = () => {
    const circles = containerRef.current.children;
    [...circles].forEach((circle) => {
      circle.style.transform = "translate(0,0)";
    });
  };

  return (
    <div>
      <h1 className="text-center text-2xl font-bold text-red-700 dark:text-white mt-8">
        Skills
      </h1>

      <main
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={reset}
        className="relative w-[1000px] min-h-[500px] mx-auto flex flex-wrap justify-center items-center gap-10 p-10"
      >
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="w-24 h-24 bg-white dark:bg-neutral-900 rounded-full shadow-xl flex flex-col items-center justify-center transition-transform duration-300"
          >
            <div className="text-3xl">{skill.icon}</div>
            <span className="text-xs mt-1 font-medium dark:text-white">
              {skill.name}
            </span>
          </div>
        ))}
      </main>
    </div>
  );
}

