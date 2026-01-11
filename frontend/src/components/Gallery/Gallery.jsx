import React from "react";
import "./Gallery.css";

const photos = import.meta.glob("../../assets/images/*.{jpg,jpeg,png,webp}", { 
  eager: true, 
  import: "default" 
});

const resolveImage = (filename) => photos[`../../assets/images/${filename}`];

console.log(Object.keys(photos));


const facultyData = [
  {
    id: 1,
    photo: "Chetna.png",
    name: "Dr. Chetna Sharma Rajput",
    designation: "Dept of HSS, Faculty In-charge",
  },
  {
    id: 2,
    photo: "Sanjay.jpg",
    name: "Dr. Sanjay Kumar",
    designation: "Dept of IT, Professor In-charge",
  },
  {
    id: 3,
    photo: "Vijay.jpg",
    name: "Dr. Y. Vijay Babu",
    designation: "Dept of HSS, Faculty In-charge",
  },
];

const overallCoordinatorData = [
  {
    id: 101,
    photo: "Avish.jpg",
    name: "Avish Kumar Shrivastava",
    designation: "Overall Coordinator",
  },
  {
    id: 102,
    photo: "Kreeti.jpg",
    name: "Kreeti Soni",
    designation: "Overall Coordinator",
  },
  {
    id: 103,
    photo: "Prakhar.jpg", 
    name: "Prakhar Shrivastav",
    designation: "Overall Coordinator",
  },
]; 

const headCoordinatorData = [
  {
    id: 201, 
    photo: "Adarsh.jpg",
    name: "Adarsh Kumar",
    designation: "Head Coordinator (PR)",
  },
  {
    id: 202,
    photo: "Divyam.jpg",
    name: "Divyam Dixit",
    designation: "Head Coordinator (Web Dev)",
  },
  {
    id: 203,
    photo: "Dikshita.jpg",
    name: "V. Sri. Dixita",
    designation: "Head Coordinator (Doc)",
  },
  {
    id: 204,
    photo: "Aftab.jpg",
    name: "Md. Aftab Khan",
    designation: "Head Coordinator (Design)",
  },
  {
    id: 205,
    photo: "Twinkle.jpg",
    name: "Twinkle Patre",
    designation: "Head Coordinator (S&C)",
  },
  {
    id: 206,
    photo: "Mansi.jpg",
    name: "Mansi Gupta",
    designation: "Head Coordinator (S&C)",
  },
  {
    id: 207,
    photo: "Vaibhav.jpg",
    name: "Vaibhav Jain",
    designation: "Head Coordinator (EM)",
  },
];


const Gallery = () => {
  return (
    <section id="gallery" className="gallery">
      <h2>Meet The Team</h2>

      <h3>Our Faculty</h3>
      <div className="faculty">
        {facultyData.map((member) => (
          <div key={member.id} className="gallery-card">
            <img src={resolveImage(member.photo)} alt={member.name} className="faculty-img" />
            <h4>{member.name}</h4>
            <p>{member.designation}</p>
          </div>
        ))}
      </div>

      
      <h3>Overall Coordinators</h3>
      <div className="faculty overall-grid">
        {overallCoordinatorData.map((member) => (
          <div key={member.id} className="gallery-card">
            <img src={resolveImage(member.photo)} alt={member.name} className="faculty-img" />
            <h4>{member.name}</h4>
            <p>{member.designation}</p>
          </div>
        ))}
      </div>

      
      <h3>Head Coordinators</h3>
      <div className="faculty head-grid ">
        {headCoordinatorData.map((member) => (
          <div key={member.id} className="gallery-card">
            <img src={resolveImage(member.photo)} alt={member.name} className="faculty-img" />
            <h4>{member.name}</h4>
            <p>{member.designation}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;

