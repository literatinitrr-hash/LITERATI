import React from 'react'
import forest from '../assets/forest.jfif'
import Leaderboard from '../components/Dashboard/Leaderboard'
import Scoreboard from '../components/Dashboard/Scoreboard'

function Dashboard() {
  return (
    <div className="relative min-h-screen w-full">
      
      <div
        className="absolute shrink-0 inset-0 bg-cover bg-center backdrop-blur-md"
        style={{ backgroundImage: `url(${download})` }}
      />
      
      <div className="absolute  bg-black/40 " />
      
      <div className="relative z-10 p-20">
        <Leaderboard />
        <Scoreboard />
      </div>

    </div>
  )
}

export default Dashboard
