import React from "react";
import "./Speakers.css";
import speakers from "../../assets/speakers.mp4";
<<<<<<< HEAD
import shoeb from "../../assets/images/Dr. Shoeb Khan.jpg";
=======
import shoeb from "../../assets/images/Shoeb.jpeg";
>>>>>>> upstream/main

const list = [
  {
    name: "Dr. Shoeb Khan",
    qual: "MBBS, DNB Psychiatry",
    topic: "Literature, Music, and Life Hacks for a Calmer You",
    date: "Feb 5th, 2026",
    time: "11:00 AM",
    venue: "Hira Hall",
    img : shoeb,
  },
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
        preload="none"
      />

      <div className="speakers-overlay"></div>

      <div className="speakers-content">
        <h2>Speakers</h2>

        <div className="speaker-grid">
          {list.map((s, i) => (
            <div key={i} className="speaker-card">
                <div className="speaker-img">
                   <img src={s.img} alt={s.name} />
                </div>
              <div className="card-header">
                <h3>{s.name}</h3>
                {s.qual && <span className="speaker-qual">{s.qual}</span>}
                <p className="speaker-topic">"{s.topic}"</p>
              </div>

              <div className="card-details">
                <div className="detail-row">
                  <span className="detail-label">Date</span>
                  <span className="detail-value">{s.date}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Time</span>
                  <span className="detail-value">{s.time}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Venue</span>
                  <span className="detail-value">{s.venue}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
