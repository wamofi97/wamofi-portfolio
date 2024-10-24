import { Sparkles } from 'lucide-react';
// import profile1 from '../assets/profile.webp';
// import profile2 from '../assets/frame2.png';
import profile3 from '../assets/frame3.png';
import profile4 from '../assets/frame4.png';
import profile5 from '../assets/frame5.png';
import { useState } from 'react';

export default function Hero() {
  const [randomProfile, setRandomProfile] = useState(0);
  const profiles = [profile4, profile3 ];
  const handleMouseDown = () => {
    setRandomProfile((prev) => (prev + 1) % profiles.length); 
  }
  return (
    <section className=" min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 text-center sm:text-left">
          <div className="space-y-4 text-center sm:text-left">
            <span className="text-2xl animate-wave">👋 <span className=" inline-block">Hello!</span></span>
            <h1 className="sm:text-6xl text-5xl font-heading ">
              I'm Wan Firdaus
              <span className='text-2xl block mt-1'>and I'm a</span>
              <span className="block gradient-text">Frontend Developer</span>
            </h1>
          </div>
          <p className="text-xl text-gray-600 leading-relaxed ">
            I love bringing fun and creativity to the web! Building delightful 
            experiences with modern tech is my passion ✨
          </p>
          <div className="flex items-center gap-4">
            <a 
              href="#projects"
              className="group relative inline-flex items-center gap-2 bg-slate-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-slate-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <Sparkles className="w-5 h-5 animate-float" />
              See My Work
            </a>
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 bg-white texxt-slate-600 px-8 py-4 rounded-full text-lg font-medium border-2 border-purple-200 hover:border-purple-600 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              Say Hello!
            </a>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-indigo-500 rounded-[3rem] blur-3xl opacity-30 group-hover:opacity-40 transition-opacity"></div>
          <div  className="relative bg-white p-4 rounded-[3rem] shadow-xl rotate-3 hover:rotate-0 transition-transform duration-300">
            <img onMouseOver={handleMouseDown} onMouseOut={handleMouseDown}
              src={profiles[randomProfile]}
              alt="Profile"
              className="w-full h-[500px] object-cover rounded-[2rem] transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}