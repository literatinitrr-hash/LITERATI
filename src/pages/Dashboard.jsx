import React from 'react'
import { Outlet } from "react-router-dom"
import Profile from './Profile'
import forest from '../assets/forest.jfif'
import Header from '../components/Header/Header'
import '../styles/Dashboard.css'
import LeaderboardProxy from './LeaderboardProxy'


function Dashboard() {
  return (
    <div className="dashboard">
      
      <img
        src={forest}
        alt="test"
        className="dashboard-bg"
      />

      <div className="dashboard-overlay" />
      <LeaderboardProxy />
      {/*<div className="dashboard-content">
        <Profile />
        <Outlet />
      </div> */}

    </div>
  )
}

export default Dashboard
