import {  useState } from "react";

const works = [
  {
    "title": "Service Desk Engineer",
    "company": "Infosys Sdn. Bhd.",
    "year": "Jan 2023 - Current",
    "desc": ["Managed and resolved technical issues reported by end-users through various communication channels, including calls, emails and ticketing systems.",
      "Cross trained in 2 different projects : Software as a Service(SAAS), Corporate Mobile",
      "Provided L1 and & L1.5 support for SAAS with technical troubleshooting and set up for customers using applications like Office 365 and Google Workspace",
      "Managed Domain Name & Hosting, website DNS and email DNS records." ]
  },
  {
    "title": "UI/UX Designer",
    "company": "Thifal Niaga Sdn. Bhd.",
    "year": "August 2022 - December 2022",
    "desc": ["Developed high-fidelity wireframe & prototype for social entrepeneurship company Santai Artisan and Thifal Niaga.",
      "Designed user interface, digital materials for websites, posters, banners & etc.",
      "Created and translated business requirements into sitemaps, user journeys, wireframes and navigation flows that leads towards intuitive user experiences."]
  },
  {
    "title": "Intern",
    "company": "ACTS Smart Solution Sdn. Bhd.",
    "year": "March 2021 - July 2021",
    "desc": ["Worked on the systematic review of Safety Assist & Motorcyclist Safety technologies for ASEAN market.",
      "Performed data collection & analysis of questionnaires and interviews ASEAN NCAP stakeholders."]
  }
]

const educations = [
  {
    "title": "Online Coding Bootcamp – PERN STACK 2024",
    "company": "KelasProgramming.com",
    "year": "Jan 2024 – June 2024"
  },
  {
    "title": "User Experience Design Bootcamp",
    "company": "General Assembly",
    "year": "Aug 2023 – December 2023"
  },
  {
    "title": "Bachelor of Engineering (Aerospace Engineering) (Honours)",
    "company": "International Islamic University Malaysia (IIUM)",
    "year": "Feb 2017 – Aug 2021"
  },
  {
    "title": "Foundation in Engineering and Computer Science",
    "company": "International Islamic University Malaysia (IIUM)",
    "year": "Sep 2015 - Dec 2016"
  }
]

export default function Experience() {
  const [option, setOption] = useState(1);
  const [openIndex, setOpenIndex] = useState(null);

const toggleAccordion = (index) => {
  setOpenIndex(openIndex === index ? null : index);
};

    return (
      <section id="project" className="flex flex-col justify-center pt-20 md:pb-32 sm:pb-48 pb-80 px-4 max-w-5xl overflow-hidden">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="md:text-6xl sm:text-5xl text-[2.5rem] font-heading inline-flex items-center gap-2">
              EXPERIENCES
            </h2>
            <h3 className="text-teal-700 text-lg font-medium">Work and Education.</h3>
          </div>
        </div>
        <div className="relative flex py-2 mb-8 mx-auto max-w-6xl border rounded-xl border-neutral-600/50 dark:border-neutral-400/50 transition-color">
          <button
            className={`z-10 rounded-xl w-16 transition-colors ${option === 1 && "text-neutral-100 dark:text-neutral-800"}`}
            onClick={() => setOption(1)}
          >
          Work
          </button>
          <button
            className={`z-10 rounded-xl w-24 transition-colors ${option === 2 && "text-neutral-100 dark:text-neutral-800"}`}
            onClick={() => setOption(2)}
          >
          Education
          </button>
          <div className={`absolute top-0 ${option === 1 ? "w-16" : "w-24 translate-x-16"} h-10 rounded-[0.7rem] bg-neutral-700 dark:bg-neutral-300  transition-all duration-500`}></div>
        </div>

        <div className={` flex flex-wrap justify-center gap-4 mx-auto relative`}>
            <div className={`basis-1/2 max-w-3xl  flex-grow flex flex-col gap-2 mb-4 mx-auto transition-all duration-1000 ${option === 1 ? "" : "-translate-x-full opacity-0"} `}>
              {works.map((work, index) => (
                <div key={index} className={` group transition-all bg-neutral-300/40 dark:bg-neutral-900/80 hover:bg-teal-600/10  dark:hover:bg-teal-900/20 rounded-2xl p-6`}>
                  <div className="flex justify-between items-start">
                    <div className="overflow-hidden">
                      <h3 className="text-xl font-body">{work.title}</h3>
                      <p className="text-teal-700">{work.company}</p>
                      <p className="text-neutral-500 text-sm">{work.year}</p>
                      <hr className="w-[75vw] opacity-0"></hr>
                      
                      {openIndex === index && (
                        <div className="">
                          {work.desc.map((item, lowerIndex) => (
                              <p key={lowerIndex} className="text-neutral-600 dark:text-neutral-400/80 mt-1"><span>• </span>{item}</p>
                          ))}
                        </div>
                      )}
                      
                    </div>
                    <button
                        className="absolute  right-8 text-xl text-neutral-600 hover:text-teal-700 dark:text-neutral-400 dark:hover:text-teal-700"
                        onClick={() => toggleAccordion(index)}
                      >
                        <span className={`transform ${openIndex === index ? "rotate-180" : ""} transition-transform`}>
                          ▼
                        </span>
                      </button>
                  </div>
                </div>
              ))}
            </div>
      
            <div className={`basis-1/2 max-w-3xl flex-grow flex flex-col gap-2 mx-auto  transition-all duration-1000 ${option === 2 ? "absolute " : "absolute translate-x-full opacity-0"} `}>
              {educations.map((education, index) => (
                <div key={index} className="group bg-neutral-300/40 dark:bg-neutral-900/80 hover:bg-teal-600/10 dark:hover:bg-teal-900/20 rounded-2xl p-6">
                  <div className="flex flex-col">
                    <div>
                      <h3 className="text-xl font-body">{education.title}</h3>
                      <p className="text-teal-700">{education.company}</p>
                      <p className="text-neutral-500 text-sm">{education.year}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
        </div>
      </section>
    )
  }
  