import React from 'react';

const Profile = () => {
    return (
        <section id="profile" className="min-h-[90vh] flex flex-col items-center justify-center text-center py-20 animate-fade-in-up">
            <div className="relative group mb-8">
                <div className="w-48 h-48 sm:w-64 sm:h-64 relative overflow-hidden rounded-full border-4 border-white shadow-2xl transition-transform duration-500 group-hover:scale-105">
                    <img 
                        alt="Akshay Profile Picture" 
                        className="w-full h-full object-cover" 
                        src="/profile.png" 
                    />
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300"></div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-transparent flex items-center justify-center text-4xl animate-bounce delay-700">
                    👋
                </div>
            </div>
            
            <p className="text-sm font-bold tracking-widest text-primary uppercase mb-3 font-display">Hi, I'm</p>
            <h1 className="text-6xl sm:text-8xl font-light text-neutral-900 dark:text-white mb-6 tracking-normal transition-colors duration-300 font-display">
                Akshay
            </h1>
            <p className="text-xl sm:text-2xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto font-light leading-relaxed mb-10 font-mono-body transition-colors duration-300">
                Crafting impactful digital experiences through innovative code and design.
            </p>
            
            <div className="flex items-center space-x-6">
                <a 
                    href="https://github.com/romeoantony" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-8 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-medium hover:bg-primary dark:hover:bg-primary hover:text-white dark:hover:text-white transition-all duration-300 sharp-border shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fillRule="evenodd"></path></svg>
                    <span>GitHub</span>
                </a>
                <a 
                    href="https://www.linkedin.com/in/akshayantony/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-8 py-3 bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700 font-medium hover:border-primary dark:hover:border-primary hover:bg-primary dark:hover:bg-primary hover:text-white dark:hover:text-white transition-all duration-300 sharp-border shadow-sm hover:shadow-md hover:-translate-y-0.5"
                >
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fillRule="evenodd"></path></svg>
                    <span>LinkedIn</span>
                </a>
            </div>
            
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-pulse hidden sm:block">
                <span className="material-icons text-neutral-400 text-3xl transition-colors duration-300">keyboard_arrow_down</span>
            </div>
        </section>
    );
};

export default Profile;
