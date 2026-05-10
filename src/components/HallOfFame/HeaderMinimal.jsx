import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./HeaderMinimal.css";

const HeaderMinimal = () => {
  const navigate = useNavigate();

  return (
    <header className="header-minimal">
\
      <Link to="/" className="logo">
        <img src={logo} alt="LitFest 2026" />
      </Link>

      <nav className="nav-minimal">

        <Link to="/adminlogin" className="admin-link">
          Enter As Admin
        </Link>

        <button
          className="register-btn"
          onClick={() => navigate("/register")}
        >
          Register
        </button>

      </nav>

    </header>
  );
};

export default HeaderMinimal;