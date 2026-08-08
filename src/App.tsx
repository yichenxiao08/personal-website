import About from "./components/About";
import Awards from "./components/Awards";
import Projects from "./components/Projects";
import Hero from "./components/Hero";
import Experience from "./components/Experience";

export default function App() {
  return (
    <main className="wrap">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Awards />
    </main>
  );
}
