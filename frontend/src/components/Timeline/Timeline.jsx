import React, { useEffect, useRef } from "react";
import "./Timeline.css";

const data = [
  { event: "Inauguration", date: "Coming Soon" },
  { event: "Speaker Session", date: "Coming Soon" },
  { event: "Main Quest - 1", date: "Coming Soon" },
  { event: "Side Quest - 1", date: "Coming Soon" },
  { event: "Side Quest - 2", date: "Coming Soon" },
  { event: "Main Quest - 2", date: "Coming Soon" },
  { event: "Quest for Seniors", date: "Coming Soon" },
  { event: "Quest for our juniors", date: "Coming Soon" },
  { event: "MUN", date: "Coming Soon" },
  { event: "Side Quest - 3", date: "Coming Soon" },
  { event: "Side Quest - 4", date: "Coming Soon" },
  { event: "Main Quest - 3", date: "Coming Soon" },
  { event: "Grand Finale", date: "Coming Soon" },
  { event: "Valedictory and Prize Distribution", date: "Coming Soon" }
];

const Timeline = () => {
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.3 }
    );

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="timeline" className="timeline">
      <h2>TIMELINE</h2>

      <div className="timeline-wrapper">
        <svg className="curve" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path
            d="
              M50,0 
              C10,5 90,10 50,15
              C10,20 90,25 50,30
              C10,35 90,40 50,45
              C10,50 90,55 50,60
              C10,65 90,70 50,75
              C10,80 90,85 50,90
              C10,95 90,98 50,100
            "
          />
        </svg>

        <div className="timeline-content">
          {data.map((item, index) => (
            <div
              key={index}
              ref={(el) => (itemsRef.current[index] = el)}
              className={`milestone ${index % 2 === 0 ? "left" : "right"}`}
            >
              <h3>{item.event}</h3>
              <p>{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
