// EventItem.js
import React from 'react';

const EventItem = ({ title, date, description, videoSrc, id }) => {
    return (
        <div className="timeline-item" style={{ position: 'relative' }}>
            <div className="timeline-content">
                <div className="banner">
                    <iframe
                        width="100%"
                        height="315"
                        src={videoSrc}
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
                <h2 className="event-title">{title}</h2>
                <p className="event-date">Date: {date}</p>
                <p className="event-description">{description}</p>
                <a href="#" className="event-link">Learn More</a>
            </div>
            <div className={`line line--${id.includes('2') ? 'right' : 'left'} scroll-animate`} id={id}></div>
        </div>
    );
};

export default EventItem;