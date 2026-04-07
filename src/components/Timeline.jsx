import React, { useMemo, useState } from 'react';
import timelineData from '../data/timeline.json';
import './Timeline.css';

/* ── Helpers ──────────────────────────────────────────────────────── */
const MONTHS = { Jan:1, Feb:2, Mar:3, Apr:4, May:5, Jun:6, Jul:7, Aug:8, Sep:9, Oct:10, Nov:11, Dec:12 };

const toNum = (dateStr) => {
    if (!dateStr || dateStr === 'Present') return Infinity;
    const [mon, yr] = dateStr.split(' ');
    return parseInt(yr) * 100 + (MONTHS[mon] || 0);
};

const parseDateParts = (dateStr) => {
    if (!dateStr || dateStr === 'Present') return null;
    const [mon, yr] = dateStr.split(' ');
    return { month: MONTHS[mon] || 1, year: parseInt(yr) };
};

const calcDuration = (startStr, endStr) => {
    const s = parseDateParts(startStr);
    if (!s) return '';
    const now = new Date();
    const e = (endStr === 'Present' || !endStr)
        ? { month: now.getMonth() + 1, year: now.getFullYear() }
        : parseDateParts(endStr);
    if (!e) return '';
    const totalMonths = (e.year - s.year) * 12 + (e.month - s.month) + 1;
    const yrs = Math.floor(totalMonths / 12);
    const mos = totalMonths % 12;
    const parts = [];
    if (yrs > 0) parts.push(`${yrs} yr${yrs > 1 ? 's' : ''}`);
    if (mos > 0) parts.push(`${mos} mo${mos > 1 ? 's' : ''}`);
    return parts.join(' ');
};

const ICONS = { work: '💼', education: '🎓' };
const FILTERS = ['all', 'work', 'education'];

/* ── Component ────────────────────────────────────────────────────── */
const Timeline = () => {
    const [filter, setFilter] = useState('all');

    const sortedData = useMemo(() =>
        [...timelineData].sort((a, b) => toNum(b.endDate) - toNum(a.endDate)),
    []);

    const filteredData = useMemo(() =>
        filter === 'all' ? sortedData : sortedData.filter(item => item.type === filter),
    [sortedData, filter]);

    return (
        <div className="zz-timeline">
            {/* Filter tabs */}
            <div className="zz-filters">
                {FILTERS.map((f) => (
                    <button
                        key={f}
                        className={`zz-filter-btn ${filter === f ? 'zz-filter-btn--active' : ''}`}
                        onClick={() => setFilter(f)}
                    >
                        {f === 'all' ? '🔗' : ICONS[f]} {f.charAt(0).toUpperCase() + f.slice(1)}
                    </button>
                ))}
            </div>

            {/* Center spine */}
            <div className="zz-spine" />

            {filteredData.map((item, index) => {
                const isPresent = item.endDate === 'Present';
                const duration = calcDuration(item.startDate, item.endDate);
                const dateRange = `${item.startDate} — ${item.endDate}`;
                const side = index % 2 === 0 ? 'left' : 'right';

                return (
                    <div key={item.id} className={`zz-row zz-${side}`}>
                        {/* Card */}
                        <div className={`zz-card ${isPresent ? 'zz-card--active' : ''}`}>
                            {/* Connector arrow */}
                            <div className="zz-arrow" />

                            {/* Badges */}
                            <div className="zz-badges">
                                {isPresent && <span className="zz-badge-present">Current</span>}
                                <span className={`zz-badge-type zz-badge-type--${item.type}`}>
                                    {item.type}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="zz-title">{item.title}</h3>

                            {/* Organization + location */}
                            <div className="zz-meta">
                                <span className="zz-org">{item.organization}</span>
                                <span className="zz-sep">·</span>
                                <span className="zz-location">📍 {item.location}</span>
                            </div>

                            {/* Dates + duration */}
                            <div className="zz-dates">
                                <span className="zz-date-range">{dateRange}</span>
                                {duration && (
                                    <span className="zz-duration"> · {duration}</span>
                                )}
                            </div>

                            {/* Description */}
                            {item.description && (
                                <p className="zz-desc">{item.description}</p>
                            )}
                        </div>

                        {/* Center dot */}
                        <div className={`zz-dot ${isPresent ? 'zz-dot--active' : ''}`}>
                            <span className="zz-dot-icon">{ICONS[item.type] ?? '📌'}</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Timeline;
