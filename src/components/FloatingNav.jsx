import React from 'react';
import './FloatingNav.css';

const FloatingNav = () => {
    return (
        <div className="floating-nav">
            <a href="#profile" title="Top" className="floating-btn">
                <span className="material-icons text-sm">arrow_upward</span>
            </a>
            <a href="#journey" title="Journey" className="floating-btn">
                <span className="font-bold text-xs font-display">J</span>
            </a>
            <a href="#projects" title="Projects" className="floating-btn">
                <span className="font-bold text-xs font-display">P</span>
            </a>
        </div>
    );
};

export default FloatingNav;
