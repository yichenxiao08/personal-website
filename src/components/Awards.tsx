import "./Awards.css";

export default function Awards() {
  return (
    <section className="awards" id="awards">
      <div className="section-head">
        <span className="tag">04</span>
        <h2>Awards</h2>
      </div>
      <div className="awards-section">
        <h3>Robotics</h3>
        <ul className="awards-list">
          <li>VEX Robotics Ontario Provincial Skills Champion (2025)</li>
          <li>VEX Robotics Ontario Provincial Think Award (2025)</li>
          <li>
            VEX Robotics Top 0.04% Combined Skills Score (75/~20,000) (2025)
          </li>
          <li>Qualified for VEX Robotics World Championship (2025, 2026)</li>
          <li>Caledon V5RC Qualifier Quarterfinalist (2026)</li>
          <li>Brampton V5RC Qualifier Innovate Award Finalist (2026)</li>
        </ul>
      </div>
      <div className="awards-section">
        <h3>Math and Computing Competitions</h3>
        <ul className="awards-list">
          <li>EurekaHacks 1st Place Overall (2026)</li>
          <li>Fermat Group IV Honor Roll (2025)</li>
          <li>CIMC Group V Honor Roll (2023)</li>
          <li>CCC Senior Division Certificate of Distinction (2025)</li>
          <li>3x Euclid Certificate of Distinction (2024-2026)</li>
          <li>2x CSMC Certificate of Distinction (2024, 2025)</li>
          <li>4x COMC Certificate of Distinction (2022-2025)</li>
        </ul>
      </div>
      <div className="awards-section">
        <h3>Miscellaneous</h3>
        <ul className="awards-list">
          <li>Associate Diploma in Piano Performance (2023)</li>
          <li>3x Ontario Provincial Open Division Finalist (2023-2025)</li>
          <li>Toronto Kiwanis Music Festival Best of Open Class (2024)</li>
          <li>
            The City of Markham Mayor's Award for Yip's Music Festival Top
            Achievement (2023)
          </li>
          <li>USA Fencing Association Divison I Athlete (2024-2026)</li>
          <li>Ontario Fencing Association Provincial Championship Gold Medalist (2023)</li>
        </ul>
      </div>
    </section>
  );
}
