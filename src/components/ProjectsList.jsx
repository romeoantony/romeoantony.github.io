import './ProjectsList.css';
import ProjectCard from './ProjectCard';

import projects from '../../data/projects.json';

const ProjectsList = () => {
    return (
        <div className="projects-list">
            {projects.map((project, idx) => (
                <ProjectCard key={idx} project={project} />
            ))}
        </div>
    );
};

export default ProjectsList;
