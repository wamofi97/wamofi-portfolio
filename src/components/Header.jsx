import { useEffect, useState } from 'react';
import { Link,  scrollSpy  } from 'react-scroll';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    scrollSpy.update();
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-20 md:bg-transparent dark:bg-transparent md:border-none border-b border-neutral-400/80 dark:border-neutral-700/80 md:shadow-none shadow-md md:backdrop-blur-none backdrop-blur-sm `}>
      <nav className="max-w-5xl mx-auto px-4 py-4">
        <div className="flex items-center md:justify-center justify-between">
        <Link to="hero" duration={700} smooth={true} className="md:hidden cursor-pointer text-2xl font-logo font-bold gradient-text">wamofi.dev</Link>
          
           {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden  hover:text-neutral-400 transition-all z-10"
          >
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>

          {/* Desktop menu */}  
          <div className="hidden md:flex items-center gap-20 rounded-2xl border border-neutral-400/80 dark:border-neutral-700/80 px-4 py-2 backdrop-blur-sm transition-colors">
            <Link to="hero" duration={700} smooth={true} className="cursor-pointer text-xl font-bold font-logo gradient-text">wamofi.dev</Link>
           
            <div className="flex items-center gap-8 font-medium uppercase text-sm">
              <Link to="skills" spy={true} duration={700} smooth={true} offset={-100} activeClass="active-text" className="cursor-pointer hover:text-teal-500 transition-all">Skills</Link>
              <Link to="projects" spy={true} duration={700} smooth={true} offset={-100} activeClass="active-text" className="cursor-pointer hover:text-teal-500 transition-all" >Projects</Link>
              <Link to="experiences" spy={true} duration={700} smooth={true} offset={-100} activeClass="active-text"  className="cursor-pointer hover:text-teal-500 transition-all" >Experiences</Link>
              <Link to="about" spy={true} duration={700} smooth={true} offset={-100} activeClass="active-text"  className="cursor-pointer hover:text-teal-500 transition-all">About</Link>
              <Link to="contact" spy={true} duration={700} smooth={true} offset={-100} activeClass="active-text"  className="cursor-pointer hover:text-teal-500 transition-all" >Contact</Link>
            </div>
            {/* <ThemeToggle/> */}
          </div>
        </div>

        {/* Mobile menu */}    
        
        <div className={`md:hidden transition-all duration-500 ease-in-out bg-neutral-200/95 dark:bg-neutral-950/95 w-3/4 sm:w-1/2 absolute top-0 right-0 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col min-h-screen items-center justify-evenly gap-20">
            <div className='flex flex-col items-center gap-12 text-3xl font-medium uppercase'>
              <Link to="skills" onClick={() => setIsMenuOpen(false)} spy={true} duration={700} smooth={true} offset={-100} activeClass="active-text" className="cursor-pointer hover:text-teal-500 transition-all">Skills</Link>
              <Link to="projects" onClick={() => setIsMenuOpen(false)} spy={true} duration={700} smooth={true} offset={-100} activeClass="active-text" className="cursor-pointer hover:text-teal-500 transition-all" >Projects</Link>
              <Link to="experiences" onClick={() => setIsMenuOpen(false)} spy={true} duration={700} smooth={true} offset={-100} activeClass="active-text"  className="cursor-pointer hover:text-teal-500 transition-all" >Experiences</Link>
              <Link to="about" onClick={() => setIsMenuOpen(false)} spy={true} duration={700} smooth={true} offset={-100} activeClass="active-text"  className="cursor-pointer hover:text-teal-500 transition-all">About</Link>
              <Link to="contact" onClick={() => setIsMenuOpen(false)} spy={true} duration={700} smooth={true} offset={-100} activeClass="active-text"  className="cursor-pointer hover:text-teal-500 transition-all" >Contact</Link>
            </div>
            {/* <ThemeToggle/> */}
            <div className="flex justify-center items-center gap-8">
              <a href="https://github.com/wamofi97" target='_blank' className="transition-colors">
                <Github className="w-8 h-8"/>
              </a>
              <a href="https://linkedin.com/in/wanfirdausfauzi" target='_blank' className="transition-colors">
                <Linkedin className="w-8 h-8"/>
              </a>
              <a href="mailto:wamofi.dev@gmail.com" className="transition-colors">
                <Mail className="w-8 h-8"/>
              </a>
            </div>
          </div>
        </div>
      </nav>
      
    </header>
  );
}