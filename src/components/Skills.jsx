import figma from "../assets/logos/figma.svg";
import git from "../assets/logos/git.svg";
import react from "../assets/logos/react.svg";
import supabase from "../assets/logos/supabase.svg";
import tailwind from "../assets/logos/tailwind.svg";
import typescript from "../assets/logos/typescript.svg";
// import { Heart } from "lucide-react";

const skills = [{
    title: "Figma",
    icon: <img src={figma} alt="figma" className="w-8 h-8" />,
    desc: "Design tool"
  },
  {
    title: "Git",
    icon: <img src={git} alt="git" className="w-8 h-8" />,
    desc: "Version control"
  },
  {
    title: "React",
    icon: <img src={react} alt="react" className="w-8 h-8" />,
    desc: "Frontend framework"
  },
  {
    title: "Supabase",
    icon: <img src={supabase} alt="supabase" className="w-8 h-8" />,
    desc: "Database"
  },    
  {
    title: "Tailwind",
    icon: <img src={tailwind} alt="tailwind" className="w-8 h-8" />,
    desc: "CSS framework"
  },                
  {
    title: "TypeScript",
    icon: <img src={typescript} alt="typescript" className="w-8 h-8" />,
    desc: "Language"
  }
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-slate-50 via-slate-100 to-slate-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading gradient-text inline-flex items-center gap-2">
            {/* <Heart className="w-8 h-8" /> */}
            My go-to technologies
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 mx-auto max-w-6xl">
        {skills.map((skill, index) => (
            <div key={index} className="bg-white rounded-lg hover:bg-slate-100 p-6 hover:animate-float">
                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                    {skill.icon}
                    <div>
                        <h3 className="text-xl  font-body">{skill.title}</h3>
                        <p className="text-gray-600 text-sm hidden sm:block">{skill.desc}</p>
                    </div>
                </div>
            </div>
        ))}
      </div>
    </section>
  );
}