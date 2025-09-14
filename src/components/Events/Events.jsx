// src/components/Events/Events.jsx
import React from "react";
import { Link } from "react-router-dom";
import { events } from "../data/events";
import "./Events.css";

const Events = () => {
  return (
    <div className="events-container">
      <h1 className="events-heading">Our Events</h1>
      <div className="events-grid">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <img src={event.image} alt={event.title} className="event-image" />
            <h2>{event.title}</h2>

            {/* Use Link so ctrl/cmd-click opens in new tab, accessible */}
            <Link to={`/event-details/${event.id}`} className="view-more-btn">
              View More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
