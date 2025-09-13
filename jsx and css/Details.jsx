// src/components/EventDetails/Details.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { events } from "../data/events"; // ✅ Make sure this path is correct

const Details = () => {
  const { id } = useParams();
  const event = events.find((e) => e.id === Number(id)); // ✅ Match numeric IDs

  if (!event) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>Event Not Found</h2>
        <p>We couldn't find the event you were looking for.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>{event.title}</h1>

      <img
        src={event.image}
        alt={event.title}
        style={{
          width: "100%",
          maxHeight: "400px",
          objectFit: "cover",
          borderRadius: "10px",
          margin: "20px 0",
        }}
      />

      <p style={{ fontSize: "18px", marginBottom: "20px" }}>
        {event.description}
      </p>

      {event.rules?.length > 0 && (
        <>
          <h2>Rules</h2>
          <ul>
            {event.rules.map((rule, index) => (
              <li key={index}>{rule}</li>
            ))}
          </ul>
        </>
      )}

      {event.prizes && (
        <>
          <h2>Prizes</h2>
          <p>{event.prizes}</p>
        </>
      )}
    </div>
  );
};

export default Details;
