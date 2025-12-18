import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">LitFest 2026</div>
      <nav className="nav">
        <a href="#about">About</a>
        <a href="#events">Events</a>
        <a href="#speakers">Speakers</a>
        <a href="#timeline">Timeline</a>
        <a href="#register" className="register-btn">Register</a>
      </nav>
    </header>
  );
};

export default Header;