import React from "react";

export default function Contact() {
  return (
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
  );
}
