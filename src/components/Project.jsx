import { ExternalLink, Github } from 'lucide-react';
import portfolio from '../assets/portfolio.png';
import walimatul from '../assets/walimatul.png';

const projects = [
  {
    "title": "Wedding RSVP",
    "desc": "A simple RSVP website for wedding invitation",
    "tech": ["React", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", ],
    "link": "https://walimatul-rsvp.onrender.com/",
    "source": "https://github.com/wamofi97/wedding-rsvp",
    "img": walimatul
  },
  {
    "title": "Wan Firdaus Portfolio",
    "desc": "My personal portfolio website ",
    "tech": ["React", "Tailwind CSS", "Vercel"],
    "link": "https://wnfrds.vercel.app/",
    "source": "https://github.com/wamofi97/wamofi-portfolio",
    "img": portfolio
  },
]

export default function Project() {
    return (
      <section id="project" className="flex flex-col justify-center py-20 px-4">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="sm:text-6xl text-5xl font-heading inline-flex items-center gap-2">
              PROJECTS
            </h2>
            <h3 className="text-teal-700 text-lg font-medium">Bringing ideas to life.</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 mx-auto max-w-5xl z-10">
          {projects.map((project, index) => (
            <div key={index} className="group bg-neutral-300/40 dark:bg-neutral-900/50  rounded-2xl p-6 hover:animate-float">
                <div className="flex flex-col gap-2 sm:gap-4  ">
                    <div className='relative bg-neutral-900 rounded-2xl transition-all duration-300'>
                      <img src={project.img} alt={project.title} className="w-full h-full rounded-2xl duration-300 opacity-80 group-hover:opacity-30 transition-opacity" />
                      <div className="absolute opacity-0 group-hover:opacity-100 bottom-4 left-4 flex flex-wrap items-center gap-2 transition-opacity">
                          {project.tech.map((tech, index) => (
                              <p key={index} className="text-teal-400 text-sm ">• {tech}</p>
                          ))}
                      </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-body text">{project.title}</h3>
                        <p className="text-neutral-500 text-sm">{project.desc}</p>
                    </div>
                </div>
                {/* <div className="flex flex-wrap items-center gap-2 mt-4 transition-opacity duration">
                          {project.tech.map((tech, index) => (
                              <p key={index} className="text-sm text-teal-700 dark:text-neutral-200 border border-teal-700 dark:border-neutral-200/40 py-1 px-3 rounded-2xl ">{tech}</p>
                          ))}
                      </div> */}
                <div className="flex items-center justify-end gap-2 mt-4">
                    <a 
                    href={project.source}
                    target='_blank'
                    className="flex items-center gap-2 bg-neutral-700/20 dark:bg-neutral-300/20 py-2 px-4 rounded-2xl hover:text-teal-700 dark:hover:text-teal-300 font-medium"
                  >
                    <Github className="w-5 h-5" />
                    Source
                  </a>
                  <a href={project.link} target='_blank' className="flex items-center gap-2 bg-neutral-700/20 dark:bg-neutral-300/20 py-2 px-4 rounded-2xl hover:text-teal-700 dark:hover:text-teal-300 font-medium">
                      <ExternalLink className="w-5 h-5" />
                      Visit
                  </a>
                </div>

            </div>
          ))}
        </div>
      </section>
    )
  }
  