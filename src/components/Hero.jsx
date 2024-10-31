// import profile1 from '../assets/profile.webp';
// import profile2 from '../assets/frame2.png';
// import profile3 from '../assets/frame3.png';
import profile4 from '../assets/frame4.png';
import resume from '/resume.pdf';
import { useState } from 'react';
import { Github, Linkedin, Mail, FileUser, BrainCircuit, ChevronRight } from 'lucide-react';
import { IoMdFootball } from "react-icons/io";
import { MdFoodBank } from "react-icons/md";

export default function Hero() {
  // const [randomProfile, setRandomProfile] = useState(1);
  const [show, setShow] = useState(false);
  // const profiles = [profile4, profile3 ];
  const handleMouseOver = () => {
    // setRandomProfile(0); 
    setShow(true);
  }
  const handleMouseOut = () => {
    // setRandomProfile(1); 
    setShow(false);
  }
  return (
    <section className=" min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-5xl w-full px-4 py-20 flex flex-wrap sm:flex-nowrap gap-8 items-center">
        <div className="relative group mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-200 to-teal-400 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
          <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className="relative rounded-full shadow-xl rotate-3 hover:rotate-0 transition-transform duration-300">

            {/* <div className={`${!show && 'sm:scale-0'} flex gap-2 justify-center transition-transform duration-300 scale-100 absolute top-4 left-1/2 -translate-x-1/2 text-center text-white text-sm font-body rounded-full bg-slate-600/90 py-1 px-2 w-52`} >BASED IN MALAYSIA</div> */}

            {/* <div className={`${!show && 'sm:scale-0'} scale-100 flex gap-0.5 w-full left-0 justify-center flex-wrap absolute sm:top-3/4 top-2/3 transition-transform duration-300`}>
                <div className="flex gap-1 text-center text-white text-sm font-body rounded-full bg-slate-600/80 py-1 px-2" > <BrainCircuit className='w-5 h-5'/>Self Learner
                </div>
                <div className="flex gap-1 text-center text-white text-sm font-body rounded-full bg-slate-600/80 py-1 px-2" > <IoMdFootball className='w-5 h-5' />Love Football
                </div>
                <div className="flex gap-1 text-center text-white text-sm font-body rounded-full bg-slate-600/80 py-1 px-2" ><MdFoodBank className='w-5 h-5'/>Food Enjoyer</div>
            </div> */}
            <img 
              // src={profiles[randomProfile]}
              src={profile4}
              alt="Profile"
              className="h-72 w-72 object-cover rounded-full transition-all duration-300"
            />
          </div>
        </div>

        <div className="space-y-2 text-center sm:text-left">
          <div className="space-y-4 text-center sm:text-left">
            <span className="text-2xl animate-wave">👋 <span className=" inline-block">Hello!</span></span>
            <h1 className="sm:text-5xl text-4xl font-body font-bold tracking-tight ">
              I'm Wan Firdaus
              <span className='text-xl font-extralight block mt-1'>and I'm a</span>
              <span className="block gradient-text">Frontend Developer</span>
            </h1>
          </div>
          <p className="text-xl text-neutral-400 leading-relaxed ">
            Bringing ideas to life with modern web technologies and clean design ✨
          </p>
          
          <div className="flex flex-wrap sm:justify-start justify-center items-center gap-3">
            
            <div className="flex items-center justify-center sm:justify-start gap-1">
              <a href="https://github.com/wamofi97" target='_blank'  className="relative group bg-neutral-800  p-3 rounded-full transition-all duration-300 hover:-translate-y-1">
                <Github className="w-5 h-5" />
                <span className="absolute left-1/2 -translate-x-1/2 -top-8 scale-0 group-hover:scale-100 transition-transform duration-300 bg-gray-800 text-white text-sm px-2 py-1 rounded-md shadow-md">
                  Github
                </span>
              </a>
              <a href="https://linkedin.com/in/wanfirdausfauzi" target='_blank'  className="relative group bg-neutral-800  p-3 rounded-full transition-all duration-300 hover:-translate-y-1">
                <Linkedin className="w-5 h-5" />
                <span className="absolute left-1/2 -translate-x-1/2 -top-8 scale-0 group-hover:scale-100 transition-transform duration-300 bg-gray-800 text-white text-sm px-2 py-1 rounded-md shadow-md">
                  Linkedin
                </span>
              </a>
              <a href="mailto:wamofi97@gmail.com" target='_blank'  className="relative group bg-neutral-800  p-3 rounded-full transition-all duration-300 hover:-translate-y-1">
                <Mail className="w-5 h-5" />
                <span className="absolute left-1/2 -translate-x-1/2 -top-8 scale-0 group-hover:scale-100 transition-transform duration-300 bg-gray-800 text-white text-sm px-2 py-1 rounded-md shadow-md">
                  Email
                </span>
              </a>
              <a href={resume} target='_blank'  className="relative group bg-neutral-800  p-3 rounded-full transition-all duration-300 hover:-translate-y-1">
                <FileUser className="w-5 h-5" />
                <span className="absolute left-1/2 -translate-x-1/2 -top-8 scale-0 group-hover:scale-100 transition-transform duration-300 bg-gray-800 text-white text-sm px-2 py-1 rounded-md shadow-md">
                  Resume
                </span>
              </a>
            </div>
            <a 
              href="#projects"
              className="group relative inline-flex items-center gap-2 text-neutral-800 bg-neutral-200 hover:bg-neutral-100 px-4 py-2 rounded-full font-medium transition-all duration-300"
            >
              See My Work
              <span 
                className="w-0 overflow-hidden group-hover:w-5 transition-[width] duration-300 ease-in-out"
              >
                <ChevronRight 
                  className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </span>
            </a>


            
            
          </div>
          
        </div>

        
      </div>
    </section>
  );
}