import React from "react";

export default function Timeline() {
  return (
    <section id="timeline" className="py-16">
      <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-12 text-center">
        Career & Education Timeline
      </h2>
      <div className="relative max-w-3xl mx-auto pl-8">
        <div className="timeline-line"></div>

        <div className="timeline-item mb-12 highlightable" data-skills="msc">
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
              patient safety and compliance in CT imaging software by resolving
              5+ critical WPF defects. This action{" "}
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
              <span className="font-semibold">50 candidate meetings</span> per
              month.
            </p>
            <p>
              <i className="fas fa-code-branch text-sky-500 w-5"></i> Maintained
              code quality by actively participating in feature code reviews and
              providing constructive feedback on C# implementations.
            </p>
          </div>
        </div>

        <div className="timeline-item mb-12 highlightable" data-skills="btech">
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
  );
}
