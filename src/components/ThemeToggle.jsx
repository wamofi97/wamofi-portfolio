// ThemeToggle.js
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

import useSound from "use-sound";

import switchon from "../assets/switchon.mp3";
import switchoff from "../assets/switchoff.mp3";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [lightsOn, setLightsOn] = useState(false);
  const [play] = useSound(lightsOn ? switchon : switchoff, { volume: 0.4 });

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark" || savedTheme === null) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else if (savedTheme === "light") {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    setLightsOn(!lightsOn);
    play();
    document.documentElement.classList.toggle("dark", !darkMode);
    localStorage.setItem("theme", darkMode ? "light" : "dark");
  };

  return (
    <div className="fixed top-0 z-30 w-full max-w-5xl">
      <button
        onClick={toggleDarkMode}
        className={`absolute right-[72px] top-[11px] flex h-10 w-10 items-center justify-center rounded-2xl bg-neutral-200 bg-transparent transition-colors md:right-4 md:top-[23px] ${darkMode ? "bg-transparent md:bg-neutral-800 md:hover:bg-neutral-700" : "bg-transparent md:bg-neutral-300/80 md:hover:bg-neutral-400"}`}
      >
        {darkMode ? <Moon className="h-7 w-7" /> : <Sun className="h-7 w-7" />}
      </button>
    </div>
  );
};

export default ThemeToggle;
