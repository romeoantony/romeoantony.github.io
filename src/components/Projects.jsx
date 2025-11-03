import React from "react";

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
              Designed and implemented a modular Inventory Microservice using{" "}
              <span className="font-semibold">ASP.NET Core</span> Web API,
              achieving sub-100ms response times.
            </li>
            <li>
              Containerized the service using{" "}
              <span className="font-semibold">Docker</span>, defining a
              multi-stage build process to optimize image size and streamline
              deployment.
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
              RESTful API design, Azure deployment, and SQL data persistence,
              directly supporting the transition to cloud architecture.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
