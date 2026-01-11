import React, { useState } from "react";
import "./admin.css";

const AdminLogin = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!identifier.trim() || !password.trim()) {
      setError("Please fill in all fields");
      return;
    }

    setError("");
    console.log({ identifier, password });
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