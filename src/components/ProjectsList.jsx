import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import './ProjectsList.css';
import ProjectCard from './ProjectCard';
import ProjectDetails from './ProjectDetails';
import projects from '../../data/projects.json';

const ProjectsList = () => {
    const [selectedId, setSelectedId] = useState(null);

    return (
        <div className="projects-list">
            {projects.map((project, idx) => (
                <ProjectCard 
                    key={idx} 
                    project={project} 
                    onClick={() => setSelectedId(project.title)}
                />
            ))}

            <AnimatePresence>
                {selectedId && (
                    <ProjectDetails 
                        project={projects.find(p => p.title === selectedId)} 
                        onClose={() => setSelectedId(null)} 
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

export default ProjectsList;
