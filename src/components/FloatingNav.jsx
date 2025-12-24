import React from 'react';
import './FloatingNav.css';

const FloatingNav = () => {
    return (
        <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-2">
            <a 
                href="#profile" 
                title="Top"
                className="w-10 h-10 flex items-center justify-center bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-sm hover:shadow-md transition-all text-neutral-500 hover:text-primary dark:text-neutral-400 sharp-border"
            >
                <span className="material-icons text-sm">arrow_upward</span>
            </a>
            <a 
                href="#journey" 
                title="Journey"
                className="w-10 h-10 flex items-center justify-center bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-sm hover:shadow-md transition-all text-neutral-500 hover:text-primary dark:text-neutral-400 sharp-border"
            >
                <span className="font-bold text-xs font-display">J</span>
            </a>
            <a 
                href="#projects" 
                title="Projects"
                className="w-10 h-10 flex items-center justify-center bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-sm hover:shadow-md transition-all text-neutral-500 hover:text-primary dark:text-neutral-400 sharp-border"
            >
                <span className="font-bold text-xs font-display">P</span>
            </a>
        </div>
    );
};

export default FloatingNav;
