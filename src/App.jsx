import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Book from "./components/Registration-Form/Book";
import Landing from "./pages/Landing";
import Register from "./pages/Register"
import Profile from "./pages/Profile"
import Login from "./components/Login/Login";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
import ClosedBook from "./components/ClosedBook/ClosedBook";
import Leaderboard from "./components/Dashboard/Leaderboard";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/admin"
import AdminLogin from "./components/admin/adminLogin";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
// import "./App.css";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Landing />} />

        <Route path="/register" element={<Register />}>
        <Route index element={<ClosedBook />} />
        <Route path="login" element={<Login />} />
        <Route path="book" element={<Book />} />
        </Route>

        <Route path="dashboard" element={<ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>}>
        <Route index element={<Leaderboard />} />
        </Route>

        <Route path="/adminlogin" element={<AdminLogin />} />
      </Routes>
    </AnimatePresence>
  );

};

function App() {
  return (
    <Router>
      <AudioPlayer />

      <div className="fireflies-container">
        <div className="firefly-group left delay-1" />
        <div className="firefly-group left delay-2" />
        <div className="firefly-group left delay-3" />
        <div className="firefly-group right delay-1" />
        <div className="firefly-group right delay-2" />
        <div className="firefly-group right delay-3" />
      </div>

      <AnimatedRoutes />
    </Router>
  );
}

export default App;