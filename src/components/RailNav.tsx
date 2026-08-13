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
    const ratios: Record<string, number> = {};

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios[entry.target.id] = entry.intersectionRatio;
        });

        const mostVisible = Object.entries(ratios).reduce((a, b) =>
          b[1] > a[1] ? b : a,
        );

        if (mostVisible[1] > 0) {
          setCurrentSection(mostVisible[0]);
        }
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

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
