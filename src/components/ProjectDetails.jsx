import React from 'react';
import { motion } from 'framer-motion';
import './ProjectDetails.css';

const ProjectDetails = ({ project, onClose }) => {
    const { title, description, staticImage, tags, demoLink, repoLink } = project;

    return (
        <motion.div 
            className="project-details-overlay" 
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
        >
            <motion.div 
                className="project-details-card" 
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.2 }}
            >
                <button className="close-button" onClick={onClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
                
                <div className="project-details-image-container">
                    <img 
                        src={staticImage} 
                        alt={title} 
                        className="project-details-image" 
                    />
                </div>

                <div className="project-details-content">
                    <h2 className="project-details-title">{title}</h2>
                    
                    <div className="project-details-links">
                        {repoLink && (
                            <a href={repoLink} target="_blank" rel="noopener noreferrer" className="project-details-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                </svg>
                                GitHub
                            </a>
                        )}
                        {demoLink && (
                            <a href={demoLink} target="_blank" rel="noopener noreferrer" className="project-details-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                    <polyline points="15 3 21 3 21 9"></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                                Live Demo
                            </a>
                        )}
                    </div>

                    <p className="project-details-description">{description}</p>
                    
                    <div className="project-details-tags">
                        {tags && tags.map((tag, idx) => (
                            <span key={idx} className="project-details-tag">{tag}</span>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ProjectDetails;
