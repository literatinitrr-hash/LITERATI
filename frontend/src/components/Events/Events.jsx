import React from "react";
import "./Events.css";
import { Mic, BookOpen, PenTool } from "lucide-react";

const eventsData = [
  {
    name: "Open Mic",
    desc: "Showcase stories, poetry, or music.",
    icon: <Mic size={36} strokeWidth={1.8} />
  },
  {
    name: "Fan Fiction Arena",
    desc: "Rewrite classic tales in your voice.",
    icon: <BookOpen size={36} strokeWidth={1.8} />
  },
  {
    name: "StoryCraft Challenge",
    desc: "Write a story on the spot!",
    icon: <PenTool size={36} strokeWidth={1.8} />
  }
];


const Events = () => {
  return (
    <section id="events" className="events">
      <div className="floating-particles"></div>

      <div className="events-content">
        <h2 className="events-title">
          Events
          <span className="underline"></span>
        </h2>

        <div className="event-grid">
          {eventsData.map((event, index) => (
            <div key={index} className="event-card tilt">
              <div className="glow"></div>

              <div className="event-icon floating">{event.icon}</div>

              <h3>{event.name}</h3>
              <p>{event.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
