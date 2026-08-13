import "./Experience.css";

type Experience = {
  title: string;
  subtitle?: string;
  description: string;
  logoUrl: string;
};

const experiences: Experience[] = [
  {
    title: "St. Theresa of Lisieux CHS",
    subtitle: "Full Stack Web Developer",
    description:
      "Built a data management portal for the school athletic department using Next.js and Supabase, tracking team rosters, athlete performance, and payment collection for 1600+ students across 32 teams.",
    logoUrl: "/logos/stlchs.png",
  },
  {
    title: "Algorithm Alchemists",
    subtitle: "Web Developer & Teacher",
    description:
      "Designed a React webpage for a non-profit organization that offers programming education for free, onboarding over 100 new students and instructors. Taught web development fundamentals, including HTML/CSS and Javascript.",
    logoUrl: "/logos/algo.png",
  },
  {
    title: "VEX Robotics",
    subtitle: "Teams 82855S, 82855X, and 82855Z",
    description:
      "Captain of team 82855S, leading a 9-member team through CAD, mechanical assembly, iterating/testing, and autonomous coding. Built and coded for teams 82855X and 82855Z.",
    logoUrl: "/logos/vexlogo.png",
  },
  {
    title: "Lions Robotics",
    subtitle: "CFO & Software Education Director",
    description:
      "Managed a $20K+ budget, coordinating with sponsors to secure funding. Designed lesson plans covering fundamentals for coding in robotics, including C++, control theory and localization algorithms.",
    logoUrl: "/logos/lionsrobotics.png",
  },
];

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="section-head">
        <span className="tag">02</span>
        <h2>Experience</h2>
      </div>
      <ul className="experience-list">
        {experiences.map((experience) => {
          return (
            <li className="experience-entry" key={experience.title}>
              <img src={experience.logoUrl} />
              <div className="description">
                <h3>{experience.title}</h3>
                <h4>{experience.subtitle}</h4>
                <p>
                  {experience.description}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
