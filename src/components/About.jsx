

export default function About() {
  return (
    <section id="about" className="flex flex-col justify-center pt-20 px-4">
      <div className="max-w-5xl mx-auto px-4">      
        <div className="text-center mb-16">
          <h2 className="sm:text-6xl text-5xl font-heading font-bold inline-flex items-center gap-2">
            ABOUT
          </h2>
          <h3 className="text-teal-700 text-lg font-medium">Get to know me.</h3>
        </div>

        
        <div>
            <p className="text-neutral-700 dark:text-neutral-400 text-lg leading-relaxed sm:text-center mb-8">
                After graduating with a degree in{" "}
                <span className="font-medium">Aerospace Engineering</span>, I decided to pursue my
                passion for programming. I enrolled in a coding bootcamp and learned{" "}
                <span className="font-medium">full-stack web development</span>.{" "}
                <span className="italic">My favorite part of programming</span> is the
                problem-solving aspect. I <span className="underline">love</span> the
                feeling of finally figuring out a solution to a problem. My core stack
                is{" "}
                <span className="font-bold">
                React, Next.js, Node.js, and PostgreSQL
                </span>
                . I am also familiar with TypeScript and Drizzle. I am always looking to
                learn new technologies. I am currently looking for a{" "}
                <span className="font-medium">full-time position</span> as a software
                developer.
            </p>

            <p className="text-neutral-700 dark:text-neutral-400 text-lg leading-relaxed sm:text-center">
                <span className="italic">When I'm not coding</span>, I enjoy playing
                video games and watching movies. I also enjoy{" "}
                <span className="font-medium">learning new things</span>. I'm currently
                learning how to play the guitar. 
            </p>
        </div>
        
      </div>
    </section>
  )
}
