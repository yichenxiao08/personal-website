import "./Projects.css";

type Link = {
  text: string;
  url: string;
};

type Project = {
  title: string;
  stack: string;
  imageUrl: string;
  description: string;
  links?: Link[];
};

const projects: Project[] = [
  {
    title: "Checkmate",
    stack: "C++",
    imageUrl: "/images/checkmate.png",
    description:
      "2500+ ELO chess engine written in C++, live 24/7 on Lichess for anyone to challenge. Implements minimax search with alpha-beta pruning, custom neural network based evaluation, and perfect hashing techniques for optimization.",
    links: [
      {
        text: "Github",
        url: "https://github.com/yichenxiao08/checkmate",
      },
      {
        text: "Lichess",
        url: "https://lichess.org/@/sixseven08",
      },
    ],
  },
  {
    title: "King of the Ring",
    stack: "HTML/CSS, Javascript, Three.js",
    imageUrl: "/images/kingofthering.png",
    description:
      "Motion-controlled boxing game using smartphone sensors. Real-time multiplayer via WebSockets with a 3D split-screen arena built using Three.js. 1st place at EurekaHacks 2026.",
    links: [
      {
        text: "Github",
        url: "https://github.com/kevinyhe/eureka-hacks-2026",
      },
      {
        text: "Devpost",
        url: "https://devpost.com/software/king-of-the-ring",
      },
    ],
  },
  {
    title: "Modular RL Environments",
    stack: "Python",
    imageUrl: "/images/rlenv.png",
    description:
      "Various reinforcement learning environments built from scratch, training agents to play Gridworld, Snake, and Flappy Bird, as well as training a Mujoco robot to walk.",
    links: [
      {
        text: "Github",
        url: "https://github.com/yichenxiao08/rlenv",
      },
      {
        text: "Demo",
        url: "",
      },
    ],
  },
  {
    title: "Blockblast",
    stack: "Java",
    imageUrl: "/images/blockblast.png",
    description:
      "Clone of mobile video game Blockblast, implementing graphics and drag-and-drop effects from scratch. Grade 12 Computer Science Culminating Task (100%).",
    links: [
      {
        text: "Github",
        url: "https://github.com/yichenxiao08/blockblast",
      },
    ],
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="section-head">
        <span className="tag">03</span>
        <h2>Projects</h2>
      </div>
      <div className="project-portfolio">
        {projects.map((project) => {
          return (
            <div className="project-card" key={project.title}>
              <h3>{project.title}</h3>
              <h4>{project.stack}</h4>
              <img src={project.imageUrl} className="project-photo" />
              <p>{project.description}</p>
              <div className="card-links">
                {project.links?.map((link) => {
                  return (
                    <a href={link.url} target="_blank">
                      {link.text}
                    </a>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
