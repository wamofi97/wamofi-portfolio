import { ChevronRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="flex flex-col justify-center py-20 px-4 relative">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="sm:text-6xl text-5xl font-heading inline-flex items-center gap-2">
            CONTACT
          </h2>
          <h3 className="text-teal-700 text-lg font-medium">Get in touch.</h3>
        </div>
      </div>
      <div className="grid mx-auto max-w-3xl px-4 z-10">
        <div>
          <p className="text-neutral-700 dark:text-neutral-400 text-lg leading-relaxed sm:text-center">
            I'm always looking for new opportunities. If you'd like to chat, feel
            free to get in touch. I am currently looking for a{" "}
            <span className="font-medium">full-time position</span> as a software
            developer.
          </p>
        </div>
        <hr className="border-neutral-700/50 w-full mx-auto my-8"/>
        <div>
          <form>
            <div className="grid sm:grid-cols-2 grid-flow-row gap-4">
              <div>
                <label htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="w-full bg-neutral-300/50 dark:bg-neutral-900 border border-neutral-400/30 dark:border-neutral-800 rounded-2xl px-6 py-2 mt-2 focus:outline-none focus:ring-1 focus:ring-teal-500 placeholder:text-neutral-400/50"
                />
              </div>
              <div>
                <label htmlFor="email">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your email"
                  className="w-full bg-neutral-300/50 dark:bg-neutral-900 border border-neutral-400/30 dark:border-neutral-800 rounded-2xl px-6 py-2 mt-2 focus:outline-none focus:ring-1 focus:ring-teal-500 placeholder:text-neutral-400/50"
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your message"
                className="w-full bg-neutral-300/50 dark:bg-neutral-900 border border-neutral-400/30 dark:border-neutral-800 rounded-2xl px-6 py-2 mt-2 focus:outline-none focus:ring-1 focus:ring-teal-500 placeholder:text-neutral-400/50"
              ></textarea>
            </div>
            <div className="flex items-center justify-end">
              <button
                type="submit"
                className="cursor-pointer group relative inline-flex items-center gap-2 transition-all duration-300 bg-neutral-700 text-neutral-200 dark:bg-neutral-200 dark:text-neutral-700 hover:bg-teal-600 dark:hover:bg-teal-600 hover:text-neutral-50 hover:shadow-lg tracking-wide font-bold py-2 px-6 rounded-2xl mt-4"
              >
                SEND
                <span 
                className="w-0 overflow-hidden group-hover:w-5 transition-[width] duration-300 ease-in-out"
              >
                <ChevronRight
                  className=" w-6 h-6 text-neutral-200  dark:text-neutral-700 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </span>
              </button>
              
            </div>
          </form>
        </div>
      </div>
      <div className="absolute top-10 sm:right-0 -right-20 sm:w-1/5 w-1/2 h-1/3 bg-teal-400 rounded-2xl blur-2xl opacity-20"></div>
      <div className="absolute top-32 sm:left-10 -left-20 sm:w-1/5 w-1/2 h-1/3 bg-teal-400 rounded-3xl blur-3xl opacity-20"></div>
      {/* <div className="absolute -bottom-72 sm:-left-80 -left-24 w-1/2 h-1/2 rotate-12 bg-teal-400 rounded-full blur-3xl opacity-30"></div> */}
    </section>
  )
}
