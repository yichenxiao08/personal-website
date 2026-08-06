import "./Projects.css";

type Project = {
  title: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  codeUrl?: string;
  imageUrl?: string;
};

const projects: Project[] = [
  {
    title: "Checkmate",
    description: "",
    tags: ["C++"],
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="section-head">
        <span className="tag">02</span>
        <h2>Projects</h2>
      </div>
      <div className="project-portfolio">
        {projects.map((project) => {
          return (
            <div className="project-card" key={project.title}>
              <h3>{project.title}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}
