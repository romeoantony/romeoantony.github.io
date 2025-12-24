import React from 'react';
import ProjectsList from './ProjectsList';

const ProjectsSection = () => {
    return (
        <section id="projects" className="py-20">
            <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-5xl font-bold text-neutral-900 dark:text-white mb-4 transition-colors duration-300" style={{ fontFamily: "'Gentium Book Plus', serif" }}>Projects</h2>
                <div className="h-1 w-20 bg-primary mx-auto sharp-border"></div>
            </div>
            <ProjectsList />
        </section>
    );
};

export default ProjectsSection;
