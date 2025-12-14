import React from "react";
import "./Events.css";

const data = [
  { name: "Open Mic", desc: "Showcase stories, poetry, or music." },
  { name: "Fan Fiction Arena", desc: "Rewrite classic tales in your voice." },
  { name: "StoryCraft Challenge", desc: "Write a story on the spot!" }
];

const Events = () => {
  return (
    <section id="events" className="events">
      <h2>Events</h2>
      <div className="event-grid">
        {data.map((e, i) => (
          <div key={i} className="event-card">
            <h3>{e.name}</h3>
            <p>{e.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;