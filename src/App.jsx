import About from "./components/About";
import Contact from "./components/Contact";
import { Header } from "./components/Header";
import Hero from "./components/Hero";
import { Skills } from "./components/Skills";


function App() {
  
  return (
    <main className="bg-neutral-900 text-neutral-200">
      <Header/>
      <main>
        <Hero/>
        <About/>
        <Skills/>
        <Contact/>
      </main>
    </main>
  )
}

export default App
