import { useState } from "react";
// import { Link, scrollSpy } from "react-scroll";
import { Github, Linkedin, Mail } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export function Header({ activeSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-20 border-b border-neutral-400/80 shadow-md backdrop-blur-sm dark:border-neutral-700/80 dark:bg-transparent md:border-none md:bg-transparent md:shadow-none md:backdrop-blur-none`}
    >
      <nav className="mx-auto max-w-5xl px-4 py-4">
        <div className="flex items-center justify-between md:justify-center">
          <a
            href="#hero"
            className="gradient-text cursor-pointer font-logo text-xl font-bold md:hidden"
          >
            wamofi.dev
          </a>
          <ThemeToggle />
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="z-10 hover:text-neutral-400 md:hidden"
          >
            <div className="flex flex-col gap-[4px]">
              <div
                className={`h-[3px] w-6 rounded-full bg-neutral-800 transition-transform duration-500 dark:bg-neutral-300 ${isMenuOpen ? "translate-y-[7px] rotate-45" : ""}`}
              ></div>
              <div
                className={`h-[3px] rounded-full bg-neutral-800 transition-[width] duration-500 dark:bg-neutral-300 ${isMenuOpen ? "w-0" : "w-6"}`}
              ></div>
              <div
                className={`h-[3px] w-6 rounded-full bg-neutral-800 transition-transform duration-500 dark:bg-neutral-300 ${isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
              ></div>
            </div>
          </button>

          {/* Desktop menu */}
          <div className="hidden items-center gap-12 rounded-2xl border border-neutral-400/80 px-4 py-3 backdrop-blur-sm transition-colors dark:border-neutral-700/80 md:flex">
            <a
              href="#hero"
              className="gradient-text group cursor-pointer font-logo text-xl font-bold"
            >
              wamofi.dev
            </a>

            <div className="text-md flex items-center gap-8 font-medium uppercase">
              <a
                href="#skills"
                className={`${activeSection === "skills" ? "active-text" : ""} cursor-pointer transition-all hover:text-teal-500`}
              >
                Skills
              </a>
              <a
                href="#projects"
                className={`${activeSection === "projects" ? "active-text" : ""} cursor-pointer transition-all hover:text-teal-500`}
              >
                Projects
              </a>
              <a
                href="#experiences"
                className={`${activeSection === "experiences" ? "active-text" : ""} cursor-pointer transition-all hover:text-teal-500`}
              >
                Experiences
              </a>
              <a
                href="#about"
                className={`${activeSection === "about" ? "active-text" : ""} cursor-pointer transition-all hover:text-teal-500`}
              >
                About
              </a>
              <a
                href="#contact"
                className={`${activeSection === "contact" ? "active-text" : ""} cursor-pointer transition-all hover:text-teal-500`}
              >
                Contact
              </a>
            </div>
            {/* <ThemeToggle/> */}
          </div>
        </div>

        {/* Mobile menu */}

        <div
          className={`absolute right-0 top-0 w-2/3 bg-neutral-200/95 transition-all duration-500 ease-in-out dark:bg-neutral-950/95 sm:w-1/2 md:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex min-h-screen flex-col items-center justify-evenly">
            <div className="flex flex-col gap-12 text-2xl font-medium uppercase">
              <a
                href="#skills"
                className={`${activeSection === "skills" ? "active-text" : ""} cursor-pointer transition-all hover:text-teal-500`}
              >
                Skills
              </a>
              <a
                href="#projects"
                className={`${activeSection === "projects" ? "active-text" : ""} cursor-pointer transition-all hover:text-teal-500`}
              >
                Projects
              </a>
              <a
                href="#experiences"
                className={`${activeSection === "experiences" ? "active-text" : ""} cursor-pointer transition-all hover:text-teal-500`}
              >
                Experiences
              </a>
              <a
                href="#about"
                className={`${activeSection === "about" ? "active-text" : ""} cursor-pointer transition-all hover:text-teal-500`}
              >
                About
              </a>
              <a
                href="#contact"
                className={`${activeSection === "contact" ? "active-text" : ""} cursor-pointer transition-all hover:text-teal-500`}
              >
                Contact
              </a>
            </div>
            {/* <ThemeToggle/> */}
            <div className="flex items-center justify-center gap-8">
              <a
                href="https://github.com/wamofi97"
                target="_blank"
                className="transition-colors"
              >
                <Github className="h-8 w-8" />
              </a>
              <a
                href="https://linkedin.com/in/wanfirdausfauzi"
                target="_blank"
                className="transition-colors"
              >
                <Linkedin className="h-8 w-8" />
              </a>
              <a
                href="mailto:wamofi.dev@gmail.com"
                className="transition-colors"
              >
                <Mail className="h-8 w-8" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
