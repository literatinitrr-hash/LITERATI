import React, { useState } from "react";
import "./team.css";

const images = import.meta.glob("../../assets/images/*.{jpg,jpeg,png,webp}", { 
  eager: true, 
  import: "default" 
});

const resolveImage = (filename) => {
  const path = `../../assets/images/${filename}`;
  return images[path] || null;
};

const teamData = [
  {
    id: 1,
    name: "Divyam Dixit",
    role: "Web Dev Head",
    year: "4th Year",
    image: ""
  },
  {
    id: 2,
    name: "Abhinav Pandey",
    role: "Core Coordinator PR",
    year: "3rd Year",
    image: ""
  },
  {
    id: 3,
    name: "Atulya Jaiswal",
    role: "Executive",
    year: "2nd Year",
    image: "Atulya.jpg"
  },
  {
    id: 4,
    name: "Shourya Veer Singh",
    role: "Core Coordinator",
    year: "2nd Year",
    image: "Shourya.jpg"
  },
  {
    id: 5,
    name: "Naman Rangari",
    role: "Executive",
    year: "2nd Year",
    image: "Naman.jpg"
  },
  {
    id: 6,
    name: "Vaibhavi Mishra",
    role: "CC Web Dev",
    year: "2nd Year",
    image: "Vaibhavi.jpg"
  },
  {
    id: 7,
    name: "Gourav Mishra",
    role: "Executive",
    year: "2nd Year",
    image: "Gourav.jpg"
  },
  {
    id: 8,
    name: "Ashwast Gupta",
    role: "Member",
    year: "1st Year",
    image: "Ashwast.jpg"
  },
  {
    id: 9,
    name: "Gargee Dhale",
    role: "Member",
    year: "1st Year",
    image: ""
  }
];

const Team = () => {
  const [activeYear, setActiveYear] = useState("All Years");

  const years = ["All Years", "4th Year", "3rd Year", "2nd Year", "1st Year"];

  const filteredData =
    activeYear === "All Years"
      ? teamData
      : teamData.filter((member) => member.year === activeYear);

  return (
    <section id="team" className="team-section">
      <div className="team-container">
        <div className="team-header">
          <h2>Web-Development Team</h2>
        </div>

        <div className="team-filters">
          <span className="filter-label">Filter by Year:</span>
          <div className="filter-buttons">
            {years.map((year) => (
              <button
                key={year}
                className={`filter-btn ${activeYear === year ? "active" : ""}`}
                onClick={() => setActiveYear(year)}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
        <div className="team-grid">
          {filteredData.map((member) => (
            <div key={member.id} className="team-card">
              <div className="img-wrapper">
                {member.image ? (
                  <img src={resolveImage(member.image)} alt={member.name} />
                ) : (
                  <div className="no-image">No Image</div>
                )}
              </div>
              <div className="card-overlay">
                <h3>{member.name}</h3>
                <div className="card-tags">
                  <span className="tag year-tag">{member.year}</span>
                  <span className="tag role-tag">{member.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
