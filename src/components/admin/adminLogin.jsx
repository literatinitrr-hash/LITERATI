import React, { useState } from "react";
import "./admin.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
      e.preventDefault();
      console.log("Login button clicked");
  
      try {
        const API = import.meta.env.VITE_API_URL;
  
        const res = await axios.post(
          `${API}/api/admin/adminlogin`,
          { email, password }
        );
  
        console.log("Backend response:", res.data);
  
        localStorage.setItem("token", res.data.token);
        navigate("/admin/dashboard");
      } catch (err) {
        const message =
          err.response?.data?.message || "Something went wrong";
  
        setError(message);
      }
  
    };

  return (
    <div className="admin-login-wrapper">
      <form className="admin-login-card" onSubmit={handleSubmit}>
        <h1 className="admin-login-title">Admin Access</h1>

        <div className="admin-field">
          <label htmlFor="admin-identifier">Email or Username</label>
          <input
            id="admin-identifier"
            type="text"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            placeholder="admin@litfest.com"
          />
        </div>

        <div className="admin-field">
          <label htmlFor="admin-password">Password</label>
          <div className="admin-password-wrapper">
            <input
              id="admin-password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
            <button
              type="button"
              className="admin-toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        {error && <p className="admin-error">{error}</p>}

        <button type="submit" className="admin-login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;