import { useState } from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold gradient-text">wamofi.dev</div>
          
           {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden text-gray-600 hover:text-purple-600 transition-all z-10"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop menu */}  
          <div className="hidden sm:flex items-center gap-8">
            <div className="flex items-center gap-6">
              <a href="#about" className="text-gray-600 hover:text-purple-600 transition-colors text-lg">About</a>
              <a href="#projects" className="text-gray-600 hover:text-purple-600 transition-colors text-lg">Projects</a>
              <a href="#skills" className="text-gray-600 hover:text-purple-600 transition-colors text-lg">Skills</a>
              <a href="#contact" className="text-gray-600 hover:text-purple-600 transition-colors text-lg">Contact</a>
            </div>
            <div className="flex items-center gap-4 ">
              <a href="https://github.com/wamofi97"  target='_blank'className="text-gray-600 hover:text-purple-600 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/wanfirdausfauzi" target='_blank' className="text-gray-600 hover:text-purple-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:wamofi97@gmail.com" target='_blank' className="text-gray-600 hover:text-purple-600 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

         {/* Mobile menu */}    
        {/* <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} pt-4`}> */}
        <div className={`sm:hidden transition-all duration-500 overflow-hidden ${isMenuOpen ? 'translate-x-0 opacity-100 ' : 'translate-x-full opacity-10'} pt-4`}>
          <div className="flex flex-col justify-around text-center h-96">
            <div className='flex flex-col'>
                <a href="#about" className="text-gray-600 hover:text-purple-600 hover:bg-gray-50 transition-colors text-2xl py-4">About</a>
                <a href="#projects" className="text-gray-600 hover:text-purple-600 hover:bg-gray-50 transition-colors text-2xl py-4">Projects</a>
                <a href="#skills" className="text-gray-600 hover:text-purple-600 hover:bg-gray-50 transition-colors text-2xl py-4">Skills</a>
                <a href="#contact" className="text-gray-600 hover:text-purple-600 hover:bg-gray-50 transition-colors text-2xl py-4">Contact</a>
            </div>
            <div className="flex justify-center items-center gap-8 pt-4">
              <a href="https://github.com/wamofi97" target='_blank' className="text-gray-600 hover:text-purple-600 transition-colors">
                <Github className="text-3xl" />
              </a>
              <a href="https://linkedin.com/in/wanfirdausfauzi" target='_blank' className="text-gray-600 hover:text-purple-600 transition-colors">
                <Linkedin className="text-3xl" />
              </a>
              <a href="mailto:wamofi97@gmail.com" className="text-gray-600 hover:text-purple-600 transition-colors">
                <Mail className="text-3xl" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}