import './Contact.css'

export default function Contact(){

  
  return (
    <section className="contact" id="contact">
      <div className="section-head">
        <span className="tag">05</span>
        <h2>Contact</h2>
      </div>
      <ul className="contact-info">
        <li>
          <a href="mailto:yichenxiao08@gmail.com" target="_blank">Email</a>
        </li>
        <li>
          <a href="https://linkedin.com/in/yichen-xiao" target="_blank">LinkedIn</a>
        </li>
        <li>
          <a href="https://github.com/yichenxiao08" target='_blank'>Github</a>
        </li>
        <li>
          <a href="/resume.pdf" target="_blank">Resume</a>
        </li>
      </ul>
      <div className="footer">
        <span>Ready to try out CLI mode?</span>
        <button>Switch to CLI mode</button>
      </div>
    </section>
  );
}