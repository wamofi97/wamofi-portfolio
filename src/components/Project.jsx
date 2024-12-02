import { ExternalLink, Github } from "lucide-react";
import portfolio from "../assets/portfolio.png";
import walimatul from "../assets/walimatul.png";
import biarkamimasak from "../assets/biarkamimasak.png";
import kampungdunedin from "../assets/kampungdunedin.png";

const projects = [
  {
    title: "Kampung Dunedin",
    desc: "A responsive website for a Malaysian family-owned food business based in Dunedin, New Zealand highlighting their authentic Malaysian cuisine, menu offerings, and business story while ensuring a user-friendly interface.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://kampung-dunedin.vercel.app/",
    source: "https://github.com/wamofi97/kampung-dunedin",
    img: kampungdunedin,
  },
  {
    title: "Biar Kami Masak",
    desc: "A fun AI-powered recipe app that suggests recipes based on user-provided ingredients. Leveraging GPT-4o-mini, the app delivers personalized recipe recommendations in a modern, user-friendly interface.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://biarkamimasak.vercel.app/",
    source: "https://github.com/wamofi97/biarkamimasak",
    img: biarkamimasak,
  },
  {
    title: "Walimatul RSVP",
    desc: "A wedding invitation platform allowing guests to RSVP and manage their attendance effortlessly. The website features secure user registration, dynamic RSVP management, and a modern, responsive design.",
    tech: ["React", "Tailwind CSS", "Node.js", "Express", "PostgreSQL"],
    link: "https://walimatul-rsvp.onrender.com/",
    source: "https://github.com/wamofi97/wedding-rsvp",
    img: walimatul,
  },
  {
    title: "Wan Firdaus Portfolio",
    desc: "A personal portfolio website designed with a clean and modern interface showcasing my skills, projects, and experiences as a developer.",
    tech: ["React", "Tailwind CSS", "Vercel"],
    link: "https://wnfrds.vercel.app/",
    source: "https://github.com/wamofi97/wamofi-portfolio",
    img: portfolio,
  },
];

export default function Project() {
  return (
    <section className="flex flex-col justify-center px-4 py-20">
      <div className="mx-auto">
        <div className="mb-16 text-center">
          <h2 className="inline-flex items-center gap-2 font-heading text-[2.5rem] sm:text-5xl md:text-6xl">
            PROJECTS
          </h2>
          <h3 className="text-lg font-medium text-teal-700">
            Bringing ideas to life.
          </h3>
        </div>
      </div>

      <div className="z-10 mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group flex flex-col justify-between rounded-2xl bg-neutral-300/60 p-1 transition-colors duration-300 hover:bg-teal-700/20 dark:bg-neutral-900/80 dark:hover:bg-teal-900/20"
          >
            <div className="flex flex-col gap-2">
              <div className="relative overflow-hidden rounded-2xl rounded-b-none bg-black transition-all duration-300">
                <img
                  src={project.img}
                  alt={project.title}
                  className="h-full w-full rounded-2xl rounded-b-none object-cover opacity-80 transition-opacity duration-500 group-hover:opacity-30 md:h-80"
                />
              </div>
              <div className="space-y-2 px-4 py-4 md:py-2">
                <h3 className="text font-body text-xl">{project.title}</h3>
                <div className="flex flex-wrap items-center gap-1 md:hidden">
                  {project.tech.map((tech, index) => (
                    <p
                      key={index}
                      className="rounded-md bg-neutral-400/30 px-2 py-1 text-sm font-medium text-neutral-600 dark:bg-neutral-300/20 dark:text-neutral-300"
                    >
                      {tech}
                    </p>
                  ))}
                </div>
                <p className="text-neutral-600/80 dark:text-neutral-400/70">
                  {project.desc}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pb-4 pr-4">
              <a
                href={project.source}
                target="_blank"
                className="group flex items-center gap-2 rounded-xl bg-neutral-700/20 py-2 pl-3 pr-1 font-medium hover:text-teal-700 dark:bg-neutral-300/20 dark:hover:text-teal-300"
              >
                <Github className="h-5 w-5" />
                <span className="w-0 opacity-0 transition-all duration-300 group-hover:w-16 group-hover:opacity-100">
                  Source
                </span>
              </a>
              <a
                href={project.link}
                target="_blank"
                className="group flex items-center gap-2 rounded-xl bg-neutral-700 py-2 pl-3 pr-1 font-medium text-neutral-200 hover:bg-teal-600 hover:text-neutral-50 dark:bg-neutral-200 dark:text-neutral-700 dark:hover:bg-teal-600"
              >
                <ExternalLink className="h-5 w-5" />
                <span className="w-0 opacity-0 transition-all duration-300 group-hover:w-10 group-hover:opacity-100">
                  Visit
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
