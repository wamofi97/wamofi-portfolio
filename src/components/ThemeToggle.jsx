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
    <div className="fixed max-w-5xl z-30 bottom-0 w-full"> 
      <button onClick={toggleTheme} 
      className={`absolute bottom-4 right-4 flex items-center justify-center bg-neutral-200 rounded-full w-10 h-10 transition-colors 
      ${theme === 'dark' ? 'text-neutral-700 bg-neutral-300 hover:bg-neutral-400' : 'text-neutral-300 bg-neutral-600 hover:bg-neutral-800'} `}>
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
