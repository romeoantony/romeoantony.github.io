import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <button 
            aria-label="Toggle Dark Mode" 
            className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white dark:bg-neutral-800 shadow-lg border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 hover:text-primary dark:hover:text-primary transition-all focus:outline-none" 
            onClick={() => setDarkMode(!darkMode)}
        >
            <span className="material-icons text-xl dark:hidden">dark_mode</span>
            <span className="material-icons text-xl hidden dark:block">light_mode</span>
        </button>
    );
};

export default ThemeToggle;
