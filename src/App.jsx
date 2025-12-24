import React from "react";
import ThemeToggle from "./components/ThemeToggle";
import FloatingNav from "./components/FloatingNav";
import Profile from "./components/Profile";
import JourneySection from "./components/JourneySection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark font-sans transition-colors duration-300 antialiased selection:bg-primary selection:text-white min-h-screen">
      <ThemeToggle />
      <FloatingNav />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <Profile />
        <JourneySection />
        <ProjectsSection />
        <Footer />
      </main>
    </div>
  );
}

export default App;
