import React from "react";
import ProjectsList from "./components/ProjectsList";
import "./index.css";

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <img src="/HeroIcon.svg" alt="Profile Icon" className="hero-icon" />
        <span className="intro-greeting">Hi, I'm</span>
        <h1 className="name-title">Akshay</h1>
        <p className="intro-text">
          Building digital experiences with code and creativity.
        </p>
        <div className="social-links">
          <a
            href="https://github.com/romeoantony"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/akshayantony/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            LinkedIn
          </a>
        </div>
      </header>
      <main>
        <h2 className="section-title">Projects</h2>
        <ProjectsList />
      </main>
      <footer className="app-footer">
        <p>© 2025 Akshay Antony</p>
      </footer>
    </div>
  );
}

export default App;
