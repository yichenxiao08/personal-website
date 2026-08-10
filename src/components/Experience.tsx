import "./Experience.css";

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="section-head">
        <span className="tag">02</span>
        <h2>Experience</h2>
      </div>
      <ul className="experience-list">
        <li className="experience-entry">
          <img src="e" />
          <div className="description">
            <h3>St. Theresa of Lisieux CHS</h3>
            <h4>Full-Stack Web Developer</h4>
            <p>
              Built a data management portal for the school athletic department
              using Next.js and Supabase, tracking team rosters, athlete
              performance, and payment collection for 1600+ students across 32
              teams.
            </p>
          </div>
        </li>
        <li className="experience-entry">
          <img src="e" />
          <div className="description">
            <h3>Algorithm Alchemists</h3>
            <h4>Web Developer & Teacher</h4>
            <p>
              Designed a React webpage for a non-profit organization that offers
              programming education for free, onboarding over 100 new students
              and instructors. Taught web development fundamentals, including
              HTML/CSS and Javascript.
            </p>
          </div>
        </li>
        <li className="experience-entry">
          <img src="e" />
          <div className="description">
            <h3>VEX Robotics</h3>
            <h4>Teams 82855S & 82855X</h4>
            <p>
              Captained a 9-member competitive robotics team, organizing meetings and leading the
              engineering design process from CAD and mechanical assembly
              to testing and coding autonomous routines.
            </p>
          </div>
        </li>
        <li className="experience-entry">
          <img src="e" />
          <div className="description">
            <h3>Lions Robotics</h3>
            <h4>CFO & Software Education Director</h4>
            <p>
              Managed a $20K+ budget, coordinating with sponsors to secure
              funding. Designed lesson plans covering fundamentals for coding in
              robotics, including C++, control theory and localization
              algorithms.
            </p>
          </div>
        </li>
        <li className="experience-entry">
          <img src="e" />
          <div className="description">
            <h3>Freelance Tutoring</h3>
            <h4></h4>
            <p>
              Tutored students from grade 5-12, covering various subjects
              including math, physics, English, and music.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
}
