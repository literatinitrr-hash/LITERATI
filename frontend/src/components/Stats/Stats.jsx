import React from "react";
import "./Stats.css";

const Stats = () => {
  return (
    <section id="stats" className="stats_new">
      <h2>Stats</h2>
      <div className="grid">
        <div><h3>50+</h3><p>Authors</p></div>
        <div><h3>10k+</h3><p>Participants</p></div>
        <div><h3>30+</h3><p>Events</p></div>
      </div> 
    </section>
  );
};

export default Stats;