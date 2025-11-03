import React, { useEffect } from "react";
import initScroll from "./scroll.js";

export default function App() {
  useEffect(() => {
    // Initialize DOM-driven interactions after component mounts
    initScroll();
  }, []);
  return (
    <>
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

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="text-center pt-16 pb-20">
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-800 dark:text-slate-100 tracking-tight">
            Akshay Antony
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-sky-600 font-semibold">
            Software Engineer
          </p>
        </section>

        <section id="summary" className="py-16">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8 text-center">
            Professional Summary
          </h2>
          <p className="max-w-4xl mx-auto text-lg text-slate-600 dark:text-slate-400 leading-relaxed text-center">
            Highly motivated Software Engineer with 2 years of experience
            specializing in C# and WPF application development within regulated
            environments. Successfully delivered business-critical solutions,
            including leading defect resolution in CT control software that{" "}
            <span className="font-bold text-sky-600">
              reduced repeat scan incidents by 35%
            </span>
            . Now seeking to leverage strong foundational C# and Agile skills to
            transition into developing cloud-based .NET microservices and
            enterprise-level distributed systems.
          </p>
        </section>

        <section id="timeline" className="py-16">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-12 text-center">
            Career & Education Timeline
          </h2>
          <div className="relative max-w-3xl mx-auto pl-8">
            <div className="timeline-line"></div>

            <div
              className="timeline-item mb-12 highlightable"
              data-skills="msc"
            >
              <p className="font-semibold text-sky-600">
                September 2023 – May 2025
              </p>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mt-1">
                M.Sc. Computational Science
              </h3>
              <p className="text-md text-slate-500 dark:text-slate-400">
                Laurentian University, Sudbury, Ontario, Canada
              </p>
            </div>

            <div
              className="timeline-item mb-12 highlightable"
              data-skills="csharp wpf dotnet agile"
            >
              <p className="font-semibold text-sky-600">
                October 2021 – August 2023
              </p>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mt-1">
                Software Engineer
              </h3>
              <p className="text-md text-slate-500 dark:text-slate-400">
                Quest Global, Trivandrum, Kerala
              </p>
              <div className="mt-4 text-slate-600 dark:text-slate-400 space-y-2 text-base">
                <p>
                  <i className="fas fa-radiation text-sky-500 w-5"></i> Enhanced
                  patient safety and compliance in CT imaging software by
                  resolving 5+ critical WPF defects. This action{" "}
                  <span className="font-semibold">
                    reduced repeat scan incidents by 35%
                  </span>
                  , lowering patient radiation exposure.
                </p>
                <p>
                  <i className="fas fa-calendar-check text-sky-500 w-5"></i>{" "}
                  Spearheaded the full-stack development of a .NET/WPF Meeting
                  Scheduling application, automating booking for{" "}
                  <span className="font-semibold">30 Hiring Managers</span> and{" "}
                  <span className="font-semibold">50 candidate meetings</span>{" "}
                  per month.
                </p>
                <p>
                  <i className="fas fa-code-branch text-sky-500 w-5"></i>{" "}
                  Maintained code quality by actively participating in feature
                  code reviews and providing constructive feedback on C#
                  implementations.
                </p>
              </div>
            </div>

            <div
              className="timeline-item mb-12 highlightable"
              data-skills="btech"
            >
              <p className="font-semibold text-sky-600">2017 – 2021</p>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mt-1">
                B.Tech. Computer Science
              </h3>
              <p className="text-md text-slate-500 dark:text-slate-400">
                Mar Baselios College of Engineering and Technology, Trivandrum
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100">
              Technical Skills
            </h2>
            <p className="mt-2 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Click a skill to see where it was applied. Click again to clear
              selection.
            </p>
          </div>
          <div
            id="skills-container"
            className="mt-10 flex flex-wrap justify-center gap-3"
          >
            <button className="skill-tag" data-skill="csharp">
              C#
            </button>
            <button className="skill-tag" data-skill="dotnet">
              .NET Framework/Core
            </button>
            <button className="skill-tag" data-skill="wpf">
              WPF
            </button>
            <button className="skill-tag" data-skill="aspnet">
              ASP.NET Core
            </button>
            <button className="skill-tag" data-skill="sql">
              SQL Server
            </button>
            <button className="skill-tag" data-skill="docker">
              Docker
            </button>
            <button className="skill-tag" data-skill="git">
              Git
            </button>
            <button className="skill-tag" data-skill="agile">
              Agile/Scrum
            </button>
            <button className="skill-tag" data-skill="unittesting">
              Unit Testing
            </button>
            <button className="skill-tag" data-skill="rest">
              REST APIs
            </button>
          </div>
        </section>

        <section id="projects" className="py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100">
              Projects & Certifications
            </h2>
            <p className="mt-2 text-lg text-slate-600 dark:text-slate-400">
              Demonstrating practical application and continuous learning.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
            <div
              className="bg-white rounded-xl shadow-lg p-8 highlightable dark:bg-slate-800 dark:shadow-2xl"
              data-skills="aspnet rest docker sql unittesting"
            >
              <div className="flex items-center mb-4">
                <i className="fas fa-cubes text-2xl text-sky-500"></i>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 ml-4">
                  Cloud-Native Inventory Microservice
                </h3>
              </div>
              <p className="text-slate-500 dark:text-slate-400 mb-4 font-medium">
                Personal Project
              </p>
              <ul className="space-y-3 text-slate-600 dark:text-slate-400 list-disc list-inside">
                <li>
                  Designed and implemented a modular Inventory Microservice
                  using <span className="font-semibold">ASP.NET Core</span> Web
                  API, achieving sub-100ms response times.
                </li>
                <li>
                  Containerized the service using{" "}
                  <span className="font-semibold">Docker</span>, defining a
                  multi-stage build process to optimize image size and
                  streamline deployment.
                </li>
                <li>
                  Implemented Unit Tests for core business logic and integrated
                  Entity Framework Core for persistence to a SQL database.
                </li>
              </ul>
              <a
                href="https://github.com/romeoantony/InventoryService"
                className="inline-block mt-6 text-sky-600 hover:underline"
              >
                View on GitHub <i className="fas fa-arrow-right text-sm"></i>
              </a>
            </div>

            <div
              className="bg-white rounded-xl shadow-lg p-8 highlightable dark:bg-slate-800 dark:shadow-2xl"
              data-skills="aspnet rest"
            >
              <div className="flex items-center mb-4">
                <i className="fas fa-certificate text-2xl text-sky-500"></i>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 ml-4">
                  Microsoft Back-End Developer Certificate
                </h3>
              </div>
              <p className="text-slate-500 dark:text-slate-400 mb-4 font-medium">
                In progress (Est. Completion: Nov 2025)
              </p>
              <ul className="space-y-3 text-slate-600 dark:text-slate-400 list-disc list-inside">
                <li>
                  Covers <span className="font-semibold">ASP.NET Core</span>,
                  RESTful API design, Azure deployment, and SQL data
                  persistence, directly supporting the transition to cloud
                  architecture.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <footer id="contact" className="py-16 text-center">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Feel free to reach out via email or connect on social media.
          </p>
          <div className="mt-8 flex justify-center items-center space-x-6">
            <a
              href="mailto:romeoantony1999@gmail.com"
              className="text-slate-500 hover:text-sky-500 text-2xl"
            >
              <i className="fas fa-envelope"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/akshayantony/"
              target="_blank"
              className="text-slate-500 hover:text-sky-500 text-2xl"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/romeoantony"
              target="_blank"
              className="text-slate-500 hover:text-sky-500 text-2xl"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
          <p className="mt-8 text-slate-500 dark:text-slate-400">
            &copy; 2025 Akshay Antony. All Rights Reserved.
          </p>
        </footer>
      </main>
    </>
  );
}
