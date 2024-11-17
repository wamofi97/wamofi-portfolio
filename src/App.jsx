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
    <div className="relative w-full overflow-hidden text-neutral-900 dark:text-neutral-200 md:overflow-visible">
      <Header />
      <main className="relative mx-auto max-w-5xl">
        <Element
          name="hero"
          className="flex min-h-screen items-center justify-center"
        >
          <Hero />
        </Element>
        <Element name="skills">
          <Skills />
        </Element>
        <Element name="projects">
          <Project />
        </Element>
        <Element name="experiences">
          <Experience />
        </Element>
        <Element name="about">
          <About />
        </Element>
        <Element
          name="contact"
          className="flex min-h-screen items-center justify-center"
        >
          <Contact />
        </Element>
        <Footer />
        <DottedBackground />
      </main>
    </div>
  );
}

export default App;
