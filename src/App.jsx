import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import Hero from "./components/Hero";
import Project from "./components/Project";
import { Skills } from "./components/Skills";
import DottedBackground from "./components/DottedBackground";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

function App() {
  const [activeSection, setActiveSection] = useState("");

  const { ref: homeRef, inView: isHomeInView } = useInView({ threshold: 0.5 });
  const { ref: skillsRef, inView: isSkillsInView } = useInView({
    threshold: 0.5,
  });
  const { ref: projectsRef, inView: isProjectsInView } = useInView({
    threshold: 0.2,
  });
  const { ref: experiencesRef, inView: isExperiencesInView } = useInView({
    threshold: 0.5,
  });
  const { ref: aboutRef, inView: isAboutInView } = useInView({
    threshold: 0.5,
  });
  const { ref: contactRef, inView: isContactInView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (isHomeInView) {
      setActiveSection("home");
    } else if (isSkillsInView) {
      setActiveSection("skills");
    } else if (isProjectsInView) {
      setActiveSection("projects");
    } else if (isExperiencesInView) {
      setActiveSection("experiences");
    } else if (isAboutInView) {
      setActiveSection("about");
    } else if (isContactInView) {
      setActiveSection("contact");
    }
  }, [
    isHomeInView,
    isSkillsInView,
    isProjectsInView,
    isExperiencesInView,
    isAboutInView,
    isContactInView,
    activeSection,
  ]);

  return (
    <div className="relative w-full overflow-hidden text-neutral-900 dark:text-neutral-200 md:overflow-visible">
      <Header activeSection={activeSection} />
      <main className="relative mx-auto max-w-5xl">
        <div
          id="hero"
          ref={homeRef}
          className="flex min-h-screen items-center justify-center"
        >
          <Hero />
        </div>
        <div id="skills" ref={skillsRef}>
          <Skills />
        </div>
        <div id="projects" ref={projectsRef}>
          <Project />
        </div>
        <div id="experiences" ref={experiencesRef}>
          <Experience />
        </div>
        <div id="about" ref={aboutRef}>
          <About />
        </div>
        <div id="contact" ref={contactRef} className="min-h-[80vh]">
          <Contact />
        </div>

        <Footer />
        <DottedBackground />
      </main>
    </div>
  );
}

export default App;
