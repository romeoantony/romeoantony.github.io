import React from 'react';
import ProjectsList from './components/ProjectsList';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="name-title">Akshay Antony</h1>
        <p className="intro-text">Building digital experiences with code and creativity.</p>
        <div className="social-links">
          <a href="https://github.com/romeoantony" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
          <a href="https://www.linkedin.com/in/akshayantony/" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
        </div>
      </header>
      <main>
        <ProjectsList />
      </main>
      <footer className="app-footer">
        <p>© 2025 Akshay Antony</p>
      </footer>
    </div>
  );
}

export default App;
