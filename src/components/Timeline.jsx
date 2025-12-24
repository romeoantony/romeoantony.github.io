import React, { useMemo } from 'react';
import timelineData from '../data/timeline.json';
import './Timeline.css';

const Timeline = () => {
    // Sort by start date (most recent first)
    const sortedData = useMemo(() => {
        return [...timelineData].sort((a, b) => {
            const getYear = (date) => parseInt(date.split(' ')[1] || date.split(' ')[0]);
            return getYear(b.startDate) - getYear(a.startDate);
        });
    }, []);

    return (
        <div className="max-w-4xl mx-auto px-4">
            <div className="space-y-6">
                {sortedData.map((item) => (
                    <div 
                        key={item.id}
                        className="group flex gap-8 pb-6 border-b border-neutral-200 dark:border-neutral-800 transition-colors duration-300 hover:border-primary dark:hover:border-primary"
                    >
                        {/* Date Column */}
                        <div className="w-32 flex-shrink-0">
                            <div className="text-sm font-bold text-neutral-900 dark:text-white font-mono-body transition-colors duration-300">
                                {item.startDate}
                            </div>
                            {item.endDate && (
                                <div className="text-xs text-neutral-500 dark:text-neutral-400 font-mono-body transition-colors duration-300">
                                    {item.endDate}
                                </div>
                            )}
                            <div className="mt-1 inline-block px-2 py-0.5 text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 sharp-border transition-colors duration-300">
                                {item.type}
                            </div>
                        </div>

                        {/* Content Column */}
                        <div className="flex-1 min-w-0">
                            <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-1 group-hover:text-primary transition-colors duration-300 font-display">
                                {item.title}
                            </h3>
                            <div className="text-sm text-neutral-600 dark:text-neutral-400 mb-2 font-mono-body transition-colors duration-300">
                                {item.organization} · {item.location}
                            </div>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-mono-body transition-colors duration-300">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;
