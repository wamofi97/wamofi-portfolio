import figma from "../assets/logos/figma.svg";
import react from "../assets/logos/react.svg";
import supabase from "../assets/logos/supabase.svg";
import tailwind from "../assets/logos/tailwind.svg";
import typescript from "../assets/logos/typescript.svg";

const skills = [{
    title: "Figma",
    source: figma,
    desc: "Design tool"
  },
  {
    title: "Github",
    source: "https://github.com/favicon.ico",
    desc: "Version control"
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
    title: "Supabase",
    source: supabase,
    desc: "Database"  
  },
  {
    title: "Tailwind",
    source: tailwind,
    desc: "CSS framework"
  },   
  {
    title: "Next.js",
    source: "https://nextjs.org/static/favicon/favicon-32x32.png",
    desc: "Frontend framework"
  },
  {
    title: "PostgreSQL",
    source: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
    desc: "Database"
  },
  {
    title: "Vite",
    source: "https://vitejs.dev/logo.svg",
    desc: "Frontend build tool"
  },
  {
    title: "Vercel",
    source: "https://vercel.com/favicon.ico",
    desc: "Deployment platform"
  }
  
]

export function Skills() {
  return (
    <section  id="skills" className="h-full flex flex-col justify-center pb-20 px-4 relative">
      
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="md:text-6xl sm:text-5xl text-[2.5rem]  font-heading inline-flex items-center gap-2">
            SKILLS
          </h2>
          <h3 className="text-teal-700 text-lg font-medium">My go-to technologies.</h3>
          
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 mx-auto max-w-5xl z-10">
        {skills.map((skill, index) => (
            <div key={index} className="group bg-neutral-300/40 dark:bg-neutral-900/70 hover:bg-teal-600/10 dark:hover:bg-teal-900/20 rounded-2xl p-6 hover:animate-float">
                <div className=" flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 r">
                    <img src={skill.source} alt={skill.title} className="w-8 h-8 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300" />
                    <div>
                        <h3 className="text-lg font-body">{skill.title}</h3>
                        <p className="text-neutral-500 text-sm block">{skill.desc}</p>
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