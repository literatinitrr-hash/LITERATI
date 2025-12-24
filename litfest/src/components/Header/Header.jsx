import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

const Header = ({ onRegisterClick }) => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src={logo} alt="Litfest 2026" />
      </Link>

      <nav className="nav">
        <a href="#about">About</a>
        <a href="#events">Events</a>
        <a href="#speakers">Speakers</a>
        <a href="#timeline">Timeline</a>
        <a className="register-btn" onClick={onRegisterClick}>Register</a>
      </nav>
    </header>
  );
};

export default Header;
