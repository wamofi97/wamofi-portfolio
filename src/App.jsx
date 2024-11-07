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
import DottedBackground from "./components/DottedBackground";

function App() {

  return (
    <div className="w-full relative   text-neutral-900 dark:text-neutral-200 transition-colors duration-500">
      <Header/>
      <main className="max-w-5xl mx-auto relative overflow-hidden md:overflow-visible " >
        <Element name="hero" className="min-h-screen flex justify-center items-center">
            <Hero/>
        </Element>
        <Element name="skills" className=" ">
          <Skills/>
        </Element>
        <Element name="projects" className=" ">
            <Project/>
        </Element>
        <Element name="experiences" className=" ">
          <Experience/>
        </Element>
        <Element name="about" className=" ">
              <About/>
        </Element>
        <Element name="contact" className="min-h-screen flex items-center justify-center">
              <Contact/>
        </Element>
        <Footer/>
        <DottedBackground/>
        <ThemeToggle/>
      </main>
    </div>
  )
}

export default App
