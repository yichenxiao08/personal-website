import "./ComingSoon.css";

export default function ComingSoon() {
  return (
    <main className="coming-soon">
      <span className="coming-soon-tag">CLI MODE</span>
      <h1>Coming soon.</h1>
      <p>This part of the site is still being built.</p>
      <a className="home-link" href="/">
        <span aria-hidden="true">&larr;</span> Back to home
      </a>
    </main>
  );
}
