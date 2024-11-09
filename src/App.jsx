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
    <div className="w-full relative text-neutral-900 dark:text-neutral-200 transition-colors duration-500 overflow-hidden ">
      <Header/>
      <main className="max-w-5xl mx-auto relative overflow-hidden md:overflow-visible " >
        <Element name="hero" className="min-h-screen flex justify-center items-center">
            <Hero/>
        </Element>
        <Element name="skills" className="min-h-screen flex justify-center items-center">
          <Skills/>
        </Element>
        <Element name="projects" className=" min-h-screen flex justify-center items-center">
            <Project/>
        </Element>
        <Element name="experiences" className=" min-h-screen flex justify-center items-center">
          <Experience/>
        </Element>
        <Element name="about" className="min-h-screen flex justify-center items-center">
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
