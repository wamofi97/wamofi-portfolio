import profile from '../assets/frame.png';
import resume from '/resume.pdf';
import { Link } from 'react-scroll'
import { Github, Linkedin, Mail, BookUser, ChevronRight } from 'lucide-react';
import malaysia from '/malaysia.svg';

export default function Hero() {
  
  return (
    <section className="flex md:flex-row flex-col items-center justify-center gap-8 py-52 px-4">
        <div className="relative group flex flex-col items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-200 to-teal-400 rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-opacity"></div>
          <div className="relative rounded-full shadow-xl rotate-3 hover:rotate-0 transition-transform duration-300">
            <img 
              src={profile}
              alt="Profile"
              className="h-52 min-w-52 object-cover rounded-full transition-all duration-300"
            />
          </div>
          
        </div>
        <div className="space-y-4">
          <div className="space-y-2 flex flex-col md:text-start text-center">
            <p className='z-10 w-fit md:mx-0 mx-auto bg-neutral-300/50 dark:bg-neutral-800/50 px-4 py-2 rounded-full text-sm flex items-center'><span className='w-[6px] h-[6px] inline-block rounded-full bg-teal-600 dark:bg-teal-300 mr-2 animate-pulse'></span>Available for work</p>  
            <h1 className='lg:text-6xl sm:text-5xl text-3xl font-bold'> Hi, I'm <span className='gradient-text'>Wan Firdaus</span> <span className=" animate-wave">👋 </span></h1>
            <h2 className="md:text-3xl sm:text-2xl text-xl">A <span className=' font-bold'>frontend developer</span> that love to learn and build things. Based from Malaysia
            <img className='w-8 ml-2 inline' src={malaysia} alt="malaysia flag" />
            </h2>
          </div>
          
          <div className="flex flex-wrap md:justify-start justify-center items-center gap-3">
            <div className="flex items-center justify-center gap-1">
              <a href="https://github.com/wamofi97" target='_blank'  className="relative group bg-neutral-300/80 dark:bg-neutral-800  p-3 rounded-2xl transition-all duration-300 hover:-translate-y-1">
                <Github className="w-5 h-5" />
                <span className="absolute left-1/2 -translate-x-1/2 -top-8 scale-0 group-hover:scale-75 transition-transform duration-300 bg-teal-900 text-white text-sm px-2 py-1 rounded-md shadow-md">
                  GITHUB
                </span>
              </a>
              <a href="https://linkedin.com/in/wanfirdausfauzi" target='_blank'  className="relative group bg-neutral-300/80 dark:bg-neutral-800  p-3 rounded-2xl transition-all duration-300 hover:-translate-y-1">
                <Linkedin className="w-5 h-5" />
                <span className="absolute left-1/2 -translate-x-1/2 -top-8 scale-0 group-hover:scale-75 transition-transform duration-300 bg-teal-900 text-white text-sm px-2 py-1 rounded-md shadow-md">
                  LINKEDIN
                </span>
              </a>
              <a href="mailto:wamofi.dev@gmail.com" target='_blank'  className="relative group bg-neutral-300/80 dark:bg-neutral-800  p-3 rounded-2xl transition-all duration-300 hover:-translate-y-1">
                <Mail className="w-5 h-5" />
                <span className="absolute left-1/2 -translate-x-1/2 -top-8 scale-0 group-hover:scale-75 transition-transform duration-300 bg-teal-900 text-white text-sm px-2 py-1 rounded-md shadow-md">
                  EMAIL
                </span>
              </a>
              <a href={resume} target='_blank'  className="flex items-center gap-1 border border-neutral-400/30 dark:border-neutral-700 bg-neutral-300/80 dark:bg-neutral-800 px-4 py-2 rounded-2xl transition-all duration-300 hover:-translate-y-1">
                <BookUser className="w-5 h-5"/>
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
                className="w-0 group-hover:w-5 transition-[width] duration-300 ease-in-out"
              >
                <ChevronRight 
                  className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </span>
            </Link>
          </div>
        </div>  
    </section>
  );
}