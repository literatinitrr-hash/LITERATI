import React, { useEffect, useRef } from 'react';
import './Timeline.css';

const data = [
  { event: "EVENT 1", date: "28 February " },
  { event: "EVENT 2", date: "1 March" },
  { event: "EVENT 3", date: "2 March" },
  { event: "EVENT 4", date: "3 March" },
  { event: "EVENT 5", date: "4 March" },
  { event: "EVENT 6", date: "5 March" },
  { event: "EVENT 7", date: "6 March" },
  { event: "EVENT 8", date: "7 March" },
  { event: "EVENT 9", date: "8 March" },
  { event: "EVENT 10", date: "9 March" },
];

const Timeline = () => {
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.5 }
    );

    itemsRef.current.forEach(item => {
      if (item) observer.observe(item);
    });
  }, []);

  return (
    <section className="timeline">
      <h2>TIMELINE</h2>

      <div className="timeline-wrapper">
        {/* Curvy Central Line */}
        <svg className="curve" viewBox="0 0 200 1400">
          <path d="
            M100 0
            C20 150, 180 300, 100 450
            C20 600, 180 750, 100 900
            C20 1050, 180 1200, 100 1400"
          />
        </svg>

        {/* Milestones */}
        <div className="timeline-content">
          {data.map((item, index) => (
            <div
              key={index}
              ref={el => (itemsRef.current[index] = el)}
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
