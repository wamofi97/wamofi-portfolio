const projects = [
  {
    "title": "Wedding RSVP",
    "tech": "React, Tailwind CSS, PostgreSQL, Express, Node.js",
    "link": "https://wedding-rsvp.vercel.app/",
    "source": "https://github.com/andhikagilang/wedding-rsvp",
    "img": "wedding-rsvp.png"
  },
  {
    "title": "My Portfolio",
    "tech": "React, Tailwind CSS, Vercel",
    "link": "https://my-portfolio-andhikagilang.vercel.app/",
    "source": "https://github.com/andhikagilang/my-portfolio",
    "img": "my-portfolio.png"
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

        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4 mx-auto max-w-5xl z-10">
          {projects.map((project, index) => (
            <div key={index} className="group bg-neutral-300/40 dark:bg-neutral-900/50 hover:bg-teal-600/10 dark:hover:bg-teal-900/20 rounded-2xl p-6 hover:animate-float">
                <div className=" flex flex-col sm:flex-row items-center gap-2 sm:gap-4 ">
                  <img src={project.img} alt={project.title} className="w-8 h-8 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300" />
                  <div>
                    <h3 className="text-xl font-body">{project.title}</h3>
                    <p className="text-neutral-500 text-sm hidden sm:block">{project.tech}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-neutral-500 text-sm sm:hidden">{project.tech}</p>
                </div>
                <div className="mt-4">
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <button className="bg-teal-600 text-neutral-100 px-4 py-2 rounded-2xl hover:bg-teal-700 transition-colors duration-300">View Project</button>
                  </a>
                </div>
                <div className="mt-4">
                  <a href={project.source} target="_blank" rel="noreferrer">
                    <button className="bg-teal-600 text-neutral-100 px-4 py-2 rounded-2xl hover:bg-teal-700 transition-colors duration-300">Source Code</button>
                  </a>
                </div>
            </div>
          ))}
        </div> */}
      </section>
    )
  }
  