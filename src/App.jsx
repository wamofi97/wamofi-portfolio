import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import Hero from "./components/Hero";
import Project from "./components/Project";
import { Skills } from "./components/Skills";
import { Element } from "react-scroll";
import ThemeToggle from "./components/ThemeToggle";

function App() {

  return (
    <div className="w-full relative bg-neutral-200 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-200 transition-colors duration-500">
      <Header/>
      <main className="max-w-5xl mx-auto relative overflow-hidden md:overflow-visible " >
        <Element name="hero" className="min-h-[60vh] flex justify-center items-center">
            <Hero/>
        </Element>
        <Element name="skills" className=" flex justify-center items-center">
          <Skills/>
        </Element>
        <Element name="projects" className=" flex justify-center items-center">
            <Project/>
        </Element>
        <Element name="experiences" className=" flex justify-center items-center">
          <Experience/>
        </Element>
        <Element name="about" className=" flex justify-center items-center">
              <About/>
        </Element>
        <Element name="contact" className="min-h-[90vh] flex justify-center items-center">
              <Contact/>
        </Element>
        <Footer/>
        <ThemeToggle/>
      </main>
    </div>
  )
}

export default App
