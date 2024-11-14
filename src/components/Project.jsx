import { ExternalLink, Github } from 'lucide-react';
import portfolio from '../assets/portfolio.png';
import walimatul from '../assets/walimatul.png';
import biarkamimasak from '../assets/biarkamimasak.png';

const projects = [
  {
    "title": "Biar Kami Masak",
    "desc": " A recipe app that suggests recipes based on user input. Integrate with AI model like OpenAI's GPT to suggest recipes based on available ingredients.",
    "tech": ["React", "Tailwind CSS", "TypeScript", "Clerk"],
    "link": "https://biarkamimasak.vercel.app/",
    "source": "https://github.com/wamofi97/biarkamimasak",
    "img": biarkamimasak
  },
  {
    "title": "Wedding RSVP",
    "desc": "A simple website for wedding invitation where users can RSVP and manage their attendance for the wedding.",
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
        <div className="mx-auto">
          <div className="text-center mb-16">
            <h2 className="md:text-6xl sm:text-5xl text-[2.5rem] font-heading inline-flex items-center gap-2">
              PROJECTS
            </h2>
            <h3 className="text-teal-700 text-lg font-medium">Bringing ideas to life.</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto max-w-5xl z-10">
          {projects.map((project, index) => (
            <div key={index} className="group flex flex-col justify-between bg-gradient-to-t from-neutral-300/50 to-neutral-300/80 dark:from-teal-700/10 dark:to-neutral-900 rounded-2xl p-5">
                <div className="flex flex-col gap-2 sm:gap-4">
                    <div className='relative bg-black rounded-2xl rounded-b-none transition-all duration-300 overflow-hidden'>
                      <img src={project.img} alt={project.title} className="w-full md:h-60 h-full object-cover rounded-2xl rounded-b-none opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
                      <div className="absolute left-4 opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 bottom-4  flex flex-wrap items-center gap-1 transition-all duration-500">
                          {project.tech.map((tech, index) => (
                              <p key={index} className="bg-neutral-400/30 text-neutral-300  py-1 px-2 rounded-lg text-sm font-medium ">{tech}</p>
                          ))}
                      </div>
                    </div>
                    <div className=''>
                        <h3 className="text-xl font-body text">{project.title}</h3>
                        <p className="text-neutral-500">{project.desc}</p>
                    </div>
                </div>
                
                <div className="flex items-center justify-end gap-2 m-4">
                    <a 
                    href={project.source}
                    target='_blank'
                    className="group flex items-center gap-2 bg-neutral-700/20 dark:bg-neutral-300/20 py-2 pl-3 pr-1 rounded-xl hover:text-teal-700 dark:hover:text-teal-300 font-medium"
                  >
                    <Github className="w-5 h-5" />
                    <span className='w-0 group-hover:w-16 opacity-0 group-hover:opacity-100 transition-all duration-300'>
                      Source
                    </span>   
                  </a>
                  <a href={project.link} target='_blank' className="group flex items-center gap-2 bg-neutral-700 text-neutral-200 dark:bg-neutral-200 dark:text-neutral-700  hover:bg-teal-600 dark:hover:bg-teal-600 hover:text-neutral-50 py-2 pl-3 pr-1 rounded-xl font-medium">
                      <ExternalLink className="w-5 h-5" />
                      <span className='w-0 group-hover:w-10 opacity-0 group-hover:opacity-100 transition-all duration-300'>Visit</span>
                  </a>
                </div>

            </div>
          ))}
        </div>
      </section>
    )
  }
  