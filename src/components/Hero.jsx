// import profile1 from '../assets/profile.webp';
// import profile2 from '../assets/frame2.png';
import profile3 from '../assets/frame3.png';
import profile4 from '../assets/frame4.png';
import resume from '../assets/resume.pdf';
import { useState } from 'react';
import { Github, Linkedin, Mail, FileUser, House, BrainCircuit, MessageCircleHeart, ChevronRight } from 'lucide-react';
import { IoMdFootball } from "react-icons/io";
import { MdFoodBank } from "react-icons/md";

export default function Hero() {
  const [randomProfile, setRandomProfile] = useState(1);
  const [show, setShow] = useState(false);
  const profiles = [profile4, profile3 ];
  const handleMouseOver = () => {
    setRandomProfile(0); 
    setShow(true);
  }
  const handleMouseOut = () => {
    setRandomProfile(1); 
    setShow(false);
  }
  return (
    <section className=" min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-4 py-20 flex flex-wrap sm:flex-nowrap gap-x-6 gap-y-12 items-center">
        <div className="space-y-2 text-center sm:text-left">
          <div className="space-y-4 text-center sm:text-left">
            <span className="text-2xl animate-wave">👋 <span className=" inline-block">Hello!</span></span>
            <h1 className="sm:text-5xl text-4xl font-body font-bold tracking-tight ">
              I'm Wan Firdaus
              <span className='text-xl font-extralight opacity-80 block mt-1'>and I'm a</span>
              <span className="block gradient-text">Frontend Developer</span>
            </h1>
          </div>
          {/* <p className='text-white font-body rounded-full bg-slate-600 px-4 py-2 w-fit  mx-auto'> BASED IN MALAYSIA</p> */}
          <p className="text-xl text-gray-600 leading-relaxed ">
            Bringing ideas to life with modern web technologies and clean design ✨
          </p>
          <div className="flex items-center justify-center sm:justify-start gap-1">
              <a href="https://github.com/wamofi97"  target='_blank'className="rounded-lg p-2.5 text-slate-500 hover:text-slate-700 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/wanfirdausfauzi" target='_blank' className=" rounded-lg p-2.5 text-slate-500 hover:text-slate-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:wamofi97@gmail.com" target='_blank' className=" rounded-lg p-2.5 text-slate-500 hover:text-slate-700 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          <div className="flex flex-wrap sm:justify-start justify-center items-center gap-4">
            <a 
              href="#projects"
              className="group relative inline-flex items-center gap-2 bg-slate-600 text-white px-4 py-2 rounded-xl text-lg font-medium hover:bg-slate-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              See My Work
              <ChevronRight className='w-5 h-5'/>
            </a>
            <a 
              href={resume}
              download
              className="inline-flex items-center gap-2 bg-white texxt-slate-600 px-4 py-2 rounded-xl text-lg font-medium border-2 border-purple-200 hover:border-slate-600 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <FileUser className="w-5 h-5" />
              Resume
            </a>
          </div>
          
        </div>

        <div className="relative group h-full min-w-60 mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-indigo-500 rounded-[3rem] blur-3xl opacity-30 group-hover:opacity-70 transition-opacity"></div>
          <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className="relative bg-white p-4 sm:rounded-[3rem] rounded-full shadow-xl rotate-3 hover:rotate-0 transition-transform duration-300">
            <div className={`${!show && 'sm:scale-0'} flex gap-2 justify-center transition-transform duration-300 scale-100 absolute top-1 left-1/2 -translate-x-1/2 text-center text-white text-sm font-body rounded-full bg-slate-600/90 py-1 px-2 w-52`} ><House className='w-5 h-5'/> BASED IN MALAYSIA</div>
            <div className={`${!show && 'sm:scale-0'} scale-100  flex gap-0.5 w-full left-0 justify-center flex-wrap absolute sm:top-3/4 top-2/3 transition-transform duration-300`}>
                <div className="flex gap-1 text-center text-white text-sm font-body rounded-full bg-slate-600/80 py-1 px-2" > <BrainCircuit className='w-5 h-5'/>Self Learner
                </div>
                <div className="flex gap-1 text-center text-white text-sm font-body rounded-full bg-slate-600/80 py-1 px-2" > <IoMdFootball className='w-5 h-5' />Love Football
                </div>
                <div className="flex gap-1 text-center text-white text-sm font-body rounded-full bg-slate-600/80 py-1 px-2" ><MdFoodBank className='w-5 h-5'/>Food Enjoyer</div>
                </div>
                <img 
                  src={profiles[randomProfile]}
                  alt="Profile"
                  className="sm:h-96 h-72 object-cover sm:rounded-[2rem] rounded-full transition-all duration-300"
                />
          </div>
        </div>
      </div>
    </section>
  );
}