import React from 'react';
import { motion } from 'framer-motion';
import './ProjectCard.css';

const ProjectCard = ({ project, onClick }) => {
    const { title, description, staticImage, tags, demoLink, repoLink } = project;
    
    return (
        <motion.div 
            className="project-card" 
            onClick={onClick}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
        >
            <motion.div className="project-image-container">
                <motion.img className="project-image" src={staticImage} alt={title} />
            </motion.div>
            <motion.div className="project-content">
                <div className="project-buttons">
                    {repoLink && (
                        <a 
                            href={repoLink} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="project-button github-icon-link" 
                            aria-label="GitHub Repo"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                        </a>
                    )}
                    {demoLink && (
                        <a 
                            href={demoLink} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="project-button" 
                            aria-label="Live Demo"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                        </a>
                    )}
                </div>
                <motion.h3 className="project-title">{title}</motion.h3>
                <motion.p className="project-description">{description}</motion.p>
                <div className="project-tags">
                    {tags && tags.map((tag, idx) => (
                        <span key={idx} className="project-tag">{tag}</span>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ProjectCard;
