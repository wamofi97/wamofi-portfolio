// ThemeToggle.js
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || savedTheme === null) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else if (savedTheme === 'light') {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode);
    localStorage.setItem('theme', darkMode ? 'light' : 'dark');
  };

  return (
    <div className="fixed max-w-5xl z-30 top-0 w-full"> 
      <button onClick={toggleDarkMode} 
      className={`absolute md:top-[23px] top-[11px] md:right-4 right-[72px] flex items-center justify-center bg-neutral-200 rounded-2xl w-10 h-10 transition-colors bg-transparent
      ${darkMode ? 'bg-transparent md:bg-neutral-800 md:hover:bg-neutral-700' : 'bg-transparent md:bg-neutral-300/80 md:hover:bg-neutral-400'}`}>
      {darkMode ? (
        <Moon className="w-7 h-7" />
      ) : (
        <Sun className="w-7 h-7" />
      )}

      </button>
      
    </div>
  
  );
};

export default ThemeToggle;
