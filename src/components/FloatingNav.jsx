import React from "react";
import "./FloatingNav.css";

const FloatingNav = () => {
  const scrollTo = (id) => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="floating-nav">
      <button
        className="floating-btn"
        onClick={() => scrollTo("top")}
        aria-label="Scroll to top"
      >
        ↑
      </button>
      <button
        className="floating-btn"
        onClick={() => scrollTo("journey")}
        aria-label="Go to Journey section"
      >
        J
      </button>
      <button
        className="floating-btn"
        onClick={() => scrollTo("projects")}
        aria-label="Go to Projects section"
      >
        P
      </button>
    </nav>
  );
};

export default FloatingNav;

