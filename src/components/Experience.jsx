import { ChevronRight } from "lucide-react";
import { useState } from "react";
import infosyslogo from "../assets/infosyslogo.webp";
import thifalniagalogo from "../assets/thifalniagalogo.webp";
import actslogo from "../assets/actslogo.webp";
import generalassembly from "../assets/generalassembly.svg";
import iium from "../assets/iium.webp";
import { motion } from "framer-motion";
import tektician from "../assets/tekticianlogo.jpg";

const works = [
  {
    title: "Frontend Developer",
    company: "Tektician Sdn. Bhd",
    logo: tektician,
    year: "April 2025 - Current",
    desc: [
      "Developed and maintained web applications using React, Next.js, and other modern front-end frameworks.",
      "Collaborated with cross-functional teams to design and implement user interfaces.",
      "Implemented responsive design and ensured cross-browser compatibility.",
      "Optimized code for performance and accessibility.",
    ],
  },
  {
    title: "Service Desk Engineer",
    company: "Infosys Sdn. Bhd.",
    logo: infosyslogo,
    year: "Jan 2023 - Jan 2024",
    desc: [
      "Managed and resolved technical issues reported by end-users through various communication channels, including calls, emails and ticketing systems.",
      "Cross trained in 2 different projects : Software as a Service(SAAS), Corporate Mobile",
      "Provided L1 and & L1.5 support for SAAS with technical troubleshooting and set up for customers using applications like Office 365 and Google Workspace",
      "Managed Domain Name & Hosting, website DNS and email DNS records.",
    ],
  },
  {
    title: "UI/UX Designer",
    company: "Thifal Niaga Sdn. Bhd.",
    logo: thifalniagalogo,
    year: "Aug 2022 - Dec 2022",
    desc: [
      "Developed high-fidelity wireframe & prototype for social entrepeneurship company Santai Artisan and Thifal Niaga.",
      "Designed user interface, digital materials for websites, posters, banners & etc.",
      "Created and translated business requirements into sitemaps, user journeys, wireframes and navigation flows that leads towards intuitive user experiences.",
    ],
  },
  {
    title: "Intern Trainee",
    company: "ACTS Smart Solution Sdn. Bhd.",
    logo: actslogo,
    year: "March 2021 - July 2021",
    desc: [
      "Worked on the systematic review of Safety Assist & Motorcyclist Safety technologies for ASEAN market.",
      "Performed data collection & analysis of questionnaires and interviews ASEAN NCAP stakeholders.",
    ],
  },
];

const educations = [
  {
    title: "User Experience Design Bootcamp",
    company: "General Assembly",
    logo: generalassembly,
    year: "Aug 2023 – Dec 2023",
  },
  {
    title: "Bachelor of Engineering (Aerospace Engineering) (Honours)",
    company: "International Islamic University Malaysia (IIUM)",
    logo: iium,
    year: "Feb 2017 – Aug 2021",
  },
  {
    title: "Foundation in Engineering and Computer Science",
    company: "International Islamic University Malaysia (IIUM)",
    logo: iium,
    year: "Sep 2015 - Dec 2016",
  },
];

export default function Experience() {
  const [option, setOption] = useState(1);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section
      className={`flex max-w-5xl flex-col justify-center overflow-hidden px-4 pb-40 pt-20 sm:pb-28 md:pb-20`}
    >
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-16 text-center">
          <h2 className="inline-flex items-center gap-2 font-heading text-[2.5rem] sm:text-5xl md:text-6xl">
            EXPERIENCES
          </h2>
          <h3 className="text-lg font-medium text-teal-700">
            Work and Education.
          </h3>
        </div>
      </div>
      <div className="transition-color relative mx-auto mb-8 flex max-w-6xl rounded-xl border border-neutral-600/50 py-2 dark:border-neutral-400/50">
        <button
          className={`z-10 w-16 rounded-xl transition-colors ${option === 1 && "text-neutral-100 dark:text-neutral-800"}`}
          onClick={() => setOption(1)}
        >
          Work
        </button>
        <button
          className={`z-10 w-24 rounded-xl transition-colors ${option === 2 && "text-neutral-100 dark:text-neutral-800"}`}
          onClick={() => setOption(2)}
        >
          Education
        </button>
        <div
          className={`absolute top-0 ${option === 1 ? "w-16" : "w-24 translate-x-16"} h-10 rounded-[0.7rem] bg-neutral-700 transition-all duration-500 dark:bg-neutral-300`}
        ></div>
      </div>

      <div className={`relative mx-auto flex flex-wrap justify-center gap-4`}>
        <div
          className={`mx-auto mb-4 flex max-w-3xl flex-grow basis-1/2 flex-col gap-2 transition-all duration-700 ${option === 1 ? "" : "-translate-x-full opacity-0"} `}
        >
          {works.map((work, index) => (
            <motion.div
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{
                delay: index * 0.2,
                duration: 0.5,
              }}
              key={index}
              onClick={() => toggleAccordion(index)}
              className="group cursor-pointer rounded-2xl bg-neutral-300/60 p-6 transition-all hover:bg-teal-600/20 dark:bg-neutral-900 dark:hover:bg-teal-900/30"
            >
              <div className="">
                <div className="flex flex-col justify-between gap-x-2 sm:flex-row">
                  <div className="flex sm:gap-4">
                    <div className="flex items-center justify-center">
                      <img
                        src={work.logo}
                        alt={work.title}
                        className="hidden w-14 saturate-[.7] sm:block"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="text-teal-700">{work.company}</p>
                        <span
                          className={`w-5 overflow-hidden text-xl ${openIndex === index ? "rotate-90" : "rotate-0"} transition-transform`}
                        >
                          <ChevronRight className="h-5 w-5 -translate-x-full opacity-60 transition-transform duration-500 group-hover:translate-x-0" />
                        </span>
                      </div>
                      <h3 className="font-body text-xl">{work.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-neutral-500 sm:text-end">
                    {work.year}
                  </p>
                </div>

                <hr className="w-[60vw] opacity-0"></hr>

                <div
                  className={`grid ${openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"} transition-[grid-template-rows] duration-500`}
                >
                  <div className="overflow-hidden">
                    {work.desc.map((item, lowerIndex) => (
                      <p
                        key={lowerIndex}
                        className="mt-1 text-neutral-600 dark:text-neutral-400/80"
                      >
                        <span>• </span>
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div
          className={`mx-auto flex max-w-3xl flex-grow basis-1/2 flex-col gap-2 transition-all duration-700 ${option === 2 ? "absolute delay-100" : "absolute translate-x-full opacity-0"} `}
        >
          {educations.map((education, index) => (
            <motion.div
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                delay: index * 0.2,
                duration: 0.5,
              }}
              key={index}
              className="group rounded-2xl bg-neutral-300/40 p-6 hover:bg-teal-600/20 dark:bg-neutral-900/80 dark:hover:bg-teal-900/30"
            >
              <div className="flex flex-col justify-between gap-x-2 sm:flex-row">
                <div className="flex sm:gap-4">
                  <div className="flex max-w-12 items-center justify-center">
                    <img
                      src={education.logo}
                      alt={education.title}
                      className="hidden object-cover saturate-[.7] sm:block"
                    />
                  </div>
                  <div>
                    <p className="text-teal-700">{education.company}</p>
                    <h3 className="font-body text-xl">{education.title}</h3>
                  </div>
                </div>
                <p className="text-sm text-neutral-500 sm:text-end md:min-w-36">
                  {education.year}
                </p>
              </div>
            </motion.div>
          ))}
          <hr className="w-[60vw] opacity-0"></hr>
        </div>
      </div>
    </section>
  );
}
