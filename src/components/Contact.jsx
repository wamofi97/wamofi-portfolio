import { ChevronRight, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage("");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(async (result) => {
        console.log(result.text);
        setStatusMessage("Message sent successfully!");
        setIsSending(false);
        setFormData({ name: "", email: "", message: "" });
        await new Promise((resolve) => setTimeout(resolve, 5000));
        setStatusMessage("");
      })
      .catch((error) => {
        console.log(error.text);
        setStatusMessage("Failed to send message, please try again later.");
        setIsSending(false);
      });
  };

  return (
    <section className="relative flex flex-col justify-center px-4 py-20">
      <div className="mx-auto">
        <div className="mb-16 text-center">
          <h2 className="inline-flex items-center gap-2 font-heading text-[2.5rem] sm:text-5xl md:text-6xl">
            CONTACT
          </h2>
          <h3 className="text-lg font-medium text-teal-700">Get in touch.</h3>
        </div>
      </div>
      <div className="z-10 mx-auto">
        <div>
          <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-400 sm:text-center">
            I'm always looking for new opportunities. If you'd like to chat,
            feel free to get in touch.
          </p>
        </div>
        <hr className="mx-auto my-8 w-full border-neutral-700/50" />
        <div>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-flow-row gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="mt-2 w-full rounded-2xl border border-neutral-400/30 bg-neutral-300/50 px-6 py-2 placeholder:text-neutral-400/50 focus:outline-none focus:ring-1 focus:ring-teal-500 dark:border-neutral-800 dark:bg-neutral-900"
                />
              </div>
              <div>
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your email"
                  className="mt-2 w-full rounded-2xl border border-neutral-400/30 bg-neutral-300/50 px-6 py-2 placeholder:text-neutral-400/50 focus:outline-none focus:ring-1 focus:ring-teal-500 dark:border-neutral-800 dark:bg-neutral-900"
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message"
                className="mt-2 w-full rounded-2xl border border-neutral-400/30 bg-neutral-300/50 px-6 py-2 placeholder:text-neutral-400/50 focus:outline-none focus:ring-1 focus:ring-teal-500 dark:border-neutral-800 dark:bg-neutral-900"
              ></textarea>
            </div>
            <div
              className={`mt-4 flex items-center ${statusMessage ? "justify-between" : "justify-end"}`}
            >
              {statusMessage && (
                <p className="text-teal-700">{statusMessage}</p>
              )}
              <button
                type="submit"
                className="group relative inline-flex cursor-pointer items-center gap-2 rounded-2xl bg-neutral-700 px-6 py-2 font-bold tracking-wide text-neutral-200 transition-all duration-300 hover:bg-teal-600 hover:text-neutral-50 hover:shadow-lg dark:bg-neutral-200 dark:text-neutral-700 dark:hover:bg-teal-600 dark:hover:text-neutral-50"
              >
                {isSending ? "Sending..." : "Send Message"}
                <span className="w-0 overflow-hidden transition-[width] duration-300 ease-in-out group-hover:w-5">
                  <ChevronRight className="h-6 w-6 animate-pulse text-neutral-200 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:text-neutral-50" />
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="mt-20 flex items-center justify-center gap-4">
        <a
          href="https://github.com/wamofi97"
          target="_blank"
          className="group relative rounded-2xl bg-neutral-300/80 p-3 transition-all duration-300 hover:-translate-y-1 dark:bg-neutral-800"
        >
          <Github className="h-5 w-5" />
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 scale-0 rounded-md bg-teal-900 px-2 py-1 text-sm text-white shadow-md transition-transform group-hover:scale-75">
            GITHUB
          </span>
        </a>
        <a
          href="https://linkedin.com/in/wanfirdausfauzi"
          target="_blank"
          className="group relative rounded-2xl bg-neutral-300/80 p-3 transition-all duration-300 hover:-translate-y-1 dark:bg-neutral-800"
        >
          <Linkedin className="h-5 w-5" />
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 scale-0 rounded-md bg-teal-900 px-2 py-1 text-sm text-white shadow-md transition-transform group-hover:scale-75">
            LINKEDIN
          </span>
        </a>
        <a
          href="mailto:wamofi.dev@gmail.com"
          target="_blank"
          className="group relative rounded-2xl bg-neutral-300/80 p-3 transition-all duration-300 hover:-translate-y-1 dark:bg-neutral-800"
        >
          <Mail className="h-5 w-5" />
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 scale-0 rounded-md bg-teal-900 px-2 py-1 text-sm text-white shadow-md transition-transform group-hover:scale-75">
            EMAIL
          </span>
        </a>
      </div>
      <div className="absolute -right-20 top-10 h-1/3 w-1/2 rounded-2xl bg-teal-400 opacity-20 blur-2xl sm:right-0 sm:w-1/5"></div>
      <div className="absolute -left-20 top-32 h-1/3 w-1/2 rounded-3xl bg-teal-400 opacity-20 blur-3xl sm:left-10 sm:w-1/5"></div>
      {/* <div className="absolute -bottom-72 sm:-left-80 -left-24 w-1/2 h-1/2 rotate-12 bg-teal-400 rounded-full blur-3xl opacity-30"></div> */}
    </section>
  );
}
