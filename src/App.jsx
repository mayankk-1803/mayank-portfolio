import "./app.scss"
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Projects from "./components/projects/Projects";
import TechStack from "./components/techstack/TechStack";


const App = () => {
  return <div>
    <Cursor />
    <section id="Homepage">
      <Navbar />
      <Hero />
    </section>
    <section id="Techstack"><Parallax type="techstack" /></section>
    <section><TechStack /></section>
    <section id="Projects"><Parallax type="projects" /></section>
    <Projects />
    <section id="Contact">
      <Contact />
    </section>
  </div>;
};

export default App;
