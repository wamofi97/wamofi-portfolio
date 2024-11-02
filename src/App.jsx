import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import Hero from "./components/Hero";
import Project from "./components/Project";
import { Skills } from "./components/Skills";
import { Element } from "react-scroll";

function App() {
  
  return (
    <main className="bg-neutral-950 text-neutral-200">
      <Header/>
      <main>
        <Element name="hero">
          <Hero/>
        </Element>
        <Element name="skills">
          <Skills/>
        </Element>
        <Element name="projects">
          <Project/>
        </Element>
        <Element name="experiences">
          <Experience/>
        </Element>
        <Element name="about">
          <About/>
        </Element>
        <Element name="contact">
          <Contact/>
        </Element>
        <Footer/>
      </main>
    </main>
  )
}

export default App
