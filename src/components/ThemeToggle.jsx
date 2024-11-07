// ThemeToggle.js
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState("dark");

  // Check for saved theme in localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || savedTheme === null ) {
      setTheme("dark");
      document.documentElement.classList.add(theme);
    } else if (savedTheme === 'light') {
      setTheme("light");
      document.documentElement.classList.remove(theme);
    }
  }, [theme]);

  // Toggle dark mode
  const toggleTheme = () => {
    if (theme === 'dark') {
      document.documentElement.classList.remove(theme);
      localStorage.setItem('theme', "light");
    } else {
      document.documentElement.classList.add(theme);
      localStorage.setItem('theme', "dark");
    }
    setTheme(theme === 'dark' ? 'light' : 'dark');
    
  };

  return (
    <div className="fixed max-w-5xl z-30 top-0 w-full"> 
      <button onClick={toggleTheme} 
      className={`absolute md:top-4 top-[74px] md:right-4 right-2 flex items-center justify-center bg-neutral-200 rounded-2xl w-11 h-11 transition-colors 
      ${theme === 'dark' ? ' bg-neutral-800 hover:bg-neutral-700' : ' bg-neutral-300/80 hover:bg-neutral-400'} `}>
      {theme === 'dark' ? (
        <Moon className="w-6 h-6" />
      ) : (
        <Sun className="w-6 h-6" />
      )}

      </button>
      
    </div>
  
  );
};

export default ThemeToggle;
