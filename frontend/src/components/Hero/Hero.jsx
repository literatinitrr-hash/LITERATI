import React, { useState } from "react";
import "./Hero.css";
import jungle from "../../assets/jungle.png";
import logo from "../../assets/logo.svg";

const Hero = () => {
  const [exiting, setExiting] = useState(false);

  const handleExplore = (e) => {
    e.preventDefault();
    setExiting(true);

    setTimeout(() => {
      const target = document.querySelector("#about");
      if (target) {
        target.setAttribute("data-hidden", "true");
        target.scrollIntoView({ behavior: "smooth", block: "start" });

        setTimeout(() => {
          target.classList.add("reveal");
          target.removeAttribute("data-hidden");
        }, 600);
      }
    }, 300);

    setTimeout(() => setExiting(false), 1200);
  };

  return (
    <section
      className={`hero ${exiting ? "exiting" : ""}`}
      id="hero"
      style={{ backgroundImage: `url(${jungle})` }}
    >
      <div className="hero-content">
        <div className="hero-panel">
          <img src={logo} alt="LitFest 2026" className="hero-logo" />
          
          <p className="hero-sub">Dive into a world of stories, magic, and imagination.</p>
          <a
            className="explore-btn"
            href="#about"
            onClick={handleExplore}
            aria-label="Explore about section"
          >
            Explore
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
