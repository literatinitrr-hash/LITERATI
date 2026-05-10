import React, { useEffect, useRef } from "react";
import "./Timeline.css";
import timeline from "../../assets/timeline.mp4";

const data = [
  { event: "The Hindu Quiz", venue: "HIRA Hall", date: "4th February", time: "09:00 AM - 02:00 PM" },
  { event: "Tube Trolls 5.0 (Prelims)", venue: "HIRA Hall", date: "4th February", time: "05:00 PM - 06:30 PM" },
  { event: "Inauguration",venue: "HIRA Hall", date: "5th February", time: "10:00 AM" },
  { event: "Speaker Session",venue: "HIRA Hall", date: "5th February", time: "11:00 AM - 01:00 PM" },
  { event: "Storyforge Championship", venue: "IT Classroom", date: "5th February", time: "05:00 PM - 06:30 PM" },
  { event: "MUN", venue: "Venue to be disclosed soon", date: "6th February", time: "09:00 AM - 07:00 PM" },
  { event: "Essay Writing", venue: "IT Classroom", date: "7th February", time: "09:00 AM - 10:30 AM" },
  { event: "The Literary Marathon", venue: "F36/F38 Classroom", date: "7th February", time: "10:30 AM - 02:00 PM"},
  { event: "Debate", venue: "D2 Classroom", date: "7th February", time: "03:00 PM - 05:00 PM" },
  { event: "Poetry Slam R-1", venue: "HIRA Hall", date: "7th February", time: "05:00 PM - 07:00 PM" },
  { event: "Tube Trolls 5.0 (Finals)", venue: "HIRA Hall", date: "8th February", time: "09:30 AM - 11:30 AM" },
  { event: "Poetry Slam (Showdown)", venue: "HIRA Hall", date: "8th February", time: "11:30 AM - 01:30 PM" },
  { event: "Grand Finale AIRCRASH ",venue: "HIRA Hall", date: "8th February", time: "02:30 PM Onwards" },
  { event: "Valedictory and Prize Distribution", venue: "HIRA Hall", date: "8th February", time: "05:00 PM Onwards" },
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

  <video
    className="timeline-bg-video"
    src={timeline}
    autoPlay
    loop
    muted
    playsInline
    preload="none"
  />

  <div className="timeline-overlay"></div>

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
              className={`milestone ${index % 2 === 0 ? "left" : "right"}`}>
               <h3>{item.event}</h3>
               <p className="venue"><h4>{item.venue}</h4></p>
  <p className="date">{item.date}</p>

  {item.time && (
    <p className="time">{item.time}</p>
  )}
</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
