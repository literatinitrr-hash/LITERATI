import React from "react";
import "./About.css";
import { Lightbulb, Pencil, Users } from "lucide-react"

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">

        <h2>About LitFest</h2>
        <p className="tagline">
          A celebration of literature, imagination, and creative energy
        </p>

        <p className="description">
          LitFest 2026 brings writers, readers, artists, and creators together to explore ideas,
          build community, and craft stories in all forms. From poetry and fiction to performances,
          design, and culture, it's a space to express, experiment, and connect.
        </p>

        <div className="features">
  <div className="feature-card">
    <div className="icon">
      <Lightbulb size={40} strokeWidth={1.7} />
    </div>
    <h3>Inspire</h3>
    <p>Workshops, talks, and readings that ignite fresh ideas.</p>
  </div>

  <div className="feature-card">
    <div className="icon">
      <Pencil size={40} strokeWidth={1.7} />
    </div>
    <h3>Create</h3>
    <p>Hands-on sessions, writing jams, and collaborative spaces.</p>
  </div>

  <div className="feature-card">
    <div className="icon">
      <Users size={40} strokeWidth={1.7} />
    </div>
    <h3>Connect</h3>
    <p>Meet people who share curiosity and passion for stories.</p>
  </div>
</div>

        <div className="stats">
          <div className="stat">
            <div>3</div>
            <span>Days</span>
          </div>
          <div className="stat">
            <div>15+</div>
            <span>Workshops</span>
          </div>
          <div className="stat">
            <div>2000+</div>
            <span>Attendees</span>
          </div>
        </div>

        <p className="footer-text">
          LitFest began as a small campus initiative to promote creation and discussion.
          Over time, it evolved into one of the most anticipated cultural fests, known for its
          immersive themes, vibrant community, and inclusive spirit.
        </p>

      </div>
    </section>
  );
};

export default About;
