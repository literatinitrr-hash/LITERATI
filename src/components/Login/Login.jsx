import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'





function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const handleGoogleLogin = async (credentialResponse) => {
    try {
      const API = import.meta.env.VITE_API_URL;

      const decoded = jwtDecode(credentialResponse.credential);
      const email = decoded.email;

      const res = await fetch(`${API}/api/auth/google-login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.msg);
      }

      // Store token
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      // Navigate to dashboard
      navigate("/dashboard");
    } catch (err) {
      alert(err.message || "Google login failed");
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login button clicked");

    try {
      const API = import.meta.env.VITE_API_URL;

      const res = await axios.post(
        `${API}/api/auth/login`,
        { email, password }
      );

      console.log("Backend response:", res.data);

      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (err) {
      const message =
        err.response?.data?.message || "Something went wrong";

      setError(message);
    }

  };


  return (
    <div className="login-root">
      <img src="/cave.gif" alt="background" className="login-bg" />
      <img src="/book-open.svg" alt="Book open" className="login-book" />

      <form onSubmit={handleSubmit} className="login-form">
        <h2 className="login-title">Login Form</h2>
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError("");
          }}

        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="error-text">{error}</p>}

        <button type="submit">Login</button>

        <GoogleLogin
          className="google-button"
          onSuccess={(handleGoogleLogin)}

          onError={(err) => { console.log("login failed") }} />

        <p className="register-text">
          Don’t have an account?{" "}
          <Link to="../book">Register</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
