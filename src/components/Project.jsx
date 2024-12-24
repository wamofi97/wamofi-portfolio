import { ExternalLink, Github } from "lucide-react";
import portfolio from "../assets/portfolio.webp";
import walimatul from "../assets/walimatul.webp";
import biarkamimasak from "../assets/biarkamimasak.webp";
import kampungdunedin from "../assets/kampungdunedin.webp";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Kampung Dunedin",
    desc: "A responsive website for a Malaysian family-owned food business based in Dunedin, New Zealand, highlighting their authentic Malaysian cuisine, menu offerings, and business story. Integrated with Sanity CMS to allow clients to manage and update content easily through a user-friendly interface.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity.io"],
    link: "https://kampung-dunedin.vercel.app/",
    status: "Live",
    source: "https://github.com/wamofi97/kampung-dunedin",
    img: kampungdunedin,
  },
  {
    title: "Biar Kami Masak",
    desc: "A fun AI-powered recipe app that suggests recipes based on user-provided ingredients. Leveraging GPT-4o-mini, the app delivers personalized recipe recommendations in a modern, user-friendly interface. It also incorporates AI response streaming for faster and more efficient results.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Clerk"],
    link: "https://biarkamimasak.vercel.app/",
    status: "Live",
    source: "https://github.com/wamofi97/biarkamimasak",
    img: biarkamimasak,
  },
  {
    title: "Walimatul RSVP",
    desc: "A wedding invitation platform allowing guests to RSVP and manage their attendance effortlessly. The website features secure user registration, dynamic RSVP management, and a modern, responsive design.",
    tech: ["React", "Tailwind CSS", "Node.js", "Express", "PostgreSQL"],
    link: "https://walimatul-rsvp.onrender.com/",
    status: "Ongoing",
    source: "https://github.com/wamofi97/wedding-rsvp",
    img: walimatul,
  },
  {
    title: "Wan Firdaus Portfolio",
    desc: "A modern portfolio website that offers a glimpse into my journey as a developer, featuring a showcase of my skills and projects. Designed to leave a lasting impression with a user-friendly interface and responsive design.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    link: "https://wnfrds.vercel.app/",
    status: "Live",
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
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)", y: -10 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              delay: index * 0.15,
              duration: 0.3,
            }}
            key={index}
            className="group flex flex-col justify-between rounded-2xl bg-neutral-300/60 p-1 transition-colors duration-300 hover:bg-teal-600/20 dark:bg-neutral-900 dark:hover:bg-teal-900/30"
          >
            <div className="flex flex-col gap-2">
              <div className="relative overflow-hidden rounded-2xl rounded-b-none bg-black transition-all duration-300">
                <img
                  src={project.img}
                  alt={project.title}
                  className="h-80 w-full rounded-2xl rounded-b-none object-cover opacity-80 transition-opacity duration-500 md:group-hover:opacity-30"
                />
                <div className="absolute bottom-4 left-4 hidden translate-y-full flex-wrap items-center gap-1 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 md:flex">
                  {project.tech.map((tech, index) => (
                    <p
                      key={index}
                      className="rounded-lg bg-neutral-400/30 px-2 py-1 text-sm font-medium text-neutral-300"
                    >
                      {tech}
                    </p>
                  ))}
                </div>
              </div>
              <div className="space-y-2 px-4 py-2">
                <div className="flex items-center justify-between">
                  <h3 className="text font-body text-xl">{project.title}</h3>
                  <p
                    className={`rounded-lg ${project.status === "Live" ? "bg-teal-600 text-neutral-300 dark:bg-teal-900" : "bg-neutral-400/30 dark:bg-neutral-300/20"} hidden px-2 py-1 text-sm font-medium md:block`}
                  >
                    {project.status}
                  </p>
                </div>
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

            <div className="flex items-center justify-between gap-2 px-4 pb-4 pt-2 md:justify-end">
              <p
                className={`rounded-lg ${project.status === "Live" ? "bg-teal-600 text-neutral-300 dark:bg-teal-900" : "bg-neutral-400/30 dark:bg-neutral-300/20"} block px-2 py-1 text-sm font-medium md:hidden`}
              >
                {project.status}
              </p>
              <div className="flex items-center gap-2">
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
          </motion.div>
        ))}
      </div>
    </section>
  );
}
