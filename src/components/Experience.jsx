import { useState } from "react";

const works = [
  {
    "title": "Service Desk Engineer",
    "company": "Infosys Sdn. Bhd.",
    "year": "Jan 2023 - Current",
    "desc": "Resolved technical issues for end-users and provided L1/L1.5 support for Office 365 and Google Workspace. Managed website and email DNS records and cross-trained in multiple projects."
  },
  {
    "title": "UI/UX Designer",
    "company": "Thifal Niaga Sdn. Bhd.",
    "year": "August 2022 - December 2022",
    "desc": "Created wireframes, prototypes, and digital designs for websites and marketing materials, translating business requirements into user-friendly interfaces."
  },
  {
    "title": "Intern",
    "company": "ACTS Smart Solution Sdn. Bhd.",
    "year": "March 2021 - July 2021",
    "desc": "Reviewed safety technologies for ASEAN NCAP and conducted data analysis from stakeholder interviews and questionnaires."
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

    return (
      <section id="project" className="flex flex-col justify-center py-20 px-4">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="sm:text-6xl text-4xl font-heading inline-flex items-center gap-2">
              EXPERIENCES
            </h2>
            <h3 className="text-teal-700 text-lg font-medium">Work and Education.</h3>
          </div>
        </div>

        <div className="flex p-0.5 mb-8 mx-auto max-w-6xl border rounded-2xl border-neutral-600/50 dark:border-neutral-400/50 transition-all">
          <button
            className={`rounded-xl px-4 py-2.5 ${option === 1 ? "font-medium bg-neutral-700 dark:bg-neutral-300 text-neutral-100 dark:text-neutral-800" : ""}`}
            onClick={() => setOption(1)}
          >
            Work
          </button>
          <button
            className={`rounded-xl px-4 py-2 ${option === 2 ? "bg-neutral-700 dark:bg-neutral-300 text-neutral-100 dark:text-neutral-800" : ""}`}
            onClick={() => setOption(2)}
          >
            Education
          </button>
        </div>
  
        <div className={`flex flex-col gap-4 mx-auto max-w-2xl ${option === 1 ? "" : "hidden"} `}>
          {works.map((work, index) => (
            <div key={index} className="group bg-neutral-300/40 dark:bg-neutral-900/50 hover:bg-teal-600/10 dark:hover:bg-teal-900/20 rounded-2xl p-6">
              <div className="flex flex-col ">
                <div>
                  <h3 className="text-xl font-body">{work.title}</h3>
                  <p className="text-teal-700">{work.company}</p>
                  <p className="text-neutral-500 text-sm">{work.year}</p>
                  <p className="text-neutral-600 dark:text-neutral-400/80 mt-1"><span>• </span>{work.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
  
        <div className={`flex flex-col gap-4 mx-auto max-w-2xl ${option === 2 ? "" : "hidden"} `}>
          {educations.map((education, index) => (
            <div key={index} className="group bg-neutral-300/40 dark:bg-neutral-900/50 hover:bg-teal-600/10 dark:hover:bg-teal-900/20 rounded-2xl p-6">
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
        
    
      </section>
    )
  }
  