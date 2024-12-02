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
import html from "../assets/logos/html.png";
import css from "../assets/logos/css.png";

const skills = [
  {
    title: "HTML",
    source: html,
    desc: "Markup language",
  },
  {
    title: "CSS",
    source: css,
    desc: "Styling pages",
  },
  {
    title: "JavaScript",
    source: javascript,
    desc: "Language",
  },
  {
    title: "Vite",
    source: vite,
    desc: "Build tool",
  },
  {
    title: "React",
    source: react,
    desc: "Frontend framework",
  },
  {
    title: "Tailwind",
    source: tailwind,
    desc: "CSS framework",
  },
  {
    title: "TypeScript",
    source: typescript,
    desc: "Typed JavaScript",
  },
  {
    title: "Next.js",
    source: nextjs,
    desc: "Fullstack framework",
  },
  {
    title: "Node.js",
    source: nodejs,
    desc: "Server runtime",
  },
  {
    title: "Express",
    source: express,
    desc: "Backend framework",
  },
  {
    title: "PostgreSQL",
    source: postgres,
    desc: "Database",
  },
  {
    title: "Github",
    source: github,
    desc: "Version control",
  },
  {
    title: "Figma",
    source: figma,
    desc: "Design tool",
  },
];

export function Skills() {
  return (
    <section className="relative flex h-full flex-col justify-center px-4 py-20">
      <div className="mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="inline-flex items-center gap-2 font-heading text-[2.5rem] sm:text-5xl md:text-6xl">
            SKILLS
          </h2>
          <h3 className="text-lg font-medium text-teal-700">
            My go-to technologies.
          </h3>
        </div>
      </div>
      <div className="mx-auto flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group basis-[130px] rounded-2xl bg-neutral-300/60 p-5 hover:bg-teal-600/20 dark:bg-neutral-900/80 dark:hover:bg-teal-900/20 sm:basis-[160px] md:basis-auto"
          >
            <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-4">
              <img
                src={skill.source}
                alt={skill.title}
                className={`${skill.source === github || skill.source === nextjs || skill.source === express ? "dark:invert" : ""} h-8 object-cover transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110`}
              />
              <div>
                <h3 className="font-body text-lg">{skill.title}</h3>
                {/* <p className="hidden text-sm text-neutral-500 md:block">
                  {skill.desc}
                </p> */}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute -right-20 top-10 h-1/3 w-1/2 rounded-2xl bg-teal-400 opacity-20 blur-2xl sm:right-0 sm:w-1/5"></div>
      <div className="absolute -bottom-32 -left-20 h-1/3 w-1/2 rounded-3xl bg-teal-400 opacity-20 blur-3xl sm:left-10 sm:w-1/5"></div>
    </section>
  );
}
