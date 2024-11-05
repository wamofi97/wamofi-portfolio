// import profile1 from '../assets/profile.webp';
// import profile2 from '../assets/frame2.png';
// import profile3 from '../assets/frame3.png';
import profile4 from '../assets/frame4.png';
import resume from '/resume.pdf';
import { Link } from 'react-scroll'

import { Github, Linkedin, Mail, FileUser,  ChevronRight } from 'lucide-react';

export default function Hero() {
  
  return (
    <section className="flex items-center justify-center pt-16">
      <div className="max-w-5xl px-4 py-20 flex flex-wrap gap-x-12 gap-y-8 items-center justify-center">
        <div className='flex flex-col gap-4 items-center'>
          <span className='text-3xl'><span className=" animate-wave">👋 </span> Hello</span>
          <div className="relative group mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-200 to-teal-400 rounded-full blur-xl opacity-30 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative rounded-full shadow-xl rotate-3 hover:rotate-0 transition-transform duration-300">
              <img 
                src={profile4}
                alt="Profile"
                className="h-52 w-52 object-cover rounded-full transition-all duration-300"
              />
            </div>
          </div>
        </div>

        <div className="space-y-2 text-center">
          <div className="space-y-4 text-center">
            
            <h1 className="sm:text-5xl text-4xl font-body font-bold">
              <span className='font-light'>My name is </span>
              <span className="text-neutral-800 dark:text-neutral-100 tracking-wide">Wan Firdaus</span> 
              <span className='text-lg font-light block'>and I'm a</span>
              <span className="block font-heading tracking-wide gradient-text">FRONTEND DEVELOPER</span>
            </h1>
          </div>
          <p className="text-lg leading-relaxed ">
            Bringing ideas to life with modern web technologies and clean design.
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-3">
            
            <div className="flex items-center justify-center gap-1">
              <a href="https://github.com/wamofi97" target='_blank'  className="relative group bg-neutral-300/40 dark:bg-neutral-800  p-3 rounded-2xl transition-all duration-300 hover:-translate-y-1">
                <Github className="w-5 h-5" />
                <span className="absolute left-1/2 -translate-x-1/2 -top-8 scale-0 group-hover:scale-75 transition-transform duration-300 bg-teal-900 text-white text-sm px-2 py-1 rounded-md shadow-md">
                  GITHUB
                </span>
              </a>
              <a href="https://linkedin.com/in/wanfirdausfauzi" target='_blank'  className="relative group bg-neutral-300/40 dark:bg-neutral-800  p-3 rounded-2xl transition-all duration-300 hover:-translate-y-1">
                <Linkedin className="w-5 h-5" />
                <span className="absolute left-1/2 -translate-x-1/2 -top-8 scale-0 group-hover:scale-75 transition-transform duration-300 bg-teal-900 text-white text-sm px-2 py-1 rounded-md shadow-md">
                  LINKEDIN
                </span>
              </a>
              <a href="mailto:wamofi.dev@gmail.com" target='_blank'  className="relative group bg-neutral-300/40 dark:bg-neutral-800  p-3 rounded-2xl transition-all duration-300 hover:-translate-y-1">
                <Mail className="w-5 h-5" />
                <span className="absolute left-1/2 -translate-x-1/2 -top-8 scale-0 group-hover:scale-75 transition-transform duration-300 bg-teal-900 text-white text-sm px-2 py-1 rounded-md shadow-md">
                  EMAIL
                </span>
              </a>
              <a href={resume} target='_blank'  className="flex items-center gap-1 border border-neutral-400/30 dark:border-neutral-700 bg-neutral-300/40 dark:bg-neutral-800 px-4 py-2 rounded-2xl transition-all duration-300 hover:-translate-y-1">
                <FileUser className="w-5 h-5" />
                Resume
              </a>
            </div>
            <Link 
              to="projects"
              smooth={true}
              className="cursor-pointer group relative inline-flex items-center gap-2 bg-neutral-700 text-neutral-200 dark:bg-neutral-200 dark:text-neutral-700 hover:bg-teal-700 hover:text-neutral-50 dark:hover:bg-teal-300 dark:hover:text-neutral-700 hover:shadow-lg px-4 py-2 rounded-xl font-medium transition-all duration-300"
            >
              See My Work
              <span 
                className="w-0 overflow-hidden group-hover:w-5 transition-[width] duration-300 ease-in-out"
              >
                <ChevronRight 
                  className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </span>
            </Link>
          </div>
        </div>     
      </div>
    </section>
  );
}