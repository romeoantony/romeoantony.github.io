import React from 'react';
import Timeline from './Timeline';

const JourneySection = () => {
    return (
        <section id="journey" className="py-20 border-t border-neutral-200 dark:border-neutral-800 transition-colors duration-300">
            <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-5xl font-bold text-neutral-900 dark:text-white mb-4 transition-colors duration-300 font-display">Journey</h2>
                <div className="h-1 w-20 bg-primary mx-auto sharp-border"></div>
            </div>
            <Timeline />
        </section>
    );
};

export default JourneySection;
