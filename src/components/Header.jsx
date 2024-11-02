import { useEffect, useState } from 'react';
import { Link,  scrollSpy  } from 'react-scroll';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    // Events.scrollEvent.register('begin', () => {});
    // Events.scrollEvent.register('end', (to) => {
    //   setActiveSection(to);
    // });

    scrollSpy.update();

    // return () => {
    //   Events.scrollEvent.remove('begin');
    //   Events.scrollEvent.remove('end');
    // };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-10 transition-all ease-in-out bg-neutral-950/70 backdrop-blur-sm  shadow-xl `}>
      <nav className="max-w-5xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between ">
          <Link to="hero" duration={700} smooth={true} className="cursor-pointer text-2xl font-bold gradient-text">wamofi.dev</Link>
          
           {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-neutral-600 hover:text-neutral-400 transition-all z-10"
          >
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>

          {/* Desktop menu */}  
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-8">
              <Link to="skills" spy={true} duration={700} smooth={true}  activeClass="text-teal-400 underline underline-offset-4 decoration-2" className="cursor-pointer hover:text-teal-400 transition-colors text-lg">Skills</Link>
              <Link to="projects" spy={true} duration={700} smooth={true}  activeClass="text-teal-400 underline underline-offset-4 decoration-2 "  className="cursor-pointer hover:text-teal-400 transition-colors text-lg" >Projects</Link>
              <Link to="experiences" spy={true} duration={700} smooth={true}  activeClass="text-teal-400 underline underline-offset-4 decoration-2 "  className="cursor-pointer hover:text-teal-400 transition-colors text-lg" >Experiences</Link>
              <Link to="about" spy={true} duration={700} smooth={true}  activeClass="text-teal-400 underline underline-offset-4 decoration-2 "  className="cursor-pointer hover:text-teal-400 transition-colors text-lg">About</Link>
              <Link to="contact" spy={true} duration={700} smooth={true} activeClass="text-teal-400 underline underline-offset-4 decoration-2 "  className="cursor-pointer hover:text-teal-400 transition-colors text-lg" >Contact</Link>
            </div>
          </div>
        </div>

        {/* Mobile menu */}    
        
        <div className={`md:hidden transition-all duration-500 ease-in-out bg-neutral-950/95   min-h-screen w-3/4 sm:w-1/2 absolute top-0 right-0 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} pt-20`}>
          <div className="flex flex-col items-center gap-20">
            <div className='flex flex-col items-center gap-8 py-4 text-2xl'>
              <Link to="skills" smooth={true} className="cursor-pointer hover:text-teal-600 transition-colors ">Skills</Link>
              <Link to="about" smooth={true} className="cursor-pointer hover:text-teal-600 transition-colors ">About</Link>
              <Link to="projects" smooth={true} className="cursor-pointer hover:text-teal-600 transition-colors ">Projects</Link>
              <Link to="contact" smooth={true} className="cursor-pointer hover:text-teal-600 transition-colors ">Contact</Link>
            </div>
            <div className="flex justify-center items-center gap-8">
              <a href="https://github.com/wamofi97" target='_blank' className="text-neutral-400 hover:text-slate-700 transition-colors">
                <Github className="text-3xl" />
              </a>
              <a href="https://linkedin.com/in/wanfirdausfauzi" target='_blank' className="text-neutral-400 hover:text-slate-700 transition-colors">
                <Linkedin className="text-3xl" />
              </a>
              <a href="mailto:wamofi.dev@gmail.com" className="text-neutral-400 hover:text-slate-700 transition-colors">
                <Mail className="text-3xl" />
              </a>
            </div>
          </div>
        </div>
      </nav>
      
    </header>
  );
}