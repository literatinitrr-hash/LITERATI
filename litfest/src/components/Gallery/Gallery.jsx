import React from "react";
import "./Gallery.css";

const facultyData = [
  {
    id: 1,
    photo: "/Chetna.png",
    name: "Dr. Chetna Sharma Rajput",
    designation: "Dept of HSS, Faculty In-charge",
  },
  {
    id: 2,
    photo: "/Sanjay.jpg",
    name: "Dr. Sanjay Kumar",
    designation: "Dept of IT, Professor In-charge",
  },
  {
    id: 3,
    photo: "Vijay.jpg",
    name: "Dr. Y. Vijay Babu",
    designation: "Dept of HSS, Faculty In-charge",
  }
];


const Gallery = () => {
  return (
    <section id="gallery" className="gallery">
      <h2>Meet The Team</h2>
      <h3>Our Faculty</h3>
      <div className="faculty">
        
        {facultyData.map((faculty) => (
          <div key={faculty.id} className="gallery-card">
            <img
              src={faculty.photo}
              alt={faculty.name}
              className="faculty-img"
            />
            <h3>{faculty.name}</h3>
            <p>{faculty.designation}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
