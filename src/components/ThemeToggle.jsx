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
      className={`absolute md:top-4 top-[74px] md:right-4 right-2 flex items-center justify-center bg-neutral-200 rounded-2xl w-11 h-11 transition-colors 
      ${darkMode ? ' bg-neutral-800 hover:bg-neutral-700' : ' bg-neutral-300/80 hover:bg-neutral-400'} `}>
      {darkMode ? (
        <Moon className="w-6 h-6" />
      ) : (
        <Sun className="w-6 h-6" />
      )}

      </button>
      
    </div>
  
  );
};

export default ThemeToggle;
