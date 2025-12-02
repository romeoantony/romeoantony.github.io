import React from "react";
import projects from "../data/projects.json";

export default function Projects() {
  return (
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
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-8 highlightable dark:bg-slate-800 dark:shadow-2xl"
            data-skills={project.tags.join(" ").toLowerCase()}
          >
            <div className="flex items-center mb-4">
              <i className="fas fa-cubes text-2xl text-sky-500"></i>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 ml-4">
                {project.title}
              </h3>
            </div>
            <p className="text-slate-500 dark:text-slate-400 mb-4 font-medium">
              {project.description}
            </p>
            <ul className="space-y-3 text-slate-600 dark:text-slate-400 list-disc list-inside">
              {/* Assuming description is short, we might not need a list here unless we want to split it or add more details from JSON if available. 
                  The JSON has a 'description' field which is a string. 
                  The original code had a list. 
                  I will just display the description as a paragraph for now, or split it if it looks like it has multiple sentences? 
                  The JSON descriptions are single sentences. I'll stick to a paragraph. 
                  Wait, the original had a list of features. The JSON only has a summary description. 
                  I will render the tags as a list or badges to fill the space? 
                  The original had "data-skills" attribute. I added that.
                  Let's add the tags visually too.
              */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded text-sm text-slate-600 dark:text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
            </ul>

            <div className="mt-6 flex gap-4">
              {project.repoLink && (
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sky-600 hover:underline"
                >
                  View on GitHub <i className="fas fa-arrow-right text-sm"></i>
                </a>
              )}
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sky-600 hover:underline"
                >
                  Live Demo <i className="fas fa-external-link-alt text-sm"></i>
                </a>
              )}
            </div>
          </div>
        ))}

        {/* Static Certification Card */}
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
            In progress (Est. Completion: Dec 2025)
          </p>
          <ul className="space-y-3 text-slate-600 dark:text-slate-400 list-disc list-inside">
            <li>
              Covers <span className="font-semibold">ASP.NET Core</span>,
              RESTful API design, Azure deployment, and SQL data persistence,
              directly supporting the transition to cloud architecture.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
