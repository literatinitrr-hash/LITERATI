import React from "react";
import "./Speakers.css";

const list = [
  { name: "Amit Sharma", title: "Author" },
  { name: "Rhea Kapoor", title: "Poet" }
];

const Speakers = () => {
  return (
    <section id="speakers" className="speakers">
      <h2>Speakers</h2>
      <div className="speaker-grid">
        {list.map((s, i) => (
          <div key={i} className="speaker-card">
            <h3>{s.name}</h3>
            <p>{s.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Speakers;