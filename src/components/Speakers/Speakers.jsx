import React from "react";
import "./Speakers.css";
import speakers from "../../assets/speakers.mp4";

const list = [
  { name: "To Be Disclosed Soon", title: "Author" },
  { name: "To Be Disclosed Soon", title: "Poet" }
];

const Speakers = () => {
  return (
    <section id="speakers" className="speakers">

  <video
    className="speakers-bg-video"
    src={speakers}
    autoPlay
    loop
    muted
    playsInline
    preload="auto"
  />

  <div className="speakers-overlay"></div>

  <div className="speakers-content">
    <h2>Speakers</h2>

    <div className="speaker-grid">
      {list.map((s, i) => (
        <div key={i} className="speaker-card">
          <h3>{s.name}</h3>
          <p>{s.title}</p>
        </div>
      ))}
    </div>
  </div>

</section>

  );
};

export default Speakers;
