export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center py-20 px-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-teal-700 text-lg font-medium">Get in touch.</h3>
          <h2 className="sm:text-6xl text-5xl font-heading inline-flex items-center gap-2">
            CONTACT
          </h2>
        </div>
      </div>
      <div className="grid mx-auto max-w-xl px-4">
        <div>
          <p className="text-neutral-400 text-lg leading-relaxed sm:text-center mb-8 font-light">
            I'm always looking for new opportunities. If you'd like to chat, feel
            free to get in touch. I am currently looking for a{" "}
            <span className="font-medium">full-time position</span> as a software
            developer.
          </p>
        </div>
        <hr className="border-neutral-800 mb-8 mt-4"/>
        <div>
          <form>
            <div className="grid sm:grid-cols-2 grid-flow-row gap-4">
              <div>
                <label htmlFor="name" className="text-neutral-400">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-2xl px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder:text-neutral-400/50"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-neutral-400">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your email"
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-2xl px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder:text-neutral-400/50"
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="message" className="text-neutral-400">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your message"
                className="w-full bg-neutral-900 border border-neutral-800 rounded-2xl px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder:text-neutral-400/50"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-teal-500 text-neutral-800 hover:bg-teal-600 tracking-wide font-medium py-2 px-4 rounded-2xl mt-4"
            >
              SEND
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
