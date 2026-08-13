import About from "./components/About";
import Awards from "./components/Awards";
import Projects from "./components/Projects";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import RailNav from "./components/RailNav";
import ComingSoon from "./components/ComingSoon";

export default function App() {
  if (window.location.pathname.replace(/\/$/, "") === "/cli") {
    return <ComingSoon />;
  }

  return (
    <main className="wrap">
      <RailNav />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Awards />
      <Contact />
    </main>
  );
}
