import { useState } from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-10 transition-all ease-in-out backdrop-blur-sm shadow-md ${isMenuOpen ? "h-screen" : "h-16"}`}>
      <nav className="max-w-5xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between ">
          <div className="text-2xl font-bold gradient-text">wamofi.dev</div>
          
           {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-600 hover:text-slate-600 transition-all z-10"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop menu */}  
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              <a href="#about" className="hover:text-teal-600 transition-colors text-lg">About</a>
              <a href="#projects" className="hover:text-teal-600 transition-colors text-lg">Projects</a>
              <a href="#skills" className="hover:text-teal-600 transition-colors text-lg">Skills</a>
              <a href="#contact" className="hover:text-teal-600 transition-colors text-lg">Contact</a>
            </div>
            <div className="flex items-center gap-4 ">
              <a href="https://github.com/wamofi97"  target='_blank'className="transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/wanfirdausfauzi" target='_blank' className="transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:wamofi97@gmail.com" target='_blank' className="transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile menu */}    
        
        <div className={`md:hidden transition-all duration-500 ease-in-out bg-slate-700 shadow-xl  min-h-screen w-3/4 sm:w-1/2 absolute top-0 right-0 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} pt-20`}>
          <div className="flex flex-col items-center gap-20">
            <div className='flex flex-col items-center gap-4 py-4 '>
                <a href="#about" className="text-slate-500 hover:scale-105 transition-all duration-200 ease-in-out text-2xl w-fit">About</a>
                <a href="#projects" className="text-slate-500 hover:text-slate-700 transition-colors text-2xl w-fit">Projects</a>
                <a href="#skills" className="text-slate-500 hover:text-slate-700 transition-colors text-2xl w-fit">Skills</a>
                <a href="#contact" className="text-slate-500 hover:text-slate-700 transition-colors text-2xl w-fit">Contact</a>
            </div>
            <div className="flex justify-center items-center gap-8">
              <a href="https://github.com/wamofi97" target='_blank' className="text-slate-500 hover:text-slate-700 transition-colors">
                <Github className="text-3xl" />
              </a>
              <a href="https://linkedin.com/in/wanfirdausfauzi" target='_blank' className="text-slate-500 hover:text-slate-700 transition-colors">
                <Linkedin className="text-3xl" />
              </a>
              <a href="mailto:wamofi97@gmail.com" className="text-slate-500 hover:text-slate-700 transition-colors">
                <Mail className="text-3xl" />
              </a>
            </div>
          </div>
        </div>
      </nav>
      
    </header>
  );
}