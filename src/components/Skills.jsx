import figma from "../assets/logos/figma.svg";
import react from "../assets/logos/react.svg";
import tailwind from "../assets/logos/tailwind.svg";
import typescript from "../assets/logos/typescript.svg";
import nextjs from "../assets/logos/nextjs.svg";
import vite from "../assets/logos/vite.png";
import github from "../assets/logos/github.svg";
import javascript from "../assets/logos/javascript.svg";
import postgres from "../assets/logos/postgres.png";
import nodejs from "../assets/logos/nodejs.png";
import express from "../assets/logos/express.svg";

const skills = [
  {
    title: "JavaScript",
    source: javascript,
    desc: "Language"
  },
  {
    title: "Vite",
    source: vite,
    desc: "Frontend build tool"
  },
  {
    title: "React",
    source: react,
    desc: "Frontend framework"
  },
  {
    title: "TypeScript",
    source: typescript,
    desc: "Language"
  },
  {
    title: "Tailwind",
    source: tailwind,
    desc: "CSS framework"
  },   
  {
    title: "Next.js",
    source: nextjs,
    desc: "Fullstack framework"
  },
  {
    title: "Node.js",
    source: nodejs,
    desc: "Backend framework"
  },
  {
    title: "Express",
    source: express,
    desc: "Backend framework"
  },
  {
    title: "PostgreSQL",
    source: postgres,
    desc: "Database"
  },
  {
    title: "Github",
    source: github,
    desc: "Version control"
  },
  {
    title: "Figma",
    source: figma,
    desc: "Design tool"
  },
]

export function Skills() {
  return (
    <section  id="skills" className="h-full flex flex-col justify-center py-20 px-4 relative">
      
      <div className=" mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="md:text-6xl sm:text-5xl text-[2.5rem]  font-heading inline-flex items-center gap-2">
            SKILLS
          </h2>
          <h3 className="text-teal-700 text-lg font-medium">My go-to technologies.</h3>
          
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mx-auto">
        {skills.map((skill, index) => (
            <div key={index} className="group bg-neutral-300/60 dark:bg-neutral-900/60 hover:bg-teal-600/20 dark:hover:bg-teal-900/20 rounded-2xl p-5">
                <div className=" flex flex-col sm:flex-row items-center gap-2 sm:gap-4 ">
                    <img src={skill.source} alt={skill.title} className={`${skill.source === github ||  skill.source === nextjs || skill.source === express  ? "dark:invert" : ""}  h-8 object-cover group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500`} />
                    <div>
                        <h3 className="text-lg font-body">{skill.title}</h3>
                        <p className="text-neutral-500 text-sm md:block hidden">{skill.desc}</p>
                    </div>
                </div>
            </div>
        ))}
      </div>
      <div className="absolute top-10 sm:right-0 -right-20 sm:w-1/5 w-1/2 h-1/3 bg-teal-400 rounded-2xl blur-2xl opacity-20"></div>
      <div className="absolute -bottom-32 sm:left-10 -left-20 sm:w-1/5 w-1/2 h-1/3 bg-teal-400 rounded-3xl blur-3xl opacity-20"></div>
    </section>
  );
}