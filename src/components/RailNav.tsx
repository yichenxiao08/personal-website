import "./RailNav.css";
import { useEffect, useState } from "react";

const sections = [
  { id: "about", label: "about" },
  { id: "experience", label: "experience" },
  { id: "projects", label: "projects" },
  { id: "awards", label: "awards" },
  { id: "contact", label: "contact" },
];

export default function RailNav() {
  const [currentSection, setCurrentSection] = useState<string>("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(entry.target.id, entry.isIntersecting);

          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-45% 0px -45% 0px",
      },
    );
    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  });

  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="rail">
      {sections.map(({ id, label }) => (
        <div
          key={id}
          className={`rail-item ${currentSection === id ? "active" : ""}`}
          onClick={() => handleClick(id)}
        >
          <span className="dash"></span>
          {label}
        </div>
      ))}
    </nav>
  );
}
