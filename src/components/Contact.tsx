import './Contact.css'

export default function Contact(){
  return (
    <section className="contact" id="contact">
      <div className="section-head">
        <span className="tag">05</span>
        <h2>Contact</h2>
      </div>
      <ul className="contact-info">
        <li>Email</li>
        <li>LinkedIn</li>
        <li>Github</li>
        <li>Resume</li>
      </ul>
      <div className='footer'>
        <span>Ready to try out CLI mode?</span>
        <button>Switch to CLI mode</button>
      </div>
    </section>
  );
}