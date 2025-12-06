import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import timelineData from "../data/timeline.json";
import "./Timeline.css";

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(null);

  // Parse dates
  const parseDate = (dateStr) => {
    const [month, year] = dateStr.split(" ");
    const monthMap = {
      Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
      Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
    };
    return new Date(parseInt(year), monthMap[month] || 0);
  };

  // Sort by start date (oldest first for left-to-right display)
  const sortedData = [...timelineData].sort((a, b) => {
    return parseDate(a.startDate) - parseDate(b.startDate);
  });

  // Get year range for labels
  const years = [...new Set(sortedData.flatMap(item => [
    parseDate(item.startDate).getFullYear(),
    parseDate(item.endDate).getFullYear()
  ]))].sort((a, b) => a - b);

  return (
    <section className="timeline-section">
      <div className="horizontal-timeline">
        {/* Year labels */}
        <div className="timeline-years">
          {years.map(year => (
            <span key={year} className="year-label">{year}</span>
          ))}
        </div>

        {/* Timeline line with dots */}
        <div className="timeline-track">
          <div className="timeline-line"></div>
          {sortedData.map((item, index) => (
            <div
              key={item.id}
              className={`timeline-dot ${activeItem === item.id ? 'active' : ''} ${item.type}`}
              style={{ left: `${(index / (sortedData.length - 1)) * 100}%` }}
              onMouseEnter={() => setActiveItem(item.id)}
              onMouseLeave={() => setActiveItem(null)}
              onClick={() => setActiveItem(activeItem === item.id ? null : item.id)}
            >
              <span className="dot-marker"></span>
              <AnimatePresence>
                {activeItem === item.id && (
                  <motion.div
                    className="dot-tooltip"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="tooltip-type">{item.type === "work" ? "Work" : "Education"}</span>
                    <strong className="tooltip-title">{item.title}</strong>
                    <span className="tooltip-org">{item.organization}</span>
                    <span className="tooltip-date">{item.startDate} — {item.endDate}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
