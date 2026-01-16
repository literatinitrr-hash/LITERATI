import React from "react";
import LeaderboardProxy from "./LeaderboardProxy";
import Leaderboard from "../components/Dashboard/Leaderboard";
import forest from "../assets/forest.jfif";
import "../styles/Dashboard.css";
import Profile from "./Profile";

function Dashboard() {
  return (
    <div className="dashboard">
      <img
        src={forest}
        alt="background"
        className="dashboard-bg"
      />

      <div className="dashboard-overlay" />

      <div className="dashboard-content">
        {/* <LeaderboardProxy /> */}
        <Profile />
        <Leaderboard />
      </div>
    </div>
  );
}

export default Dashboard;
