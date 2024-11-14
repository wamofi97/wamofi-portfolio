import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import Hero from "./components/Hero";
import Project from "./components/Project";
import { Skills } from "./components/Skills";
import { Element } from "react-scroll";
import DottedBackground from "./components/DottedBackground";

function App() {

  return (
    <div className="w-full relative text-neutral-900 dark:text-neutral-200 transition-colors duration-500 overflow-hidden md:overflow-visible ">
      <Header/>
      <main className="max-w-5xl mx-auto relative" >
        <Element name="hero" className="lg:min-h-screen flex justify-center items-center">
            <Hero/>
        </Element>
        <Element name="skills" >
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
        <Element name="contact" className="min-h-screen flex justify-center items-center">
              <Contact/>
        </Element>
        <Footer/>
        <DottedBackground/>
        
      </main>
    </div>
  )
}

export default App
