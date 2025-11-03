import React from "react";

export default function Skills() {
  return (
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
  );
}
