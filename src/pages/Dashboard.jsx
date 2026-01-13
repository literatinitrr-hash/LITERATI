import React from "react";
import LeaderboardProxy from "./LeaderboardProxy";
import forest from "../assets/forest.jfif";
import "../styles/Dashboard.css";

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
        <LeaderboardProxy />
      </div>
    </div>
  );
}

export default Dashboard;
