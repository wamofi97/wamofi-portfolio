import react from "../assets/logos/react.svg";
import tailwind from "../assets/logos/tailwind.svg";
import typescript from "../assets/logos/typescript.svg";
import nextjs from "../assets/logos/nextjs.svg";
import postgres from "../assets/logos/postgres.png";
import { useState } from "react";

export default function About() {
  const [aero, setAero] = useState(false);
  const [love, setLove] = useState(0);
  const [grow, setGrow] = useState(false);

  console.log(love);

  return (
    <section id="about" className="flex flex-col justify-center px-4 py-20">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-16 text-center">
          <h2 className="inline-flex items-center gap-2 font-heading text-[2.5rem] font-bold sm:text-5xl md:text-6xl">
            ABOUT
          </h2>
          <h3 className="text-lg font-medium text-teal-700">Get to know me.</h3>
        </div>

        <div className="text-lg leading-relaxed text-neutral-700 *:mb-6 dark:font-light dark:text-neutral-400 sm:text-center sm:text-xl">
          <p>
            Hi there! I'm Wan Firdaus, a frontend developer with a bit of an
            unconventional journey a.k.a self taught. I started off with a
            degree in{" "}
            <span className="group relative inline font-medium">
              <button
                onClick={() => {
                  setAero(true);
                  setTimeout(() => {
                    setAero(false);
                  }, 1500);
                }}
                disabled={aero}
                className="cursor-pointer"
              >
                Aerospace Engineering{" "}
              </button>
              <span
                className={`absolute ${
                  aero
                    ? "-translate-y-96 translate-x-96 opacity-100 transition-transform duration-[1500ms]"
                    : "opacity-0"
                } text-3xl`}
              >
                ✈️
              </span>
            </span>
            {""} but soon realized my true passion was in creating things with
            code. So, I decided to switch gears and dive into web
            development—and I’ve loved every step of the way.
          </p>
          <p>
            These days, I enjoy building projects using{" "}
            <span className="group relative inline">
              <span className="font-medium">React, </span>
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 scale-0 transition-transform group-hover:scale-100">
                <img src={react} alt="react" className="size-8" />
              </span>
            </span>
            <span className="group relative inline">
              <span className="font-medium">Next.js, </span>
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 scale-0 transition-transform group-hover:scale-100">
                <img src={nextjs} alt="nextjs" className="size-8 dark:invert" />
              </span>
            </span>
            <span className="group relative inline">
              <span className="font-medium">Tailwind CSS, </span>
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 scale-0 transition-transform group-hover:scale-100">
                <img src={tailwind} alt="tailwind" className="size-8" />
              </span>
            </span>
            and
            <span className="group relative inline">
              <span className="font-medium"> PostgreSQL</span>
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 scale-0 transition-transform group-hover:scale-100">
                <img src={postgres} alt="postgres" className="size-8" />
              </span>
            </span>
            . I’m also picking up{" "}
            <span className="group relative inline">
              <span className="font-medium">Typescript </span>
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 scale-0 transition-transform group-hover:scale-100">
                <img
                  src={typescript}
                  alt="typescript"
                  className="size-8 bg-black"
                />
              </span>
            </span>{" "}
            as I go. What I{" "}
            <span className="group relative inline">
              <button
                className={`cursor-pointer underline transition-transform`}
                onClick={() => {
                  setLove((prev) => prev + 1);
                  if (love === 3) {
                    setLove(0);
                  }
                }}
              >
                love
              </button>
              <span
                onClick={() => {
                  setLove((prev) => prev + 1);
                  if (love === 3) {
                    setLove(0);
                  }
                }}
                className={`absolute -top-8 left-1/2 -translate-x-1/2 ${love === 0 && "scale-0"} ${love === 1 && "scale-[1]"} ${love === 2 && "-top-10 scale-[2]"} ${love === 3 && "-top-12 scale-[3]"} cursor-pointer transition-[transform,top]`}
              >
                ❤️
              </span>
            </span>{" "}
            most about programming is the problem-solving—it’s so satisfying
            when everything clicks into place and you see your work come to
            life.
          </p>
          <p>
            I’m always looking for new challenges and opportunities to{" "}
            <span
              onClick={() => {
                setGrow(true);
                setTimeout(() => {
                  setGrow(false);
                }, 3000);
              }}
              disabled={grow}
              className={`${grow && "text-4xl"} cursor-pointer font-medium transition-[font-size] duration-1000`}
            >
              grow
            </span>{" "}
            my skills. Whether it’s diving into a new technology or finding
            creative solutions to problems, I’m driven by a curiosity to keep
            learning and improving.
          </p>
          <p>
            <span className="italic">
              When I’m not <span className="font-medium">coding</span>,
            </span>{" "}
            you can usually find me relaxing with video games, watching movies,
            or learning something new—like playing the guitar! I’m currently
            looking for a full-time role as a{" "}
            <span className="font-medium">Frontend Developer</span> where I can
            grow, contribute, and create meaningful work.
          </p>
        </div>
      </div>
    </section>
  );
}
