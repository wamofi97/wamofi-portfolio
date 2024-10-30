

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto px-4">      
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading gradient-text inline-flex items-center gap-2">
            {/* <Heart className="w-8 h-8" /> */}
            About me
          </h2>
        </div>

        
        <div>
            <p className="text-xl text-gray-600 leading-relaxed text-center mb-3">
                After graduating with a degree in{" "}
                <span className="font-medium">Aerospace Engineering</span>, I decided to pursue my
                passion for programming. I enrolled in a coding bootcamp and learned{" "}
                <span className="font-medium">full-stack web development</span>.{" "}
                <span className="italic">My favorite part of programming</span> is the
                problem-solving aspect. I <span className="underline">love</span> the
                feeling of finally figuring out a solution to a problem. My core stack
                is{" "}
                <span className="font-medium">
                React, Next.js, Node.js, and PostgreSQL
                </span>
                . I am also familiar with TypeScript and Drizzle. I am always looking to
                learn new technologies. I am currently looking for a{" "}
                <span className="font-medium">full-time position</span> as a software
                developer.
            </p>

            <p className="text-xl text-gray-600 leading-relaxed text-center">
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
