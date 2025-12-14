import React from "react";
import "./Hero.css";
import jungle from "../../assets/jungle.png";

const Hero = () => {
  return (
    <section className="hero" id="hero" style={{ backgroundImage: `url(${jungle})` }}>
      <div className="hero-content">
        <div className="hero-panel">
          <h1>LitFest 2026</h1>
          <p className="hero-sub">Dive into a world of stories, magic, and imagination.</p>
          <a className="explore-btn" href="#about">Explore</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;