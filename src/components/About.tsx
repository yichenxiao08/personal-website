import "./About.css";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="section-head">
        <span className="tag">01</span>
        <h2>About</h2>
      </div>
      <div className="about-grid">
        <img className="about-photo" />
        <div className="about-text">
          <p>
            I'm a first year student studying computer engineering at the
            University of Waterloo, driven by a passion for building: for people, for .
          </p>
          <p>I've always been obsessed with tech, from tinkering with Raspberry Pi circuits when I was 8 to competing in high school robotics on the world stage. </p>
          <p>
            In my free time, I enjoy playing the piano, fencing, watching
            sports, and working on some sick side projects.
          </p>
        </div>
      </div>
    </section>
  );
}
