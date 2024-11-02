import figma from "../assets/logos/figma.svg";
import git from "../assets/logos/git.svg";
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
    title: "Git",
    source: git ,
    desc: "Version control"
  },
  {
    title: "React",
    source: react,
    desc: "Frontend framework"
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
    title: "TypeScript",
    source: typescript,
    desc: "Language"
  }
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading inline-flex items-center gap-2">
            My go-to technologies
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 mx-auto max-w-5xl">
        {skills.map((skill, index) => (
            <div key={index} className="group bg-neutral-800 hover:bg-neutral-800/60 rounded-lg p-6 hover:animate-float">
                <div className=" flex flex-col sm:flex-row items-center gap-2 sm:gap-4 ">
                    <img src={skill.source} alt={skill.title} className="w-8 h-8 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300" />
                    <div>
                        <h3 className="text-xl font-body">{skill.title}</h3>
                        <p className="text-neutral-400 text-sm hidden sm:block">{skill.desc}</p>
                    </div>
                </div>
            </div>
        ))}
      </div>
    </section>
  );
}