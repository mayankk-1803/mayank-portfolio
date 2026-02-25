import "./app.scss"
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";


const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar />
      <Hero />
    </section>
    <section id="Techstack"><Parallax type="techstack" /></section>
    <section>Tech Stack</section>
    <section id="Projects"><Parallax type="projects" /></section>
    <section>Project1</section>
    <section>Project2</section>
    <section>Project3</section>
    <section>Project4</section>
    <section id="Contact">Contact</section>
  </div>;
};

export default App;
