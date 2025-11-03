import React from "react";

export default function Summary() {
  return (
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
  );
}
