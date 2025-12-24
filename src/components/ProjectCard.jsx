import React from 'react';
import { motion } from 'framer-motion';
import './ProjectCard.css';

const ProjectCard = ({ project, onClick }) => {
    const { title, description, staticImage, tags } = project;
    
    return (
        <div 
            className="group bg-secondary rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-neutral-100 dark:border-neutral-700 flex flex-col h-full sharp-border cursor-pointer"
            onClick={onClick}
        >
            <div className="h-48 overflow-hidden relative">
                <img 
                    alt={title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    src={staticImage} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-sm font-medium font-mono-body">View Case Study →</span>
                </div>
            </div>
            
            <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2 group-hover:text-primary transition-colors font-display">
                    {title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4 line-clamp-3 font-mono-body">
                    {description}
                </p>
                
                <div className="mt-auto flex flex-wrap gap-2">
                    {tags && tags.map((tag, idx) => (
                        <span 
                            key={idx} 
                            className="px-2 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 text-xs font-medium rounded-none border border-neutral-200 dark:border-neutral-600 sharp-border font-mono-body transition-colors duration-300"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
