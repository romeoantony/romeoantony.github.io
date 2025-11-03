import React, { useEffect } from "react";
import initScroll from "./scroll.js";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Summary from "./components/Summary";
import Timeline from "./components/Timeline";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  useEffect(() => {
    // Initialize DOM-driven interactions after component mounts
    initScroll();
  }, []);

  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Hero />
        <Summary />
        <Timeline />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
