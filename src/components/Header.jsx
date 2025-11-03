import React from "react";

export default function Header() {
  return (
    <header
      id="home"
      className="w-full bg-slate-50 shadow-sm sticky top-0 z-50 dark:bg-slate-900 dark:shadow-xl"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a
              href="#home"
              className="text-xl font-bold text-slate-800 dark:text-slate-100"
            >
              Akshay Antony
            </a>
          </div>

          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#summary"
                  className="text-slate-600 hover:text-sky-500 dark:text-slate-300 dark:hover:text-sky-400 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Summary
                </a>
                <a
                  href="#timeline"
                  className="text-slate-600 hover:text-sky-500 dark:text-slate-300 dark:hover:text-sky-400 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Timeline
                </a>
                <a
                  href="#skills"
                  className="text-slate-600 hover:text-sky-500 dark:text-slate-300 dark:hover:text-sky-400 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Skills
                </a>
                <a
                  href="#projects"
                  className="text-slate-600 hover:text-sky-500 dark:text-slate-300 dark:hover:text-sky-400 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="text-slate-600 hover:text-sky-500 dark:text-slate-300 dark:hover:text-sky-400 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </a>
              </div>
            </div>

            <button
              id="theme-toggle"
              className="p-2 ml-4 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition duration-300"
            >
              <i id="theme-icon" className="fas fa-sun"></i>
            </button>

            <div className="md:hidden">
              <button
                id="mobile-menu-button"
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 dark:text-slate-400 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                <i className="fas fa-bars"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div
        id="mobile-menu"
        className="md:hidden hidden bg-slate-50 dark:bg-slate-900"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#summary"
            className="text-slate-600 hover:text-sky-500 dark:text-slate-300 dark:hover:text-sky-400 block px-3 py-2 rounded-md text-base font-medium"
          >
            Summary
          </a>
          <a
            href="#timeline"
            className="text-slate-600 hover:text-sky-500 dark:text-slate-300 dark:hover:text-sky-400 block px-3 py-2 rounded-md text-base font-medium"
          >
            Timeline
          </a>
          <a
            href="#skills"
            className="text-slate-600 hover:text-sky-500 dark:text-slate-300 dark:hover:text-sky-400 block px-3 py-2 rounded-md text-base font-medium"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-slate-600 hover:text-sky-500 dark:text-slate-300 dark:hover:text-sky-400 block px-3 py-2 rounded-md text-base font-medium"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-slate-600 hover:text-sky-500 dark:text-slate-300 dark:hover:text-sky-400 block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
