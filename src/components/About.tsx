import "./About.css";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="section-head">
        <span className="tag">01</span>
        <h2>About</h2>
      </div>
      <div className="about-grid">
        <div className="about-photo">
          <img src="/images/banner.png" />
        </div>
        <div className="about-text">
          <p>
            I'm a first year student studying computer engineering at the
            University of Waterloo, driven by a passion for building meaningful
            systems that benefit others.
          </p>
          <p>
            I've always been obsessed with tech, from tinkering with Raspberry
            Pi circuits when I was 8 to designing world championship caliber
            competition robots. Now, I strive to channel that same energy and
            curiosity into creating elegant solutions to problems worth solving.
          </p>
          <p>
            In my free time, I enjoy playing the piano, fencing, watching
            sports, and working on some sick side projects.
          </p>
        </div>
      </div>
    </section>
  );
}
