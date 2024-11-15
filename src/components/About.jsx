export default function About() {
  return (
    <section id="about" className="flex flex-col justify-center px-4 py-20">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-16 text-center">
          <h2 className="inline-flex items-center gap-2 font-heading text-[2.5rem] font-bold sm:text-5xl md:text-6xl">
            ABOUT
          </h2>
          <h3 className="text-lg font-medium text-teal-700">Get to know me.</h3>
        </div>

        <div>
          <p className="mb-8 text-lg font-light leading-relaxed text-neutral-700 dark:text-neutral-400 sm:text-center sm:text-xl">
            After graduating with a degree in{" "}
            <span className="font-medium">Aerospace Engineering</span>, I
            decided to pursue my passion for programming. I enrolled in a coding
            bootcamp and learned{" "}
            <span className="font-medium">full-stack web development</span>.{" "}
            <span className="italic">My favorite part of programming</span> is
            the problem-solving aspect. I{" "}
            <span className="underline">love</span> the feeling of finally
            figuring out a solution to a problem. My core stack is{" "}
            <span className="font-medium">
              React, Next.js, Node.js, and PostgreSQL
            </span>
            . I am also familiar with TypeScript and Drizzle. I am always
            looking to learn new technologies. I am currently looking for a{" "}
            <span className="font-medium">full-time position</span> as a
            software developer.
          </p>

          <p className="text-lg font-light leading-relaxed text-neutral-700 dark:text-neutral-400 sm:text-center sm:text-xl">
            <span className="italic">When I'm not coding</span>, I enjoy playing
            video games and watching movies. I also enjoy{" "}
            <span className="font-medium">learning new things</span>. I'm
            currently learning how to play the guitar.
          </p>
        </div>
      </div>
    </section>
  );
}
