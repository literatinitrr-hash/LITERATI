import React from 'react'
import { Outlet } from "react-router-dom"
import forest from '../assets/forest.jfif'
import './Dashboard.css'

function Dashboard() {
  return (
    <div className="dashboard">
      
      <img
        src={forest}
        alt="test"
        className="dashboard-bg"
      />

      <div className="dashboard-overlay" />

      <div className="dashboard-content">
        <Outlet />
      </div>

    </div>
  )
}

export default Dashboard
