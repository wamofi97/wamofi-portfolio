import profile from "../assets/frame.png";
import resume from "/resume.pdf";
import { Link } from "react-scroll";
import { Github, Linkedin, Mail, BookUser, ChevronRight } from "lucide-react";
import malaysia from "/malaysia.svg";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center gap-x-8 gap-y-4 px-4 py-20 md:flex-row">
      <div className="group relative flex flex-col items-center justify-center">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-200 to-teal-400 opacity-40 blur-2xl transition-opacity group-hover:opacity-70"></div>
        <div className="relative rotate-3 rounded-full shadow-xl transition-transform duration-300 hover:rotate-0">
          <img
            src={profile}
            alt="Profile"
            className="h-52 min-w-52 rounded-full object-cover transition-all duration-300"
          />
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex flex-col space-y-2 text-center md:text-start">
          {/* <p className='z-10 w-fit md:mx-0 mx-auto animate-float bg-neutral-300/50 dark:bg-neutral-800/50 px-4 py-2 rounded-full text-sm flex items-center'><span className='w-[6px] h-[6px] inline-block rounded-full bg-teal-600 dark:bg-teal-300 mr-2 animate-pulse'></span>Available for work</p>   */}
          <p className="animate-float mx-auto flex w-fit items-center rounded-full bg-neutral-300/50 px-4 py-2 text-sm dark:bg-neutral-800/40 md:mx-0">
            <span className="mr-2 h-[6px] w-[6px] animate-pulse rounded-full bg-teal-600 dark:bg-teal-300"></span>
            Based from Malaysia
            <img
              className="ml-2 inline w-4"
              src={malaysia}
              alt="malaysia flag"
            />
          </p>
          <h1 className="text-3xl font-semibold sm:text-4xl md:text-5xl lg:text-6xl">
            {" "}
            Hi, I'm <span className="gradient-text font-bold">
              Wan Firdaus
            </span>{" "}
            <span className="animate-wave">👋 </span>
          </h1>
          <h2 className="text-xl font-light sm:text-2xl md:text-3xl">
            A <span className="font-semibold">frontend developer</span> that
            love to learn and build things.
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
          <div className="flex items-center justify-center gap-1">
            <a
              href="https://github.com/wamofi97"
              target="_blank"
              className="group relative rounded-2xl bg-neutral-300/80 p-3 transition-all duration-300 hover:-translate-y-1 dark:bg-neutral-800"
            >
              <Github className="h-5 w-5" />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 scale-0 rounded-md bg-teal-900 px-2 py-1 text-sm text-white shadow-md transition-transform duration-300 group-hover:scale-75">
                GITHUB
              </span>
            </a>
            <a
              href="https://linkedin.com/in/wanfirdausfauzi"
              target="_blank"
              className="group relative rounded-2xl bg-neutral-300/80 p-3 transition-all duration-300 hover:-translate-y-1 dark:bg-neutral-800"
            >
              <Linkedin className="h-5 w-5" />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 scale-0 rounded-md bg-teal-900 px-2 py-1 text-sm text-white shadow-md transition-transform duration-300 group-hover:scale-75">
                LINKEDIN
              </span>
            </a>
            <a
              href="mailto:wamofi.dev@gmail.com"
              target="_blank"
              className="group relative rounded-2xl bg-neutral-300/80 p-3 transition-all duration-300 hover:-translate-y-1 dark:bg-neutral-800"
            >
              <Mail className="h-5 w-5" />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 scale-0 rounded-md bg-teal-900 px-2 py-1 text-sm text-white shadow-md transition-transform duration-300 group-hover:scale-75">
                EMAIL
              </span>
            </a>
            <a
              href={resume}
              target="_blank"
              className="flex items-center gap-1 rounded-2xl border border-neutral-400/30 bg-neutral-300/80 px-4 py-2 transition-all duration-300 hover:-translate-y-1 dark:border-neutral-700 dark:bg-neutral-800"
            >
              <BookUser className="h-5 w-5" />
              Resume
            </a>
          </div>
          <Link
            to="projects"
            smooth={true}
            className="group relative inline-flex cursor-pointer items-center gap-2 rounded-xl bg-neutral-700 px-4 py-2 font-medium text-neutral-200 transition-all duration-300 hover:bg-teal-700 hover:text-neutral-50 hover:shadow-lg dark:bg-neutral-200 dark:text-neutral-700 dark:hover:bg-teal-300 dark:hover:text-neutral-700"
          >
            See My Work
            <span className="w-0 transition-[width] duration-300 ease-in-out group-hover:w-5">
              <ChevronRight className="h-5 w-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
